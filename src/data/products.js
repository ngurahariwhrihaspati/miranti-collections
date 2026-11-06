import { assetUrl } from "../utils/assetUrl";

export const categories = ["All", "Beans", "Brewers", "Accessories"];

export const products = [
  {
    id: 1,
    name: "Kintamani Washed 250g",
    category: "Beans",
    price: 98000,
    image: assetUrl("assets/images/products/p1.jpg"),
    featured: true,
    overview: "Bright citrus and brown sugar, roasted light for filter brewing.",
    description:
      "A washed lot from highland smallholders. Roasted to order and packed the same day, so it reaches you at its best.",
    specs: [
      ["Roast", "Light"],
      ["Process", "Washed"],
      ["Notes", "Orange, brown sugar, tea"],
      ["Weight", "250 g"],
    ],
  },
  {
    id: 2,
    name: "Gayo Natural 250g",
    category: "Beans",
    price: 105000,
    image: assetUrl("assets/images/products/p2.jpg"),
    overview: "Ripe berry and cocoa with a heavy body, good for espresso.",
    description:
      "Sun-dried cherries give this lot its fruit. Dial in at a slightly coarser grind to keep the sweetness.",
    specs: [
      ["Roast", "Medium"],
      ["Process", "Natural"],
      ["Notes", "Blackberry, cocoa"],
      ["Weight", "250 g"],
    ],
  },
  {
    id: 3,
    name: "Ceramic Pour-over Dripper",
    category: "Brewers",
    price: 185000,
    image: assetUrl("assets/images/products/p3.jpg"),
    overview: "Single-hole cone dripper that keeps flow steady and forgiving.",
    description:
      "Heavy ceramic holds heat during the brew. Fits standard size 02 paper filters and most mugs and servers.",
    specs: [
      ["Material", "Glazed ceramic"],
      ["Size", "02 (1 to 4 cups)"],
      ["Care", "Dishwasher safe"],
    ],
  },
  {
    id: 4,
    name: "Stainless French Press 600ml",
    category: "Brewers",
    price: 249000,
    image: assetUrl("assets/images/products/p4.jpg"),
    overview: "Double-wall steel press that keeps coffee hot for an hour.",
    description:
      "No glass to break in a bag. The fine mesh filter lifts out for easy cleaning.",
    specs: [
      ["Material", "304 stainless steel"],
      ["Capacity", "600 ml"],
      ["Care", "Hand wash the lid"],
    ],
  },
  {
    id: 5,
    name: "Hand Grinder, Burr",
    category: "Accessories",
    price: 459000,
    image: assetUrl("assets/images/products/p5.jpg"),
    overview: "Steel burr grinder with a stepped dial from espresso to press.",
    description:
      "Grinds 20 g in about a minute. Folds down small enough for a day bag.",
    specs: [
      ["Burrs", "Stainless steel conical"],
      ["Capacity", "25 g"],
      ["Settings", "30 steps"],
    ],
  },
  {
    id: 6,
    name: "Gooseneck Kettle 800ml",
    category: "Accessories",
    price: 329000,
    image: assetUrl("assets/images/products/p6.jpg"),
    overview: "Narrow spout for slow, even pours over the grounds.",
    description:
      "Works on gas and induction hobs. The balanced handle keeps long pours steady.",
    specs: [
      ["Material", "Stainless steel"],
      ["Capacity", "800 ml"],
      ["Hob", "Gas, electric, induction"],
    ],
  },
];
