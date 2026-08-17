import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        url,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_CAT_API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonResult = await response.json();
      setData(jsonResult);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, [url]);

  return { data, isLoading, error };
};

function App() {
  let [count, setCount] = useState(0);

  function Card({ src, count, info }) {
    return (
      <div className="w-72 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-[2px]">
        <div className="rounded-xl bg-black p-6 flex flex-col items-center">
          <img
            onLoad={() => {
              setCount((prevCount) => prevCount + 1);
            }
            }
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
  const { data, isLoading, error } = useFetch("https://api.thecatapi.com/v1/images/search?limit=200");
  const trackLoading = () => {
    if (isLoading) {
      return <div className="main text-[#7571ec] m-1 p-2 justify-self-center mt-25 text-2xl mb-20 font-semibold">Loading</div>
    }
    if (error != null) {
      return <div className="main text-[#7571ec] m-1 p-2 justify-self-center mt-25 text-2xl mb-20 font-semibold">{error}</div>
    }
    return null;
  }
  return (
    <>
      {trackLoading()}
      {!isLoading && !error && (
        <>
          <div className="main text-[#7571ec] m-1 p-2 justify-self-center mt-25 text-2xl mb-20 font-semibold">All Cards Are Here</div>
          <div className="text-[#7571ec] all-cards mx-15 flex flex-row grid grid-cols-3 gap-15 justify-between  mb-7 mt-7 p-10">
            {
              data.map((item, index) => {
                return (
                  <Card
                    key={item.id}
                    src={item.url}
                    count={index + 1}
                    info={item.id}
                  />
                );
              })
            }
          </div >
        </>
      )}
    </>
  )
}

export default App
