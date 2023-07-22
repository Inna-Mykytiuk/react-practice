import styled from 'styled-components';

export const SectionCard = styled.section`
  margin: 50px 0;

  h2 {
    font-size: 1.5rem;
    color: #fff;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;


export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  list-style: none;

  li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 320px;

  padding: 10px 20px;
  text-align: center;

  background-color: #00466e1a;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px 0px;
  backdrop-filter: blur(10px);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.03;
  }
  }`

export const CardText = styled.p`
  font-size: 18px;
  color: rgb(14 7 7);
`

export const Email = styled.p`
  font-size: 16px;
  color: #fff;
`


