import { atom } from "recoil";
//내 이름
export const value1 = atom({ key: "value1", default: "" });
//상대방 이름
export const value2 = atom({ key: "value2", default: "" });
//경사, 조사, 기타
export const value3 = atom({ key: "value3", default: "" });
export const value3_add = atom({ key: "value3_add", default: "" });
export const value4 = atom({ key: "value4", default: "" }); // 길이
export const value5 = atom({ key: "value5", default: "" }); // 친밀도
export const value6 = atom({ key: "value6", default: "" }); // 말투

export const result= atom({ key: "result", default: 
'' }); // 결과
