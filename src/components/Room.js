
import { useState,useEffect } from 'react'
import moment from 'moment'
import { Icon,Segment,Input,Image,Label} from 'semantic-ui-react'

import { useMutation,useQuery,useSubscription } from '@apollo/client'
import { SEND_MESSAGE_ROOM } from '../graphql/mutations/message'
import { GET_MESSAGE_ROOM } from '../graphql/queries/messege'

function Room ({info}) {

    const [ data,setData ] = useState(info)
    const [ message_data, setMessage_Data ] = useState([])
    const [ message,setMessage ] = useState({
        body: ''
    })

    // query
    const { data: RD_DATA ,loading: RD_LOADING, error: RD_ERROR } = useQuery(GET_MESSAGE_ROOM,{
        variables: {
            roomId: data._id
        }
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

    useEffect( () => {
        if(RD_DATA) getMessage()

        async function getMessage() {
            setMessage_Data(RD_DATA.messageRoom)
        }

    },[RD_DATA])

    return (
        <div>
            <Segment>
                <div className = 'display-flex-column display-center gap-1'>
                        <div>
                            <label>{ data.name }</label>
                            <p></p>
                            <div className = '' style  ={{ maxHeight: '300px',minHeight: '300px', overflow: 'auto' , display: 'flex', flexDirection: 'column-reverse'}}>

                                { message_data?.map( (val) => {
                                    return(
                                        <div key = { val._id } className = 'display-flex-column gap-1' style = {{ margin: '20px 0', width: '50%' }}>

                                            <div className = 'display-flex-row flex-center chat-header gap-1'>
                                                <Image style = {{ width: '20px' }} src = { val.user.image } />
                                                <label>{ val.user.displayName }</label>
                                                <Label size = 'tiny'> { moment( val.createdAt).fromNow() } </Label>
                                            </div>
                                                <p style = {{ textIndent: '10px' }}> { val.body } </p>
                                        </div>

                                    )
                                })  }

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
