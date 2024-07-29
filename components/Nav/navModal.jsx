import React, { useState } from "react";
import { CgClose } from "react-icons/cg/index.js";

const NavModal = (props) => {
    const [aniEnd, setAniEnd] = useState(false);

    return (
        <div
            className={`navModal w-full h-screen bg-white fixed z-20 ${props.klasse}`}
            onAnimationEnd={() => {
                setAniEnd(true);
            }}
        >
            <div className={`${aniEnd ? "fade-in" : "hidden"}`}>
                <CgClose
                    className="text-black text-3xl absolute z-30 right-6 top-6 cursor-pointer"
                    onClick={props.onClick}
                ></CgClose>
            </div>
            {props.children}
        </div>
    );
};

export default NavModal;
