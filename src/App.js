import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header>
        <StepsWrapper>
          <Step className="active">Client Info</Step>
          <Step>Account Details</Step>
          <Step>Approved</Step>
        </StepsWrapper>
      </Header>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const Header = styled.div`
  background-color: #f4f5f7;
  padding: 16px;
  margin: 8px 0;
`;

const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #bababa;
  border-radius: 6px;
`;

const Step = styled.div`
  flex: 0 0 33.33%;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-right: 1px solid #fff;
  background-color: transparent;

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: none;
  }

  &.active {
    background-color: #8ecb61;
  }
`;
