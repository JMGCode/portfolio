import { CSSProperties, FC, useEffect, useState } from "react";

import React from "react";
import styles from "./Carousel.module.scss";

type Props = {
  children: Array<React.ReactNode> | React.ReactNode;
  show?: number;
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  intervalTime?: number;
};

export const Carousel: FC<Props> = ({
  children,
  show = 1,
  infiniteLoop = true,
  autoPlay = false,
  intervalTime = 1000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(React.Children.count(children));

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && React.Children.count(children) > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(React.Children.count(children));
    setIsRepeating(infiniteLoop && React.Children.count(children) > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTimeout(() => setTransitionEnabled(true), 100);
        // setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        next();
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, []);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex >= length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      //@ts-ignore
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      //@ts-ignore
      output.push(children[index]);
    }
    return output;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {(isRepeating || currentIndex > 0) && (
          <button onClick={prev} className={styles["left-arrow"]}>
            <p>&lsaquo;</p>
          </button>
        )}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className={styles["content-wrapper"]}
        >
          <div
            className={`${styles.content} ${styles.show}`}
            style={
              {
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
                transition: transitionEnabled ? undefined : "none",
                "--show-num": show,
              } as CSSProperties
            }
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>
        {(isRepeating || currentIndex < length - show) && (
          <button onClick={next} className={styles["right-arrow"]}>
            <p>&rsaquo;</p>
          </button>
        )}
      </div>
    </div>
  );
};
