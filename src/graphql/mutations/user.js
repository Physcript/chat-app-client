

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
export const LOGIN_USER_MUTATION = gql`
    mutation loginUser (
        $email: String
        $password: String
    ){
        loginUser (
            email: $email
            password: $password
        ){
            loginToken
        }
    }
`

export const CLOSE_WINDOW_USER_MUTATION = gql`
    mutation {
        closeWindow
    }
`
