import React from "react";

export const NewsWidget = (props) => {
  return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <div className="py-1 d-flex justify-content-around border border-top-0 border-left-0 border-right-0 border-secondary">
            <div className="d-flex align-items-center">
              <img
                src={props.image}
                className="rounded mx-2"
                alt="not available"
                style={{ width: "90px", height: "80px" }}
              />
            </div>
            <div>
              <h5>{props.title}</h5>
              <p className="mb-0">{props.desc}</p>
            </div>
          </div>
        </a>
  );
};
