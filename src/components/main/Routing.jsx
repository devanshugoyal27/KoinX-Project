import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Overview from "./Overview/Overview";
import Sentiments from "./Overview/Sentiments";
import Team from "./Overview/Team";
import Toknomics from "./Overview/Toknomics";
import Performance from "./Overview/Performance";

const Routing = () => {
  return (
    <div>
      <div className="flex gap-9 mt-4 border-b-[1px] border-gray-300 whitespace-nowrap text-gray-600 font-semibold md:overflow-hidden">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 pb-2 border-blue-500 text-blue-500" : ""
          }
          to="/"
        >
          Overview
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 pb-2 border-blue-500 text-blue-500" : ""
          }
          to="/Performance"
        >
          Fundamentals
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 pb-2 border-blue-500 text-blue-500" : ""
          }
          to="/Sentiments"
        >
          News Insights
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 pb-2 border-blue-500 text-blue-500" : ""
          }
          to="/Sentiments"
        >
          Sentiments
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 pb-2 border-blue-500 text-blue-500" : ""
          }
          to="/Team"
        >
          Team
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 pb-2 border-blue-500 text-blue-500" : ""
          }
          to="/Toknomics"
        >
          Technical
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 pb-2 border-blue-500 text-blue-500" : ""
          }
          to="/Toknomics"
        >
          Toknomics
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/Performance" element={<Performance />} />
        <Route path="/Sentiments" element={<Sentiments />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Toknomics" element={<Toknomics />} />
        <Route path="/Toknomics" element={<Toknomics />} />
      </Routes>
    </div>
  );
};

export default Routing;
