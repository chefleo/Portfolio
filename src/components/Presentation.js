import Image from 'next/image'

function Presentation() {
  return (
    <div className="relative w-full h-screen bg-contentColorAlternative flex items-center justify-center">
      <div className="flex flex-col items-center z-10 ">
        <div className=" mb-10 h-56 w-56 sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-80 lg:w-80 relative">
          <Image
            className="rounded-full"
            src="/presentation.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex flex-col items-center ml-4">
          <h3 className="w-96 text-center mb-2 mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            DIGIORGIO LEONARDO SIMONE
          </h3>
          <p className="mb-2 mt-3 text-sm sm:text-md md:text-lg lg:text-xl font-medium text-white">
            Web3 Developer
          </p>
        </div>
      </div>

      <div className="absolute z-0 bottom-0 left-0 w-full transform rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-96 w-full fill-current text-contentColor"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Presentation
