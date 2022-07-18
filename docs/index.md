---
home: true
heroImage: /img/forest_logo.png
heroText: Forest
tagline: 声明式HTTP客户端框架，减轻您的开发负担
actionText: 开始使用 →
actionLink: /pages/1.5.x/install_guide/
bannerBg: none


features:
  - title: 🍭 容易上手
    details: 10分钟即可完成请求的定义、发送、接收、解析、错误处理、日志打印等过程，此外还有直观的API和详尽的文档
  - title: ☕ 简单优雅
    details: 将繁复的 HTTP 请求细节封装成 Java 接口 + 注解的形式，不必关心请求发送的具体过程
  - title: 🧩 扩展灵活
    details: 能使用自定义拦截器和自定义注解来扩展Forest的能力，即使面对意想不到的场景也能轻松应对

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---


<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color: #4aa962;
  border-radius: 30px;
  box-sizing: border-box;
  border: 2px solid #4aa962;
}
</style>

<br>

<p style="text-align: center">
  <a class="become-sponsor" href="/pages/donate/">支持这个项目</a>
</p>

## 🎉 特性

* **声明式接口**: 通过定义地接口+注解的方式封装Http请求, 实现了业务逻辑与Http协议之间的解耦
* **多种底层HTTP框架**: 以Httpclient和OkHttp为后端框架（可根据需要二选一）
* **不依赖中间件**: 因为针对第三方接口，所以不需要依赖Spring Cloud和任何注册中心
* **支持所有请求方法**：GET, HEAD, OPTIONS, TRACE, POST, DELETE, PUT, PATCH
* **约定大于配置**: 只要添加好依赖，基本上可以什么都不配置，就能马上运行
* **自动 JSON 转换**: 内置 Jackson、Fastjson、Gson 三种JSON转换器
* **自动 XML 转换**: 内置 JAXB 形式的 XML 转换器
* **自动 Protobuf 转换**: 内置 Protobuf 格式数据转换器
* **多种验签方式**：Basic Auth、 OAuth2、以及通过自定义拦截器或注解来验签
* **Spring/Spring boot**: 支持Spring和Springboot集成
* **上传下载**: 支持多种上传和下载的方式，并能监听数据传输进度
* **模板表达式**: 支持灵活的模板表达式，来配合申明式注解使用
* **拦截器**: 支持拦截器处理请求的各个生命周期
* **自定义注解**: 支持自定义注解，来极大增强扩展能力
* **回调函数**: 支持通过OnSuccess和OnError接口参数实现请求结果的回调
* **异步请求**: 支持方便的异步请求调用方式
* **编程式接口**: 除声明式接口外，也支持直观的编程式接口

<br><br>


## 🎨 最新版本

<code-group>
<code-block title="Springboot环境" active>

```xml
<dependency>
  <groupId>com.dtflys.forest</groupId>
  <artifactId>forest-spring-boot-starter</artifactId>
  <version>1.5.25</version>
</dependency>
```
</code-block>
<code-block title="原生Java环境">

```xml
<dependency>
  <groupId>com.dtflys.forest</groupId>
  <artifactId>forest-core</artifactId>
  <version>1.5.25</version>
</dependency>
```
</code-block>

</code-group>

::: warning 所需环境

JDK版本: `8+`

可集成的 spring boot 版本: `1.x`, `2.x`

也可不依赖 spring boot 和 spring
:::

<br/><br/>


## 🛰️ 代码托管

<a href='https://gitee.com/dromara/forest' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/dromara/forest" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/><br/>

## 🥤 开源平台社区

<span style="width: 150px;text-align: left">
    <a href="https://gitee.com" target="_blank">
        <img :src="$withBase('/img/link/gitee-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>

<span style="width: 150px;text-align: left">
    <a href="https://www.oschina.net/" target="_blank">
        <img :src="$withBase('/img/link/oschina-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>

<br><br>

## 🍻 dromara 组织项目

<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/TLog" target="_blank">
        <img :src="$withBase('/img/link/tlog-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sa-token" target="_blank">
        <img :src="$withBase('/img/link/satoken-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sureness" target="_blank">
        <img :src="$withBase('/img/link/sureness-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hutool" target="_blank">
        <img :src="$withBase('/img/link/hutool-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/Jpom" target="_blank">
        <img :src="$withBase('/img/link/jpom-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/MaxKey" target="_blank">
        <img :src="$withBase('/img/link/maxkey-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/liteflow" target="_blank">
        <img :src="$withBase('/img/link/liteflow-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/easy-es" target="_blank">
        <img :src="$withBase('/img/link/ee-logo.png')" class="no-zoom" style="height:40px;margin: 10px;">
    </a>
</span>

