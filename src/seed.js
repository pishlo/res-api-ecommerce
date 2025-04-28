const mongoose = require("mongoose");
const connectDB = require("./utils/db");
const Product = require("./models/productModel");

const products = [
  {
    brand: "Dell",
    model: 'UltraSharp 27" 4K Monitor',
    images: ["https://m.media-amazon.com/images/I/61ijE-prqQL.jpg"],
    stock: 15,
    price: 499,
  },
  {
    brand: "Sceptre",
    model: 'Curved 34" Ultrawide Monitor',
    images: ["https://www.sceptre.com/image/cache/data/product_gallery/1421-C345B-QUN168/1-1500x1044.jpg"],
    stock: 10,
    price: 699,
  },
  {
    brand: "ASUS",
    model: 'Portable 15.6" USB-C Monitor',
    images: ["https://m.media-amazon.com/images/I/71+CGjluVNL.jpg"],
    stock: 25,
    price: 229,
  },
  {
    brand: "LG",
    model: 'Gaming 27" QHD Monitor',
    images: ["https://www.lg.com/content/dam/channel/wcms/ca_en/images/monitors/27gr95qe-b_aus_enci_ca_en_c/gallery/DZ-01.jpg"],
    stock: 18,
    price: 399,
  },
  {
    brand: "ASUS",
    model: 'Professional 32" 4K Monitor',
    images: ["https://www.discoazul.fr/uploads/media/images/monitor-profesional-asus-proart-pa329cv-led-32-4k-1.jpg"],
    stock: 9,
    price: 799,
  },
  {
    brand: "Generic",
    model: 'Budget 24" Full HD Monitor',
    images: ["https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-BUDGET-MONITOR-2048px-0275.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"],
    stock: 30,
    price: 149,
  },
  {
    brand: "HP",
    model: 'Touchscreen 24" Monitor',
    images: ["https://media.ldlc.com/r1600/ld/products/00/06/04/18/LD0006041812.jpg"],
    stock: 12,
    price: 349,
  },
  {
    brand: "Acer",
    model: 'HDR 27" Gaming Monitor',
    images: ["https://m.media-amazon.com/images/I/81c0YPOX+sL._AC_UF1000,1000_QL80_.jpg"],
    stock: 20,
    price: 449,
  },
  {
    brand: "Samsung",
    model: 'UltraWide 49" Dual QHD Monitor',
    images: ["https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6548/6548299_sd.jpg"],
    stock: 5,
    price: 999,
  },
  {
    brand: "Dell",
    model: 'Frameless 27" IPS Monitor',
    images: ["https://images.unsplash.com/photo-1593642634367-d91a135587b5"],
    stock: 17,
    price: 279,
  },
  {
    brand: "Lenovo",
    model: 'USB-C Docking 27" Monitor',
    images: ["https://cdn.mafrservices.com/sys-master-root/h09/h00/50268419948574/824142275436_main?im=Resize=480"],
    stock: 14,
    price: 549,
  },
  {
    brand: "BenQ",
    model: 'High Refresh Rate 24" Monitor',
    images: ["https://i.ebayimg.com/images/g/WzIAAOSw8hFmZ3hn/s-l400.png"],
    stock: 22,
    price: 199,
  },
  {
    brand: "Eizo",
    model: 'Color Accurate 27" Monitor',
    images: ["https://images-cdn.ubuy.co.in/63635523d4c763520b343b8e-eizo-coloredge-cs2740-4k-bk-27-39-39.jpg"],
    stock: 6,
    price: 599,
  },
  {
    brand: "Philips",
    model: 'Ergonomic 24" Monitor',
    images: ["https://media.ldlc.com/r1600/ld/products/00/06/01/85/LD0006018529.jpg"],
    stock: 16,
    price: 179,
  },
  {
    brand: "Samsung",
    model: '4K UHD 28" Monitor',
    images: ["https://www.clove-technology.com/cdn/shop/products/fad877cb68ae810f6ba77f6fcfdac8ef_2048x.jpg?v=1710767900"],
    stock: 11,
    price: 379,
  },
];

const seedProducts = async () => {
  try {
    await connectDB(); // Ensure DB is connected
    await Product.deleteMany(); // Clear existing
    await Product.insertMany(products); // Seed new
    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding products:", err);
    process.exit(1);
  }
};

seedProducts();