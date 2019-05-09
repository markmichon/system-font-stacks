import test from 'ava'
import { buildStack } from '../src/index'

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
  let stack = buildStack(TEST_ARRAY)
  let expected =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
  t.is(stack, expected)
})

test('buildStack generates a string from multiple stacks', t => {
  let stack = buildStack([...TEST_ARRAY, ...TEST_SECONDARY_ARRAY])
  let expected =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Additional Font 1", additional-2, additional3'
  t.is(stack, expected)
})
