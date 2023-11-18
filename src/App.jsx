//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

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
    const [value, setValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [filteredArray, setFilteredArray] = useState([...arr]);
    const [priceValue, setPriceValue] = useState('');
    const [objIndex, setObjIndex] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setFilteredArray(arr.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase())));
    }, [value, arr, selectValue]);

    const handleDelete = (itemId) => {
        const newArr = arr.filter((item) => item.id !== itemId);
        setArr(newArr);
        setFilteredArray(newArr);
    };

    const handleEdit = (item) => {
        const index = arr.indexOf(item);
        setObjIndex(index);
        setPriceValue(item.price);
        setShow(true);
    };

    return (
        <div>
            <select
                onChange={(event) => {
                    setSelectValue(event.target.value);
                    if (event.target.value === 'INCREASE') {
                        setFilteredArray([...filteredArray].sort((a, b) => a.price - b.price));
                    } else if (event.target.value === 'DECREASE') {
                        setFilteredArray([...filteredArray].sort((a, b) => b.price - a.price));
                    }
                }}
            >
                <option value="INCREASE">INCREASE</option>
                <option value="DECREASE">DECREASE</option>
            </select>
            <input
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                type="text"
            />
            <p>{value}</p>
            <ul>
                {filteredArray.map((item) => (
                    <li key={item.id}>
                        <input defaultValue={item.name} disabled={true} />
                        <input defaultValue={item.description} disabled={true} />
                        <input defaultValue={item.price} disabled={true} />
                        <button onClick={() => handleDelete(item.id)}>DELETE</button>
                        <button onClick={() => handleEdit(item)}>EDIT</button>
                    </li>
                ))}
            </ul>
            {show && (
                <div id="modal">
                    <div>
                        <input
                            defaultValue={priceValue}
                            onChange={(event) => {
                                setPriceValue(event.target.value);
                            }}
                            type="text"
                        />
                        <button
                            onClick={() => {
                                const newArr = [...arr];
                                newArr[objIndex] = { ...newArr[objIndex], price: parseInt(priceValue) };
                                setArr(newArr);
                                setFilteredArray(newArr);
                                setShow(false);
                            }}
                        >
                            EDIT
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
