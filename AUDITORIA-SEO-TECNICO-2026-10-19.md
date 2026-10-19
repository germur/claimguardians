# Auditoría de enlaces, redirecciones, rastreo y datos estructurados

Revisión del 19 de octubre de 2026. Punto de partida: publicación ed61438. Se inspeccionó el HTML generado de 45 archivos y se rastrearon sus URLs públicas. Los cambios conservan la intención y las URLs principales documentadas en SEO-INTENCION-DE-BUSQUEDA.md.

## Hallazgos y correcciones

| Área | Hallazgo inicial | Acción |
| --- | --- | --- |
| Enlazado | /service-areas/jacksonville/ estaba en sitemap pero sin enlaces internos. | Enlace contextual desde el directorio de áreas, bajo Northeast Florida; se distingue Jacksonville FL de Jacksonville NC. |
| Enlazado | Las seis ciudades NC recibían un solo enlace desde el hub estatal. | Navegación contextual entre ciudades NC y retorno al hub. No se presentan como sucursales. |
| Enlazado | Seis enlaces del directorio de servicios usaban rutas sin barra final. | Destinos canónicos directos con barra, evitando un 301 innecesario. |
| Redirecciones | No había _redirects ni reglas en netlify.toml. /.../index.html respondía 200 duplicando la URL pública; /sitemap.xml respondía 404 aunque el índice real sí funcionaba. | Archivo _redirects con 43 alias index.html y un alias /sitemap.xml → /sitemap-index.xml, todos 301. No se inventan rutas antiguas ni se redirigen errores a la portada. |
| Robots | robots.txt responde 200, permite rastreo y declara el índice correcto. | Se conserva. Añadidas cabeceras noindex para registro interno de formularios, confirmación y archivo 404, además de sus metas existentes. No se bloquean en robots para que el buscador pueda leer noindex. |
| Sitemap | Índice y sitemap hijo responden 200 XML. 42 URLs canónicas indexables; excluye 404, formulario técnico y confirmación. | Se conserva su generación automática; nueva prueba exige coincidencia exacta con las páginas indexables. No se añaden lastmod ficticios. |
| Schemas FAQ | 31 entradas con diferencias de texto/pregunta o afirmaciones no visibles, distribuidas en nueve bloques estáticos. | Se retiran esos nueve bloques sin modificar sus preguntas visibles. Permanecen 29 FAQPage que sí coinciden con el contenido. |
| Identidad | Correo antiguo en LocalBusiness y contacto; el proveedor del directorio de servicios no referenciaba la entidad compartida. | home@allclaimguardians.com en contenido y schema; un solo @id de empresa, domicilio en Weston y logo. |
| Servicio NC | La página de denegación de propiedad no declaraba su servicio. | Service con ámbito North Carolina y proveedor compartido. |

## Comprobaciones

- Compilación: 44 rutas y archivo técnico de formulario; 45 HTML inspeccionados.
- 42 URLs indexables con canonical propio y presencia exacta en el sitemap; todas alcanzables desde la portada mediante enlaces HTML.
- 133 bloques JSON-LD analizados y 2.419 referencias internas de enlaces/anclas comprobadas: identidad de empresa, proveedor de servicios, destinos y secuencia de breadcrumbs y correspondencia textual de FAQ.
- Prueba automatizada de enlaces y fragmentos, alcanzabilidad, sitemap/canonical, robots/noindex, schemas y reglas sin cadenas o bucles. Ejecutar `npm run build` y después `npm run test:seo`.
- Se mantienen las pruebas de navegador de formularios, navegación, idiomas y atribución. La inspección estructural no sustituye una certificación de un validador externo ni demuestra indexación en Google.

## Comportamiento previo del servidor

HTTPS y www: 200 en la URL principal; www redirige 301 al dominio sin www en un salto. Sin barra final: 301 a la ruta con barra. URL inexistente: 404 real. El archivo explícito /404.html responde 200 con noindex, que no equivale a que las URLs inexistentes respondan 200.

Netlify confirma force_ssl=true y Pretty URLs activado. Una petición HTTP inicial desde Node recibió una respuesta ajena al sitio; dos comprobaciones posteriores con curl (HEAD y GET) devolvieron el 301 correcto desde Netlify hacia HTTPS. Se registra la discrepancia como observación del cliente/red, sin atribuirla a una redirección configurada ni a un compromiso del sitio.

## Límites y siguientes revisiones

- No se verificaron URLs históricas ausentes de los archivos disponibles ni se creó un mapa de migración sin evidencia.
- Quedan preguntas visibles antiguas con promesas de cobertura, resultados o plazos que requieren revisión editorial y de sustento. Retirar su schema evita repetirlas en metadatos; no acredita el contenido visible. Abordarlas por necesidad de búsqueda y evidencia, sin una reescritura masiva en esta revisión técnica.
- No se promete un resultado enriquecido por añadir schema. Google retiró el resultado FAQ desde el 7 de mayo de 2026; conservar marcado correcto puede describir contenido, pero no reactiva esa función.
- La cobertura efectiva de indexación y los sitemaps procesados deben contrastarse en Search Console; un HTTP 200 no prueba que Google haya indexado la URL.

## Referencias consultadas

- https://developers.google.com/search/docs/crawling-indexing/robots/intro
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/updates (retirada de FAQ rich results, mayo de 2026)
- https://docs.netlify.com/manage/routing/redirects/redirect-options/
