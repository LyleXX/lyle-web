module.exports = {
  endOfLine: 'auto',
  semi: false,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-packagejson'),
  ],
}
