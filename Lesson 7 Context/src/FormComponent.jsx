import {useContext, useState} from "react";
import {MyContext} from "./App";
import './FormComponent.css'

function FormComponent(){
    let [delValue,setDelValue]=useState('');
    const [isCheck, setIsCheck] = useState(false);
    const { arr, setObj, obj, addGoodus, deleteGoodus, updateGoods } = useContext(MyContext);





    const handleCheck = () => {
        setIsCheck(!isCheck);
    };


    return(
        <div className={'countenir-div'}>
            <div className={'inputsDivCss'}>
                <input type={'text'} placeholder='Product Name' onChange={(event)=>
                    setObj({...obj,"product_name":event.target.value})}/>

                <input type={'text'} placeholder='Product Description' onChange={(event)=>
                    setObj({...obj,"product_description":event.target.value})}/>

                <input type={'number'} placeholder='Product Price' onChange={(event)=>
                    setObj({...obj,"product_price":parseInt(event.target.value)})} min='0'/>

                <input id={'inputDUID'} type={'text'} placeholder={"Deletion or Update By Name"} onChange={(event)=>
                    setDelValue(event.target.value)} disabled={!isCheck}/>
            </div>
            <div className={'buttonDivCss'}>
                <label id="checkbox-label" onChange={handleCheck}>
                    Active/Detective
                    <input id='checkboxId' type="checkbox" />
                </label>
                <button
                    id={'updateButtonId'}
                    onClick={()=> {
                    updateGoods(delValue)
                }} disabled={!isCheck}>Update Goods</button>
                <button
                    id={'deleteButtonId'}
                    onClick={()=> {
                    deleteGoodus(delValue)
                }} disabled={!isCheck}>Delete Goodus</button>
                <button
                    id={'addButtonId'}
                    onClick={()=>{
                    addGoodus();
                }}>Goods Add</button>
            </div>
            <div id='arrDiv'>
                { arr.map((item,index)=>(
                    <div key={index}>

                        <p>| Product Name: {item.product_name }</p>
                        <p>| Product Description: {item.product_description}</p>
                        <p>| Product Price: {item.product_price}</p>
                        <p>| ------------------------------------------------</p>
                    </div>
                ))

                }
            </div>
        </div>

    )

}

export default FormComponent;