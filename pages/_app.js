import '../styles/globals.css'
import { Provider } from 'react-redux'
import { getStore } from '../redux-saga/getStore'
import { getCurrentUserAction, setCurrentUserAction } from '../redux-saga/actions';

const store = getStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
store.dispatch(getCurrentUserAction());

export default MyApp
