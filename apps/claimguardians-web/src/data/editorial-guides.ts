export interface EditorialGuide {
  slug: string;
  title: string;
  heading: string;
  description: string;
  intro: string;
  category: string;
  sections: [string, string][];
  checklist: string[];
  sources: [string, string][];
  service?: [string, string];
  related: string[];
}

const naic: [string, string] = ['NAIC homeowners claim guidance', 'https://content.naic.org/article/what-you-need-know-when-filing-homeowners-claim'];
const florida: [string, string] = ['Florida Department of Financial Services public adjuster guidance', 'https://www.myfloridacfo.com/division/consumers/storm/public-adjusters'];
const california: [string, string] = ['California Department of Insurance residential claims guide', 'https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/res-prop-claim.cfm'];
const northCarolina: [string, string] = ['North Carolina Department of Insurance public adjuster guide', 'https://www.ncdoi.gov/consumer-guide-public-adjusters/open'];
const floodSmart: [string, string] = ['FloodSmart instructions for starting an NFIP claim', 'https://www.floodsmart.gov/recover/start-a-claim'];
const fileClaim = 'how-to-file-a-homeowners-insurance-claim';
const denial = 'home-insurance-claim-denied';
const flood = 'how-to-file-a-flood-insurance-claim';
const water = 'water-damage-insurance-claim';
const roof = 'roof-damage-insurance-claim';
const fees = 'public-adjuster-fees';
const adjuster = 'what-is-a-public-adjuster';
const supplement = 'supplemental-homeowners-insurance-claim';
const depreciation = 'recoverable-depreciation';

