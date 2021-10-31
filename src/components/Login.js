
import { Input } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
function Login () {
    // misc
    const history = useHistory()

    // handler
    function registerPageHandler (e) {
        e.preventDefault()
        history.push('/register')

    }
    // useEffect

    return (
        <div className = 'color-DV display-flex-column gap-1'>
            <h1 style = {{ fontFamily: 'Roboto' }} >Login</h1>

            <div className = 'display-flex-column gap-1' gap >
                <Input size = 'mini' placeholder = 'Email' style = {{ width: '200px' }} />
                <Input size = 'mini' placeholder = 'Password' style = {{ width: '200px' }} />
            </div>

            <div>
                <button className = 'basic-button medium-violet color-W '>Login</button>
            </div>
            <div className = 'display-flex-column'>
                <label onClick = { registerPageHandler }>Create new account</label>
                <label>Forgot password</label>
            </div>
        </div>
    )
}

export default Login
