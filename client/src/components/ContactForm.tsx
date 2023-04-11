import React, { useState, useRef } from 'react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formState);
    // Handle form submission here
  };

  const isFocused = (ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>) => {
    if (typeof window !== 'undefined') {
      return ref.current === document.activeElement;
    }
    return false;
  };

  return (
    <section id="contact" className="w-screen h-screen bg-black bg-opacity-75 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label htmlFor="name" className={`mb-2 ${isFocused(nameRef) ? 'text-red-500' : ''}`}>Name</label>
            <input type="text" id="name" name="name" ref={nameRef} value={formState.name} onChange={handleInputChange} className="border border-gray-400 p-2 rounded-md text-black" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className={`mb-2 ${isFocused(emailRef) ? 'text-red-500' : ''}`}>Email</label>
            <input type="email" id="email" name="email" ref={emailRef} value={formState.email} onChange={handleInputChange} className="border border-gray-400 p-2 rounded-md text-black" required />
          </div>
          <div className="flex flex-col col-span-full">
            <label htmlFor="message" className={`mb-2 ${isFocused(messageRef) ? 'text-red-500' : ''}`}>Message</label>
            <textarea id="message" name="message" rows={4} ref={messageRef} value={formState.message} onChange={handleInputChange} className="border border-gray-400 p-2 rounded-md text-black" required></textarea>
          </div>
          <button type="submit" className="bg-red-500 text-white font-bold py-2 px-4 rounded-md col-span-full">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;