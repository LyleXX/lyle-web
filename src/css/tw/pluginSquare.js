/* eslint-disable @typescript-eslint/no-var-requires */
const createUtilityPlugin = require('tailwindcss/lib/util/createUtilityPlugin').default
const { asLength } = require('tailwindcss/lib/util/pluginUtils')

module.exports = createUtilityPlugin('square', [['sq', ['width', 'height']]], {
  resolveArbitraryValue: asLength,
})
