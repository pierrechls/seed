# Project structure

Please read [Vue.js style guide](https://vuejs.org/v2/style-guide/).

## Tree

```
.
├── locales/             # translations JSON files
│   └── ...
├── public/              # public folder
│   ├── favicon.ico
│   └── index.html    
├── settings/            # application settings
│   └── default.json
├── src/
│   ├── assets/          # assets (images, styles, ...)
│   │   └── ...
│   ├── components/      # ui components
│   │   └── ...
│   ├── data/            # app datas
│   │   └── ...
│   ├── lib/
│   │   ├── locales/     # i18n from locales JSON files
│   │   │   └── index.js
│   │   ├── router/      # router with routes
│   │   │   ├── index.js
│   │   │   └── routes.js
│   │   └── store /      # store (with state, mutations and actions)
│   │       └── index.js
│   ├── transitions/     # vue transitions
│   │   └── ...
│   ├── utils/           # somes utils js files
│   │   └── ...
│   ├── views/           # views components
│   │   └── ...
│   ├── main.js          # app entry file
│   ├── App.vue          # main app component
├── tests/               # unit and e2e tests
│   └── ...
├── .env.dist            # environnements settings
└── package.json         # build scripts and dependencies
```

## Environments settings

Setting your environnements variables using [dotenv](https://github.com/motdotla/dotenv).

If you have to set protected data (like API token), or custom keys depending environnements, using these settings.

For getting variables from Vue components, prefix your variables by `VUE_APP_` (_example `VUE_APP_SEED_KEY`_).

## Application settings

A `settings` folder on root project for easily updating your project configuration.

It's simple configuration, example, default languague, default theme, etc.

## Locales

A `locales` folder on root project, regrouping all translations in differents languages in JSON format.
