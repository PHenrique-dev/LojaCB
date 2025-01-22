import React from 'react';
import './nav.css'
import { MdLocalShipping } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
const Nav= () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
       <div className='header'>
        <div className='top_header'>
            <div className='icon'>
            <MdLocalShipping/>
            </div>
            <div className='info'>
                <p>Frete grátis em compras a partir de R$299,90</p>
            </div>
            <div className='mid-header'>
              <div className='logo'>
                <img src={`${process.env.PUBLIC_URL}/image/435762163_2822109891280408_7450111231118052636_n-removebg-preview.png`}  alt='logo'></img>
              </div>
              <div className='search_box'>
              <input
              type="text"
              value=''
              placeholder="O que você deseja?"></input>
              <button><BiSearchAlt2/></button>
              </div>
              <div className='user'>
                <div className='icon'>
                <FiLogIn/>
                </div>
                <div className='btn'>
                  <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
              </div>
            </div>
        </div>
        </div> 
    </>
  );
}

export default Nav;
