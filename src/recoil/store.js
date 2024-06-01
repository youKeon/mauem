import { atom } from "recoil";
//내 이름
export const myName = atom({ key: "myName", default: "" });
//상대방 이름
export const receiver = atom({ key: "receiver", default: "" });
//경사, 조사, 기타
export const messageType = atom({ key: "messageType", default: "" });
//상세 상황
export const messageType_add = atom({ key: "messageType_add", default: "" });
// 길이
export const messageLength = atom({ key: "messageLength", default: "" });
// 친밀도
export const intimacy = atom({ key: "intimacy", default: "" });
// 말투
export const speech = atom({ key: "speech", default: "" });
// 결과
export const result = atom({ key: "result", default: "" });
