# VUE

## 概述

Vue是一套构建用户界面的渐进式前端框架。

Vue只关注视图层，并且非常容易学习，还可以很方便的与其它库或已有项目整合。
通过尽可能简单的API来实现**响应数据的绑定和组合的视图组件**。

特点：

* 易用：在有HTMLCSSJavaScript的基础上，快速上手。
* 灵活：简单小巧的核心，渐进式技术栈，足以应付任何规模的应用。
* 性能：20kbmin+gzip运行大小、超快虚拟DOM、最省心的优化。



***



## 基本语法

* Vue 核心对象：每一个 Vue 程序都是从一个 Vue 核心对象开始的。 

  ```js
  let vm = new Vue({
  	选项列表;
  });
  ```

* 选项列表

  * el选项：用于接收获取到页面中的元素（根据常用选择器获取）
  * data选项：用于保存当前Vue对象中的数据，在视图中声明的变量需要在此处赋值
  * methods选项：用于定义方法，方法可以直接通过对象名调用，this代表当前Vue对象

* 数据绑定：在视图部分获取脚本部分的数据

  ```html
  {{遍变量名}}
  ```

  ```html
  <body>
      <!-- 视图 -->
      <div id="div">
          <div>姓名：{{name}}</div>
          <div>班级：{{classRoom}}</div>
          <button onclick="hi()">打招呼</button>
      </div>
  </body>
  <script src="js/vue.js"></script>
  <script>
      // 脚本
      let vm = new Vue({
          el:"#div",
          data:{
              name:"张三",
              classRoom:"sea程序员"
          },
          methods:{
              study(){
                  alert(this.name + "正在" + this.classRoom + "好好学习!");
              }
          }
      });
      //定义打招呼方法  按一下按钮就弹出
      function hi(){
          vm.study();
      }
  </script>
  ```

  

***



## 常用指令

### 指令介绍

指令：是带有 v- 前缀的特殊属性，不同指令具有不同含义

使用方法：通常编写在标签的属性上，值可以使用 JS 的表达式

![](https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/Vue指令介绍.png)



***



### 文本插值

v-html：把文本解析为 HTML 代码

```html
<body>
    <div id="div">
        <div>{{msg}}</div>	<!--标签不解析-->
        <div v-html="msg"></div> <!--加粗显示-->
    </div>
</body>
<script src="js/vue.js"></script>
<script>
    new Vue({
        el:"#div",
        data:{
            msg:"<b>Hello Vue</b>"  
        }
    });
</script>
```



***



### 绑定属性

