const fs = require('fs');

const seederFile = fs.readFileSync('C:/Users/al khshab/.gemini/antigravity-ide/brain/b660ecdb-075f-45ef-9f81-7b59953fc3c5/scratch/generate_seeder.js', 'utf8');

// extract the priceListData array
const startIndex = seederFile.indexOf('const priceListData = [');
const endIndex = seederFile.indexOf('];', startIndex) + 2;
const arrayStr = seederFile.substring(startIndex, endIndex);

const outStr = `const img = (n) => \`/images/products/product-\${n}.jpeg\`;\n\nexport ${arrayStr}\n
const defaultVariant = (group) => group.variants[0]

const isListedPrice = (value) => {
  const text = String(value || '').trim()
  return text !== '' && text !== '-'
}

export const displayPrice = (product) => {
  if (isListedPrice(product.price_fob_piece)) {
    return { amount: product.price_fob_piece, unit: 'FOB / Piece' }
  }
  if (isListedPrice(product.price_fob_carton)) {
    return { amount: product.price_fob_carton, unit: 'FOB / Carton' }
  }
  return { amount: 'On request', unit: '' }
}

export const sellPrice = (product) => {
  const shown = displayPrice(product)
  return shown.amount
}

export const catalogProducts = priceListData.map((group) => {
  const variant = defaultVariant(group)
  return {
    id: group.id,
    name: group.name,
    description: variant.packaging,
    category: group.category,
    categoryName: group.categoryName,
    image: group.image,
    price_fob_piece: variant.fobPiece,
    price_fob_carton: variant.fobCarton,
    packaging: variant.packaging,
    variants: group.variants
  }
})

export const productCategories = [
  { id: 'all', name: 'All', icon: '🌿' },
  { id: 'olives', name: 'Olives', icon: '🫒' },
  { id: 'pickles', name: 'Pickles', icon: '🥒' },
  { id: 'fruits', name: 'Fruits', icon: '🍑' },
  { id: 'vegetables', name: 'Vegetables', icon: '🥫' }
]
`;

fs.writeFileSync('c:/Users/al khshab/OneDrive/Desktop/bezrah/frontend/src/data/priceList.js', outStr);
console.log('Fixed');
