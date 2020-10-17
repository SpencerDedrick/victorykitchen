import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./Counter.css";

function Counter() {
  /* const [count, setCount] = useState(true); */
  const [start1, setStart1] = useState(0);
  const [start2, setStart2] = useState(0);

  const onUpdate = () => {
    setStart1(3500);
    setStart2(1200);
  };
  /*  const onCountEnd = () => {
    setCount(false);
  }; */
  return (
    <div className="counter">
      <div className="counter-wrapper">
        {/* <VisibilitySensor
          onChange={onVisibilityChange}
          offset={{ top: 10 }}
          delayedCall
        >
          <CountUp
            preserveValue={true}
            decimals={1}
            start={0}
            end={290}
            duration={2.5}
            ref={(countUp) => {
              Counter.myCountUp = countUp;
            }}
          />
        </VisibilitySensor> */}
        <CountUp
          start={start1}
          end={3500}
          redraw={false}
          duration={2.5}
          useEasing={true}
          onEnd={({ update }) => update()}
          onUpdate={() => {
            onUpdate();
          }}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} active={true} delayedCall>
              <div className="counter-container">
                <span ref={countUpRef} />
                <p>MEALS SERVED</p>
              </div>
            </VisibilitySensor>
          )}
        </CountUp>
        <CountUp
          start={start2}
          end={1200}
          redraw={false}
          duration={2.5}
          onEnd={({ pauseResume }) => pauseResume()}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <div className="counter-container">
                <span ref={countUpRef} />
                <p>FRIENDS BLESSED</p>
              </div>
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
    </div>
  );
}

export default Counter;
