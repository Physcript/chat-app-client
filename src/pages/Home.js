

import { Grid,Container } from 'semantic-ui-react'

// components
import Login from '../components/Login'
import ViewRoom from '../components/ViewRoom'

import 'semantic-ui-css/semantic.min.css'
function Home () {
    return (
        <div>
            <Container >
                <Grid stackable className = 'height-100vh middle aligned' >
                    <Grid.Row centered >
                        <Grid.Column width = { 6 } only = 'computer' >
                            <Login />
                        </Grid.Column>
                        <Grid.Column computer = { 6 } tablet = { 10 }  >
                            <ViewRoom />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}
export default Home
