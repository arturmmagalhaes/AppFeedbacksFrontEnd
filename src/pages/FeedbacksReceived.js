import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import * as Styles from '../styles/FeedbackReceived';

export default function FeedbacksReceived() {
    const history = useHistory();
    const [token] = useState(localStorage.getItem('token'));
    const [data, setData] = useState([]);

    if(!token){
        history.replace('/signin');
    }

    useEffect(() => {
        axios.get('http://localhost:3003/getfbreceived', {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            console.log(response.data)
            setData(response.data.result);
        })
        .catch(error => 
            alert(error.message)
        );
    },[]);

    return(<>
        <Header />
        <Styles.DivContainer>
            <Styles.DivCabecalhoList>
                <Styles.Date>Data</Styles.Date> 
                <Styles.Email>Email</Styles.Email>
                <Styles.Name>Nome</Styles.Name>
                <Styles.Feedback>Feedback</Styles.Feedback>
            </Styles.DivCabecalhoList>
            {data.length > 0 && 
            data.map(element => {
                return (<Styles.divContent key={element.id}>
                    <Styles.Date>{element.date}</Styles.Date>
                    <Styles.Email>{element.email}</Styles.Email>
                    <Styles.Name>{element.name}</Styles.Name>
                    <Styles.Feedback>{element.final_fb} - {element.improve} - {element.keep}</Styles.Feedback>
                </Styles.divContent>)
            })}
            {data.length === 0 && 
            <Styles.divContent>Não Possui Feedbacks</Styles.divContent>}
        </Styles.DivContainer>
    </>);
}