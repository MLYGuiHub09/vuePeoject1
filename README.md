# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# 编写技巧
a*2+(div>(a*4+br))+a*2
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##制作首页APP组件
1.完成header区域，使用的是MINT-ui的Header组件
2.制作底部的Tabber区域，使用的是mui的Tabber.html
3。要在中间区域防止一个router-view 来展示路由匹配到的组件

##改造Tabber为router--link

##设置路由高亮；
    使用的是在router.js中的 linkActiveClass:'mui-active'

##vue 中过滤器 filter的使用
1.全局过滤器 : Vue.filter('XXX过滤器的名称',function(datastr,patten = 'YYYY-MM-DD HH-mm-ss'){}); 第一个参数datastr是需要过滤的值，第二个是调用过滤器是可以传输的参数
2.局部过滤器: 在组件中使用 filters：{}；
{{item.add_time | timeFilter}}

##单独缝制廓一个comment.vue 评论子组件
1.先创建一个单独的comment.vue 组件模板
2.在需要使用 comment组件的页面中，先手动导入comment组件
 +'improt comment from ''../comment.vue'
3.在父组件中，使用'components'属性 。将刚才导入的comment组件，注册为自己的子组件
4.将注册子组件时候的注册名称，以标签形式 在页面中写入就可以了

##获取所有的评论数据显示在页面中

##实现点击加载更多评论的功能
1.为加载更多按钮，绑定点击事件，在事件中请求下一页数据
2.点击加载更多，让pageIndex++。然后重新调用this.getComment()方法

##发表评论功能
1.文本框实现双向数据绑定功能
2.为发表按钮绑定一个按钮
3.校验评论内容是否为空？如果为空 则Toast提示用户，评论内容不能为空
4.通过vue-resouce 发送一个请求，把评论交给服务器
5.发表成功后，重新刷新页面，加载第一页数据

##绘制 图片列表 组件页面结构并梅花样式
1.制作顶部滑动条
2.制作底部图片列表
##制作顶部滑动条的坑：
1.需要借助于MUI
2.需要把silder区域的mui-fullstcreen类去掉
3.滑动条无法正常出发滑动，通过检查发现这是JS组件，需要初始化一下：
+导入mui.js
+调用官方提供的初始化方式去初始化：
、、、
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
、、、
##在严格模式下无法使用
'caller', 'callee', and 'arguments' properties may not be accessed  on strict mode functions
1.经过分析，mui内部启用了严格模式
+解决方案：在webpack打包的时候去掉严格模式

##制作图片列表区域
1.图片列表需要使用懒加载技术，我们可以使用Mint-ui 提供的线程组件'lazy-load'
2.根据'lazy-load'的使用文档，尝试使用

##路由改造
+声明式跳转：
router-link :to=""
+编程式跳转：
window.location.href

##区分this.$route this.$router这个对象
+this.$route 是路由参数对象，所有路由中的参数，如params，query都属于它
+this.$router是一个路由导航对象，用它可以方便的使用js代码，实现路由的前进，后退，跳转

##初始化购物车中的数量
1.问题：如何从购物车中获取商品的数量？
++我们可以先创建一个空对象，然后循环购物车中所有商品的数据，把当前循环这条商品的id，作为对象属性名，数量作为对象的
++属性值 {80:'1',90：'2'}
--运用了父组件向子组件传值

##webpack
    基础配置：webpack.base.js
    开发阶段配置：webpack.dev.js
    生产阶段配置：webpack.prod.js

    ++构建配置管理的可选方案：
        通过多个配置文件管理不同环境的构建，webpack --config参数进行控制
        将构建配置设计成一个库，比如：hjs-webpack,Neutrino,webpack-blocks
        抽象成要给工具进行管理：比如：create-react-app,kyt,nwb
        将所有的配置放在一个文件，通过--env参数控制分支选择 