import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper className="d-flex justify-content-between align-items-end">
      <div className="left-text-box">
        <h4 className="text mb-1">Total this month</h4>
        <h3 className="num">$478.33</h3>
      </div>
      <div className="right-text-box text-end">
        <h6 className="num mb-1">+2.4%</h6>
        <h4 className="text">from last month</h4>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

// FooterWrapper
const FooterWrapper = styled.footer`
  padding: 1.4rem 0;
  .text {
    color: ${({ theme }) => theme.mediumBrown};
    font-size: 0.8rem;
  }
  .num {
    font-weight: 700;
  }
  .left-text-box .num {
    font-size: 2rem;
  }

  .right-text-box .num {
    font-size: 0.8rem;
  }
`;
