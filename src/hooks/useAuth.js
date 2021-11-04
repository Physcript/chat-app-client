

import { useState,useEffect } from 'react'

//  apollo
import { useQuery } from '@apollo/client'

// graph
import { AUTHENTICATE_HOME_QUERY } from '../graphql/queries/user'



export default function useAuth () {
    const [auth,setAuth] = useState({})
    const { data: authData, loading:authLoading, error:authError } = useQuery(AUTHENTICATE_HOME_QUERY)

    useEffect(()=>{
        setAuth(authData?.authenticateUser)
    },[authData])

    return auth

}
