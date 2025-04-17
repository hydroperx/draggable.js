# com.hydroper.draggable

High performance, fully cross browser, full featured drag and drop in a tiny (2k gzipped), dependency-free package.

> **Note:**
>
> com.hydroper.draggable is a modified copy of [`bcherny/draggable`](https://github.com/bcherny/draggable) v4. Credits to that original repository.

## Usage

**HTML**

```html
<div id="id"></div>
```

**TypeScript**

```js
import Draggable from "com.hydroper.draggable";
let element = document.getElementById("id");
new Draggable(element);
```