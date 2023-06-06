
import CARDS from "./constants/const_cards.js";
import Image from "next/image.js";
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
          
          <img src={card.img1}></img>
          <div className="flex gap-8 m-5 w-3/4">
        <img className="w-12 h-12 " src={card.img2}></img>
            <div>
            <div className="text-Main font-bold text-3xl">{card.title}</div>
            <div>{card.subtitle}</div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
