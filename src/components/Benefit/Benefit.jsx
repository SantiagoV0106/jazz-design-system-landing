/* eslint-disable react/prop-types */

export function Benefit({ icon, title, desc, type }) {
    return (
        
            
            type === 'normal' ?
            <article className="pt-[60px] pb-[43px] pl-[34px] pr-[55px] bg-white rounded-3xl text-text-primary">
                <i>{icon}</i>
                <div className="mt-5">
                    <h3 className="font-extrabold"> {title} </h3>
                    <p> {desc} </p>
                </div>
            </article> : 
            <article className="bg-white rounded-3xl flex items-center justify-center  text-text-primary px-12">
                <h3 className="font-extrabold text-primary-mediumblue text-center">{title}</h3>
            </article>
        
    )
}