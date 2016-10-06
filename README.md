# seed 🌱

[![version](https://img.shields.io/badge/version-1.0-green.svg?style=flat-square)](https://github.com/pierrechls/seed) [![Build status](https://img.shields.io/badge/build-passing-green.svg?style=flat-square)](https://img.shields.io/badge/build-passing-green.svg?style=flat-square) [![front-end-framework](https://img.shields.io/badge/framework-vue.js-lightgrey.svg?style=flat-square)](http://vuejs.org/) [![router](https://img.shields.io/badge/router-vue--router-lightgrey.svg?style=flat-square)](http://router.vuejs.org/en/index.html) [![store](https://img.shields.io/badge/state--management-vuex-lightgrey.svg?style=flat-square)](http://vuex.vuejs.org/) [![internationalization](https://img.shields.io/badge/internationalization-vue--i18n-lightgrey.svg?style=flat-square)](https://github.com/kazupon/vue-i18n) [![js-standard-style](https://img.shields.io/badge/code_style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)

> A vue-cli template who plants the first seed of your project in order to become a sturdy and flowering tree

## How to use it

Please read the [documentation](https://pierrechls.github.io/seed/) &nbsp;📚

#### Install vue-cli as global

``` bash
$ npm install -g vue-cli
```

#### Init your project

``` bash
$ vue init pierrechls/seed my-project     # init template
$ cd my-project                           # go to your project folder
$ npm install                             # install dependencies
$ npm run dev                             # serve with hot reload
```

## What's included


#### Development environment

``` bash
$ npm start                               # first-in-class development experience (or `npm run dev`)
```

  - [Webpack](http://webpack.github.io/) and [vue-loader](http://vuejs.github.io/vue-loader/) for single file Vue components.
  - state preserving hot-reload
  - state preserving compilation error overlay
  - lint-on-save with ESLint
  - source maps
  - autorun `npm run electron` in Electron enabled apps

#### Production environment

``` bash
$ npm run build                           # production ready build
```

  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2)
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier)
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano)
  - all static assets compiled with version hashes for efficient long-term caching


#### Electron support

``` bash
$ npm run electron                        # developpers friendly features when working in a dev environment
```

  - auto opens the devtools

#### Package

``` bash
$ npm run package                         # package your app
```

  - package your app for distribution with [electron-packager](https://github.com/electron-userland/electron-packager)
  - portable version of your app (NodeJS and WebKit embedded)
  - package for Windows/OS X/Linux
  - remove all `devDependencies` from the packaged binary, reducing final size a lot


## Fork It And Make Your Own

You can fork this repo to create your own template, and use it with `vue-cli`:

``` bash
$ vue init username/repo my-project
```

## Credits

This is inspired from [nd](https://github.com/soixantecircuits/nd) template. This is originally a fork of the [webpack](https://github.com/vuejs-templates/webpack) template. Most credit goes to them! 👏
