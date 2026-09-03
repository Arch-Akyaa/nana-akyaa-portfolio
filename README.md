# Nana Akyaa Portfolio Website

This is a simple static portfolio website made with:
- HTML
- CSS
- JavaScript

No framework or build system is required.

## Files
- `index.html` — website content
- `styles.css` — visual design
- `script.js` — mobile menu + automatic copyright year

## Preview locally
Double-click `index.html` to open it in your browser.

## Deploy to Render
1. Create a GitHub repository.
2. Upload these three files to the repository root.
3. Log in to Render.
4. Select **New > Static Site**.
5. Connect your GitHub account and select the repository.
6. Choose the `main` branch.
7. Set **Build Command** to: `echo "No build required"`
8. Set **Publish Directory** to: `.`
9. Create the Static Site.
10. Render will provide an `onrender.com` address.

## Editing
Most visible wording is in `index.html`.
Colors are near the top of `styles.css` under `:root`.

## Add a photo later
Replace the `<div class="avatar">NA</div>` element in `index.html` with:

```html
<img class="profile-photo" src="your-photo.jpg" alt="Nana Akyaa Asante Yeboah">
```

Then upload `your-photo.jpg` into the same repository and add CSS for `.profile-photo`.


## Speaking & mentorship entries
The website includes a dedicated `Speaking & Mentorship` section.

Each engagement is an `<article class="engagement-card">` block in `index.html`.
To add a new event:
1. Copy one complete engagement-card block.
2. Paste it inside `<div class="engagement-grid">`.
3. Change the event type, date/status, organisation, title, description and tags.
4. Commit the change to GitHub. Render will redeploy the site automatically.

The section currently includes:
- BecauseSheCan Programme — Career Mentor, Cloud Computing
- Stanbic Bank Ghana × MTN DigiTraining — technology/business growth session
- A speaking-topics card for invitations

You can later replace the placeholder visual blocks with event photographs.
