# How to use it ?

## Development

```bash
$ yarn run serve        # compiles and hot-reloads for development
```

## Production

```bash
$ yarn run build        # compiles and minifies for production
```

To render your build project in local, run :

```bash
$ yarn global add serve # (if you don't already have serve global dependency)
$ serve -s dist
```

## Testing

Run your tests

```bash
$ yarn run test         # run your tests
$ yarn run test:e2e     # run your end-to-end tests
$ yarn run test:unit    # run your unit tests
```

## Lint

```bash
$ yarn run lint         # lints and fixes files
```

## Documentation

```bash
$ yarn run docs:dev     # run server for editing your vuepress documentation
$ yarn run docs:build   # build your vuepress documentation
$ yarn run docs:deploy  # deploys vuepress documentation 
```