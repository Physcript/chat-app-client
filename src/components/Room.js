
import { useState } from 'react'
import { Icon,Segment,Input,Form,TextArea} from 'semantic-ui-react'

import { useMutation } from '@apollo/client'
import { SEND_MESSAGE_ROOM } from '../graphql/mutations/message'

function Room ({info}) {

    const [ data,setData ] = useState(info)
    const [ message,setMessage ] = useState({
        body: ''
    })


    // mutation
    const [ myMessage, { data: M_DATA,loading: M_LOADING, error: M_ERROR } ] = useMutation(SEND_MESSAGE_ROOM)


    // handler
    const onChange = (e) => {
        const { name,value } = e.target
        setMessage( (val) => ({ ...val, [name]: value }) )
    }

    const sendMessage = (e) => {

        e.preventDefault()
        myMessage({
            variables: {
                body: message.body,
                roomId: data._id
            }
        })

        setMessage( (val) => ({...val, body: ''}) )

    }

    return (
        <div>
            <Segment>
                <div className = 'display-flex-column display-center gap-1'>
                        <div>
                            <label>{ data.name }</label>
                            <p></p>
                            <div style  ={{ maxHeight: '300px',minHeight: '300px' , overflow: 'auto'}}>
                                <Segment>
                                    <label>asd</label>
                                </Segment>
                            </div>
                        </div>
                        <div style = {{ display:'flex' , gap: '10px' }} >
                            <Input size = 'mini' placeholder = 'message' style = {{ flex:'1'  }}
                                onChange = { onChange }
                                name = 'body'
                                value = { message.body }
                            />
                            <button className = 'basic-button medium-violet color-W '
                                onClick = { sendMessage }
                            >Send</button>
                        </div>
                </div>
            </Segment>
        </div>
    )
}
export default Room
