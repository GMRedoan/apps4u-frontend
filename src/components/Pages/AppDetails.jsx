import React from "react";

const AppDetails = ({ app }) => {
  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg">
      {/* Top Section */}
      <div className="flex space-x-8 items-center mb-8">
        <img
          src={app.image}
          alt={`${app.title} logo`}
          className="w-40 h-40 object-contain bg-white rounded-md"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p className="text-gray-600 mb-2">
            Developed by{" "}
            <span className="text-purple-600 font-semibold">{app.companyName}</span>
          </p>
          <div className="flex space-x-12 text-center mb-4">
            <div>
              <p className="text-green-600 text-2xl font-bold">{app.downloads}</p>
              <p className="text-gray-500 text-sm">Downloads</p>
            </div>
            <div>
              <p className="text-orange-500 text-2xl font-bold">{app.ratingAvg}</p>
              <p className="text-gray-500 text-sm">Average Ratings</p>
            </div>
            <div>
              <p className="text-purple-600 text-2xl font-bold">{app.reviews.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">Total Reviews</p>
            </div>
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      <hr className="border-gray-300 mb-8" />

      {/* Ratings Bar Chart */}
      <div>
        <h2 className="font-semibold mb-4">Ratings</h2>
        <div>
          {app.ratings
            .slice()
            .reverse()
            .map(({ name, count }) => {
              const widthPercent = (count / totalRatings) * 100;
              return (
                <div key={name} className="flex items-center mb-2 space-x-3">
                  <span className="w-16 text-sm">{name}</span>
                  <div className="bg-orange-400 h-5 rounded" style={{ width: `${widthPercent}%`, minWidth: "20px" }}></div>
                  <span className="text-sm text-gray-700 ml-2">{count.toLocaleString()}</span>
                </div>
              );
            })}
        </div>
      </div>

      <hr className="border-gray-300 my-8" />

      {/* Description */}
      <div>
        <h2 className="font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
