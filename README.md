# color-game

A colour-guessing game from the Udemy Web Developer Bootcamp: you are shown an RGB value and pick the matching swatch. Written in plain JavaScript, HTML and CSS to practise DOM manipulation, served by a tiny Express app. Archived: the old Heroku demo is no longer hosted.

## Stack

- Vanilla JavaScript, HTML, CSS
- Node.js with Express (serves `views/colorgame.html` and `public/`)

## Run locally

```sh
npm install
PORT=3000 npm start   # http://localhost:3000
```

`app.js` reads the port only from the `PORT` environment variable, so it has to be set.
