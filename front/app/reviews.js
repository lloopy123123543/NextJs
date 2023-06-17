"use client"

import React, { Component, useRef, useState, useEffect } from "react";


function Reviews(){
    return(
        <div className="w-full">
        <div className="container mx-auto mt-16 grid grid-cols-1">
        <div className="text-Main text-center ">Вы о нас</div>
        <div className="text-5xl font-bold pt-4 text-center ">Отзывы</div>
      </div>
            <div className="container mx-auto p-12 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-20">
                <div className="bg-white border rounded border-Main p-4 duration-500 shadow-[5px_5px_0px_0px_rgb(288,188,68)] hover:shadow-[-5px_5px_0px_0px_rgb(288,188,68)]">
                    <div className="text-xl font-bold ">Author</div>
                    <div className="text-sm text-slate-800">Sgfjdklsfj slkdfjk k jfdk jklskdfjl slksjdf lskjdfdsf</div>
                </div>
                <div className="bg-white border rounded border-Main p-4 duration-500 shadow-[5px_5px_0px_0px_rgb(288,188,68)] hover:shadow-[-5px_5px_0px_0px_rgb(288,188,68)]">
                    <div className="text-xl font-bold ">Author</div>
                    <div className="text-sm text-slate-800">Sgfjdklsfj slkdfjk k jfdk jklskdfjl slksjdf lskjdfdsf</div>
                </div>
                <div className="bg-white border rounded border-Main p-4 duration-500 shadow-[5px_5px_0px_0px_rgb(288,188,68)] hover:shadow-[-5px_5px_0px_0px_rgb(288,188,68)]">
                    <div className="text-xl font-bold ">Author</div>
                    <div className="text-sm text-slate-800">Sgfjdklsfj slkdfjk k jfdk jklskdfjl slksjdf lskjdfdsf</div>
                </div>
            </div>
        </div>
    )

}

export default Reviews;