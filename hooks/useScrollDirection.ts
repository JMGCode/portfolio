import { useEffect, useRef, useState } from "react";

const useScrollDirection = (interval = 300, initialDir = "up") => {
  const lastExecuted = useRef<number>(Date.now());
  const lastScrollPosition = useRef<number>(0);
  const timeoutId = useRef<NodeJS.Timeout>();
  // const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(initialDir);

  const throttle = (callback: () => void) => {
    const currTime = Date.now();
    const timeSinceLastCall = currTime - lastExecuted.current;
    const delayRemaining = interval - timeSinceLastCall;

    if (delayRemaining < 0) {
      lastExecuted.current = Date.now();
      callback();
    } else {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        callback();
      }, delayRemaining);

      timeoutId.current = timerId;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPosition = window.scrollY;
      if (currScrollPosition === lastScrollPosition.current) return;
      if (currScrollPosition > lastScrollPosition.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollPosition.current = currScrollPosition;
      // setLastScrollPosition(currScrollPosition);
    };

    const tScroll = throttle(handleScroll);

    window.addEventListener("scroll", () => throttle(handleScroll));
    throttle(handleScroll);
    return () =>
      window.removeEventListener("scroll", () => throttle(handleScroll));
  }, [lastScrollPosition]);

  return scrollDirection;
};
export default useScrollDirection;
