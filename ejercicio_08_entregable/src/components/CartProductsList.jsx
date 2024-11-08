import CartProduct from "./CartProduct";

function CartProductsList({ onCartProducts, totalPrice, removeOnCartProduct }) {
  return (
    <div className="col-6">
      <h2>Carrito de compras</h2>
      <ul className="list-group">
        <CartProduct
          onCartProducts={onCartProducts}
          removeOnCartProduct={removeOnCartProduct}
        />
      </ul>
      {onCartProducts.length > 0 && (
        <div className="total-price ps-3 mt-3">
          El precio total es: {totalPrice.toFixed(1)}
        </div>
      )}
    </div>
  );
}

export default CartProductsList;
