"use client"
// Components/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+917972351030'; // Replace with your WhatsApp phone number
  const message = 'Hello! I have a question.'; // Optional: Prefilled message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed bottom-28 right-8 z-50  rounded-full p-4 shadow-lg hover:bg-green-500 transition-colors cursor-pointer"
      onClick={handleClick}
    >
      <img
        src="/images/social.png" // Path to your WhatsApp icon
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </div>
  );
};

export default WhatsAppButton;