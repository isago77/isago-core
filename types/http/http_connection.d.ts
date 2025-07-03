import * as http from "http";
export declare class HTTPConnection {
    #private;
    /** 요청 경로를 '/' 기준으로 분할한 배열 */
    paths: string[];
    /** Node.js의 HTTP 요청 객체 */
    request: http.IncomingMessage;
    /** Node.js의 HTTP 응답 객체 */
    response: http.ServerResponse;
    constructor(
    /** 요청 경로를 '/' 기준으로 분할한 배열 */
    paths: string[], 
    /** Node.js의 HTTP 요청 객체 */
    request: http.IncomingMessage, 
    /** Node.js의 HTTP 응답 객체 */
    response: http.ServerResponse);
    /** 소비되기 직전, 남은 경로 중 첫 번째 경로를 반환합니다. */
    get fristPath(): string;
    /** 현재 경로에서 첫 번째 경로를 제거하고 제거된 해당 경로를 그대로 반환합니다. */
    consume(): HTTPConnection;
    /** 주어진 클라이언트 요청을 기반으로 HTTPConnection 인스턴스를 생성합니다. */
    static fromServer(request: http.IncomingMessage, response: http.ServerResponse): HTTPConnection;
}
