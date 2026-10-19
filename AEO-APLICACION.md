# Aplicación del blueprint AEO a Claim Guardians

Fecha: 19 de octubre de 2026. Método: Blueprint-AEO-Multiproyecto v1.0 aportado por Roger. El apartado de Calvo Creativo es un ejemplo del método y no se trasladó como identidad, oferta o mercado de este negocio.

## Decisión comercial

Roger indicó que se atiendan todos los mercados actuales y que habrá expansión. La arquitectura contempla Florida, California y North Carolina, con paneles separados USA-EN y USA-ES. Español es un idioma de atención en Estados Unidos, no una señal de que el mercado sea Latinoamérica.

Se creó un registro compartido de estados para los formularios y la entidad del sitio. Cada nuevo estado requiere confirmar alcance, credenciales y capacidad antes de añadirlo, revisar fuentes y preparar contenido útil. No se generan páginas masivas por combinaciones de localidad, daño e idioma.

## Aplicación en la web

- Identidad compartida de Claim Guardians LLC mediante `#organization` y `#website`. Las áreas de servicio se describen como servicios prestados por esa entidad, sin inventar oficinas locales.
- Guía en inglés `/resources/claim-review-guide/` y español `/es/guia-reclamacion/`, con versiones de idioma recíprocas, preguntas y respuestas, diferencias entre profesionales, documentación y fuentes estatales.
- Preguntas visibles y datos FAQ se generan desde el mismo contenido. El marcado no promete aparición en resultados de IA o resultados enriquecidos.
- Enlaces desde los servicios y las áreas de cobertura hacia las guías, y desde las guías hacia servicios y localidades pertinentes.
- Recursos oficiales de licencias en Empresa. Enlazar a un organismo no verifica por sí solo una credencial ni implica respaldo de ese organismo.
- Formulario con origen declarado opcional. El referente técnico solo conserva una categoría de fuente en la sesión y se almacena por separado. No se guardan URLs de referencia ni texto de prompts en esta función.
- Conversión confirmada y clic telefónico/correo enviados con `gtag('event', ...)`, adecuado a la etiqueta directa instalada. Los parámetros explícitos excluyen datos personales y texto del reclamo.
- Política de privacidad actualizada para describir Netlify Forms, origen declarado, clasificación del referente y eventos explícitos.

## Piloto preparado

El libro de trabajo entregado contiene Brief, Journey, Categoría, Marca, Cobertura, Respuestas, Medición, Acciones y Fuentes.

- 30 preguntas sin marca propia: 15 EN y 15 ES, con presencia de los tres estados y cinco etapas de decisión por cohorte.
- 10 preguntas de marca: cinco EN y cinco ES, para identidad, oferta, cobertura, condiciones, evidencia y contacto.
- Tres repeticiones previstas por pregunta: 120 respuestas por recoger. Los espacios están identificados, pero no contienen respuestas observadas.
- Vivienda es el perfil inicial propuesto, con incendio/humo en CA, denegación/tormenta en NC y agua en FL. Es una muestra económica, no representación completa de los seis servicios ni una exclusión de compradores comerciales.
- Cada pregunta distingue evaluación técnica del analista de validación humana. La versión inicial está marcada como exploratoria y pendiente de validación por pregunta.
- Las métricas filtran panel, fechas, versión, modelo, superficie, búsqueda observada y modo del piloto. Se excluyen errores y filas incompletas. Las tasas permanecen vacías sin denominador.

No se ha ejecutado una línea base de respuestas de IA ni se ha estimado volumen de prompts. La sesión de trabajo actual conoce el proyecto y no sirve como observación independiente sin memoria.

## Operación de la primera ronda

1. Revisar los 40 textos y confirmar qué preguntas se aprobarán o se ejecutarán como piloto exploratorio.
2. Elegir una superficie disponible y anotar modelo/versión si se expone, idioma, búsqueda observada y fechas. No se ha contratado una herramienta.
3. Usar sesiones nuevas sin memoria ni documentos del proyecto, misma configuración, texto exacto y tres repeticiones. API y web se analizan por separado.
4. Guardar respuesta completa y evidencia por ejecución. Si excede el límite de una celda, conservar el archivo completo y su referencia, dejando un extracto identificado.
5. Contar marcas proveedoras una vez por respuesta y URLs distintas por respuesta. Mención no equivale a recomendación. Registrar errores como Error, nunca como ausencia.
6. Registrar exactitud de marca como Correcta, Parcial, Incorrecta o No evaluable. Informar posición solo cuando exista una lista ordenada con recomendación.
7. Tras la línea base, priorizar acciones por mercado, pregunta, brecha y evidencia propia disponible. Repetir con el mismo protocolo para poder comparar.

Para ampliar el libro: tablas iniciales de 30 preguntas de categoría, 10 de marca y 120 ejecuciones. Las fórmulas admiten hasta 100 preguntas por set y 300 respuestas; ampliar también las tablas y validaciones dentro de esos límites. Más allá, extender conjuntamente fórmulas y rangos de medición. Mantener IDs y versiones; no sobrescribir el texto histórico de una pregunta ya medida.

## Pendientes externos a la implementación

Confirmar licencias vigentes y números de la firma/personas por estado, cinco conversaciones comerciales, condiciones y capacidad, evidencia y autorización de testimonios y casos. Estas tareas no se sustituyen con afirmaciones generadas.

En Netlify, confirmar el esquema actualizado de `claim-review` y la recepción. En GA4, comprobar Realtime/DebugView, configurar dimensiones para `technical_source` y `declared_source` si se desean en informes y revisar `generate_lead` como evento clave. En el CRM, mantener separados referente técnico, origen declarado, cualificación, conversación, propuesta y cliente. Sin ese seguimiento no se atribuyen ventas a AEO.

## Referencias oficiales

- [Google: funciones de IA y sitios web](https://developers.google.com/search/docs/appearance/ai-features). No exige archivos o schema especiales para IA.
- [Google: eventos con gtag](https://developers.google.com/analytics/devguides/collection/ga4/events).
- [California DOI: recursos sobre incendios](https://www.insurance.ca.gov/01-consumers/140-catastrophes/WildfireResources.cfm).
- [NC DOI: seguro de vivienda](https://www.ncdoi.gov/consumers/homeowners-insurance).
- [Florida CFO: profesionales de seguros](https://myfloridacfo.com/division/ica/fullcoverage/homeowners/insurance-professionals).
