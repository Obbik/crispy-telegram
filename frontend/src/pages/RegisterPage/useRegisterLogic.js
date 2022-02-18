import {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useRegister = () => {
    const [ state, setState ] = useState({
        name: '',
        email: '',
        password: '',
        height: 'Midget'
    })
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleChange = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
        console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, height } = state;

        setIsPending(true)

        axios({
            url: 'http://localhost:3001/',
            method: 'post',
            data: {
                query: `mutation  {
                  createUser (name: "${name}",email: "${email}", password: "${password}", height: "${height}"){
                    name,
                    email,
                    password,
                    height
                  }
                }`
            }
        })
            .then(res => {
                console.log(res.data);
                history.push('/')
            })
            .catch(err => {
                console.log(err.message);
            });

        console.log(name, email, password, height)
    }

    return { handleChange, handleSubmit, state }
}

export default useRegister;