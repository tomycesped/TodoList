
import React from "react";

//aca abajo esta la logica de la persistancia de datos en localstorage usando un custom hook
function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);//el valor inicial del estado es parsedItem
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect(() => { 
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        try {
          let parsedItem;
          if (!localStorageItem) {
             localStorage.setItem(itemName, JSON.stringify(initialValue));
             parsedItem = initialValue;
        } else {
             parsedItem = JSON.parse(localStorageItem);
             setItem(parsedItem);
      }    setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }  
      }, 2000);

    }, []);

  //saveItem mantiene sincronizado el localStorage con el estado de React
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem); //actualiza el estado de React (setItem es la funcion actualizadora de React.useState), setItem actualiza 'item' con lo que le pases como parametro (), en este caso item ahora "es" newItem
  };
  
  return {
  item,
  saveItem,
  loading,
  error};
  }
  
  export { useLocalStorage };