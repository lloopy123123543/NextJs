
import { CARDS } from './constants/const_cards.js'

export default function Home() {
  return (
    <div>
    <div class="container mx-auto">
      <div class="w-full bg-slate-600 p-10 space-y-3">
        <div class="text-Main text-xl flex items-center ">lineSubtitle</div>
        <div class="text-white text-8xl font-bold">TITLE</div>
        <div class="text-white lg:w-1/2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates error ipsum
          quas dolorum est minima, praesentium omnis cupiditate pariatur rerum.</div>
        <button class="px-10 py-2 bg-Main">Смотреть</button>
      </div>
    </div>
    <div class="container mx-auto flex justify-center">
      <div class="w-5/6 bg-white grid grid-cols-1 lg:grid-cols-3 shadow-md  mt--1">
        <div class="bg-Main p-10 space-y-2">
          <div class="text-gray-500 font-mono">BigTitle</div>
          <div class="text-3xl font-bold ">Title</div>
          <div class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsum laudantium eius rem
            temporibus, quia quisquam, obcaecati </div>
          <button class="bg-gray-600 text-white px-5 py-2">WorkFlow</button>
        </div>
        <div>
          <div class="flex justify-center items-center h-1/2 p-10 min-h-16 md:border-0 md:border-r-2 md:border-b-2">

            <div>
              <div class="text-5xl font-bold">Title</div>
              <div class="text-gray-500">Subtitle</div>
            </div>
          </div>
          <div class="flex justify-center items-center h-1/2 p-10  min-h-16 md:border-r-2">
            <div>
              <div class="text-5xl font-bold">Title</div>
              <div class="text-gray-500">Subtitle</div>
            </div>
          </div>

        </div>
        <div>
          <div class="flex justify-center items-center h-1/2 p-10   min-h-16 md:border-b-2">

            <div>
              <div class="text-5xl font-bold">Title</div>
              <div class="text-gray-500">Subtitle</div>
            </div>
          </div>
          <div class="flex justify-center items-center h-1/2 p-10  min-h-16">
            <div>
              <div class="text-5xl font-bold">Title</div>
              <div class="text-gray-500">Subtitle</div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="container mx-auto my-10 grid grid-cols-1">
      <div class="text-Main text-center ">Sub Title</div>
      <div class="text-5xl font-bold pt-4 text-center ">Title</div>
    </div>
    {CARDS && CARDS.map(card => <div key={card.id}></div>)}
  </div>
  )
}
