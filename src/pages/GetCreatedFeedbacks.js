import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import * as Styles from '../styles/GetCreatedFeedback';

export default function GetCreatedFeedback() {
    const history = useHistory();
    const [token] = useState(localStorage.getItem('token'));
    const [data, setData] = useState([]);
    
    if(!token){
        history.replace('/signin');
    }

    useEffect(() => {
        axios.get('http://localhost:3003/getcreatedfb', {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            setData(response.data.result);
        })
        .catch(error => 
            alert(error.message)
        );
    },[]);

    const updateFeedback = (id) => {
        history.push(`/update/${id}`)
    }

    return(<>
        <Header />
        <Styles.DivContainer>
            <Styles.DivCabecalhoList>
                <Styles.Date>Data</Styles.Date> 
                <Styles.Email>Email</Styles.Email>
                <Styles.Name>Nome</Styles.Name>
                <Styles.Feedback>Feedback</Styles.Feedback>
                <Styles.UpdateFeedback>Editar</Styles.UpdateFeedback>
            </Styles.DivCabecalhoList>
            {data.length > 0 && 
            data.map(element => {
                return (<Styles.divContent key={element.id}>
                    <Styles.Date>{element.date}</Styles.Date>
                    <Styles.Email>{element.email}</Styles.Email>
                    <Styles.Name>{element.name}</Styles.Name>
                    <Styles.Feedback>{element.final_fb} - {element.improve} - {element.keep}</Styles.Feedback>
                    <Styles.UpdateFeedback onClick={() => updateFeedback(element.id)}>X</Styles.UpdateFeedback>
                </Styles.divContent>)
            })}
            {data.length === 0 && 
            <Styles.divContent>Não Possui Feedbacks</Styles.divContent>}
        </Styles.DivContainer>
    </>);
}