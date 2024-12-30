(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{857:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"/img/ForestX/banner.png",alt:"ForestX Banner"}})]),t._v(" "),a("h1",{attrs:{id:"forest-idea-双倍快乐-forestx-隆重登场"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forest-idea-双倍快乐-forestx-隆重登场"}},[t._v("#")]),t._v(" Forest + IDEA = 双倍快乐! ForestX 隆重登场")]),t._v(" "),a("p",[t._v("Forest 是一款声明式的 Java 开源 HTTP 框架，相比它的前辈 Httpclient 和 OkHttp 更简明易懂、也更容易维护")]),t._v(" "),a("p",[t._v("废话不多说，先让我们康康用它写出来的代码长什么样子")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AmapClient")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 聪明的你一定看出来了这是一个GET请求\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ditu.amap.com/service/regeo?longitude={lng}&latitude={lat}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lng"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("轻轻松松完成了从高德地图获取经纬度所在的地理信息的 Rest API 接口定义，之后只要调用"),a("code",[t._v("AmapClient.getLocation")]),t._v("这个 Java 方法即可自动发送 HTTP 请求，并接受响应数据，然后转换成 Map 类型对象再交到你手上")]),t._v(" "),a("p",[t._v("这样做确实比以前手动组装 OkHttp 的 Client 对象、 OkRequest 对象好上很多倍，就算要调用的 HTTP 接口很多、结构再复杂，也不用怕了")]),t._v(" "),a("p",[t._v("但当一个项目中有成千上万个 HTTP 请求要调用，接口的管理和维护成本也会上升到一个吃力的高度")]),t._v(" "),a("p",[t._v("比如哪个接口对应哪个网站平台哪个URL往往不能一眼看出、项目中散落的接口具体有哪些也没法一下子就知道")]),t._v(" "),a("p",[t._v("另一个问题是 Forest 中的模板字符串中的占位符可以方便的引用配置文件中定义的变量已经通过"),a("code",[t._v("@Var")]),t._v("标签定义的参数，但语法高亮和一个表达式语言应用的基本支持（如代码补全和提示）")]),t._v(" "),a("p",[t._v("这在代码少的时候不算问题，代码接口多到一定程度，字符串模板中的变量引用写错的概率就大大增加，因为配置也多了，就容易搞不清楚谁再调用谁")]),t._v(" "),a("p",[t._v("这个时候就有请我们今天的主角 ForestX 登场啦~~")]),t._v(" "),a("h2",{attrs:{id:"专为-forest-量身定做的-idea-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专为-forest-量身定做的-idea-插件"}},[t._v("#")]),t._v(" 专为 Forest 量身定做的 IDEA 插件")]),t._v(" "),a("p",[t._v("ForestX 是一款专为 Forest 提供支持的 IDEA 插件")]),t._v(" "),a("p",[t._v("它能大幅提高您使用 Forest 框架时的开发体验")]),t._v(" "),a("p",[t._v("仓库地址: "),a("a",{attrs:{href:"https://gitee.com/CHMing7/ForestX",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/CHMing7/ForestX"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"forestx-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forestx-特性"}},[t._v("#")]),t._v(" ForestX 特性")]),t._v(" "),a("ul",[a("li",[t._v("支持 Forest 模板表达式语法 (语法高亮、智能提示)")]),t._v(" "),a("li",[t._v("提供 Forest 工具窗口，可快速浏览项目中的 Forest 接口")]),t._v(" "),a("li",[t._v("在工具窗中，不同类型的请求有不同的图标 (如: "),a("code",[t._v("GET")]),t._v("、"),a("code",[t._v("POST")]),t._v(")")]),t._v(" "),a("li",[t._v("在工具窗中， 每个 Forest 接口和请求方法后都会显示 URL 路径")]),t._v(" "),a("li",[t._v("支持模板表达式中变量到"),a("code",[t._v("properties")]),t._v("配置文件的跳转")]),t._v(" "),a("li",[t._v("支持模板表达式中变量到"),a("code",[t._v("yaml")]),t._v("配置文件的跳转")]),t._v(" "),a("li",[t._v("支持模板表达式中变量到"),a("code",[t._v("@BindingVar")]),t._v("方法定义代码的跳转")]),t._v(" "),a("li",[t._v("支持模板表达式中变量到方法中"),a("code",[t._v("@Var")]),t._v("参数定义的跳转")]),t._v(" "),a("li",[t._v("支持模板表达式中变量属性到"),a("code",[t._v("java")]),t._v("定义代码的跳转")])]),t._v(" "),a("h3",{attrs:{id:"🛍-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🛍-安装"}},[t._v("#")]),t._v(" 🛍 安装")]),t._v(" "),a("h4",{attrs:{id:"_1-从-marketplace-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-从-marketplace-下载"}},[t._v("#")]),t._v(" 1. 从 Marketplace 下载")]),t._v(" "),a("p",[t._v("点开 Intellij IDEA 菜单中的 "),a("code",[t._v("File")]),t._v("->"),a("code",[t._v("Settings")]),t._v("->"),a("code",[t._v("Plugins")])]),t._v(" "),a("p",[t._v("选择"),a("code",[t._v("Marketplace")]),t._v("选项卡，搜索"),a("code",[t._v("ForestX")]),t._v("，然后点击"),a("code",[t._v("install")]),t._v("进行安装")]),t._v(" "),a("p",[t._v("环境要求: Intellij IDEA >= "),a("code",[t._v("2021.3")])]),t._v(" "),a("h4",{attrs:{id:"_2-本地安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-本地安装"}},[t._v("#")]),t._v(" 2. 本地安装")]),t._v(" "),a("p",[t._v("到如下地址中，寻找最新版本的 jar 包进行下载，并在 IDEA 中以 Jar 包方式安装插件")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/CHMing7/ForestX/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/CHMing7/ForestX/releases"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"🎨-功能展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🎨-功能展示"}},[t._v("#")]),t._v(" 🎨 功能展示")]),t._v(" "),a("h3",{attrs:{id:"侧边导航工具栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#侧边导航工具栏"}},[t._v("#")]),t._v(" 侧边导航工具栏")]),t._v(" "),a("p",[t._v("点击右边的"),a("code",[t._v("Forest")]),t._v("logo小鸟图标，可打开"),a("code",[t._v("ForestX")]),t._v("的导航工具栏，它会把项目中定义的 Forest 接口都罗列在一起，方便管理")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/ForestX/tools-window.gif",alt:"tools-windows"}})]),t._v(" "),a("ul",[a("li",[t._v("接口列表分三个层次：最顶层的项目(目录)、Forest 接口(小鸟图标)、请求方法")]),t._v(" "),a("li",[t._v("在 Forest 接口列表中，方法名左侧的图标代表了该请求的类型("),a("code",[t._v("GET")]),t._v("/"),a("code",[t._v("POST")]),t._v(")")]),t._v(" "),a("li",[t._v("方法名/接口的右侧，则是用灰色字体展示的 URL 路径 （一般不是全路径，而是定义在方法上的路径）")])]),t._v(" "),a("h3",{attrs:{id:"代码补全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码补全"}},[t._v("#")]),t._v(" 代码补全")]),t._v(" "),a("ol",[a("li",[t._v("根据配置文件中"),a("code",[t._v("forest.variables")]),t._v("下定义的全局变量来补全代码")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/ForestX/completion-global-variables.gif",alt:"completion-global-variables"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("根据YAML配置文件中定义的YAML配置项来补全代码")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/ForestX/completion-yaml.gif",alt:"completion-yaml"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("根据请求方法的"),a("code",[t._v("@Var")]),t._v("参数定义来补全代码")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/ForestX/completion-var-parameter.gif",alt:"completion-var-parameter"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("根据"),a("code",[t._v("@BindingVar")]),t._v("注解定义的方法来补全代码")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/ForestX/completion-BindingVar.gif",alt:"compeltion-binding-var"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("在编程式的代码中，也可出现代码补全的智能提示")])]),t._v(" "),a("p",[t._v("不过目前仅对 "),a("code",[t._v("Forest.get")]),t._v("、"),a("code",[t._v("Forest.post")]),t._v(" 等请求方法开放次功能")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/ForestX/completion-forest-api.gif",alt:"compeltion-forest-api"}})]),t._v(" "),a("h3",{attrs:{id:"代码跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码跳转"}},[t._v("#")]),t._v(" 代码跳转")]),t._v(" "),a("p",[t._v("按住键盘"),a("code",[t._v("Ctrl")]),t._v("键，将鼠标移动到 Forest 模板表达式中的标识符上(比如变量名)，并悬停一小段时间，就会跳出该标识符所引用的配置变量或Java属性的简短信息")]),t._v(" "),a("p",[t._v("此时点击鼠标左键，即可跳转到该标识符所引用的变量/配置的定义代码")]),t._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("程序猿的工作是创造工具，而工具亦可以用来服务程序猿，这是一种正向循环，也是一次次迭代的缩影，正是在一次次的迭代中，程序猿们不断地创造出很好、更完善、更可能改变世界的工具")]),t._v(" "),a("p",[t._v("而 ForestX 的迭代才刚刚开始！")])])}),[],!1,null,null,null);a.default=r.exports}}]);