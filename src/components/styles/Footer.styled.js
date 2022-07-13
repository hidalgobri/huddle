import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 1rem 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #00252e;
  display: flex;
  flex-direction: row;
  gap: 5rem;

  h2,
  p {
    color: #fff;
  }

  @media (max-width: ${({theme})=> theme.mobile}) {
    flex-direction: column;
  }
`;
export const Input = styled.input`
  width: 100%;
  margin-rigth: 1rem;
  padding: 0.5rem;
  height: 2.5rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: fit-content;
  align-items: center;
  margin-top: 1rem;

  
  @media (max-width: ${({theme})=> theme.tablet}) {
    flex-direction: column;
  }
`
export const CodedBy = styled.p`
  color: #fff;
  width: 100%;
  background-color: #00252e;
  text-align: center;
  font-size: 0.8rem;


  a{
    color: #fff;
  }
`
