"use client"
import React, { Component, useRef, useState, useEffect } from "react";

const page = () => {
    const [Order, setOrder] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:8000/api/orders/check',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
          })
          .then(response => response.json())
          .then(data => {
            setOrder(data)

          })
          .catch(error => console.log('Failed: ' + error.message));


    }, [])

    
    const delete_order =(e) => {
        let block = document.getElementById(e.target.id)
        block.style.display = 'none';

        fetch(`http://localhost:8000/api/orders/delete/${e.target.id}`,{
            method: 'delete',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
          })
          .then(response => response.json())
          .then(data => {
          })
          .catch(error => console.log('Failed: ' + error.message));

    }


    return(
        <div className="container mt-10 w-full mx-auto flex  gap-10">
            {!!Order && Order.map((order, index) => <div key={index} id={order.id} className="bg-Main rounded-lg p-8">
           <div className="text-xl font-bold">№{order.id}</div>
                <div className="flex gap-1">Створка 1: <p className="font-bold">{order.stvorka1}</p></div>
                <div className="flex gap-1">Створка 2: <p className="font-bold">{order.stvorka2}</p></div>
                <div className="flex gap-1">Створка 3: <p className="font-bold">{order.stvorka3}</p></div>
                <div className="flex gap-1">Высота: <p className="font-bold">{order.height}</p></div>
                <div className="flex gap-1">Ширина: <p className="font-bold">{order.weight}</p></div>
                <div className="flex gap-1">Стеклопакет: <p className="font-bold">{order.steklopacket}</p></div>
                <div className="flex gap-1">Обратная связь: <p className="font-bold">{order.callback}</p></div>
                <div className="flex gap-1">Примерная стоимость: <p className="font-bold">{order.cost}</p></div>
               <button onClick={delete_order} id = {order.id} className="w-full bg-white mt-3 rounded-xl">Удалить заказ</button>
            </div>)}
        </div>
    )

}

export default page;