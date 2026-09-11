# WeddingInvite

Brian and Alethea's interactive wedding invitation.

## Invitation generator

Open `/generator` to enter a guest's name. The generator creates:

- a personalized link that opens the existing invitation with the guest's name;
- a 1080 × 1350 PNG card containing the wedding date, venues, and RSVP contacts.

The current implementation keeps generation entirely in the browser and does
not store guest names. Before publishing the generator for private use, connect
it to authenticated storage and replace name-based query links with opaque guest
codes.

## Development

```sh
npm install
npm run dev
```

Run `npm run typecheck` and `npm run build` before deployment.
