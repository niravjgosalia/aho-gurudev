import { useEffect } from "react";
import "@/styles/globals.css";
import Lenis from "@studio-freight/lenis";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      smooth: true, // enable smooth scroll
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
