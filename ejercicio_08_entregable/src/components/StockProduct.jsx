function StockProduct({ products, addOnCartProduct }) {
  return (
    <>
      {products.map((product) => (
        <li
          onClick={() => addOnCartProduct(product)}
          key={product.id}
          className="list-group-item"
        >
          <i className="bi bi-plus-circle ms-3 me-3"></i>
          <b>{product.name} </b>${product.unitPrice}
        </li>
      ))}
    </>
  );
}

export default StockProduct;
