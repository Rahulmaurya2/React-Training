import React, { useState } from "react";
import "./bgChanger.css";

const BgChanger = () => {
  const [colour, setColor] = useState("lightblue");

  return (
    <div className="main">
      <div className="main__display" style={{ backgroundColor: colour }}>
        <div className="display__bar">
          <div className="display__btn">
            <button onClick={() => setColor("aquamarine")} className="btn-1">
              Change color
            </button>
          </div>
          <div className="display__btn">
            <button
              onClick={() => setColor("rgb(204, 139, 139)")}
              className="btn-2"
            >
              Change color
            </button>
          </div>
          <div className="display__btn">
            <button
              onClick={() => setColor("rgb(158, 158, 215)")}
              className="btn-3"
            >
              Change color
            </button>
          </div>
          <div className="display__btn">
            <button
              onClick={() => setColor("rgb(168, 220, 46)")}
              className="btn-4"
            >
              Change color
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
