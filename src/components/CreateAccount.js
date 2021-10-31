
import { useState } from 'react'
import { Input,Dimmer,Loader,Image } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

// apollo
import { useMutation } from '@apollo/client'
// grap
import { CREATE_USER_MUTATION } from '../graphql/mutations/user'

function CreateAccount () {
    const history = useHistory()
    const [ userSyntax,setUserSyntax ] = useState({})
    const [ user,setUser ] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    })


    // apollo

    const [ C_USER , { data: userData, loading: userLoading } ] = useMutation(CREATE_USER_MUTATION,{
        onError(e){
            setUserSyntax('')
            setUserSyntax(e?.graphQLErrors[0].extensions.errors)
        },
        onCompleted: (val) => {
            setUserSyntax('')
            setUser({
                email: '',
                password: '',
                confirmPassword: '',
                displayName: ''
            })
        }
    })

    // handler

    const redirectRegister = () => {
        setTimeout(function(){
            history.push('/')
        }, 3000);
    }

    const onChange = (e) => {
        e.preventDefault()
        const { name,value } = e.target
        setUser( (val) => ({
            ...val,
            [name]:value
        }) )
    }

    const registerHandler = (e) => {
        C_USER({
            variables: {
                email: user.email,
                password: user.password,
                confirmPassword: user.confirmPassword,
                displayName: user.displayName
            }
        })
    }


    return (


        <div className = 'display-flex-column flex-center'>
            {
                userLoading ? (

                    <Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>

                ) :
                (
                    console.log('')
                ) }


                { userData ? (
                    <div className = 'display-flex-column gap-2'>
                        <Image src = 'https://res.cloudinary.com/dnnq8kne2/image/upload/v1633696698/System/ch_i7jxrf.png' wrapped />
                        <label>Account created</label>
                        <label>Redicrect in 5 sec</label>
                        { redirectRegister() }
                    </div>
                ) : (
                    <div>
                        <h1>Register account</h1>
                        <div className = 'display-flex-column gap-1' >
                            <div className = 'display-flex-column'>
                                <label className = 'catch-error'>{ userSyntax.email }</label>
                                <label>Email</label>
                                <Input
                                    onChange = { onChange }
                                    name = 'email'
                                    value = { user.email }
                                    style = {{ width: '200px'}}
                                    size = 'mini'
                                    placeholder = 'kevin.smith@yahoo.com'
                                    />
                            </div>
                            <div className = 'display-flex-column'>
                                <label className = 'catch-error'>{ userSyntax.password }</label>
                                <label>Password</label>
                                <Input
                                    onChange = { onChange }
                                    name = 'password'
                                    value = { user.password }
                                    type = 'password'
                                    style = {{ width: '200px'}}
                                    size = 'mini'
                                    placeholder = 'Minimun of 6 characters'
                                    />
                            </div>
                            <div className = 'display-flex-column'>
                                <label className = 'catch-error'>{ userSyntax.confirmPassword }</label>
                                <label>Confirm Password</label>
                                <Input
                                    onChange = { onChange }
                                    name = 'confirmPassword'
                                    value = { user.confirmPassword }
                                    type = 'password'
                                    style = {{ width: '200px'}}
                                    size = 'mini'
                                    placeholder = 'Minimun of 6 characters'
                                    />
                            </div>
                            <div className = 'display-flex-column'>
                                <label className = 'catch-error'>{ userSyntax.displayName }</label>
                                <label>Display name</label>
                                <Input
                                    onChange = { onChange }
                                    name = 'displayName'
                                    value = { user.displayName }
                                    style = {{ width: '200px'}}
                                    size = 'mini'
                                    placeholder = 'Minimun of 6 characters'
                                    />
                            </div>
                            <div>
                                <button onClick = { registerHandler } className = 'basic-button medium-violet color-W'>Register</button>
                            </div>
                            <div>
                                <label>Already member? Login here</label>
                            </div>
                        </div>
                    </div>
                ) }


        </div>
    )
}
export default CreateAccount
