import styled from "styled-components";

export const NavigationBarContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  padding: 0 1.6rem;
  width: 100%;
`;

export const NavigationBarMenuContainer = styled.div`
  align-items: center;
  background: inherit;
  display: grid;
  grid-template-columns: repeat(5, 1fr) 1.5fr;
  width: 60%;

  a {
    color: #000000;
    font-size: 1rem;
    text-decoration: none;
  }

  button {
    background: none;
    border: #000000 0.1rem solid;
    color: #000000;
    font-size: 1rem;
  }
`;
