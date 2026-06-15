# Pokéblog

I want to create something every day because it makes me happy and learn a lot.

I built this blog to practice React and create a space where I can post (travel)
stories, drawings, thoughts, experiences, and pictures related to Pokémon and
Pokémon Go.

Keep catching!

![img](https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg)

---

## Running locally

```bash
npm install
npm start      # dev server at http://localhost:3000
npm run build  # production build into ./build
```

## Hosting (GitHub Pages)

This project deploys automatically to GitHub Pages via GitHub Actions.

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds the app and publishes the `build/` folder on every push to `master`.

**One-time setup:** in the repository on GitHub, go to
**Settings → Pages → Build and deployment → Source** and select
**GitHub Actions**. After the next push to `master` the site goes live at:

> https://martin-martin.github.io/react_pokeblog/

The `"homepage": "."` field in `package.json` makes the build use relative asset
paths so it works correctly from that project sub-path (and from any future
custom domain).

---

This project was originally bootstrapped with
[Create React App](https://github.com/facebook/create-react-app) and has since
been upgraded to React 18 / react-scripts 5 so it builds on modern toolchains.
