import "@/components/globals.css";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";

type props = {
  Component: React.JSX.ElementType;
  pageProps: object;
};

export default function MyApp({ Component, pageProps }: props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  );
}
