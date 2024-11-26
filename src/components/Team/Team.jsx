import { BehanceIcon, LinkedinIcon } from "../Icons/Icons"

/* eslint-disable react/prop-types */
export function Team({ name, bgColor, img, tags, links }) {
    return (
        <article className={`${bgColor} flex items-end gap-4 pl-0 pb-0 p-5 hover:scale-[1.02] transition-all rounded-3xl`}>
            <img className="w-[208px] max-sm:w-[160px] rounded-bl-3xl" src={img} alt={name} />
            <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col gap-2">
                <p className='text-white font-black text-4xl cursor-default'>{name}</p>
                <div className="flex flex-wrap gap-2">
                {
                    tags.map(({ id, tag }) => {
                        return (
                            <span key={id} className={`${tag === 'UX Designer' && bgColor !== 'bg-primary-orange' ? 'bg-primary-orange' : tag === 'UI Designer' && bgColor !== 'bg-primary-orange' ? 'bg-primary-mediumblue' : 'bg-primary-darkblue'} text-white text-[12px] rounded-full py-1 px-4 mr-3`}>
                                {tag}
                            </span>
                        )
                    })
                }
                </div>
            </div>
            <div className="flex items-center gap-2">
                {
                    links.map(({ id, link }) => {
                        return (
                            <a 
                            className={`flex bg-white ${id === 'linkedin' ? 'p-2' : 'py-[10px] px-2'} rounded-full`}
                            key={id} 
                            href={link}
                             target="_blank" >
                                {
                                id === 'linkedin' ?
                                 <LinkedinIcon 
                                 color={bgColor === 'bg-primary-blue' || bgColor === 'bg-primary-lightblue' ? '#FF712A' : '#003ACA'} /> 
                                 : 
                                 <BehanceIcon color={bgColor === 'bg-primary-blue' || bgColor === 'bg-primary-lightblue' ? '#FF712A' : '#003ACA'}  />}
                                 </a>
                        )
                    })
                }
            </div>
            </div>

        </article>
    )
}