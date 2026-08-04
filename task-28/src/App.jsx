import { useState } from 'react'


function App() {

  function Card({ src, count, info }) {
    return (
      <div className="w-72 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-[2px]">
        <div className="rounded-xl bg-black p-6 flex flex-col items-center">
          <img
            src={src}
            className="w-44 h-40 object-cover"
            alt={`Card ${count}`}
          />

          <h4 className="mt-5 text-xl font-semibold text-violet-300">
            Card {count}
          </h4>

          <p className="mt-3 text-center text-violet-400">
            {info}
          </p>
        </div>
      </div>
    );
  }


  const card = [{
    id: 1,
    src: "https://blobcdn.same.energy/b/23/9e/239e1f0f8162fd03b92bb86fe8376d5f30b03ae7",
    info: "This is Card 1 Description"
  },
  {
    id: 2,
    src: "https://blobcdn.same.energy/a/00/87/008779a797e0ce93bfa31f2ae052c30697c08de4",
    info: "This is Card 2 Description"

  },
  {
    id: 3,
    src: "https://blobcdn.same.energy/a/b7/1f/b71fb37752a4b8f2ca1d11cf2ab160cae9c8ef6e",
    info: "This is Card 3 Description"
  },
  {
    id: 4,
    src: "https://blobcdn.same.energy/a/35/4c/354c1e1af9abeec082aee882a09cb5a3d9cda19c",
    info: "This is Card 4 Description"
  },
  {
    id: 5,
    src: "https://blobcdn.same.energy/d/90/02/900284cfe5081599d7cd19717c209c27448756c4",
    info: "This is Card 5 Description"

  }, {
    id: 6,
    src: "https://blobcdn.same.energy/d/90/02/900284cfe5081599d7cd19717c209c27448756c4",
    info: "This is Card 6 Description"
  }, {
    id: 7,
    src: "https://blobcdn.same.energy/b/7c/db/7cdb65599e2619b7e82eca4019cce9b03a60b4e1",
    info: "This is Card 7 Description"
  }, {
    id: 8,
    src: "https://blobcdn.same.energy/b/51/34/513470c808803a839e43205c1d30ac54d6a9c31f",
    info: "This is Card 8 Description"
  }, {
    id: 9,
    src: "https://blobcdn.same.energy/b/76/91/7691ee5af0d36a5308943a8af219d87b89ce501f",
    info: "This is Card 9 Description"
  },
  {
    id: 10,
    src: "https://blobcdn.same.energy/b/ff/07/ff078e31572792c911b1010a6ef6253fcf449154",
    info: "This is Card 10 Description"
  },
  ]

  return (
    <>
      <div className="main text-[#7571ec] m-1 p-2 justify-self-center mt-25 text-2xl mb-20 font-semibold">All Cards Are Here</div>

      <div className="text-[#7571ec] all-cards mx-15 flex flex-row grid grid-cols-3 gap-15 justify-between  mb-7 mt-7 p-10">
        {
          card.map((item, index) => (
            <Card key={item.id} src={item.src}
              info={item.info}
              count={index + 1}></Card>
          )
          )
        }
      </div >
    </>
  )
}

export default App
