import React from 'react'
import { increament, clear} from '../redux/action-creator'
import { useSelector, useDispatch } from 'react-redux'

export default function Index(){

    const myState = useSelector((state) => state.counter?.count)
    const disPatch = useDispatch()
    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
        <button style={{
            backgroundColor : "crimson",
            color: "white",
            padding: "10px 20px"
        }} onClick ={()=>disPatch(increament())}>Increment</button>
        <p>{myState}</p>
        <button style={{
            backgroundColor : "crimson",
            color: "white",
            padding: "10px 20px"
        }}onClick ={()=>disPatch(clear())}>clear</button>
        </div>
    )
}
