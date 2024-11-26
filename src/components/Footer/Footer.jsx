import { BlueApronLogo } from "../Icons/Icons";

export function Footer() {
    return (
        <footer className="bg-primary-blue flex flex-col  h-[462px]">
            <i className="m-auto">
                <BlueApronLogo props="w-[120px]" />
            </i>

            
            <span className="flex justify-center mb-12">
                <p className="text-white w-[650px] text-center">This design system is created sotely for academic purposes by students of Universidad ICESI, with no intention of delivering any profit or monetary gain. It is and exploratory exercise for a user interface design course and is not an official product for Blue Apron.</p>
            </span>
            
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