/* eslint-disable react/prop-types */

export function Value({
  bgColor,
  value,
  desc,
  icon,
  name,
  gridClass,
  bgImage,
  image
}) {
  return (
    <article
      className={`
      flex 
      flex-col 
      gap-8 
      ${bgColor} 
      ${gridClass} 
      ${bgColor === 'bg-primary-skyblue' ? 'text-text-secondary' : 'text-white'} 
      ${icon || image ? 'p-0' : 'py-[50px] px-[44px] '}
       hover:scale-[1.02] transition-all 
      ${name === 'jazzA' ?
          'justify-center items-center'
          :
          name === 'Value-food-image' ?
            'items-end justify-end'
            :
            name === 'value-mockup' ?
              'justify-end items-center'
              :
              ''
        } rounded-3xl min-h-[306px]`}

      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >

      {
        icon ?
          <i>{icon}</i>
          :
          image ?
            <img className="w-[288px] max-lg:w-[240px] rounded-br-3xl" src={image} alt={name} />
            :
            <>
              <h3 className="font-black text-2xl">{value}</h3>
              <p className="text-[20px]">{desc}</p>
            </>

      }
    </article>
  )
}


