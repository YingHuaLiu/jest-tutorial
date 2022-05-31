(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{448:function(s,t,a){s.exports=a.p+"assets/img/jest-architecture.82649a92.png"},449:function(s,t,a){s.exports=a.p+"assets/img/haste-map.0cd61a1b.png"},450:function(s,t,a){s.exports=a.p+"assets/img/single-worker.5024c896.png"},451:function(s,t,a){s.exports=a.p+"assets/img/multiple-workers.497a34f8.png"},452:function(s,t,a){s.exports=a.p+"assets/img/transpile.56f11504.png"},453:function(s,t,a){s.exports=a.p+"assets/img/ts-jest.4c97d98e.png"},454:function(s,t,a){s.exports=a.p+"assets/img/swc.8c4aebf1.png"},482:function(s,t,a){"use strict";a.r(t);var e=a(34),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"jest-性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jest-性能优化"}},[s._v("#")]),s._v(" Jest 性能优化")]),s._v(" "),e("p",[s._v("非常感谢能看到最后，这本指南也快到尾声了。")]),s._v(" "),e("p",[s._v("你应该也积累了不少测试文件，会发现跑这十几个测试用例变得越来越慢了，动辄一两分钟。理论上，单测和集成测试不应该跑这么慢的。所以，这一章来聊聊 "),e("strong",[s._v("Jest 的性能优化")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"jest-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jest-架构"}},[s._v("#")]),s._v(" Jest 架构")]),s._v(" "),e("p",[s._v("要解决 Jest 的性能问题，我们得了解一下 Jest 是怎么运行的。之前偶然在 "),e("a",{attrs:{href:"https://www.youtube.com/watch?v=3YDiloj8_d0&t=2s",target:"_blank",rel:"noopener noreferrer"}},[s._v("YouTube"),e("OutboundLink")],1),s._v(" 上看到 Jest 作者非常详细地讲述整个 Jest 执行流程，在这里我只做了一下简单地搬运。英语比较好的同学可以直接看视频进行了解。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(448),alt:""}})]),s._v(" "),e("p",[s._v("从上图可以看到，最影响 Jest 性能的有 3 个地方：")]),s._v(" "),e("ol",[e("li",[e("strong",[s._v("使用 "),e("code",[s._v("jest-haste-map")]),s._v(" 生成虚拟文件系统")])]),s._v(" "),e("li",[e("strong",[s._v("多线程执行测试任务")])]),s._v(" "),e("li",[e("strong",[s._v("转译 JavaScript 代码")])])]),s._v(" "),e("h2",{attrs:{id:"虚拟文件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟文件系统"}},[s._v("#")]),s._v(" 虚拟文件系统")]),s._v(" "),e("p",[s._v("如果要在热更新时修改文件，脚手架都要遍历一次项目文件，非常损耗性能。特别在一些文件特别多的巨石应用中，电脑分分钟就卡得动不了。")]),s._v(" "),e("p",[s._v("为了解决这个问题，Facebook 团队就想到了一个方法 —— "),e("strong",[s._v("虚拟文件系统")]),s._v("。原理很简单："),e("strong",[s._v("在第一次启动时遍历整个项目，把文件存储成 Map 的形式，\n之后文件做了改动，那么只需增量地修改这个 Map 就可以了。")]),s._v(" 他们把这个工具命名为 "),e("strong",[s._v("Haste Map")]),s._v("，中文翻译可以理解为快速生成 Map 的东西（这名字真的不好）。")]),s._v(" "),e("p",[e("strong",[s._v("这种思路不仅可以用于热更新场景，还能应用在所有监听文件改动的场景，其中一种就是 "),e("code",[s._v("npx jest --watch")]),s._v(" 这个场景。")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(449),alt:""}})]),s._v(" "),e("p",[s._v("因此，上面图中刚开始时，Jest 就用 "),e("code",[s._v("jest-haste-map")]),s._v(" 生成了一次虚拟文件系统，这样后续的过滤、搜索文件就非常快速了。这也是为什么执行第一个测试用例时速度比较慢的原因。\n这一步的性能我们无法优化。")]),s._v(" "),e("h2",{attrs:{id:"多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[s._v("#")]),s._v(" 多线程")]),s._v(" "),e("p",[s._v("Jest 还有一个非常强大的功能，利用 Node.js 的 Worker 开启多个线程来执行测试用例。对于一些大型项目（几千个测试用例）来说，这能提升不少效率。")]),s._v(" "),e("p",[s._v("但线程不是越多越好，每开一个线程都需要额外的开销。如果不做任何配置，那么 Jest 默认最大的 Worker 数是 "),e("code",[s._v("CPU 数 - 1")]),s._v("。其中的 "),e("code",[s._v("1")]),s._v(" 用于运行 "),e("code",[s._v("jest-cli")]),s._v("，\n剩下的都拿来执行测试用例。由于之前我们一直没有对 "),e("code",[s._v("maxWorkers")]),s._v(" 进行配置，所以默认会用最多的 Worker，执行这么几十个简单的测试会非常慢。")]),s._v(" "),e("p",[s._v("通常来说，单个测试用例速度应该要做到非常快的，尽量不写一些耗时的操作，比如不要加 "),e("code",[s._v("setTimeout")]),s._v("，"),e("code",[s._v("n")]),s._v(" 个 "),e("code",[s._v("for")]),s._v(" 循环等。\n所以，理论上，测试数量不多的情况下单线程就足够了。这里我们可以把 "),e("code",[s._v("jest.config.js")]),s._v(" 配置改为用单线程：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// jest.config.js")]),s._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("maxWorkers")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("在流水线中，Jest 也推荐使用单线程来跑单测和集成测试："),e("code",[s._v("jest --runInBand")]),s._v("，其中 "),e("code",[s._v("runInBand")]),s._v(" 和 "),e("code",[s._v("maxWorkers: 1")]),s._v(" 效果是一样的。")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[e("strong",[s._v("我试了一下在以前的 Intel Mac 里单线程的速度比多线程快了一倍，而 M1 的 Mac 上则是相反，多线程比单线程快。所以，还是要自己的机器的情况来决定使用多少个 Worker。")])])]),s._v(" "),e("p",[e("strong",[s._v("M1 Macbook Pro，单线程：")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(450),alt:"1 个 Worker"}})]),s._v(" "),e("p",[e("strong",[s._v("M1 Macbook Pro，多线程：")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(451),alt:"默认 maxWorkers"}})]),s._v(" "),e("h2",{attrs:{id:"文件转译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件转译"}},[s._v("#")]),s._v(" 文件转译")]),s._v(" "),e("p",[s._v("最后一个性能优化点就是转译速度（图中第 11 步）。需要注意的是 Jest 是会边执行测试用例边转译 JavaScript。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(452),alt:""}})]),s._v(" "),e("p",[s._v("有的同学会问了：既然 Jest 刚开始遍历项目来生成虚拟文件系统，为什么不顺便把转译的工作做了呢？"),e("strong",[s._v("当然是因为慢了。")]),s._v("\n首先，对于很多业务项目来说，测试并不会很多。可能就测几个 "),e("code",[s._v("utils")]),s._v(" 下的函数，那如果把项目的文件都转译一次，会把很多没用到测试的业务代码也转译。")]),s._v(" "),e("p",[s._v("这些同学还不甘心：那可以在拿到测试文件后，分析出这个文件的依赖，再来做转译（在第 7，8 步）了，然后再执行测试呀？理论上是可以的。但是，\n"),e("strong",[s._v("JavaScript 引入模块的方式实在是太多了")]),s._v("，先不说 "),e("code",[s._v("amd")]),s._v(", "),e("code",[s._v("es6")]),s._v(", "),e("code",[s._v("umd")]),s._v(", "),e("code",[s._v("cmd")]),s._v(", "),e("code",[s._v("abcd")]),s._v(" 这么多的引入方式了，单单这个就很难处理：")]),s._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ├── index.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// └── instances")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     ├── api1.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     ├── api2.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     ├── api3.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     └── api4.ts")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index.ts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" services "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("context")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./instances'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v(".*")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("services"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// api1, api2, api3, api4")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("strong",[s._v("所以说，通过文件找依赖的方式不是很可靠，有太多不确定因素，最终 Jest 还是选择 “执行到那个文件再做转译” 的方法。")])]),s._v(" "),e("p",[s._v("原理说完了，下面来看看怎么提高转译效率。在前面的章节里，我们说到当今 JavaScript 的转译器有很多种，不仅可以用 "),e("code",[s._v("tsc")]),s._v(" 和 "),e("code",[s._v("babel")]),s._v(" 来转，\n还能用别的语言写的转译器 "),e("code",[s._v("swc")]),s._v(" 以及 "),e("code",[s._v("esbuild")]),s._v(" 来转。")]),s._v(" "),e("p",[s._v("如果想用 "),e("code",[s._v("esbuild")]),s._v(" 做转译，可以看 "),e("a",{attrs:{href:"https://github.com/aelbore/esbuild-jest",target:"_blank",rel:"noopener noreferrer"}},[s._v("esbuild-jest"),e("OutboundLink")],1),s._v(" 这个库。这里我用 "),e("a",{attrs:{href:"https://swc.rs/docs/usage/jest",target:"_blank",rel:"noopener noreferrer"}},[s._v("@swc/jest"),e("OutboundLink")],1),s._v(" 做例子，\n先安装依赖：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D @swc/core@1.2.165 @swc/jest@0.2.20\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后在 "),e("code",[s._v("jest.config.js")]),s._v(" 里添加：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不用 ts-jest")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// preset: "ts-jest", ')]),s._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("transform")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 swc 转译 JavaScript 和 TypeScrit")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"^.+\\\\.(t|j)sx?$"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@swc/jest"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 静态资源 stub 转译")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('".+\\\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jest-transform-stub"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("大功告成，配置非常简单，我们来看看使用 "),e("code",[s._v("ts-jest")]),s._v(" 以及 "),e("code",[s._v("@swc/jest")]),s._v(" 两者的对比。")]),s._v(" "),e("p",[e("strong",[s._v("ts-jest：")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(453),alt:"ts-jest"}})]),s._v(" "),e("p",[e("strong",[s._v("@swc/jest：")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(454),alt:"@swc/jest"}})]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("这一章我们学到了 Jest 的整体架构，其中有 3 个地方比较耗性能：")]),s._v(" "),e("ol",[e("li",[e("strong",[s._v("生成虚拟文件系统。")]),s._v(" 在执行第一个测试会很慢")]),s._v(" "),e("li",[e("strong",[s._v("多线程。")]),s._v(" 生成新线程耗费的资源，不过，不同机器的效果会不一致")]),s._v(" "),e("li",[e("strong",[s._v("文件转译。")]),s._v(" Jest 会在执行到该文件再对它进行转译")])]),s._v(" "),e("p",[s._v("解决的方法有：")]),s._v(" "),e("ol",[e("li",[s._v("无解，有条件的话拆解项目吧")]),s._v(" "),e("li",[s._v("具体情况具体分析，要看机器的执行情况，多线程快就用多线程，单线程快就用单线程")]),s._v(" "),e("li",[s._v("使用 "),e("code",[s._v("esbuild-jest")]),s._v("、 "),e("code",[s._v("@swc/jest")]),s._v(" 等其它高效的转译工具来做转译")])])])}),[],!1,null,null,null);t.default=n.exports}}]);