import React from "react";
import '../../../../style/nav/navPage1.css';
import { TbSearch } from 'react-icons/tb';
import { BsHandbag } from 'react-icons/bs';

const NavPage1 = () => {
    return (
        <>
            <div id="nav-container">
                <div className="nav-itensContainer">
                    <ul>
                        <li><a id="l-shop" href="../">Lifters Shop</a></li>
                        <li><a className="i-nav" href="/#">Shop</a></li>
                        <li><a className="i-nav" href="/#">Stories</a></li>
                        <li><a className="i-nav" href="/#">About</a></li>
                        <li>
                            <div className="nav-itensContainer">
                                <ul>
                                    <li className="i-search"><TbSearch /></li>
                                    <li className="i-search"><input id="search" type="search" placeholder="Seach" name="" /></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav-itensContainer">
                    <ul>
                        <li><a href="/#"><BsHandbag /></a></li>
                        <li><a className="i-nav" href="/#">Login</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavPage1