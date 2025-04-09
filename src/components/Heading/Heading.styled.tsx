import styled from "styled-components";

export const HeadingContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 0 1.6rem;
  width: 100%;

  label {
    align-self: center;
    background: #b9ff66;
    border-radius: 0.5rem;
    color: #191a23;
    font-size: 2rem;
    padding: 0 1.6rem;
    text-align: center;
  }

  p {
    color: #191a23;
    font-size: 1rem;
    padding: 0.8rem 1.6rem;
    text-align: start;
    width: 50%;
  }
`;
