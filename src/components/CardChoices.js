import Image from 'next/image'

function CardChoices({ choises }) {
  return (
    <section className="bg-contentColor">
      <div className="flex items-center justify-around px-8 py-8 md:px-20 md:py-20">
        {/* Project */}
        <div
          onClick={() => choises('Projects')}
          className="flex flex-col items-center border-solid border-4 mx-4 p-4 md:p-8 border-topLineColor border-opacity-75 hover:border-opacity-100 rounded-xl  shadow-xl  cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
        >
          <div className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 relative ">
            <Image src="/project.svg" layout="fill" objectFit="contain" />
          </div>
          <p className="mb-2 mt-4 text-md md:text-xl font-bold text-white ">
            Projects
          </p>
        </div>

        {/* Articles */}
        <div
          onClick={() => choises('Articles')}
          className="flex flex-col items-center border-solid border-4 mx-4 p-4 md:p-8 border-topLineColor border-opacity-75 hover:border-opacity-100 rounded-xl shadow-xl  cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
        >
          <div className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 relative">
            <Image src="/articles.svg" layout="fill" objectFit="contain" />
          </div>
          <p className="mb-2 mt-4 text-md md:text-xl font-bold text-white">
            Articles
          </p>
        </div>
      </div>
    </section>
  )
}

export default CardChoices
