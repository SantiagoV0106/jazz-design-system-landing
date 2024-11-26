/* eslint-disable react/prop-types */

export function Button({ type, children, icon, props }) {
    return (
        <button className={`${type === 'primary' ? 'bg-secondary-blue  text-white hover:bg-hoverd-primary active:bg-active-primary' : type === 'secondary' ? 'bg-secondary-orange text-white hover:bg-hoverd-secondary active:bg-active-secondary' : 'bg-white  hover:bg-hoverd-social'} ${props} rounded-full py-4 px-8 font-bold transition-all`}>
            {
                icon ?
                    <div className="flex gap-2 items-center justify-center">
                        <i>{icon}</i>
                        {children}
                    </div>
                    :
                    <>
                        {children}
                    </>
            }
        </button>
    )
}