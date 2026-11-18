# Seguimiento comercial de solicitudes web

Preparación: 18 de noviembre de 2026. Integración pendiente de acceso al CRM; este documento no acredita una conexión activa.

## Recorrido y criterios

| Etapa | Cuándo registrarla | Evidencia necesaria |
| --- | --- | --- |
| Recibida | El receptor confirma un envío válido | Identificador del envío y fecha; excluir spam y pruebas técnicas |
| Contactada | El equipo ha realizado el contacto | Fecha, responsable y resultado; abrir un email no basta |
| Cualificada | El equipo confirma que procede continuar | Criterios comerciales definidos por Claim Guardians y revisión humana; no una decisión automática de cobertura |
| Contratada | El negocio confirma el contrato | Referencia interna y fecha; un clic o un formulario no equivale a contratación |

Una solicitud puede cerrarse sin contrato, marcarse como duplicada o identificarse como prueba. Conservar esos motivos; no convertirlos en clientes. No alterar expedientes existentes para probar la conexión.

## Información mínima y prevención de duplicados

Guardar en el CRM un identificador único de envío del receptor, fuente «web», fecha de recepción, página de entrada, página del formulario, idioma y responsable de seguimiento. La clave de envío debe impedir que un reintento cree otro registro o duplique un evento. Los datos de contacto y detalles de daños permanecen en el entorno comercial autorizado.

Recibir una solicitud debe crear una solicitud comercial, no abrir automáticamente un expediente de reclamación. Confirmar primero que el CRM dispone de esta entidad o de un estado apropiado.

## Medición

- La web ya emite `generate_lead` tras la confirmación del receptor. El CRM no debe volver a emitirlo por importar la solicitud.
- `qualify_lead`: solo tras una cualificación real registrada por el equipo.
- `close_convert_lead`: solo tras una contratación confirmada.
- No enviar a GA4 nombre, correo, teléfono, dirección, documentos ni descripción del siniestro. No inventar un valor monetario.
- Vincular resultados a la sesión de origen requiere una estrategia de atribución comprobada; contar contratos totales no prueba qué canal los produjo. Cualquier secreto de envío permanece en el servidor.

Documentación de eventos: https://developers.google.com/analytics/devguides/collection/ga4/reference/events?hl=en.

## Comprobación antes de activar

Revisar las capacidades e integraciones reales del CRM tras iniciar sesión. Preparar el mapeo y probar en un entorno de prueba o mediante simulación. Verificar creación única, etapas, reintentos, errores y exclusión de pruebas. Para una nueva solicitud de prueba en producción que envíe avisos, obtener autorización específica con sus datos y destino.

El aviso a home@allclaimguardians.com continúa como recorrido de recepción previamente confirmado. No sustituirlo hasta comprobar el nuevo recorrido.
