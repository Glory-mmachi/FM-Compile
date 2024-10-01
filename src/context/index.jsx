"use client";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

const productList = [
  {
    id: 1,
    image: {
      thumbnail: "/image-waffle-thumbnail.jpg",
      mobile: "/image-waffle-mobile.jpg",
      tablet: "/image-waffle-tablet.jpg",
      desktop: "/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    count: 0,
  },
  {
    id: 2,
    image: {
      thumbnail: "/image-creme-brulee-thumbnail.jpg",
      mobile: "/image-creme-brulee-mobile.jpg",
      tablet: "/image-creme-brulee-tablet.jpg",
      desktop: "/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    count: 0,
  },
  {
    id: 3,
    image: {
      thumbnail: "/image-macaron-thumbnail.jpg",
      mobile: "/image-macaron-mobile.jpg",
      tablet: "/image-macaron-tablet.jpg",
      desktop: "/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    count: 0,
  },
  {
    id: 4,
    image: {
      thumbnail: "/image-tiramisu-thumbnail.jpg",
      mobile: "/image-tiramisu-mobile.jpg",
      tablet: "/image-tiramisu-tablet.jpg",
      desktop: "/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    count: 0,
  },
  {
    id: 5,
    image: {
      thumbnail: "/image-baklava-thumbnail.jpg",
      mobile: "/image-baklava-mobile.jpg",
      tablet: "/image-baklava-tablet.jpg",
      desktop: "/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    count: 0,
  },
  {
    id: 6,
    image: {
      thumbnail: "/image-meringue-thumbnail.jpg",
      mobile: "/image-meringue-mobile.jpg",
      tablet: "/image-meringue-tablet.jpg",
      desktop: "/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    count: 0,
  },
  {
    id: 7,
    image: {
      thumbnail: "/image-cake-thumbnail.jpg",
      mobile: "/image-cake-mobile.jpg",
      tablet: "/image-cake-tablet.jpg",
      desktop: "/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    count: 0,
  },
  {
    id: 8,
    image: {
      thumbnail: "/image-brownie-thumbnail.jpg",
      mobile: "/image-brownie-mobile.jpg",
      tablet: "/image-brownie-tablet.jpg",
      desktop: "/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    count: 0,
  },
  {
    id: 9,
    image: {
      thumbnail: "/image-panna-cotta-thumbnail.jpg",
      mobile: "/image-panna-cotta-mobile.jpg",
      tablet: "/image-panna-cotta-tablet.jpg",
      desktop: "/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    count: 0,
  },
];

export function AppWrapper({ children }) {
  const [clicked, setClicked] = useState(true);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(productList);
  const [clickedItems, setClickedItems] = useState([]);
// increment
  const increment = (id) => {
    setProducts((prevItems) =>
      prevItems.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };
// decrement
  const decrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };
// In your context file
const removeItem = (id) => {
  setClickedItems((prevItems) => prevItems.filter(item => item.id !== id));
};

useEffect(() => {
  // Only update clickedItems when necessary
  const updatedClickedItems = products.reduce((acc, product) => {
    if (product.count > 0) {
      const existingItem = acc.find((item) => item.id === product.id);
      if (existingItem) {
        // If the product is already in clickedItems, just update the count
        return acc.map((item) =>
          item.id === product.id ? { ...item, count: product.count } : item
        );
      } else {
        // Otherwise, add the product with its count to clickedItems
        return [...acc, { id: product.id, count: product.count, name: product.name, price: product.price, image: product.image, category: product.category  }];
      }
    }
    return acc;
  }, []);

  // Only setClickedItems and log if there's a change
  if (JSON.stringify(clickedItems) !== JSON.stringify(updatedClickedItems)) {
    setClickedItems(updatedClickedItems);
  }
}, [products]); // Run the effect only when products change

  
  const calculateTotalCount = () => {
    return products.reduce((total, product) => total + product.count, 0);
  };

  const totalCount = calculateTotalCount();

  return (
    <AppContext.Provider
      value={{
        clicked,
        setClicked,
        count,
        setCount,
        increment,
        decrement,
        products,
        setProducts,
        totalCount,
        clickedItems,
        setClickedItems,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
