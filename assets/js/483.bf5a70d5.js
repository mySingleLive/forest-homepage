(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{850:function(t,s,a){"use strict";a.r(s);var v=a(14),n=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("直接在"),s("code",[t._v("${}")]),t._v("或"),s("code",[t._v("{}")]),t._v("中填入从"),s("code",[t._v("0")]),t._v("开始的数字，其中的数字代表方法参数的序号，比如"),s("code",[t._v("{0}")]),t._v("代表方法的第一个参数，"),s("code",[t._v("{1}")]),t._v("代表第二个参数，第n个参数引用用"),s("code",[t._v("{n-1}")]),t._v("表示（这里的n是数字，并不是变量名）")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("友情提示")]),t._v(" "),s("p",[t._v("代表参数序号的数字只能是"),s("b",[t._v("整数")]),t._v("，"),s("b",[t._v("不能是小数")]),t._v("，并且"),s("b",[t._v("不能是负数")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/hello?p1={0}&p2={1}&p3={2}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("如调用"),s("code",[t._v("send()")]),t._v("方法并传入参数 "),s("b",[t._v("3")]),t._v(", "),s("b",[t._v("6")]),t._v(", "),s("b",[t._v("9")]),t._v(", 那么产生的"),s("code",[t._v("url")]),t._v("值就是")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("http://localhost:8080/hello?p1=3&p2=6&p3=9\n")])])]),s("p",[t._v("以上这种"),s("code",[t._v("{数字}")]),t._v("的形式是参数序号的简化语法，而有时候"),s("code",[t._v("{表达式}")]),t._v("中的数字如果和其它表达式结合起来参与计算，那此时它就不代表数字所对应的参数了，而只是纯粹的数字。如一下例子：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/hello?p1={0.toString()}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("如果此时调用方法"),s("code",[t._v("send(100)")]),t._v("，那么产生的"),s("code",[t._v("url")]),t._v("将是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("http://localhost:8080/hello?p1=0\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这里使用了模板表达式的"),s("b",[t._v("方法")]),t._v("调用语法")])]),t._v(" "),s("p",[t._v("这时"),s("code",[t._v("{}")]),t._v("中的"),s("code",[t._v("0")]),t._v("代表的并不是参数"),s("code",[t._v("num")]),t._v("的值，而仅仅就是数字"),s("code",[t._v("0")]),t._v("，作为被调用"),s("code",[t._v("toString()")]),t._v("方法的整数对象。")]),t._v(" "),s("p",[t._v("若想此时也引用参数序号传入参数"),s("code",[t._v("num")]),t._v("的值，并且也参与"),s("code",[t._v("toString()")]),t._v("方法调用的运算，也是有办法的。")]),t._v(" "),s("p",[t._v("这时就要用到参数序号的非简化语法"),s("code",[t._v("$")]),t._v(" + "),s("code",[t._v("非负整数")]),t._v("了。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/hello?p1={$0.toString()}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("如果此时调用方法"),s("code",[t._v("send(100)")]),t._v("，那么产生的"),s("code",[t._v("url")]),t._v("将是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("http://localhost:8080/hello?p1=100\n")])])]),s("p",[t._v("这时我们所看到"),s("code",[t._v("{$0.toString()}")]),t._v("就我们所期望的"),s("code",[t._v("num")]),t._v("参数经过调用"),s("code",[t._v("toString()")]),t._v("方法最终返回的结果了。")]),t._v(" "),s("h3",{attrs:{id:"简化与非简化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简化与非简化"}},[t._v("#")]),t._v(" 简化与非简化")]),t._v(" "),s("p",[t._v("说到这里，可能我们有些小伙伴就凌乱了。什么简化的？非简化的？不都是参数序号吗？怎么又变成数字了呢？")]),t._v(" "),s("p",[t._v("别急，其实要区分什么时候是数字，什么时候是参数序号，以及什么是简化参数序号，什么是非简化参数序号是很简单的，只要记住以下3条规则即可。")]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("p",[s("code",[t._v("${}")]),t._v("或"),s("code",[t._v("{}")]),t._v("中只包含一个"),s("code",[t._v("非负整数")]),t._v("时，就是参数序号，且是简化形态的。如："),s("code",[t._v("{1}")]),t._v(", "),s("code",[t._v("{5}")]),t._v("等等。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("${}")]),t._v("或"),s("code",[t._v("{}")]),t._v("中不只包含一个数字，还有其它东西存在时，那此时里面的数字都只是数字。如"),s("code",[t._v("{1.toString()}")]),t._v(", "),s("code",[t._v("{json(0)}")]),t._v("等等。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("${}")]),t._v("或"),s("code",[t._v("{}")]),t._v("中的"),s("code",[t._v("非负整数")]),t._v("以"),s("code",[t._v("$")]),t._v("符号开头，那它就是一个参数序号（非简化的），不管"),s("code",[t._v("{}")]),t._v("中只有一个还是有多个都是。如"),s("code",[t._v("{$1}")]),t._v(", "),s("code",[t._v("{json($0)}")]),t._v(", "),s("code",[t._v("$3.compareTo($2)")])])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("还有不要忘了参数序号只能是"),s("b",[t._v("整数")]),t._v("，并且"),s("b",[t._v("不能是负的")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"参数序号总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数序号总结"}},[t._v("#")]),t._v(" 参数序号总结")]),t._v(" "),s("p",[t._v("用参数序号方式比变量名方式更为简洁，因为不用定义"),s("code",[t._v("@Var")]),t._v("注解，也不用引用冗长的变量名，是目前比较推荐的引用方式。")]),t._v(" "),s("p",[t._v("不过它也有缺点，就是在参数较多的时候较难立刻对应起来，不够直观，比较影响代码可读性。所以还请根据场景和入参的多寡来决定用哪种引用方式。")])])}),[],!1,null,null,null);s.default=n.exports}}]);