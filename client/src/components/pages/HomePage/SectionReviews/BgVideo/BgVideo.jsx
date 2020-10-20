import React from "react";

function BgVideo({ source }) {
  return (
    <>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={source} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
    </>
  );
}

export default BgVideo;
