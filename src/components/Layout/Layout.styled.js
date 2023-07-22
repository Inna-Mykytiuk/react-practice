import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 15px 50px;

  display: flex;
  flex-flow: column wrap;

  list-style: none;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  color: rgb(0, 0, 0);
  height: 100%;
  background: rgba(110, 110, 110, 0.25);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px 0px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-left: 40px;
  padding-right: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #e4c3ad;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: #eb9486;
    text-shadow: 0 0 15px #eb9486;
  }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const LoadingDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Dot = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #1c85ff;
  animation: ${bounce} 1s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;
