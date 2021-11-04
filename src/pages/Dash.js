
import { useEffect, useState } from 'react'
import { Grid,Container,Loader,Segment } from 'semantic-ui-react'


// hooks
import useAuth from '../hooks/useAuth'

// components
import News from '../components/News'
import Loading from '../components/Loading'
import Headers from '../components/Headers'
import Rooms from '../components/Rooms'
import Room from '../components/Room'

// css
import '../App.css'


const Dash = () => {

    let authHook = useAuth()
    // active
    const [active,setActive] = useState('NEWS')

    // attemp to join
    const [attemp,setAttemp] = useState({})

    // auth have users
    const [auth ,setAuth] = useState({})

    useEffect(() => {

        if(authHook) verify()

        async function verify(){
            setAuth(authHook)
        }

    },[authHook])

    return (
        <div>
            <Container>
                { !auth?.valid ? (

                    <Loader active/>

                ) : (
                <Grid stackable className = 'height-100vh middle aligned'>
                    <Grid.Row centered >

                        <Grid.Column computer = { 6 } tablet = { 16 } >
                            <Grid.Column width = { 16 } >
                                <div className = 'display-flex-column gap-2' >
                                <Headers user = { auth.user } />
                                <Rooms JR = { setActive } SA = { setAttemp } />
                                </div>
                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>
                        </Grid.Column>
                        <Grid.Column computer = { 10 } tablet = { 16 }  >
                            { active === 'NEWS' && <News /> }
                            { active === 'ROOM' && <Room info = { attemp } /> }
                            { active === 'LOADING' && <Loading /> }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                ) }
            </Container>
        </div>
    )
}

export default Dash
