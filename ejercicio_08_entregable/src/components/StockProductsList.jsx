import StockProduct from "./StockProduct";

function StockProductsList({ products, addOnCartProduct }) {
  return (
    <div className="col-6">
      <h2>Productos Disponibles</h2>
      <ul className="list-group">
        <StockProduct products={products} addOnCartProduct={addOnCartProduct} />
      </ul>
    </div>
  );
}

export default StockProductsList;
