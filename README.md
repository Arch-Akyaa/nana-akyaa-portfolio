# Nana Akyaa Asante Yeboah Personal Website - Version 6

This version is designed as a tab-based personal-brand website rather than a long scrolling page.

## What changed
- New black / charcoal / grey / blue visual identity
- The credentials panel is straight, larger and more prominent
- Only one main section is visible at a time
- Tabs: Home, About, Expertise, Projects, Speaking & Mentorship, Contact
- Comprehensive About section with Nana's career journey
- Stronger impact metrics on the homepage
- Downloadable CV
- Contact form
- Mobile-responsive navigation
- LinkedIn links
- SEO description and favicon

## Files
- `index.html` - all website content
- `styles.css` - design and responsive layout
- `script.js` - tab navigation + contact-form handling
- `assets/favicon.svg`
- `assets/Nana-Akyaa-Asante-Yeboah-CV.pdf`

---

# 1. Preview it on your computer

Extract the ZIP and double-click `index.html`.

The website uses only HTML, CSS and JavaScript. There is no framework and no installation required.

---

# 2. Make the contact form email Nana

The contact form is fully configured with the Formspree endpoint provided by Nana.

### Contact form
The form submits to:
`https://formspree.io/f/xjyvrzak`

Messages will be sent through the Formspree form connected to that endpoint.

The site also retains direct email and LinkedIn links as a fallback.

---

# 3. Deploy to Render

1. Create a GitHub repository, e.g. `nana-akyaa-portfolio`.
2. Upload all files and the `assets` folder.
3. In Render select **New > Static Site**.
4. Connect the GitHub repository.
5. Branch: `main`
6. Build Command: `echo "No build required"`
7. Publish Directory: `.`
8. Create the Static Site.

Render will give the site an `onrender.com` URL.

---

# 4. How the tabs work

The website still uses one simple `index.html` file, but visitors only see one section at a time.

Examples:
- `yourwebsite.com/#about`
- `yourwebsite.com/#projects`
- `yourwebsite.com/#speaking`

This keeps deployment simple while giving the experience of separate pages.

---

# 5. Update the About section

Search `index.html` for:

`<!-- ABOUT -->`

All About-page text is directly below that marker.

---

# 6. Add future speaking or mentorship engagements

Search `index.html` for:

`<!-- SPEAKING -->`

Each engagement is an `<article class="engagement-card">...</article>` block.

Copy one existing card, paste it below the others, and edit:
- Event / organisation
- Type
- Date
- Topic
- Description
- Tags

You can later replace the placeholder visual at the top of each card with event photographs.

---

# 7. Replace the CV

The downloadable CV is:

`assets/Nana-Akyaa-Asante-Yeboah-CV.pdf`

Whenever the CV changes, replace that file with the new CV using exactly the same filename. The website link will continue to work automatically.

---

# 8. Colours

The main palette is at the top of `styles.css`.

Key values:
- Background: `#080c12`
- Deep navy: `#07101d`
- Primary blue: `#3b82f6`
- Medium blue: `#2166d1`
- Light blue: `#9fc4ff`
- Main grey text: `#a7b0bc`

Change these variables once and the colour scheme updates across the site.


---

# Version 6 additions

## Insights / LinkedIn writing
A new `Insights` tab has been added.

Because LinkedIn does not reliably expose every article title and URL to public indexing, the site does NOT invent article titles.
It currently:
- features a verified public writing theme around innovation, user behaviour and digital interaction patterns;
- links visitors to Nana's LinkedIn articles/activity;
- provides two thematic thought-leadership cards for careers/personal branding and architecture/fintech/cloud.

### When you have an exact LinkedIn article URL
Search `index.html` for:
`<!-- INSIGHTS -->`

Then edit one `<article class="writing-card">` block:
1. Replace the topic.
2. Replace the article title.
3. Replace the summary.
4. Change the link to the exact LinkedIn article URL.

This avoids mislabelling or inventing article titles.

## Innovation & Recognition
The About page now includes:
- Standard Bank Group Hackathon - Project Lead (2023)
- BecauseSheCan top-performing Mentor–Mentee recognition (May 2026)
- Cross-disciplinary credentials: TOGAF®, AWS Solutions Architect and FMVA®

## Homepage positioning
The Home page now frames Nana's personal brand under:
- BUILD
- THINK
- IMPACT

## Credentials
FMVA® has been added to the prominent homepage credentials panel.


---

# Version 6 design changes

- Replaced the dark charcoal theme with an off-white, white and blue visual system.
- Increased major heading sizes.
- Increased spacing between content blocks.
- Reduced visual density across cards and sections.
- Removed visible em dash characters from website copy.
- Added homepage navigation links to every main tab at the bottom of the Home page.
- Connected the contact form to Formspree endpoint `xjyvrzak`.
- Kept black, grey and blue as the primary brand colours, but on a much lighter background.


---

# Version 6 refinements

- Reduced the homepage hero heading size.
- Capitalised "How" in the homepage question.
- Changed "Work with / Invite me".
- Replaced the 23+ banks homepage metric with a 20% efficiency improvement metric from Nana's CV.
- Removed "EXPLORE MORE" and the supporting explanatory sentence from the homepage navigation section.
- Tightened spacing between card headings and body copy.
- Increased card heading sizes.
- Increased numbering sizes throughout the website.
- Standardised typography to Inter, Roboto and Lato only.
- Added logo-ready spaces to the Because She Can and MTN engagement cards.

## Engagement logos

The speaking cards look for these files:

- `assets/because-she-can-logo.png`
- `assets/mtn-logo.png`

If the files are missing, the cards fall back to text rather than showing a broken image.

To use the supplied logos, rename them exactly as above and place them inside the `assets` folder.


---

# Version 7 refinements

- Standardised fonts to Inter and Roboto only.
- Removed light blue text and moved all blue text to deeper navy/royal blue hues.
- Normalised About-page body text so the opening sentence is the same size as the rest.
- Removed bold emphasis from the About profile narrative.
- Reworked "What I Bring to a Room" into a numbered four-part structure.
- Removed "Using transferable skills to pivot careers" from speaking topics.
- Replaced all diagonal arrows with horizontal arrows.
- Enlarged and repositioned the top-left section labels.
- Updated the site brand to "Nana Akyaa Asante Yeboah" instead of "Nana Akyaa".


---

# Version 8: Speaking & Mentorship

This version uses Nana's offline-edited HTML as the source of truth.

- Removed company logos from Speaking & Mentorship.
- Kept Because She Can as a dedicated mentorship feature.
- Added a five-card photo engagement gallery using the supplied LinkedIn links.
- Each gallery card links directly to the relevant LinkedIn post.
- Missing photos show a clean filename prompt instead of a broken image.
- See `assets/engagements/README.txt` for the exact photo filenames.


---

# Version 9: Mobile navigation fix

- Made the mobile hamburger icon visible in deep blue.
- Restored "Nana Akyaa Asante Yeboah" in the mobile header.
- Added a white dropdown navigation panel with all site tabs.
- Improved mobile menu accessibility with `aria-controls`.
- Added stronger z-index and positioning so the menu displays above page content.
