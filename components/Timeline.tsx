import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

type Props<T> = {
  data: T[];
  onClick: (data: T) => void;
};

export function TimeLine<T = any>({ data, onClick }: Props<T>) {
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

  const handleClick = (index: number) => {
    onClick(data[index]);
  };

  return (
    <>
      <div
        className="relative w-full rounded-xl border-2 border-blue-500"
        ref={divRef}
      >
        {data.map((_, index, arr) => (
          <button
            key={_?.toString()}
            onClick={() => handleClick(index)}
            style={
              {
                "--i": `${index}`,
                "--arr-length": `${arr.length - 1}`,
                "--width": `${containerWidth}px`,
              } as React.CSSProperties
            }
            className={`-ml-1 opacity-50 inline-block absolute top-0 left-0 w-6 h-6 bg-white rounded-full border-4 border-blue-500 transition-transform duration-500 cursor-pointer ${
              arr.length === 1
                ? "ml-0 left-1/2 -translate-x-1/2"
                : "translate-x-[calc(var(--width)/(var(--arr-length))*var(--i))] last:-ml-10"
            } -translate-y-1/2 hover:scale-125 ${index === 0 ? "ml-4" : ""}`}
          ></button>
        ))}
      </div>
    </>
  );
}
