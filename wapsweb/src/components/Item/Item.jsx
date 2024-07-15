import { Link } from "react-router-dom"
import './item.css'

Link

const Item = ({ name, img, category, price, stock }) => {
  return (
    <article className="art">

      <h2>{name}</h2>
      <img src={img} className="imgArt" />
      <p>Categoria: {category}</p>
      <h3>Precio: ${price}</h3>
      <h3>Inventario: {stock}</h3>
      <Link to={'/detail/${id}'}>Mas detalles</Link>

    </article>
  )
}

export default Item
