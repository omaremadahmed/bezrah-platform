const img = (n) => `/images/products/product-${n}.jpeg`;

export const productCategories = [
  { id: 'all', name: 'All', icon: '🌿' },
  { id: 'olives', name: 'Fresh / Pickled Olives', icon: '🫒' },
  { id: 'peppers', name: 'Fresh / Pickled Peppers', icon: '🌶️' },
  { id: 'frozen', name: 'Frozen IQF', icon: '❄️' },
  { id: 'unverified', name: 'Unverified / Needs Manual Confirmation', icon: '⚠️' }
];

export const priceListData = [
  // A) صور الزيتون — Olives
  {
    id: 'whole-green-olives-unverified-5',
    name: 'Whole Green Olives',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(5),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$29.41' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$21.11' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', fobCarton: '$10.87' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', fobCarton: '$6.91' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$16.63' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', fobCarton: '$14.07' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$10.23' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', fobCarton: '$12.79' }
    ]
  },
  {
    id: 'whole-black-olives-unverified-15',
    name: 'Whole Black Olives',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(15),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$29.41' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$21.11' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', fobCarton: '$10.87' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', fobCarton: '$6.91' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$16.63' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', fobCarton: '$14.07' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$10.23' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', fobCarton: '$11.63' }
    ]
  },
  {
    id: 'whole-black-olives-17',
    name: 'Whole Black Olives',
    category: 'olives',
    categoryName: 'Fresh / Pickled Olives',
    image: img(17),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$29.41' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$21.11' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', fobCarton: '$10.87' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', fobCarton: '$6.91' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$16.63' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', fobCarton: '$14.07' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$10.23' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', fobCarton: '$11.63' }
    ]
  },
  {
    id: 'whole-green-olives-20',
    name: 'Whole Green Olives',
    category: 'olives',
    categoryName: 'Fresh / Pickled Olives',
    image: img(20),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$29.41' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$21.11' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', fobCarton: '$10.87' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', fobCarton: '$6.91' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$16.63' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', fobCarton: '$14.07' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$10.23' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', fobCarton: '$12.79' }
    ]
  },
  {
    id: 'sliced-green-olives-29',
    name: 'Sliced Green Olives',
    category: 'olives',
    categoryName: 'Fresh / Pickled Olives',
    image: img(29),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$30.06' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$21.11' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', fobCarton: '$10.87' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', fobCarton: '$6.91' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$16.63' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', fobCarton: '$14.07' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$8.00' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', fobCarton: '$10.00' }
    ]
  },
  {
    id: 'whole-green-olives-30',
    name: 'Whole Green Olives',
    category: 'olives',
    categoryName: 'Fresh / Pickled Olives',
    image: img(30),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$29.41' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$21.11' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', fobCarton: '$10.87' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', fobCarton: '$6.91' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$16.63' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', fobCarton: '$14.07' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$10.23' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', fobCarton: '$12.79' }
    ]
  },
  {
    id: 'pitted-black-olives-35',
    name: 'Pitted Black Olives',
    category: 'olives',
    categoryName: 'Fresh / Pickled Olives',
    image: img(35),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$25.85' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$18.15' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', fobCarton: '$9.35' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', fobCarton: '$5.94' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$14.30' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', fobCarton: '$12.10' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$10.23' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', fobCarton: '$12.79' }
    ]
  },
  {
    id: 'sliced-black-olives-43',
    name: 'Sliced Black Olives',
    category: 'olives',
    categoryName: 'Fresh / Pickled Olives',
    image: img(43),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$25.85' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$18.15' },
      { items: 12, cartons: 5000, packaging: 'Cans 400g', fobCarton: '$9.35' },
      { items: 12, cartons: 5400, packaging: 'Cans 280g', fobCarton: '$5.94' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$14.30' },
      { items: 12, cartons: 3200, packaging: 'Jars 450g', fobCarton: '$11.00' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$8.00' },
      { items: 24, cartons: 3200, packaging: 'Jars 200g', fobCarton: '$10.00' }
    ]
  },
  // B) صور الفلفل — Peppers
  {
    id: 'green-jalapeno-unverified-6',
    name: 'Green Jalapeño',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(6),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$13.11' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', fobCarton: '$10.16' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$6.71' },
      { items: 6, cartons: 855, packaging: 'PET Plastic', fobCarton: '$11.52' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', fobCarton: '$10.87' }
    ]
  },
  {
    id: 'green-jalapeno-unverified-8',
    name: 'Green Jalapeño / Pepper',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(8),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$13.11' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', fobCarton: '$10.16' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$6.71' },
      { items: 6, cartons: 855, packaging: 'PET Plastic', fobCarton: '$11.52' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', fobCarton: '$10.87' }
    ]
  },
  {
    id: 'green-jalapeno-unverified-10',
    name: 'Green Jalapeño / Pepper',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(10),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$13.11' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', fobCarton: '$10.16' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$6.71' },
      { items: 6, cartons: 855, packaging: 'PET Plastic', fobCarton: '$11.52' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', fobCarton: '$10.87' }
    ]
  },
  {
    id: 'sliced-lombardi-pepper-23',
    name: 'Sliced Lombardi Pepper',
    category: 'peppers',
    categoryName: 'Fresh / Pickled Peppers',
    image: img(23),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$18.61' }
    ]
  },
  {
    id: 'banana-pepper-26',
    name: 'Banana Pepper',
    category: 'peppers',
    categoryName: 'Fresh / Pickled Peppers',
    image: img(26),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$13.66' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$12.21' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', fobCarton: '$9.53' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$6.05' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', fobCarton: '$9.63' }
    ]
  },
  {
    id: 'sliced-green-jalapeno-27',
    name: 'Sliced Green Jalapeño',
    category: 'peppers',
    categoryName: 'Fresh / Pickled Peppers',
    image: img(27),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$13.11' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', fobCarton: '$10.16' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$6.71' },
      { items: 6, cartons: 855, packaging: 'PET Plastic', fobCarton: '$11.52' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', fobCarton: '$10.87' }
    ]
  },
  {
    id: 'red-jalapeno-28',
    name: 'Red Jalapeño',
    category: 'peppers',
    categoryName: 'Fresh / Pickled Peppers',
    image: img(28),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$16.63' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$15.03' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', fobCarton: '$12.79' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$7.56' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', fobCarton: '$11.63' }
    ]
  },
  {
    id: 'sweet-kardola-pepper-32',
    name: 'Sweet Kardola Pepper',
    category: 'peppers',
    categoryName: 'Fresh / Pickled Peppers',
    image: img(32),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$31.46' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$25.71' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$14.07' }
    ]
  },
  {
    id: 'sweet-cherry-pepper-33',
    name: 'Sweet Cherry Pepper',
    category: 'peppers',
    categoryName: 'Fresh / Pickled Peppers',
    image: img(33),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$31.46' },
      { items: 3, cartons: 1500, packaging: 'Tins A12', fobCarton: '$25.71' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$14.07' }
    ]
  },
  {
    id: 'green-pepper-unverified-36',
    name: 'Green Pepper',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(36),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$13.11' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', fobCarton: '$10.16' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$6.71' },
      { items: 6, cartons: 855, packaging: 'PET Plastic', fobCarton: '$11.52' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', fobCarton: '$10.87' }
    ]
  },
  {
    id: 'pepperoncini-pepper-40',
    name: 'Pepperoncini Pepper',
    category: 'peppers',
    categoryName: 'Fresh / Pickled Peppers',
    image: img(40),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 6, cartons: 1007, packaging: 'Tins A10', fobCarton: '$12.93' },
      { items: 12, cartons: 2000, packaging: 'Jars 720g', fobCarton: '$11.55' },
      { items: 12, cartons: 3200, packaging: 'Jars 480g', fobCarton: '$9.02' },
      { items: 12, cartons: 3600, packaging: 'Jars 370g', fobCarton: '$7.04' },
      { items: 4, cartons: 1070, packaging: 'PET Plastic', fobCarton: '$11.19' }
    ]
  },
  // C) صور الخضروات والفاكهة المجمدة — Frozen IQF
  {
    id: 'molokhia-unverified-2',
    name: 'Molokhia',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(2),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1023.25' }
    ]
  },
  {
    id: 'spinach-3',
    name: 'Spinach',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(3),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: 'On request' }
    ]
  },
  {
    id: 'cauliflower-7',
    name: 'Cauliflower',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(7),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 1800, packaging: 'Carton bulk (10 kg)', fobCarton: '$1087.21' }
    ]
  },
  {
    id: 'peach-9',
    name: 'Peach',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(9),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: 'On request' }
    ]
  },
  {
    id: 'sweet-corn-unverified-11',
    name: 'Sweet Corn',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(11),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1790.70' }
    ]
  },
  {
    id: 'mango-12',
    name: 'Mango',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(12),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1918.61' }
    ]
  },
  {
    id: 'broccoli-13',
    name: 'Broccoli',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(13),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 1800, packaging: 'Carton bulk (10 kg)', fobCarton: '$1215.12' }
    ]
  },
  {
    id: 'sweet-corn-14',
    name: 'Sweet Corn',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(14),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1790.70' }
    ]
  },
  {
    id: 'strawberry-16',
    name: 'Strawberry',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(16),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1279.07' }
    ]
  },
  {
    id: 'mango-18',
    name: 'Mango',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(18),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1918.61' }
    ]
  },
  {
    id: 'green-beans-19',
    name: 'Green Beans',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(19),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1151.16' }
    ]
  },
  {
    id: 'spinach-21',
    name: 'Spinach',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(21),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: 'On request' }
    ]
  },
  {
    id: 'cauliflower-22',
    name: 'Cauliflower',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(22),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 1800, packaging: 'Carton bulk (10 kg)', fobCarton: '$1087.21' }
    ]
  },
  {
    id: 'brussels-sprouts-unverified-24',
    name: 'Brussels Sprouts',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(24),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: 'On request' }
    ]
  },
  {
    id: 'bell-peppers-25',
    name: 'Bell Peppers',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(25),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: 'On request' }
    ]
  },
  {
    id: 'sweet-corn-31',
    name: 'Sweet Corn',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(31),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1790.70' }
    ]
  },
  {
    id: 'okra-34',
    name: 'Okra',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(34),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1279.07' }
    ]
  },
  {
    id: 'peas-37',
    name: 'Peas',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(37),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: 'On request' }
    ]
  },
  {
    id: 'peach-38',
    name: 'Peach',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(38),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: 'On request' }
    ]
  },
  {
    id: 'artichokes-39',
    name: 'Artichokes',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(39),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1087.21' }
    ]
  },
  {
    id: 'strawberry-41',
    name: 'Strawberry',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(41),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1279.07' }
    ]
  },
  {
    id: 'broccoli-42',
    name: 'Broccoli',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(42),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 1800, packaging: 'Carton bulk (10 kg)', fobCarton: '$1215.12' }
    ]
  },
  {
    id: 'molokhia-44',
    name: 'Molokhia',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(44),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: '-', cartons: 2500, packaging: 'Carton bulk (10 kg)', fobCarton: '$1023.25' }
    ]
  },
  // D) صور تحتاج مراجعة يدوية (Extra unverified without clear matched names)
  {
    id: 'product-1-unverified',
    name: 'Unknown (Peas/Pepper like)',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(1),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: '-', cartons: '-', packaging: 'Unknown', fobCarton: 'On request' }
    ]
  },
  {
    id: 'product-4-unverified',
    name: 'Unknown (Eggplant like)',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(4),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: '-', cartons: '-', packaging: 'Unknown', fobCarton: 'On request' }
    ]
  }
];

const defaultVariant = (group) => group.variants[0]

const isListedPrice = (value) => {
  const text = String(value || '').trim()
  return text !== '' && text !== '-'
}

export const displayPrice = (product) => {
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
    price_fob_carton: variant.fobCarton,
    packaging: variant.packaging,
    variants: group.variants,
    verification_status: group.verification_status,
    price_source: group.price_source
  }
})
