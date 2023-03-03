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
  const [activeTab, setActiveTap] = useState(0);
  const tabRef = useRef(null);
  const [offset, setOffset] = useState<any>(null);
  const tabContainerRef = useRef(null);
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    if (tabRef.current) {
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
        tabRef.current;

      // console.log("window width", windowSize.current[0]);
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
    //set active tab
    setActiveTap(idx);
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
      <div className={styles.content}>
        {tabs
          .filter((_, idx) => idx === activeTab)
          .map((tab, idx) => (
            <div key={"tab-content" + idx}>{tab.content}</div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
