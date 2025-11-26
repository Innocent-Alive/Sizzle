import pizza1 from '../assets/pngegg (3).png';
import pizza2 from '../assets/pngegg.png';
import pizza3 from '../assets/NonvegPizza2.png';
import burger1 from '../assets/hero-image.png';
import burger2 from '../assets/pngegg (4).png';
import chicken from '../assets/pngegg (7).png';
import fries from '../assets/pngegg (5).png';
import taco from '../assets/pngegg (8).png';
import burrito from '../assets/burito.png';
import paneerBurger from '../assets/PaneerBurger.png';
import chickenPopcorn from '../assets/ChickenPopcorn.png';
import honeyGarlicChicken from '../assets/HoneyGarlicChickenBowl.png';
import rosterChicken from '../assets/RosterChickenDoublePatty.png';
import chickenNuggets from '../assets/ChickenNuggets.png';
import chocoLavaCake from '../assets/ChocoLavaCake.png';
import chocoIceCreamCake from '../assets/ChocoIceCreamCake.png';
import strawberryMousecake from '../assets/StrawberryMousecake.png';
import eggSunnySideBurger from '../assets/EggSunnySideBurger.png';
import nonVegPlatter from '../assets/NonVegCrispyPlatter.png';
import vegFilledBurger from '../assets/VegFilledBurger.png';
import nonVegPizza2 from '../assets/NonvegPizza2.png';
import supremePizza from '../assets/non-veg-pizza.png';
import vegRamen from '../assets/VegRamen.png';
import chickenRamen from '../assets/ChickenRamenBowls.png';
import chickenPasta from '../assets/NonvegChickenPastaParmeshaanCheese.png';
import gardenPizza from '../assets/VegPizza1MintleavesBellPeppers.png';
import vegPastaBowl from '../assets/VegPastaBowl.png';
import blueLagoon from '../assets/BlueLagoonDrink.png';
import lemonRefresh from '../assets/LemonRefreshDrink.png';
import coffeeLatte from '../assets/CoffeeLatte.png';
import orangeMint from '../assets/OrangeMintDrink.png';

