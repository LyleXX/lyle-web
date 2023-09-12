module.exports = function ({ addUtilities, variants }) {
  const styles = {}

  for (let i = -10; i <= 10; i++) {
    styles[`.align-${i}`] = { 'vertical-align': `${i}Px` }
  }

  addUtilities(styles, variants('verticalAlign'))
}
