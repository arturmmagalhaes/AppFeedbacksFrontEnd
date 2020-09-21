import styled from 'styled-components';

export const DivContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
`;

export const FormLogin = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 4px;
    height: 350px;
    width: 300px;
    background-color: #FFF;
`;

export const Label = styled.label`
    display: block;
    margin-top: 4px;
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 4px;
`;

export const Button = styled.button`
    display: block;
    width: 180px;
    background-color: #B3DFF5;
    border: 0.2px solid;
    border-radius: 2px;
    padding: 4px;
`;

export const P = styled.p`
    text-align: center;
    cursor: pointer;
`
