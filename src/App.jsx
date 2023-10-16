import { Provider } from 'react-redux'
import Store from './store/Store'
import Page from './component/Page'

function App() {

  return (
    <Provider store={Store}>
      <Page />
    </Provider>
  )
}

export default App
