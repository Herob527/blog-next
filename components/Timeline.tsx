import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export function TimeLine() {
  const divRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const isRefDefined = !!divRef.current;

  const refreshWidth = () => {
    setContainerWidth(divRef.current?.getBoundingClientRect().width || 100);
  };

  useEffect(() => {
    refreshWidth();
  }, [isRefDefined]);
  useEffect(() => {
    window.addEventListener("resize", refreshWidth);
  }, []);
  return (
    <>
      <div
        className="relative w-full rounded-xl border-2 border-blue-500"
        ref={divRef}
      >
        {Array(4)
          .fill(0)
          .map((_, index) => index)
          .map((_, index, arr) => (
            <span
              key={_}
              style={
                {
                  "--i": `${index}`,
                  "--arr-length": `${arr.length - 1}`,
                  "--width": `${containerWidth}px`,
                } as React.CSSProperties
              }
              className={`-ml-1 last:-ml-6 opacity-50 inline-block absolute top-0 left-0 w-6 h-6 bg-white rounded-full border-4 border-blue-500 transition-transform duration-500 cursor-pointer translate-x-[calc(var(--width)/(var(--arr-length))*var(--i))] -translate-y-1/2 hover:scale-125`}
            ></span>
          ))}
      </div>
    </>
  );
}
