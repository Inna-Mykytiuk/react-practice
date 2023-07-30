import styled from 'styled-components';
// import { TextField} from '@mui/material';

export const Form = styled.form`
  width: 470px;
  display: flex;
  gap: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  padding: 20px 40px;
  border-radius: 5px;
`;
export const Field = styled.input`
  width: 100%;
  background-color: transparent;

  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  &:focus-within {
    box-shadow: 0 3px 15px rgb(43, 46, 48);
    border-radius: 5px;
    color: #fff;
  }

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  resize: none;
  height: 150px;

  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  &:focus-within {
    box-shadow: 0 3px 15px rgb(43, 46, 48);
    border-radius: 5px;
    color: #fff;
  }

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`

export const Select = styled.select`
  width: 100%;
  background-color: #f2f2f2;
  background-color: transparent;
  color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;


  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  &:focus-within {
    box-shadow: 0 3px 15px rgb(43, 46, 48);
    border-radius: 5px;
    /* color: #fff; */
  }
  option {
    background-color: #ccc;
  }

`;

export const Label = styled.label`
color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
`
