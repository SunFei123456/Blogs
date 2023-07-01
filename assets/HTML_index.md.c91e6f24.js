import{_ as e,o as a,c as l,O as i}from"./chunks/framework.cb5c97e4.js";const b=JSON.parse('{"title":"HTML 面试系列问题","description":"","frontmatter":{},"headers":[],"relativePath":"HTML/index.md","filePath":"HTML/index.md"}'),t={name:"HTML/index.md"},o=i(`<h1 id="html-面试系列问题" tabindex="-1">HTML 面试系列问题 <a class="header-anchor" href="#html-面试系列问题" aria-label="Permalink to &quot;HTML 面试系列问题&quot;">​</a></h1><h2 id="_1-什么是-doctype-有何作用" tabindex="-1">1. 什么是 <em>DOCTYPE</em>， 有何作用？ <a class="header-anchor" href="#_1-什么是-doctype-有何作用" aria-label="Permalink to &quot;1. 什么是 *DOCTYPE*， 有何作用？&quot;">​</a></h2><p><code>Doctype</code>是HTML5的文档声明，通过它可以告诉浏览器，使用哪一个HTML版本标准解析文档。在浏览器发展的过程中，HTML出现过很多版本，不同的版本之间格式书写上略有差异。如果没有事先告诉浏览器，那么浏览器就不知道文档解析标准是什么？此时，大部分浏览器将开启最大兼容模式来解析网页，我们一般称为<code>怪异模式</code>，这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的<code>bug</code>，所以文档声明是必须的。</p><h2 id="_2-说说对-html-语义化的理解" tabindex="-1">2. 说说对 <em>html</em> 语义化的理解 <a class="header-anchor" href="#_2-说说对-html-语义化的理解" aria-label="Permalink to &quot;2. 说说对 *html* 语义化的理解&quot;">​</a></h2><p>HTML标签的语义化，简单来说，就是用正确的标签做正确的事情，给某块内容用上一个最恰当最合适的标签，使页面有良好的结构，页面元素有含义，无论是谁都能看懂这块内容是什么。</p><p>语义化的优点如下：</p><ul><li>在没有CSS样式情况下也能够让页面呈现出清晰的结构</li><li>有利于SEO和搜索引擎建立良好的沟通，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重</li><li>方便团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化</li></ul><h2 id="_3-src-和-href-的区别" tabindex="-1">3. <em>src</em> 和 <em>href</em> 的区别 <a class="header-anchor" href="#_3-src-和-href-的区别" aria-label="Permalink to &quot;3. *src* 和 *href* 的区别&quot;">​</a></h2><p>src和href都是HTML中特定元素的属性，都可以用来引入外部的资源。两者区别如下：</p><ul><li>src：全称<em>source</em>，它通常用于img、video、audio、script元素，通过src指向请求外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置，在请求src资源时，它会将资源下载并应用到文档内，比如说：js脚本、img图片、frame等元素。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。这也是为什么将js脚本放在底部而不是头部的原因。</li><li>href：全称<em>hyper reference</em>，意味着超链接，指向网络资源，当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，通常用于a、link元素。</li></ul><h2 id="_4-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别" tabindex="-1">4. <em>title</em> 与 <em>h1</em> 的区别、<em>b</em> 与 <em>strong</em> 的区别、<em>i</em> 与 <em>em</em> 的区别？ <a class="header-anchor" href="#_4-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别" aria-label="Permalink to &quot;4. *title* 与 *h1* 的区别、*b* 与 *strong* 的区别、*i* 与 *em* 的区别？&quot;">​</a></h2><ul><li><em>title</em> 属性表示网页的标题，<em>h1</em> 元素则表示层次明确的页面内容标题，对页面信息的抓取也有很大的影响</li><li><em>strong</em> 是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：strong会重读，而<em>b</em>是展示强调内容</li><li><em>i</em> 是<em>italic</em>(斜体)的简写，是早期的斜体元素，表示内容展示为斜体，而 <em>em</em> 是<em>emphasize</em>（强调）的简写，表示强调的文本</li></ul><h2 id="_5-什么是严格模式与混杂模式" tabindex="-1">5. 什么是严格模式与混杂模式？ <a class="header-anchor" href="#_5-什么是严格模式与混杂模式" aria-label="Permalink to &quot;5. 什么是严格模式与混杂模式？&quot;">​</a></h2><ul><li>严格模式：是以浏览器支持的最高标准运行</li><li>混杂模式：页面以宽松向下兼容的方式显示，模拟老式浏览器的行为</li></ul><h2 id="_6-前端页面有哪三层构成-分别是什么" tabindex="-1">6. 前端页面有哪三层构成，分别是什么？ <a class="header-anchor" href="#_6-前端页面有哪三层构成-分别是什么" aria-label="Permalink to &quot;6. 前端页面有哪三层构成，分别是什么？&quot;">​</a></h2><p>构成：<code>结构层</code>、<code>表示层</code>、<code>行为层</code></p><ol><li><p>结构层（structural layer）</p><p>结构层类似于盖房子需要打地基以及房子的悬梁框架，它是由HTML超文本标记语言来创建的，也就是页面中的各种标签，在结构层中保存了用户可以看到的所有内容，比如说：一段文字、一张图片、一段视频等等</p></li><li><p>表示层（presentation layer）</p><p>表示层是由CSS负责创建，它的作用是如何显示有关内容，学名：<code>层叠样式表</code>，也就相当于装修房子，看你要什么风格的，田园的、中式的、地中海的，总之CSS都能办妥</p></li><li><p>行为层（behaviorlayer）</p><p>行为层表示网页内容跟用户之间产生交互性，简单来说就是用户操作了网页，网页给用户一个反馈，这是<code>JavaScript</code>和<code>DOM</code>主宰的领域</p></li></ol><h2 id="_7-iframe的作用以及优缺点" tabindex="-1">7. iframe的作用以及优缺点 <a class="header-anchor" href="#_7-iframe的作用以及优缺点" aria-label="Permalink to &quot;7. iframe的作用以及优缺点&quot;">​</a></h2><p>iframe也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入到现有的网页中。</p><p>优点：</p><ul><li>可以用来处理加载缓慢的内容，比如：广告</li></ul><p>缺点：</p><ul><li>iframe会阻塞主页面的Onload事件</li><li>iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。但是可以通过JS动态给ifame添加src属性值来解决这个问题，当然也可以解决iframe会阻塞主页面的Onload事件的问题</li><li>会产生很多页面，不易管理</li><li>浏览器的后退按钮没有作用</li><li>无法被一些搜索引擎识别</li></ul><h2 id="_8-img上-title-与-alt" tabindex="-1">8. img上 title 与 alt <a class="header-anchor" href="#_8-img上-title-与-alt" aria-label="Permalink to &quot;8. img上 title 与 alt&quot;">​</a></h2><ul><li>alt：全称<code>alternate</code>，切换的意思，如果无法显示图像，浏览器将显示alt指定的内容</li><li>title：当鼠标移动到元素上时显示title的内容</li></ul><p>区别：</p><p>一般当鼠标滑动到元素身上的时候显示<code>title</code>，而<code>alt</code>是img标签特有的属性，是图片内容的等价描述，用于图片无法加载时显示，这样用户还能看到关于丢失了什么东西的一些信息，相对来说比较友好。</p><h2 id="_9-h5和html5区别" tabindex="-1">9. H5和HTML5区别 <a class="header-anchor" href="#_9-h5和html5区别" aria-label="Permalink to &quot;9. H5和HTML5区别&quot;">​</a></h2><ul><li>H5是一个产品名词，包含了最新的HTML5、CSS3、ES6等新技术来制作的应用</li><li>HTML5是一个技术名词，指的就是第五代HTML</li></ul><h2 id="_10-行内元素和块级元素分别有哪些-有何区别-怎样转换" tabindex="-1">10. 行内元素和块级元素分别有哪些？有何区别？怎样转换？ <a class="header-anchor" href="#_10-行内元素和块级元素分别有哪些-有何区别-怎样转换" aria-label="Permalink to &quot;10. 行内元素和块级元素分别有哪些？有何区别？怎样转换？&quot;">​</a></h2><p>常见的块级元素：<code>p、div、form、ul、li、ol、table、h1、h2、h3、h4、h5、h6、dl、dt、dd</code></p><p>常见的行级元素：<code>span、a、img、button、input、select</code></p><p>块级元素：</p><ul><li>总是在新行上开始，就是每个块级元素独占一行，默认从上到下排列</li><li>宽度缺少时是它的容器的100%，除非设置一个宽度</li><li>高度、行高以及外边距和内边距都是可以设置的</li><li>块级元素可以容纳其它行级元素和块级元素</li></ul><p>行内元素：</p><ul><li>和其它元素都会在一行显示</li><li>高、行高以及外边距和内边距可以设置</li><li>宽度就是文字或者图片的宽度，不能改变</li><li>行级元素只能容纳文本或者其它行内元素</li></ul><p>使用行内元素需要注意的是：</p><ul><li>行内元素设置宽度<code>width</code>无效</li><li>行内元素设置<code>height</code>无效，但是可以通过<code>line-height</code>来设置</li><li>设置<code>margin</code>只有左右有效，上下无效</li><li>设置<code>padding</code>只有左右有效，上下无效</li></ul><p>可以通过<code>display</code>属性对行内元素和块级元素进行切换(主要看第 <code>2、3、4</code>三个值)：</p><p><img src="" alt=""></p><h2 id="_11-label的作用是什么-是怎么用的" tabindex="-1">11. label的作用是什么？是怎么用的？ <a class="header-anchor" href="#_11-label的作用是什么-是怎么用的" aria-label="Permalink to &quot;11. label的作用是什么？是怎么用的？&quot;">​</a></h2><p><code>label</code>元素不会向用户呈现任何特殊效果，但是，它为鼠标用户改进了可用性，当我们在label元素内点击文本时就会触发此控件。也就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。最常用label的地方就是表单中的性别单选框了，当点击文字时也能够自动聚焦绑定的表单控件。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;label for=&quot;male&quot;&gt;男&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;input type=&quot;radio&quot; name=&quot;sex&quot; id=&quot;male&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;label for=&quot;female&quot;&gt;女&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;input type=&quot;radio&quot; name=&quot;sex&quot; id=&quot;female&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_12-对于web标准以及w3c的理解" tabindex="-1">12. 对于Web标准以及W3C的理解 <a class="header-anchor" href="#_12-对于web标准以及w3c的理解" aria-label="Permalink to &quot;12. 对于Web标准以及W3C的理解&quot;">​</a></h2><p><code>Web标准</code>简单来说可以分为结构、表现、行为。其中结构是由HTML各种标签组成，简单来说就是body里面写入标签是为了页面的结构。表现指的是CSS层叠样式表，通过CSS可以让我们的页面结构标签更具美感。行为指的是页面和用户具有一定的交互，这部分主要由JS组成</p><p><code>W3C</code>，全称：world wide web consortium是一个制定各种标准的非盈利性组织，也叫万维网联盟，标准包括HTML、CSS、ECMAScript等等，web标准的制定有很多好处，比如说：</p><ul><li>可以统一开发流程，统一使用标准化开发工具（VSCode、WebStorm、Sublime），方便多人协作</li><li>学习成本降低，只需要学习标准就行，否则就要学习各个浏览器厂商标准</li><li>跨平台，方便迁移都不同设备</li><li>降低代码维护成本</li></ul><h2 id="_13-quirks-怪癖-模式是什么-它和standards-标准-有什么区别" tabindex="-1">13. Quirks（怪癖）模式是什么？它和Standards（标准）有什么区别？ <a class="header-anchor" href="#_13-quirks-怪癖-模式是什么-它和standards-标准-有什么区别" aria-label="Permalink to &quot;13. Quirks（怪癖）模式是什么？它和Standards（标准）有什么区别？&quot;">​</a></h2><p>页面如果写了DTD，就意味着这个页面采用对CSS支持更好的布局，而如果没有，则采用兼容之前的布局方式，这就是Quirks模式，有时候也叫怪癖模式、诡异模式、怪异模式。</p><p>区别：总体会有布局、样式解析、脚本执行三个方面区别，这里列举一些比较常见的区别：</p><ul><li><code>盒模型</code>：在W3C标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，然而在Quirks模式下，IE的宽度和高度还包含了padding和border</li><li><code>设置行内元素的高宽</code>：在Standards模式下，给行内元素设置width和height都不会生效，而在Quriks模式下会生效</li><li><code>用margin：0 auto设置水平居中</code>:在Standards模式下，设置margin：0 auto；可以使元素水平居中，但是在Quriks模式下失效</li><li><code>设置百分比高度</code>:在Standards模式下，元素的高度是由包含的内容决定的，如果父元素没有设置百分比的高度，子元素设置百分比的高度是无效的</li></ul><h2 id="_14-知道什么是微格式吗-谈谈理解-在前端构建中应该考虑微格式吗" tabindex="-1">14. 知道什么是微格式吗？谈谈理解，在前端构建中应该考虑微格式吗？ <a class="header-anchor" href="#_14-知道什么是微格式吗-谈谈理解-在前端构建中应该考虑微格式吗" aria-label="Permalink to &quot;14. 知道什么是微格式吗？谈谈理解，在前端构建中应该考虑微格式吗？&quot;">​</a></h2><p>所谓的微格式是建立在已有的、被广泛采用的标准基础之上的一组简单的、开放的数据格式。</p><p>具体表现是把语义嵌入到HTML中，以便有助于分离式开发，并通过制定一些简单的约定，来兼顾HTML文档的人机可读性，相当于对web网页进行语义注解。</p><p>采用微格式的web页面，在HTML文档中给一些标签增加一些属性，这些属性对信息的语义结构进行注解，有助于处理HTML文档的软件，更好的理解HTML文档。当爬取web内容时，能够更为准确地识别内容块的语义，微格式可以对网站进行SEO优化。</p><h2 id="_15-html5为什么只需要写-doctype-html" tabindex="-1">15. HTML5为什么只需要写<code>&lt;!DOCTYPE html&gt;</code>? <a class="header-anchor" href="#_15-html5为什么只需要写-doctype-html" aria-label="Permalink to &quot;15. HTML5为什么只需要写\`&lt;!DOCTYPE html&gt;\`?&quot;">​</a></h2><p>为什么HTML5只需要写一段：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>而HTML4却需要写很长的一段</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">HTML</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">PUBLIC</span><span style="color:#89DDFF;"> </span><span style="color:#C3E88D;">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C3E88D;">&quot;http://www.w3.org/TR/html4/loose.dtd&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其实主要是因为HTML5不基于SGML，所以不需要引用DTD。在HTML4中，<code>&lt;!DOCTYPE&gt;</code>声明引用DTD，因为HTML4基于SGML。DTD规定了标记语言的规则，这样浏览器才能正确的呈现内容。</p><h2 id="_16-html5新增了哪些新特性-移除了哪些元素" tabindex="-1">16. HTML5新增了哪些新特性？移除了哪些元素？ <a class="header-anchor" href="#_16-html5新增了哪些新特性-移除了哪些元素" aria-label="Permalink to &quot;16. HTML5新增了哪些新特性？移除了哪些元素？&quot;">​</a></h2><p>HTML5主要是关于图像、位置、存储、多任务等功能的增加：</p><ul><li>语义化标签，如：article、footer、header、nav等</li><li>视频video、音频audio</li><li>画布canvas</li><li>表单控件，calemdar、date、time、email</li><li>地理</li><li>本地离线存储，localStorage长期存储数据，浏览器关闭后数据不丢失，sessionStorage的数据在浏览器关闭后自动删除</li><li>拖拽释放</li></ul><p>移除的元素：</p><ul><li>纯表现的元素：<code>basefont、font、s、strike、tt、u、big、center</code></li><li>对可选用性产生负面影响的元素：<code>frame、frameset、noframes</code></li></ul><h2 id="_19-a元素除了用于导航外-还有什么作用" tabindex="-1">19. a元素除了用于导航外，还有什么作用？ <a class="header-anchor" href="#_19-a元素除了用于导航外-还有什么作用" aria-label="Permalink to &quot;19. a元素除了用于导航外，还有什么作用？&quot;">​</a></h2><p>href属性中的url可以是浏览器支持的任何协议，所以a标签可以用来手机拨号<code>&lt;a href=&quot;tel:110&quot;&gt;110&lt;/a&gt;</code>，也可以用来发送短信<code>&lt;a href=&quot;sms:110&quot;&gt;110&lt;/a&gt;</code>，还有邮件等等</p><p>当然，a元素最常见的就是用来做<em>锚点</em>和 <em>下载文件</em>。</p><p>锚点可以在点击时快速定位到一个页面的某个位置，而下载的原理在于a标签所对应的资源浏览器无法解析，于是浏览器会选择将其下载下来。</p>`,70),s=[o];function n(r,p,c,d,h,m){return a(),l("div",null,s)}const q=e(t,[["render",n]]);export{b as __pageData,q as default};
