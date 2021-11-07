

import { useState,useEffect } from 'react'
import { Icon,Segment} from 'semantic-ui-react'
import { useQuery,useMutation,useSubscription } from '@apollo/client'

import { GET_ROOM_QUERY } from '../graphql/queries/room'
import { JOIN_ROOM_MUTATION,JOIN_ROOM_SUBSCRIPTION } from '../graphql/mutations/room'

// subs query
import { REFRESH_ROOM_OUT_USER_SUBSCRIPTION } from '../graphql/subscription/room'

function Rooms ({ JR,SA,RR}) {

    const [room,setRoom] = useState([])

    const { data,refetch } = useQuery(GET_ROOM_QUERY)

    const [ joinRoom , { data:JRData,loading:JRLoading,error:JRError } ] = useMutation(JOIN_ROOM_MUTATION,{
        onCompleted: (val) => {
            SA(val.joinRoom)
            JR("ROOM")
        }
    })

    const { data: JOIN_DATA,loading: JOIN_LOADING,error: JOIN_ERROR } = useSubscription(JOIN_ROOM_SUBSCRIPTION,{

    })
    const { data: userOutData,loading: userOutLoding ,error: userOutError } = useSubscription(REFRESH_ROOM_OUT_USER_SUBSCRIPTION)


    async function join (keys) {
        JR("LOADING")
        const roomId = keys
        joinRoom({
            variables: {
                roomId
            }
        })
    }


    useEffect( () =>{

        if(JOIN_DATA) abc()
        if(data) abd()


        function abd () {
            setRoom(data.getRoom)
        }

        function abc () {
            refetch()
        }


    },[JOIN_DATA,data,userOutData])

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
