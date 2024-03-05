import React from "react";

const Banner = () => {
  return (
    <div className="" data-aos="fade-up">
      <div
        className="hero h-[80vh]"
        style={{
          backgroundImage:
            "url(https://st3.depositphotos.com/13152218/15594/i/450/depositphotos_155946940-stock-photo-top-view-of-digital-devices.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Learning that gets you</h1>
            <p className="mb-5">
            Skills for your present (and your future). Get started with us.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
