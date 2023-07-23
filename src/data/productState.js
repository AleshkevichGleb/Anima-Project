import image from "../assets/images/product.png";
import imageGal1 from "../assets/images/gallery1.jpg";
import imageGal2 from "../assets/images/gallery2.jpg";
import imageGal3 from "../assets/images/gallery3.jpg";
import imageGal4 from "../assets/images/gallery4.jpg";


export const productState = [
    {
        id: 1,
        inStock: true,
        type: 'Kratki',
        title: 'Каменная топка Kratki ZUZIA LPT',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 7920,
        isSale: true,
        salePrice: 1000,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 2,
        inStock: true,
        type: 'Kratki',
        title: 'Ваза из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 1990,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 3,
        inStock: true,
        type: 'Home',
        title: 'Скульптура из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 3120,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 4,
        inStock: false,
        type: 'Lapki',
        title: 'Каменная топка Lapki',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 4110,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Синий"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 5,
        inStock: true,
        type: 'Home',
        title: 'Каменная раковина накладная',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 6200,
        isSale: true,
        salePrice: 590,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Фиолетовый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 6,
        inStock: true,
        type: 'Lapki',
        title: 'Мойка из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 7120,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 7,
        inStock: true,
        type: 'Lapki',
        title: 'Декоративный стол из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 7999,
        isSale: true,
        salePrice: 4000,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
   
    {
        id: 8,
        inStock: true,
        type: 'Home',
        title: 'Декоративная ваза из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 1499,
        isSale: true,
        salePrice: 200,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 9,
        inStock: true,
        type: 'Kratki',
        title: 'Статуэтка',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 1000,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 10,
        inStock: true,
        type: 'Kratki',
        title: 'Каменная ваза Kratki',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 2920,
        isSale: true,
        salePrice: 1000,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 11,
        inStock: true,
        type: 'Kratki',
        title: 'Ваза из гранита',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 2990,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 12,
        inStock: true,
        type: 'Home',
        title: 'Скульптура из гранита',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 3120,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 13,
        inStock: false,
        type: 'Lapki',
        title: 'Каменная ваза Lapki',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 4110,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Синий"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 14,
        inStock: true,
        type: 'Home',
        title: 'Каменная раковина Home',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 6600,
        isSale: true,
        salePrice: 990,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Фиолетовый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 15,
        inStock: true,
        type: 'Home',
        title: 'Столешница из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 7850,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 16,
        inStock: true,
        type: 'Lapki',
        title: 'Декоративный стол из гранита',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 9999,
        isSale: true,
        salePrice: 3000,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "36 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
   
    {
        id: 17,
        inStock: true,
        type: 'Home',
        title: 'Поднос из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 999,
        isSale: true,
        salePrice: 400,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "37 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 18,
        inStock: true,
        type: 'Kratki',
        title: 'Стул из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 3000,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "37 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 19,
        inStock: true,
        type: 'Kratki',
        title: 'Каменная ваза из мрамора',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 2920,
        isSale: true,
        salePrice: 500,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "37 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 20,
        inStock: true,
        type: 'Kratki',
        title: 'Подставка для кружки из гранита',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 990,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "37 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 21,
        inStock: true,
        type: 'Home',
        title: 'Скульптура из гранита',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 3120,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 22,
        inStock: false,
        type: 'Lapki',
        title: 'Каменная ваза из мрамора',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 4110,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Синий"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 23,
        inStock: true,
        type: 'Home',
        title: 'Мраморный камод',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 7600,
        isSale: true,
        salePrice: 1990,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Фиолетовый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 24,
        inStock: true,
        type: 'Lapki',
        title: 'Столешница из мрамора',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 8210,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 25,
        inStock: true,
        type: 'Lapki',
        title: 'каменный шкаф',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 12100,
        isSale: true,
        salePrice: 3200,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
   
    {
        id: 26,
        inStock: true,
        type: 'Home',
        title: 'Мраморная статуэтка',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 1599,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 27,
        inStock: true,
        type: 'Kratki',
        title: 'Стол с ножками из гранита',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 6670,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 28,
        inStock: true,
        type: 'Kratki',
        title: 'Ваза из камня',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 2920,
        isSale: true,
        salePrice: 500,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 29,
        inStock: true,
        type: 'Kratki',
        title: 'Подставка для тарелки',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 1210,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Фиолетовый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 30,
        inStock: true,
        type: 'Home',
        title: 'Скульптура',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 3110,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 31,
        inStock: false,
        type: 'Lapki',
        title: 'Каменная ваза из мрамора',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 4110,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 32,
        inStock: true,
        type: 'Home',
        title: 'Мраморный шкаф',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 8880,
        isSale: true,
        salePrice: 1990,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 33,
        inStock: true,
        type: 'Lapki',
        title: 'Столешница',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 5210,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Белый"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },

    {
        id: 34,
        inStock: true,
        type: 'Lapki',
        title: 'Каменный камод',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 9130,
        isSale: true,
        salePrice: 3200,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
   
    {
        id: 35,
        inStock: true,
        type: 'Home',
        title: 'Мраморная статуэтка',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 1799,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Черный"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
    {
        id: 36,
        inStock: true,
        type: 'Kratki',
        title: 'Стол с ножками из мрамора',
        description: 'Меценат лаореет великая жизнь свершилась, надо вестибюль чистый поставить. Mauris sollicitudin congue nisl, congue pellentesque Fear pellentesque id. ',
        price: 7670,
        isSale: false,
        salePrice: 0,
        image: {
            src: image,
            alt:'product',
        },
        cartCount: 0,
        cartPrice: 0,
        specifications: [
            {id: 1, title: "Вид камня", text: "600x2000, 700x2000, 800x2000, 900x2000 мм"},
            {id: 2, title: "Изделие", text: "38 мм"},
            {id: 3, title: "Месторождение", text: "Возможно изготовление нестандартных размеров (с удорожанием)"},
            {id: 4, title: "Цвет", text: "Синий"},
        ],
        gallery: [
            {id: 1, image: image},
            {id: 2, image: imageGal1},
            {id: 3, image: imageGal2},
            {id: 4, image: imageGal3},
            {id: 5, image: imageGal4},
        ],
    },
]