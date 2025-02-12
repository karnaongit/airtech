"use client"
import React, { useState ,useEffect} from 'react';

const Contact = () => {
   const [showBallBg, setShowBallBg] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const helloSection = document.getElementById("helloSection");
        if (!helloSection) return;
  
        const helloTop = helloSection.getBoundingClientRect().top;
  
        // Change background when "hello" is at 70% of the viewport
        if (helloTop < window.innerHeight * 1) {
          setShowBallBg(true);
        } else {
          setShowBallBg(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    questions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
  };
  
  return (
    <>
    <div className="min-h-screen w-full relative overflow-hidden py-10">
    <div
        className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/ball(1).jpg')] bg-cover bg-center transition-opacity duration-500 ${
          showBallBg ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      <div className="relative text-8xl h-96 flex justify-center items-center text-center text-white">
        Contact US
      </div>
      {/* Gooey Background Animation */}
      <div className="gooey-contact absolute inset-0 overflow-hidden">
        {/* Circle 1 */}
        {/* <div
          className="gooey-circle circle-1"
          style={{
            height: '30vw',
            width: '50vw',

            position: 'absolute',
            borderRadius: '50%',
            background: 'linear-gradient(to top right, #01d0f4ef, #0baaff)',
            top: '20%',
            left: '5%',
            filter: 'blur(11px)',
          }}
        ></div> */}

        {/* Circle 2 */}
        {/* <div
          className="gooey-circle circle-2"
          style={{
            height: '20vw',
            width: '40vw',
            position: 'absolute',
            borderRadius: '50%',
            background: 'linear-gradient(to bottom left, #red, #red)',
            top: '20%',
            right: '10%',
            filter: 'blur(15px)',
          }}
        ></div> */}

        {/* Circle 3 */}
        {/* <div
          className="gooey-circle circle-3"
          style={{
            height: '25vw',
            width: '35vw',
            position: 'absolute',
            borderRadius: '50%',
            background: 'linear-gradient(to top left, #a18cd1, #fbc2eb)',
            bottom: '10%',
            left: '30%',
            filter: 'blur(20px)',
          }}
        ></div> */}
      </div>
      

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between min-h-screen p-8 max-w-7xl mx-auto ">
        {/* Left Section: Keep in Touch */}
        <div className="w-1/2 pr-8 p-9 -mx-3 bg-white rounded-2xl">
          <h1 className="text-4xl font-bold text-black mb-6">Keep in Touch</h1>
          <p className="text-red text-lg mb-4">
            We value your trust and are committed to providing the best service for your business.
            Whether you have questions, need support, or want to explore new opportunities, we're
            here to help.
          </p>
          <p className="text-red-600 text-lg">
            Trust is the foundation of our business. Let's build something great together!
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us your Requirements</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="questions" className="block text-gray-700 font-medium mb-2">
                Requirements
              </label>
              <textarea
                id="questions"
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[150px]"
              />
            </div>

            {/* Submit Button with Animation */}
            <div id="button-animation" className="inline-block w-full">
              <button
                type="submit"
                className="w-full text-[#000000bb] no-underline relative z-10 transition-colors duration-400 hover:text-white px-4 py-2 rounded-lg"
              >
                Submit
                <span className="absolute h-full w-full bg-black left-0 bottom-[-100%] rounded-full transition-all duration-400 ease-in-out"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/ball-Photoroom.jpg')] bg-cover bg-center transition-opacity duration-200 ${
          showBallBg ? "opacity-100" : "opacity-0"
        }`}
      >
      </div>

      <div
        className="relative text-8xl h-96 flex justify-center items-center text-center text"
        id="helloSection"
      >
        We will reach out to you soon
      </div>
      <div className="min-h-screen w-full p-8 ">
      {/* Instant Contact Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-x-10 ">
        <h1 className="text-4xl font-bold text-black mb-6">Instant Contact</h1>
        <div className="bg-white w-100% rounded-lg shadow-lg p-6 inline-block">
          <h1 className='flex'>
            Phone Number:  
          <a
            href="tel:+917972351030"
            className="block text-lg text-blue-500 hover:text-blue-700 mb-4"
          >
             +91 7972351030
          </a>
          </h1>
          <h1 className='flex'>
            Whatsapp Number:  
          <a
            href="https://wa.me/917972351030"
            className="block text-lg text-blue-500 hover:text-blue-700 mb-4"
          >
             +91 7972351030
          </a>
          </h1>
          <h1 className='flex '>
            Email:
          <a
            href="mailto:contact@airtechsailon.com"
            className="block px-3 text-lg text-blue-500 hover:text-blue-700"
          >
             contact@airtechsailon.com
          </a>
          </h1>
          
        </div>
      </div>

      {/* Map and Address Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 ">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map on the Left */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120063.15670872669!2d75.41528580206732!3d19.88333464861224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba551ce49f4e3%3A0xe4cb507fd6e14b64!2sfive%20star%20MIDC!5e0!3m2!1sen!2sin!4v1738526307134!5m2!1sen!2sin"           
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Address on the Right */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Address</h2>
              <p className="text-lg text-gray-700">
              Plot No. D-112,  
                <br />
                Five Star MIDC Shendra, AURANGABAD, 
                <br />
                MAHARASHTRA, 431007, INDIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </>
    
  );
};

export default Contact;