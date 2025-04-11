import React, { useState, useEffect } from 'react'
import { FaTimes, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'

export const Whatsapptelegram = () => {
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsappPopup(true)
    }, 10000) // Show after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {showWhatsappPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowWhatsappPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Join Our Communities!</h3>
              <p className="mb-6">
                Get instant updates on JAMB news, exam tips, and more by joining our educational platforms.
              </p>

              <div className="flex flex-col gap-4">
                {/* WhatsApp Button */}
                <a
                  href="https://whatsapp.com/channel/0029VajOfp62UPBOfXpold3b/1556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded inline-flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Join WhatsApp Channel
                </a>

                {/* Telegram Button */}
                <a
                  href="https://t.me/icreativeh" // Replace with your actual Telegram link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded inline-flex items-center justify-center gap-2"
                >
                  <FaTelegramPlane /> Join Telegram Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
