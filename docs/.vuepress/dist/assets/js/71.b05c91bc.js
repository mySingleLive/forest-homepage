(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{389:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("模板表达式中除了可以引用变量和参数序号外，还可以引用它们的属性。")]),s._v(" "),t("p",[s._v("属性引用和"),t("code",[s._v("java")]),s._v("以及"),t("code",[s._v("SpringEL")]),s._v("一样，通过在变量名或者参数序号后面跟上点"),t("code",[s._v(".")]),s._v("符号，再加上属性名即可。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080/user/{user.username}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("现在我们调用"),t("code",[s._v("getUser()")]),s._v("方法，并传入一个"),t("code",[s._v("User")]),s._v("类的对象，那么"),t("code",[s._v("{user.username}")]),s._v("得到的结果就是调用user对象的"),t("code",[s._v("Getter")]),s._v("方法"),t("code",[s._v("getUsername()")]),s._v("所得到的值。")]),s._v(" "),t("p",[s._v("模板表达式支持连续的属性引用")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080/user/phone_number/{user.phone.number}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这里"),t("code",[s._v("${user.phone.number}")]),s._v("的结果就相当于调用"),t("code",[s._v("user.getPhone().getNumber()")]),s._v("的结果。")])])}),[],!1,null,null,null);t.default=e.exports}}]);