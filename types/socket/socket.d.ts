import * as http from "http";
export type SocketHandlerListener = (ws: WebSocket, request: http.IncomingMessage) => Promise<void> | void;
export declare class Socket {
    /** HTTP 웹 소켓 연결에서 예외 처리를 대신 처리해주는 일종의 핸들러입니다. */
    static delegate(listener: SocketHandlerListener): (ws: WebSocket, request: http.IncomingMessage) => Promise<void>;
}
