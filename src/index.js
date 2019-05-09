const SANS = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]

const EMOJI = ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']

const MONO = [
  'SFMono-Regular',
  'Consolas',
  'Liberation Mono',
  'Menlo',
  'Courier',
  'monospace',
]

export const buildStack = fonts =>
  fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')

export const sansStack = buildStack([...SANS, ...EMOJI])
export const monoStack = buildStack(MONO)
