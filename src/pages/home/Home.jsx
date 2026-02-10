import React from "react";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Keep yourself update from others!
            </h1>
            <p className="py-6">
              Keep yourself updated always with activity tracker. and be more
              hardworking person and make your time usefull for you and others.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
