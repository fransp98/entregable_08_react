function CartProduct({ onCartProducts, removeOnCartProduct }) {
  return (
    <>
      {onCartProducts.map((product) => (
        <li
          onClick={() => removeOnCartProduct(product)}
          key={product.id}
          className="list-group-item"
        >
          <i className="bi bi-dash-circle ms-3 me-3"></i>
          <b>{product.name} </b> (cantidad: {product.unitAmount}){" "}
          {product.unitPrice}
        </li>
      ))}
    </>
  );
}

export default CartProduct;
