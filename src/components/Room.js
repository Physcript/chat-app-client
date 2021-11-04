
import { useState } from 'react'
import { Icon,Segment,Input,Form,TextArea} from 'semantic-ui-react'

function Room ({info}) {

    const [ data,setData ] = useState(info)

    return (
        <div>
            <Segment>
                <div className = 'display-flex-column display-center gap-1'>
                        <div style  ={{ maxHeight: '300px', overflow: 'auto'}} >
                            <label>{ data.name }</label>

                                <Segment style = {{ margin: '10px' }}>

                                <p>test asd</p>

                                </Segment>
                                <Segment style = {{ margin: '10px' }}>

                                <p>test asd</p>

                                </Segment>

                        </div>
                        <div style = {{ display:'flex' , gap: '10px' }} >
                            <Input size = 'mini' placeholder = 'message' style = {{ flex:'1'  }}/>
                            <button className = 'basic-button medium-violet color-W ' >Send</button>
                        </div>
                </div>
            </Segment>
        </div>
    )
}
export default Room
