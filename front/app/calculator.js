"use client";
import React, { Component, useRef } from "react";

function Calculator() {
  let type = useRef(1);
  let s_stvorka1 = useRef();
  let s_stvorka2 = useRef();
  let s_stvorka3 = useRef();
  let s_camera = useRef();


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






  return (
    <div className="container mx-auto w-full grid grid-cols-2">
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
                class="mt=10 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              <input className="p-2 border border-black w-full"></input>
            </div>
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900">
                Высота, мм
              </div>
              <input className="p-2 border border-black w-full"></input>
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
      </div>
    </div>
  );
}

export default Calculator;
