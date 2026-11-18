# Confianza, condiciones y seguimiento — 18 de noviembre de 2026

## Intención antes de editar

Fuente propia: Windsor.ai, Search Console, propiedad exacta https://allclaimguardians.com/, 19 de octubre–15 de noviembre de 2026, datos finalizados, sin filtros de país o dispositivo. Consulta agregada por página y consulta adicional por página + búsqueda limitada a company, water-damage y hub NC. Los resultados por consulta no son un total exhaustivo.

- `/company/`: necesidad de identificar y evaluar a Claim Guardians; intención dominante navegacional/de evaluación, secundaria condiciones y contacto. 1 clic y 38 impresiones; «claim guardians» aparece con 5 impresiones. Mantener como página de empresa y credenciales, sin crear otra URL.
- `/services/water-damage/`: necesidad de contratar ayuda con una reclamación de daños por agua; intención comercial, secundaria entender cobertura/documentación. 0 clics y 73 impresiones. Consultas: «water damage adjuster» (12), «water damage insurance adjuster» (9), «insurance adjuster for water damage» (7). Mantener página de servicio, distinguir documentación de reclamación de reparación/mitigación.
- `/services/{fire-damage,roof-damage,hurricane-damage,mold-claims,denied-claims}/`: necesidad de evaluar representación para un daño o decisión concreta; comercial con apoyo informativo. Sin filas para estas páginas en el informe del período: no se infiere ausencia de demanda. Mantener URLs y especialidad; no convertirlas en guías genéricas ni prometer cobertura.
- `/service-areas/…/`: evaluar proveedor en la localidad y solicitar revisión. Mantener ciudad/estado, alcance, credenciales del profesional y contacto. El hub NC registra 2 clics y 81 impresiones; parte de las consultas es de marca. No usar esos clics como prueba de demanda exclusivamente local.
- `/resources/`: necesidad informativa de entender el proceso; secundaria preparar consulta. Conservar como apoyo y enlazar al servicio, sin atribuirle las mismas funciones comerciales que a las páginas anteriores.

Contraste con resultados actuales (18 de noviembre): búsquedas «public adjuster water fire roof damage claim review services» y «public adjuster denied mold hurricane insurance claim services». Aparecen páginas de proveedores con documentación, revisión de póliza, negociación y contacto; para denegaciones aparecen servicios específicos y preguntas sobre siguientes pasos. Observación orientativa de formato, no estudio de posiciones ni prueba de eficacia de las afirmaciones de competidores.

Referencias observadas: https://firehouseadjusters.com/, https://triboropa.com/, https://inhouseadjusting.com/homeowners/, https://www.republiclossadjusters.com/services/denied-underpaid-claims/.

## Criterio de corrección

Retirar promesas absolutas de pago, resultados numéricos sin expediente, inspección gratuita universal, financiación universal de expertos y respuesta garantizada. La revisión inicial es gratuita; alcance, inspecciones, gastos, honorarios y cancelación deben aclararse en el acuerdo escrito. La prestación se explica con acciones concretas y depende de los registros y la póliza.

Credenciales: los registros individuales FL W116187 y NC 16805858 se comprobaron el 19 de octubre y se enlazan con esa fecha. No acreditan a todos los miembros ni una licencia corporativa. California: solicitado titular y número; pendiente de verificar. No hay fotografías de equipo ni expedientes autorizados nuevos: no inventarlos.

## CRM

El CRM https://crm.allclaimguardians.com/login requiere autenticación. Se solicitó al usuario entrar allí; no se ha verificado todavía acceso a sus integraciones. El formulario y aviso por email existentes siguen siendo el recorrido comprobado. No declarar una conexión CRM ni conversiones comerciales verificadas sin completar su prueba.

Etapas propuestas: recibida (envío confirmado), contactada (contacto realizado), cualificada (criterios definidos por el negocio y revisión humana), contratada (contrato confirmado). Un envío no equivale a un contrato. GA4 recomienda `generate_lead`, `qualify_lead` y `close_convert_lead` para las etapas correspondientes; no enviar nombres, email, teléfono, descripción del daño ni expedientes a Analytics.

Referencia: https://developers.google.com/analytics/devguides/collection/ga4/reference/events?hl=en.

El esquema operativo y los criterios de comprobación están preparados en `SEGUIMIENTO-SOLICITUDES-CRM.md`. No se creó una integración ficticia ni se envió otra solicitud en producción. La búsqueda de repositorios accesibles «claim» bajo germur solo devolvió la web; no se localizó allí el código del CRM.

## Implementación web

Se revisaron las seis páginas de servicios conservando las URLs y el sistema visual compartido. Cada una mantiene temas, documentos, preguntas y enlaces propios de su necesidad. Una fuente común mantiene iguales las preguntas visibles y el FAQ estructurado; los datos Service describen representación, sin precio cero para la contratación completa.

Se corrigieron empresa, recursos y las plantillas de ciudades, incluido el hub NC: sin resultados garantizados, inspecciones gratuitas universales ni financiación universal de expertos. Se retiraron de NC los bloques antiguos de riesgos con estadísticas y generalizaciones sin fuente, conservando el contenido de preparación, localidad, cobertura y contacto. California sigue sin un número de licencia nuevo verificado. No se añadieron casos ni fotografías sin respaldo.

Se conserva la pregunta sobre el código de techos sin presentarla como cobertura automática. Se contrastó el apartado 553.844(5) con el texto legislativo oficial: https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599%2F0553%2FSections%2F0553.844.html.

## Validación antes de publicar

- Compilación: 44 páginas, correcta. Comprobación Astro: 0 errores, 0 avisos y 0 sugerencias.
- 6 comprobaciones SEO correctas: incluye enlaces y fragmentos, sitemap, canonical, robots, redirects, identidad, coherencia de FAQ y ausencia de promesas comerciales absolutas seleccionadas.
- 10 pruebas del receptor y medición correctas; 19 pruebas de navegador correctas, incluida medición del contenedor GTM publicado con recepción de Analytics y formulario simuladas.
- Las 44 rutas se revisaron en 1440 y 390 píxeles: un encabezado principal, navegación compartida, imágenes sin errores y sin desbordamiento horizontal.
- El buscador de recursos devolvió correctamente una segunda coincidencia de «deductible» al ampliar las respuestas. Se corrigió la expectativa rígida de la prueba para comprobar coincidencias reales, sin ocultar contenido útil.
- Estas comprobaciones no prueban un nuevo aviso por email ni una conexión al CRM. No se enviaron nuevos datos de prueba a producción.
