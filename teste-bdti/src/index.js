import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import MyRoutes from './Routes';
import store from "./store";
import { Provider } from "react-redux";


const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <Provider store={store} >
      <MyRoutes/>
    </Provider>
  </StrictMode>,
  rootElement
);

