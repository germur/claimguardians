# Microsoft Clarity — October 20, 2026

Historical installation record: the direct component described below was subsequently replaced by GTM-PC3TN25S on the same date. Current configuration and validation: [MEDICION-GTM.md](MEDICION-GTM.md). Explicit form masking remains in place.

- Project: `z0pqzdcaeo`.
- Shared component in `BaseLayout`: one async bootstrap per page. Only the canonical production hostname and its www alias load the remote tag; local and deployment previews are excluded. A runtime guard avoids duplicate initialization.
- `LeadCaptureForm` and the complete multistep `LeadForm` container explicitly mask their contents with `data-clarity-mask="True"`, including future child elements. Microsoft documents this attribute at https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking.
- Privacy policy discloses Clarity, session recordings, usage data, masking, and Microsoft's privacy statement.
- GA4 `G-R0GH89D0MF` and existing successful-lead/contact instrumentation are unchanged.
- No consent-granted signals are fabricated. There is currently no consent-management platform; installation alone is not a verification of consent compliance or dashboard data receipt.

## Validation

Astro check: no errors or warnings. Production build: 44 pages. SEO checks: 5 passed. Browser suite: 17 passed, including all-page bootstrap uniqueness, explicit form masks, exclusion of localhost, and one async request to the correct project on a mocked canonical host even when the bootstrap runs twice. Browser tests do not transmit test form contents to Clarity.

## GTM migration

No GTM container is currently installed. Obtain or create the intended business-owned `GTM-…` container before migration. Inventory GA4 and Clarity, preserve successful `generate_lead` and `contact_click` events and their non-personal parameters, configure consent behavior, test in preview, and remove direct loaders in the same release. Existing `gtag` event calls need an explicit migration strategy; simply removing their loader would break measurement. Verify one page view and one event per actual interaction before publication.

Google's guidance on avoiding redundant tags: https://developers.google.com/tag-platform/devguides/existing.
