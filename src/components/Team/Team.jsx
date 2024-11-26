/* eslint-disable react/prop-types */
export function Team({ name, bgColor, img, align }) {
    return (
        <article className={`${bgColor} ${align} flex hover:scale-[1.02] transition-all rounded-3xl`}>
            <img className="w-[208px] rounded-bl-3xl" src={img} alt={name} />
            <p className='text-white font-black text-xl cursor-default'>{name}</p>
        </article>
    )
}