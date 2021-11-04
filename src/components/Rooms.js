

import { useState,useEffect } from 'react'
import { Icon,Segment} from 'semantic-ui-react'
import { useQuery,useMutation } from '@apollo/client'

import { GET_ROOM_QUERY } from '../graphql/queries/room'
import { JOIN_ROOM_MUTATION } from '../graphql/mutations/room'

function Rooms ({ JR,SA }) {

    const [room,setRoom] = useState([])
    const roomData = useQuery(GET_ROOM_QUERY,{
        onCompleted: (val) => {
            setRoom(val.getRoom)
        }
    })
    const [ joinRoom , { data:JRData,loading:JRLoading,error:JRError } ] = useMutation(JOIN_ROOM_MUTATION,{
        onCompleted: (val) => {
            SA(val.joinRoom)
            JR("ROOM")
        }
    })

    async function join (keys) {
        JR("LOADING")
        const roomId = keys
        joinRoom({
            variables: {
                roomId
            }
        })
    }

    return (
        <div>
            {
                room.map( (val) => {
                    return (

                        <Segment className = 'display-flex-space-between' key = { val._id }
                            onClick = { (e) => {
                                join(val._id)
                            } }
                            style = {{ cursor: 'pointer' }}
                        >
                            <div >
                                <label>{ val.name }</label>
                            </div>
                            <div>
                                <label>{ val.count } </label>
                                <Icon name = 'user' />
                            </div>
                    </Segment>
                    )
                })
            }
        </div>
    )

}
export default Rooms
