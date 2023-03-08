import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import Modal from "../Modal/Modal";
import Portal from "../../HOC/Portal";
import React from "react";
import styles from "./Carousel.module.scss";

type Props = {
  show?: number;
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  intervalTime?: number;
  images: StaticImageData[];
};

export const Carousel: FC<Props> = ({
  images,
  show = 1,
  infiniteLoop = true,
  autoPlay = false,
  intervalTime = 1000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(images?.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && images?.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);

  const intervalRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(false);

  const [preview, setPreview] = useState(false);

  useEffect(() => {
    setLength(images.length);
    setIsRepeating(infiniteLoop && images.length > show);
  }, [images, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTimeout(() => setTransitionEnabled(true), 100);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  //Auto play
  useEffect(() => {
    if (autoPlay) {
      startInterval();
      return () => stopInterval();
    }
  }, [autoPlay, setInterval]);

  const pause = () => {
    if (isPaused) {
      startInterval();
    } else {
      stopInterval();
    }
    setIsPaused((prev) => !prev);
  };

  const resetInterval = () => {
    stopInterval();
    startInterval();
  };

  const stopInterval = () => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
  };

  const startInterval = (dir?: "next" | "prev") => {
    if (!autoPlay) return;
    if (intervalRef.current) stopInterval();
    intervalRef.current = setInterval(() => {
      dir === "prev" ? prev() : next();
    }, intervalTime);
  };

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
      resetInterval();
      next();
    }

    if (diff < -5) {
      resetInterval();
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
      output.push(
        <div
          key={"carousel-img" + images[index].src + index}
          className={styles["carousel-img"]}
        >
          <Image
            alt={`image-${index}`}
            src={images[length - 1 - index]}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
        </div>
      );
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(
        <div
          key={"carousel-img" + images[index].src + index}
          className={styles["carousel-img"]}
        >
          <Image
            alt={`image-${index}`}
            src={images[index]}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
        </div>
      );
    }
    return output;
  };

  return (
    <>
      <div
        className={styles.container}
        onMouseEnter={() => {
          stopInterval();
        }}
        onMouseLeave={() => {
          if (preview) return;
          startInterval();
        }}
      >
        <div className={styles.wrapper}>
          {(isRepeating || currentIndex > 0) && (
            <button
              onClick={() => {
                resetInterval();
                prev();
              }}
              className={styles["left-arrow"]}
            >
              <p>&lsaquo;</p>
            </button>
          )}
          <div
            onClick={() => {
              stopInterval();
              setPreview(true);
            }}
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
              <> {length > show && isRepeating && renderExtraPrev()}</>
              {images.map((url, idx) => (
                <div
                  key={"carousel-img" + url.src + idx}
                  className={styles["carousel-img"]}
                >
                  <Image
                    alt={`image-${idx}`}
                    src={url}
                    fill
                    style={{ objectFit: "contain" }}
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  />
                </div>
              ))}
              <>{length > show && isRepeating && renderExtraNext()}</>
            </div>
          </div>
          {(isRepeating || currentIndex < length - show) && (
            <button
              onClick={() => {
                resetInterval();
                next();
              }}
              className={styles["right-arrow"]}
            >
              <p>&rsaquo;</p>
            </button>
          )}
        </div>
      </div>
      <Portal>
        <Modal
          key="preview"
          setIsVisible={(value) => {
            setPreview(value);
            if (intervalRef.current) return;
            startInterval();
          }}
          isVisible={preview}
        >
          <div style={{ height: "100%" }}></div>
          <div
            style={{
              height: "100%",
              position: "relative",
            }}
          >
            <Image
              alt="preview-image"
              src={images[currentIndex - 1]}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </Modal>
      </Portal>
    </>
  );
};
