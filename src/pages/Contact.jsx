import React from 'react'
import Hero from '../Component/contact/Hero'
import Form from '../Component/contact/Form'
import SalesCalendar from '../Component/contact/SalesCalendar'

const Contact = () => {
  return (
    <div className='bg-[#e3edf4]'>
        <Hero/>
        <Form/>
        <SalesCalendar/>
    </div>
  )
}

export default Contact