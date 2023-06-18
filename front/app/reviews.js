"use client"

import React, { Component, useRef, useState, useEffect } from "react";





function Reviews(){
    const [Review, setReview] = useState([])

useEffect(() => {
    fetch('http://localhost:8000/api/reviews/show',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData)
      })
      .then(response => response.json())
      .then(data => {
        setReview(data)
        console.log(data)
      })
      .catch(error => console.log('Failed: ' + error.message));
  


}, [])
    return(
        <div className="w-full">
        <div className="container mx-auto mt-16 grid grid-cols-1">
        <div className="text-Main text-center ">Вы о нас</div>
        <div className="text-5xl font-bold pt-4 text-center ">Отзывы</div>
      </div>
            <div className="container mx-auto p-12 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-20">
             {Review.map(rev => <div key={rev.id}>
                <div className="bg-white h-full flex flex-col text-center items-center justify-center border rounded border-Main p-4 duration-500 shadow-[5px_5px_0px_0px_rgb(288,188,68)] hover:shadow-[-5px_5px_0px_0px_rgb(288,188,68)]">
                    <div className="text-xl font-bold ">{rev.author}</div>
                    <div className="text-sm mt-3 text-slate-800">{rev.text}</div>
                </div>
                    </div>)}
            </div>
        </div>
    )

}

export default Reviews;