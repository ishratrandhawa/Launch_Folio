import React from "react";

const SocialMedia = ({ MediaData, value, onChange, readOnly }) => {
  const platforms = ["GitHub", "Instagram", "LinkedIn"];

  return (
    <div className="my-4 border border-gray-300 rounded-md p-4">
      {platforms.map((platform) => (
        <div key={platform} className="mb-4">
          <label htmlFor={platform} className="text-sm font-semibold block mb-1 text-gray-800">
            {MediaData[platform][1]}
          </label>
          <input
            type={MediaData[platform][0]}
            className="w-full border border-gray-300 py-2 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            id={platform}
            name={platform}
            onChange={onChange}
            value={value[platform]}
            placeholder={`Enter ${MediaData[platform][1]}`}
            readOnly={readOnly}
          />
          {MediaData[platform][2] && (
            <small className="text-gray-500 text-xs">{MediaData[platform][2]}</small>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
