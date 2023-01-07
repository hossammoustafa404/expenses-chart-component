import React from "react";
import styled from "styled-components";

const DayCol = ({ item }) => {
  return (
    <div className="col g-3 g-xxl-4">
      <div className="text-center">
        <DrawStyle
          className="mb-1"
          amount={item.amount}
          data-amount={`$${item.amount}`}
        ></DrawStyle>
        <DayNameStyle>{item.day}</DayNameStyle>
      </div>
    </div>
  );
};

export default DayCol;

// DayNameStyle
const DayNameStyle = styled.span`
  color: ${({ theme }) => theme.mediumBrown};
  font-size: 0.9rem;
`;

const DrawStyle = styled.div`
  height: ${({ amount }) => `${amount * 3.5}px`};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.softRed};
  transition: 0.2s;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.cyan};
  }

  &::before {
    content: attr(data-amount);
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.darkBrown};
    color: ${({ theme }) => theme.veryPaleOrange};
    font-size: 0.8rem;
    border-radius: 0.2rem;
    padding: 0.4rem;
  }

  &:hover::before {
    opacity: 1;
  }
`;
