import Image from 'next/image'

const choiseCard = [
  // {
  //   image: '/Experience.svg',
  //   text: 'Experience',
  // },
  {
    image: '/Experience.svg',
    text: 'Projects',
  },
  {
    image: '/articles.svg',
    text: 'Articles',
  },
]

const Card = ({ choises, image, text }) => {
  return (
    <>
      <div
        onClick={() => choises(text)}
        className="flex flex-col items-center border-solid border-4 mx-4 mt-4 p-4 md:p-8 border-topLineColor border-opacity-75 hover:border-opacity-100 rounded-xl shadow-xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
      >
        <div className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 relative ">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
        <p className="mb-2 mt-4 text-md md:text-xl font-bold text-white ">
          {text}
        </p>
      </div>
    </>
  )
}

function CardChoices({ choises }) {
  return (
    <section className="bg-contentColor -my-1">
      <div className="flex flex-wrap items-center justify-around px-8 py-8 md:px-20 md:py-20">
        {choiseCard.map((item) => (
          <Card choises={choises} image={item.image} text={item.text} />
        ))}
      </div>
    </section>
  )
}

export default CardChoices
