import styled from "@emotion/styled";
import { Section } from "./Layout";



export const TextField = styled.div`
  margin-top: 1rem;
  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    padding: 0 10px;
    font-size: 1.2rem;
    outline: none;
    &:focus {
      border: 1px solid #525252;
    }
    ::placeholder {
      color: #c2c2c2;
    }
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

export const RadioField = styled.div`
  margin-top: 1rem;
  label {
    display: block;
    margin-left: .5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  input[type="radio"] {
    margin-left: 1rem;
    transform: scale(1.5);
  }
  .radio-group {
    display: flex;
    padding: 0.5rem 0;
  }
`;

export const FormActions = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: right;
`;