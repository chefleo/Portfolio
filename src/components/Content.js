import Image from 'next/image'
import CardContent from './CardContent'

function Content({ data, type }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 pb-8">
      {data.map(
        ({
          id,
          title,
          img,
          languageUsed,
          description,
          btnCodeUrl,
          btnLiveDemoUrl,
        }) => (
          <CardContent
            key={id}
            type={type}
            title={title}
            img={img}
            languageUsed={languageUsed}
            description={description}
            btnCodeUrl={btnCodeUrl}
            btnLiveDemoUrl={btnLiveDemoUrl}
          />
        )
      )}
    </div>
  )
}

export default Content
