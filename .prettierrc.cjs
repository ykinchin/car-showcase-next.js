module.exports = {
  plugins: ['prettier', '@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  tabWidth: 2,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
