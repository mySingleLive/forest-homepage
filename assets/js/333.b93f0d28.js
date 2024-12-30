(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{699:function(t,e,s){"use strict";s.r(e);var _=s(14),v=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"什么是-forest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-forest"}},[t._v("#")]),t._v(" 什么是 Forest？")]),t._v(" "),e("p",[t._v("Forest 是一个开源的 Java HTTP 客户端框架，它能够将 HTTP 的所有请求信息（包括 URL、Header 以及 Body 等信息）绑定到您自定义的 Interface 方法上，能够通过调用本地接口方法的方式发送 HTTP 请求。")]),t._v(" "),e("h2",{attrs:{id:"为什么使用-forest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-forest"}},[t._v("#")]),t._v(" 为什么使用 Forest?")]),t._v(" "),e("p",[t._v("使用 Forest 就像使用类似 Dubbo 那样的 RPC 框架一样，只需要定义接口，调用接口即可，不必关心具体发送 HTTP 请求的细节。同时将 HTTP 请求信息与业务代码解耦，方便您统一管理大量 HTTP 的 URL、Header 等信息。而请求的调用方完全不必在意 HTTP 的具体内容，即使该 HTTP 请求信息发生变更，大多数情况也不需要修改调用发送请求的代码。")]),t._v(" "),e("h2",{attrs:{id:"forest-如何使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forest-如何使用"}},[t._v("#")]),t._v(" Forest 如何使用?")]),t._v(" "),e("p",[t._v("Forest 不需要您编写具体的 HTTP 调用过程，只需要您定义一个接口，然后通过 Forest 注解将 HTTP 请求的信息添加到接口的方法上即可。请求发送方通过调用您定义的接口便能自动发送请求和接受请求的响应。")]),t._v(" "),e("h2",{attrs:{id:"forest-的工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forest-的工作原理"}},[t._v("#")]),t._v(" Forest 的工作原理")]),t._v(" "),e("p",[t._v("Forest 会将您定义好的接口通过动态代理的方式生成一个具体的实现类，然后组织、验证 HTTP 请求信息，绑定动态数据，转换数据形式，SSL 验证签名，调用后端 HTTP API(httpclient 等 API)执行实际请求，等待响应，失败重试，转换响应数据到 Java 类型等脏活累活都由这动态代理的实现类给包了。\n请求发送方调用这个接口时，实际上就是在调用这个干脏活累活的实现类。")]),t._v(" "),e("h2",{attrs:{id:"forest-的架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forest-的架构"}},[t._v("#")]),t._v(" Forest 的架构")]),t._v(" "),e("img",{staticClass:"img_margin img_padding img_shadow img_bg",attrs:{src:"/img/forest-architecture.svg",alt:"architecture"}}),t._v(" "),e("p",[t._v("我们将 HTTP 发送请求的过程分为前端部分和后端部分，Forest 本身是处理前端过程的框架，是对后端 HTTP API 框架的进一步封装。")]),t._v(" "),e("p",[e("b",[t._v("前端部分：")])]),t._v(" "),e("ol",[e("li",[t._v("Forest 配置： 负责管理 HTTP 发送请求所需的配置。")]),t._v(" "),e("li",[t._v("Forest 注解： 用于定义 HTTP 发送请求的所有相关信息，一般定义在 interface 上和其方法上。")]),t._v(" "),e("li",[t._v("动态代理： 用户定义好的 HTTP 请求的"),e("code",[t._v("interface")]),t._v("将通过动态代理产生实际执行发送请求过程的代理类。")]),t._v(" "),e("li",[t._v("模板表达式： 模板表达式可以嵌入在几乎所有的 HTTP 请求参数定义中，它能够将用户通过参数或全局变量传入的数据动态绑定到 HTTP 请求信息中。")]),t._v(" "),e("li",[t._v("数据转换： 此模块将字符串数据和"),e("code",[t._v("JSON")]),t._v("或"),e("code",[t._v("XML")]),t._v("形式数据进行互转。目前 JSON 转换器支持"),e("code",[t._v("Jackson")]),t._v("、"),e("code",[t._v("Fastjson")]),t._v("、"),e("code",[t._v("Gson")]),t._v("三种，XML 支持"),e("code",[t._v("JAXB")]),t._v("一种。")]),t._v(" "),e("li",[t._v("拦截器： 用户可以自定义拦截器，拦截指定的一个或一批请求的开始、成功返回数据、失败、完成等生命周期中的各个环节，以插入自定义的逻辑进行处理。")]),t._v(" "),e("li",[t._v("过滤器： 用于动态过滤和处理传入 HTTP 请求的相关数据。")]),t._v(" "),e("li",[t._v("SSL： Forest 支持单向和双向验证的 HTTPS 请求，此模块用于处理 SSL 相关协议的内容。")])]),t._v(" "),e("p",[e("b",[t._v("后端部分：")])]),t._v(" "),e("p",[t._v("后端为实际执行 HTTP 请求发送过程的第三方 HTTP API，目前支持"),e("code",[t._v("okHttp3")]),t._v("和"),e("code",[t._v("httpclient")]),t._v("两种后端 API。")]),t._v(" "),e("h2",{attrs:{id:"所需环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#所需环境"}},[t._v("#")]),t._v(" 所需环境")]),t._v(" "),e("p",[t._v("JDK 8+")]),t._v(" "),e("h2",{attrs:{id:"名字由来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名字由来"}},[t._v("#")]),t._v(" 名字由来")]),t._v(" "),e("p",[t._v("Forest就字面意思而言，就是森林的意思。但仔细看可以拆成"),e("code",[t._v("For")]),t._v("和"),e("code",[t._v("Rest")]),t._v("两个单词，也就是“为了Rest”（Rest为一种基于HTTP的架构风格）。\n而合起来就是森林，森林由很多树木花草组成（可以理解为各种不同的服务），它们表面上看独立，实则在地下根茎交错纵横、相互连接依存，这样看就有点现代分布式服务化的味道了。\n最后，这两个单词反过来读就像是"),e("code",[t._v("RESTful")]),t._v("。")])])}),[],!1,null,null,null);e.default=v.exports}}]);