v-bind：为 HTML 标签绑定属性值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绑定属性</title>
    <style>
        .my{
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <div id="div">
        <a v-bind:href="url">百度一下</a> <br>
        <a :href="url">百度一下</a> <br>
        <div :class="cls">我是div</div>
    </div>
</body>
<script src="js/vue.js"></script>
<script>
    new Vue({
        el:"#div",
        data:{
            url:"https://www.baidu.com",
            cls:"my"
        }
    });
</script>
</html>
```



***



### 条件渲染

v-if：条件性的渲染某元素，判定为真时渲染，否则不渲染
v-else：条件性的渲染
v-else-if：条件性的渲染

v-show：根据条件展示某元素，区别在于切换的是display属性的值

```html
<body>
    <div id="div">
        <!-- 判断num的值，对3取余  余数为0显示div1  余数为1显示div2  余数为2显示div3 -->
        <div v-if="num % 3 == 0">div1</div>
        <div v-else-if="num % 3 == 1">div2</div>
        <div v-else="num % 3 == 2">div3</div>
        <div v-show="flag">div4</div>
    </div>
</body>
<script src="js/vue.js"></script>
<script>
    new Vue({
        el:"#div",
        data:{
            num:1,
            flag:false
        }
    });
</script>
```



***



### 列表渲染

v-for：列表渲染，遍历容器的元素或者对象的属性

```html
<body>
    <div id="div">
        <ul>
            <li v-for="name in names">
                {{name}}
            </li>
            <li v-for="value in student">
                {{value}}
            </li>
        </ul>
    </div>
</body>
<script src="js/vue.js"></script>
<script>
    new Vue({
        el:"#div",
        data:{
            names:["张三","李四","王五"],
            student:{
                name:"张三",
                age:23
            }
        }
    });
</script>
```



****



### 事件绑定

v-on：为 HTML 标签绑定事件，有简写方式

```html
<body>
    <div id="div">
        <div>{{name}}</div>
        <button v-on:click="change()">改变div的内容</button>  
        <button @click="change()">改变div的内容</button> <!--把sea改成传智播客-->
    </div>
</body>
<script src="js/vue.js"></script>
<script>
    new Vue({
        el:"#div",
        data:{
            name:"sea程序员"
        },
        methods:{
            change(){
                this.name = "传智播客"
            }
        }
    });
</script>
```



***



### 表单绑定

- **表单绑定**
  v-model：在表单元素上创建双向数据绑定

- **双向数据绑定**
  更新data数据，页面中的数据也会更新；更新页面数据，data数据也会更新

- **MVVM模型(ModelViewViewModel)：是MVC模式的改进版**
  在前端页面中，JS对象表示Model，页面表示View，两者做到了最大限度的分离。
  将Model和View关联起来的就是ViewModel，它是桥梁。
  ViewModel负责把Model的数据同步到View显示出来，还负责把View修改的数据同步回Model。

  ![](https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/MVVM模型.png)

```html
<body>
    <div id="div">
        <form autocomplete="off">
            姓名：<input type="text" name="username" v-model="username"> <br>
            年龄：<input type="number" name="age" v-model="age">
        </form>
    </div>
</body>
<script src="js/vue.js"></script>
<script>
    new Vue({
        el:"#div",
        data:{
            username:"张三",  //输入框内容从网页更改后，更新为修改后的值
            age:23
        }
    });
</script>
```



***



## Element

Element：网站快速成型工具，是饿了么公司前端开发团队提供的一套基于Vue的网站组件库，使用Element前提必须要有Vue

组件：组成网页的部件，例如超链接、按钮、图片、表格等等

- Element官网：https://element.eleme.cn/#/zh-CN

* 开发步骤：

  1. 下载 Element 核心库
  2. 引入 Element 样式文件
  3. 引入 Vue 核心 js 文件
  4. 引入 Element 核心 js 文件
  5. 编写按钮标签
  6. 通过 Vue 核心对象加载元素

* 代码实现

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>快速入门</title>
      <link rel="stylesheet" href="element-ui/lib/theme-chalk/index.css">
      <script src="js/vue.js"></script>
      <script src="element-ui/lib/index.js"></script>
  </head>
  <body>
      <button>我是按钮</button>
      <br>
      <div id="div">
          <el-row>
              <el-button>默认按钮</el-button>
              <el-button type="primary">主要按钮</el-button>
              <el-button type="success">成功按钮</el-button>
              <el-button type="info">信息按钮</el-button>
              <el-button type="warning">警告按钮</el-button>
              <el-button type="danger">危险按钮</el-button>
            </el-row>
            <br>
            <el-row>
              <el-button plain>朴素按钮</el-button>
              <el-button type="primary" plain>主要按钮</el-button>
              <el-button type="success" plain>成功按钮</el-button>
              <el-button type="info" plain>信息按钮</el-button>
              <el-button type="warning" plain>警告按钮</el-button>
              <el-button type="danger" plain>危险按钮</el-button>
            </el-row>
            <br>
            <el-row>
              <el-button round>圆角按钮</el-button>
              <el-button type="primary" round>主要按钮</el-button>
              <el-button type="success" round>成功按钮</el-button>
              <el-button type="info" round>信息按钮</el-button>
              <el-button type="warning" round>警告按钮</el-button>
              <el-button type="danger" round>危险按钮</el-button>
            </el-row>
            <br>
            <el-row>
              <el-button icon="el-icon-search" circle></el-button>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="info" icon="el-icon-message" circle></el-button>
              <el-button type="warning" icon="el-icon-star-off" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
      </div>
  </body>
  <script>
      new Vue({
          el:"#div"
      });
  </script>
  </html>
  ```

  

*****





## 自定义

对组件的封装

* 定义格式

  ```vue
  Vue.component(组件名称, {
       props:组件的属性,
       data: 组件的数据函数,
       template: 组件解析的标签模板
  })
  ```

* 代码实现

  ```html
  <body>
      <div id="div">
          <my-button>我的按钮</my-button>
      </div>
  </body>
  <script>
      Vue.component("my-button",{
          // 属性
          props:["style"],
          // 数据函数
          data: function(){
              return{
                  msg:"我的按钮"
              }
          },
          //解析标签模板
          template:"<button style='color:red'>{{msg}}</button>"
      });
  
      new Vue({
          el:"#div"
      });
  </script>
  ```

* 效果

  <div id="div"><button style="color: red;">我的按钮</button></div>



***



## 生命周期

* 生命周期

  ![](https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/Vue生命周期.png)

* 生命周期八个阶段

  ![](https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/Vue生命周期的八个阶段.png)



***



## 异步操作

在Vue中发送异步请求，本质上还是AJAX，使用axios这个插件来简化操作

* 使用步骤：
  1.引入axios核心js文件
  2.调用axios对象的方法来发起异步请求
  3.调用axios对象的方法来处理响应的数据

* axios常用方法： 

  | 方法                                 | 作用                                             |
  | ------------------------------------ | ------------------------------------------------ |
  | get(请求的资源路径与请求的参数)      | 发起GET方式请求                                  |
  | post(请求的资源路径**,** 请求的参数) | 发起POST方式请求                                 |
  | then(response)                       | 请求成功后的回调函数，通过response获取响应的数据 |
  | catch(error)                         | 请求失败后的回调函数，通过error获取错误信息      |

* 代码实现

  Servlet类：

  ```java
  @WebServlet("/testServlet")
  public class TestServlet extends HttpServlet {
      @Override
      protected void doGet(HttpServletRequest req, HttpServletResponse resp){
          //设置请求响应编码
          req.setCharacterEncoding("UTF-8");
          resp.setContentType("text/html;charset=UTF-8");
  
          //获取请求参数
          String name = req.getParameter("name");
          System.out.println(name);
  
          //响应客户端
          resp.getWriter().write("请求成功");
      }
      @Override
      protected void doPost(HttpServletRequest req, HttpServletResponse resp){
          doGet(req, resp);
      }
  }
  ```

  HTML文件：

  ```html
  <body>
      <div id="div">
          {{name}}
          <button @click="send()">发起请求</button>
      </div>
  </body>
  <script>
      new Vue({
          el: "#div",
          data:{
              name: "张三"
          },
          methods: {
              send() {
                  //GET方式请求
                  /*axios.get("testServlet?name=" + this.name)
                      .then(resp => {
                          alert(resp.data);
                      })
                      .catch(error => {
                          alert(error);
                      })*/
                  //POST方式请求
                  axios.post("testServlet", "name=" + this.name)
                      .then(resp => {
                          alert(resp.data);
                      })
                      .catch(error => {
                          alert(error);
                      });
              }
          }
      });
  </script>
  ```

  





***



