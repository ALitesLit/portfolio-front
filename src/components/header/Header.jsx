import { useState, useEffect } from "react";
import $ from "jquery";

import useMediaQuery from "../../shared/useMediaQuery";
import ScrollsPy from "./components/scrolls-py/SrollsPy";
import SocialHeader from "./components/social/social";

import menu from "../../assets/svg/menu.svg";
import close from "../../assets/svg/close.svg";


import "./style.scss";


const Header = () => {
    const matches = useMediaQuery("(max-width: 760px)");


    return (
        <nav className="header">
            {
                matches ? (
                    <>
                        <div>
                            <SocialHeader />
                        </div>
                    </>
                ) : (
                    <>
                        <ScrollsPy />
                    </>
                )
            }
        </nav>
    )
}


export default Header;