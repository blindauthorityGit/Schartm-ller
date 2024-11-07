import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa/index.js";
import { RiFacebookFill } from "react-icons/ri/index.js";

const Footer = (props) => {
    const footerRef = useRef(null);
    const [distanceToBottom, setDistanceToBottom] = useState(0);

    useEffect(() => {
        setDistanceToBottom(window.innerHeight - footerRef.current.clientHeight);
        console.log(window.innerHeight, document.body.scrollHeight, footerRef.current.offsetTop);
    }, [distanceToBottom]);

    return (
        <>
            <div
                ref={footerRef}
                className={`footer md:w-[50%] h-12 mb-12 pl-6 pr-6 sm:pr-0 sm:pl-12 w-full col-span-12 md:col-span-6 md:ml-[314px] mt-20  font-[300] text-text  ${props.colSpan}`}
            >
                <hr />
                <div className="flex justify-between mt-4">
                    <div className="left">
                        2022 <span className="text-xs">by eva maria schartmüller</span>
                    </div>
                    <div className="right flex text-[#949494]">
                        <a className="mr-4" href={props.insta}>
                            <FaInstagram></FaInstagram>
                        </a>
                        {/* <a className="mr-4" href={props.twitter}>
                            <FaTwitter></FaTwitter>
                        </a> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
