import { BlueApronLogo } from "../Icons/Icons";

export function Footer() {
    return (
        <footer className="bg-primary-blue flex flex-col h-[462px]">
            <i className="m-auto">
                <BlueApronLogo />
            </i>
            <div className="flex justify-between mb-16 mx-[78px] max-md:flex-col max-md:gap-8">
                <p className="font-light text-white cursor-default">
                    © 2024 Blue Apron UI Kit. All rights reserved
                </p>
                <p className="font-light text-white cursor-default">
                    Terms and condition | Private policy.
                </p>
            </div>
        </footer>
    )
}