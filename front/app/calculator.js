"use client";
import React, { Component } from "react";

function Calculator() {
  return (
    <div className="container mx-auto w-full grid grid-cols-2">
      <div>window image</div>
      <div>
        <div className="mt-5 p-4 bg-slate-100">
          <div className="pb-3 text-xl font-semibold ">Тип окна</div>
          <div className="w-full flex items-center justify-between">
            <div className="w-14 h-14">
              <img src="./images/window.png"></img>
            </div>
            <div className="w-14 h-14">
              <img src="./images/window.png"></img>
            </div>
            <div className="w-14 h-14">
              <img src="./images/window.png"></img>
            </div>
            <div className="w-14 h-14">
              <img src="./images/window.png"></img>
            </div>
            <div className="w-14 h-14">
              <img src="./images/window.png"></img>
            </div>
            <div className="w-14 h-14">
              <img src="./images/window.png"></img>
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
                id="stvorka1"
                class="mt=10 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">Поворотное</option>
                <option value="2">Поворотно-откидное</option>
                <option value="3">Глухое</option>
                <option value="4">Откидное</option>
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
                id="stvorka2"
                class="mt=10 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="0">Нет</option>
                <option value="1">Поворотное</option>
                <option value="2">Поворотно-откидное</option>
                <option value="3">Глухое</option>
                <option value="4">Откидное</option>
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
                id="stvorka3"
                class="mt=10 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="0">Нет</option>
                <option value="1">Поворотное</option>
                <option value="2">Поворотно-откидное</option>
                <option value="3">Глухое</option>
                <option value="4">Откидное</option>
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
                id="stvorka2"
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
