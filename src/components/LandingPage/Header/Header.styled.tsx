import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  padding: 1rem 1.6rem;
  width: 100%;
  background: white;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 50%;

  button {
    font-size: 1rem;
    background: none;
    background: #000000;
    color: #ffffff;
    border: #000000 0.1rem solid;
    width: 30%;
  }
`;

export const HeaderTextTitle = styled.div`
  align-self: center;
  text-align: left;
  font-size: 4.5rem;
  border-radius: 0.5rem;
  color: #191a23;
  padding: 1rem 0 0 0;
`;

export const HeaderTextDescription = styled.div`
  text-align: start;
  color: #191a23;
  font-size: 1rem;
  width: 50%;
  padding: 0 0 1rem 0;
`;
