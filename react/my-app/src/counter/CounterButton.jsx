import './Counter.css'
import {PropTypes} from 'prop-types'

export default function Counter({by,incrementMethod,decrementMethod}){
    // function incrementcounter(){
    //     incrementMethod(by)
    // }
    // function decrementcounter(){
    //     decrementMethod(by)
    // }
    return(
        <div className="counter">
            <div>
                {/* <button className="counterButton" onClick={()=>incrementcounter(by)}>+{by}</button>
                <button className="counterButton" onClick={()=>decrementcounter(by)}>-{by}</button> */}
                <button className="counterButton" onClick={()=>incrementMethod(by)}>+{by}</button>
                <button className="counterButton" onClick={()=>decrementMethod(by)}>-{by}</button>
            </div>
        </div>
    )
}
Counter.protoTypes={
    by:PropTypes.number
}