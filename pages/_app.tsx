import '../styles/globals.css';

import { AppProps } from 'next/app';
import { wrapper } from '../store';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(App);
