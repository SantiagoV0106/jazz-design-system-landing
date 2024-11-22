/* eslint-disable react/prop-types */

export function Value({
  bgColor,
  value,
  desc,
  icon,
  name,
  gridClass
}) {
  return (
    <article className={`flex flex-col gap-8 ${bgColor} ${gridClass} ${bgColor === 'bg-primary-skyblue' ? 'text-text-secondary' : 'text-white'} ${icon ? 'p-0' : 'py-[50px] px-[44px]'} ${
      name === 'saxo' ? 
      'justify-center' 
      : 
      name === 'jazzA' ? 
       'justify-center items-center'
       
       : 
       name === 'piano' ? 
       'items-center'
       :
       name === 'violin' ?
       'justify-center items-center'
       :
       ''
      } rounded-3xl min-h-[306px]`}>

      {
        icon ?
          <i>{icon}</i>
          :
          <>
            <h3 className="font-black text-2xl">{value}</h3>
            <p className="text-[20px]">{desc}</p>
          </>

      }
    </article>
  )
}


