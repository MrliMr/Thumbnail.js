# Thumbnail.js

#0.1
## 背景介绍
---
> 利用javascript控制图片在固定容器中显示方式的组件
> 有两种情况：
> - 图片宽度大于高度，这种图片的显示方式是高度100％，宽度auto，水平居中在父容器中显示，隐藏超出部分。
> - 图片宽度小于高度，这种图片的显示方式是宽度100%，高度auto，图片顶端显示在父容器，隐藏超出部分。

# 使用方法
- </body>底部引入thumbnail.js
- 给需要适应显示方式的图片加上class='MLthumbImg'

```
<script src="js/thumbnail.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
	var test = new Thumbnail();
	test.mode();
</script>
```