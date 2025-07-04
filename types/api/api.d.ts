import * as http from "http";
import { OutgoingHttpHeaders } from "http2";
import { ServerResponse } from "http";
import { z } from "zod";
export declare class API {
    #private;
    static headers: OutgoingHttpHeaders;
    /**
     * 주어진 JSON 원시 문자열을 역직렬화하고 주어진 Zod 스키마를 이용해 타입 검증을 수행합니다.
     *
     * 해당 함수는 API 요청 본문(body)의 유효성을 검증하기 위한 목적으로 사용됩니다.
     * 외부에서 전달된 버퍼 형식의 데이터를 JSON으로 변환한 뒤,
     * 타입 안전성을 보장하기 위해 Zod 스키마에 따라 구조를 검증합니다.
     */
    static tryParseJSON<T extends z.ZodTypeAny>(object: T, given: String | Buffer): z.infer<T>;
    /** 주어진 URL을 객체로 변환하고 주어진 Zod 스키마를 이용해 타입 검증을 수행합니다. */
    static tryParseURL<T extends z.ZodTypeAny>(object: T, given: URL): z.infer<T>;
    /** 주어진 국내 전화번호 형식을 국제 표준 전화번호 형식인 E164 형식으로 변환합니다. */
    static formatToE164(phoneNumber: string): import("libphonenumber-js").E164Number;
    /** 데이터베이스 또는 서버 측에서 사용되는 표준 UUID를 생성합니다. */
    static createUUID(): string;
    static success(response: ServerResponse, object: any): void;
    /** 주어진 HTTP 요청 객체에서 URL 객체를 생성합니다. */
    static urlOf(request: http.IncomingMessage): import("url").URL;
}
