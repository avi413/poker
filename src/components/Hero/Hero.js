import React from 'react';
import Video from '../../media/PokerHP-MTP-PC-Compressed.mp4';

function Hero() {
  return (
    <div className='hero'>
      <video className='hero_desktop'  src={Video} muted autoPlay loop></video>
      <video className='hero_mobile' src={Video} muted autoPlay loop></video>
    </div>
  );
}

export default Hero;
