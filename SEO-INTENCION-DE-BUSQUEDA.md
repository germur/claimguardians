# Intención de búsqueda como criterio editorial

Solicitado expresamente por el usuario el 19 de octubre de 2026. Aplicar este criterio antes de nuevos cambios de contenido.

## Qué se evalúa

La intención es la tarea que la persona quiere completar con una búsqueda. Se estudian el significado y contexto de la consulta, los resultados observables y la página que mejor permite completar esa tarea. La clasificación informacional/comercial/transaccional/navegacional es útil, pero no reemplaza entender el problema concreto, el estado de decisión y las dudas que impiden actuar.

Para cada URL: consulta principal y variantes, necesidad, evidencia de resultados, intención dominante/secundaria, formato, respuesta inicial, argumentos verificables, acción apropiada y páginas que podrían competir por la misma necesidad. Las impresiones de Search Console muestran exposición, no demuestran intención ni demanda de contratación por sí solas.

## Observación previa a esta revisión

Se hicieron búsquedas exploratorias el 19 de octubre: public adjuster Los Angeles, public adjuster Miami, public adjuster West Palm Beach, public adjuster North Carolina, denied insurance claim North Carolina, denied homeowners insurance claim North Carolina help y smoke damage insurance claim house did not burn.

Se utilizó la búsqueda web disponible, sin fijar ubicación US ni reproducir una SERP local de Google. No se registran posiciones, cuotas, volúmenes ni una proporción exacta de resultados. Las conclusiones siguientes son inferencias editoriales sobre los resultados observados, no un estudio exhaustivo del buscador.

| Consulta/grupo | Lectura de intención | Página y respuesta apropiadas |
| --- | --- | --- |
| public adjuster Los Angeles | Evaluar/contratar proveedor para pérdidas de propiedad en la zona. Se observaron páginas comerciales locales de Metropolitan Adjustment Bureau y Apex. | /service-areas/los-angeles/: oferta y contacto local al inicio, daños atendidos, proceso y comprobación de credenciales. Incendio/humo como necesidad secundaria destacada, sin convertir toda la página en una guía ni excluir otros daños. |
| public adjuster Miami | Evaluar un proveedor y solicitar contacto. Se observaron páginas de servicio con consultas, equipo, licencias y atención residencial/comercial, entre ellas Ricardo y DCS. | /service-areas/miami/: propuesta de servicio amplia. Agua/condominios como apoyo específico. |
| public adjuster West Palm Beach | Proveedor local y consulta sobre reclamaciones. Se observaron páginas de servicios/contacto de PALS y Dolphin Claims. | /service-areas/west-palm-beach/: servicio y solicitud visibles antes de la preparación documental. Techo/tormenta como apoyo, sin restringir el alcance comercial de toda la página. |
| public adjuster North Carolina | Servicio profesional estatal, evaluación de proveedor y contacto; también aparece información del regulador. | /service-areas/north-carolina/: alcance estatal, propietarios residenciales/comerciales, credenciales y contratación. Enlazar ayuda específica para denegaciones. |
| denied insurance claim North Carolina | Consulta ambigua: aparecen salud, auto, recursos oficiales y reclamaciones de vivienda. | No perseguirla de forma genérica. /service-areas/north-carolina/denied-insurance-claim-nc/ debe indicar property/homeowners en título y respuesta inicial. |
| denied homeowners/property insurance claim North Carolina | Mixta: entender opciones tras una denegación y encontrar ayuda. Se observaron recursos oficiales de NC sobre reclamaciones y quejas. | Explicar qué revisar y qué ayuda ofrece un public adjuster; diferenciar asistencia del regulador y asistencia jurídica. CTA de revisión de reclamación de propiedad. |
| smoke damage insurance claim house did not burn | Informacional dominante en la muestra: explicar cobertura, evidencia y pasos. Se observaron guías y una autoridad estatal. | Guía/recurso y sección explicativa de humo, con respuesta directa. La página de servicio atiende la variante de contratación; no crear otra landing por cada variante sin justificarlo. |

## Ajuste sobre la publicación anterior

La publicación d2477c1 resolvió formularios, atribución y retiró cifras sin respaldo. Sin embargo, dio demasiado peso a preparar documentos y estrechó títulos generales de ciudad a un daño concreto antes de contrastar la intención. Se corrige esa jerarquía: servicio y decisión comercial primero; guía y checklist como apoyo posterior. Se mantienen las URLs y los controles de medición.

