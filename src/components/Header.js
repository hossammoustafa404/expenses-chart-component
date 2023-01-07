import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper className="d-flex justify-content-between">
      <div className="text-box">
        <h6 className="title mb-2">My balance</h6>
        <h5 className="price">$921.48</h5>
      </div>
      <img className="logo" src="images/logo.svg" alt="Logo" aria-hidden />
    </HeaderWrapper>
  );
};

export default Header;

// HeaderWrapper
const HeaderWrapper = styled.header`
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.softRed};

  .title {
    color: ${({ theme }) => theme.cream};
    font-size: 1rem;
  }

  .price {
    color: ${({ theme }) => theme.veryPaleOrange};
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
