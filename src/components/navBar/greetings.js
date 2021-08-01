import React from 'react'

export const Greetings = ({text1, text2}) => {
  
  return (
    <>
    <section id='headingContainer'>
      <h1 className='heading'>{text1}</h1>
      <h6 className='subtitle'>{text2}</h6>
    </section>
    </>
  );
};