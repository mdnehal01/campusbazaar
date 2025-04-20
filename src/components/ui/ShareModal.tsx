'use client'
import { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaCopy, FaTimes } from 'react-icons/fa';

const ShareModal = ({ url, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">Share now!</h2>

        <div className="flex justify-around items-center text-2xl mb-6">
          <a href={`https://wa.me/?text=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500 hover:scale-110 transition" />
          </a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:scale-110 transition" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:scale-110 transition" />
          </a>
        </div>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <input
            type="text"
            readOnly
            value={url}
            className="flex-grow outline-none text-sm text-gray-600"
          />
          <button onClick={handleCopy} className="ml-3 text-gray-500 hover:text-blue-500">
            <FaCopy />
          </button>
        </div>
        {copied && <p className="text-green-500 text-sm mt-2 text-center">Link copied!</p>}
      </div>
    </div>
  );
};

export default ShareModal;
