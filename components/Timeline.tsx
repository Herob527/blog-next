import React, { useState } from "react";

type Props<T> = {
  data: T[];
  keyFunc: (data: T) => string;
  labelFunc?: (data: T) => string;
  onFocus: (data: T) => void;
  onLostFocus: (data: T) => void
};

export function TimeLine<T = unknown>({
  data,
  keyFunc,
  labelFunc,
  onFocus,
  onLostFocus
}: Props<T>) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const currentlySelected = selectedIndex === index ? null : index
    if (currentlySelected !== null) {
      onFocus(data[index]);
    } else {
      onLostFocus(data[index])
    }
    setSelectedIndex(currentlySelected);
  };
  console.log("[TimeLine - label]", labelFunc);
  const generateKey = (data: T) => keyFunc(data);

  return (
    <>
      <div className="flex relative flex-col flex-nowrap gap-4 justify-around items-start mb-8 w-full md:flex-row md:items-center">
        <span className="absolute z-0 w-0 h-[calc(100%+1rem)] border-l-4 border-blue-500 md:w-full md:h-1 md:border-0 md:border-r-0 md:border-t-4"></span>
        {data.map((val, index) => (
          <button
            key={`timeline-${generateKey(val)}`}
            onClick={() => handleClick(index)}
            className="inline-flex z-10 flex-row flex-nowrap gap-4 items-start md:flex-col md:gap-0 md:items-center"
          >
            <span className="hidden md:block">&nbsp;</span>
            <span
              key={`button-timeline-${generateKey(val)}`}
              className={`inline-block p-2 rounded-full border-4 ${selectedIndex === index
                ? "bg-blue-700 border-blue-500"
                : "bg-white border-blue-500"
                } transition-all duration-500 cursor-pointer -translate-x-[calc(50%-2px)] md:translate-x-0`}
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
