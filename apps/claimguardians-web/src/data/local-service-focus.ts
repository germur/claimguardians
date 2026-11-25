export const localServiceFocus: Record<string, {
  description: string; intro: string; priorities: string[]; prompt: string;
}> = {
  'Los Angeles': {
    description: 'Los Angeles public adjuster services for home and business property claims, including fire, smoke and water damage. Discuss your claim and written terms.',
    intro: 'For a home, rental property or business in Los Angeles County, Claim Guardians reviews the property policy, documents the reported loss and discusses representation with the insurer. Fire and smoke claims can involve the building, contents and expenses as well as the proposed cleanup.',
    priorities: ['Fire or smoke claim: compare the insurer’s repair and cleaning scope with the damage records and any professional assessment.', 'A property that did not burn: discuss the documented soot, odor or contents concerns without assuming that exposure alone establishes coverage.', 'Denied or partially paid claim: review the written decision, estimate and disputed items before discussing representation.'],
    prompt: 'Tell us the property location, type of damage and whether the insurer has opened, paid or denied the claim.',
  },
  Sacramento: {
    description: 'Sacramento public adjuster services for residential and commercial property claims. Review water, storm, fire or underpaid claims and discuss representation.',
    intro: 'Claim Guardians discusses residential and commercial property claims in Sacramento County, including water leaks, storm damage, fire and disputed estimates. The first conversation establishes the property location, policy and claim stage, then confirms the professional and scope appropriate to the request.',
    priorities: ['Water loss: distinguish a plumbing failure, rain entering the building and rising floodwater, then identify the relevant policy and records.', 'Repair estimate disagreement: compare the damaged rooms, materials and inspection findings with the insurer’s proposed work.', 'Before engagement: confirm the assigned professional’s current California credentials, inspection availability, fees and written scope.'],
    prompt: 'Briefly describe the property damage, the date it appeared and any decision or payment already received.',
  },
  Miami: {
    description: 'Miami public adjuster services for home, condo and commercial property claims. Discuss water, hurricane, roof or underpaid claims and request a free review.',
    intro: 'Claim Guardians reviews home, condominium and commercial property claims in Miami-Dade County. For water, roof or hurricane damage, the review connects the reported source of damage with the policy and the insurer’s estimate. Condo claims may also require separating unit and association responsibilities.',
    priorities: ['Water or flood claim: identify how water entered and bring the relevant property and flood policy documents, if held; coverage is not assumed.', 'Condo damage: distinguish the unit, contents and common areas using the policy and association correspondence.', 'Denied or underpaid claim: identify the specific repair items or coverage decision in dispute before discussing representation.'],
    prompt: 'Tell us whether the property is a home, condo or business, the damage type and the current claim status.',
  },
  'West Palm Beach': {
    description: 'West Palm Beach public adjusters for storm, hurricane, roof and other property claims. Get help reviewing damage records and request a free initial review.',
    intro: 'For a West Palm Beach property, begin the review with the reported storm date, the roof inspection and any photos of interior water damage. Those records help us compare the proposed repairs and the insurer’s written estimate.',
    priorities: ['Record when wind damage, an opening or water entry was first observed.', 'Keep temporary protection receipts and pre-loss roof repair records together.', 'For a disputed estimate, flag missing rooms, materials or roof sections.'],
    prompt: 'Tell us which areas were affected and whether you have received the insurer’s estimate or a written decision.',
  },
  Naples: {
    description: 'Naples public adjuster services for home, condo and business property claims. Discuss wind, roof or water damage and ask for a free initial review.',
    intro: 'For a Naples property, record where water entered and which parts of the building were affected. When a wind or roof claim may involve outdoor flooding too, bring both policies if you have them.',
    priorities: ['Keep separate photos of exterior damage and interior water marks.', 'For a condo, bring any inspection notes or repair decisions from the association.', 'Identify wind, roof or flood items the insurer has addressed in writing.'],
    prompt: 'Describe the damage and tell us whether the property is a home, condo or business.',
  },
  'San Diego': {
    description: 'San Diego public adjuster services for residential and commercial property claims. Review your documentation for water, fire, smoke or disputed damage.',
    intro: 'For residential or commercial claims in San Diego County, start with the insurer’s latest estimate and the records tied to it. For water damage, keep plumber and drying reports. For smoke damage, keep any assessment that describes the rooms and contents affected.',
    priorities: ['Separate the reported source of damage from later mitigation work.', 'Identify relevant clean-up and repair line items in each estimate.', 'Confirm the assigned adjuster’s California credentials before engagement.'],
    prompt: 'Tell us the loss type, property location and what the insurer has said so far.',
  },
  Orlando: {
    description: 'Orlando public adjuster services for home and business property claims, including storm, roof and water damage. Request a free initial claim review.',
    intro: 'For an Orlando-area claim, use the date you noticed the damage, dated photos and any contractor report to explain what changed after the reported loss. Where a roof issue and an interior leak are both involved, bring records for each.',
    priorities: ['Document interior damage by room and retain the roof or plumbing report.', 'Compare the insurance estimate and contractor scope item by item.', 'Keep receipts for emergency protection or drying.'],
    prompt: 'Describe the first sign of damage and tell us if the insurer has already inspected the property.',
  },
};
