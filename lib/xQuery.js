export class XQuery {
    constructor(queryParam) {
        this.oldApi = null;
        let elements;
        if (typeof queryParam === 'string') {
            elements = Array.from(document.querySelectorAll(queryParam));
        }
        else if (queryParam instanceof Array) {
            elements = queryParam;
        }
        else {
            elements = Array.from(queryParam);
        }
        this.elements = elements;
    }
    find(selector) {
        let arr = [];
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
    each(fn) {
        this.elements.forEach((ele, index) => {
            fn(ele, index);
        });
    }
    parent() {
        const arr = [];
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
        const arr = [];
        this.each((element) => {
            arr.push(...element.children);
        });
        const newApi = new XQuery(arr);
        newApi.oldApi = this;
        return newApi;
    }
    addClass(className) {
        this.each((element) => {
            element.classList.add(className);
        });
        return this;
    }
}
