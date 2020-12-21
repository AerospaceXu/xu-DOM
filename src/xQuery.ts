import { QueryParam } from './types/QueryParam';

export class XQuery {
  elements: Element[];

  oldApi: XQuery | null = null;

  constructor(queryParam: QueryParam) {
    let elements: Element[];
    if (typeof queryParam === 'string') {
      elements = Array.from(document.querySelectorAll(queryParam));
    } else if (queryParam instanceof Array) {
      elements = queryParam;
    } else {
      elements = Array.from(queryParam);
    }
    this.elements = elements;
  }

  find(selector: string) {
    let arr: Element[] = [];
    this.each((element) => {
      arr = arr.concat(Array.from(element.querySelectorAll(selector)));
    });
    const newApi = new XQuery(arr);
    newApi.oldApi = this;
    return newApi;
  }

  end() {
    return this.oldApi;
  }

  each(fn: (ele: Element, index?: number) => void) {
    this.elements.forEach((ele, index) => {
      fn(ele, index);
    });
  }

  parent() {
    const arr: Element[] = [];
    this.each((element) => {
      const { parentElement } = element;
      if (parentElement && arr.indexOf(parentElement) === -1) {
        arr.push(parentElement);
      }
    });
    const newApi = new XQuery(arr);
    newApi.oldApi = this;
    return newApi;
  }

  children() {
    const arr: Element[] = [];
    this.each((element) => {
      arr.push(...element.children);
    });
    const newApi = new XQuery(arr);
    newApi.oldApi = this;
    return newApi;
  }

  addClass(className: string) {
    this.each((element) => {
      element.classList.add(className);
    });
    return this;
  }
}
