import React from "react";

const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setFlipped] = React.useState(false);
  console.log("front", frontContent);
  return (
    <div className="card-container">
      <div
        className={`card${isFlipped ? " flipped" : ""}`}
        onClick={() => setFlipped(!isFlipped)}
      >
        <div className="card-face front">
          <span>{frontContent}</span>
        </div>
        <div className="card-face back">
          <span>{backContent}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
