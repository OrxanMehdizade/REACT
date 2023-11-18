import {useContext, useState} from "react";
import { MyContext } from "./App";

function FormComponent() {
    let {arr, setObj, obj,add, deleteGoods} = useContext(MyContext)
    let [value,setValuue]=useState('')
    return (
        <div>
            <input onChange={(ev) => setObj({...obj, "product_name": ev.target.value})} type="text" />
            <input onChange={(ev) => setObj({...obj, "product_description": ev.target.value})} type="text" />
            <input type="number" onChange={(ev) => setObj({...obj, "product_price": parseInt(ev.target.value)})}/>
            <input type="text" onChange={(ev)=>setValuue(ev.target.value)}/>
            <button onClick={() => {
                add()

                }}>ADD</button>

                <button onClick={() => {
                deleteGoods(value);
                    console.log(arr)
                }}>DELETE</button>
        </div>
    );
}

export default FormComponent;