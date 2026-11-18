# Recuperación de visibilidad y medición — 18 de noviembre de 2026

## Evidencia y alcance

Propiedad exacta de Search Console: `https://allclaimguardians.com/`, búsqueda web. Windsor.ai: 19 octubre–15 noviembre, sin datos frescos no finalizados. Consulta por página y consulta, limitada a las tres URLs afectadas y filas de al menos cinco impresiones. Las consultas visibles no son el total exhaustivo del sitio. El ZIP del 18 de noviembre aporta el histórico que excede los 30 días disponibles en Windsor.

Inspección directa en Search Console el 18 de noviembre: Los Ángeles, Sacramento y Miami siguen indexadas; rastreo permitido, obtención correcta y canonical seleccionado igual al declarado. Últimos rastreos mostrados: Los Ángeles 12 octubre, Sacramento 26 octubre y Miami 1 octubre. El sitemap-index enviado figuraba leído por última vez el 4 de junio, con cero páginas descubiertas. Esto justifica actualizar el descubrimiento y solicitar rastreo, pero no prueba la causa de la caída ni implica que Google vaya a recuperar posiciones.

Netlify Forms: el formulario claim-review existe; la consulta actual devuelve cero solicitudes conservadas. No permite reconstruir por sí sola el histórico ni confirmar nuevos clientes. La prueba técnica del 19 de octubre fue confirmada por el propietario en el chat; no se cuenta como captación comercial.

## Intención antes de editar

Se contrastaron los datos propios con resultados web actuales para public adjuster Los Angeles smoke damage claims, public adjuster Sacramento property claims y public adjuster Miami flood water damage claims. La herramienta no reproduce una SERP geolocalizada de Google US ni acredita posiciones de competidores.

| URL principal | Necesidad e intención | Evidencia propia | Formato y cambio justificado |
| --- | --- | --- | --- |
| /service-areas/los-angeles/ | Evaluar y contactar un public adjuster de propiedad. Incendio/humo son necesidades secundarias explícitas; una duda sobre humo sin incendio también requiere contexto explicativo. | Fire damage claims public adjuster Los Angeles: 22 impresiones; smoke damage claim public adjuster Los Angeles: 18. | Conservar página comercial amplia, explicar el trabajo contratado y dudas concretas de alcance, enlazar incendio/humo y denegaciones. No convertirla en guía ni crear páginas por cada variante. |
| /service-areas/sacramento/ | Comparar proveedor, alcance, credenciales y siguiente paso para propiedad residencial/comercial. Agua, tormenta y flood requieren distinguir causa y póliza. | Public adjuster Sacramento: 36 impresiones; public adjusters Sacramento: 25; water damage claims Sacramento County: 5. | Conservar URL de servicio local; sustituir afirmaciones genéricas sin respaldo sobre aseguradoras por revisión concreta del daño, estimación y póliza. Credenciales CA del profesional asignado antes de contratar. |
| /service-areas/miami/ | Servicio local dominante; secundaria informativa para inicio de reclamación por inundación/agua y coordinación de pólizas de condo. | Filing a flood damage claim in Miami: 17 impresiones; property insurance claims Miami: 9. | Conservar oferta amplia y contacto. Aclarar revisión de origen del agua y pólizas distintas, sin prometer cobertura; enlazar servicio de agua y guía de preparación existente. |

La página local responde dónde/quién/contratación; los servicios de daño responden el alcance por daño; la guía existente responde cómo preparar el proceso. No se asignan las mismas necesidades a nuevas URLs ni se persiguen consultas de abogados o demandas como servicios jurídicos.

Ejemplos observados para evaluar formato, no para acreditar promesas: https://aresclaims.com/ ; https://www.premierepublicadjusters.com/contact/ ; https://bluestaradjusters.com/locations/california/sacramento/ ; https://www.dcspia.com/public-adjuster/miami/ ; https://www.codeonepa.com/flood-claim-help .

## Criterios de medición

No borrar datos históricos ni declarar bots por nacionalidad o ciudad. Separar revisiones internas mediante una preferencia explícita del navegador. Mantener pruebas automatizadas con colecciones interceptadas y formularios simulados; no enviar otra solicitud real de producción. Verificar generate_lead como evento clave y distinguirlo de contact_click. Los filtros que podrían excluir datos deben validarse en modo de prueba antes de activarse.

Las fechas lastmod deben representar cambios sustanciales reales, no actualizarse a cada compilación. Mantener las URLs y sus canonicals.

Referencias: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap ; https://support.google.com/analytics/answer/13296761 .

## Cambios y comprobaciones

- Oferta y solicitud específicas para Los Ángeles, Sacramento y Miami; preguntas frecuentes visibles y schema proceden de la misma fuente. Sacramento deja de mostrar el bloque antiguo con generalizaciones sobre aseguradoras. Las cuatro páginas CA explican cómo comprobar al profesional asignado sin inventar una licencia corporativa.
- Enlaces directos desde portada y contexto desde incendio/agua; URLs y canonicals conservados. La navegación sigue dando acceso a todos los mercados.
- lastmod estable con fechas reales de revisión: 18 de noviembre para las páginas con cambios de contenido/enlaces de esta publicación; 19 de octubre para las restantes. Las 17 páginas del generador local reciben la fecha nueva por la corrección común de la explicación del proceso. No se actualiza lastmod automáticamente al compilar.
- GA4: generate_lead ya estaba marcado como evento clave. Se creó CG Developer Review en Testing, sin exclusión permanente. Se guardó CG Locations to Review para observar Boardman, Ashburn, Beijing y Singapore; no clasifica automáticamente esas visitas como bots ni cambia los datos originales.
- Revisión interna por navegador: abrir `https://allclaimguardians.com/?cg_internal=1` para detener la carga de GTM/GA4/Clarity. La preferencia se conserva al navegar; los formularios siguen operativos. Para volver a medir, abrir `https://allclaimguardians.com/?cg_internal=0`. No se deducen IPs del equipo ni se excluyen países.
- Pruebas: Astro check sin errores/advertencias, 10 de envío/medición, 5 de SEO y 19 casos de navegador cubiertos. La prueba publicada de GTM intercepta las colecciones y simula Netlify; el modo interno se prueba también con una solicitud simulada y su confirmación. Un conteo fijo antiguo de seis FAQ se sustituyó por la coincidencia entre preguntas visibles y schema, y se volvió a verificar.

La recuperación de visibilidad no se puede acreditar en el momento de publicación. Tras el nuevo rastreo, comparar ventanas equivalentes en esta propiedad exacta y mantener separados clics, solicitudes recibidas y clientes cualificados.
