import {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER_MUTATION } from './registerMutationGql';
import useFetch from "../../utils/useFetch";

const useRegister = () => {
    const [ state, setState ] = useState({
        name: '',
        email: '',
        password: '',
        height: ''
    })
    const [isPending, setIsPending] = useState(false)
    const [isFormFilled, setIsFormFilled] = useState(false)
    const navigate = useNavigate()
    const { query } = useFetch()

    const handleChange = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
    }

    useEffect(() => {
        setIsFormFilled(!Object.values(state).some(value => value === ''))
    }, [state]);

    const handleSubmit = (e) => {
        e.preventDefault();
        query(REGISTER_MUTATION(state.name, state.email, state.password, state.height), res => {
            navigate('/', { replace: true })
        }, 'post' )
    };

    return { handleChange, handleSubmit, state, isFormFilled }
}

export default useRegister;
