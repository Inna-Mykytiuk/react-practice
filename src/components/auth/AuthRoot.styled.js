import styled from 'styled-components';
import { TextField} from '@mui/material';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Form = styled.form`
  /* width: 100%;
  display: flex;
  gap: 4px; */
  flex: 1;
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
    border-radius: 5px;
    color: #fff;
    fieldset {
      border: none;
      outline: none;
    }
  }

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    /* text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px; */
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  background-color: transparent;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;

  &:focus-within {
    border-radius: 5px;
    color: #fff;
    fieldset {
      border: none;
      outline: none;
      color: red;
    }
  }

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
  &:hover {
    fieldset {
      border: none;
      outline: none;
    }
  }
`;

