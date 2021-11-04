
import { Segment,Loader } from 'semantic-ui-react'


 function Loading () {
    return (
        <Segment style  ={{ minHeight: '400px' }}>
            <Loader active/>
        </Segment>
    )
}


export default Loading
