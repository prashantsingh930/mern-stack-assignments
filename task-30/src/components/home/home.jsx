import React from "react";

const Home = () => {
  const posts = [
    {
      title: "Lorem",
      description: "Sed mattis nunc",
    },
    {
      title: "Ipsum",
      description: "Praes tinci sed",
    },
    {
      title: "Dorum",
      description: "Lutricies congue",
    },
    {
      title: "Mingsum",
      description: "Lorem ipsum dipsum",
    },
  ];

  const tags = [
    "Travel",
    "New York",
    "London",
    "IKEA",
    "NORWAY",
    "DIY",
    "Ideas",
    "Baby",
    "Family",
    "News",
    "Clothing",
    "Shopping",
    "Sports",
    "Games",
  ];

  return (
    <div className='min-h-screen bg-[#f1f1f1] px-3 py-5 sm:px-6 lg:px-8'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3'>
        <main className='space-y-6 lg:col-span-2'>
          <article className='overflow-hidden border border-gray-300 bg-white shadow-md'>
            <div className='relative'>
              <img
                className='h-[300px] w-full object-cover sm:h-[400px] lg:h-[460px]'
                src='https://static.vecteezy.com/system/resources/thumbnails/056/799/766/small/mont-blanc-reflecting-in-the-cheserys-lake-in-the-french-alps-photo.jpg'
                alt='Blog'
              />
            </div>

            <div className='p-5 sm:p-7'>
              <h1 className='mb-2 text-xl font-bold uppercase text-gray-900 sm:text-2xl'>
                Title Heading
              </h1>

              <p className='mb-6 text-sm text-gray-600'>
                Title description, April 7, 2014
              </p>

              <p className='mb-6 text-sm leading-6 text-gray-700 sm:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                rem, rerum odit ratione, vero pariatur quibusdam velit, quasi
                reprehenderit blanditiis sed libero nihil debitis aliquam
                deleniti quae a eaque et! Aperiam voluptatum, ipsum eaque
                voluptates in minus consequuntur odit ipsa soluta libero
                recusandae voluptatem qui perferendis eos inventore ducimus
                odio?
              </p>

              <div className='flex items-center justify-between'>
                <button className='border border-gray-300 bg-white px-5 py-2 text-xs font-semibold uppercase text-gray-700 transition hover:bg-gray-100'>
                  Read More »
                </button>

                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <span>Comments</span>

                  <span className='flex h-6 min-w-6 items-center justify-center bg-black px-1 text-xs text-white'>
                    0
                  </span>
                </div>
              </div>
            </div>
          </article>
        </main>

        <aside className='space-y-6'>
          <section className='overflow-hidden border border-gray-300 bg-white shadow-md'>
            <img
              className='h-56 w-full object-cover'
              src='https://images.unsplash.com/photo-1559311648-addd6af95dd4?w=600&auto=format&fit=crop&q=60'
              alt='About me'
            />

            <div className='p-5'>
              <h2 className='mb-3 text-xl font-bold text-gray-900'>My Name</h2>

              <p className='text-sm leading-6 text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                tempora sed reiciendis minima placeat a eaque eos dicta mollitia
                illo. Consequatur magni nisi enim doloremque, dolorum ipsam?
                Aspernatur, impedit commodi!
              </p>
            </div>
          </section>

          <section className='overflow-hidden border border-gray-300 bg-white shadow-md'>
            <h2 className='border-b border-gray-200 px-5 py-4 text-lg font-semibold text-gray-800'>
              Popular Posts
            </h2>

            <div>
              {posts.map((post, index) => (
                <div
                  key={index}
                  className='flex gap-4 border-b border-gray-200 px-5 py-4 transition hover:bg-gray-50'
                >
                  <img
                    className='h-12 w-16 shrink-0 object-cover'
                    src='https://images.pexels.com/photos/3791583/pexels-photo-3791583.jpeg'
                    alt={post.title}
                  />

                  <div>
                    <h3 className='text-sm font-semibold text-gray-800'>
                      {post.title}
                    </h3>

                    <p className='text-xs text-gray-500'>{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className='overflow-hidden border border-gray-300 bg-white shadow-md'>
            <h2 className='border-b border-gray-200 px-5 py-4 text-lg font-semibold text-gray-800'>
              Tags
            </h2>

            <div className='flex flex-wrap gap-2 p-5'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='cursor-pointer bg-black px-2 py-1 text-xs text-white transition hover:bg-gray-700'
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Home;
