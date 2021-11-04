
import { useState } from 'react'

import Cookies from 'js-cookie'

import { Input,Dimmer,Loader } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { LOGIN_USER_MUTATION } from '../graphql/mutations/user'

import 'semantic-ui-css/semantic.min.css'
function Login () {

    // state
    const [ loginSyntax,setLoginSyntax ] = useState({})
    const [ login,setLogin ] = useState({
        email: '',
        password: '',
    })

    // misc
    const history = useHistory()

    // mutation
    const [ L_USER, { data: L_DATA,loading: L_LOADING } ] = useMutation(LOGIN_USER_MUTATION,{
        onError(e) {
            setLoginSyntax(e.graphQLErrors[0].extensions.errors)
        },
        onCompleted: (val) => {
            setLoginSyntax('')
            Cookies.set('token', val.loginUser.loginToken , { sameSite: 'strict' } )
            history.push('/home')
        }
    })
    // handler
    function registerPageHandler (e) {
        e.preventDefault()
        history.push('/register')

    }

    function loginHandler (e) {
        e.preventDefault()
        L_USER({
            variables: {
                email: login.email,
                password: login.password
            }
        })
    }

    function onChange (e) {
        const { name,value } = e.target
        setLogin( (val) => ({ ...val, [name]:value }) )
    }
    // useEffect

    return (
        <div className = 'color-DV display-flex-column gap-1'>
            { L_LOADING ? (

                <Dimmer active inverted>
                    <Loader inverted left />
                </Dimmer>

            ) : '' }
            <h1 style = {{ fontFamily: 'Roboto' }} >Login</h1>
            <div className = 'display-flex-column gap-1' gap >
                <label className = 'catch-error'>{ loginSyntax?.email }</label>
                <Input
                    value = { login.email }
                    name = 'email'
                    onChange = { onChange }
                    size = 'mini' placeholder = 'Email' style = {{ width: '200px' }} />
                <Input
                    type = 'password'
                    value = { login.password }
                    name = 'password'
                    onChange = { onChange }
                    size = 'mini' placeholder = 'Password' style = {{ width: '200px' }} />
            </div>

            <div>
                <button
                    onClick = { loginHandler }
                    className = 'basic-button medium-violet color-W '>Login</button>
            </div>
            <div className = 'display-flex-column'>
                <label onClick = { registerPageHandler }>Create new account</label>
                <label>Forgot password</label>
            </div>

        </div>
    )
}

export default Login