export const editorialGuides: EditorialGuide[] = [
  {
    slug: denial,
    title: 'Home Insurance Claim Denied? What to Do Next in 5 Steps',
    heading: 'Home Insurance Claim Denied? Start With the Letter',
    description: 'Home insurance claim denied? Learn how to read the denial letter, match it to your policy, gather evidence, and choose your next step. Get the checklist.',
    intro: 'If your home insurance claim was denied, start with the insurer’s written explanation. Find the policy provision it cites and compare the stated reason with your claim documents. Keep a copy of the letter and organize the evidence before deciding whether to ask for clarification, request a review, or seek help.',
    category: 'Claim decisions',
    sections: [
      ['1. Get the decision in writing', 'Ask which items were denied and for the policy language behind each decision. A partial payment can involve a denied item, depreciation, a deductible or a scope disagreement. Identify which one before deciding what to dispute.'],
      ['2. Match the reason to the policy', 'Read the declarations, the coverage and exclusions cited, and any endorsements in effect on the date of loss. Put the insurer’s explanation beside the relevant policy language and write down what remains unclear.'],
      ['3. Gather evidence that addresses the stated reason', 'For a disagreement about when damage occurred, organize dated photos and repair history. For a disagreement about the scope, compare the line items in the insurer and contractor estimates. Keep a record of each submission.'],
      ['4. Ask for clarification or review', 'Use the claim number and identify the specific finding you want the insurer to explain. Ask how to submit additional evidence, whether another inspection is available and what deadlines apply.'],
      ['5. Choose the kind of help you need', 'Your state insurance department can explain its complaint process. A public adjuster can review claim records and documented damage within an agreed scope. For legal advice about coverage or rights, consult an attorney.'],
      ['What if the claim was closed without payment?', 'Ask for the claim status and an explanation in writing. A file can be closed for different reasons. If the insurer cites wear or maintenance, match the cited finding to the inspection and separate earlier repairs from evidence of the event you reported. Ask how to submit information and whether any deadline applies.'],
    ],
    checklist: ['Written denial or partial-payment explanation', 'Policy, declarations and endorsements in force', 'Dated photos, repair history and estimates', 'Timeline of insurer correspondence and deadlines'],
    sources: [['Texas Department of Insurance explanation of common denial reasons', 'https://www.tdi.texas.gov/tips/why-would-my-home-insurance-claim-be-denied-or-not-paid.html'], florida, california, northCarolina],
    service: ['/services/denied-claims/', 'Help reviewing a denied or underpaid claim'],
    related: [supplement, adjuster],
  },
  {
    slug: flood,
    title: 'How to File a Flood Insurance Claim | Claim Guardians',
    heading: 'How to file a flood insurance claim',
    description: 'Identify your flood policy, report the loss, record damage safely and prepare the documents your flood insurer requests.',
    intro: 'Report the flood loss to the company or agent listed on your flood policy as soon as you can safely do so. Ask for your claim number and for the filing instructions that apply to your specific policy.',
    category: 'Filing a claim',
    sections: [
      ['Find the right insurance policy', 'Look for a separate flood policy or flood endorsement. Standard homeowners policies generally exclude flooding. Check whether your flood coverage is through the National Flood Insurance Program or a private insurer because the forms and deadlines can differ.'],
      ['Record the damage before cleanup', 'When it is safe to enter, photograph the water line, affected rooms and damaged items. Keep estimates, receipts and an inventory. Ask your insurer what to document before discarding damaged items.'],
      ['Review the adjuster report and filing requirements', 'Confirm whether your insurer needs a signed proof of loss, which documents to attach, and when they are due. If damage is missing from the scope, identify the affected rooms or items and send evidence through the insurer’s requested channel.'],
    ],
    checklist: ['Flood policy and claim number', 'Dated room photos and water-line photos', 'Inventory, estimates and cleanup receipts', 'Written insurer instructions for forms and deadlines'],
    sources: [floodSmart, naic, ['NFIP claim checklist for policyholders', 'https://www.floodsmart.gov/claims-checklist'], ['Miami-Dade County damage reporting', 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1500318029837608']],
    related: [water, fileClaim],
  },
  {
    slug: fees,
    title: 'Public Adjuster Fees Explained | Claim Guardians',
    heading: 'How public adjuster fees work',
    description: 'Learn how to review a public adjuster’s proposed fee, payment basis, expenses and contract before you sign.',
    intro: 'Ask for the fee in writing and confirm what it applies to. A percentage alone leaves out the payment basis, any separate expenses and what happens to amounts your insurer has already paid.',
    category: 'Working with an adjuster',
    sections: [
      ['Ask what amount the fee applies to', 'Read the fee clause alongside the scope. For a claim with payments already issued, ask whether those amounts are included and have the answer recorded in the contract.'],
      ['Questions to ask about a public adjuster contract', 'Ask for a written example using the fee basis in your proposed agreement, including how it treats any prior payment. Confirm which expenses require approval, when any fee is due, who performs the work and how cancellation works. Review the public adjuster rules for the state where the property is located.'],
      ['Check the rules for the property’s state', 'States may have different rules for contracts, cancellation, fee limits and disasters. Use the regulator’s current guidance and verify the assigned adjuster’s license.'],
      ['Separate the initial review from representation', 'Claim Guardians offers a free initial review. Any representation, fee and approved expenses are discussed under separate written terms. Ask how work ends and what documents you receive.'],
    ],
    checklist: ['Fee basis and example calculation', 'Treatment of earlier insurer payments', 'Expenses, scope and cancellation terms', 'Name and license of the assigned adjuster'],
    sources: [florida, california, northCarolina],
    related: [adjuster, denial],
  },
  {
    slug: roof,
    title: 'Roof Damage Insurance Claim Checklist | Claim Guardians',
    heading: 'Roof damage insurance claim checklist',
    description: 'Prepare a roof damage claim with a dated damage record, photos, repair estimates and a line-by-line coverage review.',
    intro: 'Start by recording when you noticed the damage and what you can observe safely from the ground or indoors. Contact your insurer and keep temporary repair receipts, photos and inspection records together.',
    category: 'Damage documentation',
    sections: [
      ['Document the roof and the interior separately', 'Record exterior observations and interior water marks by room. Save contractor photos and notes about where water may have entered. Use qualified help to inspect areas that are unsafe to reach.'],
      ['What to record after hail', 'Save the date of the reported storm and any safe photographs taken before temporary repairs. Ask the roof inspector to identify the locations and materials examined, what they observed and which conclusions are supported by the inspection. Compare those findings with the insurer’s explanation.'],
      ['Compare the written scopes', 'Check whether the insurer and contractor estimates include the same roof sections, quantities and materials. Ask for a written explanation of differences and document any temporary protection separately.'],
      ['What to ask for in a roof inspection report', 'Ask the inspector to date the report, identify the roof areas and materials examined, and label photos against those locations. Look for a description of what the inspector observed and the reasoning behind any proposed repair or replacement. Keep invoices for earlier roofing work so the insurer can review the timeline.'],
      ['Read the policy and payment documents', 'Locate your deductible and any roof-specific endorsement or valuation provision. Ask which items were excluded, depreciated or held for later payment and how to submit additional evidence.'],
    ],
    checklist: ['Date of loss and damage observations', 'Dated photos and repair history', 'Contractor scope and insurer estimate', 'Policy endorsements and receipts'],
    sources: [naic, california],
    service: ['/services/roof-damage/', 'Public adjusting for roof damage claims'],
    related: [water, depreciation, denial],
  },
  {
    slug: fileClaim,
    title: 'How to File a Homeowners Insurance Claim | Claim Guardians',
    heading: 'How to file a homeowners insurance claim',
    description: 'A practical walkthrough for reporting home damage, preserving evidence and reviewing your insurer’s estimate.',
    intro: 'When it is safe to do so, document the damage and notify your insurer using the contact information on your policy. Get the claim number, next steps and document requirements in writing.',
    category: 'Filing a claim',
    sections: [
      ['Record what happened', 'Write down when you first noticed the loss and which rooms or belongings were affected. Keep photos, receipts and records of reasonable temporary steps taken to protect the property.'],
      ['Prepare for the inspection', 'Share an inventory, photos and relevant estimates. Mark any areas that are inaccessible and ask how to document damage discovered during later repair work.'],
      ['Review the insurer’s written response', 'Match your inventory and scope to the insurer estimate. Ask how deductions, depreciation or limits were applied, and how the insurer accepts additional records.'],
      ['When to file and how to track the timeline', 'Report the loss promptly and confirm any notice, proof-of-loss and repair documentation requirements under your policy and state rules. Ask the insurer to explain the next milestone. Inspection, repair estimates and additional records can affect how long a review takes. Use your claim number when following up and keep a dated record.'],
      ['How the deductible appears on the payment', 'Your deductible is the part of a covered loss you are responsible for under the policy. Check which deductible the insurer used and confirm how it appears separately from depreciation, excluded items or other adjustments. Ask whether a separate deductible applies to the reported cause.'],
      ['Can you withdraw a homeowners insurance claim?', 'If your claim is still open, ask the insurer whether you can withdraw it and how to make that request in writing. Ask for written confirmation of the status, any prior payment or steps you may need to take, and how the claim will be recorded. A withdrawn claim can still be part of your claims history.'],
      ['Can a home or roof claim affect your premium?', 'Insurers can consider claims history when setting or renewing a premium. The impact of a single claim depends on the insurer, its rating rules, your policy and the circumstances of the loss. If you want to understand a change at renewal, ask the insurer what factors affected the price.'],
    ],
    checklist: ['Policy and claim number', 'Damage timeline, inventory and photos', 'Inspection reports and estimates', 'Copies of communications and submissions'],
    sources: [naic, california, ['NAIC consumer guidance on homeowners insurance and claims history', 'https://content.naic.org/article/consumer-insight-understanding-your-homeowners-or-renters-policy'], ['Insurify guide to withdrawing an open home insurance claim', 'https://insurify.com/homeowners-insurance/knowledge/cancel-a-home-insurance-claim/']],
    related: [water, flood, denial],
  },
  {
    slug: water,
    title: 'Water Damage Insurance Claim Checklist | Claim Guardians',
    heading: 'Water damage insurance claim checklist',
    description: 'Document the source and scope of water damage, organize drying records and check which policy may apply.',
    intro: 'When you report water damage, describe where the water came from, when you noticed it and which rooms it reached. These facts help your insurer identify which parts of the policy to review.',
    category: 'Damage documentation',
    sections: [
      ['Identify how the water reached the building', 'Record whether the water came from inside plumbing, entered through a possible storm-created opening, or rose from outside. Each scenario can involve different policy provisions, exclusions or separate flood coverage.'],
      ['If you suspect a water leak', 'Keep the plumber’s finding about the source and indicate when the leak was discovered and stopped. Record each affected area and save the drying logs and invoices. If the insurer cites gradual leakage or another exclusion, ask how it applies to the facts in the report.'],
      ['What to document in a kitchen, basement or ceiling', 'For a kitchen or an air-conditioning leak, ask for a report that identifies where the water started and when it was stopped. For a basement, record whether water rose from outside or escaped from plumbing inside. For stained ceilings or wet flooring, photograph the areas reached and keep notes on which materials dried in place and which had to be removed.'],
      ['Create a dated record', 'Take photos when it is safe, keep receipts for drying and temporary protection, and ask contractors for written findings. Record when the water was stopped and when materials were removed.'],
      ['Compare the restoration and insurer estimates', 'Group the disputed items by room and type of work, such as drying, demolition or rebuilding. Ask for the specific reason when an item appears in one estimate and is missing from the other.'],
    ],
    checklist: ['Date, suspected source and affected rooms', 'Dated photos and plumbing or contractor reports', 'Mitigation invoices and drying records', 'Any flood policy and insurer correspondence'],
    sources: [naic, floodSmart, california],
    service: ['/services/water-damage/', 'Public adjusting for water damage claims'],
    related: [flood, roof, fileClaim],
  },
  {
    slug: adjuster,
    title: 'What Is a Public Adjuster and When Can One Help?',
    heading: 'What is a public adjuster?',
    description: 'Learn who a public adjuster represents, what they can do on a property claim and what to check before hiring one.',
    intro: 'A public adjuster represents the policyholder on a property insurance claim within an agreed scope. An adjuster assigned by the insurer works on the insurer’s side of the claim.',
    category: 'Working with an adjuster',
    sections: [
      ['What a public adjuster does', 'Typical work includes reviewing the policy and claim records, documenting damage, preparing or reviewing estimates, and communicating with the insurer on the policyholder’s behalf. Ask which of these tasks the contract includes.'],
      ['Public, staff and independent adjusters', 'A staff adjuster works for an insurer. An independent adjuster may be contracted by the insurer to assess a claim. A public adjuster is hired by the policyholder under a separate agreement. Ask each professional who hired them and who they represent.'],
      ['When to hire a public adjuster', 'Consider a review if the damage spans several rooms, written estimates disagree, or you need help understanding what records belong in a claim file. Bring the insurer’s explanation if the claim has already been decided.'],
      ['Benefits and trade-offs of hiring a public adjuster', 'A public adjuster can help organize a complex damage record, compare repair estimates and communicate with the insurer. Representation can also involve fees, approved expenses and contract obligations. If the insurer’s scope is clear and you are comfortable managing the claim, you may choose to handle it yourself. Compare the specific work offered with the written terms before signing.'],
      ['Public adjuster or attorney?', 'For documenting damage, comparing estimates or negotiating a property insurance claim, ask a public adjuster what work is included in the written agreement. For legal advice, litigation or interpretation of legal rights and deadlines, speak with an attorney. Ask how each professional charges and who would handle the work.'],
      ['What to verify before hiring', 'Check the license in the property’s state, ask who will work on the claim, and review fees, expenses and cancellation terms. An attorney can advise on legal rights and coverage disputes that require legal advice.'],
    ],
    checklist: ['Property location and type of loss', 'Insurance policy and latest insurer letter', 'Assigned adjuster license and scope', 'Written agreement and fee terms'],
    sources: [florida, california, northCarolina, ['Florida insurance consumer advocate guide to working with a public adjuster', 'https://myfloridacfo.com/docs-sf/insurance-consumer-advocate-libraries/ica-documents/public-adjuster-consumer-tips.pdf']],
    related: [fees, fileClaim, denial],
  },
  {
    slug: supplement,
    title: 'How to Document a Supplemental Homeowners Insurance Claim',
    heading: 'How to document a supplemental homeowners insurance claim',
    description: 'Build a clear supplement request when a contractor discovers covered-loss-related damage or work missing from the original estimate.',
    intro: 'A supplemental claim asks the insurer to review additional damage or repair work related to a reported loss. Start by identifying exactly what changed since the original estimate and documenting why it belongs in the claim.',
    category: 'Claim decisions',
    sections: [
      ['Compare the two scopes', 'Match the current insurer estimate to the revised contractor estimate by room and line item. Identify omitted work, quantities that changed, or damage discovered after the initial inspection.'],
      ['Connect each change to the loss', 'Ask your contractor to explain what was found, when it was found and why the added work is relevant. Attach dated photos, a written scope and supporting records. Preserve evidence and ask the insurer about inspection before permanent work where feasible.'],
      ['Confirm submission instructions', 'Use the existing claim number, confirm the preferred channel and ask whether a new inspection or other documents are required. Keep a dated copy of what you send and the insurer’s response.'],
      ['What if the insurer closed the original claim?', 'Ask for the written status or decision, the latest estimate and the process for submitting new evidence. A closed claim, a denied item and newly discovered damage call for different questions. Ask the insurer what deadlines apply to the loss and whether it will review your additional documents.'],
    ],
    checklist: ['Original insurer estimate and claim number', 'Revised estimate with changed lines identified', 'Dated discovery photos and contractor explanation', 'Written submission and inspection instructions'],
    sources: [naic, ['Kin guide to supplemental claims', 'https://www.kin.com/claims/supplemental-claims/']],
    service: ['/services/denied-claims/', 'Request help reviewing a disputed claim scope'],
    related: [denial, depreciation, roof],
  },
  {
    slug: depreciation,
    title: 'Recoverable Depreciation in a Home Insurance Claim',
    heading: 'What is recoverable depreciation in a home insurance claim?',
    description: 'Learn what a depreciation holdback means and which repair records to check before requesting a later payment.',
    intro: 'Recoverable depreciation is an amount an insurer may initially withhold on some replacement cost claims and pay later if the relevant policy conditions are met. Check the insurer estimate and your policy for the amount and the requirements.',
    category: 'Claim decisions',
    sections: [
      ['Find the figures in the estimate', 'Look for the replacement cost, depreciation, actual cash value and deductible. Compare the line items the insurer marked as recoverable with the payment explanation.'],
      ['Check what the insurer requires', 'Ask the insurer what proof of completed repairs or replacements it needs and when to submit it. Keep invoices, receipts and written records that match the estimate’s items.'],
      ['Identify other payment differences', 'A deductible, an omitted item and depreciation each have different explanations. If the repair scope grew after the initial estimate, document that change as a separate question for the insurer.'],
    ],
    checklist: ['Policy valuation provision and insurer estimate', 'Payment explanation and holdback amounts', 'Itemized repair invoices or replacement receipts', 'Written proof and deadline requirements'],
    sources: [california, naic],
    related: [supplement, denial, roof],
  },
];

export const guideHref = (slug: string) => `/resources/${slug}/`;
