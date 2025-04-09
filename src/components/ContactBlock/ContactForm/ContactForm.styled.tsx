import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  border-radius: 1rem;
`;

export const ContactFormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 5rem;
  gap: 1rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input[type="radio"] {
    accent-color: #a4ff00;
    width: 1rem;
    height: 1rem;
  }

  label {
    font-size: 1rem;
    color: #191a23;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #191a23;
  text-align: left;
`;

export const Input = styled.input`
  border: 1px solid #cfd0d3;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  width: auto;
  background: #ffffff;
`;

export const TextArea = styled.textarea`
  border: 1px solid #cfd0d3;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  width: auto;
  background: #ffffff;
`;

export const SubmitButton = styled.button`
  background-color: #191a23;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  width: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const SvgDecoration = styled.div`
  flex-shrink: 0;
  overflow: hidden;
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    min-width: 100%;
    height: 50%;
    transform: translateX(50%);
    
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  text-align: left;
`;
