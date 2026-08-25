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
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='mx-auto grid max-w-7xl grid-cols-3 gap-6'>
        <main className='col-span-2'>
          <article className='bg-white'>
            <img
              className='h-96 w-full'
              src='https://static.vecteezy.com/system/resources/thumbnails/056/799/766/small/mont-blanc-reflecting-in-the-cheserys-lake-in-the-french-alps-photo.jpg'
              alt='Blog'
            />
            <div className='p-6'>
              <h1 className='mb-2 text-2xl font-bold'>Title Heading</h1>

              <p className='mb-5 text-sm text-gray-600'>
                Title description, April 17, 2026
              </p>

              <p className='mb-6 text-sm text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                rem, rerum odit ratione, vero pariatur quibusdam velit, quasi
                reprehenderit blanditiis sed libero nihil debitis aliquam
                deleniti quae a eaque et.
              </p>

              <div className='flex items-center justify-between'>
                <button className='border border-gray-300 px-5 py-2 text-xs font-semibold'>
                  Read More »
                </button>

                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <span>Comments</span>
                  <span className='bg-black px-2 py-1 text-xs text-white'>
                    0
                  </span>
                </div>
              </div>
            </div>
          </article>
        </main>

        <aside className='col-span-1'>
          <section className='mb-6 bg-white shadow'>
            <img
              className='h-56 w-full'
              src='https://images.unsplash.com/photo-1559311648-addd6af95dd4?w=600&auto=format&fit=crop&q=60'
              alt='About me'
            />

            <div className='p-5'>
              <h2 className='mb-3 text-xl font-bold'>My Name</h2>

              <p className='text-sm leading-6 text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                tempora sed reiciendis minima placeat a eaque eos dicta mollitia
                illo. Consequatur magni nisi enim doloremque.
              </p>
            </div>
          </section>

          {/* Popular Posts */}
          <section className='mb-6 bg-white shadow'>
            <h2 className='border-b p-4 text-lg font-semibold'>
              Popular Posts
            </h2>

            {posts.map((post) => (
              <div key={post.title} className='flex gap-4 border-b p-4 '>
                <img
                  className='h-12 w-16 object-cover'
                  src='https://images.pexels.com/photos/3791583/pexels-photo-3791583.jpeg'
                  alt={post.title}
                />

                <div>
                  <h3 className='text-sm font-semibold'>{post.title}</h3>

                  <p className='text-xs text-gray-500'>{post.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Tags */}
          <section className='bg-white shadow'>
            <h2 className='border-b p-4 text-lg font-semibold'>Tags</h2>

            <div className='flex flex-wrap gap-2 p-5'>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className='cursor-pointer bg-black px-2 py-1 text-xs text-white hover:bg-gray-700'
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
