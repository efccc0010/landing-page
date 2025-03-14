import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 0 1.6rem;
  width: 100%;
  background: white;

  label {
    align-self: center;
    text-align: center;
    font-size: 2rem;
    background: #b9ff66;
    border-radius: 0.5rem;
    padding: 0 1.6rem;
    color: #191a23;
  }

  p {
    text-align: start;
    padding: 0.8rem 1.6rem;
    color: #191a23;
    font-size: 1rem;
    width: 50%;
  }
`;
