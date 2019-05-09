import test from 'ava'
import { buildStack, getSans } from '../src/index'

const TEST_ARRAY = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]

const TEST_SECONDARY_ARRAY = [
  'Additional Font 1',
  'additional-2',
  'additional3',
]

test('buildStack generates a string from a single stack', t => {
  const stack = buildStack(TEST_ARRAY)
  const expected =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
  t.is(stack, expected)
})

test('buildStack generates a string from multiple stacks', t => {
  const stack = buildStack([...TEST_ARRAY, ...TEST_SECONDARY_ARRAY])
  const expected =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Additional Font 1", additional-2, additional3'
  t.is(stack, expected)
})

test('getSans generates a stack of sans-serifs and emoji fonts', t => {
  const stack = getSans()
  const expected =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  t.is(stack, expected)
})

test('getSans prepends a custom typeface to the beginning', t => {
  const stack = getSans('cats')
  const expected = 'cats, ' + getSans()
  t.is(stack, expected)
})
test('getSans prepends multiple custom typefaces to the beginning', t => {
  const stack = getSans(['cats', 'dog faces'])
  const expected = 'cats, "dog faces", ' + getSans()
  t.is(stack, expected)
})
