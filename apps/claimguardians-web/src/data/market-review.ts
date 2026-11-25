export type ReviewProfile = {
  heading: string; intro: string;
  topics: { title: string; text: string }[];
  documents: string[];
  services: { label: string; href: string }[];
  sources: { label: string; href: string }[];
  faq: { q: string; a: string }[];
};
const flSource = { label: 'Florida CFO: questions to ask about your policy and claim', href: 'https://www.myfloridacfo.com/Division/ICA/fullcoverage/homeowners/beyourownadvocate' };
const ncSource = { label: 'North Carolina DOI: homeowners insurance and consumer assistance', href: 'https://www.ncdoi.gov/consumers/homeowners-insurance' };
const caSource = { label: 'California DOI: wildfire claim resources and license checks', href: 'https://www.insurance.ca.gov/01-consumers/140-catastrophes/WildfireResources.cfm' };
const commonDocuments = ['Your policy declarations, coverage forms and endorsements.', 'Dated photographs, a damage timeline and any emergency repair receipts.', 'The insurer’s estimate, payments and written coverage decision, if available.'];
const flTopics = [
  { title: 'Separate the source of water', text: 'Describe how and when water entered. A plumbing leak, rain through a damaged roof and rising floodwater may involve different coverage questions.' },
  { title: 'Compare the estimate with the damage', text: 'Make a room-by-room list of disputed repair items. Keep contractor findings and repair records together so the review can address specific gaps.' },
  { title: 'Bring the policy, not just the payment', text: 'The review needs the coverage wording, applicable deductibles and insurer’s explanation. A payment amount alone does not show what remains in dispute.' },
];
const ncTopics = [
  { title: 'Identify the disputed cause', text: 'Separate the damage attributed to wind, hail, water entry or flooding. Ask your insurer which policy terms it relied on for each part of the decision.' },
  { title: 'Organize a denied or partial payment', text: 'Bring the denial letter and insurer’s estimate. Match each disputed finding with photographs, inspection notes or a contractor’s explanation.' },
  { title: 'Check the next step for this claim', text: 'A previous denial or payment does not establish whether a claim can be changed. The policy, loss date, prior communications and applicable deadlines need review.' },
];
const caTopics = [
  { title: 'Describe fire and smoke separately', text: 'Record direct fire damage and separately describe soot, odor, affected rooms and contents. Questions about testing or remediation should go to appropriately qualified professionals.' },
  { title: 'Keep an inventory and expense record', text: 'Organize damaged contents and any displacement expenses with receipts. Ask the insurer to explain the applicable coverage and documentation requirements.' },
  { title: 'Understand the proposed work', text: 'Compare the insurer’s scope with inspection or remediation findings. A review can identify a disagreement; it cannot promise a particular coverage decision or payment.' },
];

interface CityReview {
  summary: string;
  heading: string;
  intro: string;
  topics: ReviewProfile['topics'];
  documents: string[];
  services: ReviewProfile['services'];
  source: ReviewProfile['sources'][number];
}

