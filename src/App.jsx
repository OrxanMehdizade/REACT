
import './App.css';
import FormComponent from './FormComponent'
import {createContext,useState} from "react";
import {goodsArray} from "./reducer";

export const MyContext=createContext();



function App() {
    let [arr,setArr]=useState(goodsArray);
    let [obj,setObj]=useState({"product_name": "",
        "product_description": "", "product_price": null})

    const addGoodus=()=>{
        let newArr=[...arr]
        newArr.push(obj)
        setArr(newArr)
    }

    const deleteGoodus=(goodsName)=>{
        let newArr=[...arr]
        let arrFilter=newArr.filter((item)=>item.product_name!==goodsName)
        setArr(arrFilter)
    }

    const updateGoods=(goodsName)=>{
        let newArr = [...arr];
        let arrMap = newArr.map((item) =>
            item.product_name === goodsName ? obj : item
        );
        setArr(arrMap);

    }

    return (
        <MyContext.Provider value={{arr,setObj,obj,addGoodus,deleteGoodus,updateGoods}}>
            <div className='countenirDiv'>
                <FormComponent/>
            </div>
        </MyContext.Provider>
    );
}

export default App;
