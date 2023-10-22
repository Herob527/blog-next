import React, { useState } from "react";

type Props<T> = {
  data: T[];
  keyFunc: (data: T) => string;
  labelFunc?: (data: T) => string;
  onClick: (data: T) => void;
};

export function TimeLine<T = unknown>({
  data,
  keyFunc,
  labelFunc,
  onClick,
}: Props<T>) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    onClick(data[index]);
    setSelectedIndex(index);
  };
  console.log("[TimeLine - label]", labelFunc);
  const generateKey = (data: T) => keyFunc(data);

  return (
    <>
      <div className="flex relative flex-row flex-nowrap justify-around items-center mb-8 w-full">
        <span className="absolute z-0 w-full h-1 border-t-2 border-b-2 border-blue-500"></span>
        {data.map((val, index) => (
          <button
            key={`timeline-${generateKey(val)}`}
            onClick={() => handleClick(index)}
            className="inline-flex z-10 flex-col flex-nowrap items-center sm:translate-y-[16px]"
          >
            <span
              key={`button-timeline-${generateKey(val)}`}
              className={`inline-block p-2 rounded-full border-4 ${
                selectedIndex === index
                  ? "bg-blue-700 border-blue-500"
                  : "bg-white border-blue-500"
              } transition-all duration-500 cursor-pointer `}
            ></span>
            <span className="whitespace-nowrap">
              {labelFunc ? labelFunc(val) : ""}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
