import ramenImg from "@/assets/hero-ramen.jpg";
import spicyRamenImg from "@/assets/spicy-ramen.jpg";
import vegRamenImg from "@/assets/veg-ramen.jpg";
import koreanChickenImg from "@/assets/korean-chicken.jpg";
import sushiImg from "@/assets/sushi.jpg";
import riceBowlImg from "@/assets/rice-bowl.jpg";
import corndogImg from "@/assets/corndog.jpg";
import sandwichImg from "@/assets/sandwich.jpg";

export type MenuCategory =
  | "ramen"
  | "sandwiches"
  | "snacks"
  | "rice-bowls"
  | "sushi";

export type DietType = "veg" | "non-veg";

/** 0 = not spicy, 1 mild, 2 medium, 3 hot, 4 devil mode */
export type SpiceLevel = 0 | 1 | 2 | 3 | 4;

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  diet: DietType;
  spice: SpiceLevel;
  /** Price in INR. null -> "Price available at store". Never invent prices. */
  price: number | null;
  image: string;
  imageAlt: string;
  ingredients: string[] | null;
  allergens: string[] | null;
  featured?: boolean;
  mini?: boolean;
}

export const categories: { id: MenuCategory; label: string }[] = [
  { id: "ramen", label: "Ramen" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "snacks", label: "Snacks" },
  { id: "rice-bowls", label: "Rice Bowls" },
  { id: "sushi", label: "Sushi" },
];

export const spiceLabels = ["No Heat", "Mild", "Medium", "Hot", "Devil Mode"];

