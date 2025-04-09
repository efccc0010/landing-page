import styled from "styled-components";

export const CardSectionContainer = styled.div<{ bgColorContent: string }>`
  align-items: center;
  background: ${(props) => props.bgColorContent};
  border-bottom: 0.4rem;
  border-color: #191a23;
  border-left: 0.1rem;
  border-radius: 2rem;
  border-right: 0.1rem;
  border-style: solid;
  border-top: 0.1rem;
  display: flex;
  flex-direction: row;
  height: 15rem;
  justify-content: space-around;
  margin: 2rem;
`;

export const CardSectionContent = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const CardSectionTitle = styled.div<{ bgColorTitle: string }>`
  align-items: start;
  display: flex;
  flex-direction: column;

  span {
    background-color: ${(props) => props.bgColorTitle};
    border-radius: 0.5rem;
    color: #191a23;
    font-size: 1.5rem;
    text-align: left;
  }
`;

export const CardSectionDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  span {
    border-radius: 0.5rem;
    text-align: left;
  }
`;
