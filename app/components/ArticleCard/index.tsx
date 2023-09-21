import type React from "react";

type props = {
  title: string;
  children?: React.ReactNode;
};

const ArticleCard = ({ title, children }: props) => (
  <article className="block relative flex-1 py-4 px-4">
    <h1 className="text-2xl font-bold text-center uppercase">{title}</h1>
    <div className="mt-8 h-full">{children}</div>
  </article>
);

export { ArticleCard };
