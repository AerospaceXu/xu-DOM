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

export const xu = {
  create,
  after,
  before,
  append,
  wrap,
  remove,
  empty,
  attr
};