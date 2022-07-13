import styled,{ keyframes } from "styled-components";
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

export const HeroStyled = styled.div`
animation: 1s ${pulseAnimation};
  background-color: #ebfbff;
  padding: 1rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;

  @media (max-width: ${({theme})=> theme.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;

   & > div {
    text-align: center;
   }
  }
`;