const cityReviews: Record<string, CityReview> = {
  'Fort Myers': {
    summary: 'Fort Myers public adjusting for homeowners and businesses in Lee County. Discuss a storm, roof or disputed property claim and request a free initial review.',
    heading: 'Storm and roof claim review in Fort Myers',
    intro: 'If a storm affected your Fort Myers property, start with a dated record of what happened to the roof, interior and any areas reached by outdoor water. We can compare those records with the insurer’s written estimate.',
    topics: [
      { title: 'Trace the first signs of damage', text: 'Note when and where you first saw roof damage, water indoors or water rising from outside. Keep the observations separate in your timeline.' },
      { title: 'Compare estimates by area', text: 'Use the insurer and contractor estimates to mark which rooms, roof sections or materials are missing or measured differently.' },
      { title: 'Bring both policies if you have them', text: 'If the property also has a flood policy, bring it and any related claim correspondence so each part of the reported loss can be reviewed.' },
    ],
    documents: ['Roof inspection findings and temporary repair receipts.', 'Any separate flood policy, damage photos and claim correspondence.'],
    services: [{ label: 'Hurricane and wind claim support', href: '/services/hurricane-damage/' }, { label: 'Roof damage claim checklist', href: '/resources/roof-damage-insurance-claim/' }],
    source: { label: 'Lee County flood hazard information', href: 'https://www.leefl.gov/599/Flood-Hazards' },
  },
  'Fort Lauderdale': {
    summary: 'Fort Lauderdale public adjusting for homes, condos and businesses. Discuss water, storm or disputed property claims and request a free initial review.',
    heading: 'Water and condominium claim review in Fort Lauderdale',
    intro: 'For a Fort Lauderdale water claim, identify where water first appeared and what the plumber, mitigation firm or building manager reported. A condominium claim may involve both unit records and association documents.',
    topics: [
      { title: 'Record the water source', text: 'Keep findings that describe a plumbing leak, roof opening or water entering from outside. Ask the insurer which policy or coverage it is reviewing.' },
      { title: 'Organize the unit and association records', text: 'Keep the unit policy, any association notices and a room-by-room list of damage. Note which parts of the property each inspection addressed.' },
      { title: 'Explain what is missing from the estimate', text: 'Identify the work already completed and compare it with the insurer’s scope. Attach an invoice, report or dated photograph to each disputed item.' },
    ],
    documents: ['Plumber or drying report with the date and affected rooms.', 'Unit policy and relevant association or building-management correspondence.'],
    services: [{ label: 'Water damage claim support', href: '/services/water-damage/' }, { label: 'Water damage documentation checklist', href: '/resources/water-damage-insurance-claim/' }],
    source: { label: 'City of Fort Lauderdale flood risk maps', href: 'https://www.fortlauderdale.gov/Government/Departments/Development-Services/Permitting-Services/Flood/Flood-Risk-Information' },
  },
  'Cape Coral': {
    summary: 'Cape Coral public adjusting for homeowners and businesses. Review records for wind, roof or other property damage and request a free initial review.',
    heading: 'Wind, roof and water documentation in Cape Coral',
    intro: 'For a Cape Coral storm claim, make a record of the roof and exterior damage, then document any water marks and the rooms reached. Photos and inspection notes help trace the reported source of each loss.',
    topics: [
      { title: 'Mark the water line and entry points', text: 'Keep dated photos of water marks, exterior openings and affected contents, taken only when it is safe. If you obtained a report identifying the water source, retain a copy.' },
      { title: 'Keep the roof condition documented', text: 'Save current and prior roof reports, contractor photos and receipts for temporary protection. Flag any area the insurer and contractor describe differently.' },
      { title: 'Keep separate claim records together', text: 'If you reported damage to a property insurer and a flood insurer, keep their estimates, letters and claim numbers separately labeled.' },
    ],
    documents: ['Photographs of exterior openings, water marks and affected rooms.', 'Any building inspection, roof report or separate flood claim documents.'],
    services: [{ label: 'Hurricane and wind claim support', href: '/services/hurricane-damage/' }, { label: 'How to file a flood insurance claim', href: '/resources/how-to-file-a-flood-insurance-claim/' }],
    source: { label: 'City of Cape Coral flood protection resources', href: 'https://www.capecoral.gov/departments/development_services/building_division/flood_protection.php' },
  },
  Charlotte: {
    summary: 'Charlotte public adjusting for homes and businesses in Mecklenburg County. Discuss roof, storm or disputed property claims and request a free initial review.',
    heading: 'Roof, storm and disputed claims in Charlotte',
    intro: 'If storm or roof damage affected your Charlotte property, bring the roof findings and the written decision or estimate. For a commercial property, record building repairs and damaged stock or equipment as separate items.',
    topics: [
      { title: 'Document the roof and the interior', text: 'Keep photos taken from safe locations and any inspection report. Mark when the roof or exterior damage was noticed and where any interior staining first appeared.' },
      { title: 'Identify the disputed repair items', text: 'Compare the insurer and contractor scopes by roof area, room and material. For a written denial, keep the cited policy language with your evidence.' },
      { title: 'Gather records for a business property', text: 'Bring the lease if applicable, damage records and the latest insurer estimate. Ask what documents are needed for building repairs, contents or interruption expenses.' },
    ],
    documents: ['Roof findings, storm-date timeline and photographs.', 'Lease, business property inventory or denial letter where relevant.'],
    services: [{ label: 'Roof damage insurance claim checklist', href: '/resources/roof-damage-insurance-claim/' }, { label: 'Denied property claims in North Carolina', href: '/service-areas/north-carolina/denied-insurance-claim-nc/' }],
    source: { label: 'Charlotte-Mecklenburg Storm Water Services flood maps', href: 'https://www.charlottenc.gov/Services/Stormwater/Flood-Preparedness-and-Mitigation/Flooding-and-Maps' },
  },
};

export const getCityReview = (city: string): CityReview | undefined => cityReviews[city];

