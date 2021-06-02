// @ts-nocheck
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'virtual:windi.css'

import App from './App';
import { store } from './state/store';
import { MOUNT_ELEMENT_ID, checkEntry, injectCss, autoReload, listenServiceWorker } from './utils';

checkEntry();
injectCss();
autoReload();
listenServiceWorker();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById(MOUNT_ELEMENT_ID)
);
