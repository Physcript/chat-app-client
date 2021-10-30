
import { Segment,Icon } from 'semantic-ui-react'

function ViewRoom () {
    return (
        <div className = 'display-flex-column gap-2 color-DV'>
            <div>
                <h1 style = {{ fontFamily: 'Roboto' }}>New way to enjoy <br/>chatting with a stranger</h1>
                <p>Chat , Message , Meet new other people in one app <br /><label>For free</label></p>
            </div>
            <div >
                <Segment className = 'display-flex-space-between'>
                    <div>
                        <Icon name = 'circle green' />
                        <label>Public chat room </label>
                    </div>
                    <div className = 'display-flex-row gap-1'>
                        <label>24</label>
                        <Icon name = 'user' />
                    </div>
                </Segment>
            </div>
            <div className = 'display-flex-column only-mobile'>
                <label>Already member? Login here</label>
                <label>Register now</label>
            </div>
        </div>

    )
}

export default ViewRoom
