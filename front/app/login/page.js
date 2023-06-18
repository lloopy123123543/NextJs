"use client";
import React, { Component, useRef, useState, useEffect } from "react";
import Link from 'next/link'

const page = () => {

  let login_in = useRef();
  let password_in = useRef();

  function login() {
    let FormData = {
      login: login_in.current.value,
      password: password_in.current.value,
    };

    fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((error) => console.log("Failed: " + error.message));
  }

  return (
    <div className="w-screen bg-orange h-screen bg-Main flex items-center justify-center">
      <div className="mx-auto bg-white rounded-lg px-20 py-20 flex items-center justify-center flex-col">
        <div className="text-2xl font-bold pb-10">Авторизация</div>
        <div className="mb-6 w-64">
          <label
            for="login"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Логин
          </label>
          <input
            ref={login_in}
            type="text"
            id="input_login"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div className="mb-6 w-64">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Пароль
          </label>
          <input
            ref={password_in}
            type="text"
            id="input_password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <Link href="/admin">
        <button
        
        onClick={login}
        className="bg-Main px-4 py-3 rounded-lg hover:bg-slate-600 hover:text-white duration-200"
      >
        Войти
      </button></Link>
      </div>
    </div>
  );
}

export default page;
