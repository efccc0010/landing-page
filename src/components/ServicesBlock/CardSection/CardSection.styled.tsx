import styled from "styled-components";

export const CardSectionContainer = styled.div<{ bgColorContent: string }>`
  background: ${(props) => props.bgColorContent};
  border-radius: 2rem;
  border-top: 0.1rem;
  border-left: 0.1rem;
  border-right: 0.1rem;
  border-bottom: 0.4rem;
  border-color: #191a23;
  border-style: solid;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 15rem;
  margin: 2rem;
`;

export const CardSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
`;

export const CardSectionTitle = styled.div<{ bgColorTitle: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;

  span {
    font-size: 1.5rem;
    text-align: left;
    color: #191a23;
    background-color: ${(props) => props.bgColorTitle};
    border-radius: 0.5rem;
  }
`;

export const CardSectionDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  span {
    text-align: left;
    border-radius: 0.5rem;
  }
`;
