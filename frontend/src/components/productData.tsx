export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    category: string;
  }
  
  export const productData: Product[] = [
    {
      id: 1,
      name: "Sylthe",
      description: "The Sylthe minimal white chair offers a perfect blend of modern design and practicality. Designed for both comfort and aesthetics, this chair is ideal for various settings—whether you're furnishing your dining room, home office, or adding a stylish touch to your living space.",
      image: "/1.png",
      price: "€ 147",
      category:"Chairs",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "The Leviosa stylish café chair combines lightweight design with robust durability. Its sleek, curved frame and contoured seat make it an excellent choice for cafés, kitchens, or dining areas. The chair’s clean lines and modern silhouette bring a touch of sophistication to any space, while its ergonomic design ensures comfort during long periods of seating.",
      image: "/2.png",
      price: "€ 70",
      category:"Chairs",
    },
    {
      id: 3,
      name: "Lolito",
      description: "The Lolito luxury big sofa redefines comfort and style, offering ample seating for family gatherings or relaxed evenings. Upholstered in premium fabric, this spacious sofa features deep, cushioned seats and a sturdy frame, providing both plushness and durability. Its modern design and luxurious feel make it a standout piece in any living room, perfect for entertaining or lounging in style.",
      image: "/3.png",
      price: "€ 412",
      category:"Sofas",
    },
    {
      id: 4,
      name: "Resp",
      description: "The Resp outdoor bar table and stool set is perfect for those who enjoy al fresco dining or casual outdoor entertaining. Crafted from weather-resistant materials, this sleek set includes a high-top bar table and matching stools, designed to withstand outdoor conditions without compromising on style. The minimalistic design makes it a versatile addition to any patio or garden setting.",
      image: "/4.png",
      price: "€ 294",
      category:"Outdoor Furniture",
    },
    {
      id: 5,
      name: "Luna",
      description: "The Luna dining table captures the essence of Scandinavian design with its clean lines, natural wood finish, and functional form. Crafted from solid oak, this extendable table is perfect for intimate dinners or larger gatherings. Its minimalist aesthetic makes it easy to pair with various chair styles, while its durable construction ensures long-lasting beauty and use in any dining space.",
      image: "/5.png",
      price: "€ 499",
      category:"Dining Tables",
    },
    {
      id: 6,
      name: "Nora",
      description: "The Nora velvet tufted armchair adds a touch of luxury to any room. Designed with plush velvet upholstery and intricate button tufting, this chair offers a classic yet modern appeal. Its deep seating and supportive backrest make it ideal for creating a cozy corner, whether in the living room or bedroom. The Nora promises both comfort and style for those seeking to elevate their interior decor.",
      image: "/6.png",
      price: "€ 320",
      category:"Armchairs",
    },
    {
      id: 7,
      name: "Aurora",
      description: "The Aurora queen bed offers a sophisticated centerpiece for any bedroom. Upholstered in premium fabric, this bed features a sleek, padded headboard for added comfort and style. Its modern design is both functional and aesthetically pleasing, offering sturdy construction and a contemporary look that complements various bedroom décors. The Aurora ensures restful sleep in a bed that exudes elegance.",
      image: "/7.png",
      price: "€ 720",
      category:"Beds",
    },
    {
      id: 8,
      name: "Vela",
      description: "The Vela coffee table embodies modern simplicity with its clear glass top and sleek chrome legs. This contemporary piece is perfect for living rooms or office spaces, offering a clean and airy feel. The tempered glass top ensures durability, while the chrome legs add a touch of sophistication. A versatile coffee table that seamlessly blends with various interior styles.",
      image: "/8.png",
      price: "€ 260",
      category:"Coffee Tables",
    },
    {
      id: 9,
      name: "Solace",
      description: "The Solace outdoor lounge set is designed for ultimate relaxation in outdoor spaces. With plush, weatherproof cushions and a durable frame, this set includes a sofa, chairs, and a coffee table, making it perfect for enjoying time outdoors with family or friends. Its modern, minimalist design complements any patio or garden, providing both comfort and resilience in all weather conditions.",
      image: "/9.png",
      price: "€ 899",
      category:"Outdoor Furniture",
    },
    {
      id: 10,
      name: "Astra",
      description: "The Astra writing desk offers a perfect balance of functionality and minimalist design. Crafted from solid oak, this desk features clean lines and ample workspace, along with two discreet storage drawers for keeping essentials organized. Its timeless design makes it ideal for home offices, study areas, or workspaces, providing both style and practicality.",
      image: "/10.png",
      price: "€ 340",
      category:"Desks",
    },
    {
      id: 11,
      name: "Fjord",
      description: "The Fjord extendable dining table is ideal for both small dinners and large gatherings. Made from durable wood with a natural finish, this table features a seamless extension mechanism that allows for extra seating when needed. Its minimalist Scandinavian design pairs beautifully with a variety of dining chairs, making it a versatile and practical choice for any dining space.",
      image: "/11.png",
      price: "€ 650",
      category:"Dining Tables",
    },
    {
      id: 12,
      name: "Breeze",
      description: "The Breeze outdoor bar set is designed for casual outdoor entertaining, featuring a high-top bar table and matching stools. Made from weather-resistant rattan, this set combines durability with style, making it perfect for patios, balconies, or gardens. Its sleek design and comfortable seating create a relaxed and stylish outdoor atmosphere for socializing.",
      image: "/12.png",
      price: "€ 294",
      category:"Outdoor Furniture",
    },
    {
      id: 13,
      name: "Opal",
      description: "The Opal dresser brings a touch of elegance to your bedroom or dressing area. Crafted from solid wood, it features smooth, clean lines and beautifully crafted brass handles. With multiple spacious drawers, the Opal dresser offers both style and functionality, perfect for storing clothing or accessories while adding a refined aesthetic to your space.",
      image: "/13.png",
      price: "€ 540",
      category:"Dressers",
    },
    {
      id: 14,
      name: "Echo",
      description: "The Echo bedside table is the perfect addition to a modern bedroom. Its compact size and clean lines make it suitable for smaller spaces, while its soft-close drawers offer quiet, smooth functionality. Designed to keep essentials within reach, the Echo adds a contemporary touch to your bedside, combining convenience with sleek design.",
      image: "/14.png",
      price: "€ 185",
      category:"Bedside Tables",
    },
    {
      id: 15,
      name: "Cove",
      description: "The Cove sectional sofa is designed for ultimate relaxation. With deep, plush seating and a generously sized frame, this sofa provides ample room for lounging. Its modern design and high-quality fabric make it both comfortable and stylish, creating a cozy centerpiece for any living room. The Cove is perfect for families or anyone who loves to entertain in comfort.",
      image: "/15.png",
      price: "€ 1.250",
      category:"Sofas",
    },
    {
      id: 16,
      name: "Haven",
      description: "The Haven velvet bench adds a touch of luxury and sophistication to any space. With soft velvet upholstery and eye-catching gold-tone legs, this bench is perfect for entryways, bedrooms, or living areas. Its sleek design and cushioned seating make it both stylish and practical, providing a comfortable spot to sit while enhancing the overall aesthetic of your home.",
      image: "/16.png",
      price: "€ 295",
      category:"Benches",
    },
  ];
  