export const menu: MenuItem[] = [
  // ---------------- RAMEN ----------------
  {
    id: "veg-ramen",
    name: "Veg Ramen",
    category: "ramen",
    description:
      "Veg ramen is a flavorful noodle soup made with a rich vegetable broth.",
    diet: "veg",
    spice: 1,
    price: null,
    image: vegRamenImg,
    imageAlt: "Vegetarian ramen bowl with tofu, mushrooms and bok choy",
    ingredients: ["Ramen noodles", "Vegetable broth", "Seasonal vegetables", "Scallions"],
    allergens: ["Gluten", "Soy"],
    featured: true,
  },
  {
    id: "devil-spicy-veg-ramen",
    name: "Devil Spicy Veg Ramen",
    category: "ramen",
    description:
      "Devil spicy veg ramen is a flavorful noodle soup made with a spicy broth.",
    diet: "veg",
    spice: 4,
    price: null,
    image: spicyRamenImg,
    imageAlt: "Fiery red devil spicy vegetarian ramen bowl with chilli oil",
    ingredients: ["Ramen noodles", "Devil spice broth", "Chilli oil", "Vegetables", "Scallions"],
    allergens: ["Gluten", "Soy"],
    featured: true,
  },
  {
    id: "devil-spicy-chicken-ramen",
    name: "Devil Spicy Chicken Ramen",
    category: "ramen",
    description:
      "Devil spicy chicken ramen is a hearty noodle soup made with a flavorful spicy broth.",
    diet: "non-veg",
    spice: 4,
    price: null,
    image: spicyRamenImg,
    imageAlt: "Devil spicy chicken ramen in a deep red chilli broth",
    ingredients: ["Ramen noodles", "Devil spice chicken broth", "Chicken", "Chilli oil", "Scallions"],
    allergens: ["Gluten", "Soy", "Egg"],
    featured: true,
  },
  {
    id: "chicken-ramen",
    name: "Chicken Ramen",
    category: "ramen",
    description:
      "Chicken ramen is a hearty noodle soup made with a flavorful chicken broth.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: ramenImg,
    imageAlt: "Chicken ramen bowl with noodles lifted on chopsticks and soft egg",
    ingredients: ["Ramen noodles", "Chicken broth", "Chicken", "Soft boiled egg", "Nori"],
    allergens: ["Gluten", "Soy", "Egg"],
    featured: true,
  },
  {
    id: "mojo-special-ramen",
    name: "Mojo Special Ramen",
    category: "ramen",
    description:
      "Chicken, fish and prawns combined in a delicious signature ramen.",
    diet: "non-veg",
    spice: 2,
    price: null,
    image: ramenImg,
    imageAlt: "Mojo special ramen loaded with chicken, fish and prawns",
    ingredients: ["Ramen noodles", "Signature broth", "Chicken", "Fish", "Prawns"],
    allergens: ["Gluten", "Soy", "Fish", "Shellfish"],
    featured: true,
  },
  {
    id: "sea-food-ramen",
    name: "Sea Food Ramen",
    category: "ramen",
    description: "Seafood ramen with a savory broth and seafood toppings.",
    diet: "non-veg",
    spice: 2,
    price: null,
    image: ramenImg,
    imageAlt: "Seafood ramen bowl with savoury broth and seafood toppings",
    ingredients: ["Ramen noodles", "Savoury seafood broth", "Prawns", "Fish"],
    allergens: ["Gluten", "Soy", "Fish", "Shellfish"],
    featured: true,
  },
  {
    id: "mojo-special-veg-ramen",
    name: "Mojo Special Veg Ramen",
    category: "ramen",
    description: "Paneer and tofu in a flavorful signature vegetarian ramen.",
    diet: "veg",
    spice: 2,
    price: null,
    image: vegRamenImg,
    imageAlt: "Signature vegetarian ramen with paneer and tofu",
    ingredients: ["Ramen noodles", "Signature veg broth", "Paneer", "Tofu", "Vegetables"],
    allergens: ["Gluten", "Soy", "Dairy"],
    featured: true,
  },
  {
    id: "chicken-ramen-mini",
    name: "Chicken Ramen [Mini]",
    category: "ramen",
    description:
      "A smaller portion of our hearty chicken ramen in a flavorful chicken broth.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: ramenImg,
    imageAlt: "Mini portion chicken ramen bowl",
    ingredients: ["Ramen noodles", "Chicken broth", "Chicken", "Scallions"],
    allergens: ["Gluten", "Soy"],
    mini: true,
  },
  {
    id: "devil-spicy-chicken-ramen-mini",
    name: "Devil Spicy Chicken Ramen [Mini]",
    category: "ramen",
    description: "A smaller portion of the devil spicy chicken ramen.",
    diet: "non-veg",
    spice: 4,
    price: null,
    image: spicyRamenImg,
    imageAlt: "Mini portion devil spicy chicken ramen",
    ingredients: ["Ramen noodles", "Devil spice chicken broth", "Chicken", "Chilli oil"],
    allergens: ["Gluten", "Soy"],
    mini: true,
  },
  {
    id: "veg-ramen-mini",
    name: "Veg Ramen [Mini]",
    category: "ramen",
    description: "A smaller portion of our vegetable broth ramen.",
    diet: "veg",
    spice: 1,
    price: null,
    image: vegRamenImg,
    imageAlt: "Mini portion vegetarian ramen",
    ingredients: ["Ramen noodles", "Vegetable broth", "Vegetables"],
    allergens: ["Gluten", "Soy"],
    mini: true,
  },
  {
    id: "devil-spicy-veg-ramen-mini",
    name: "Devil Spicy Veg Ramen [Mini]",
    category: "ramen",
    description: "A smaller portion of the devil spicy veg ramen.",
    diet: "veg",
    spice: 4,
    price: null,
    image: spicyRamenImg,
    imageAlt: "Mini portion devil spicy vegetarian ramen",
    ingredients: ["Ramen noodles", "Devil spice broth", "Vegetables", "Chilli oil"],
    allergens: ["Gluten", "Soy"],
    mini: true,
  },
  {
    id: "veg-cheesy-ramen",
    name: "Veg Cheesy Ramen",
    category: "ramen",
    description: "Ramen prepared in a rich cheesy broth.",
    diet: "veg",
    spice: 1,
    price: null,
    image: vegRamenImg,
    imageAlt: "Vegetarian cheesy ramen in a rich cheese broth",
    ingredients: ["Ramen noodles", "Cheesy broth", "Vegetables"],
    allergens: ["Gluten", "Dairy", "Soy"],
  },
  {
    id: "chicken-cheesy-ramen",
    name: "Chicken Cheesy Ramen",
    category: "ramen",
    description: "Ramen prepared with rich cheesy broth.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: ramenImg,
    imageAlt: "Chicken cheesy ramen in a rich cheese broth",
    ingredients: ["Ramen noodles", "Cheesy chicken broth", "Chicken"],
    allergens: ["Gluten", "Dairy", "Soy"],
  },
  {
    id: "veg-creamy-ramen",
    name: "Veg Creamy Ramen",
    category: "ramen",
    description: "Broth prepared with cream & coconut milk.",
    diet: "veg",
    spice: 1,
    price: null,
    image: vegRamenImg,
    imageAlt: "Creamy vegetarian ramen with coconut milk broth",
    ingredients: ["Ramen noodles", "Cream", "Coconut milk", "Vegetables"],
    allergens: ["Gluten", "Dairy", "Soy"],
  },
  {
    id: "chicken-creamy-ramen",
    name: "Chicken Creamy Ramen",
    category: "ramen",
    description: "Broth prepared with French cream & coconut milk.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: ramenImg,
    imageAlt: "Creamy chicken ramen with French cream and coconut milk broth",
    ingredients: ["Ramen noodles", "French cream", "Coconut milk", "Chicken"],
    allergens: ["Gluten", "Dairy", "Soy"],
  },

  // ---------------- SANDWICHES ----------------
  {
    id: "korean-veg-sandwich",
    name: "Korean Veg Sandwich",
    category: "sandwiches",
    description:
      "Korean-style toasted sandwich layered with vegetables and signature sauces.",
    diet: "veg",
    spice: 1,
    price: null,
    image: sandwichImg,
    imageAlt: "Korean style toasted vegetarian sandwich cut in half",
    ingredients: ["Toasted bread", "Cabbage slaw", "Vegetables", "Korean sauces"],
    allergens: ["Gluten", "Egg", "Dairy"],
  },
  {
    id: "korean-chicken-sandwich",
    name: "Korean Chicken Sandwich",
    category: "sandwiches",
    description:
      "Korean-style toasted sandwich stacked with chicken and signature sauces.",
    diet: "non-veg",
    spice: 2,
    price: null,
    image: sandwichImg,
    imageAlt: "Korean style toasted chicken sandwich cut in half",
    ingredients: ["Toasted bread", "Chicken", "Cabbage slaw", "Korean sauces"],
    allergens: ["Gluten", "Egg", "Dairy"],
  },

  // ---------------- SNACKS ----------------
  {
    id: "paneer-corndog",
    name: "Paneer Corndog",
    category: "snacks",
    description:
      "Paneer corndog is a fun and tasty snack made by coating pieces of paneer.",
    diet: "veg",
    spice: 1,
    price: null,
    image: corndogImg,
    imageAlt: "Crispy golden paneer corndog with sauces",
    ingredients: ["Paneer", "Crispy batter", "Panko", "Sauces"],
    allergens: ["Gluten", "Dairy"],
  },
  {
    id: "cheese-corndog",
    name: "Cheese Corndog",
    category: "snacks",
    description:
      "Cheese corndog is a tasty snack made by coating a piece of melted cheese.",
    diet: "veg",
    spice: 0,
    price: null,
    image: corndogImg,
    imageAlt: "Cheese corndog with a melted cheese pull",
    ingredients: ["Mozzarella", "Crispy batter", "Panko", "Sauces"],
    allergens: ["Gluten", "Dairy"],
  },
  {
    id: "chicken-cheese-corndog",
    name: "Chicken Cheese Corndog",
    category: "snacks",
    description:
      "Chicken cheese corndog is a delicious snack made by wrapping chicken and cheese in a crispy coating.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: corndogImg,
    imageAlt: "Chicken and cheese corndog in a crispy panko coating",
    ingredients: ["Chicken", "Mozzarella", "Crispy batter", "Panko"],
    allergens: ["Gluten", "Dairy"],
  },
  {
    id: "chicken-cheese-fries",
    name: "Chicken Cheese Fries",
    category: "snacks",
    description: "Loaded fries topped with chicken and melted cheese.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: koreanChickenImg,
    imageAlt: "Loaded chicken cheese fries",
    ingredients: ["Fries", "Chicken", "Cheese sauce"],
    allergens: ["Dairy", "Gluten"],
  },
  {
    id: "korean-fried-chicken",
    name: "Korean Fried Chicken",
    category: "snacks",
    description: "Juicy chicken pieces tossed in Korean sauce.",
    diet: "non-veg",
    spice: 3,
    price: null,
    image: koreanChickenImg,
    imageAlt: "Korean fried chicken glazed in glossy red sauce with sesame",
    ingredients: ["Chicken", "Korean sauce", "Sesame seeds"],
    allergens: ["Gluten", "Soy", "Sesame"],
    featured: true,
  },

  // ---------------- RICE BOWLS ----------------
  {
    id: "seafood-rice-bowl",
    name: "Seafood Rice Bowl",
    category: "rice-bowls",
    description:
      "Dive into a flavorful bowl of steamed rice topped with tender prawn and fish.",
    diet: "non-veg",
    spice: 2,
    price: null,
    image: riceBowlImg,
    imageAlt: "Seafood rice bowl with prawn and fish over steamed rice",
    ingredients: ["Steamed rice", "Prawns", "Fish", "Sauces", "Vegetables"],
    allergens: ["Fish", "Shellfish", "Soy"],
  },
  {
    id: "spl-rice-bowl",
    name: "Spl Rice Bowl",
    category: "rice-bowls",
    description: "Non-veg mixed rice bowl with chicken, fish and more.",
    diet: "non-veg",
    spice: 2,
    price: null,
    image: riceBowlImg,
    imageAlt: "Special mixed non-vegetarian rice bowl",
    ingredients: ["Steamed rice", "Chicken", "Fish", "Egg", "Sauces"],
    allergens: ["Fish", "Egg", "Soy"],
  },
  {
    id: "chicken-rice-bowl",
    name: "Chicken Rice Bowl",
    category: "rice-bowls",
    description:
      "A hearty bowl of steamed rice topped with chicken and a soft, half-boiled egg.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: riceBowlImg,
    imageAlt: "Chicken rice bowl topped with a half boiled egg",
    ingredients: ["Steamed rice", "Chicken", "Half boiled egg", "Sauces"],
    allergens: ["Egg", "Soy"],
  },
  {
    id: "veg-rice-bowl",
    name: "Veg Rice Bowl",
    category: "rice-bowls",
    description:
      "A satisfying bowl of fluffy steamed rice topped with paneer, vegetables and sauces.",
    diet: "veg",
    spice: 1,
    price: null,
    image: riceBowlImg,
    imageAlt: "Vegetarian rice bowl with paneer and vegetables",
    ingredients: ["Steamed rice", "Paneer", "Vegetables", "Sauces"],
    allergens: ["Dairy", "Soy"],
  },

  // ---------------- SUSHI ----------------
  {
    id: "veg-sushi",
    name: "Veg Sushi",
    category: "sushi",
    description:
      "Veggie sushi stuffed with crispy paneer, pickled vegetables & cucumber.",
    diet: "veg",
    spice: 1,
    price: null,
    image: sushiImg,
    imageAlt: "Vegetarian sushi rolls with crispy paneer and cucumber",
    ingredients: ["Sushi rice", "Nori", "Crispy paneer", "Pickled vegetables", "Cucumber"],
    allergens: ["Dairy", "Gluten", "Soy"],
  },
  {
    id: "chicken-katsu-sushi-rolls",
    name: "Chicken Katsu Sushi Rolls",
    category: "sushi",
    description:
      "Sushi stuffed with katsu chicken, pickled vegetables & cucumber.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: sushiImg,
    imageAlt: "Chicken katsu sushi rolls on a dark slate board",
    ingredients: ["Sushi rice", "Nori", "Katsu chicken", "Pickled vegetables", "Cucumber"],
    allergens: ["Gluten", "Egg", "Soy"],
    featured: true,
  },
  {
    id: "prawns-tempura-sushi",
    name: "Prawns Tempura Sushi",
    category: "sushi",
    description:
      "Sushi stuffed with tempura prawns, pickled vegetables & cucumber.",
    diet: "non-veg",
    spice: 1,
    price: null,
    image: sushiImg,
    imageAlt: "Prawn tempura sushi rolls with pickled vegetables",
    ingredients: ["Sushi rice", "Nori", "Tempura prawns", "Pickled vegetables", "Cucumber"],
    allergens: ["Shellfish", "Gluten", "Egg"],
  },
];

export const featuredRamen = menu.filter(
  (i) => i.category === "ramen" && i.featured && !i.mini,
);

export function itemsByCategory(category: MenuCategory) {
  return menu.filter((i) => i.category === category);
}
