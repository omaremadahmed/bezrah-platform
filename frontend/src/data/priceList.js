const img = (n) => `/images/products/product-${n}.jpeg`;

export const productCategories = [
  { id: 'all', name: 'All', icon: '🌿' },
  { id: 'olives', name: 'Fresh / Pickled Olives', icon: '🫒' },
  { id: 'peppers', name: 'Fresh / Pickled Peppers', icon: '🌶️' },
  { id: 'frozen', name: 'Frozen IQF', icon: '❄️' },
  { id: 'unverified', name: 'Unverified / Needs Manual Confirmation', icon: '⚠️' }
];

export const priceListData = [
  // ========== A) Olives ==========

  // product-5 — Whole Green Olives (needs confirmation)
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

  // product-15 — Whole Black Olives (needs confirmation)
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

  // product-17 — Whole Black Olives (verified)
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

  // product-20 — Whole Green Olives (verified)
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

  // product-29 — Sliced Green Olives (verified)
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

  // product-30 — Whole Green Olives (verified)
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

  // product-35 — Pitted Black Olives (verified)
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

  // product-43 — Sliced Black Olives (verified)
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

  // ========== B) Peppers ==========

  // product-6 — Green Jalapeño (needs confirmation)
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

  // product-8 — Green Jalapeño / Pepper (needs confirmation)
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

  // product-10 — Green Jalapeño / Pepper (needs confirmation)
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

  // product-23 — Sliced Lombardi Pepper (verified)
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

  // product-26 — Banana Pepper (verified)
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

  // product-27 — Sliced Green Jalapeño (verified)
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

  // product-28 — Red Jalapeño (verified)
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

  // product-32 — Sweet Kardola Pepper (verified)
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

  // product-33 — Sweet Cherry Pepper (verified)
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

  // product-36 — Green Pepper (needs confirmation)
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

  // product-40 — Pepperoncini Pepper (verified)
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

  // ========== C) Frozen IQF ==========

  // product-2 — Molokhia (needs confirmation)
  {
    id: 'molokhia-unverified-2',
    name: 'Molokhia',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(2),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,023.25' }
    ]
  },

  // product-3 — Spinach (verified)
  {
    id: 'spinach-3',
    name: 'Spinach',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(3),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: 'On request' }
    ]
  },

  // product-7 — Cauliflower (verified)
  {
    id: 'cauliflower-7',
    name: 'Cauliflower',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(7),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 1800, packaging: 'Carton bulk 10 kg', fobCarton: '$1,087.21' }
    ]
  },

  // product-9 — Peach (verified)
  {
    id: 'peach-9',
    name: 'Peach',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(9),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: 'On request' }
    ]
  },

  // product-11 — Sweet Corn (needs confirmation)
  {
    id: 'sweet-corn-unverified-11',
    name: 'Sweet Corn',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(11),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,790.70' }
    ]
  },


  // product-13 — Broccoli (verified)
  {
    id: 'broccoli-13',
    name: 'Broccoli',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(13),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 1800, packaging: 'Carton bulk 10 kg', fobCarton: '$1,215.12' }
    ]
  },

  // product-14 — Sweet Corn (verified)
  {
    id: 'sweet-corn-14',
    name: 'Sweet Corn',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(14),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,790.70' }
    ]
  },


  // product-18 — Mango (verified)
  {
    id: 'mango-18',
    name: 'Mango',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(18),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,918.61' }
    ]
  },

  // product-19 — Green Beans (verified)
  {
    id: 'green-beans-19',
    name: 'Green Beans',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(19),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,151.16' }
    ]
  },

  // product-21 — Spinach (verified)
  {
    id: 'spinach-21',
    name: 'Spinach',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(21),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: 'On request' }
    ]
  },

  // product-22 — Cauliflower (verified)
  {
    id: 'cauliflower-22',
    name: 'Cauliflower',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(22),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 1800, packaging: 'Carton bulk 10 kg', fobCarton: '$1,087.21' }
    ]
  },

  // product-24 — Brussels Sprouts (unverified — not in price list)
  {
    id: 'brussels-sprouts-unverified-24',
    name: 'Brussels Sprouts',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(24),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: 'On request' }
    ]
  },

  // product-25 — Bell Peppers (verified)
  {
    id: 'bell-peppers-25',
    name: 'Bell Peppers',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(25),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: 'On request' }
    ]
  },

  // product-31 — Sweet Corn (verified)
  {
    id: 'sweet-corn-31',
    name: 'Sweet Corn',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(31),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,790.70' }
    ]
  },

  // product-34 — Okra (verified)
  {
    id: 'okra-34',
    name: 'Okra',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(34),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,279.07' }
    ]
  },

  // product-37 — Peas (verified)
  {
    id: 'peas-37',
    name: 'Peas',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(37),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: 'On request' }
    ]
  },

  // product-38 — Peach (verified)
  {
    id: 'peach-38',
    name: 'Peach',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(38),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: 'On request' }
    ]
  },

  // product-39 — Artichokes (verified)
  {
    id: 'artichokes-39',
    name: 'Artichokes',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(39),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,087.21' }
    ]
  },

  // product-41 — Strawberry (verified)
  {
    id: 'strawberry-41',
    name: 'Strawberry',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(41),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,279.07' }
    ]
  },

  // product-42 — Broccoli (verified)
  {
    id: 'broccoli-42',
    name: 'Broccoli',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(42),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 1800, packaging: 'Carton bulk 10 kg', fobCarton: '$1,215.12' }
    ]
  },

  // product-44 — Molokhia (verified)
  {
    id: 'molokhia-44',
    name: 'Molokhia',
    category: 'frozen',
    categoryName: 'Frozen IQF',
    image: img(44),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'verified_from_visual_reference',
    variants: [
      { items: 1, cartons: 2500, packaging: 'Carton bulk 10 kg', fobCarton: '$1,023.25' }
    ]
  },

  // ========== D) Unverified ==========

  // product-1 — Unknown (looks like peas/pepper pod)
  {
    id: 'unknown-unverified-1',
    name: 'Peas / Pepper Pod',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(1),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 1, cartons: 0, packaging: 'TBD', fobCarton: 'On request' }
    ]
  },

  // product-4 — Unknown (looks like eggplant)
  {
    id: 'unknown-unverified-4',
    name: 'Eggplant',
    category: 'unverified',
    categoryName: 'Unverified / Needs Manual Confirmation',
    image: img(4),
    price_source: 'Bezrah Price List May 2026',
    verification_status: 'needs_manual_confirmation',
    variants: [
      { items: 1, cartons: 0, packaging: 'TBD', fobCarton: 'On request' }
    ]
  }
];

// ========== Helper functions ==========

const defaultVariant = (group) => group.variants[0]

const isListedPrice = (value) => {
  const text = String(value || '').trim()
  return text !== '' && text !== '-' && text !== 'On request'
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
