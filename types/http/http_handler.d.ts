import * as http from "http";
import { HTTPConnection } from "./http_connection";
export type HTTPHandlerCallback = {
    put?: HTTPHandlerListener;
    get?: HTTPHandlerListener;
    head?: HTTPHandlerListener;
    post?: HTTPHandlerListener;
    patch?: HTTPHandlerListener;
    delete?: HTTPHandlerListener;
};
export type HTTPHandlerListener = (request: http.IncomingMessage, response: http.ServerResponse, requestBody: Buffer) => Promise<void> | void;
export declare class HTTPHandler {
    callback: HTTPHandlerCallback;
    constructor(callback: HTTPHandlerCallback);
    /** 주어진 [HTTPConnection]을 사용해 이 핸들러가 요청을 처리합니다. */
    delegate(connection: HTTPConnection): void;
}
