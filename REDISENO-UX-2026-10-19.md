# Renovación visual y UX — 19 de octubre de 2026

## Diagnóstico

El diseño anterior dependía de tarjetas blancas casi iguales, emojis, sombras, contenedores grandes y mensajes repetidos. La portada mezclaba servicio, supuestos resultados y varias llamadas equivalentes sin una secuencia clara. El directorio obligaba a recorrer muchos grupos regionales para localizar una ciudad. La navegación destacaba «Our Firm» incluso en otras páginas.

## Dirección aplicada

Una presentación editorial: fondo marfil, tinta verde profunda, acentos salvia y tipografía sans combinada con cursivas serif. Fotografía existente visible, marcos asimétricos, separadores y numeración funcional sustituyen la dependencia de sombras, efectos luminosos y emojis.

La portada presenta primero el servicio y contacto; los daños permiten elegir un recorrido. Después se explican representación, proceso y preparación opcional. Las FAQ visibles y el schema proceden del mismo conjunto de datos. Se retiran dos supuestos resultados y testimonios sin evidencia de la portada.

El directorio agrupa las 23 ciudades por estado y añade filtros combinables de estado y búsqueda, contador anunciado, estado vacío y recuperación. Los enlaces están en el HTML original; sin JavaScript se muestran todos y se ocultan los controles que no funcionarían. No se crean URLs indexables de filtros.

## Componentes

- Portada: nueva cabecera, cinta de cobertura, mosaico de servicios con fotografía, bloque de representación, proceso, preparación, FAQ y cierre.
- Directorio de áreas: nueva cabecera, buscador, filtros, listas por estado, ayuda y contexto local.
- Navegación compartida: superficie y botones más sobrios; conserva el diálogo móvil y su control de foco.
- Pie compartido del layout principal: contacto actualizado, navegación compacta y sin insignias no verificadas. El layout mínimo de campañas conserva su pie específico.
- Formularios de servicio local: nueva superficie, jerarquía, campos y contraste; no se altera su envío ni medición.
- Tarjetas comunes: bordes, radios y estados de interacción más discretos.
- Herramienta de preparación: conserva sus respuestas por daño y cambia su presentación.

## Validación y alcance

La revisión visual incluye portada en escritorio/móvil y búsqueda combinada en móvil. Comprobaciones de compilación, enlaces/canonicals/sitemap/FAQ y recorridos de formularios. El nuevo directorio incorpora una prueba de estado, ciudad, vacío, limpieza, foco, ausencia de desbordamiento y funcionamiento sin JavaScript. Los enlaces tienen foco visible, los controles principales al menos 44 px y los efectos respetan preferencia de movimiento reducido.

Esta primera renovación cubre las dos entradas principales y componentes compartidos. Las páginas individuales de daño y ciudad conservan su estructura de contenido; no se presenta como un rediseño individual completo de las 44 rutas. Se mantiene el criterio de intención de búsqueda documentado en SEO-INTENCION-DE-BUSQUEDA.md.

No se atribuye una mejora de conversión hasta contar con datos posteriores a la publicación. Las imágenes existentes son ilustrativas y no se usan como prueba de resultados o identidad del equipo.

## Segunda renovación: todas las páginas

Por instrucción posterior del usuario, la dirección aprobada se extiende a las 44 rutas públicas, incluida la portada ya renovada. Se añade un encabezado interior compartido con breadcrumbs, fotografía ilustrativa, CTA y contexto específico. Se aplica a los seis servicios, las 23 ciudades, North Carolina, denegaciones NC, empresa y recursos. El directorio de servicios tiene un nuevo catálogo fotográfico y conserva su recorrido interactivo de revisión.

Contacto y solicitud de revisión se reorganizan alrededor de sus formularios. En móvil, contacto muestra el formulario antes de los datos secundarios, con acceso a llamada y ancla desde el encabezado. Se retiran tres resultados económicos repetidos sin evidencia y las promesas automáticas del lateral del formulario. El envío, conservación de respuestas, medición y confirmación mantienen su implementación.

Las guías en inglés/español incorporan una presentación de lectura, navegación por estado y checklist. Las páginas legales conservan su texto con un único main semántico. Confirmación y 404 reciben una presentación coherente y conservan noindex. Las páginas que usaban layout mínimo ahora comparten navegación, menú móvil, pie y una sola etiqueta GA4 con el layout general.

Se elimina la apariencia de avatar ficticio del principal y se usan iniciales. Permanecen las referencias a licencias previamente verificadas; la intervención visual no acredita nuevas credenciales ni todos los textos históricos.

Validación ampliada: recorrer las 44 rutas tanto a 1440 como a 390 píxeles, comprobando título principal visible, un solo main, navegación/pie, una sola carga GA4, imágenes, errores JavaScript y ausencia de desbordamiento. Se guardan capturas representativas de servicios, ciudades, recursos, guía ES, empresa, contacto, revisión, privacidad y 404. Se mantienen las pruebas funcionales y las comprobaciones SEO estáticas.
