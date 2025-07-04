import { HTTPException } from "../http/http_exception";
/** API 핸들러에서 고의적으로 예외를 발생시킬 때 사용됩니다. */
export declare class APIError extends HTTPException {
    /** 유효하지 않은 요청 포맷일 때. */
    static INVALID_REQUEST_FORMAT: APIError;
    /** 유효하지 않은 UUID일 때. */
    static INVALID_UUID: APIError;
    /** OAuth 사용자는 지원되지 않는 기능일 때. */
    static CANNOT_OAUTH: APIError;
    /** 유효하지 않은 인증 번호를 요청했을 때. */
    static INVALID_AUTH_NUMBERS: APIError;
    /** 유효하지 않은 전화번호 인증 토큰일 때. */
    static INVALID_PHONE_NUMBER_TOKEN: APIError;
}
