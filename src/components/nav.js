import React from 'react';
import './nav.css'
import { MdLocalShipping } from "react-icons/md";function Nav() {
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
        </div>
        </div> 
    </>
  );
}

export default Nav;
