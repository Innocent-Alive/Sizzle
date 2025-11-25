import pizza1 from '../assets/pngegg (3).png';
import pizza2 from '../assets/pngegg.png';
import pizza3 from '../assets/pngegg (2).png';
import burger1 from '../assets/hero-image.png';
import burger2 from '../assets/pngegg (4).png';
import chicken from '../assets/pngegg (7).png';
import fries from '../assets/pngegg (5).png';
import taco from '../assets/pngegg (8).png';
import burrito from '../assets/burito.png';

export const menuItems = [
  { 
    id: 1,
    img: pizza1, 
    title: "Classic Pizza", 
    desc: "Indulge in the timeless favorite, our Classic Pizza. Featuring a hand-tossed crust, tangy tomato sauce, and a generous layer of melted mozzarella cheese.", 
    price: "99", 
    oldPrice: "149", 
    off: "40%", 
    category: "Pizza", 
    isVeg: true,
    ingredients: ["Hand-tossed dough", "Tomato sauce", "Mozzarella cheese", "Basil", "Olive oil"],
    nutrition: { calories: "280 kcal", protein: "12g", carbs: "35g", fats: "10g" },
    stats: { orders: "1.2k+", rating: "4.8", prepTime: "15-20 min" }
  },
  { 
    id: 2,
    img: pizza2, 
    title: "Italian Pizza", 
    desc: "Experience the authentic taste of Italy with our Italian Pizza. Featuring a thin, crispy crust topped with a rich tomato sauce, fresh mozzarella cheese.", 
    price: "159", 
    oldPrice: "199", 
    off: "20%", 
    category: "Pizza", 
    isVeg: true,
    ingredients: ["Thin crust dough", "San Marzano tomato sauce", "Buffalo mozzarella", "Fresh basil", "Extra virgin olive oil"],
    nutrition: { calories: "320 kcal", protein: "14g", carbs: "30g", fats: "12g" },
    stats: { orders: "850+", rating: "4.7", prepTime: "20 min" }
  },
  { 
    id: 3,
    img: pizza3, 
    title: "Chicken Pizza", 
    desc: "Savor the delicious combination of tender, juicy chicken and our signature blend of cheeses on a perfectly baked crust.", 
    price: "199", 
    oldPrice: "249", 
    off: "20%", 
    category: "Pizza", 
    isVeg: false,
    ingredients: ["Hand-tossed dough", "BBQ sauce", "Grilled chicken breast", "Red onions", "Cheddar cheese"],
    nutrition: { calories: "350 kcal", protein: "25g", carbs: "38g", fats: "14g" },
    stats: { orders: "2k+", rating: "4.9", prepTime: "20-25 min" }
  },
  { 
    id: 4,
    img: burger1, 
    title: "Hot and Saucy Burger", 
    desc: "Turn up the heat with our Hot and Saucy Burger. This fiery favorite boasts a succulent beef patty smothered in a spicy, tangy sauce.", 
    price: "69", 
    oldPrice: "119", 
    off: "40%", 
    category: "Burger", 
    isVeg: false,
    ingredients: ["Sesame bun", "Beef patty", "Spicy chipotle sauce", "Jalapenos", "Lettuce", "Tomato"],
    nutrition: { calories: "450 kcal", protein: "22g", carbs: "40g", fats: "20g" },
    stats: { orders: "3k+", rating: "4.6", prepTime: "10-15 min" }
  },
  { 
    id: 5,
    img: burger2, 
    title: "Crispy Chicken Burger", 
    desc: "Get ready to crunch into perfection with our Crispy Chicken Burger. Featuring a golden, breaded chicken fillet that's fried to crispy perfection.", 
    price: "159", 
    oldPrice: "199", 
    off: "20%", 
    category: "Burger", 
    isVeg: false,
    ingredients: ["Brioche bun", "Fried chicken fillet", "Mayo", "Pickles", "Lettuce"],
    nutrition: { calories: "520 kcal", protein: "28g", carbs: "45g", fats: "24g" },
    stats: { orders: "1.5k+", rating: "4.8", prepTime: "15 min" }
  },
  { 
    id: 6,
    img: chicken, 
    title: "Crispy Fried Chicken", 
    desc: "Sink your teeth into our mouthwatering Crispy Fried Chicken. Each piece is hand-breaded and fried to golden perfection.", 
    price: "199", 
    oldPrice: "299", 
    off: "33%", 
    category: "Chicken", 
    isVeg: false,
    ingredients: ["Chicken pieces", "Secret spice blend", "Buttermilk", "Flour", "Oil"],
    nutrition: { calories: "380 kcal", protein: "30g", carbs: "15g", fats: "22g" },
    stats: { orders: "5k+", rating: "4.9", prepTime: "20 min" }
  },
  { 
    id: 7,
    img: fries, 
    title: "Golden Crunch Fries", 
    desc: "Indulge in our Golden Crunch Fries, perfectly cut and fried to a crispy golden brown. Sprinkled with just the right amount of sea salt.", 
    price: "59", 
    oldPrice: "99", 
    off: "40%", 
    category: "Sides", 
    isVeg: true,
    ingredients: ["Potatoes", "Sea salt", "Vegetable oil"],
    nutrition: { calories: "220 kcal", protein: "3g", carbs: "35g", fats: "10g" },
    stats: { orders: "10k+", rating: "4.7", prepTime: "5-10 min" }
  },
  { 
    id: 8,
    img: taco, 
    title: "Zesty Taco", 
    desc: "Take a bite of our Zesty Street Taco and enjoy a taste explosion. Filled with seasoned ground beef, fresh lettuce, diced tomatoes.", 
    price: "79", 
    oldPrice: "149", 
    off: "45%", 
    category: "Tacos", 
    isVeg: false,
    ingredients: ["Corn tortilla", "Seasoned ground beef", "Lettuce", "Cheese", "Salsa", "Sour cream"],
    nutrition: { calories: "180 kcal", protein: "10g", carbs: "18g", fats: "9g" },
    stats: { orders: "4.5k+", rating: "4.6", prepTime: "10 min" }
  },
  { 
    id: 9,
    img: burrito, 
    title: "Fiesta Burrito", 
    desc: "Experience a burst of flavors with our Fiesta Burrito. Packed with seasoned rice, tender grilled chicken, black beans, fresh pico de gallo.", 
    price: "129", 
    oldPrice: "179", 
    off: "25%", 
    category: "Burritos", 
    isVeg: false,
    ingredients: ["Flour tortilla", "Rice", "Black beans", "Grilled chicken", "Pico de gallo", "Guacamole"],
    nutrition: { calories: "550 kcal", protein: "25g", carbs: "60g", fats: "18g" },
    stats: { orders: "2.8k+", rating: "4.8", prepTime: "15 min" }
  }
];

export const categories = ['All', 'Pizza', 'Burger', 'Chicken', 'Sides', 'Tacos', 'Burritos'];
