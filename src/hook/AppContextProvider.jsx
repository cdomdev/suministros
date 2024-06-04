// UserContext.js
import React, { createContext, useContext, useState } from "react";
const UserContext = createContext();
const NotificationContext = createContext();
const CarShopContext = createContext();

export const useUser = () => useContext(UserContext);
export const useNotification = () => useContext(NotificationContext);
export const useCarShop = () => useContext(CarShopContext);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // estados de notificaion provider
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [bgToast, setBgToast] = useState("");

  // Estados para el contexto del carrito de compras

  const [cartItems, setCartItems] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  // Estados para la carga en los buttons


  // funciones de la sesion
  const login = (userData) => {
    // Lógica de inicio de sesión
    setUser(userData);
    setIsAdmin(userData.role === "admin");
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  // funciones para el contexto del carrito

  const addToCart = (productToAdd) => {
    const productId = productToAdd.id;

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      // Si el producto existe, actualizar la cantidad
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].cantidad += productToAdd.cantidad;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no existe, añadirlo al carrito
      setCartItems([...cartItems, productToAdd]);
    }
  };

  const deleFromCar = (productId) => {
    const updatedCarItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCarItems);
  };

  const setStep = (step) => {
    setActiveStep(step);
  };

  // retorno de contexto para el inicio y las notificaciones
  return (
    <UserContext.Provider value={{ user, isAdmin, setIsAdmin, login, logout }}>
      <NotificationContext.Provider
        value={{
          showToast,
          setShowToast,
          toastMessage,
          setToastMessage,
          bgToast,
          setBgToast,
        }}>
        <CarShopContext.Provider
          value={{
            cartItems,
            addToCart,
            activeStep,
            setStep,
            deleFromCar,
            setCartItems,
          }}>
          {children}
        </CarShopContext.Provider>
       
      </NotificationContext.Provider>
    </UserContext.Provider>
  );
};
