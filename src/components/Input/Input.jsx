export function Input() {
    return (
        /* From Uiverse.io by seyed-mohsen-mousavi */
        <div className="relative">
            <input
                placeholder="Search..."
                className="input bg-primary-grey pl-12 pr-4 py-3 rounded-full w-60 transition-all focus:w-64 outline-none text-secondary-grey placeholder:text-secondary-grey"
                name="search"
                type="text"
            />
            <svg
                className="size-6 absolute top-3 left-3 text-secondary-grey"
                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.58335 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58335 1.66669C5.2111 1.66669 1.66669 5.2111 1.66669 9.58335C1.66669 13.9556 5.2111 17.5 9.58335 17.5Z" stroke="#6A6D71" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3333 18.3333L16.6666 16.6666" stroke="#6A6D71" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </div>

    )
}