# Claim Guardians LLC

Sitio web de alta conversión y máximo rendimiento para la empresa de Ajustadores Públicos en Florida: **Claim Guardians LLC**.

## Stack Tecnológico

- **Framework Principal:** Astro (Generación de sitios estáticos SSG rápidos y enrutamiento basado en archivos).
- **Framework de UI:** React (Integrado en Astro mediante islas solo para componentes altamente interactivos, `client:load` / `client:visible`).
- **Estilos:** Tailwind CSS v4 (Optimizado para diseño responsivo mobile-first).
- **Tipografía y UI:** Sistema de grilla de 8pt, diseño accesible (WCAG 2.2).

## Propósito del Negocio

Dominar el SEO Local en el estado de Florida, crear páginas programáticas de forma ágil y estructurar el contenido para motores de respuesta de IA (AEO / LLMs) usando tiempos de carga casi instantáneos (Core Web Vitals 100/100) para captar leads altamente calificados para servicios de ajuste público.

## Arquitectura de Silos (Silo Architecture)

La estructura del proyecto respeta una estrategia SEO robusta con los siguientes silos principales:

- **`src/pages/index.astro`**: Home Page.
- **`src/pages/services/` (Silo transaccional)**: Páginas estáticas para servicios específicos (ej. `water-damage.astro`).
- **`src/pages/service-areas/` (Silo programático local)**: Rutas dinámicas para áreas de cobertura (ej. `[city].astro`).
- **`src/pages/resources/` (Silo de autoridad tópica)**: Glosario (AEO) y recursos educativos para construir autoridad tópica.
- **`src/pages/company/` (Silo de EEAT)**: Páginas de transparencia, equipo, honorarios, contacto y sobre nosotros.
