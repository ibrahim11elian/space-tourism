"use client";

import { cloneElement } from "react";

function Filter({ list, className, children }) {
  return (
    <ul className={`flex justify-center gap-4 ${className}`}>
      {list.map((_, index) => (
        <li key={index}>
          {cloneElement(children, {
            index: index,
          })}
        </li>
      ))}
    </ul>
  );
}

export default Filter;
