import React from "react";
import styled from "styled-components";
import background from "../assets/netflix-background.jpg";

const BackgroundImages = () => {
  return (
    <>
      <Container>
        <img src={background} alt="" srcset="" />
      </Container>
    </>
  );
};

export default BackgroundImages;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
