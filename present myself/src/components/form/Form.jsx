import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <>
      <div>
        <label htmlFor="name">enter your name: </label>
        <input className='bg-cyan-400 mx-6.5 mb-5 p-2 w-50 rounded-2xl text-gray-950' id='name' type="text" />
        <label htmlFor="country">country: </label>
        <input className='bg-cyan-400 w-30 rounded-2xl p-2 ml-8 text-gray-950' id='country' type="text" />
      </div>
      
      <div>
        <label htmlFor="email">enter your email: </label>
        <input className='bg-cyan-400 ml-6.5 mb-5 p-2 w-110 rounded-2xl text-gray-950' id='email' type="email" />
      </div>

      <div>
        <label htmlFor="phone">enter your phone: </label>
        <input className='bg-cyan-400 ml-5 mb-5 p-2 w-110 rounded-2xl text-gray-950' id='phone' type="number" />
      </div>

      <div className='flex'>
        <label htmlFor="subject">enter subject: </label>
        <textarea className='bg-cyan-400 w-70 p-3 ml-12.5 rounded-2xl text-gray-950' id="subject"></textarea>
        <div className='pt-15'>
          <button className='bg-cyan-400 px-10 py-2 ml-8 rounded-xl text-gray-950 cursor-pointer hover:bg-cyan-200 hover:font-bold hover:px-9.5'>submit</button>
        </div>
      </div>
    </>
    )
  }
}

export default Form
