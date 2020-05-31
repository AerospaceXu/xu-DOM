/*
 * 创建一个或多个dom
 */
const create = (HTML) => {
  const template = document.createElement('template');
  template.innerHTML = HTML.trim();
  return template.content.firstChild;
};

/*
 * 为目标节点新增相邻节点
 */
const after = (node, next) => {
  node.parentNode.insertBefore(next, node.nextSibling);
};
const before = (node, prev) => {
  node.parentNode.insertBefore(prev, node);
};

/*
 * 为目标节点添加子节点
 */
const append = (parent, child) => {
  parent.appendChild(child);
};

/*
 * 为目标节点新增父节点
 */
const wrap = (node, parent) => {
  before(node, parent);
  append(parent, node);
};

/*
 * 删除节点
 */
const remove = (node) => {
  node.parentNode.removeChild(node);
  return node;
};

/*
 * 删除所有节点
 */
const empty = (node) => {
  const arr = [];
  let firstChild = node.firstChild;
  while (firstChild) {
    arr.push(remove(node.firstChild));
    firstChild = node.firstChild;
  }
  return arr;
};

/*
 * 属性相关操作，输入两个参数时查询，三个参数时赋值
 */
const attr = (node, name, value) => {
  if (value) {
    node.setAttribute(name, value);
  } else {
    return node.getAttribute(name);
  }
};

/*
 * 为节点添加文本或查看节点文本
 */
const text = (node, string) => {
  if (!string) {
    if ('innerText' in node) {
      return node.innerText;
    }
    return node.textContent;
  }
  if ('innerText' in node) {
    return node.innerText = string;
  }
  return node.textContent(string);
};

/*
 * 修改或查看节点HTML
 */
const html = (node, HTML) => {
  if (!HTML) {
    return node.innerHTML;
  }
  return node.innerHTML = HTML;
};

/*
 * 修改或查看节点的style属性
 */
const style = (node, name, value) => {
  if (!name) {
    return node.style;
  }
  if (typeof name === 'string') {
    if (!value) {
      return node.style[name];
    } else {
      return node.style[name] = value;
    }
  }
  for (let key in name) {
    if (name.hasOwnProperty(key)) {
      node.style[key] = name[key];
    }
  }
  return name;
};

/*
 * class相关操作
 */
const classOperate = {
  add(node, className) {
    node.classList.add(className);
  },
  remove(node, className) {
    node.classList.remove(className);
  },
  has(node, className) {
    return node.classList.contains(className);
  }
};

/*
 * 事件绑定
 */
const on = (node, eventName, fn) => {
  node.addEventListener(eventName, fn);
};
const off = (node, eventName, fn) => {
  node.removeEventListener(eventName, fn);
};

/*
 * 寻找DOM节点
 */
const find = (selector, node) => {
  const divs = (node || document).querySelectorAll(selector);
  return divs.length === 1 ? divs[0] : Array.from(divs);
};
const parent = (node) => {
  return node.parentNode;
};
const children = (node) => {
  return node.children;
};
const siblings = (node) => {
  return Array.from(node.parentNode.children).filter(n => n !== node);
};
const nextNode = (node) => {
  let x = node.nextSibling;
  while (x && x.nodeType === 3) {
    x = x.nextSibling;
  }
  return x;
};
const prevNode = (node) => {
  let x = node.previousSibling;
  while (x && x.nodeType === 3) {
    x = x.previousSibling;
  }
  return x;
};
const everyNode = (nodeList, fn) => {
  for (let i = 0; i < nodeList.length; i++) {
    fn(nodeList[i]);
  }
};
const index = (node) => {
  const list = children(node.parentNode);
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === node) {
      break;
    }
  }
  return i;
};

export const xu = {
  create,
  after,
  before,
  append,
  wrap,
  remove,
  empty,
  attr,
  text,
  html,
  style,
  classOperate,
  on,
  off,
  find,
  parent,
  children,
  siblings,
  nextNode,
  prevNode,
  everyNode,
  index
};