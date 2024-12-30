(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{837:function(s,t,n){"use strict";n.r(t);var a=n(14),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Forest 在默认情况下会自动重定向，即服务端返回 "),t("code",[s._v("301")]),s._v("、"),t("code",[s._v("302")]),s._v("、"),t("code",[s._v("307")]),s._v(" 等状态码时，会自动跳转到新的转移地址发送请求")]),s._v(" "),t("p",[s._v("回调函数 onRedirection 可以帮助您在重定向地址转移请求发送前触发，以此获得以一次的Request和Response对象")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("onRedirection(OnRedirection onRedirection)")]),s._v(" 设置重定向回调函数: 在请求重定向时触发")]),s._v(" "),t("ul",[t("li",[s._v("参数"),t("code",[s._v("onRedirection")]),s._v(": OnRedirection 接口实例")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Forest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onRedirection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("redirectReq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" prevReq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" prevRes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// redirectReq: 重定向转移地址请求对象")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// prevReq: 重定向转移前的请求对象")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// prevRes: 重定向转移前获得的响应对象")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行请求")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"自动重定向开关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动重定向开关"}},[s._v("#")]),s._v(" 自动重定向开关")]),s._v(" "),t("p",[s._v("当然您也可以打开/关闭 Forest 请求的自动重定向")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("autoRedirects(boolean autoRedirects)")]),s._v(" 设置是否打开自动重定向")]),s._v(" "),t("ul",[t("li",[s._v("参数"),t("code",[s._v("autoRedirects")]),s._v(": "),t("code",[s._v("true")]),s._v(" 打开自动重定向, "),t("code",[s._v("false")]),s._v(" 禁止自动重定向")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForestResponse")]),s._v(" response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Forest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭自动重定向 ")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("autoRedirects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行请求   ")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForestResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最终这里的 response 将获取第一次请求的结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 而不是自动重定向转移后的响应结果")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);