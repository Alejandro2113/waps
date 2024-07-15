import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../asyncMock"
import './itemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {
    if (!category) {

      getProducts()
        .then((resolve) => {
          setProducts(resolve)
        })

    }else {
      getProductsByCategory(category)
      .then((res)=>{
        setProducts(res)
      })
    }


  }, [category])

  return (
    <>

      <ItemList products={products} />


    </>
  )
}

export default ItemListContainer
