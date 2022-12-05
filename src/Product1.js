import "./Product1.css"
import SmartWatch from "./smart-watch.png"

function Product1(){
    return(
    <div className="main-container">
                <img src ={SmartWatch} className="img-smart-watch"/>
                <h1 className="heading">Smart Watch</h1>
                <h2 className="prize">RS 999/-</h2>
    </div>
    )
}
export default Product1