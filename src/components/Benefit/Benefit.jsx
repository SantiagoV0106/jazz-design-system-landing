/* eslint-disable react/prop-types */

export function Benefit({ icon, title, desc }) {
    return (
        <article className="pt-[60px] pb-[43px] pl-[34px] pr-[55px] bg-white rounded-3xl text-text-primary">
            <i>{icon}</i>
            <div className="mt-5">
                <h3 className="font-extrabold"> {title} </h3>
                <p> {desc} </p>
            </div>
        </article>
    )
}