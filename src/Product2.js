import "./Product2.css"
import Watch from "./ledies-watch.png"

function Product2(){
    return(
    <div className="container">
                <img src ={Watch} className="img-watch"/>
                <h1 className="watch-heading">ledies Watch</h1>
                <h2 className="watch-prize">RS 599/-</h2>
    </div>
    )
}
export default Product2