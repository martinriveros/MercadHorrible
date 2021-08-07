import React from 'react'

export const Greetings = (props) => {

  const {text1, text2, children} = props

    return (
    <>
    <section id='headingContainer'>
      {children}
      <h1 className='heading'>{text1}</h1>
      <h6 className='subtitle'>{text2}</h6>
      <h6 className='subtitle'>{children}</h6>
    </section>
    </>
  );
};