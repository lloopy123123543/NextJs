"use client";
import React, { Component, useRef, useState, useEffect } from "react";

function Calculator() {
  let type = useRef(1);
  let s_stvorka1 = useRef();
  let s_stvorka2 = useRef();
  let s_stvorka3 = useRef();
  let s_camera = useRef();
  let height = useRef();
  let width = useRef();
  const [summ, setSumm] = useState(0)
  let inputCallBack = useRef();



  function SendCalculate(){
    calculate()
    
    let FormData = {
      stvorka1: s_stvorka1.current.value,
      stvorka2: s_stvorka2.current.value,
      stvorka3: s_stvorka3.current.value,
      height: height.current.value,
      weight: width.current.value,
      steklopacket: s_camera.current.value,
      callback: inputCallBack.current.value,
      cost: summ        

    }
    fetch('http://localhost:8000/api/orders/add',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      alert("отправлено")
    })
    .catch(error => console.log('Failed: ' + error.message));



    

  }

  function typeCheck(e) {
    let window = document.getElementById("window")

    let last = type.current;
    type.current = e.target.id.split("_")[1];
    console.log(type.current);

    if (last != type.current) {

      document.getElementById(type.current).style.backgroundColor = "#FABC34";
      document.getElementById(last).style.backgroundColor = "#F1F5F9";
    }
    if (type.current == 1){
      window.src = 'https://www.veka.ru/api-site/calculator/picture?sash_types[0]=3&window_type_id=1'

    }
    if (type.current == 2){
      window.src = 'https://www.veka.ru/api-site/calculator/picture?sash_types[0]=3&sash_types[1]=3&window_type_id=2'
    }
    if(type.current == 3){
      window.src = 'https://www.veka.ru/api-site/calculator/picture?sash_types[0]=3&sash_types[1]=3&sash_types[2]=3&window_type_id=3'
    }
    if(type.current == 4){
      window.src = 'https://www.veka.ru/api-site/calculator/picture?sash_types[0]=3&sash_types[1]=3&sash_types[2]=3&sash_types[3]=5&window_type_id=4'
    }
    console.log('typeCheck')




  }

  function selectorCheck(e){
    console.log("selectorCheck");
    // if(s_stvorka2.current.value > 1){
    //   type.current = 2
    //   console.log("sus")
    //   typeCheck()
    // }
  }

  function calculate(){


    let calculate_stvorka1 = 400;
    let calculate_stvorka2 = 400;
    let calculate_stvorka3 = 400;
    let stvorka2 = document.getElementById("stvorka2");
    let stvorka3 = document.getElementById("stvorka3");
    let sizes = (height.current.value + width.current.value)

    const calculateCameraMap = {
      1: 0.00002,
      2: 0.00005,
      3: 0.00008
    }
    let calculate_camera = calculateCameraMap[s_camera.current.value]

    setSumm(Math.round((calculate_stvorka1 + sizes) * calculate_camera));

    if(stvorka2.value > 1){
      setSumm(Math.round((calculate_stvorka1 + calculate_stvorka2 + sizes) * calculate_camera));
    }
    if(stvorka3.value > 1){
      setSumm(Math.round((calculate_stvorka1 + calculate_stvorka2 + calculate_stvorka3 + sizes) * calculate_camera));
    }
  }
  return (
    
    <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2">
      <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">

        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>



            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
      <div className="p-10">
        <img id="window" src="https://www.veka.ru/api-site/calculator/picture?sash_types[0]=3&window_type_id=1"></img>
      </div>
      <div>
        <div className="mt-5 p-4 bg-slate-100">
          <div className="pb-3 text-xl font-semibold ">Тип окна</div>
          <div className="w-full flex items-center justify-between">
            <div
              id="1"
              onClick={typeCheck}
              className="w-14 h-14 bg-Main cursor-pointer ease-in-out duration-200 rounded "
            >
              <img
                id="stvorka_1"
                src="https://www.veka.ru/_next/static/media/type-window-icon-1.55cacb92.svg"
              ></img>
            </div>
            <div
              id="2"
              onClick={typeCheck}
              className="w-14 h-14 hover:bg-Main cursor-pointer ease-in-out duration-200 rounded"
            >
              <img
                id="stvorka_2"
                src="https://www.veka.ru/_next/static/media/type-window-icon-2.69c072ca.svg"
              ></img>
            </div>
            <div
              id="3"
              onClick={typeCheck}
              className="w-14 h-14 hover:bg-Main cursor-pointer ease-in-out duration-200 rounded"
            >
              <img
                id="stvorka_3"
                src="https://www.veka.ru/_next/static/media/type-window-icon-3.0e7a78f6.svg"
              ></img>
            </div>
            <div
              id="4"
              onClick={typeCheck}
              className="w-14 h-14 hover:bg-Main cursor-pointer ease-in-out duration-200 rounded"
            >
              <img
                id="stvorka_4"
                src="https://www.veka.ru/_next/static/media/type-window-icon-4.d8638553.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="mt-5 p-4 bg-slate-100">
          <div className="pb-3 text-xl font-semibold ">Створки</div>
          <div className="w-full flex items-center justify-between">
            <div>
              <label
                for="stvorka1"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Створка 1
              </label>
              <select
              onInput={selectorCheck}
              ref={s_stvorka1}
                id="stvorka1"
                class="mt=10 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="2">Поворотное</option>
                <option value="3">Поворотно-откидное</option>
                <option value="4">Глухое</option>
                <option value="5">Откидное</option>
              </select>
            </div>
            <div>
              <label
                for="stvorka2"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Створка 2
              </label>
              <select
                onInput={selectorCheck}
                ref={s_stvorka2}
                id="stvorka2"
                class="mt=10
                 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">Нет</option>
                <option value="2">Поворотное</option>
                <option value="3">Поворотно-откидное</option>
                <option value="4">Глухое</option>
                <option value="5">Откидное</option>
              </select>
            </div>
            <div>
              <label
                for="stvorka3"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Створка 3
              </label>
              <select
                onInput={selectorCheck}
                ref={s_stvorka3}
                id="stvorka3"
                class="mt=10 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">Нет</option>
                <option value="2">Поворотное</option>
                <option value="3">Поворотно-откидное</option>
                <option value="4">Глухое</option>
                <option value="5">Откидное</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5 p-4 bg-slate-100">
          <div className="pb-3 text-xl font-semibold ">Параметры окна</div>
          <div className="w-full grid grid-cols-2 gap-5">
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900">
                Ширина, мм
              </div>
              <input type="number" defaultValue='800' ref={width} className="p-2 border border-black w-full"></input>
            </div>
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900">
                Высота, мм
              </div>
              <input type="number" defaultValue='800' ref={height} className="p-2 border border-black w-full"></input>
            </div>

            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900">
                Стеклопакет
              </div>
              <select
              // onInput={camera}
              ref={s_camera}
                id="camera"
                class="mt=10 p-2 border border-black w-full "
              >
                <option value="1">Однокамерный</option>
                <option value="2">Двукамерный</option>
                <option value="3">Шумозащитный</option>
              </select>
            </div>
          </div>
        </div>
        <div>Примерная стоимость: {summ} рублей</div>
       <div>
       <button type="button" onClick={calculate} class="text-white bg-Main hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Посчитать</button>
       <div className="grid grid-cols-1 space-y-2">
        <div className="grid grid-cols-1">
          <label>Номер телефона или почта для обратной связи</label>
          <input ref={inputCallBack} placeholder="Номер телефона или почта" className="border border-Main rounded px-1 py-1 w-3/4"></input>
        </div>
        <button type="button" onClick={SendCalculate} class="text-white bg-Main hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Заказать</button>
        </div>
       </div>
      </div>
      
    </div>
  );
}

export default Calculator;
