import React from "react"
import styled from "styled-components"

export const Nav = styled.nav`
    padding: 1rem 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #EBFBFF;

    @media (max-width: 688px) {
        flex-direction: column;
      }
`

export const Logo = styled.div`
    background-image: url("./images/logo.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 3.12rem;
    
    @media (max-width: 688px) {
        background-position: center;
      }
    
`