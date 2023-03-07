---
id: forestx
title: 🎄 ForestX
date: 2022-11-30 12:44:20
permalink: /pages/plugin/forestx/
---

![ForestX Banner](/img/ForestX/banner.png)

# Forest + IDEA = 双倍快乐! ForestX 隆重登场

Forest 是一款声明式的 Java 开源 HTTP 框架，相比它的前辈 Httpclient 和 OkHttp 更简明易懂、也更容易维护

废话不多说，先让我们康康用它写出来的代码长什么样子

```java
public interface AmapClient {

    /**
     * 聪明的你一定看出来了这是一个GET请求
     */
    @Get("http://ditu.amap.com/service/regeo?longitude={lng}&latitude={lat}")
    Map getLocation(@Var("lng") String longitude, @Var("lat") String latitude);
}
```

轻轻松松完成了从高德地图获取经纬度所在的地理信息的 Rest API 接口定义，之后只要调用`AmapClient.getLocation`这个 Java 方法即可自动发送 HTTP 请求，并接受响应数据，然后转换成 Map 类型对象再交到你手上

这样做确实比以前手动组装 OkHttp 的 Client 对象、 OkRequest 对象好上很多倍，就算要调用的 HTTP 接口很多、结构再复杂，也不用怕了

但当一个项目中有成千上万个 HTTP 请求要调用，接口的管理和维护成本也会上升到一个吃力的高度

比如哪个接口对应哪个网站平台哪个URL往往不能一眼看出、项目中散落的接口具体有哪些也没法一下子就知道

另一个问题是 Forest 中的模板字符串中的占位符可以方便的引用配置文件中定义的变量已经通过`@Var`标签定义的参数，但语法高亮和一个表达式语言应用的基本支持（如代码补全和提示）

这在代码少的时候不算问题，代码接口多到一定程度，字符串模板中的变量引用写错的概率就大大增加，因为配置也多了，就容易搞不清楚谁再调用谁

这个时候就有请我们今天的主角 ForestX 登场啦~~

## 专为 Forest 量身定做的 IDEA 插件

ForestX 是一款专为 Forest 提供支持的 IDEA 插件

它能大幅提高您使用 Forest 框架时的开发体验

仓库地址: [https://gitee.com/CHMing7/ForestX](https://gitee.com/CHMing7/ForestX)

### ForestX 特性
- 支持 Forest 模板表达式语法 (语法高亮、智能提示)
- 提供 Forest 工具窗口，可快速浏览项目中的 Forest 接口
- 在工具窗中，不同类型的请求有不同的图标 (如: `GET`、`POST`)
- 在工具窗中， 每个 Forest 接口和请求方法后都会显示 URL 路径
- 支持模板表达式中变量到`properties`配置文件的跳转
- 支持模板表达式中变量到`yaml`配置文件的跳转
- 支持模板表达式中变量到`@BindingVar`方法定义代码的跳转
- 支持模板表达式中变量到方法中`@Var`参数定义的跳转
- 支持模板表达式中变量属性到`java`定义代码的跳转


### 🛍 安装

#### 1. 从 Marketplace 下载

点开 Intellij IDEA 菜单中的 `File`->`Settings`->`Plugins`

选择`Marketplace`选项卡，搜索`ForestX`，然后点击`install`进行安装

环境要求: Intellij IDEA >= `2021.3`

#### 2. 本地安装

到如下地址中，寻找最新版本的 jar 包进行下载，并在 IDEA 中以 Jar 包方式安装插件

[https://gitee.com/CHMing7/ForestX/releases](https://gitee.com/CHMing7/ForestX/releases)


## 🎨 功能展示

### 侧边导航工具栏

点击右边的`Forest`logo小鸟图标，可打开`ForestX`的导航工具栏，它会把项目中定义的 Forest 接口都罗列在一起，方便管理

![tools-windows](/img/ForestX/tools-window.gif)

- 接口列表分三个层次：最顶层的项目(目录)、Forest 接口(小鸟图标)、请求方法
- 在 Forest 接口列表中，方法名左侧的图标代表了该请求的类型(`GET`/`POST`)
- 方法名/接口的右侧，则是用灰色字体展示的 URL 路径 （一般不是全路径，而是定义在方法上的路径）


### 代码补全

1. 根据配置文件中`forest.variables`下定义的全局变量来补全代码

![completion-global-variables](/img/ForestX/completion-global-variables.gif)


2. 根据YAML配置文件中定义的YAML配置项来补全代码

![completion-yaml](/img/ForestX/completion-yaml.gif)

3. 根据请求方法的`@Var`参数定义来补全代码

![completion-var-parameter](/img/ForestX/completion-var-parameter.gif)

4. 根据`@BindingVar`注解定义的方法来补全代码

![compeltion-binding-var](/img/ForestX/completion-BindingVar.gif)

5. 在编程式的代码中，也可出现代码补全的智能提示

不过目前仅对 `Forest.get`、`Forest.post` 等请求方法开放次功能

![compeltion-forest-api](/img/ForestX/completion-forest-api.gif)

### 代码跳转

按住键盘`Ctrl`键，将鼠标移动到 Forest 模板表达式中的标识符上(比如变量名)，并悬停一小段时间，就会跳出该标识符所引用的配置变量或Java属性的简短信息

此时点击鼠标左键，即可跳转到该标识符所引用的变量/配置的定义代码


## 结语

程序猿的工作是创造工具，而工具亦可以用来服务程序猿，这是一种正向循环，也是一次次迭代的缩影，正是在一次次的迭代中，程序猿们不断地创造出很好、更完善、更可能改变世界的工具

而 ForestX 的迭代才刚刚开始！

