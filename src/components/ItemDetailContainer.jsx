import { useEffect, useState } from "react"

import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../db/db"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams()

  useEffect(()=>{
    
    const productoRef = doc(db, "productos", id)
    getDoc(productoRef)
      .then((respuesta)=>{
        const productosDb = { id: respuesta.id, ...respuesta.data()}
        setProducto(productosDb)
      })
      .catch((error)=> console.log(error))

  }, [id])

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}
export default ItemDetailContainer