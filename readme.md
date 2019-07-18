# System Font Stacks

A micro utility for using the latest system fonts in your font stacks. Designed for CSS-in-JS libraries. It does not add new typefaces to your project, but instead acts as an easy way to write a font stack string without the need to keep track of current "system stack" trends.

## Installation

`yarn add @markmichon/system-font-stacks`

## Usage

Import into your project:

```js
import { getSans, getSerif, getMono } from '@markmichon/system-font-stacks'
```

The following helpers are exposed to retrieve common system font stacks: `getSans`, `getSerif`, `getMono`.

They each share the same API to get default system stacks, or prepend your own declarations to the list.

```js
// Get the default system fonts stack
fontFamily: getSans()
// ex. '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

// Append a single font-family
fontFamily: getSans('Open Sans')
//ex. '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

fontFamily: getSans(['Open Sans', 'source-serif-var'])
//ex. '"Open Sans", source-serif-var, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
```

## Contributing

Issues and PRs welcome! If you'd like to see a new typeface added to any of the default lists or have an idea for useful improvements to the API, [open an issue](https://github.com/markmichon/system-font-stacks/issues/new).

## Inspiration

- [System Font Stack - CSS Tricks](https://css-tricks.com/snippets/css/system-font-stack/)
- [Shipping system fonts to github.com - @mdo](http://markdotto.com/2018/02/07/github-system-fonts/)

## License

[MIT](https://oss.ninja/mit/markmichon/)