export const menuItems = [
  // --- BURGERS ---
  { 
    id: 1,
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
    stats: { orders: "3k+", rating: "4.6", prepTime: "10-15 min" },
    label: "Best Seller"
  },
  { 
    id: 2,
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
    id: 3,
    img: paneerBurger, 
    title: "Spicy Paneer Burger", 
    desc: "A delightful vegetarian option featuring a crispy paneer patty, fresh veggies, and tangy sauces.", 
    price: "129", 
    oldPrice: "169", 
    off: "25%", 
    category: "Burger", 
    isVeg: true,
    ingredients: ["Sesame bun", "Paneer patty", "Spicy mayo", "Lettuce", "Tomato"],
    nutrition: { calories: "420 kcal", protein: "18g", carbs: "45g", fats: "18g" },
    stats: { orders: "3.5k+", rating: "4.7", prepTime: "15 min" }
  },
  { 
    id: 4,
    img: rosterChicken, 
    title: "Rooster Double Patty Burger", 
    desc: "Double the trouble! Two juicy chicken patties stacked with cheese, lettuce, and our secret sauce.", 
    price: "229", 
    oldPrice: "279", 
    off: "18%", 
    category: "Burger", 
    isVeg: false,
    ingredients: ["Brioche bun", "2 Chicken patties", "Cheddar cheese", "Secret sauce", "Lettuce"],
    nutrition: { calories: "680 kcal", protein: "45g", carbs: "50g", fats: "32g" },
    stats: { orders: "2.5k+", rating: "4.8", prepTime: "20 min" }
  },
  { 
    id: 5,
    img: eggSunnySideBurger, 
    title: "Egg Sunny Side Burger", 
    desc: "A breakfast classic in a bun! Juicy patty topped with a perfectly cooked sunny-side-up egg.", 
    price: "139", 
    oldPrice: "179", 
    off: "22%", 
    category: "Burger", 
    isVeg: false,
    ingredients: ["Sesame bun", "Beef patty", "Fried egg", "Cheese", "Caramelized onions"],
    nutrition: { calories: "480 kcal", protein: "25g", carbs: "35g", fats: "22g" },
    stats: { orders: "2.1k+", rating: "4.7", prepTime: "15 min" }
  },
  { 
    id: 19,
    img: vegFilledBurger, 
    title: "Veggie Overload Burger", 
    desc: "A massive burger filled with a crispy vegetable patty, fresh lettuce, tomatoes, and our signature veggie sauce.", 
    price: "119", 
    oldPrice: "159", 
    off: "25%", 
    category: "Burger", 
    isVeg: true,
    ingredients: ["Sesame bun", "Vegetable patty", "Lettuce", "Tomato", "Cucumber", "Veggie sauce"],
    nutrition: { calories: "380 kcal", protein: "12g", carbs: "55g", fats: "14g" },
    stats: { orders: "2.5k+", rating: "4.6", prepTime: "15 min" }
  },

  // --- PIZZAS ---
  { 
    id: 6,
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
    stats: { orders: "1.2k+", rating: "4.8", prepTime: "15-20 min" },
    label: "Classic"
  },
  { 
    id: 7,
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
    id: 8,
    img: nonVegPizza2, 
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
    id: 21,
    img: supremePizza, 
    title: "Supreme Chicken Pizza", 
    desc: "Loaded with spiced chicken, bell peppers, olives, and extra cheese for the ultimate pizza experience.", 
    price: "249", 
    oldPrice: "299", 
    off: "17%", 
    category: "Pizza", 
    isVeg: false,
    ingredients: ["Thin crust", "Spiced chicken", "Bell peppers", "Olives", "Mozzarella"],
    nutrition: { calories: "380 kcal", protein: "28g", carbs: "40g", fats: "16g" },
    stats: { orders: "1.5k+", rating: "4.8", prepTime: "25 min" }
  },
  { 
    id: 22,
    img: gardenPizza, 
    title: "Garden Fresh Pizza", 
    desc: "A burst of freshness with mint leaves, bell peppers, and corn on a cheesy base.", 
    price: "179", 
    oldPrice: "229", 
    off: "22%", 
    category: "Pizza", 
    isVeg: true,
    ingredients: ["Hand-tossed dough", "Mint leaves", "Bell peppers", "Corn", "Cheese"],
    nutrition: { calories: "310 kcal", protein: "14g", carbs: "42g", fats: "11g" },
    stats: { orders: "1.1k+", rating: "4.7", prepTime: "20 min" }
  },

  // --- PASTA & NOODLES ---
  { 
    id: 23,
    img: vegRamen, 
    title: "Spicy Veg Ramen", 
    desc: "A comforting bowl of ramen noodles in a spicy broth, topped with fresh vegetables and tofu.", 
    price: "189", 
    oldPrice: "239", 
    off: "21%", 
    category: "Pasta", 
    isVeg: true,
    ingredients: ["Ramen noodles", "Spicy broth", "Tofu", "Bok choy", "Mushrooms"],
    nutrition: { calories: "320 kcal", protein: "15g", carbs: "50g", fats: "8g" },
    stats: { orders: "2.2k+", rating: "4.8", prepTime: "15 min" }
  },
  {
    id: 25,
    img: chickenRamen,
    title: "Chicken Ramen Bowl",
    desc: "Authentic ramen bowl with tender chicken slices, soft-boiled egg, and rich savory broth.",
    price: "299",
    oldPrice: "399",
    off: "25%",
    category: "Pasta",
    isVeg: false,
    ingredients: ["Ramen noodles", "Chicken broth", "Chicken slices", "Egg", "Bamboo shoots"],
    nutrition: { calories: "450 kcal", protein: "25g", carbs: "50g", fats: "15g" },
    stats: { orders: "1.5k+", rating: "4.7", prepTime: "15-20 min" },
    label: "Chef's Special"
  },
  { 
    id: 24,
    img: chickenPasta, 
    title: "Chicken Parmesan Pasta", 
    desc: "Al dente pasta tossed in a rich tomato sauce, topped with crispy chicken and parmesan cheese.", 
    price: "229", 
    oldPrice: "279", 
    off: "18%", 
    category: "Pasta", 
    isVeg: false,
    ingredients: ["Pasta", "Tomato sauce", "Crispy chicken", "Parmesan cheese", "Basil"],
    nutrition: { calories: "550 kcal", protein: "30g", carbs: "60g", fats: "22g" },
    stats: { orders: "1.9k+", rating: "4.9", prepTime: "20 min" }
  },
  { 
    id: 26,
    img: vegPastaBowl, 
    title: "Veg Pasta Bowl", 
    desc: "A wholesome bowl of penne pasta tossed in a rich tomato basil sauce with fresh vegetables.", 
    price: "199", 
    oldPrice: "249", 
    off: "20%", 
    category: "Pasta", 
    isVeg: true,
    ingredients: ["Penne pasta", "Tomato basil sauce", "Bell peppers", "Zucchini", "Olives"],
    nutrition: { calories: "420 kcal", protein: "12g", carbs: "65g", fats: "10g" },
    stats: { orders: "1.8k+", rating: "4.7", prepTime: "15-20 min" }
  },

  // --- OTHERS (Chicken, Sides, Tacos, Burritos) ---
  { 
    id: 9,
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
    id: 10,
    img: chickenPopcorn, 
    title: "Chicken Popcorn", 
    desc: "Bite-sized pieces of tender chicken, breaded and fried to golden perfection. Perfect for snacking!", 
    price: "149", 
    oldPrice: "199", 
    off: "25%", 
    category: "Chicken", 
    isVeg: false,
    ingredients: ["Chicken breast bites", "Breadcrumbs", "Spices", "Dip"],
    nutrition: { calories: "350 kcal", protein: "20g", carbs: "25g", fats: "18g" },
    stats: { orders: "6k+", rating: "4.8", prepTime: "10 min" }
  },
  { 
    id: 11,
    img: honeyGarlicChicken, 
    title: "Honey Garlic Chicken Bowl", 
    desc: "Succulent chicken pieces glazed in a sweet and savory honey garlic sauce, served over a bed of rice.", 
    price: "249", 
    oldPrice: "299", 
    off: "15%", 
    category: "Chicken", 
    isVeg: false,
    ingredients: ["Chicken", "Honey", "Garlic", "Soy sauce", "Rice", "Sesame seeds"],
    nutrition: { calories: "550 kcal", protein: "35g", carbs: "65g", fats: "12g" },
    stats: { orders: "1.8k+", rating: "4.9", prepTime: "20-25 min" }
  },
  { 
    id: 20,
    img: nonVegPlatter, 
    title: "Non-Veg Crispy Platter", 
    desc: "The ultimate sharing platter! Loaded with chicken wings, nuggets, popcorn chicken, and fries.", 
    price: "399", 
    oldPrice: "599", 
    off: "33%", 
    category: "Chicken", 
    isVeg: false,
    ingredients: ["Chicken wings", "Nuggets", "Popcorn chicken", "Fries", "Dips"],
    nutrition: { calories: "850 kcal", protein: "60g", carbs: "45g", fats: "40g" },
    stats: { orders: "1.2k+", rating: "4.9", prepTime: "25 min" },
    label: "Deal of the Day"
  },
  { 
    id: 12,
    img: chickenNuggets, 
    title: "Chicken Nuggets", 
    desc: "Classic crispy chicken nuggets, golden brown on the outside and tender on the inside.", 
    price: "119", 
    oldPrice: "159", 
    off: "25%", 
    category: "Chicken", 
    isVeg: false,
    ingredients: ["Chicken meat", "Breadcrumbs", "Seasoning", "Oil"],
    nutrition: { calories: "290 kcal", protein: "15g", carbs: "20g", fats: "16g" },
    stats: { orders: "4k+", rating: "4.7", prepTime: "10 min" }
  },
  { 
    id: 13,
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
    id: 14,
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
    id: 15,
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
  },

  // --- DESSERTS ---
  { 
    id: 16,
    img: chocoLavaCake, 
    title: "Choco Lava Cake", 
    desc: "A rich chocolate cake with a molten chocolate center that flows out when you cut into it.", 
    price: "99", 
    oldPrice: "149", 
    off: "33%", 
    category: "Dessert", 
    isVeg: true,
    ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour"],
    nutrition: { calories: "350 kcal", protein: "5g", carbs: "40g", fats: "20g" },
    stats: { orders: "3.2k+", rating: "4.9", prepTime: "15 min" },
    label: "Must Try"
  },
  { 
    id: 17,
    img: chocoIceCreamCake, 
    title: "Choco Ice Cream Cake", 
    desc: "The ultimate treat! Layers of chocolate cake and creamy chocolate ice cream.", 
    price: "149", 
    oldPrice: "199", 
    off: "25%", 
    category: "Dessert", 
    isVeg: true,
    ingredients: ["Chocolate sponge", "Chocolate ice cream", "Whipped cream", "Chocolate shavings"],
    nutrition: { calories: "400 kcal", protein: "6g", carbs: "45g", fats: "22g" },
    stats: { orders: "1.5k+", rating: "4.8", prepTime: "5 min" }
  },
  { 
    id: 18,
    img: strawberryMousecake, 
    title: "Strawberry Mousse Cake", 
    desc: "Light, airy, and bursting with fresh strawberry flavor. A perfect refreshing dessert.", 
    price: "129", 
    oldPrice: "169", 
    off: "23%", 
    category: "Dessert", 
    isVeg: true,
    ingredients: ["Strawberry puree", "Cream", "Gelatin", "Sponge cake base"],
    nutrition: { calories: "280 kcal", protein: "4g", carbs: "30g", fats: "15g" },
    stats: { orders: "1.1k+", rating: "4.7", prepTime: "10 min" }
  },


  // --- DRINKS ---
  { 
    id: 27,
    img: blueLagoon, 
    title: "Blue Lagoon", 
    desc: "A refreshing mocktail with blue curaçao syrup, lemon juice, and soda. A tropical delight!", 
    price: "149", 
    oldPrice: "199", 
    off: "25%", 
    category: "Drinks", 
    isVeg: true,
    ingredients: ["Blue curaçao syrup", "Lemon juice", "Soda", "Ice", "Mint"],
    nutrition: { calories: "120 kcal", protein: "0g", carbs: "30g", fats: "0g" },
    stats: { orders: "2.5k+", rating: "4.8", prepTime: "5 min" }
  },
  { 
    id: 28,
    img: lemonRefresh, 
    title: "Lemon Refresh", 
    desc: "Zesty and revitalizing! Freshly squeezed lemon juice mixed with mint and a hint of ginger.", 
    price: "99", 
    oldPrice: "129", 
    off: "23%", 
    category: "Drinks", 
    isVeg: true,
    ingredients: ["Lemon juice", "Mint leaves", "Ginger", "Sugar", "Soda"],
    nutrition: { calories: "90 kcal", protein: "0g", carbs: "22g", fats: "0g" },
    stats: { orders: "3k+", rating: "4.7", prepTime: "5 min" },
    label: "Summer Special"
  },
  { 
    id: 29,
    img: coffeeLatte, 
    title: "Classic Coffee Latte", 
    desc: "Smooth and creamy latte made with freshly brewed espresso and steamed milk.", 
    price: "129", 
    oldPrice: "169", 
    off: "23%", 
    category: "Drinks", 
    isVeg: true,
    ingredients: ["Espresso", "Steamed milk", "Milk foam", "Sugar (optional)"],
    nutrition: { calories: "150 kcal", protein: "8g", carbs: "15g", fats: "6g" },
    stats: { orders: "4k+", rating: "4.9", prepTime: "5-10 min" }
  },
  { 
    id: 30,
    img: orangeMint, 
    title: "Orange Mint Cooler", 
    desc: "A citrusy blast of fresh orange juice muddled with mint leaves and served over ice.", 
    price: "139", 
    oldPrice: "179", 
    off: "22%", 
    category: "Drinks", 
    isVeg: true,
    ingredients: ["Fresh orange juice", "Mint leaves", "Ice", "Soda"],
    nutrition: { calories: "110 kcal", protein: "1g", carbs: "26g", fats: "0g" },
    stats: { orders: "1.8k+", rating: "4.8", prepTime: "5 min" }
  }
];

export const categories = ['All', 'Burger', 'Pizza', 'Pasta', 'Chicken', 'Sides', 'Tacos', 'Burritos', 'Dessert', 'Drinks'];
