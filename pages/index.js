import React, { useState } from 'react'

import Content from '../src/components/Content'
import CardChoices from '../src/components/CardChoices'
import Presentation from '../src/components/Presentation'

// import ReactGA from 'react-ga'
import { dataProjects, dataArticles } from '../src/components/data'

import { Link } from 'react-scroll'
import Footer from '../src/components/Footer'

export default function Home() {
  const [showDataProjects, setShowDataProjects] = useState(false)
  const [showDataArticles, setShowDataArticles] = useState(false)
  const [type, setType] = useState('')

  const choises = (choise) => {
    if (choise === 'Projects') {
      if (!!showDataProjects) {
        setShowDataProjects(false)
        setType('')
      } else {
        setShowDataArticles(false)
        setType('Projects')
        setShowDataProjects(true)
      }
    }
    if (choise === 'Articles') {
      if (!!showDataArticles) {
        setShowDataArticles(false)
        setType('')
      } else {
        setShowDataProjects(false)
        setType('Articles')
        setShowDataArticles(true)
      }
    }
  }

  return (
    <>
      <div className="overflow-hidden">
        <Presentation />
        <Link to="content" spy={true} smooth={true}>
          <CardChoices choises={choises} />
        </Link>
        <div id="content">
          <div className="relative z-10 mx-auto bg-contentColorAlternative pt-20">
            {/* Svg Arrow */}
            <div className="absolute z-0 top-0 left-0 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="h-96 w-full fill-current text-contentColor"
              >
                <rect x="1200" height="3.6"></rect>
                <rect height="3.6"></rect>
                <path
                  d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>

            {/* Projects */}
            {showDataProjects && <Content data={dataProjects} type={type} />}

            {/* Articles */}
            {showDataArticles && <Content data={dataArticles} type={type} />}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
