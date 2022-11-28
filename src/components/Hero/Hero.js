import React from 'react';
import Video from '../../media/PokerHP-MTP-PC-Compressed.mp4';

function Hero() {
  return (
    <div className='hero'>
      <video id='pokerVideoCOM' src={Video} muted autoPlay loop></video>
    </div>
  );
}

export default Hero;
