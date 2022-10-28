import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className="py-8 Contact flex flex-col md:flex md:flex-row h-screen gap-2">
      <h1 className="md:text-[8em] text-[1rem] text-right text-blue font-extrabold md:order-1">
        للتواصل معنا
      </h1>
      <form>
        <div>
        <label>Email : </label>
         <input  placeholder="email" type="text" className="form-control shadow-md"/>
        </div>
        <div>
         <label>Suject : </label>
         <input placeholder="subject" type="text" className="form-control shadow-md"/>
        </div>
        <div>
         <label>Message : </label>
         <textarea className="shadow-md" placeholder="message"></textarea>
        </div>
        <button className='bg-green w-[100px] text-white py-2 shadow-md'>Send</button>
      </form>
      
      
    </div>
  )
}

export default Contact
