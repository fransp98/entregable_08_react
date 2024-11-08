import { useState } from "react";
import groceries from "./data/groceries";
import "./App.css";
import StockProductsList from "./components/StockProductsList";
import CartProductsList from "./components/CartProductsList";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [onCartProducts, setOnCartProducts] = useState([]);

  function addOnCartProduct(producto) {
    onCartProducts.some((item) => item.id === producto.id)
      ? setOnCartProducts(
          onCartProducts.map((item) => {
            if (item.id !== producto.id) {
              return item;
            } else {
              return { ...item, unitAmount: item.unitAmount + 1 };
            }
          })
        )
      : setOnCartProducts([...onCartProducts, { ...producto, unitAmount: 1 }]);

    setTotalPrice((totalPrice) => totalPrice + producto.unitPrice);
  }

  function removeOnCartProduct(product) {
    const cartRemovedItems = onCartProducts.map((item) => {
      if (item.id === product.id) {
        if (item.unitAmount > 1) {
          return { ...item, unitAmount: item.unitAmount - 1 };
        } else if (item.unitAmount === 1) {
          return null;
        }
      } else {
        return item;
      }
    });

    const noNullCartItems = cartRemovedItems.filter((item) => item !== null);

    setOnCartProducts(noNullCartItems);

    setTotalPrice((totalPrice) => totalPrice - product.unitPrice);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <StockProductsList
            products={groceries}
            addOnCartProduct={addOnCartProduct}
          />
          <CartProductsList
            onCartProducts={onCartProducts}
            totalPrice={totalPrice}
            removeOnCartProduct={removeOnCartProduct}
          />
        </div>
      </div>
    </>
  );
}

export default App;
