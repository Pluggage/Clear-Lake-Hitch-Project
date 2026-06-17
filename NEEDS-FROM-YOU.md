# Needs from you (parked questions)

Things I couldn't decide or shouldn't invent on my own. None of this blocks what's already shipped — knock them out whenever and I'll wire them in.

## To activate / enrich what was just built
1. **Contact email (or form endpoint).** The contact and "report a sighting" forms now validate and have a real UX, but they still don't *send* (you chose "UI only for now"). Give me a destination email — or a Formspree / Google Form endpoint — and I'll make them actually submit. The same email can be shown on the About page + footer (the audit flagged that there's currently no reachable contact channel besides the rescue phone line, which isn't the project's).
2. **Bios.** A one-line role + background for **you (Jordan Stevens)** and **Taylor Woodruff** for the About page. I named you both and noted Taylor's WPD survey credit (verifiable in the archive), but I won't invent credentials.
3. **Confirm the Robinson Rancheria link.** I linked partners on the About page: CDFW, USGS CAWSC, Lake County WPD, Habematolel Pomo (hpultribe-nsn.gov), Big Valley (bvrancheria.com), and **Robinson Rancheria (rrcbc-nsn.gov)**. Please confirm the Robinson Rancheria one is the right official site (the casino site, rrrc.com, is separate).

## Needs your input or permission
4. **Tribal / Pomo cultural story with attributed voice.** I can't write or attribute a Tribal quote on my own; that needs a real statement and permission from the relevant Tribe(s). Tell me how you'd like to handle it — link to the Tribes only, or you provide an approved quote.
5. **Real creek photos.** Send the additional creek photos and I'll put them on the creek cards. (Kelsey's lightbox photos also lack credits/captions/full-res versions — the other three flagship creeks have them; send those details and I'll match them.)
6. **Donate path.** You chose "volunteer project," so there's no donate button. If you ever want one you'll need a fiscal sponsor or platform; tell me and I'll add it honestly.
7. **Spawning-photo caption wording.** The Adobe/Forbes photo captions state confident first-hand observation of a state-threatened species actively spawning ("dense aggregation of hitch spawners… active spawning behavior," March/Spring 2026), credited to Taylor Woodruff. Do you want to keep that wording, or soften to "likely spawning aggregation" unless an agency confirmed the run? Your call — I won't weaken your own field observation without asking.
8. **Free-sticker mail-out.** The sticker is currently in-person pickup only (Lakeport county office). If you (or a partner) can mail them, I'll add a request field; otherwise I'll reframe it for out-of-area supporters (downloadable poster / share). Confirm logistics.

## Bigger build-tested work (flagging, not blocking)
9. **Interactive map full keyboard access.** I made the map's panel tabs keyboard-operable and the search box already loads any creek by name, but directly tabbing to and activating every creek/zone marker on the SVG is a larger change to the map's markup + event wiring that really wants a local `next build` to verify safely (the map is also embedded on the homepage, so a regression is high-risk). Want me to take it on against a preview branch?
