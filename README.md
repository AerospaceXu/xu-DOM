# xu-DOM

因为自带的 DOM 太难用（又臭又长还反人类），所以我自己封装了一份 DOM API 来使用。

包括以下方法：

## 1 增

### 1.1 `create(HTML)`

可以创建多个嵌套的元素。

```JavaScript
xu.create('<span>Hello, <strong>world</strong></span>');
```

### 1.2 `before(node, prev)`

为 node 节点添加相邻的、在前一位的 prev 节点。

```JavaScript
const div2 = document.querySelector('div2');

const test = xu.create('<div></div>');

xu.before(div2, test); // 将 test 节点放置于 div2 的前一位的相邻位置
```

### 1.3 `after(node, next)`

为 node 节点添加相邻的、后一位的 next 节点。

```JavaScript
const div1 = document.querySelector('div1');
const test = xu.create('<div></div>');

xu.after(div1, test); // 将 test 节点放置于 div1 的后一位的相邻位置
```

### 1.4 `append(parent, child)`

添加 child 节点为 parent 节点的子节点。

```JavaScript
const div1 = document.querySelector('div1');
const test = xu.create('<div></div>');

xu.append(div1, test); // 将 test 添加为 div1 的子节点
```

### 1.5 `wrap(parent, child)`

为 child 节点添加 parent 节点。

```JavaScript
const div1 = document.querySelector('div1');
const test = xu.create('<div></div>');

xu.wrap(test, div1); // 用 test 作为父节点包裹 div1
```

## 2 删

### 2.1 `remove(node)`

删除 node 节点，同时返回删除的节点。

```JavaScript
const div1 = document.querySelector('div1');
const deletedDiv = xu.remove(div1);
console.log(deletedDiv);
```

### 2.2 `empty(node)`

删除 node 下的所有子节点，同时返回删除的节点数组。

```JavaScript
const div1 = document.querySelector('div1');
const deletedDivs = xu.empty(div1);
console.log(deletedDivs);
```

## 3 改

### 3.1 `attr(node, name, value)`

1. 输入两个参数时，返回 node 上的 name 属性的属性值；
2. 输入三个参数时，赋值或修改 node 上的 name 属性的属性值。

```JavaScript
const div1 = document.querySelector('div1');

xu.attr(div1, title, '徐航宇真帅'); // 新增 title 属性
console.log(xu.attr(div1, title)); // 查询 title 属性
```