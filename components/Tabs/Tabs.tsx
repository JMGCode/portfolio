import { CSSProperties, FC, useEffect, useRef, useState } from "react";

import styles from "./Tabs.module.scss";

type tabObjType = {
  name: string;
  content: any;
};

interface IProps {
  tabs: Array<tabObjType>;
}
const Tabs: FC<IProps> = ({ tabs }) => {
  const tabRef = useRef(null);
  const [offset, setOffset] = useState<any>(null);
  const tabContainerRef = useRef(null);

  useEffect(() => {
    if (tabRef.current) {
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
        tabRef.current;

      setOffset({
        width: offsetWidth,
        height: offsetHeight,
        left: offsetLeft,
        top: offsetTop,
        index: 0,
      });
    }
  }, []);

  const handleTabClick = (e: any, idx: number) => {
    //handle indicator movement
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = e.target;

    setOffset({
      width: offsetWidth,
      height: offsetHeight,
      left: offsetLeft,
      top: offsetTop,
      index: idx,
    });
  };

  return (
    <div className={styles.container}>
      <div ref={tabContainerRef} className={styles["tabs-container"]}>
        {tabs.map((tab, idx) => (
          <button
            key={"tab-items" + idx}
            ref={idx === 0 ? tabRef : null}
            className={styles.tab}
            onClick={(e) => handleTabClick(e, idx)}
          >
            {tab.name}
          </button>
        ))}
        <span
          style={
            {
              "--ind-height": offset?.height + "px",
              "--ind-top": offset?.top + "px",
              "--ind-left": offset?.left + "px",
              "--ind-width": offset?.width + "px",
              "--ind-index": offset?.index,
            } as CSSProperties
          }
          className={styles.indicator}
        ></span>
      </div>
      <div className={styles.window}>
        <div
          className={styles.wrapper}
          style={
            {
              "--ind-index": offset?.index,
            } as CSSProperties
          }
        >
          {tabs.map((tab, idx) => (
            <div
              key={"tab-content" + tab.name + idx}
              className={styles.content}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
