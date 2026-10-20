# Medición con Google Tag Manager

## Contenedor

- Cuenta: Claim Guardians, bajo `home@allclaimguardians.com`.
- Cuenta GTM: `6383758232`; contenedor interno: `267799791`.
- Contenedor público: `GTM-PC3TN25S`.
- Configuración preparada: `tracking/GTM-PC3TN25S.json`.
- GA4 existente: `G-R0GH89D0MF`. Clarity existente: `z0pqzdcaeo`.
- Versión 2 de GTM publicada el 20 de octubre de 2026 a las 09:47, bajo el correo comercial. Los acuerdos de creación fueron aceptados con confirmación específica del usuario.

## Diseño de la migración

`TagManager.astro` sustituye ambos cargadores directos. Solo carga en el dominio público y su alias www; los previews y localhost no cargan proveedores. Una protección evita insertar dos veces el contenedor. No se añade un iframe noscript: las tres etiquetas de este contenedor requieren JavaScript y los formularios conservan su alternativa sin JavaScript.

El contenedor contiene la etiqueta nativa Google Analytics, una etiqueta nativa GA4 Event y el cargador oficial de Clarity en Custom HTML. Los eventos `generate_lead` y `contact_click` llegan por `dataLayer.push`. No se usa un activador genérico de envío de formulario: una solicitud se mide después de que el servicio la acepte, una sola vez en la confirmación.

Se conservan los siete parámetros no personales: `lead_type`, `preferred_language`, `technical_source`, `declared_source`, `contact_method`, `landing_page`, `form_page`. Cada evento restablece los parámetros ausentes para que los clics posteriores no hereden detalles de una solicitud anterior. GTM recibe el callback y timeout en las propiedades que espera (`eventCallback` y `eventTimeout`).

Se desactiva la recopilación automática de datos proporcionados por el usuario que la nueva etiqueta de Google activa por defecto, incluidos correo, teléfono y dirección. También se desactiva la detección automática de formularios: su envío no equivale a una solicitud confirmada. Las máscaras explícitas de Clarity de ambos formularios se conservan. No se fabrican señales de consentimiento concedido; la migración no sustituye una configuración de consentimiento.

## Validación y publicación

Antes de sustituir los cargadores públicos, importar la configuración, revisar las etiquetas y publicar el contenedor. Después verificar el contenedor publicado con `GTM_VERIFY_PUBLISHED=1` y la prueba `tests/browser/gtm-published.spec.ts`: usa el build local bajo el origen canónico, descarga las librerías reales y captura todas las peticiones de colección sin enviarlas a Google Analytics o Clarity. Comprueba page views, un clic de contacto, una solicitud aceptada y ausencia de datos personales. No enviar una solicitud real de producción.

Publicar la web solo después de pasar esta verificación. Revisar el commit publicado por Netlify y la ausencia de cargadores directos en las páginas públicas.

Validación completada: build de 44 páginas, Astro check sin errores ni advertencias, 10 pruebas de envío/medición, 5 de SEO y 17 de navegador. La prueba adicional del contenedor publicado pasó: una vista por carga, un clic de correo, una solicitud confirmada, parámetros correctos, ninguna repetición de la solicitud al recargar y ausencia de los datos personales de prueba en las peticiones de Analytics. GA4 normaliza los valores nulos de parámetros como cadenas vacías; la comprobación verifica que no hereden el valor del evento anterior. Todas las peticiones de colección fueron interceptadas.

## Referencias

- https://developers.google.com/tag-platform/tag-manager/datalayer
- https://developers.google.com/tag-platform/devguides/existing
- https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking
