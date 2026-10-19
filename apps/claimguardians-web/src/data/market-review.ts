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
  } else if (city === 'West Palm Beach') {
    profile.heading = 'Roof and storm claim review in West Palm Beach';
    profile.intro = 'For a West Palm Beach roof or storm claim, organize the sequence from the first signs of damage to inspection, temporary protection and the insurer’s decision. That timeline helps distinguish the reported event from earlier repairs or maintenance issues.';
    profile.documents.push('Roof inspection findings, prior repair records and receipts for temporary protection, if available.');
    profile.faq.push({ q: 'What if my West Palm Beach roof claim was attributed to wear or maintenance?', a: 'Bring the insurer’s written reasoning, dated damage photographs and any roof inspection or repair records. A review can compare the disputed findings with the available evidence, without promising that the insurer will change its decision.' });
    profile.services = [{ label: 'Roof damage claims', href: '/services/roof-damage/' }, { label: 'Hurricane and wind claims', href: '/services/hurricane-damage/' }];
  } else if (nc) {
    profile.faq.push({ q: 'Does a North Carolina homeowners policy cover every type of storm damage?', a: 'No. Coverage for wind, hail or flood can differ between policies, and some protection may be separate or excluded. Ask your agent or insurer which coverage applies and bring all relevant policies to the review.' });
  }
  return profile;
}

export const deniedPropertyFaq = [
  { q: 'Can you review a denied homeowners or commercial property claim in North Carolina?', a: 'We can discuss the written denial, policy and damage records to assess whether public adjusting representation is appropriate. This service concerns property insurance claims. A review does not guarantee a reversal or additional payment.' },
  { q: 'What should I do first after a property claim denial?', a: 'Read the written decision and identify the policy terms and facts the insurer relied on. Keep the decision, photographs, estimates and communication history. Ask the insurer for clarification where the explanation is incomplete.' },
  { q: 'Is a public adjuster the same as an attorney?', a: 'No. Public adjusting concerns documenting and negotiating the property insurance claim within the agreed scope. Legal advice or representation in a lawsuit requires an attorney. The North Carolina Department of Insurance also offers consumer assistance, with limits on what it can resolve.' },
  { q: 'Can an older denial still be reviewed?', a: 'That depends on the loss date, policy terms, previous communications and applicable deadlines. Share the dates at the initial conversation; do not assume that a review extends a deadline or that a claim can always be reopened.' },
  { q: 'How much does the initial review cost?', a: 'The initial review is free. Any representation requires a separate written agreement explaining scope, fees, expenses and cancellation terms before signing.' },
];
