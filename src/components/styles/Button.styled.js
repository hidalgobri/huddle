import styled from 'styled-components'
export const Button = styled.button`
    width: 13.81rem;
    border-radius: 10rem;
    border: none;
    background-color: ${ ({bg}) => bg || '#fff' };
    color: ${ ({color}) => color || '#000' };
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
`