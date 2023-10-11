import { useState } from "react";

const showButtonHeight = 300;
export default function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(window.scrollY);
  const [showScrollTop, setShowScrollTop] = useState(false);

  window.addEventListener("scroll", () => {
    setWindowScroll(window.scrollY);
    if (windowScroll > showButtonHeight) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  });

  return [{ windowScroll, showScrollTop }];
}
