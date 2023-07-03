import React, { useState } from 'react';

export default function Modal({ isOpen, onClose, onAddNote}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddNote = () => {
      const noteData = {
        title: title,
        description: description
      };
      onAddNote(noteData);
      setTitle("")
      setDescription("")
    };

    return(
        <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* Content of the modal */}
                <h4 className="text-lg font-medium mb-4">Add Notes</h4>
                <div className="flex flex-col gap-2">
                <input
                    type="text"
                    className="p-2"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                    type="text"
                    className="p-2"
                    placeholder="Create new notes..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-end">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 border-yellow-500 text-yellow-500 text-base font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleAddNote}
                >
                  Add Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    )
}




