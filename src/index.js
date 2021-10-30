import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Cookie from 'js-cookie'

// apollo
import { ApolloProvider,ApolloClient,InMemoryCache,split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'

// subscription
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

// connection link
const uploadLink = new createUploadLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'same-origin'
})

const authLink = setContext( (_,{headers})=> {
  const token = Cookie.get('token')
  return {
    headers:{
      ...headers,
      authentication: token ? token : ''
    }
  }
})


const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
})

const split_link = split (
  ({query}) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  authLink.concat(uploadLink)
)

const client = new ApolloClient({
  link: split_link,
  cache: new InMemoryCache(),
})


ReactDOM.render(
  <ApolloProvider client = { client }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
