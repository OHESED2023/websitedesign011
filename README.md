# AutoDrive Motors website

Static HTML/CSS/JS site. No build step — open `index.html` or deploy the folder as-is.

## Structure

```
index.html              Home (root, so the host serves it at /)
pages/                  All other pages
css/style.css           Global styles (tokens, navbar, footer, buttons, cards, forms)
css/pages/<page>.css    Styles for one page only (same name as the page)
js/main.js              Shared: mobile menu
js/forms.js             Shared: form validation + sending
js/pages/<page>.js      Behaviour for one page only
assets/images/          Local images and favicon
```

Every page loads `style.css` first, then its own `css/pages/<page>.css`.
All links are **relative**, so the site works on GitHub Pages project URLs
(`user.github.io/repo/`), Netlify, Vercel or a normal web host.

## Before going live

1. **Forms:** set `data-endpoint` on each `<form>` (e.g. a Formspree URL). Until then the form shows
   a "not connected" notice instead of faking a success message.
2. **Login / Create Account** need a real authentication backend (Firebase, Supabase, your own API).
3. Replace the placeholder address, phone number and email on `pages/contact.html`.
4. Replace the Unsplash hotlinks with your own photos in `assets/images/`.
