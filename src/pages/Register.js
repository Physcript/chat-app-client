
import { Grid,Container,Icon } from 'semantic-ui-react'

// components
import CreateAccount from '../components/CreateAccount'

function Register () {
    return (
        <div>
            <Container >
                <Grid stackable className = 'height-100vh middle aligned' >
                    <Grid.Row centered >
                        <Grid.Column computer = { 6 } tablet = { 12 }>
                            <CreateAccount />
                        </Grid.Column>
                        <Grid.Column computer = { 6 } only = 'computer'  >
                            Register design
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Register
