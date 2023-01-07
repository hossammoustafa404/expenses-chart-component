import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DayCol from "./DayCol";
import Footer from "./Footer";

const Main = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedDays = data.map((item, index) => (
    <DayCol key={index} item={item} />
  ));

  return (
    <MainWrapper>
      <h4 className="title">Spending - Last 7 days</h4>
      <div
        className="statics-box row
      align-items-end"
      >
        {renderedDays}
      </div>
      <Footer />
    </MainWrapper>
  );
};

export default Main;

// MainWrapper
const MainWrapper = styled.main`
  padding: 2rem;
  @media (max-width: 767px) {
    padding: 1.4rem;
  }
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.veryPaleOrange};
  border-radius: 0.5rem;

  .title {
    color: ${({ theme }) => theme.darkBrown};
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .statics-box {
    position: relative;
    padding-bottom: 1.2rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 0.09rem;
      background-color: ${({ theme }) => theme.cream};
    }
  }
`;
