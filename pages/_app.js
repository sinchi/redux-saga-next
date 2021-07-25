import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/js/dist/popover.js'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { getStore } from '../src/getStore'
import { getCurrentUserAction } from '../src/actions'

const store = getStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
store.dispatch(getCurrentUserAction('1'));

export default MyApp
