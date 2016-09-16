# Styles

> seed template uses SASS as pre-processors

### Using SASS in App

To ensure consistent extraction and processing, it is recommended to import global, standalone style files from your root `App.vue` component, for example:

``` html
<!-- App.vue -->
<style src="~assets/styles/app.scss" lang="scss"></style>
```

### Using SASS inside Components

Inside your `*.vue` components, use the `lang` attribute on `<style>` tags:

``` html
<style lang="scss">
/* write SASS! */
</style>
```

### A note on SASS syntax

- `lang="scss"` corresponds to the CSS-superset syntax (with curly braces and semicolones).
- `lang="sass"` corresponds to the indentation-based syntax.

