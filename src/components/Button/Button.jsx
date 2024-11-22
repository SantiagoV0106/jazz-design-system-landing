/* eslint-disable react/prop-types */

export function Button({ type, children, icon }) {
    return (
        <button className={`${type === 'primary' ? 'bg-secondary-blue hover:bg-hoverd-primary active:bg-active-primary' : type === 'secondary' ? 'bg-secondary-orange hover:bg-hoverd-secondary active:bg-active-secondary' : 'bg-black hover:bg-hoverd-social'} rounded-full py-4 px-8 text-white font-bold transition-all`}>
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