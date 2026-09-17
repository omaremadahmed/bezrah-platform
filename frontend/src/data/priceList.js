const img = (n) => `/images/products/product-${n}.jpeg`;

export const priceListData = [
  {
    id: 'whole-green-olives',
    name: 'Whole Green Olives',
    category: 'olives',
    categoryName: 'Olives',
    image: img(1),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.800 KG', fobCarton: '$29.41', fobPiece: '$4.90' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '2.500 KG', fobCarton: '$21.11', fobPiece: '$7.04' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', drained: '0.200 G', fobCarton: '$10.87', fobPiece: '$0.91' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', drained: '0.110 G', fobCarton: '$6.91', fobPiece: '$0.57' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.400 G', fobCarton: '$16.63', fobPiece: '$1.39' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', drained: '0.240 G', fobCarton: '$14.07', fobPiece: '$1.18' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.200 G', fobCarton: '$10.23', fobPiece: '$0.85' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', drained: '0.110 G', fobCarton: '$12.79', fobPiece: '$0.54' }
    ]
  },
  {
    id: 'pitted-green-olives',
    name: 'Pitted Green Olives',
    category: 'olives',
    categoryName: 'Olives',
    image: img(1),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.450 KG', fobCarton: '$30.06', fobPiece: '$5.02' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '2 KG', fobCarton: '$21.11', fobPiece: '$7.04' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', drained: '0.170 G', fobCarton: '$10.87', fobPiece: '$0.91' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', drained: '0.090 G', fobCarton: '$6.91', fobPiece: '$0.57' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.350 G', fobCarton: '$16.63', fobPiece: '$1.39' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', drained: '0.220 G', fobCarton: '$14.07', fobPiece: '$1.18' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.170 G', fobCarton: '$8.80', fobPiece: '$0.74' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', drained: '0.090 G', fobCarton: '$11.00', fobPiece: '$0.46' }
    ]
  },
  {
    id: 'sliced-green-olives',
    name: 'Sliced Green Olives',
    category: 'olives',
    categoryName: 'Olives',
    image: img(5),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.560 KG', fobCarton: '$30.06', fobPiece: '$5.02' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '2 KG', fobCarton: '$21.11', fobPiece: '$7.04' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', drained: '0.170 G', fobCarton: '$10.87', fobPiece: '$0.91' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', drained: '0.090 G', fobCarton: '$6.91', fobPiece: '$0.57' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.350 G', fobCarton: '$16.63', fobPiece: '$1.39' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', drained: '0.220 G', fobCarton: '$14.07', fobPiece: '$1.18' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.170 G', fobCarton: '$8.80', fobPiece: '$0.67' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', drained: '0.090 G', fobCarton: '$10.00', fobPiece: '$0.42' }
    ]
  },
  {
    id: 'whole-black-olives',
    name: 'Whole Black Olives',
    category: 'olives',
    categoryName: 'Olives',
    image: img(2),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.800 KG', fobCarton: '$29.41', fobPiece: '$4.90' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '2.500 KG', fobCarton: '$21.11', fobPiece: '$7.04' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', drained: '0.200 G', fobCarton: '$10.87', fobPiece: '$0.91' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', drained: '0.110 G', fobCarton: '$6.91', fobPiece: '$0.57' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.400 G', fobCarton: '$16.63', fobPiece: '$1.39' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', drained: '0.240 G', fobCarton: '$14.07', fobPiece: '$1.18' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.200 G', fobCarton: '$10.23', fobPiece: '$0.85' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', drained: '0.110 G', fobCarton: '$11.83', fobPiece: '$0.49' }
    ]
  },
  {
    id: 'pitted-black-olives',
    name: 'Pitted Black Olives',
    category: 'olives',
    categoryName: 'Olives',
    image: img(2),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.450 KG', fobCarton: '$25.85', fobPiece: '$4.31' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '2 KG', fobCarton: '$18.15', fobPiece: '$6.05' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', drained: '0.170 G', fobCarton: '$9.35', fobPiece: '$0.78' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', drained: '0.090 G', fobCarton: '$5.94', fobPiece: '$0.50' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.350 G', fobCarton: '$14.30', fobPiece: '$1.19' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', drained: '0.220 G', fobCarton: '$12.10', fobPiece: '$1.01' },
      { items: 12, cartons: 3500, packaging: 'Jars 370g', drained: '0.170 G', fobCarton: '$10.23', fobPiece: '$0.85' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', drained: '0.090 G', fobCarton: '$12.79', fobPiece: '$0.54' }
    ]
  },
  {
    id: 'sliced-black-olives',
    name: 'Sliced Black Olives',
    category: 'olives',
    categoryName: 'Olives',
    image: img(2),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.560 KG', fobCarton: '$25.85', fobPiece: '$4.31' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '2 KG', fobCarton: '$18.15', fobPiece: '$6.05' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', drained: '0.170 G', fobCarton: '$9.35', fobPiece: '$0.78' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', drained: '0.090 G', fobCarton: '$5.94', fobPiece: '$0.50' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.350 G', fobCarton: '$14.30', fobPiece: '$1.19' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', drained: '0.220 G', fobCarton: '$11.00', fobPiece: '$0.92' },
      { items: 12, cartons: 3500, packaging: 'Jars 370g', drained: '0.170 G', fobCarton: '$8.80', fobPiece: '$0.67' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', drained: '0.090 G', fobCarton: '$10.00', fobPiece: '$0.42' }
    ]
  },
  {
    id: 'green-jalapeno',
    name: 'Green Jalapeño',
    category: 'pickles',
    categoryName: 'Pickles',
    image: img(7),
    variants: [
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.350 G', fobCarton: '$13.11', fobPiece: '$1.09' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', drained: '0.220 G', fobCarton: '$10.16', fobPiece: '$0.85' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.170 G', fobCarton: '$6.71', fobPiece: '$0.56' },
      { items: 6, cartons: 855, packaging: 'PET Plastic', drained: '1.550 KG', fobCarton: '$11.52', fobPiece: '$2.88' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', drained: '1.800 KG', fobCarton: '$10.87', fobPiece: '$2.73' }
    ]
  },
  {
    id: 'red-jalapeno',
    name: 'Red Jalapeño',
    category: 'pickles',
    categoryName: 'Pickles',
    image: img(10),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.560 KG', fobCarton: '$16.63', fobPiece: '$2.77' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.350 G', fobCarton: '$15.03', fobPiece: '$1.25' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', drained: '0.220 G', fobCarton: '$12.79', fobPiece: '$1.07' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.170 G', fobCarton: '$7.56', fobPiece: '$0.63' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', drained: '1.800 KG', fobCarton: '$13.66', fobPiece: '$2.28' }
    ]
  },
  {
    id: 'banana-pepper',
    name: 'Banana Pepper',
    category: 'pickles',
    categoryName: 'Pickles',
    image: img(19),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.560 KG', fobCarton: '$13.66', fobPiece: '$2.28' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.350 G', fobCarton: '$12.21', fobPiece: '$1.02' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', drained: '0.220 G', fobCarton: '$9.53', fobPiece: '$0.68' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.170 G', fobCarton: '$6.05', fobPiece: '$0.51' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', drained: '1.800 KG', fobCarton: '$9.63', fobPiece: '$2.41' }
    ]
  },
  {
    id: 'pepperoncini-pepper',
    name: 'Pepperoncini Pepper',
    category: 'pickles',
    categoryName: 'Pickles',
    image: img(10),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.560 KG', fobCarton: '$12.93', fobPiece: '$2.16' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', drained: '0.350 G', fobCarton: '$11.55', fobPiece: '$0.97' },
      { items: 12, cartons: 3200, packaging: 'Jars 400g', drained: '0.220 G', fobCarton: '$9.02', fobPiece: '$0.87' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.170 G', fobCarton: '$7.04', fobPiece: '$0.59' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', drained: '1.800 KG', fobCarton: '$11.19', fobPiece: '$2.81' }
    ]
  },
  {
    id: 'sweet-cherry-pepper',
    name: 'Sweet Cherry Pepper',
    category: 'pickles',
    categoryName: 'Pickles',
    image: img(10),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.200 KG', fobCarton: '$31.46', fobPiece: '$5.25' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '1.800 KG', fobCarton: '$25.71', fobPiece: '$8.57' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.150 G', fobCarton: '$14.07', fobPiece: '$1.18' }
    ]
  },
  {
    id: 'sweet-kardola-pepper',
    name: 'Sweet Kardola Pepper',
    category: 'pickles',
    categoryName: 'Pickles',
    image: img(10),
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', drained: '1.200 KG', fobCarton: '$31.46', fobPiece: '$5.25' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '1.800 KG', fobCarton: '$25.71', fobPiece: '$8.57' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', drained: '0.150 G', fobCarton: '$14.07', fobPiece: '$1.18' }
    ]
  },
  {
    id: 'sliced-lombardi-pepper',
    name: 'Sliced Lombardi Pepper',
    category: 'pickles',
    categoryName: 'Pickles',
    image: img(10),
    variants: [
      { items: 3, cartons: 1500, packaging: 'Tins A12', drained: '2.300 KG', fobCarton: '$18.61', fobPiece: '$6.20' }
    ]
  },
  {
    id: 'molokhia',
    name: 'Molokhia',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(19),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$10.23', fobPiece: '-' }
    ]
  },
  {
    id: 'spinach',
    name: 'Spinach',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(19),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: 'On request', fobPiece: '-' }
    ]
  },
  {
    id: 'artichokes',
    name: 'Artichokes',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(18),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$13.87', fobPiece: '-' }
    ]
  },
  {
    id: 'sweet-corn',
    name: 'Sweet Corn',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(15),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$17.90', fobPiece: '-' }
    ]
  },
  {
    id: 'okra',
    name: 'Okra',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(19),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$12.79', fobPiece: '-' }
    ]
  },
  {
    id: 'peas',
    name: 'Peas',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(16),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: 'On request', fobPiece: '-' }
    ]
  },
  {
    id: 'cauliflower',
    name: 'Cauliflower',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(19),
    variants: [
      { items: '-', cartons: 1800, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$10.87', fobPiece: '-' }
    ]
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(19),
    variants: [
      { items: '-', cartons: 1800, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$12.15', fobPiece: '-' }
    ]
  },
  {
    id: 'green-beans',
    name: 'Green Beans',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(19),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$11.51', fobPiece: '-' }
    ]
  },
  {
    id: 'mango',
    name: 'Mango',
    category: 'fruits',
    categoryName: 'Fruits',
    image: img(42),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$19.18', fobPiece: '-' }
    ]
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    category: 'fruits',
    categoryName: 'Fruits',
    image: img(43),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: '$12.79', fobPiece: '-' }
    ]
  },
  {
    id: 'bell-peppers',
    name: 'Bell Peppers',
    category: 'vegetables',
    categoryName: 'Vegetables',
    image: img(36),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: 'On request', fobPiece: '-' }
    ]
  },
  {
    id: 'peach',
    name: 'Peach',
    category: 'fruits',
    categoryName: 'Fruits',
    image: img(11),
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk', drained: '10 kg', fobCarton: 'On request', fobPiece: '-' }
    ]
  }
];

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
