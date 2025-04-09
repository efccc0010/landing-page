import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 1.6rem;
  width: 100%;
`;

export const HeaderText = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 50%;

  button {
    background: #000000;
    background: none;
    border: #000000 0.1rem solid;
    color: #ffffff;
    font-size: 1rem;
    width: 30%;
  }
`;

export const HeaderTextTitle = styled.div`
  align-self: center;
  border-radius: 0.5rem;
  color: #191a23;
  font-size: 4.5rem;
  padding: 1rem 0 0 0;
  text-align: left;
`;

export const HeaderTextDescription = styled.div`
  color: #191a23;
  font-size: 1rem;
  padding: 0 0 1rem 0;
  text-align: start;
  width: 50%;
`;
