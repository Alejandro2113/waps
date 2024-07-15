const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 1000,
    category: "apple",
    img: "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vQXBwbGUtaVBob25lLTEyLTY0R0ItQmx1ZS01Ry1GdWxseS1VbmxvY2tlZC1CLUdyYWRlLVVzZWQtQ2VsbHBob25lXzBkMDk1MWJjLTViNzgtNGRiYy05OTQ5LTNkOWJkMzE5MTE3Ni4wZGE3NWM0MjQzZmJlMjk0ZTNjM2UxOTg0NjU5MWMzZS5qcGVn.jpg",
    stock: 12,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "Iphone 13",
    price: 1200,
    category: "apple",
    img: "https://www.radioshackla.com/media/catalog/product/4/6/462471800013_3_ocvqjt7gthlahwgy.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg",
    stock: 20,
    description: "Descripcion de Iphone 13",
  },
  {
    id: "3",
    name: "Iphone 14",
    price: 1250,
    category: "apple",
    img: "https://walmartsv.vtexassets.com/arquivos/ids/304120-1200-900?v=638175370033370000&width=1200&height=900&aspect=true",
    stock: 22,
    description: "Descripcion de Iphone 14",
  },
  {
    id: "4",
    name: "Iphone 15",
    price: 1300,
    category: "apple",
    img: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large_2x.jpg",
    stock: 25,
    description: "Descripcion de Iphone 15",
  },
  {
    id: "5",
    name: "Ipad 8va generacion",
    price: 1400,
    category: "apple",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "6",
    name: "Samsung s23 pro",
    price: 800,
    category: "samsung",
    img: "https://images.samsung.com/latin/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-green-back.jpg",
    stock: 16,
    description: "Descripcion de Samsung s23 pro",
  },
  {
    id: "7",
    name: "Playstation 5",
    price: 800,
    category: "consoles",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png",
    stock: 12,
    description: "Descripcion de Playstation 5",
  },
  {
    id: "8",
    name: "Nintendo switch lite",
    price: 300,
    category: "consoles",
    img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_800/dpr_2.0/ncom/en_US/switch/lite/dedicated-to-handheld",
    stock: 10,
    description: "Descripcion de swicht lite",
  },
  {
    id: "9",
    name: "Nintendo switch zelda",
    price: 450,
    category: "consoles",
    img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/My%20Nintendo%20Store/EN-US/Hardware/nintendo-switch-oled-model-the-legend-of-zelda-tears-of-the-kingdom-edition-112870/112870-legend-of-zelda-tears-of-the-kingdom-switch-oled-special-edition-console-and-joy-con-front-1200x675",
    stock: 5,
    description: "Descripcion de swicht zelda",
  },
  {
    id: "10",
    name: "Nintendo switch mario",
    price: 450,
    category: "consoles",
    img: "https://siman.vtexassets.com/arquivos/ids/4754222-1600-auto?v=638319602370400000&width=1600&height=auto&aspect=true",
    stock: 5,
    description: "Descripcion de swicht mario",
  },
  {
    id: "11",
    name: "Air pods Pro",
    price: 250,
    category: "accesories",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1694014871985",
    stock: 12,
    description: "Descripcion de swicht mario",
  },
  {
    id: "12",
    name: "Airpods max",
    price: 450,
    category: "accesories",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000",
    stock: 16,
    description: "Descripcion de swicht mario",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1000);
  });
};
