import React from "react";
import ReactLoading from "react-loading";

const BubbleLoading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={40} width={80} />
);

export default BubbleLoading;
