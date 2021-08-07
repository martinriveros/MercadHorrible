import React from 'react'

export const Greetings = (props) => {

  const {text1, text2, children} = props
  console.log(text1)
  console.log(text2)
  console.log(children)
    return (
    <>
    <section id='headingContainer'>
      <h1 className='heading'>{text1}</h1>
      <h6 className='subtitle'>{text2}</h6>
      <h6 className='subtitle'>{children}</h6>
    </section>
    </>
  );
};