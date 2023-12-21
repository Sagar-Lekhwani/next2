/* eslint-disable react/jsx-key */
import React from "react";

export const Card = ({ data }) => {

  return (
    <div className="w-full h-max p-4 flex flex-wrap">
      {data? (data?.map((g) => {
        return (
          <div className="flex flex-col">
            <div className="w-60 h-40 border-2 border-gray-300 bg-cover bg-center rounded-lg m-1">
              <img
                className="h-full w-full"
                src={g.images.fixed_height.url}
                alt="err"
              />
            </div>
            <div className="p-1">
              <div className="flex w-full justify-between">
                <h2>{g.username}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  dataSlot="icon"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => alert("GIF add to your favourites")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })):"loading"}
    </div>
  );
};
