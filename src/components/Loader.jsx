import loaderImg from "../assets/loading.png"
import "./Loader.css"

export default function Loader() {
  return (
    <div  className="loader">
    <img src={loaderImg} />
    <span>Cargando</span>
  </div>
  )
}
