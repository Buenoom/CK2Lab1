declare const multiply: (x: number, y: number) => number;
declare const constNumber = 1;
declare const constBoolean = true;
declare const constString = "string";
declare let varObject: {
    key: string;
};
declare let varArray: number[];
declare let varRef: any;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}
declare const data: ToJsonStringify;
declare const jsonString: string;
