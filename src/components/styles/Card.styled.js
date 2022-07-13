import styled from "styled-components";




export const Container = styled.div`
  margin: 1rem 4rem;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: ${({ fdirection }) => fdirection || "row"};
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 3rem;


  img {
    width: 30%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
