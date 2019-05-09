const sans = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]

const emoji = ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']

const mono = [
  'SFMono-Regular',
  'Consolas',
  'Liberation Mono',
  'Menlo',
  'Courier',
  'monospace',
]

const serif = ['Georgia', 'Cambria', 'Times New Roman', 'times', 'serif']

export const stacks = {
  sans,
  emoji,
  mono,
}

const isObject = n => typeof n === 'object' && n !== null
const arrayify = n => (isObject(n) ? n : [n])

export const buildStack = fonts =>
  fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')

export const getSans = (custom = []) =>
  buildStack([...arrayify(custom), ...sans, ...emoji])

export const getSerif = (custom = []) =>
  buildStack([...arrayify(custom), ...serif, ...emoji])

export const getMono = (custom = []) =>
  buildStack([...arrayify(custom), ...mono])
