# Optimización de páginas comerciales y medición

19 de octubre de 2026.

## Cambios

- Orientación específica para Los Ángeles (incendio/humo), Miami (agua y condominios), West Palm Beach (techo/tormenta) y Carolina del Norte (tormenta y denegaciones). Incluye documentos, preguntas frecuentes y enlaces a organismos estatales.
- Formularios en las propias 17 páginas de ciudades FL/CA. Los enlaces de solicitud llevan al formulario de la página, con el estado ya identificado; no se pide seleccionar otra vez el mercado. El formulario de Carolina del Norte se conserva.
- Sustitución de 53 tarjetas de resultados económicos sin respaldo en los materiales disponibles: 46 de ciudades, dos de la página estatal NC y cinco de servicios. Los importes anteriores quedan en el historial y en el registro de revisión, no se presentan como casos verificados ni se rebautizan como ejemplos reales.
- Sustitución de estadísticas sin fuente suficiente en la página NC y de una afirmación general de mejora del 30–700% en la página de huracanes.
- Preparación por tipo de daño en cinco servicios, con enlaces hacia las páginas prioritarias.
- Corrección del texto que presentaba el 25% de daño en un techo de Florida como reemplazo completo obligatorio en todo caso. La respuesta visible y el marcado FAQ indican que existen excepciones y que código y cobertura son preguntas distintas.
- Nuevo contexto landing_page/form_page en Netlify y eventos de contacto. Se conserva la primera página de la sesión y la página del formulario tras navegar a confirmación, sin enviar consultas de URL, fragmentos ni rutas privadas. Solo se aceptan rutas públicas enumeradas. La política de privacidad describe esta función.
- Preguntas visibles y marcado FAQ de los mercados proceden del mismo contenido. Se eliminaron las preguntas antiguas sin uso para evitar ediciones contradictorias.

## Validación

Revisión de Astro sin errores, advertencias ni observaciones. Nueve pruebas unitarias y diez pruebas de navegador aprobadas. Se comprobó que una entrada desde Los Ángeles seguida del formulario de contacto conserva ambas páginas en la solicitud y en el evento de confirmación, no retiene una consulta de URL privada y no vuelve a medir el evento al recargar la confirmación. Todas las solicitudes de las pruebas se interceptaron localmente; no se enviaron nuevos avisos al equipo.

Se comprobaron 2.378 enlaces internos/anclas y 141 bloques JSON-LD en 45 archivos HTML sin errores. Las preguntas prioritarias coinciden con sus respuestas visibles y se conserva una única entidad de organización.

## Medición

Propiedad GA4 All Claim Guardians (559688209), flujo G-R0GH89D0MF. Se añaden dos dimensiones con alcance Event: Entry page → landing_page; Form page → form_page. La dimensión nativa Landing page y estas dimensiones de evento tienen funciones distintas: las nuevas acompañan cada solicitud/contacto medido por esta implementación.

Revisar solicitudes y generate_lead por Entry page y Form page. Separar contact_click de formularios confirmados. Clic no equivale a conversación ni cliente. Cruzar con la cualificación comercial registrada por el equipo antes de atribuir ventas.

Los datos nuevos empiezan a recogerse con esta publicación. No reconstruyen atribución histórica. Esperar el procesamiento de GA4 para informes; con los pequeños volúmenes actuales se deben informar recuentos y denominadores, sin interpretar variaciones diarias como resultados concluyentes.

## Fuentes consultadas

- California DOI, recursos de incendios: https://www.insurance.ca.gov/01-consumers/140-catastrophes/WildfireResources.cfm
- NC DOI, pólizas de vivienda y asistencia: https://www.ncdoi.gov/consumers/homeowners-insurance
- Florida CFO, preguntas de póliza/reclamación: https://www.myfloridacfo.com/Division/ICA/fullcoverage/homeowners/beyourownadvocate
- Florida Senate, 2025 Statutes 553.844(5), excepción de techos: https://www.flsenate.gov/Laws/Statutes/2025/553.844

No se afirma haber verificado una licencia de California, expedientes de clientes, resultados comerciales o una nueva medición AEO. Esas verificaciones requieren evidencia adicional.
