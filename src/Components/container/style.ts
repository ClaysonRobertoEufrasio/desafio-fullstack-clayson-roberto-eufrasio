import styled from "styled-components";

export const Main = styled.main`
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`

export const HeaderMain = styled.header`
    height: 145px;
    background-color: #141417;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        position: absolute;
        font-size: 1.25rem;
        color: white;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 18px;

    input {
        margin-left: 20px;
        border-radius: 8px;
        outline: none;
        height: 25px;
        background-color: #FFFFFF;
        color: #FFFFFF;
        padding: 10px 18px 11px 18px;
        display: block;
        border: none;
        width: 250px;
        font-size: 18px !important;
    }

    label {
        display: block;
        margin-left: 20px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        margin-bottom: 7px;
    }
`

export const Container = styled.div`
    width: 330px;
    height: 100vh;
    margin-left: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 770px) {
        margin: auto;
    }
`

export const ContainerForm = styled.div`
    height: 100%;
    width: 100%;
`

export const Form = styled.form`
    background-color: #0D0D0D;
    box-shadow: 3px 3px 31px #0000006B;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const ContainerButton = styled.div`

    .createContats, .createClients {
        position: absolute;
        top: 35px;
        left: 114px;
    }

    .register, .createContats, .createClients {
        border: none;
        border-radius: 9px !important;
        padding: 12px 60px;
        background: linear-gradient(259deg, #8743FF 0%, #4136F1 100%);
        box-shadow: 0px 0px 15px #6E65FE69;
        font-size: 18px;
        line-height: 27px;
        position: relative;
        -webkit-backface-visibility: hidden;
    };

    .createContats, .createClients {
        padding: 3px;
        font-size: 12px;
    }

    .register::after, .createContats::after, .createClients::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 9px !important;
        background-image: linear-gradient(259deg, #4136F1 0%, #8743FF 100%);
        transition: opacity 0.5s ease-out;
        z-index: 2;
        opacity: 0;
    }

    .register:hover:after, .createContats:hover:after, .createClients:hover:after {
        opacity: 1;
    }

    .register span, .createContats span, .createClients span {
        position: relative;
        z-index: 3;
        color: white;
    }

`


