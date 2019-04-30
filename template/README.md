[![version](https://img.shields.io/badge/version-1.0-green.svg?style=flat-square)](https://github.com/pierrechls/seed) [![front-end-framework](https://img.shields.io/badge/framework-vue.js-lightgrey.svg?style=flat-square)](http://vuejs.org/) [![router](https://img.shields.io/badge/router-vue--router-lightgrey.svg?style=flat-square)](http://router.vuejs.org/en/index.html) [![internationalization](https://img.shields.io/badge/internationalization-vue--i18n-lightgrey.svg?style=flat-square)](https://github.com/kazupon/vue-i18n) [![js-standard-style](https://img.shields.io/badge/code_style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/) [![sass-stylesheets](https://img.shields.io/badge/stylesheets-sass-lightgrey.svg?style=flat-square)](http://sass-lang.com/)

# {{ name }}

> {{ description }}

# :grey_exclamation: Prior installation

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Vue CLI](https://cli.vuejs.org/guide/installation.html)

## :rocket: How to install ?

#### Clone the repo

```bash
$ git clone <YOUR_REPOSITORY_URL>
```

#### Install dependencies

```
$ yarn install
```

## :hammer_and_wrench: How to configure ?

#### Environnement settings

Create _.env_ file by running :

```bash
$ cp .env.dist .env
```

#### Application settings

Go to `/settings` folder and edit _default.json_ file.

#### Locales

Go to `/locales` folder.

For adding a new languague :

- Create a new _{lang}.json_ file 
- Go to `/src/lib/locales` and import your new locale file

#### Install dependencies

```
$ yarn install
```

## :video_game: How to use it ?

#### Compiles and hot-reloads for development

```
$ yarn run serve
```

#### Compiles and minifies for production

```
$ yarn run build
```

#### Run your tests

```
$ yarn run test
```

#### Lints and fixes files

```
$ yarn run lint
```

#### Run your end-to-end tests

```
$ yarn run test:e2e
```

#### Run your unit tests

```
$ yarn run test:unit
```

## :books: Documentation

For detailed explanation on how things work, checkout the [guide](http://pierrechls.github.io/seed).

You can also see [Vue.js guide](https://vuejs.org/v2/guide/), [Vue CLI configuration reference](https://cli.vuejs.org/config/), [Vuex guide](https://vuex.vuejs.org/guide/) and [Vue i18n guide](https://kazupon.github.io/vue-i18n/guide/formatting.html).
