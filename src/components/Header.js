import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Header = () => {
    const element = useRef(null)
useEffect(() => {
  const typed = new Typed(element.current, {
    strings: [ `I am a creator `,'I make things'],
    typeSpeed: 40,
    cursorChar:'_'
  });

  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
}, []);
    return (
        <div className='header'>
            <h1 className='heading' ><span style={{textTransform:'none',fontSize:'0.8em'}} >Hi, I am </span>Gorakshnath...</h1>
            <em><span ref={element} className='subtitle'  style={{textTransform:'uppercase',fontSize:'0.5em',marginTop:'5px'}}  >I make things</span></em>
        </div>
    )
}

export default Header
