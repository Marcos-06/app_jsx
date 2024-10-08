import { client } from './lib/apollo.ts'
import { ApolloProvider } from '@apollo/client'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