export function getMarketReview(city: string, state: string): ReviewProfile {
  const name = city || (state === 'NC' ? 'North Carolina' : state === 'CA' ? 'California' : 'Florida');
  const ca = state === 'CA';
  const nc = state === 'NC';
  const profile: ReviewProfile = {
    heading: `Prepare your ${name} property claim review`,
    intro: 'Start with the damage you can document and the decision you need explained. We review the policy and available records, identify missing information and discuss whether representation fits your situation.',
    topics: ca ? caTopics : nc ? ncTopics : flTopics,
    documents: [...commonDocuments, ca ? 'Any fire, smoke, remediation or contents assessment already obtained.' : nc ? 'Storm inspection reports and the correspondence explaining a denial or partial payment.' : 'Plumbing, roof or mitigation reports that describe the suspected source of damage.'],
    services: ca ? [{ label: 'Fire and smoke claims', href: '/services/fire-damage/' }, { label: 'Denied or underpaid claims', href: '/services/denied-claims/' }] : nc ? [{ label: 'Denied claims in North Carolina', href: '/service-areas/north-carolina/denied-insurance-claim-nc/' }, { label: 'Roof damage claims', href: '/services/roof-damage/' }] : [{ label: 'Water damage claims', href: '/services/water-damage/' }, { label: 'Hurricane and wind claims', href: '/services/hurricane-damage/' }],
    sources: [ca ? caSource : nc ? ncSource : flSource],
    faq: [
      { q: `What does a public adjuster do for a property claim in ${name}?`, a: 'A public adjuster represents the policyholder within an agreed scope: reviewing the policy, documenting the loss, preparing the claim and communicating with the insurer. Claim Guardians discusses residential and commercial property claims; the initial conversation establishes the situation and whether representation is appropriate.' },
      { q: `What should I bring to a claim review in ${name}?`, a: 'Bring your policy, dated photographs, repair or inspection records, and insurer correspondence. If you have a claim number, estimate or payment breakdown, keep those ready for the follow-up conversation. You do not need to upload private claim documents through this website form.' },
      { q: 'Can a denied or underpaid claim be reviewed?', a: 'A review can examine the written decision and supporting evidence. Whether further action is available depends on the policy, loss date, claim history and applicable deadlines. A review does not guarantee reopening or additional payment.' },
      { q: 'How much does the initial review cost, and what happens next?', a: 'The initial claim review is free. Tell us the property location and claim situation, and we will discuss the next step and any inspection availability. Representation requires a separate written agreement covering scope, fees, expenses and cancellation terms before you sign.' },
      { q: 'Can I request a review in Spanish?', a: 'Yes. Select Español as your preferred language on the request form. We serve homeowners and commercial property owners; tell us which type of property is involved when we contact you.' },
    ],
  };
  if (city === 'Los Angeles') {
    profile.heading = 'Fire and smoke claim review in Los Angeles';
    profile.intro = 'For a Los Angeles fire or smoke claim, describe what happened at the property and what the insurer has agreed or declined to address. A home that did not burn can still present a smoke-related question, but odor or proximity to a fire alone does not determine coverage.';
    profile.faq.push({ q: 'Can I ask about smoke damage if my Los Angeles home did not burn?', a: 'Yes. Describe the affected rooms, contents and any visible residue, and bring any professional assessment already completed. The review considers the policy and evidence; it does not assume that all smoke exposure requires the same testing, repairs or replacement.' });
  } else if (city === 'Miami') {
    profile.heading = 'Water, roof and condo claim review in Miami';
    profile.intro = 'For a Miami water or roof claim, start with where the damage appeared and the records explaining its source. For a condominium, also identify the unit policy and any association correspondence so the review can distinguish the parts of the claim being discussed.';
    profile.documents.push('For a condo: unit policy and association or building-management correspondence relevant to the damage.');
    profile.faq.push({ q: 'What records help with a Miami condo water claim?', a: 'Bring the unit policy, photographs, plumber or mitigation findings, and correspondence with the association and insurer. Responsibility and insurance coverage depend on the relevant documents; the review does not assume that every affected part belongs under the same policy.' });
    profile.faq.push({ q: 'Can I request help filing a flood damage claim in Miami?', a: 'Yes. Tell us how water entered and whether you have reported the loss. Keep any property and flood policies, dated damage photographs and emergency repair records ready for the follow-up. The initial review identifies the relevant coverage questions and whether representation is appropriate; it does not assume that flood damage is covered under a standard homeowners policy.' });
  } else if (city === 'Sacramento') {
    profile.heading = 'Water, storm and disputed property claims in Sacramento';
    profile.intro = 'Identify the damage, the policy and the part of the claim you need help with. A leaking pipe, rain through a damaged roof and rising floodwater can require different records and coverage analysis. For an existing claim, bring the insurer’s written response and estimate so the review can address specific disagreements.';
    profile.topics = [
      { title: 'Water and storm damage', text: 'Keep plumbing, roof or mitigation findings that explain the reported source and timing of the loss. Separate sudden damage from earlier repairs and maintenance questions.' },
      { title: 'Flood coverage questions', text: 'Bring any flood policy as well as the property policy. The review identifies which documents apply; it does not assume that a water loss is covered or excluded based only on its label.' },
      { title: 'Fire, smoke and contents', text: 'Organize the damaged rooms and contents, existing professional assessments and the insurer’s proposed work. Discuss any specific cleaning, repair or replacement disagreement.' },
    ];
    profile.services = [{ label: 'Water damage claim services', href: '/services/water-damage/' }, { label: 'Fire and smoke claim services', href: '/services/fire-damage/' }, { label: 'Denied or underpaid property claims', href: '/services/denied-claims/' }];
    profile.documents.push('Any plumbing, roof or mitigation findings explaining the source and timing of a water loss.');
    profile.faq.push({ q: 'Can a Sacramento public adjuster review a claim after a payment?', a: 'A review can compare the payment breakdown and insurer’s estimate with the policy and available damage records. Further representation depends on the loss date, claim history, policy terms and applicable deadlines; a prior payment does not guarantee that more money is available.' });
  } else if (city === 'West Palm Beach') {
    profile.heading = 'Storm, hurricane and roof claims in West Palm Beach';
    profile.intro = 'For a West Palm Beach roof or storm claim, organize the sequence from the first signs of damage to inspection, temporary protection and the insurer’s decision. That timeline helps distinguish the reported event from earlier repairs or maintenance issues.';
    profile.documents.push('Roof inspection findings, prior repair records and receipts for temporary protection, if available.');
    profile.faq.push({ q: 'What if my West Palm Beach roof claim was attributed to wear or maintenance?', a: 'Bring the insurer’s written reasoning, dated damage photographs and any roof inspection or repair records. A review can compare the disputed findings with the available evidence, without promising that the insurer will change its decision.' });
    profile.services = [{ label: 'Roof damage claims', href: '/services/roof-damage/' }, { label: 'Hurricane and wind claims', href: '/services/hurricane-damage/' }];
  } else if (nc) {
    profile.faq.push({ q: 'Does a North Carolina homeowners policy cover every type of storm damage?', a: 'No. Coverage for wind, hail or flood can differ between policies, and some protection may be separate or excluded. Ask your agent or insurer which coverage applies and bring all relevant policies to the review.' });
  }
  const cityReview = getCityReview(city);
  if (cityReview) {
    profile.heading = cityReview.heading;
    profile.intro = cityReview.intro;
    profile.topics = cityReview.topics;
    profile.documents = [...commonDocuments, ...cityReview.documents];
    profile.services = cityReview.services;
    profile.sources.push(cityReview.source);
  }
  if (ca) profile.faq.push({ q: 'How do I check the professional assigned to my California property claim?', a: 'Ask for the assigned professional’s name and current California public adjuster license number, then check the California Department of Insurance record before signing. Confirm availability and the written scope, fees, expenses and cancellation terms. A service-area page does not indicate a branch office in that city.' });
  return profile;
}

export const deniedPropertyFaq = [
  { q: 'Can you review a denied homeowners or commercial property claim in North Carolina?', a: 'We can discuss the written denial, policy and damage records to assess whether public adjusting representation is appropriate. This service concerns property insurance claims. A review does not guarantee a reversal or additional payment.' },
  { q: 'What should I do first after a property claim denial?', a: 'Read the written decision and identify the policy terms and facts the insurer relied on. Keep the decision, photographs, estimates and communication history. Ask the insurer for clarification where the explanation is incomplete.' },
  { q: 'Is a public adjuster the same as an attorney?', a: 'No. Public adjusting concerns documenting and negotiating the property insurance claim within the agreed scope. Legal advice or representation in a lawsuit requires an attorney. The North Carolina Department of Insurance also offers consumer assistance, with limits on what it can resolve.' },
  { q: 'Can an older denial still be reviewed?', a: 'That depends on the loss date, policy terms, previous communications and applicable deadlines. Share the dates at the initial conversation; do not assume that a review extends a deadline or that a claim can always be reopened.' },
  { q: 'How much does the initial review cost?', a: 'The initial review is free. Any representation requires a separate written agreement explaining scope, fees, expenses and cancellation terms before signing.' },
];
