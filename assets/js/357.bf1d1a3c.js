(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{724:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("若您的项目依赖"),s("code",[t._v("Solon")]),t._v("，并加入了"),s("code",[t._v("forest-solon-plugin")]),t._v("依赖，就可以通过 "),s("code",[t._v("app.yml")]),t._v("/"),s("code",[t._v("app.properties")]),t._v(" 方式定义配置。")]),t._v(" "),s("h3",{attrs:{id:"配置后端-http-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置后端-http-api"}},[t._v("#")]),t._v(" 配置后端 HTTP API")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"Yaml",active:""}},[s("div",{staticClass:"language-Yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("forest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" okhttp3 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置后端HTTP API为 okhttp3")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"Properties"}},[s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置后端HTTP API为 okhttp3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("okhttp3")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])],1),t._v(" "),s("p",[t._v("目前 Forest 支持"),s("code",[t._v("okhttp3")]),t._v("和"),s("code",[t._v("httpclient")]),t._v("两种后端 HTTP API，若不配置该属性，默认为"),s("code",[t._v("okhttp3")]),t._v("\n当然，您也可以改为"),s("code",[t._v("httpclient")])]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"Yaml",active:""}},[s("div",{staticClass:"language-Yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("forest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpclient "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置后端HTTP API为 httpclient")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"Properties"}},[s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置后端HTTP API为 httpclient")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("httpclient")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])],1),t._v(" "),s("h3",{attrs:{id:"全局基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局基本配置"}},[t._v("#")]),t._v(" 全局基本配置")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("application.yaml")]),t._v(" / "),s("code",[t._v("application.properties")]),t._v("中配置的 HTTP 基本参数")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"Yaml",active:""}},[s("div",{staticClass:"language-Yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("forest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" okhttp3             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后端HTTP框架（默认为 okhttp3）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-connections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接池最大连接数（默认为 500）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-route-connections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个路由的最大连接数（默认为 500）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-request-queue-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [自v1.5.22版本起可用] 最大请求等待队列大小")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-async-thread-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [自v1.5.21版本起可用] 最大异步线程数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-async-queue-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [自v1.5.22版本起可用] 最大异步线程池队列大小")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [已不推荐使用] 请求超时时间，单位为毫秒（默认为 3000）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connect-timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接超时时间，单位为毫秒（默认为 timeout）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("read-timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据读取超时时间，单位为毫秒（默认为 timeout）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-retry-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求失败后重试次数（默认为 0 次不重试）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl-protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TLS            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单向验证的HTTPS的默认TLS协议（默认为 TLS）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开或关闭日志（默认为 true）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开/关闭Forest请求日志（默认为 true）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-response-status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开/关闭Forest响应状态日志（默认为 true）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-response-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开/关闭Forest响应内容日志（默认为 false）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("async-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" platform         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [自v1.5.27版本起可用] 异步模式（默认为 platform）")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"Properties"}},[s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后端HTTP框架（默认为 okhttp3）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("okhttp3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接池最大连接数（默认为 500）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.max-connections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个路由的最大连接数（默认为 500）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.max-route-connections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("500")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [自v1.5.22版本起可用] 最大请求等待队列大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.max-request-queue-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("800")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [自v1.5.21版本起可用] 最大异步线程数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.max-async-thread-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("300")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [自v1.5.22版本起可用] 最大异步线程池队列大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.max-async-queue-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("16")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (已不推荐使用) 请求超时时间，单位为毫秒（默认为 3000）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接超时时间，单位为毫秒（默认为 timeout）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.connect-timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据读取超时时间，单位为毫秒（默认为 timeout）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.read-timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求失败后重试次数（默认为 0 次不重试）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.max-retry-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单向验证的HTTPS的默认TLS协议（默认为 TLS）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.ssl-protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("TLS")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开或关闭日志（默认为 true）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.log-enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开/关闭Forest请求日志（默认为 true）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.log-request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开/关闭Forest响应状态日志（默认为 true）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.log-response-status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开/关闭Forest响应内容日志（默认为 false）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.log-response-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [自v1.5.27版本起可用] 异步模式（默认为 platform）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.async-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("platform")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br")])])])],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("ul",[s("li",[t._v("这里"),s("font",{attrs:{color:"green"}},[s("b",[t._v("max-retry-count")])]),t._v("只是简单机械的请求失败后的重试次数，所以一般建议设置为"),s("font",{attrs:{color:"green"}},[s("b",[t._v("0")])]),t._v("。")],1),t._v(" "),s("li",[t._v("如果一定要多次重试，请一定要在保证服务端的"),s("font",{attrs:{color:"green"}},[s("b",[t._v("幂等性")])]),t._v("的基础上进行重试，否则容易引发生产事故！")],1)])]),t._v(" "),s("h3",{attrs:{id:"全局变量定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局变量定义"}},[t._v("#")]),t._v(" 全局变量定义")]),t._v(" "),s("p",[t._v("Forest 可以在"),s("code",[t._v("forest.variables")]),t._v("属性下自定义全局变量。")]),t._v(" "),s("p",[t._v("其中 key 为变量名，value 为变量值。")]),t._v(" "),s("p",[t._v("全局变量可以在任何模板表达式中进行数据绑定。")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"Yaml",active:""}},[s("div",{staticClass:"language-Yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("forest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("variables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 声明全局变量，变量名: username，变量值: foo")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userpwd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bar       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 声明全局变量，变量名: userpwd，变量值: bar")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"Properties"}},[s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 声明全局变量，变量名: username，变量值: foo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.variables.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("foo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 声明全局变量，变量名: userpwd，变量值: bar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.variables.userpwd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("bar")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])],1),t._v(" "),s("h3",{attrs:{id:"配置-bean-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-bean-name"}},[t._v("#")]),t._v(" 配置 Bean Name")]),t._v(" "),s("p",[t._v("Forest 允许您在 yaml 文件中配置 Bean Id，它对应着"),s("code",[t._v("ForestConfiguration")]),t._v("对象在 Solon 上下文中的 Bean 名称。")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"Yaml",active:""}},[s("div",{staticClass:"language-Yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("forest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bean-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config0 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在Solon上下文中bean的id，默认值为forestConfiguration")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"Properties"}},[s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在Solon上下文中bean的id，默认值为forestConfiguration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("forest.bean-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("config0")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])],1),t._v(" "),s("p",[t._v("然后便可以在 Solon 中通过 Bean 的名称引用到它")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Jnject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ForestConfiguration")]),t._v(" config0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);