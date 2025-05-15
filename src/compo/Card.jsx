import React from 'react'

const card = ({onClose}) => {
  return (
    <div
    className="fixed inset-0 flex items-center justify-center z-50"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // More transparent overlay
  >
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Hello</h2>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Close
      </button>
    </div>
  </div>
  )
}

export default card