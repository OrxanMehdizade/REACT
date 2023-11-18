import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent';
import A from './A';
import B from './B';

import { createContext, useState } from 'react';
import { goodsArray } from "./reducer";

export const MyContext = createContext()

function App() {
    let [arr, setArr] = useState(goodsArray)
    let [obj, setObj] = useState({"product_name": "", "product_description": "", "product_price": null})

    const add = () => {
        let newArr = [...arr]
        newArr.push(obj)
        setArr(newArr)
    }

    const deleteGoods = (txt) => {
        let newArr = [...arr]
        let arrOne = newArr.filter((item) => item.product_name !== txt)
        setArr(arrOne)
    }

    return (
        <MyContext.Provider value={{arr, setObj, obj,add, deleteGoods}}>
            <div className="App">
                <FormComponent />


            </div>
        </MyContext.Provider>

    );
}

export default App;