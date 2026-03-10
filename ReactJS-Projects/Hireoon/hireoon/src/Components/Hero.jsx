import React from "react";

function Hero() {
  const categories = [
    { title: "Software Development", icon: "bi-code-slash" },
    { title: "Web Development", icon: "bi-globe" },
    { title: "Mobile Development", icon: "bi-phone" },
    { title: "UI/ UX", icon: "bi-palette" },
    { title: "Digital Marketing", icon: "bi-instagram" },
    { title: "Business & MBA", icon: "bi-briefcase" },
    { title: "Analytics", icon: "bi-bar-chart" },
    { title: "Finance", icon: "bi-cash" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-480 mx-auto px-8">
        {/* Heading */}
        <h1 className="text-[#111111] text-[52px] text-center font-semibold leading-tight lg:mb-6">
          Infinite opportunities. One starting point.
        </h1>
        <p className="text-[#333333] text-[20px] font-medium text-center mb-12">
          Supporting your move from education to employment.
        </p>

        {/* Search Bar */}
        <div className="max-w-225 mx-auto p-4 border border-[#e7e7e7] rounded-lg shadow-md flex flex-col md:flex-row items-center gap-3 bg-white">
          {/* Job Search */}
          <div className="flex items-center flex-1 md:border-r border-[#d1d1d1] pr-3">
            <i className="bi bi-search text-[#6d6d6d] text-xl mr-3"></i>
            <input
              type="text"
              placeholder="Search by role, skill, or company"
              className="flex-1 py-2 text-lg outline-none"
            />
          </div>

          {/* Location */}
          <div className="flex items-center flex-1">
            <i className="bi bi-geo-alt text-[#6d6d6d] text-xl mr-3"></i>
            <input
              type="text"
              placeholder="City or Remote"
              className="flex-1 py-2 text-lg outline-none"
            />
          </div>

          {/* Button */}
          <div>
            <button className="bg-[#0843c5] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#0d3d9b] transition-all duration-200">
              Find Roles
            </button>
          </div>
        </div>

        {/* Popular Jobs */}
        <div className="mt-16 flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Popular job categories
          </h2>

          <div className="max-w-300 grid grid-cols-1 sm:grid-cols-2 mx-auto lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className="flex items-center p-6 border border-[#e7e7e7] rounded-sm shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.05),0px_4px_6px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.15),0px_4px_6px_-2px_rgba(0,0,0,0.05)] transition-all duration-200 ease-in-out"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#edf7ff] text-[#0d3d9b] mr-4">
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <p className="text-lg font-medium">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
