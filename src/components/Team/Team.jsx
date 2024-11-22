/* eslint-disable react/prop-types */
export function Team({ name, bgColor, img, align }) {
    return (
        <article className={`${bgColor} ${align} flex flex-col justify-end items-center max-w-[242px] h-[390px] rounded-[450px]`}>
            <p className='text-white font-black text-xl cursor-default'>{name}</p>
            <img src={img} alt="ross" />
        </article>
    )
}