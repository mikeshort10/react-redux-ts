// 1) Find and Replace the term 'FindandReplace' with UpperCamelCase name for reducer and corresponding action creators and handlers.
// 2) Find and Replace the tern 'FindReplace' (no 'and') with UPPERCASE name for action types.
// 3) Change 'host' and 'endpoint' to interact with your server.
// 4) Change name of this directory.
// 5) See ../../containers/FindandReplace/index.tsx

import axios from 'axios';
import { Dispatch } from 'redux';

const host:string = `http://localhost:3000/`;

export interface IFindandReplace {
    // create custom initial state type here
}

const initialState:IFindandReplace = {

};

/** Action Types */

const actionTypesFindandReplace = {
    REQUEST_FINDREPLACE_CREATE: 'REQUEST_FINDREPLACE_CREATE',
    RECEIVE_FINDREPLACE_CREATE: 'RECEIVE_FINDREPLACE_CREATE',
    ERROR_FINDREPLACE_CREATE: 'ERROR_FINDREPLACE_CREATE',
    REQUEST_FINDREPLACE_READ: 'REQUEST_FINDREPLACE_READ',
    RECEIVE_FINDREPLACE_READ: 'RECEIVE_FINDREPLACE_READ',
    ERROR_FINDREPLACE_READ: 'ERROR_FINDREPLACE_READ',
    REQUEST_FINDREPLACE_UPDATE: 'REQUEST_FINDREPLACE_UPDATE',
    RECEIVE_FINDREPLACE_UPDATE: 'RECEIVE_FINDREPLACE_UPDATE',
    ERROR_FINDREPLACE_UPDATE: 'ERROR_FINDREPLACE_UPDATE',
    REQUEST_FINDREPLACE_DELETE: 'REQUEST_FINDREPLACE_DELETE',
    RECEIVE_FINDREPLACE_DELETE: 'RECEIVE_FINDREPLACE_DELETE',
    ERROR_FINDREPLACE_DELETE: 'ERROR_FINDREPLACE_DELETE',
};

/** Action Interfaces */

interface IFindandReplaceRequest {
    type: string;
}

interface IFindandReplaceCreate {
    type: string;
    payload: {
        // custom type for returned data from server on create/PUT
    };
}

interface IFindandReplaceRead {
    type: string;
    payload: {
        // custom type for returned data from server on read/GET
    };
}

interface IFindandReplaceUpdate {
    type: string;
    payload: {
        // custom type for returned data from server on update/POST
    };
}

interface IFindandReplaceDelete {
    type: string;
    payload: {
        // custom type for returned data from server on delete/DELETE
    };
}

interface IError {
    type: string;
    payload: {
        error: Error;
    }
}

type IAction = IFindandReplaceCreate | IFindandReplaceRead | IFindandReplaceUpdate | IFindandReplaceDelete; 

/** Action Creators */

const requestFindandReplaceCreate = ():IFindandReplaceRequest => {
    return {
        type: actionTypesFindandReplace.REQUEST_FINDREPLACE_CREATE,
    };
}

const receiveFindandReplaceCreate = (data:IFindandReplace):IFindandReplaceCreate => {
    return {
        type: actionTypesFindandReplace.RECEIVE_FINDREPLACE_CREATE,
        payload: { data },
    };
}

const errorFindandReplaceCreate = (error:Error):IError => {
    return {
        type: actionTypesFindandReplace.ERROR_FINDREPLACE_CREATE,
        payload: { error },
    };
}

const requestFindandReplaceRead = ():IFindandReplaceRequest => {
    return {
        type: actionTypesFindandReplace.REQUEST_FINDREPLACE_READ,
    };
}

const receiveFindandReplaceRead = (data:IFindandReplace):IFindandReplaceRead => {
    return {
        type: actionTypesFindandReplace.RECEIVE_FINDREPLACE_READ,
        payload: { data },
    };
}

const errorFindandReplaceRead = (error:Error):IError => {
    return {
        type: actionTypesFindandReplace.ERROR_FINDREPLACE_READ,
        payload: { error },
    };
}

const requestFindandReplaceUpdate = ():IFindandReplaceRequest => {
    return {
        type: actionTypesFindandReplace.REQUEST_FINDREPLACE_UPDATE,
    };
}

const receiveFindandReplaceUpdate = (data:IFindandReplace):IFindandReplaceUpdate => {
    return {
        type: actionTypesFindandReplace.RECEIVE_FINDREPLACE_UPDATE,
        payload: { data },
    };
}

