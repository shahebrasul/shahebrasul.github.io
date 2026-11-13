# Shahebur Rasul — Personal Portfolio

A six-page, static personal portfolio built with HTML, CSS, and vanilla JavaScript for GitHub Pages.

## Pages
- `index.html` — Home
- `about.html` — About
- `portfolio.html` — Five-category portfolio with working filters
- `experience.html` — Experience, education, skills, CV
- `writing.html` — Creative writing archive
- `contact.html` — Contact and social links
- `story-template.html` — Reusable story page
- `case-study-template.html` — Reusable professional case-study page
- `404.html` — Custom not-found page

## Deploy to GitHub Pages
1. Create or open the repository named **`shahebrasul.github.io`** under the GitHub account that owns the desired Pages URL.
2. Upload the contents of this project to the repository root. Do not upload the enclosing ZIP folder as a nested directory.
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. Wait for deployment, then visit `https://shahebrasul.github.io`.

If the repository owner differs from the intended domain owner, GitHub Pages will use that owner's username-based URL instead.

## Customize before publishing
Start with `assets/js/config.js`:
- Set the public email address.
- Replace social profile URLs.
- Confirm the software product count.
- Add the CV PDF at `assets/documents/shahebur-rasul-cv.pdf`.

Then edit `content/portfolio-data.js`:
- Replace the five clearly marked placeholder records with actual work.
- Use category values `technical`, `website`, `advertising`, `scripts`, or `creative`.
- Add a public URL only when the work is approved for sharing.
- Do not publish confidential client or product information.

Edit page copy directly in the relevant HTML file. Keep the professional portfolio (`portfolio.html`) separate from the fiction archive (`writing.html`).

## Add a portfolio entry
Copy an object in `content/portfolio-data.js`, update its fields, and set `placeholder: false` when it is real work. Use an empty `url` for private work. The filter controls are generated automatically.

## Add a story
1. Copy `story-template.html`.
2. Rename the copy, for example `story-title.html`.
3. Replace bracketed content and metadata.
4. Add a link to the story from `writing.html`.
5. Add its URL to `sitemap.xml`.

## Contact form
This is a static site. The contact page uses an email link and does not pretend to submit a form. If you need a form, connect a provider such as Formspree or a similar service and configure its endpoint and spam protection.

## Technical notes
- No build step or framework is required.
- Internal links and assets use relative paths.
- Google Fonts are loaded remotely; system fallbacks are provided.
- Structured data can be added once verified public profile details and real portfolio items are available.
- Update sitemap URLs if the domain changes.
