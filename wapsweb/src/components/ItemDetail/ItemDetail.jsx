import { Link } from "react-router-dom"
import './ItemDetail.css'

Link
const ItemDetail = ({ name, img, category, price, stock, description, details }) => {

    

    return (
        <div>
            <article className="artid">
                <div className="detailsid">
                <h2>{name}</h2>
                <img src={img} className="imgArtid" />
                <p>Categoria: {category}</p>
                <h3>Precio: ${price}.00 </h3>
                <h5>Inventario: {stock}</h5>
                </div>
                <div className="detailsid">
                <p>Descripcion: {description}</p>
                <p>Detalles del producto:</p>
                <p>{details}</p>
                </div>

            </article>
        </div>
    )

}

export default ItemDetail
