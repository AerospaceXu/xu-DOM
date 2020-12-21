import { QueryParam } from './types/QueryParam';
export declare class XQuery {
    elements: Element[];
    oldApi: XQuery | null;
    constructor(queryParam: QueryParam);
    find(selector: string): XQuery;
    end(): XQuery | null;
    each(fn: (ele: Element, index?: number) => void): void;
    parent(): XQuery;
    children(): XQuery;
    addClass(className: string): this;
}
