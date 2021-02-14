/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'react';
import { SocketAction } from './SocketAction';

export type SocketReducer<T = any> = (config: {
    action: SocketAction<T>;
    dispatch: Dispatch<any>;
    history: any;
}) => void;
