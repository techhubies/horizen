import React from "react";

export const HeaderBox = (props: HeaderBoxProps) => {
  const { title = "title", subtext, type, user } = props;

  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}

        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};
