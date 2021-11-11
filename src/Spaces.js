import React, { useState, useEffect, useRef } from 'react';
import Data from './Data'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Spaces = () => {
    const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(true);
    
  };

  const onLeave = () => {
    setHover(false);
  };
    return (
        <section>
            <div className='container'>
            <h2>Large Menus</h2>
            <p>The HOUSE’s Large Menus components</p>
            </div>
            {Data.map((item) => {
                const {id, text, img} = item;
                return(
                    <article className='spaces-container' key={id}>
                        <div className='hover' >
                        <h1 onMouseOver={onHover} onMouseLeave={onLeave}>{text}</h1>
                        <div className='rar'>
                        <button onMouseOver={onHover} onMouseLeave={onLeave}  className={`${hover ? 'show' : 'button-hover'}`} >
                            <FaArrowRight />
                        </button>
                        <img src={img} alt=''  className={`${hover ? 'spaces-img-hover' : 'spaces-img'}`} />
                        </div>
                        </div>
                        
                    </article>
                )
            })}
        </section>
    )
}

export default Spaces
