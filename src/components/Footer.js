import {
  FaFacebookF as FB,
  FaTwitter as FT,
  FaLinkedin as FL,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="py-8 bg-footerBg relative">
      <div className="flex justify-center items-center">
        <a
          className="no-underline cursor-pointer text-current"
          href="https://www.facebook.com/leonardosimone.digiorgio"
          target="_blank"
          aria-label="Facebook"
        >
          <div className="bg-footerIcon text-white cursor-pointer h-16 w-16 overflow-hidden relative text-center flex justify-center items-center mx-4 text-md rounded-lg border-transparent border-2 hover:border-facebook transform transition duration-400 ease-out">
            <FB className="text-facebook text-3xl" />
          </div>
        </a>
        <a
          className="no-underline cursor-pointer text-current"
          href="https://twitter.com/simdigiorgio"
          target="_blank"
          aria-label="Twitter"
        >
          <div className="bg-footerIcon text-white cursor-pointer h-16 w-16 overflow-hidden relative text-center flex justify-center items-center mx-4 text-md rounded-lg border-transparent border-2 hover:border-twitter transform transition duration-400 ease-out">
            <FT className="text-twitter text-3xl" />
          </div>
        </a>
        <a
          className="no-underline cursor-pointer text-current"
          href="https://it.linkedin.com/in/leonardo-simone-digiorgio-091630112"
          target="_blank"
          aria-label="Linkedin"
        >
          <div className="bg-footerIcon text-white cursor-pointer h-16 w-16 overflow-hidden relative text-center flex justify-center items-center mx-4 text-md rounded-lg border-transparent border-2 hover:border-linkedin transform transition duration-400 ease-out">
            <FL className="text-linkedin text-3xl" />
          </div>
        </a>
      </div>

      {/* Copyright */}
      <div className="flex justify-center items-center">
        <div className="text-md font-semibold mt-8 mr-3 opacity-60 text-white">
          DIGIORGIO LEONARDO
        </div>
        <span className="mt-8 font-sans text-topLineColor">
          ©{new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
