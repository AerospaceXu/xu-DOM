class XQuery {
  constructor(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') {
      elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
      elements = selectorOrArray;
    }
    this.elements = elements;
  }

  /*
   * 筛选操作
   */
  find(selector) {
    let arr = [];
    this.each((element) => {
      arr = arr.concat(Array.from(element.querySelectorAll(selector)));
    });
    const newAPI = new XQuery(arr);
    newAPI.oldAPI = this;
    return newAPI;
  }

  /*
   * 返回最近的一次的筛选操作
   */
  end() {
    return this.oldAPI;
  }

  /*
   * 遍历，传入 item 与 index
   */
  each(fn) {
    for (let i = 0; i < this.elements.length; i += 1) {
      fn(this.elements[i], i);
    }
  }

  /*
   * 父节点
   */
  parent() {
    const arr = [];
    this.each((node) => {
      if (arr.indexOf(node.parentNode) === -1) {
        arr.push(node.parentNode);
      }
    });
    const newAPI = new XQuery(arr);
    newAPI.oldAPI = this;
    return newAPI;
  }

  /*
   * 寻找子元素
   */
  children() {
    const arr = [];
    this.each((node) => {
      arr.push(...node.children);
    });
    const newAPI = new XQuery(arr);
    newAPI.oldAPI = this;
    return newAPI;
  }

  /*
   * 添加class
   */
  addClass(className) {
    this.each((element) => {
      element.classList.add(className);
    });
    return this;
  }
}

const $ = (selectorOrArray) => {
  return new XQuery(selectorOrArray);
};

export default $;
