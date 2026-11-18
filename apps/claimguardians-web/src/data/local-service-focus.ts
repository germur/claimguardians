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
};
