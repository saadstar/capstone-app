import React, { useState, useEffect } from "react";
const Context = React.createContext();
function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);


      function toggleFavorite(id) {
        const updatedArr = allPhotos.map((photo) => {
          if (photo.id === id) {
            return { ...photo, isFavorite: !photo.isFavorite };
          }
          return photo;
        });
        setAllPhotos(updatedArr);
    }
    
  function addToCart(newitem) {
    setCartItem((prevItems) => [...prevItems, newitem]);
  }
  function removeFromCart(id) {
setCartItem(prevItems =>prevItems.filter(item=>item.id !==id))
  }
  function emptyCart() {
    setCartItem([]);
}

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart ,cartItem,removeFromCart,emptyCart}}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
