import * as http from "http";
import { HTTPException } from "../http/http_exception";

export type SocketHandlerListener = (
    ws: WebSocket,
    request: http.IncomingMessage,
) => Promise<void> | void;

export class Socket {
    /** HTTP 웹 소켓 연결에서 예외 처리를 대신 처리해주는 일종의 핸들러입니다. */
    static delegate(listener: SocketHandlerListener) {
        return async (ws: WebSocket, request: http.IncomingMessage) => {
            try {
                await listener(ws, request);
            } catch (error) {
                error instanceof HTTPException
                    ? ws.close(4000 + error.code, error.message)
                    : ws.close(1011, "Internal Server Error");
            }
        }
    }
}