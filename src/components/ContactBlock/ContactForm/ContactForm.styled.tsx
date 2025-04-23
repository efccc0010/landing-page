import styled from "styled-components";

export const ContactFormContainer = styled.div`
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const ContactFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 5rem;
  width: 100%;
`;

export const RadioGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
`;

export const RadioOption = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;

  input[type="radio"] {
    accent-color: #a4ff00;
    height: 1rem;
    width: 1rem;
  }

  label {
    color: #191a23;
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  color: #191a23;
  font-size: 0.875rem;
  text-align: left;
`;

export const Input = styled.input`
  background: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #cfd0d3;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;
  color: #000000
`;

export const TextArea = styled.textarea`
  background: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #cfd0d3;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;
  resize: none;
`;

export const SubmitButton = styled.button`
  background-color: #191a23;
  border-radius: 0.5rem;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem;
  width: auto;

  &:hover {
    opacity: 0.9;
  }
`;

export const SvgDecoration = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  overflow: hidden;
  width: auto;

  svg {
    height: 50%;
    min-width: 100%;
    transform: translateX(50%);
    
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  text-align: left;
`;
