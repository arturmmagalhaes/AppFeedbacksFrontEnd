import styled from 'styled-components';

export const DivContainer = styled.div`
    display: grid;
    background-color: #efefef;
    justify-content: center;
    align-items: center;
`;

export const DivCabecalhoList = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    padding: 12px 40px;
    border-bottom: 1px solid;
    font-weight: bold;
`;

export const DivList = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    width: 90vw;
`;

export const DivUsers = styled.div`
    padding: 12px 40px;
`;

export const DivButton = styled.div`
    padding: 12px 40px;
    cursor: pointer;
`;