import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import * as Styles from '../styles/HomePage';

export default function HomePage (){
    const [data,setData] = useState([]);
    const history = useHistory();
    const [token] = useState(localStorage.getItem('token'));

    if(!token){
        history.replace('/signin');
    }

    useEffect(() => {
        axios.get('http://localhost:3003/users', {
            headers: {
                Authorization: token
            }})
            .then(response => {
                console.log(response.data.result);
                setData(response.data.result);
            })
            .catch(error => {
                alert(error.message);
            });
    }, []);
    
    const createFeedback = (id) => {
        history.push(`/createfeedback/${id}`)
    }
    
    const getCreatedFb = () => {
        history.push(`/getcreatefeedback`)
    }

    const getFbReceivd = () => {
        history.push(`/getfeedbackreceived`)
    }

    return(<>
        <Header />
        <Styles.DivContainer>
            <Styles.DivCabecalhoList>
                <div>Nome - Email</div>
                <div>Criar Feedback</div>
            </Styles.DivCabecalhoList>
            
            {data.length > 0 && 
                data.map(element => {
                return(
                    <Styles.DivList key={element.id}>
                        <Styles.DivUsers>{element.name} - {element.email}</Styles.DivUsers>
                        <Styles.DivButton onClick={() => createFeedback(element.id)}>+</Styles.DivButton>
                    </Styles.DivList>)})}
            {data.length === 0 && 
            <Styles.DivList>Não Possui Usuários</Styles.DivList>}
        </Styles.DivContainer>
    </>)
}