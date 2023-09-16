module.exports = {
  plugins: ['prettier', '@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  tabWidth: 2,
  importOrder: [
    '^@(assets|components|context|hooks|lib|pages|routes|services|styles|ui|utils)/?(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
