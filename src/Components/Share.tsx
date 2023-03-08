import React from "react";

const Share = () => {
  const onShare = () => {
    if (!navigator.share) return;
    navigator.share({ text: "hey im shared" });
  };
  return <button onClick={onShare}>Share</button>;
};

export default Share;
