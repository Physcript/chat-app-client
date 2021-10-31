

import { gql } from '@apollo/client'


export const CREATE_USER_MUTATION = gql`
    mutation createUser (
        $email: String
        $password: String
        $confirmPassword: String
        $displayName: String
    ){
        createUser (
            email: $email
            password: $password
            confirmPassword: $confirmPassword
            displayName: $displayName
        )
    }
`
