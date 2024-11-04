import { useLocation } from "react-router-dom";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

type CartItemLocalStorage = {
  username: string;
  cartItems: CartItem[];
};

export const setUsername = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const username = searchParams.get("user") || "";

  if (username != "" && username != getUsername()) {
    sessionStorage.setItem("user", username); // set username only new value occur
  }
};

const getUsername = () => {
  return sessionStorage.getItem("user") || "";
};

export const saveCartItems = (items: CartItem[]) => {
  const username = getUsername();
  if (!username) {
    return;
  }

  let modifiedData: CartItemLocalStorage[];
  const oldData: CartItemLocalStorage[] | null = getAllCartItems();
  const newData: CartItemLocalStorage = { username, cartItems: items };

  if (oldData) {
    const existingIndex = oldData.findIndex(
      (cartItem) => cartItem.username === username
    );

    if (existingIndex !== -1) {
      // Update the existing user's cart
      oldData[existingIndex].cartItems = items;
      modifiedData = [...oldData];
    } else {
      // Add a new record for the user
      modifiedData = [...oldData, newData];
    }
  } else {
    modifiedData = [newData]; // No old data, create a new array with the newData
  }

  localStorage.setItem("cartData", JSON.stringify(modifiedData));
};

export const retrieveCartItems = (): CartItem[] => {
  const username = getUsername();
  const stringData: string | null = localStorage.getItem("cartData");

  if (username && stringData) {
    try {
      const parsedItems = JSON.parse(stringData);
      if (Array.isArray(parsedItems)) {
        const userCart = parsedItems.find(
          (cartItem: CartItemLocalStorage) => cartItem.username === username
        );

        return userCart?.cartItems || [];
      }
    } catch (error) {
      console.error("Failed to parse cart data from localStorage:", error);
    }
  }

  return [];
};

const getAllCartItems = () => {
  const stringData: string | null = localStorage.getItem("cartData");

  if (stringData) {
    try {
      const parsedItems = JSON.parse(stringData);
      if (Array.isArray(parsedItems)) {
        return parsedItems;
      }
    } catch (error) {
      console.error("Failed to parse cart data from localStorage:", error);
    }
  }

  return [];
};
