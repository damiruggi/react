import { Link } from "react-router-dom";

const Item = ({ producto }) => {

  return (
    <div className="item">
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <p className="titulo"> {producto.nombre} </p>
      <p className="precio">$ {producto.precio} </p>
      <Link to={`/detalle/${producto.id}`} className="link">Ver más</Link>
    </div>
  );
};
export default Item;
