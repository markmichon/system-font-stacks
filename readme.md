# System Font Stacks (WIP)

A micro utility for using the latest system fonts in your font stacks. Designed for CSS-in-JS libraries.

## Installation

Coming soon

## Usage

The following helpers are exposed to retrieve

## API

### getSans and getMono

`getSans` and `getMono` share the same API to get default system stacks, or prepend your own declarations to the list.

```js
// Get the default system fonts stack
fontFamily: getSans()
// ex. '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

// Append a single font-family
fontFamily: getSans('Open Sans')
//ex. '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
```

## License

[MIT](https://oss.ninja/mit/markmichon/)