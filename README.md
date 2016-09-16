# seed 🌱 

[![version](https://img.shields.io/badge/version-1.0-green.svg?style=flat-square)](https://github.com/pierrechls/seed) [![Build status](https://img.shields.io/badge/build-passing-green.svg?style=flat-square)](https://img.shields.io/badge/build-passing-green.svg?style=flat-square) [![front-end-framework](https://img.shields.io/badge/framework-vue.js-lightgrey.svg?style=flat-square)](http://vuejs.org/) [![router](https://img.shields.io/badge/router-vue--router-lightgrey.svg?style=flat-square)](http://router.vuejs.org/en/index.html) [![internationalization](https://img.shields.io/badge/internationalization-vue--i18n-lightgrey.svg?style=flat-square)](https://github.com/kazupon/vue-i18n) [![js-standard-style](https://img.shields.io/badge/code_style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/) [![sass-stylesheets](https://img.shields.io/badge/stylesheets-sass-lightgrey.svg?style=flat-square)](http://sass-lang.com/)

> A vue-cli template who plants the first seed of your project in order to become a sturdy and flowering tree

## How to use


#### Install vue-cli as global

``` 
$ npm install -g vue-cli
```

#### Init your project

``` bash
$ vue init pierrechls/seed my-project     # init template
$ cd my-project                           # go to your project folder
$ npm install                             # install dependencies
$ npm run dev                             # serve with hot reload
```

## Documentation

Coming soon

## What's included

- `npm start` or `npm run dev`: first-in-class development experience
  - [Webpack](http://webpack.github.io/) and [vue-loader](http://vuejs.github.io/vue-loader/) for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps
  - Autorun `npm run electron` in Electron enabled apps

- `npm run build`: production ready build
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2)
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier)
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano)
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets

- `npm run electron`: developpers friendly features when working in a dev environment
  - Auto opens the devtools

- `npm run package`: package your app for distribution with [electron-packager](https://github.com/electron-userland/electron-packager)
  - Portable version of your app (NodeJS and WebKit embedded)
  - Package for Windows/OS X/Linux
  - Remove all `devDependencies` from the packaged binary, reducing final size a lot

### Fork It And Make Your Own

You can fork this repo to create your own template, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```

### Credits

This is inspired from [nd template](https://github.com/soixantecircuits/nd). This is originally a fork of the [webpack](https://github.com/vuejs-templates/webpack) template. Most credit goes to them! 👏
