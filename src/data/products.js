import { assetUrl } from '../utils/assetUrl'

export const categories = ['All', 'Fashion', 'Lifestyles', 'Accessories']

export const products = [
  {
    id: 1,
    name: '<Nama Produk>',
    category: 'Fashion',
    price: 98000,
    image: assetUrl('assets/images/products/p1.jpg'),
    featured: true,
    overview: '<Deskripsi Singkat>',
    description: '<Deskripsi Produk>',
    specs: [
      ['Warna', 'Light'],
      ['Process', 'Washed'],
      ['Variant', 'Orange, brown sugar, tea'],
      ['Weight', '250 g'],
    ],
  },
  {
    id: 2,
    name: '<Nama Produk>',
    category: 'Fashion',
    price: 105000,
    image: assetUrl('assets/images/products/p2.jpg'),
    overview: '<Deskripsi Singkat>',
    description: '<Deskripsi Produk>',
    specs: [
      ['Size', 'Medium'],
      ['Process', 'Natural'],
      ['Variant', 'Blackberry, cocoa'],
      ['Weight', '250 g'],
    ],
  },
  {
    id: 3,
    name: '<Nama Produk>',
    category: 'Lifestyles',
    price: 185000,
    image: assetUrl('assets/images/products/p3.jpg'),
    overview: '<Deskripsi Singkat>',
    description: '<Deskripsi Produk>',
    specs: [
      ['Material', 'Glazed ceramic'],
      ['Size', '02 (1 to 4 cups)'],
      ['Care', 'Dishwasher safe'],
    ],
  },
  {
    id: 4,
    name: '<Nama Produk>',
    category: 'Lifestyles',
    price: 249000,
    image: assetUrl('assets/images/products/p4.jpg'),
    overview: '<Deskripsi Singkat>',
    description: '<Deskripsi Produk>',
    specs: [
      ['Material', '304 stainless steel'],
      ['Capacity', '600 ml'],
      ['Care', 'Hand wash the lid'],
    ],
  },
  {
    id: 5,
    name: '<Nama Produk>',
    category: 'Accessories',
    price: 459000,
    image: assetUrl('assets/images/products/p5.jpg'),
    overview: '<Deskripsi Singkat>',
    description: '<Deskripsi Produk>',
    specs: [
      ['Material', 'Stainless steel conical'],
      ['Capacity', '25 g'],
      ['Settings', '30 steps'],
    ],
  },
  {
    id: 6,
    name: '<Nama Produk>',
    category: 'Accessories',
    price: 329000,
    image: assetUrl('assets/images/products/p6.jpg'),
    overview: '<Deskripsi Singkat>',
    description: '<Deskripsi Produk>',
    specs: [
      ['Material', 'Stainless steel'],
      ['Capacity', '800 ml'],
      ['Hob', 'Gas, electric, induction'],
    ],
  },
]
