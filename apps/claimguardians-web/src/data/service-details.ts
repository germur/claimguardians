export const feeTerms = 'The initial claim review is free. Before representation, ask for a written agreement explaining the scope, fee calculation, payment timing, any inspection or third-party expenses, and cancellation terms. Do not assume every expense is included.';

type Topic = { title: string; text: string };
type Detail = {
  title: string; description: string; hero: string; label: string; eyebrow: string;
  image: string; introduction: string; topics: Topic[]; questions: { q: string; a: string }[];
  related: string[];
};

export const serviceDetails = {
  'water-damage': {
    title: 'Water Damage Public Adjuster Florida - Insurance Claim Help | Claim Guardians',
    description: 'Water damage claim help in Florida. Review the leak timeline, affected areas, policy and insurer estimate with Claim Guardians. Request a free initial review.',
    hero: 'Water damage public adjuster.', label: 'Water damage', eyebrow: 'Property claims / Water & leaks', image: '/images/hero-water-damage.png',
    introduction: 'A water damage claim starts with the source, timing and affected materials. We help property owners organize the evidence, compare the insurer’s estimate with available repair records, and discuss representation for new, denied or partially paid claims.',
    topics: [
      { title: 'Pipe and appliance leaks', text: 'Bring the plumber’s findings, discovery date, photographs and mitigation records. The repair to the failed part and the resulting property damage may have different treatment under the policy.' },
      { title: 'Moisture beyond the visible stain', text: 'Include available moisture readings, drying logs and professional reports. These can help explain which materials were affected and why the proposed repair scope needs review.' },
      { title: 'Roof leaks and rising water', text: 'Describe how water entered the property. Rain entering through roof damage and water rising from outside can involve different coverage; bring any separate flood policy.' },
      { title: 'Repair and contents estimates', text: 'Compare itemized repair estimates and inventories with the insurer’s breakdown. Replacement cost, depreciation, limits and deductibles need to be considered together.' },
      { title: 'Mitigation and temporary housing', text: 'Keep drying, temporary-protection and displacement receipts. We can review the relevant policy provisions and documented costs rather than assume every expense is payable.' },
      { title: 'A disputed decision', text: 'If the insurer cites wear, maintenance or a gradual leak, bring the written explanation and records addressing the source and timeline. Those details guide the next conversation.' },
    ],
    questions: [
      { q: 'Does homeowners insurance cover water damage in Florida?', a: 'Coverage depends on the cause, policy wording, exclusions and evidence. A sudden pipe failure, a long-running leak and rising floodwater can be treated differently. A review should compare the reported event with the actual policy.' },
      { q: 'Should I wait for the adjuster before addressing the water?', a: 'Do not delay urgent safety or damage-control measures to wait for a claim review. Use qualified help where needed, follow the insurer’s instructions and preserve dated photographs, reports and receipts when safe to do so. Public adjusting is separate from emergency repair services.' },
      { q: 'What if my insurer’s estimate misses moisture damage?', a: 'Bring both the insurer’s estimate and the available moisture, mitigation or contractor reports. We can discuss differences in the documented scope and whether representation is appropriate.' },
      { q: 'How much does a water damage public adjuster charge?', a: feeTerms },
      { q: 'How long do I have to report water damage?', a: 'Check the policy’s reporting requirements promptly and contact your insurer. The loss date, policy and applicable deadlines matter; do not wait for our review before reporting or seeking time-sensitive advice.' },
    ], related: ['mold-claims', 'roof-damage', 'denied-claims'],
  },
  'fire-damage': {
    title: 'Fire & Smoke Damage Public Adjuster | Claim Guardians',
    description: 'Get help reviewing fire and smoke property claims, damage records, contents inventories and insurer estimates. Request a free initial claim review.',
    hero: 'Fire & smoke claim support.', label: 'Fire & smoke', eyebrow: 'Property claims / Fire & smoke', image: '/images/hero-fire-damage.png',
    introduction: 'After a fire, the claim may involve the building, smoke-affected belongings and expenses while the property cannot be used. We help homeowners and businesses organize those records and discuss the insurer’s response.',
    topics: [
      { title: 'Building damage', text: 'Bring the incident report, dated photographs and any contractor or structural assessments. The documented condition helps support a discussion of repair versus replacement.' },
      { title: 'Smoke and soot findings', text: 'Include assessments of affected rooms, finishes and systems. A qualified specialist’s findings can help explain proposed cleaning, testing or replacement work.' },
      { title: 'Contents inventory', text: 'A room-by-room list, photographs, receipts and replacement estimates help explain the affected belongings. The policy determines valuation and applicable limits.' },
      { title: 'Temporary living expenses', text: 'Keep displacement dates and itemized receipts. We review these against any applicable additional living expense provisions and limits.' },
      { title: 'Water used during suppression', text: 'Record damage associated with firefighting water and any subsequent mitigation. Different damage components should be described clearly in the claim records.' },
      { title: 'The insurer’s proposed scope', text: 'Bring the estimate and coverage letters. We compare the written findings with available records and discuss omissions or disagreements that need a response.' },
    ],
    questions: [
      { q: 'Can you review smoke damage without direct flame damage?', a: 'Yes. Bring photographs, the reported fire event and any professional smoke or soot findings. Whether damage is covered and which work is payable depend on the policy and evidence.' },
      { q: 'What should I do before a fire claim review?', a: 'Follow emergency officials’ directions and do not enter a restricted or unsafe building. Once safe, retain incident reports, photographs, contents records and receipts. The claim review is separate from emergency response and remediation.' },
      { q: 'How long does a fire damage claim take?', a: 'There is no single completion time to promise. Scope, access, documentation, coverage questions and the insurer’s response affect the process. Ask what information is outstanding and what the next step is for your claim.' },
      { q: 'Can you review a fire claim after a denial or payment?', a: 'We can discuss the written decision, payment breakdown and supporting records. Further options depend on the policy, claim history, evidence and applicable deadlines.' },
      { q: 'How much does fire claim representation cost?', a: feeTerms },
    ], related: ['water-damage', 'mold-claims', 'denied-claims'],
  },
  'roof-damage': {
    title: 'Roof Damage Insurance Claim Help Florida | Claim Guardians',
    description: 'Review roof damage claim records, inspection findings, repair estimates and the insurer’s decision. Request a free initial review with Claim Guardians.',
    hero: 'Roof damage public adjuster.', label: 'Roof damage', eyebrow: 'Property claims / Your roof', image: '/images/hero-roof-damage.png',
    introduction: 'A roof claim needs more than a replacement quote. We help review the documented cause, inspection findings, proposed repair scope and insurance response so you can evaluate representation for your property claim.',
    topics: [
      { title: 'Wind and hail findings', text: 'Bring dated photographs and a qualified roof inspection describing affected components and the reported event. Existing condition and storm-related damage need to be distinguished.' },
      { title: 'Repair versus replacement', text: 'Compare the insurer’s proposed work with the contractor’s itemized findings. A full replacement is not automatic; the required work and applicable coverage need separate review.' },
      { title: 'Interior water damage', text: 'Document ceiling, wall and insulation damage alongside the reported roof opening. Include mitigation records and the timeline of water entry.' },
      { title: 'Decking and other components', text: 'Include available findings about decking, underlayment, flashing and gutters. Identify what is documented and what still requires a safe professional inspection.' },
      { title: 'Code requirements', text: 'Ask the licensed contractor and local building authority to identify applicable requirements. Any insurance payment for those costs depends on the policy.' },
      { title: 'Age or wear disputes', text: 'If the insurer cites age, pre-existing damage or wear, bring the decision and any prior inspection, repair or permit records relevant to the disputed finding.' },
    ],
    questions: [
      { q: 'Does roof damage always qualify for a full replacement?', a: 'No. Repair scope depends on the documented damage, roof condition and applicable building requirements. Insurance payment also depends on the cause, policy terms, limits and deductible.' },
      { q: 'How can I prepare for a roof claim review?', a: 'Bring existing inspection reports, photographs, repair records, the policy and the insurer’s estimate. Do not climb onto the roof to collect information for us; use qualified professionals for access and inspection.' },
      { q: 'Can you review a roof claim denied for wear and tear?', a: 'We can discuss the written reason and evidence about the roof’s condition and reported event. A review helps assess whether representation is appropriate; it does not establish coverage by itself.' },
      { q: 'Does Florida’s 25% roof rule always require replacement?', a: 'No. Florida Statutes section 553.844(5) contains an exception for qualifying roofs built, repaired or replaced under the 2007 Florida Building Code or later editions. Ask the contractor and local building authority to confirm the applicable scope. Insurance coverage is a separate question.' },
      { q: 'How much does roof claim representation cost?', a: feeTerms },
    ], related: ['water-damage', 'hurricane-damage', 'mold-claims'],
  },
  'hurricane-damage': {
    title: 'Hurricane Damage Public Adjuster Florida | Claim Guardians',
    description: 'Hurricane and storm property claim help in Florida. Review wind, water and roof damage records, the policy and insurer estimate. Request a free initial review.',
    hero: 'Hurricane & storm claim help.', label: 'Hurricane & storm', eyebrow: 'Property claims / Wind, hail & storms', image: '/images/hero-hurricane-damage.png',
    introduction: 'Storm claims can involve several causes of damage and more than one policy. We help organize the loss timeline, supporting records and insurer estimates to discuss the representation your property claim needs.',
    topics: [
      { title: 'Wind and exterior damage', text: 'Document the reported event and affected roof, windows, siding and other exterior components. Include available inspection findings and temporary-protection receipts.' },
      { title: 'Rain entry and rising water', text: 'Describe where water entered and when. Wind-driven rain, surge and other flooding can involve different exclusions or policies; do not combine them into a single assumed coverage.' },
      { title: 'Building assessments', text: 'Bring contractor or engineering findings already obtained. If additional specialist work is proposed, confirm its purpose, availability and expense before commissioning it.' },
      { title: 'Contents and other structures', text: 'Keep photographs and itemized inventories for affected belongings and separate structures. Review each applicable coverage and limit with the policy.' },
      { title: 'Displacement and mitigation', text: 'Retain receipts for temporary protection, emergency work and displacement. Documentation supports review but does not make every expense payable.' },
      { title: 'Deductibles and partial payments', text: 'Bring the declarations, endorsements and payment breakdown. A hurricane deductible or prior payment can materially affect the claim calculation.' },
    ],
    questions: [
      { q: 'Does a homeowners policy cover all hurricane damage?', a: 'No single coverage applies to every storm loss. Wind, rain entry and rising floodwater can be treated differently. Review all applicable policies, exclusions, limits and deductibles against the documented cause.' },
      { q: 'What is my hurricane deductible?', a: 'Check your declarations and hurricane endorsements. The deductible and its calculation depend on your policy; use that wording and the insurer’s breakdown rather than assume a standard percentage.' },
      { q: 'Can you review a denied or partially paid hurricane claim?', a: 'Yes. We can discuss the decision, estimate, damage timeline and supporting evidence. Whether another step is available depends on the policy, claim history and applicable deadlines.' },
      { q: 'How soon should I report storm damage?', a: 'Check reporting requirements promptly and contact the insurer. Do not wait for a public adjuster review before taking required reporting steps or seeking advice on a deadline.' },
      { q: 'What should I confirm before hiring a storm claim adjuster?', a: 'Verify the assigned professional’s license for your state, inspection availability and written representation terms. ' + feeTerms },
    ], related: ['roof-damage', 'water-damage', 'denied-claims'],
  },
  'mold-claims': {
    title: 'Mold Damage Insurance Claim Help Florida | Claim Guardians',
    description: 'Discuss mold-related property claim records, water-source evidence, professional assessments and policy limits. Request a free initial claim review.',
    hero: 'Mold damage claim help.', label: 'Mold damage', eyebrow: 'Property claims / Moisture & mold', image: '/images/hero-mold-damage.png',
    introduction: 'Mold-related coverage depends on the reported cause and the policy, including any specific limits or exclusions. We help review the water timeline, available professional assessments and the insurer’s explanation. Public adjusting is separate from mold testing and remediation.',
    topics: [
      { title: 'The moisture source', text: 'Bring plumbing, roof or mitigation records explaining the suspected source and discovery date. A water event alone does not establish coverage for every resulting expense.' },
      { title: 'Assessment and testing records', text: 'Include reports already prepared by qualified specialists. Discuss whether further assessment is needed, who would perform it and how its expense would be handled.' },
      { title: 'Proposed remediation', text: 'Bring itemized estimates identifying affected materials and proposed work. The remediation scope and insurance payment need separate review.' },
      { title: 'Policy limits and exclusions', text: 'Locate mold-related endorsements, sublimits and the insurer’s written reasoning. Documented damage does not automatically remove a contractual limit.' },
      { title: 'Belongings and displacement', text: 'Keep inventories, professional recommendations and receipts. Their treatment depends on the applicable policy provisions and evidence.' },
      { title: 'A denied mold claim', text: 'If the decision cites maintenance or a pre-existing condition, bring records addressing that finding and a timeline of previous reports or repairs.' },
    ],
    questions: [
      { q: 'Does homeowners insurance cover mold in Florida?', a: 'It depends on the policy, cause and evidence. Mold coverage may have exclusions or specific limits even when associated with water damage. Bring the endorsements and written decision for review.' },
      { q: 'Does Claim Guardians perform mold testing or remediation?', a: 'This page concerns representation for the property insurance claim. Testing, remediation and assessments of safe occupancy require appropriately qualified professionals. Confirm any separately proposed work and expenses in writing.' },
      { q: 'Can a public adjuster remove my policy’s mold limit?', a: 'Documenting the loss does not automatically override a policy limit. A review considers the applicable wording, the cause and the insurer’s explanation to discuss whether a particular payment or limitation needs further review.' },
      { q: 'Can an online estimate tell me the remediation cost?', a: 'A useful estimate requires the property-specific scope and qualified assessment. Bring an itemized proposal; a general price range cannot establish either the repair cost or what an insurer owes.' },
      { q: 'How much does mold claim representation cost?', a: feeTerms },
    ], related: ['water-damage', 'roof-damage', 'denied-claims'],
  },
  'denied-claims': {
    title: 'Denied Property Insurance Claim Help | Claim Guardians',
    description: 'Denied or underpaid property insurance claim? Review the written decision, policy, estimates and evidence with Claim Guardians. Request a free initial review.',
    hero: 'Denied or underpaid?', label: 'Denied & underpaid', eyebrow: 'Property claims / Understand the decision', image: '/images/hero-denied-claims.png',
    introduction: 'A denial or partial payment needs a specific explanation. We help property owners review the insurer’s written reasons and available evidence to discuss whether public adjusting representation fits the disputed claim.',
    topics: [
      { title: 'The written decision', text: 'Bring the complete denial or payment explanation, including policy provisions cited by the insurer. Identify the finding you disagree with and the evidence addressing it.' },
      { title: 'Cause and existing condition', text: 'Inspection reports, dated photographs and prior repair records can help explain a disagreement over storm damage, wear or a pre-existing condition.' },
      { title: 'Reporting and claim history', text: 'Keep the loss date and a timeline of reports, inspections and correspondence. Do not wait for a claim review if a notice, response or legal deadline may be approaching.' },
      { title: 'Estimate differences', text: 'Compare itemized contractor and insurer estimates. A price difference alone does not prove underpayment; scope, valuation, limits and deductibles also matter.' },
      { title: 'Depreciation and withheld amounts', text: 'Bring the payment calculation and policy wording. Whether a withheld amount is recoverable depends on the policy and any required conditions or documentation.' },
      { title: 'Choosing the appropriate help', text: 'Public adjusting addresses property claim documentation and negotiation within the agreed scope. Questions about legal rights, litigation or a legal deadline should go to a qualified attorney.' },
    ],
    questions: [
      { q: 'Can a public adjuster help with a denied insurance claim?', a: 'A public adjuster can review the property claim decision, policy and supporting records to assess whether representation is appropriate. A review does not guarantee reopening, reversal or additional payment.' },
      { q: 'How long do I have to challenge a denied claim?', a: 'There is no single deadline that safely applies to every claim. The state, loss date, policy and type of action matter. Review the insurer’s correspondence promptly and ask a qualified attorney about legal deadlines; do not wait for our review.' },
      { q: 'Does a contractor estimate prove that my claim is underpaid?', a: 'No. It is useful evidence to compare with the insurer’s scope, but coverage, valuation, depreciation, limits and deductibles also affect the payment calculation.' },
      { q: 'Do I need a lawyer or a public adjuster?', a: 'That depends on the dispute. A public adjuster can help document and negotiate a property claim within the agreed role. An attorney provides legal advice and representation. A claim review should not delay time-sensitive legal advice.' },
      { q: 'Does this service cover health or auto insurance denials?', a: 'This service concerns homeowners and commercial property damage claims. Describe the property, damage and insurer’s written decision when requesting a review.' },
      { q: 'How much does a denied claim review cost?', a: feeTerms },
    ], related: ['hurricane-damage', 'roof-damage', 'water-damage'],
  },
} satisfies Record<string, Detail>;

export type ServiceSlug = keyof typeof serviceDetails;
