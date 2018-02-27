import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware'
import reducer from './ducks/Reducer';

export default createStore( reducer, applyMiddleware( reduxPromiseMiddleware()) );


