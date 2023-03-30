import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="video">
        <span>
        কীভাবে আমাদের প্রোডাক্ট থেকে বেস্ট আউটপুট পাবেন তা শিখতে এখনই এই ভিডিওটি দেখে নিন 👇🏼
        </span>
        <button onClick={toggleModal}>Watch video</button>
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="video-content">
            <ReactPlayer width='100%' url="https://www.youtube.com/watch?v=ncU43_Di1IM" />
          </div>
          <button onClick={toggleModal} className="close-modal">
            Close
          </button>
        </div>
      )}
    </>
  );
}
