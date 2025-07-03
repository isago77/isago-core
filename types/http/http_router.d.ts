import { HTTPConnection } from "./http_connection";
import { HTTPHandler } from "./http_handler";
/**
 * 해당 클래스는 URL 경로에 따라 요청을 적절한 HTTP 핸들러로 위임하는 계층형 라우터입니다.
 *
 * - 각 인스턴스는 하나의 경로와 해당 경로를 처리할 핸들러를 가집니다.
 * - 자식 라우터(children)를 통해 트리 구조를 형성하며, 재귀적으로 요청을 위임시킵니다.
 * - 경로가 완전히 소모되거나, 중간에서 핸들러가 없을 경우에는 현재 핸들러가 요청을 처리하게 됩니다.
 */
export declare class HTTPRouter {
    path: string;
    handler?: HTTPHandler;
    children?: HTTPRouter[];
    constructor(path: string, handler?: HTTPHandler, children?: HTTPRouter[]);
    handle(connection: HTTPConnection): void;
    /** 요청 처리 작업을 사용자 요청 경로에 해당하는 HTTP 핸들러에게 위임합니다. */
    delegate(connection: HTTPConnection): void;
    /** 요청 처리 작업을 자기 자신을 기준으로 HTTP 핸들러에게 위임합니다. */
    perform(connection: HTTPConnection): void;
}