## Criterio para nuevas páginas

1. Definir la consulta y precisar tipo de seguro, daño, localidad e idioma cuando cambien la necesidad.
2. Revisar resultados y registrar qué tipos de páginas responden, sin equiparar la búsqueda disponible a posiciones exactas de Google en Estados Unidos.
3. Contrastar con consultas/páginas de Search Console y capacidad real del negocio.
4. Asignar una URL principal. Las páginas locales responden dónde y quién presta el servicio; las de daño responden qué servicio se necesita; las guías responden cómo entender o preparar el proceso.
5. Ordenar título, H1, respuesta inicial, argumentos, enlaces y CTA según esa tarea. No añadir texto por una longitud objetivo ni copiar el formato de competidores sin evaluar su utilidad.
6. Validar lo publicado y medir consultas, clics, solicitudes y cualificación. Evitar inferir éxito por una variación de pocos clics.

## Referencias

### Revisión visual y UX del 19 de octubre

Extensión a páginas interiores: se conserva la tarea comercial específica de cada servicio y localidad; los encabezados siguen explicando tipo de ayuda, ámbito y contacto. Recursos mantiene su intención informativa y su búsqueda; las guías siguen diferenciadas de las páginas de contratación. Contacto y revisión priorizan enviar una solicitud o llamar, sin distraer con resultados económicos no acreditados. No se cambian URLs ni canonicals por la actualización visual. Véase REDISENO-UX-2026-10-19.md para el alcance completo.

La portada conserva la intención comercial general: qué servicio ofrece Claim Guardians, para quién, alcance y cómo solicitar contacto. Se reorganiza visualmente en servicio, daño, representación, proceso y preparación opcional. El directorio responde a «public adjuster + localidad» permitiendo encontrar una ciudad mediante estado y búsqueda, con las 23 páginas visibles en HTML y accesibles sin JavaScript. No se crean URLs para filtros ni se cambian destinos canónicos.

Se retiran dos tarjetas económicas y testimonios de la portada cuya evidencia no estaba acreditada. Sus FAQ pasan a una única fuente compartida entre texto y schema con información del proceso, revisión gratuita y términos escritos; no se conservan cifras legales genéricas ni recomendaciones automáticas de contratación. Las fotografías existentes se usan como ilustración, sin presentarlas como casos o personas del equipo.

- Google Search Central: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Ejemplos comerciales observados, usados para analizar formato, no para acreditar sus promesas: https://metroadjusters.com/locations/los-angeles ; https://www.apexadjustinggroup.com/locations/los-angeles-public-adjusters ; https://ricardopa.com/ ; https://www.dcspia.com/public-adjuster/miami/ ; https://palsinsurancepublicadjusters.com/ ; https://dolphinclaims.com/locations/west-palm-beach/ ; https://mantisclaims.com/
- NC DOI, opciones y límites de asistencia: https://www.ncdoi.gov/assistance-or-file-complaint

No se modifican afirmaciones de licencias, fianzas o resultados con base en lo que dicen competidores.

## Aplicación y comprobación

- Las 23 páginas de ciudad y la página estatal de North Carolina presentan el bloque de servicio y contacto tras la cabecera, antes de la preparación documental. Conservan una sola solicitud por página y la atribución de entrada.
- Los títulos generales de ciudad vuelven a describir el servicio amplio; incendio/humo, agua/condominios y techo/tormenta permanecen como contenidos de apoyo.
- La página de denegaciones NC precisa property/homeowners/commercial property, explica los distintos roles y elimina promesas automáticas de reversión, plazos y comparaciones de honorarios sin respaldo. Se retiran tres tarjetas adicionales de resultados económicos repetidos.
- Validación local: 9 pruebas de envío/medición y 11 pruebas de navegador aprobadas. Compilación de 44 rutas; comprobación estática de 45 HTML, 2.382 enlaces/anclas y 141 bloques de datos estructurados sin errores.
- Esta revisión no equivale a una medición de mejora SEO. El siguiente seguimiento debe contrastar consultas con solicitudes y su calidad, cuando haya datos posteriores a la publicación.
