import styled from 'styled-components'
export const Button = styled.button`
    margin: 1rem 0;
    padding: 0.5rem;
    font-family: 'Open Sans', sans-serif;
    min-width: 10rem;
    border-radius: 10rem;
    border: none;
    background-color: ${ ({bg}) => bg || '#fff' };
    color: ${ ({color}) => color || '#000' };
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
`