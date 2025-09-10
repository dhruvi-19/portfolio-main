"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";
import { WobbleCard } from "./ui/wobble-card";

const RecentProjects = () => {
  return (
    <div className="pb-10 pt-12 " id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-14 gap-8 p-4 mt-10 place-items-center">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center justify-center w-full h-full"
          >
            <WobbleCard>
              {/* Image container */}
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-2xl bg-[#13162D]">
                <img
                  src={img}
                  alt="project"
                  className="max-h-full object-contain"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base mt-4 line-clamp-1">
                {title}
              </h1>

              {/* Description */}
              <p className="lg:text-xl lg:font-normal font-light text-xs line-clamp-4 mt-2 text-[#BEC1DD]">
                {des}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6">
                {/* Icons */}
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Live link */}
                {link && (
                  <div
                    className="flex justify-center items-center hover:cursor-pointer"
                    onClick={() => window.open(link, "_blank")}
                  >
                    <p className="flex lg:text-xl md:text-sm text-sm">Live</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                )}
              </div>
            </WobbleCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
