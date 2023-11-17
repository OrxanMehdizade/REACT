//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
    let [arr,setArr]=useState([
        {
            "name": "Кровать TATRAN",
            "description": "Основание из полированной нержавеющей стали, придает оригинальный парижский эффект.",
            "price": 120000,
            "id":1
        },
        {
            "name": "Кресло VILORA",      "description": "Мягкое и уютное, аккуратное и стильное. Улучшите покупки снега и приятная на ощупь ткань.",
            "price": 21000,
            "id":2
        },
        {
            "name": "Стол MENU",
            "description": "Европейский дуб - отличается особой прочностью и стабильностью.",
            "price": 34000,
            "id":3
        },
        {
            "name": "Диван ASKESTA",
            "description": "Благодаря заслуживающему механизму диван легко прокладывается в комфортную кровать.",
            "price": 68000,
            "id":4
        },
        {
            "name": "Кресло LUNAR",
            "description": "Прекрасно передает солнечные лучи, передняя влажность и любые сажки.",
            "price": 40000,
            "id":5
        },
        {
            "name": "Шкаф Nastan",
            "description": "Мебель может быть оснащена разнообразными системами подсветки.",
            "price": 80000,
            "id":6
        },
        {
            "name": "Комод BRIXTON",
            "description": "Современный комод с просторными ящиками. Идеально подойдет для гостиной или спальни.",
            "price": 55000,
            "id":7
        },
        {
            "name": "Стеллаж PAXTON",      "description": "Универсальный стеллаж для книг и декора. Имеет металлическую основу.",
            "price": 42000,
            "id":8
        },
        {
            "name": "Тумба REX",
            "description": "Тумба из массива дуба с двумя ящиками. Прекрасное дополнение к кровати.",
            "price": 32000,
            "id":9
        },
        {
            "name": "Стул OAKLEY",
            "description": "Стул с мягким сиденьем и деревянными ножками. Удобен и стилен.",
            "price": 15000,
            "id":10
        },
        {
            "name": "Обеденный стол LYON",
            "description": "Просторный стол на четырех ножках. Идеален для семейных обедов.",
            "price": 72000,
            "id":11
        },
        {
            "name": "Тумбочка ALMA",
            "description": "Маленькая тумбочка на колесиках. Подойдет для офиса или домашнего кабинета.",
            "price": 22000,
            "id":12
        },
        {
            "name": "Люстра ELARA",
            "description": "Современная люстра с LED подсветкой. Добавит уют в любое помещение.",
            "price": 48000,
            "id":13
        },
        {
            "name": "Зеркало MIRA",      "description": "Большое настенное зеркало в деревянной раме. Украсит прихожую или ванную комнату.",
            "price": 29000,
            "id":14
        },
        {
            "name": "Пуф VELVET",
            "description": "Мягкий пуф в бархатной обивке. Станет украшением гостиной.",
            "price": 18000,
            "id":15
        },
        {
            "name": "Вешалка STANDY",
            "description": "Деревянная вешалка для одежды. Проста и функциональна.",
            "price": 11000,
            "id":16
        }
    ])


    let [value,setValue]=useState('')
    let [filteredArray,setFilteredArray]=useState([])


    useEffect(()=>{
        if(value===''){
            setFilteredArray(arr)
        }
        else{setFilteredArray(arr.filter((item)=> item.name===value))}


    },[value])


    return (
        <div>
            <input onChange={(event)=>{
                setValue(event.target.value)
            }} type="text" />
            <p>{value}</p>
            <ul>
                {filteredArray.map((item,index)=>{
                    return(
                        <li key={index}>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </li>
                    )


                })}
            </ul>


        </div>
    );
}


export default App;