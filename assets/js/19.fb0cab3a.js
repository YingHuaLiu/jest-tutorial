(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{457:function(s,t,a){s.exports=a.p+"assets/img/cycle.de98a7f0.jpg"},484:function(s,t,a){"use strict";a.r(t);var n=a(34),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"测试驱动开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试驱动开发"}},[s._v("#")]),s._v(" 测试驱动开发")]),s._v(" "),n("p",[s._v("在上一章，我用一个例子给大家解释了 "),n("code",[s._v("getSearchObj")]),s._v(" 函数的作用：")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[s._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("href "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.baidu.com?a=1&b=2'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSearchObj")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// result = {")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   a: '1',")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   b: '2',")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("如果大家没有写过 "),n("code",[s._v("getSearchObj")]),s._v("，可能会在实现的时候打很多个 "),n("code",[s._v("console.log")]),s._v(" 来调试它：")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("getSearchObj")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ?a=1&b=2")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" search "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" searchStr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'searchStr'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" searchStr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a=1&b=2")]),s._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pairs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" searchStr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"&"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pairs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pairs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['a=1', 'b=2']")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" searchObj"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Record"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'searchObj'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" searchObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { 'a': '1' }")]),s._v("\n\n  pairs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  [a, 1]")]),s._v("\n    searchObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" searchObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSearchObj")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("这些 "),n("code",[s._v("log")]),s._v(" 不仅难看，而且 "),n("code",[s._v("log")]),s._v(" 出来后我们还要把他们删掉。而且，这样最多只能测到一两种 Case，不能覆盖到所有边界情况。为了能手动执行它，\n我们还得一遍遍刷新网页，然后肉眼找茬。")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[n("strong",[s._v("这里的 "),n("code",[s._v("log")]),s._v(" 操作，也可以看成是一种手动测试："),n("code",[s._v("执行 -> 用眼睛看结果")]),s._v("。")])])]),s._v(" "),n("p",[s._v("那为什么不把上这些操作自动化，用程序代替手工呢？"),n("strong",[s._v("这就是 TDD（Test Driven Development）测试驱动开发。")])]),s._v(" "),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),n("p",[s._v("TDD 是一种非常好用的开发模式，做法很简单："),n("strong",[s._v("先写测试，再写业务代码，当所有测试用例都通过后，你的业务代码也就实现完了")]),s._v("，图解：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(457),alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("🚨 红色部分：在你还没添加新功能前先写的一个测试。然后你会得到一个失败的测试用例（看到 “红色” 的报错信息）。")]),s._v(" "),n("li",[s._v("✅ 绿色部分：不断添加业务代码来让测试通过（看到 “绿色” 成功通过信息）。")]),s._v(" "),n("li",[s._v("🌀 重构部分：再回过头看审视自己的代码，把它重构成可读性和维护性更高的代码（这一步最爽的点就是在重构时，你有一个测试会告诉你有没有搞崩原有逻辑）。")]),s._v(" "),n("li",[s._v("🔁 重复：这就是个循环，反正 😉 一直走下去，直到写完这个功能")])]),s._v(" "),n("p",[n("strong",[s._v("TDD 站在开发者的视角测试一个功能的组成模块比如函数或方法是否预期，而 BDD（Behavior Driven Development）行为驱动测试，与之不同是站在用户的角度描述测试用例。更多可阅读 "),n("a",{attrs:{href:"https://cucumber.io/blog/bdd/bdd-vs-tdd/#:~:text=BDD%20is%20designed%20to%20test,pieces%20of%20functionality%20in%20isolation.",target:"_blank",rel:"noopener noreferrer"}},[s._v("Understanding the Differences Between BDD & TDD"),n("OutboundLink")],1),s._v("。")])]),s._v(" "),n("p",[s._v("我们之前写的 "),n("code",[s._v("sum")]),s._v(", "),n("code",[s._v("storage")]),s._v(" 以及 "),n("code",[s._v("getSearchObj")]),s._v(" 属于 TDD 开发模式。")]),s._v(" "),n("h2",{attrs:{id:"适用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[s._v("#")]),s._v(" 适用场景")]),s._v(" "),n("p",[s._v("或许有些人不太能接受先写测试再写业务这种模式，觉得先花那么多时候在测试上不值得。这其实是一种误解，他们并没有搞清楚 TDD 要解决的问题以及它的适用场景。\nTDD 有以下适用场景：")]),s._v(" "),n("p",[n("strong",[s._v("第一种：写纯函数场景。")]),s._v(" 前面几章写的 "),n("code",[s._v("sum")]),s._v(" 和 "),n("code",[s._v("getSearchObj")]),s._v(" 就是纯函数。不管里面的逻辑简单还是复杂，我们都很容易就能想到这些函数的输入输出，\n所以写这些函数的测试用例是最简单的。先在写业务前先定义好 90% 使用场景的输入输出，Jest 就能快速帮我们验证业务实现是否正确，而不用频繁地 "),n("code",[s._v("console.log")]),s._v("。")]),s._v(" "),n("p",[n("strong",[s._v("第二种：修 Bug 场景。")]),s._v(" 这对没有任何测试的项目非常实用。当遇到 Bug 时，先写一个测试用例来复现问题，然后通过这个用例来调试业务代码。用例通过后，\n业务代码也自然被修复了。")]),s._v(" "),n("p",[n("strong",[s._v("第三种：UI 交互场景。")]),s._v(" 在开始写页面逻辑时，把 HTTP 请求给 Mock 掉（在后面会讲到），先用测试模拟真实用户的使用路径，然后再实现业务逻辑。\n当测试用例通过后，说明需求的主逻辑也是能走通的。")]),s._v(" "),n("p",[s._v("可以看到上面这些场景中没有说到 “代码质量”，“覆盖率”，“异常情况”，"),n("strong",[s._v("所以，TDD 的主要作用不是保证代码质量，\n而是给开发者创造一个更友好的开发环境，在这基础上保障了代码的主逻辑。")])]),s._v(" "),n("p",[s._v("从上面场景，我们可以得出结论："),n("strong",[s._v("TDD 比较适合那些实现复杂，但输入输出很明确的场景。")]),s._v(" 因此，TDD 也被广泛用到工具函数，数据转换函数，\n以及后端的接口测试。")]),s._v(" "),n("h2",{attrs:{id:"用例文档化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用例文档化"}},[s._v("#")]),s._v(" 用例文档化")]),s._v(" "),n("p",[n("strong",[s._v("TDD 的另一个好处（应该说是所有测试用例的好处）就是用例文档化。")])]),s._v(" "),n("p",[s._v("还记得上一章我是怎么给大家说清楚 "),n("code",[s._v("getSearchObj")]),s._v(" 的含义和作用么？我嫌啰嗦，直接套用了一个例子来让你明白什么叫 "),n("strong",[s._v("“把网页地址中的查询参数字符串转换为对象”")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[s._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("href "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.baidu.com?a=1&b=2'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSearchObj")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// result = {")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   a: '1',")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   b: '2',")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("如果这时又有一个人问我这个函数是用来干嘛的，我又得说一遍这个例子。那为什么不把它记录到代码里呢？"),n("strong",[s._v("当使用 TDD 时，\n提前写的测试用例都会提交到代码仓库里，可以作为一份简单的使用文档。")]),s._v(" 这样的好处有：")]),s._v(" "),n("p",[n("strong",[s._v("降低上手难度。")]),s._v(" 相信大家在使用别人的模块时，经常会听到：“你看 XXX 文件就知道 YYY 怎么用了”。但这个 XXX 文件往往有非常多的依赖和干扰项，\n很难弄清楚最简单的使用方法。"),n("strong",[s._v("而测试用例（特别是单测）通常只测其中一个使用场景，所以它们会记录着最简单、朴素的 Use Case。使用者只需看测试用例，\n即可知道如何上手。")])]),s._v(" "),n("p",[n("strong",[s._v("用例正确性。")]),s._v(" 接口文档化是做后端（Node 端）非常重要的一步，有的人写在腾讯文档，有的人喜欢存在 Postman，以方便调试。但这些用例有个致命的缺点：\n接口发生变更时，很难及时更新对应的示例。测试用例正好可以解决这个问题，"),n("strong",[s._v("由于测试用例必须全部通过才能 Push 代码，所以我们永远不用担心用例的过期问题。")])]),s._v(" "),n("h2",{attrs:{id:"实战"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[s._v("#")]),s._v(" 实战")]),s._v(" "),n("p",[s._v("言归正传，我们来简单使用一下 TDD。假如现在有一个需求："),n("em",[s._v("把给定对象转换成查询参数字符串。")])]),s._v(" "),n("p",[s._v("首先，我们添加 "),n("code",[s._v("tests/utils/objToSearchStr.test.ts")]),s._v("，用测试用例来描述这个需求：")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" objToSearchStr "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utils/objToSearchStr"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("describe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"objToSearchStr"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("it")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"可以将对象转化成查询参数字符串"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("objToSearchStr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toEqual")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a=1&b=2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("然后，再来添加 "),n("code",[s._v("src/utils/objToSearchStr.ts")]),s._v("，边看业务输入输出边实现代码逻辑：")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("objToSearchStr")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Record"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['a=1', 'b=2']")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" strPairs"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("entries")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("keyValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" keyValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [a, 1]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pair "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a=1")]),s._v("\n    strPairs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a=1&b=2")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" strPairs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"&"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" objToSearchStr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("在执行测试时，我们还能用 IDE 的调试器来做断点调试，绝对比疯狂打 "),n("code",[s._v("console.log")]),s._v(" 来得高效。")]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("在这一章里，我们学到 TDD 和 BDD 两种开发模式：")]),s._v(" "),n("ul",[n("li",[s._v("TDD：先测试，之后补充业务")]),s._v(" "),n("li",[s._v("BDD：先写业务，再对重要部分补充测试")])]),s._v(" "),n("p",[s._v("我们还了解到TDD 的使用场景和要解决的问题、以及用例文档化的好处。最后，我们用 TDD 的开发模式来实现了 "),n("code",[s._v("objToSearchStr")]),s._v(" 这个函数。")])])}),[],!1,null,null,null);t.default=e.exports}}]);