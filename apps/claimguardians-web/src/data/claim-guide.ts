export const guideSources = [
  { name: 'California Department of Insurance: wildfire resources', url: 'https://www.insurance.ca.gov/01-consumers/140-catastrophes/WildfireResources.cfm' },
  { name: 'North Carolina Department of Insurance: homeowners insurance', url: 'https://www.ncdoi.gov/consumers/homeowners-insurance' },
  { name: 'Florida Department of Financial Services: insurance professionals', url: 'https://myfloridacfo.com/division/ica/fullcoverage/homeowners/insurance-professionals' },
];

export const claimGuide = {
  en: {
    title: 'Property Claim Review Guide: Florida, California & NC',
    heading: 'What should you prepare for a property insurance claim review?',
    intro: 'Start with your policy, dated damage photos, repair records, and any insurer letters. A public adjuster can help document a loss and negotiate a claim for the policyholder. Coverage, fees, and any recovery depend on the policy, evidence, and written agreement.',
    overview: 'Choose the situation that matches your property',
    markets: [
      { state: 'California', id: 'california', situation: 'Fire, wildfire or smoke damage', answer: 'For a fire or smoke claim, gather your policy, dated photos, an inventory of affected belongings, and any professional assessment or insurer response. Access the property only when authorities say it is safe. A smoke odor alone does not establish the extent of damage or the amount payable.', link: '/service-areas/los-angeles/', label: 'Public adjusting services in Los Angeles', service: '/services/fire-damage/', serviceLabel: 'Fire and smoke claim support' },
      { state: 'North Carolina', id: 'north-carolina', situation: 'A denied, delayed or underpaid storm claim', answer: 'Bring the denial letter or payment explanation, policy documents, inspection reports, repair estimates, and a timeline of communication. Ask which policy terms and evidence support the decision. Wind, hail, water intrusion and flood can involve different coverage questions.', link: '/service-areas/north-carolina/', label: 'Public adjusting services in North Carolina', service: '/services/denied-claims/', serviceLabel: 'Denied and underpaid claim reviews' },
      { state: 'Florida', id: 'florida', situation: 'Water, roof or storm damage', answer: 'Keep photos taken safely, the date the damage was discovered, plumbing or roof reports, mitigation receipts, and correspondence with the insurer. Describe the cause of the damage carefully. A leak and external flooding are different situations and must be reviewed against the applicable policy.', link: '/service-areas/miami/', label: 'Public adjusting services in Miami', service: '/services/water-damage/', serviceLabel: 'Water damage claim support' },
    ],
    checklistTitle: 'Before you choose a public adjuster',
    checklist: ['Check the individual and firm credentials required in the state where your property is located.', 'Ask who will inspect the property, document the loss, and communicate with your insurer.', 'Request written fees, scope, expenses, and cancellation terms before signing.', 'Ask for evidence behind any case result or claim about experience. A previous settlement is not a forecast for your case.'],
    faqs: [
      { q: 'Who does a public adjuster represent?', a: 'A public adjuster is hired by the policyholder. A staff adjuster works for an insurer, and an independent adjuster may be engaged by an insurer. Ask each professional to explain their role and who pays them.' },
      { q: 'Can a claim be reviewed after a denial or a payment?', a: 'You can request a review of the decision, policy and available evidence. Whether another step is available depends on the claim, applicable deadlines and policy terms. A review does not guarantee reopening or additional payment.' },
      { q: 'Can an online calculator tell me what the insurer owes?', a: 'An offer alone cannot establish the value of a claim. A meaningful review needs the applicable coverage, policy limits, deductible and documented loss. Claim Guardians does not provide a guaranteed recovery amount through this guide.' },
      { q: 'What does Claim Guardians offer and where?', a: 'Claim Guardians offers property claim review, damage documentation and insurance negotiation for property owners in Florida, California and North Carolina. Contact the team to confirm the scope and availability for your property. English and Spanish contact options are available.' },
      { q: 'How do I request a review?', a: 'Use the free claim review form or call (305) 804-5489. Tell the team the property state, damage type and claim status. Ask for the applicable service agreement and fee explanation before engaging the firm.' },
    ],
    sourceTitle: 'Consumer resources by state', sourceNote: 'These state resources provide general information. Their inclusion does not imply endorsement of Claim Guardians. Your policy and circumstances require an individual review.',
    cta: 'Request a free claim review', updated: 'Updated October 19, 2026', alternate: 'Leer esta guía en español',
  },
  es: {
    title: 'Guía de reclamaciones: Florida, California y North Carolina',
    heading: '¿Qué preparar para revisar una reclamación de daños a la propiedad?',
    intro: 'Reúne la póliza, fotos fechadas, registros de reparación y cartas de la aseguradora. Un ajustador público puede documentar la pérdida y negociar la reclamación en representación del asegurado. La cobertura, los honorarios y cualquier recuperación dependen de la póliza, la evidencia y el acuerdo escrito.',
    overview: 'Elige la situación de tu propiedad',
    markets: [
      { state: 'California', id: 'california', situation: 'Daños por incendio, incendio forestal o humo', answer: 'Reúne la póliza, fotos fechadas, un inventario de los bienes afectados, evaluaciones profesionales y respuestas de la aseguradora. Entra a la propiedad únicamente cuando las autoridades indiquen que es seguro. El olor a humo por sí solo no determina el alcance del daño ni el importe que corresponde pagar.', link: '/service-areas/los-angeles/', label: 'Servicios de ajuste público en Los Ángeles (inglés)', service: '/services/fire-damage/', serviceLabel: 'Reclamaciones por incendio y humo (inglés)' },
      { state: 'North Carolina', id: 'north-carolina', situation: 'Reclamación de tormenta denegada, demorada o con pago insuficiente', answer: 'Conserva la carta de denegación o explicación del pago, póliza, informes de inspección, presupuestos y cronología de las comunicaciones. Pregunta qué condiciones de la póliza y evidencia respaldan la decisión. Viento, granizo, filtraciones e inundaciones pueden plantear coberturas diferentes.', link: '/service-areas/north-carolina/', label: 'Servicios en North Carolina (inglés)', service: '/services/denied-claims/', serviceLabel: 'Revisión de reclamaciones denegadas (inglés)' },
      { state: 'Florida', id: 'florida', situation: 'Daños por agua, techo o tormenta', answer: 'Guarda fotos tomadas desde lugares seguros, la fecha en que descubriste el daño, informes de plomería o techo, facturas de mitigación y comunicaciones con la aseguradora. Describe la causa con precisión. Una fuga y una inundación externa son situaciones distintas que deben revisarse según la póliza correspondiente.', link: '/service-areas/miami/', label: 'Servicios de ajuste público en Miami (inglés)', service: '/services/water-damage/', serviceLabel: 'Reclamaciones por daños de agua (inglés)' },
    ],
    checklistTitle: 'Antes de contratar a un ajustador público',
    checklist: ['Comprueba las credenciales de la persona y de la firma que exige el estado de la propiedad.', 'Pregunta quién inspeccionará, documentará los daños y hablará con la aseguradora.', 'Solicita por escrito honorarios, alcance, gastos y condiciones de cancelación antes de firmar.', 'Pide respaldo de los casos y de la experiencia anunciados. Un acuerdo anterior no predice el resultado de tu reclamación.'],
    faqs: [
      { q: '¿A quién representa un ajustador público?', a: 'El asegurado contrata al ajustador público. El ajustador de plantilla trabaja para la aseguradora, y esta también puede contratar a un ajustador independiente. Pide a cada profesional que explique su función y quién le paga.' },
      { q: '¿Se puede revisar una reclamación después de una denegación o un pago?', a: 'Puedes solicitar una revisión de la decisión, póliza y evidencia disponible. La posibilidad de dar otro paso depende del caso, los plazos aplicables y las condiciones de la póliza. La revisión no garantiza reapertura ni un pago adicional.' },
      { q: '¿Una calculadora puede decir cuánto debe pagar la aseguradora?', a: 'Una oferta aislada no determina el valor de la reclamación. Se necesitan cobertura, límites, deducible y daños documentados. Esta guía no ofrece un importe de recuperación garantizado.' },
      { q: '¿Qué ofrece Claim Guardians y en qué estados?', a: 'Claim Guardians ofrece revisión de reclamaciones de propiedad, documentación de daños y negociación con aseguradoras para propietarios en Florida, California y North Carolina. Consulta al equipo para confirmar alcance y disponibilidad. Hay opciones de contacto en inglés y español.' },
      { q: '¿Cómo solicito una revisión?', a: 'Usa el formulario de revisión gratuita o llama al (305) 804-5489. Indica el estado de la propiedad, tipo de daño y situación de la reclamación. Solicita el acuerdo de servicio y la explicación de honorarios antes de contratar.' },
    ],
    sourceTitle: 'Recursos oficiales para consumidores', sourceNote: 'Estos recursos estatales ofrecen información general. Su inclusión no implica que recomienden a Claim Guardians. La póliza y las circunstancias requieren una revisión individual.',
    cta: 'Solicitar una revisión gratuita', updated: 'Actualizado el 19 de octubre de 2026', alternate: 'Read this guide in English',
  },
};
