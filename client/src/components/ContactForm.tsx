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
    <section className="w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md w-full max-w-screen-sm md:w-1/2 lg:w-1/3 mx-auto p-8 rounded-md shadow-lg md:mt-0 mt-8 px-4 sm:px-8">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
                <label
                className={`block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2 ${
                    isFocused(nameRef) ? 'text-red-500' : ''
                }`}
                htmlFor="name"
                >
                Name
                </label>
            <input
              ref={nameRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full px-3">
            <label
                className={`block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2 ${
                    isFocused(emailRef) ? 'text-red-500' : ''
                }`}
                htmlFor="email"
                >
                Email
            </label>
            <input
              ref={emailRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full px-3">
            <label
                className={`block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2 ${
                    isFocused(messageRef) ? 'text-red-500' : ''
                }`}
                htmlFor="message"
                >
                Message
            </label>
            <textarea
              ref={messageRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="w-full px-3 mt-4">
          <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;