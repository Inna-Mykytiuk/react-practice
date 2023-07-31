import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  /* width: 10%; */
  text-align: center;

  margin: 0 auto;
  margin-top: 20px;

  font-size: 16px;
  font-weight: 700;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;

  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? 'rgb(131 108 104)' : 'rgb(228, 195, 173)'};
  color: ${({ selected }) => (selected ? '#fff' : 'rgb(75, 68, 83)')};

  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 6px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.isSelected {
    background-color: rgb(131 108 104);
    color: #fff;
  }

  &:hover {
    background-color: rgb(131 108 104);
    color: #fff;
  }
`;
