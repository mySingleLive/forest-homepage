(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{820:function(s,t,a){"use strict";a.r(t);var n=a(14),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("众所周知，我们平时访问HTTP，就是直接输入URL外加Query参数或Body参数就开始直接发送请求，随后等待服务端响应便可。请求通过内网或公网一般都可以正常工作（如果客户端和服务端设备正常联通网络的话），就如下图所示：")]),s._v(" "),t("img",{staticClass:"img_margin img_shadow img_bg",attrs:{src:"/img/no-proxy.svg",alt:"proxy"}}),s._v(" "),t("h3",{attrs:{id:"正向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正向代理"}},[s._v("#")]),s._v(" 正向代理")]),s._v(" "),t("p",[s._v("但也有很多服务由于网络限制等诸多原因，无法直接访问到。这时候就需要先连接代理服务器，然后再由代理服务器转发请求到您原本要访问的原始服务器。\n这种方式，便称为正向代理，过程如下图所示：")]),s._v(" "),t("img",{staticClass:"img_margin img_shadow img_bg",attrs:{src:"/img/proxy.svg",alt:"proxy"}}),s._v(" "),t("p",[s._v("当然，正向代理除了能访问原本访问不到的资源这一功能外，还有其它用处：")]),s._v(" "),t("ul",[t("li",[s._v("访问原来无法访问的资源，如: Google、油管、企业私有网络服务等")]),s._v(" "),t("li",[s._v("做缓存，加速访问速度")]),s._v(" "),t("li",[s._v("对客户端访问授权和认证")]),s._v(" "),t("li",[s._v("记录用户访问记录（上网行为管理）")])]),s._v(" "),t("p",[s._v("除了有正向代理外，自然也有反向代理，但这个概念不在本文档讨论范围，有兴趣可以自行搜索查询相关资料。")]),s._v(" "),t("h3",{attrs:{id:"设置正向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置正向代理"}},[s._v("#")]),s._v(" 设置正向代理")]),s._v(" "),t("p",[s._v("Forest从"),t("code",[s._v("1.5.0-RC1")]),s._v("版本开始支持HTTP网络代理，而作为一个HTTP客户端框架，自然提供的是对正向代理的支持。")]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("@HTTPProxy")]),s._v("注解便可以非常简单地为某一个请求方法设置代理，该注解有两个属性：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("host: 代理服务器主机地址")])]),s._v(" "),t("li",[t("p",[s._v("port: 代理服务器端口号")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 使用 @HTTPProxy 注解设置代理服务器\n * host属性为代理服务器主机地址\n * port属性为代理服务器端口号\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080/hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username=foo&password=123456"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@HTTPProxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10801"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("simplePostWithProxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Header")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Accept"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" accept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("code",[s._v("@HTTPProxy")]),s._v("注解也可以设置在接口类上，批量给接口中所有方法设置相同的代理服务器")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 为 PostClient 接口中所有的请发方法设置代理服务器\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@BaseRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseURL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@HTTPProxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10801"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PostClient")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"设置用户名密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置用户名密码"}},[s._v("#")]),s._v(" 设置用户名密码")]),s._v(" "),t("p",[s._v("如果您访问的代理服务器需要进行身份校验，则在 "),t("code",[s._v("@HTTProxy")]),s._v(" 注解中设置用户名和密码")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 在 @HTTPProxy 注解中有 username 和 password 属性\n * 分别用于设置代理服务的用户名和密码进行身份验证\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080/hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username=foo&password=123456"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@HTTPProxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10801"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("simplePostWithProxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Header")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Accept"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" accept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);