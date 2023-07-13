import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>OrderSummary</div>
      <button onClick={() => navigate(-4)}>Go back</button>
    </>
  );
}

export default OrderSummary;
