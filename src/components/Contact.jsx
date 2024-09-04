import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef(null); // Reference for the form element
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 } // Adjust threshold as needed
    );

    const currentRef = formRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p9k1qak", // Replace with your service ID
        "template_8jb4kes", // Replace with your template ID
        formRef.current,
        "-FN2-CYVU3U4h9O1n" // Replace with your public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed:", error.text);
          alert("Failed to send email: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`max-w-1200px min-h-screen pt-20 pb-20 flex items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }overflow-x-hidden`}
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-8">
        <div className="max-w-[800px] w-full">
          <header className="text-center pb-8">
            <h2 className="text-4xl md:text-6xl inline border-b-4 text-black border-gray-300 uppercase">
              Get in touch
            </h2>
          </header>
          <div className="text-gray-700 mx-4">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-4 w-full my-6">
                <div className="flex flex-col relative">
                  <label htmlFor="to_name" className="uppercase">
                    Name
                  </label>
                  <input
                    id="to_name"
                    type="text"
                    name="to_name"
                    className="border-2 rounded-lg p-3 flex border-gray-700 bg-gray-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="user_email" className="uppercase">
                    Email
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    className="border-2 rounded-lg p-3 flex border-gray-700 bg-gray-200"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col relative my-6">
                <label htmlFor="message" className="uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="border-2 rounded-lg p-3 flex border-gray-700 bg-gray-200"
                  placeholder="Your Message"
                  required
                />
              </div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Send"
                  className="bg-gray-900 text-gray-200 hover:bg-gray-600 font-bold w-full p-3 rounded-lg active:scale-90 transition-all duration-300 cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
