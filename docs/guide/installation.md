# Installation

::: tip Node Version Requirement
Vue CLI requires [Node.js](https://nodejs.org/) version 8.9 or above (8.11.0+ recommended). You can manage multiple versions of Node on the same machine with [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows).
:::

## Vue-cli

First, you need to install vue-cli package :

``` bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

You can check you have the right version (3.x) with this command:

```bash
vue --version
```

## Environmment settings

Create _.env_ file by running :

```bash
$ cp .env.dist .env
```

## Install dependencies

```bash
$ yarn install
```