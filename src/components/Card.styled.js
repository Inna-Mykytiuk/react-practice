import styled from 'styled-components';

export const SectionCard = styled.section`

  h2 {
    font-size: 1.5rem;
    color: #fff;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }

  p {
    font-size: 20px;
    color: rgb(57, 23, 23);
  }
`;

// export const CardList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   padding: 0;
//   margin: 0;

//   li {
//     flex: 0 0 calc(33.33% - 40px);
//     height: 100%;
//     padding: 10px;
//     background-color: #00466e1a;
//     backdrop-filter: blur(10px);
//     box-shadow: 0 4px 4px #0000004d;
//     border-radius: 20px;
//     margin-bottom: 20px;

//     @media (max-width: 768px) {
//       flex-basis: calc(50% - 40px);
//     }

//     @media (max-width: 480px) {
//       flex-basis: calc(100% - 40px);
//     }
//   }
// `;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  list-style: none;
  margin-bottom: 30px;

  li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;

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


