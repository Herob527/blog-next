import type React from "react";

type props = {
  title: string;
  children?: React.ReactNode;
};

const ArticleCard = ({ title, children }: props) => (
  <article className="inline-block relative flex-1 py-4 px-4 border-2 border-blue-500 min-w-[300px]">
    <h1 className="absolute top-0 left-1/2 px-4 max-w-full bg-white border-2 border-blue-500 -translate-x-1/2 -translate-y-1/2">
      {title}
    </h1>
    <div className="mt-2 h-full">{children}</div>
  </article>
);

export { ArticleCard };
