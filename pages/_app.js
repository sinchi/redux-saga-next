import '../styles/globals.css'
import { Provider } from 'react-redux'
import { getStore } from '../redux-saga/getStore'
import { testAction } from '../redux-saga/actions';

const store = getStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

store.dispatch(testAction("hello"))

export default MyApp
