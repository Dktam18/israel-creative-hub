import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaLink,
} from "react-icons/fa";

export const ShareButtons = ({ title }) => {
  const currentUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(title || "Check out this important update on Israel Creative Hub!");

  const platforms = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-500" />,
      url: `https://wa.me/?text=${text}%20${currentUrl}`,
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-blue-400" />,
      url: `https://twitter.com/intent/tweet?text=${text}&url=${currentUrl}`,
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-blue-600" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-red-500" />,
      url: `mailto:?subject=${text}&body=${currentUrl}`,
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center  py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Share this post with others:
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              {platform.icon}
              {platform.name}
            </a>
          ))}

          <button
            onClick={copyLink}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <FaLink />
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};
