# 这是一个NB的项目

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作
1. 绘制界面， 使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中每一项改造router-link，同时，在跳转的时候提供唯一的id标识符
2.创建新闻详情的组件页面，NewsInfo.vue
3.在路由模块，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个comment.vue评论子组件
1.先创建一个单独的commit.vue组件模板
2.在需要使用comment组件的页面，先手动导入comment组件
 +`import comment from './comment.vue'`
3.在父组件中，使用`components`属性，将导入comment组件，注册为自己的子组件
4.将注册子组件时候的，注册名称。以标签形式，在页面中引用即可

## 获取所有数据在页面中显示

## 实现点击加载更多评论的功能
1.为加载更多按钮。绑定点击事件，在事件中，请求下一页数据
2.点击加载更多，让pageIndex++，然后重新调用this.getComments()重新获取最新一页数据
3.为了防止新数据覆盖数据的情况，我们在点击加载更多的时候，每当获取到新数据，应该让数据调用数组的concat方法，拼接上新数

## 发布评论
1.把文本框双向绑定数据
2.为发表按钮绑定一个时间
3.校验评论内容是否为空，如果为空，则Toast提示用户
4.通过vue-resource发送一个请求，把评论提交给服务器
5.当发表评论成功后，重新刷新列表，以查看最新的评论
## 改造图片分享  按钮为 路由的链接并显示对应得组件页面
## 绘制图片列表组件页面结构和美化样式
1. 顶部滑动条
2.制作底部的图片列表

### 制作顶部滑动条的坑
1.需要借助于MUI中 tab-top-webview-main.html
2.需要把slider 区域的mui-fullscreen类去掉
3.滑动条无法正常滑动，通过检查官方文档，发现这是JS组件，需要初始化
 + 导入mui.js
 + 调用官方初始化方式
 ```
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
 ```
 4.初始化滑动条导入mui.js报错
 可能mui.js里与严格模式冲突
 + 解决方案 1.把mui.js中的非严格模式代码改掉2.把webpack里严格模式禁掉
 + 选择webpack移除严格模式
 5.刚进入图片分享时候，滑动条无法正常工作，发现，需要等DOM元素加载完成，把代码放在mounted生命周期函数中
 6.当 滑动条 调试OK后，发现， tabbar 无法正常工作了，这时候，我们需要把 每个 tabbar 按钮的 样式中  `mui-tab-item` 重新改一下名字；
### 制作图片列表区域
1. 图片列表需要懒加载使用mint-ui的组件`lazy-load`;
2. 根据`lazy-load`文档，尝试使用
3. 渲染图片列表数据

### 实现 图片列表懒加载和样式美化

## 实现点击图片跳转到图片详情页面
1. 在改造li成router-link的时候，使用tag属性指定渲染那种元素

## 实现 详情页面的布局和美化，同时获取数据渲染页面

## 实现 图片详情中 缩略图的功能
1. 使用 插件 vue-preview 这个缩略图插件
2. 获取到所有的图片列表，然后使用 v-for 指令渲染数据
3. 注意： img标签上的class不能去掉
4. 注意： 每个 图片数据对象中，必须有 w 和 h 属性