import Image from 'next/image'

function CardContent({
  type,
  title,
  img,
  languageUsed,
  description,
  btnCodeUrl,
  btnLiveDemoUrl,
}) {
  return (
    <div className="relative z-10 flex flex-col m-5 bg-contentCard p-10 rounded-lg border-transparent border-2 hover:border-green-500 transform transition duration-700 ease-out">
      {/* Title */}
      <h2 className="mb-8 text-center text-2xl font-bold text-white">
        {title}
      </h2>

      {/* Image */}
      <Image height={200} width={200} objectFit="contain" src={img} alt="" />

      <div className="my-4">
        {/* Language Used */}
        <p className="text-green-500 font-medium text-center text-md line-clamp-2 my-2">
          {languageUsed}
        </p>

        {/* Description */}
        <p className="text-white font-normale text-center text-sm line-clamp-2 my-2">
          {description}
        </p>
      </div>

      {btnLiveDemoUrl && (
        <a
          className="text-center text-gray-900 text-lg font-semibold mb-4 mt-auto p-2 bg-buttonColor2  rounded-lg cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
          target="_blank"
          href={btnLiveDemoUrl}
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      )}
      <a
        className="text-center text-gray-900 text-lg font-semibold mb-4 mt-auto p-2 bg-buttonColor  rounded-lg cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
        target="_blank"
        href={btnCodeUrl}
        rel="noopener noreferrer"
      >
        {type === 'Projects' ? 'Code Github' : 'View Article'}
      </a>
    </div>
  )
}

export default CardContent
