import styled from "styled-components";

export const NavigationBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  padding: 0 1.6rem;
  width: 100%;
  background: white;
`;

export const NavigationBarMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr) 1.5fr;
  width: 60%;
  background: inherit;
  align-items: center;

  a {
    color: #000000;
    text-decoration: none;
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
    background: none;
    color: #000000;
    border: #000000 0.1rem solid;
  }
`;
