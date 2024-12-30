(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{773:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"模板表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板表达式"}},[a._v("#")]),a._v(" 模板表达式")]),a._v(" "),t("p",[a._v("在"),t("code",[a._v("@Request")]),a._v("的各大属性中大多数都是用"),t("code",[a._v("String")]),a._v("字符串填值的，如果要在这些字符串属性中动态地关联参数数据，用Java原生字符串连接(如"),t("code",[a._v("+")]),a._v(")是不行的，而且也不够直观。")]),a._v(" "),t("p",[a._v("所以Forest为了帮助您参数数据动态绑定到这些属性上，提供了模板表达式。")]),a._v(" "),t("h3",{attrs:{id:"表达式hello-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表达式hello-world"}},[a._v("#")]),a._v(" 表达式Hello World")]),a._v(" "),t("p",[a._v("Forest的模板表达式是在普通的Java字符串中嵌入"),t("code",[a._v("{表达式}")]),a._v("来实现字符串和数据的动态绑定。")]),a._v(" "),t("p",[a._v("嵌入的表达式由左花括号"),t("code",[a._v("{")]),a._v("开始，到右花括号"),t("code",[a._v("}")]),a._v("结束，在两边花括号中间填写的内容是表达式的本体。")]),a._v(" "),t("p",[a._v("最简单的表达式可以是一个"),t("code",[a._v("@Var")]),a._v("标注的变量名，或是一个全局配置中定义的全局变量名。")]),a._v(" "),t("p",[a._v("让我们来看一个最简单的模板表达式Hello World的例子吧")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost:8080/hello/{name}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("若在调用"),t("code",[a._v("send")]),a._v("方法时传入参数为"),t("code",[a._v('"world"')]),a._v("，那么这时被表达式绑定"),t("code",[a._v("url")]),a._v("属性则会变成：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("http://localhost:8080/hello/world\n")])])]),t("p",[a._v("也可以嵌入"),t("code",[a._v("${表达式}")]),a._v("这种以美元符号("),t("code",[a._v("$")]),a._v(")开始，再由左花括号"),t("code",[a._v("{")]),a._v("开始，到右花括号"),t("code",[a._v("}")]),a._v("结束的字符串模板形式")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost:8080/hello/${name}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("调用后效果和上面例子一样")]),a._v(" "),t("h2",{attrs:{id:"表达式-与-表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表达式-与-表达式"}},[a._v("#")]),a._v(" {表达式} 与 ${表达式}")]),a._v(" "),t("h3",{attrs:{id:"表达式-代表一个query参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表达式-代表一个query参数"}},[a._v("#")]),a._v(" "),t("code",[a._v("{表达式}")]),a._v("代表一个Query参数")]),a._v(" "),t("p",[t("code",[a._v("{表达式}")]),a._v("模板参数，在"),t("code",[a._v("?a={a}")]),a._v('的情况下，会被认为是一个Query参数，即便变量可能包含"1&x=10&y=20"这样多个参数的字符串，也会被转义成一个Query参数')]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost/data?a={a}&b={b}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 最终产生的URL是")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// http://localhost/data?a=1%26x%3D10%26y%3D20&b=hello")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 也就是只会有 a 和 b 两个Query参数")]),a._v("\nmyClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1&x=10&y=20"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"表达式-可以包含多个query参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表达式-可以包含多个query参数"}},[a._v("#")]),a._v(" "),t("code",[a._v("${表达式}")]),a._v("可以包含多个Query参数")]),a._v(" "),t("p",[a._v("而 "),t("code",[a._v("${表达式}")]),a._v("模板参数，可以认为是一种字符串替换，替换完再对URL参数进行解析，所以一个模板参数引用的变量中可能包含多个参数，也会被解析成多个参数")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost/data?a=${a}&b=${b}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 最终产生的URL是")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// http://localhost/data?a=1&x=10&y=20&b=hello")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 也就是只会有 a、x、y、b 四个Query参数")]),a._v("\nmyClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1&x=10&y=20"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"推荐使用-表达式-作为模板参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐使用-表达式-作为模板参数"}},[a._v("#")]),a._v(" 推荐使用"),t("code",[a._v("{表达式}")]),a._v("作为模板参数")]),a._v(" "),t("p",[a._v("基于这两种模板参数各自的特性，都各有各的用处，但一般情况下，"),t("b",[a._v("推荐使用"),t("code",[a._v("{表达式}")])])]),a._v(" "),t("p",[a._v("因为它更结构化、更语义化，也更容易让人理解，不容易出错，尤其是在URL参数中传递另一个URL地址时的作用更为突出")]),a._v(" "),t("p",[a._v("比如，要传一个带参数的子URL："),t("code",[a._v("https://search.gitee.com/?type=repository&q=forest")])]),a._v(" "),t("p",[a._v("接到父URL后为 "),t("code",[a._v("http://localhost/data?call={url}")])]),a._v(" "),t("p",[a._v("如果是用"),t("code",[a._v("${url}")]),a._v("就会出问题")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/data?call=${url}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 最后产生的URL是")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// http://localhost/data?call=https://search.gitee.com/?type=repository&q=forest")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("咋看起来没错，但最后那部分"),t("code",[a._v("&q=forest")]),a._v("会被认为是父URL的Query参数，但其实应该是子URL的")]),a._v(" "),t("p",[a._v("如果用 "),t("code",[a._v("{url}")]),a._v(" 就没这个问题，即使后来再有其它参数也毫无问题")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/data?call={url}&x={x}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"x"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 最后产生的URL是")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// http://localhost/data?call=https://search.gitee.com/?type=repository%26q=forest&x=xxx")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("可以看到，子URL中Query参数的连接符"),t("code",[a._v("&")]),a._v("被转义了，这样就解决了子URL参数和父URL参数(如后面的"),t("code",[a._v("x")]),a._v(")之间产生的歧义")])])}),[],!1,null,null,null);t.default=e.exports}}]);