
const ItemDetail = ({ producto }) => {

  return (
    <div className="item-detail">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p className="precio">${producto.precio}</p>
      </div>
    </div>
  );
};
export default ItemDetail;
