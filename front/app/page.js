
import CARDS from "./constants/const_cards.js";
import Image from "next/image.js";
import Сalculator from "./calculator.js"
export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="w-full bg-slate-600 p-10 space-y-3">
          <div className="text-Main text-xl flex items-center ">lineSubtitle</div>
          <div className="text-white text-8xl font-bold">TITLE</div>
          <div className="text-white lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            error ipsum quas dolorum est minima, praesentium omnis cupiditate
            pariatur rerum.
          </div>
          <button className="px-10 py-2 bg-Main">Смотреть</button>
        </div>
      </div>
      <div className="container mx-auto flex justify-center">
        <div className="w-5/6 bg-white grid grid-cols-1 lg:grid-cols-3 shadow-md  mt--1">
          <div className="bg-Main p-10 space-y-2">
            <div className="text-gray-500 font-mono">BigTitle</div>
            <div className="text-3xl font-bold ">Title</div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              ipsum laudantium eius rem temporibus, quia quisquam, obcaecati{" "}
            </div>
            <button className="bg-gray-600 text-white px-5 py-2">WorkFlow</button>
          </div>
          <div>
            <div className="flex justify-center items-center h-1/2 p-10 min-h-16 md:border-0 md:border-r-2 md:border-b-2">
              <div>
                <div className="text-5xl font-bold">Title</div>
                <div className="text-gray-500">Subtitle</div>
              </div>
            </div>
            <div className="flex justify-center items-center h-1/2 p-10  min-h-16 md:border-r-2">
              <div>
                <div className="text-5xl font-bold">Title</div>
                <div className="text-gray-500">Subtitle</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center h-1/2 p-10   min-h-16 md:border-b-2">
              <div>
                <div className="text-5xl font-bold">Title</div>
                <div className="text-gray-500">Subtitle</div>
              </div>
            </div>
            <div className="flex justify-center items-center h-1/2 p-10  min-h-16">
              <div>
                <div className="text-5xl font-bold">Title</div>
                <div className="text-gray-500">Subtitle</div>law
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 grid grid-cols-1">
        <div className="text-Main text-center ">Sub Title</div>
        <div className="text-5xl font-bold pt-4 text-center ">Title</div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {CARDS.map((card) => (
          <div className="m-10" key={card.id}>
          
          <img className="w-full h-60 hidden sm:block" src={card.img1}></img>
          <div className="grid grid-cols-1 space-y-10 sm:space-y-0 sm:grid-cols-4 pt-4">
            <div className="h-full flex justify-center items-center"><img className="w-20 h-20" src={card.img2}></img></div>
            <div className="col-span-3 text-center sm:text-start">
            <div className="text-Main font-bold text-3xl">{card.title}</div>
            <div className="mt-3">{card.subtitle}</div>
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className="w-full mx-auto bg-slate-700 sm:bg-gradient-to-r sm:from-slate-700 from-50% sm:to-Main to-50% p-10 ">
        <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 sm:space-x-10 space-y-10">
        <div className="w-full sm:p-0 sm:pr-10 flex flex-col gap-5 sm:bg-none  ">
          <div className="text-Main">свяжитесь с нами</div>
          <div className="text-xl sm:text-3xl text-white font-bold">Вы можете задать вопросы нажав на кнопку "Связаться"</div>
          <div className=" text-white">Мы вам расскажем подробнее о нашей компании, о наших преимуществах и почему вы должны работать именно с нами</div>
          <div><button className="px-5 py-3 bg-Main text-black font-semibold text-sm">Связаться</button></div>
        </div>
        <div className="text-Main bg-none sm:text-black sm:bg-Main">
          <div className=" text-sm sm:text-xl sm:p-0          ">Наша компания славится своими классынми пельменями, только пельмени могут сделать что то на столько хорошее, чтобы ты сошел сума от их вкуса, я очень люблю хорошо покушать, ведь это самое главное в этом деле</div>

        </div>
        </div>

      </div>
      <Сalculator></Сalculator>
    </div>
  );
}
