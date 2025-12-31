import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFrom = () => {
  const [formData , setFormData] = useState({
    from_name : "",
    from_email : "",
    message : ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_5h6kyca",
      "template_in0mv41",
      formData,
      "yDtof5XJqcfSyX1ao"
    )
    .then(
      () => {
        toast.success("Message send Successfully!")
        setFormData({from_name : "", from_email : "", message : ""});
        setLoading(false)
      },
      (error) => {
        toast.error("Failed to send message! Try Again")
        setLoading(false)

      }
    )
  }
  return (
    <form className='flex flex-col justify-center gap-2 p-4 border rounded-xl w-[98%]' onSubmit={handleSubmit}>
      <div>
        <input
        className='w-full px-2 py-4 border rounded-md border-gray-500 text-gray-300 
        bg-gray-950' 
        name='from_name'
        value={formData.from_name}
        onChange={handleChange}
        required
        placeholder='Your Full Name'
        type="text" 
        />
      </div>
      <div>
        <input 
        className='w-full px-2 py-4 border rounded-md border-gray-500 text-gray-300 
        bg-gray-950'
        name='from_email' 
        type='email'
        value={formData.from_email}
        onChange={handleChange}
        required
        placeholder='Your Email Addresss'
        />
      </div>
      <div>
        <textarea
        className='w-full px-2 py-4 border rounded-md border-gray-500 text-gray-300 
        bg-gray-950'
        placeholder='Tell me about your idea or project'
        name='message'
        value={formData.message}
        onChange={handleChange}
        required
        cols="50" rows="10">
        </textarea>
      </div>
      <div className='mx-auto mt-5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-300 '>
        <button type='submit' disabled={loading}>
          {loading ? "Seding..." : "Send Message"}
        </button>
      </div>
      
    </form>
  )
}

export default ContactFrom