const errorFindandReplaceUpdate = (error:Error):IError => {
    return {
        type: actionTypesFindandReplace.ERROR_FINDREPLACE_UPDATE,
        payload: { error },
    };
}

const requestFindandReplaceDelete = ():IFindandReplaceRequest => {
    return {
        type: actionTypesFindandReplace.REQUEST_FINDREPLACE_DELETE,
    };
}

const receiveFindandReplaceDelete = (data:IFindandReplace):IFindandReplaceDelete => {
    return {
        type: actionTypesFindandReplace.RECEIVE_FINDREPLACE_DELETE,
        payload: { data },
    };
}

const errorFindandReplaceDelete = (error:Error):IError => {
    return {
        type: actionTypesFindandReplace.ERROR_FINDREPLACE_DELETE,
        payload: { error },
    };
}

/** Functions to Update State */

const handleRequest = (state, payload) => {
    return {
        ...state,
    };
}

const handleFindandReplaceCreateReceive = (state, payload) => {
    return {
        ...state,
        ...payload.data
    };
}

const handleFindandReplaceReadReceive = (state, payload) => {
    return {
        ...state,
        ...payload.data
    };
}

const handleFindandReplaceUpdateReceive = (state, payload) => {
    return {
        ...state,
        ...payload.data
    };
}

const handleFindandReplaceDeleteReceive = (state, payload) => {
    return {
        ...state,
        ...initialState
    };
}

const handleError = (state, payload) => {
    return {
        ...state,
        error: payload.error,
    };
}

/** Call Update State Based on Action Type */

const handlers = {
    [actionTypesFindandReplace.REQUEST_FINDREPLACE_CREATE]: handleRequest,
    [actionTypesFindandReplace.RECEIVE_FINDREPLACE_CREATE]: handleFindandReplaceCreateReceive,
    [actionTypesFindandReplace.ERROR_FINDREPLACE_CREATE]: handleError,
    [actionTypesFindandReplace.REQUEST_FINDREPLACE_READ]: handleRequest,
    [actionTypesFindandReplace.RECEIVE_FINDREPLACE_READ]: handleFindandReplaceReadReceive,
    [actionTypesFindandReplace.ERROR_FINDREPLACE_READ]: handleError,
    [actionTypesFindandReplace.REQUEST_FINDREPLACE_UPDATE]: handleRequest,
    [actionTypesFindandReplace.RECEIVE_FINDREPLACE_UPDATE]: handleFindandReplaceUpdateReceive,
    [actionTypesFindandReplace.ERROR_FINDREPLACE_UPDATE]: handleError,
    [actionTypesFindandReplace.REQUEST_FINDREPLACE_DELETE]: handleRequest,
    [actionTypesFindandReplace.RECEIVE_FINDREPLACE_DELETE]: handleFindandReplaceDeleteReceive,
    [actionTypesFindandReplace.ERROR_FINDREPLACE_DELETE]: handleError,
};

/** Reducer */

export const reducerFindandReplace = (state:IFindandReplace = initialState, action:IAction) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action.payload) : state;
}

/** CRUDy Async Action Handlers */

export const createFindandReplace = (data:IFindandReplace) => {
    return (dispatch: Dispatch):void => {
        dispatch(requestFindandReplaceCreate());
        axios
            .put(`${host}endpoint`, data)
            .then(data => dispatch(receiveFindandReplaceCreate(data)))
            .catch(err => dispatch(errorFindandReplaceCreate(err)));
    };
}

export const readFindandReplace = (data:IFindandReplace) => {
    return (dispatch: Dispatch):void => {
        dispatch(requestFindandReplaceRead());
        axios
            .get(`${host}endpoint`, data)
            .then(data => dispatch(receiveFindandReplaceRead(data)))
            .catch(err => dispatch(errorFindandReplaceRead(err)));
    };
}

export const updateFindandReplace = (data:IFindandReplace) => {
    return (dispatch: Dispatch):void => {
        dispatch(requestFindandReplaceUpdate());
        axios
            .post(`${host}endpoint`, data)
            .then(data => dispatch(receiveFindandReplaceUpdate(data)))
            .catch(err => dispatch(errorFindandReplaceUpdate(err)));
    };
}

export const deleteFindandReplace = (data:IFindandReplace) => {
    return (dispatch: Dispatch):void => {
        dispatch(requestFindandReplaceDelete());
        axios
            .delete(`${host}endpoint`, data)
            .then(data => dispatch(receiveFindandReplaceDelete(data)))
            .catch(err => dispatch(errorFindandReplaceDelete(err)));
    };
}

