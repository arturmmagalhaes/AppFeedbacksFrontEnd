import { useState } from 'react';

export default function useForm() {
    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        const newForm = {
            ...form, 
            [name]: value };

        setForm(newForm);
    }

    return { form, handleForm }
}