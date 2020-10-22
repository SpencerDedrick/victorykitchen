import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./Counter.css";

function Counter(props) {
  /* const [num, setNum] = useState(0);

  const onUpdate = () => {
    setNum(props.number);
  }; */

  return (
    <div className="counter">
      <CountUp
        start={0}
        end={props.number}
        redraw={true}
        duration={1.5}
        useEasing={true}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <div className="counter-container">
              <span ref={countUpRef} />
              <p className="counter-label">{props.label}</p>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
    </div>
  );
}

export default Counter;

/* function Counter() {
  const [count, setCount] = useState(true); 
  const [start1, setStart1] = useState(0);
  const [start2, setStart2] = useState(0);

  const onUpdate = () => {
    setStart1(3500);
    setStart2(1200);
  };
   const onCountEnd = () => {
    setCount(false);
  }; 
  return (
    <div className="counter">
      {<VisibilitySensor
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
        </VisibilitySensor> }

      <CountUp
        start={0}
        end={3500}
        redraw={true}
        duration={2.5}
        useEasing={true}
        onEnd={({ update }) => update()}
          onUpdate={() => {
            onUpdate();
          }}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <div className="counter-container">
              <span ref={countUpRef} />
              <p>MEALS SERVED</p>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>

      <CountUp
        start={0}
        end={1200}
        redraw={true}
        duration={2.5}
        onEnd={({ update }) => update()}
          onUpdate={() => {
            onUpdate();
          }}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} active={true} delayedCall>
            <div className="counter-container">
              <span ref={countUpRef} />
              <p>FRIENDS BLESSED</p>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
    </div>
  );
}

export default Counter; */
