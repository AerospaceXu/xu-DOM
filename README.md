# xu-DOM

仿 JQuery 的 DOM Api 封装。

其中：

1. dom.js 是简单的封装；
2. xQuery.ts 是类似 jQuery 的封装方法。

包括以下方法：

## xQuery.ts

```js
$('#app')
  .find('.center')
  .addClass('white')
  .each((element, index) => {
    console.log(element);
  })
  .parent()
  .end()
```

## dom.js

### 1 增

#### 1.1 `create(HTML)`

可以创建多个嵌套的元素。

```JavaScript
xu.create('<span>Hello, <strong>world</strong></span>');
```

#### 1.2 `before(node, prev)`

为 node 节点添加相邻的、在前一位的 prev 节点。

```JavaScript
const div2 = document.querySelector('div2');

const test = xu.create('<div></div>');

xu.before(div2, test); // 将 test 节点放置于 div2 的前一位的相邻位置
```

#### 1.3 `after(node, next)`

为 node 节点添加相邻的、后一位的 next 节点。

```JavaScript
const div1 = document.querySelector('div1');
const test = xu.create('<div></div>');

xu.after(div1, test); // 将 test 节点放置于 div1 的后一位的相邻位置
```

#### 1.4 `append(parent, child)`

添加 child 节点为 parent 节点的子节点。

```JavaScript
const div1 = document.querySelector('div1');
const test = xu.create('<div></div>');

xu.append(div1, test); // 将 test 添加为 div1 的子节点
```

#### 1.5 `wrap(parent, child)`

为 child 节点添加 parent 节点。

```JavaScript
const div1 = document.querySelector('div1');
const test = xu.create('<div></div>');

xu.wrap(test, div1); // 用 test 作为父节点包裹 div1
```

### 2 删

#### 2.1 `remove(node)`

删除 node 节点，同时返回删除的节点。

```JavaScript
const div1 = document.querySelector('div1');
const deletedDiv = xu.remove(div1);
console.log(deletedDiv);
```

#### 2.2 `empty(node)`

删除 node 下的所有子节点，同时返回删除的节点数组。

```JavaScript
const div1 = document.querySelector('div1');
const deletedDivs = xu.empty(div1);
console.log(deletedDivs);
```

### 3 改查

#### 3.1 `attr(node, name, value)`

1. 输入两个参数时，返回 node 上的 name 属性的属性值；
2. 输入三个参数时，赋值或修改 node 上的 name 属性的属性值。

```JavaScript
const div1 = document.querySelector('div1');

xu.attr(div1, title, '徐航宇真帅'); // 新增 title 属性
console.log(xu.attr(div1, title)); // 查询 title 属性
```

#### 3.2 `text(node, string)`

查询或修改该节点的文本节点。

#### 3.3 `html(node, HTML)`

查询或修改该节点的HTML代码。

#### 3.4 `style(node, name, value)`

查询或修改该节点的style属性。

#### 3.5 `classOperate`

`add(node, className)`

新增该节点的class属性。

`remove(node, className)`

移除该节点的class属性。

`has(node, className)`

判断改节点是否具有该class属性。

#### 3.6 `on`

新增该节点的事件监听。

#### 3.7 `off`

移除该节点的事件监听。

#### 3.8 `find(selector, node)`

寻找 node 节点下的拥有 selector 选择器的节点。

#### 3.9 `parent(node)`

找到 node 的父节点。

#### 3.10 `children(node)`

找到 node 的子节点。

#### 3.11 `siblings(node)`

找到 node 的兄弟节点（除了自己）。

#### 3.12 `nextNode(node)`

找到 node 的下一个节点。

#### 3.13 `prevNode(node)`

找到 node 的上一个节点。

#### 3.14 `everyNode(node)`

找到 node 的兄弟节点和 node 自己。

#### 3.15 `index(node)`

找到 node 的在兄弟节点中的位置。
