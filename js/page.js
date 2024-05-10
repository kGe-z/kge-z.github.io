const pageList =[{"pageId":"/index","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>文章示例——优秀软件工程师的自我修养</span></h1><div class=\"paragraph\" style=\"\"><span>原链：</span><span><a href=\"https://medium.com/@_michaellin/how-to-be-a-10x-engineer-fdac2a5a1bd5\" target=\"_blank\" class=\"link\">How to Be a 10x Software Engineer | by Michael Lin | Feb, 2022 | Medium</a></span></div><h1 style=\"\" id=\"N2NhODBm\"><span>初级工程师常犯的3个错误。你在犯这些错误吗？</span></h1><div class=\"paragraph\" style=\"\"><span></span></div><div class='image'>\n            <img src=\"./image/1.png\" style=\"width: 788px;\"/>\n            \n        </div><div class=\"paragraph\" style=\"\"><span>最优秀的工程师一夫当关万夫莫开。就像一支单兵部队一样，相比一个初级工程师团队，他们能够更高效更优质地提供更多价值。</span></div><div class=\"paragraph\" style=\"\"><span>但这怎么可能呢？不是越多越好吗？ </span></div><div class=\"paragraph\" style=\"\"><span>在我担任Netflix和亚马逊的工程负责人期间，我曾与刚毕业的实习生一起工作，一直到首席工程师（亚马逊的L7及以上级别），我可以证明最优秀的工程师确实存在。我也可以自信地说，他们不仅仅是：</span></div><ul><li style=\"\"><span>打字速度快 10 倍</span></li><li style=\"\"><span>工作 10 倍的时间</span></li><li style=\"\"><span>写 10 倍以上的代码</span></li></ul><div class=\"paragraph\" style=\"\"><span>事实上，最优秀的工程师的打字速度可能只有一半，工作时间也只有一半，而且花在删除代码上的时间比写代码多。</span></div><div class='image'>\n            <img src=\"./image/2.png\" style=\"width: 1280px;\"/>\n            <div class='image-caption'>10倍的工程师往往在LeetCode方面也更出色，但这并不是他们与众不同的地方。</div>\n        </div><div class=\"paragraph\" style=\"\"><span><strong>最好的工程师和初级工程师之间的区别可以归结为心态的问题。他们使用正确的工具，问正确的问题，并知道如何确定优先次序。这些技能与编码关系不大，即使是非技术人员也能培养。</strong></span></div><blockquote><div style=\"\"><span>令人惊讶的是，将最好的工程师与普通工程师区分开来的是非技术性技能。</span></div></blockquote><div class=\"paragraph\" style=\"\"><span>在这篇文章中，我讨论了初级工程师常犯的3个错误，以及高级工程师如何以不同的方式解决同样的问题--导致巨大的不同结果。</span></div><h2 style=\"\" id=\"MzU3ZmE2\"><span>1. 对工具的研究不深入</span></h2><div class=\"paragraph\" style=\"\"><span>亚伯拉罕-林肯曾经说过：&quot;如果我有8个小时来砍一棵树，我会花7个小时来磨我的斧头。</span></div><div class=\"paragraph\" style=\"\"><span>一个初级工程师可能会花8个小时用一把钝斧头砍树，而高级工程师会花1小时挑选合适的电锯，再花5分钟砍树。</span></div><div class='image'>\n            <img src=\"./image/3.png\" style=\"width: 344px;\"/>\n            <div class='image-caption'>诚实的亚伯会成为一个伟大的工程师</div>\n        </div><div class=\"paragraph\" style=\"\"><span>我看到初级工程师常犯的一个错误是，他们只顾埋头写代码，坚持使用他们知道的工具，并试图将其适用于各种情况。</span></div><blockquote><div style=\"\"><span>如果一个普通的工程师只知道如何使用锤子，他们也会用锤子来挖洞🙄</span></div></blockquote><div class=\"paragraph\" style=\"\"><span>他们几乎没有花时间去研究其他的替代方法--或者是否有可能完成写0代码的工作！</span></div><div class=\"paragraph\" style=\"\"><span>使用正确的工具，就是在几周的劳动和10分钟内完成任务之间的区别。这就是10倍的差异。</span></div><h3 style=\"\" id=\"ZTJlZWIx\"><span>任务实例：建立一个网站</span></h3><div class=\"paragraph\" style=\"\"><span>最近，我有幸与一位初级工程师打赌，谁能更快地建立一个个人网站。这位新毕业的工程师花了两周时间，写了1000多行代码。而他在两周后甚至都没有完成！我花了1天时间，写了0行代码，甚至连汗都没出。你可以</span><span><a href=\"https://michaellin.io/\" target=\"_blank\" class=\"link\">在这里看到我的主页</a></span><span>的结果。</span></div><div class='image'>\n            <img src=\"./image/4.png\" style=\"width: 677px;\"/>\n            <div class='image-caption'>Notion page + super.so for deployments = michaellin.io</div>\n        </div><div class=\"paragraph\" style=\"\"><span>当我请这位初级工程师解释她是如何处理这个问题的时候，就清楚了她为什么花了这么长时间才完成。</span></div><blockquote><div style=\"\"><span>&quot;好吧，我在学校学会了如何制作React应用程序，所以我只是用它从头开始创建了一个网站。但要把图片和CSS弄好是很难的。而且我也不知道如何部署它。所以我想我必须在AWS上写一个自定义的部署脚本，但被控制台弄得有点糊涂。微型实例和大型实例之间又有什么区别呢？&quot;</span></div></blockquote><div class=\"paragraph\" style=\"\"><span>请注意，这位工程师的方法错过了几个关键点。首先，她从未讨论过：</span></div><ul><li style=\"\"><span>需求--没有提到SEO、评论或拥有预制模板是否重要。</span></li><li style=\"\"><span>替代工具--他们只知道React+AWS，并坚持使用它。</span></li></ul><div class=\"paragraph\" style=\"\"><span>想象一下，要从头开始重建评论功能。或者确保SEO正常工作。这些功能中的每一个都是一个团队的工作，以正确实现。难怪她从来没有完成!</span></div><h2 style=\"\" id=\"Nzg3ZTk3\"><span>2. 不寻求帮助</span></h2><div class=\"paragraph\" style=\"\"><span>这是一个非常简单的问题，很容易解决，但却造成了大量的时间浪费，我不得不提一下。一些初级工程师有这样的误解：高级工程师就像一个孤独的天才。如果他们一直盯着这个问题，最终会得到解决。</span></div><div class='image'>\n            <img src=\"./image/5.png\" style=\"width: 625px;\"/>\n            <div class='image-caption'>10倍的工程师不是 \"孤独的天才\"，他们也需要寻求帮助！</div>\n        </div><div class=\"paragraph\" style=\"\"><span>但这是一种相当天真的思维方式。很多时候，区别在于</span><span><strong>他们缺少背景--他们自己不可能推导出的信息</strong></span><span>。</span></div><div class=\"paragraph\" style=\"\"><span>因此，他们不是直接寻求帮助，而是在代码库中苦苦思索，一遍又一遍地看同几行代码，而向队友提出一个5分钟的问题就能立即解决这个问题！</span></div><blockquote><div style=\"\"><span>一个知道如何求助的经验不足的工程师，总是能打败一个从不求助的天才工程师。</span></div></blockquote><div class=\"paragraph\" style=\"\"><span>有时，为了继续下去，显然需要额外的背景。例如，我们常常不清楚：</span></div><ul><li style=\"\"><span>为什么代码库的结构是这样的</span></li><li style=\"\"><span>需要从其他团队调用哪个API</span></li><li style=\"\"><span>部署是如何进行的</span></li></ul><div class=\"paragraph\" style=\"\"><span>这些都是上下文情况的例子，在这些情况下，你最好寻求帮助，而不是进一步挖掘代码库的内容。不要害怕寻求帮助！</span></div><h2 style=\"\" id=\"NzkwYzk3\"><span>3. 不能创造商业价值</span></h2><div class=\"paragraph\" style=\"\"><span>10x工程师首先是投资者。</span></div><div class=\"paragraph\" style=\"\"><span>他们明白他们的工作是一种投资--而他们的投资回报必须大大超过所花费的时间成本。他们了解机会成本：花时间建立一个功能意味着不花时间建立另一个功能。</span></div><blockquote><div style=\"\"><span>工程师必须权衡机会成本--&quot;在所有你可以建立的功能中，这个功能是对你时间的最佳利用吗？&quot;</span></div></blockquote><div class=\"paragraph\" style=\"\"><span>他们明白，代码是达到目的的一种手段--商业目的。如果他们能在没有代码的情况下实现他们的目标，那就更好了。编写的工作更少，需要维护的代码也更少--这是一个双赢的局面。</span></div><div class='image'>\n            <img src=\"./image/6.png\" style=\"width: 700px;\"/>\n            <div class='image-caption'>10倍的工程师是投资者，就像沃伦-巴菲特一样。</div>\n        </div><div class=\"paragraph\" style=\"\"><span></span></div><div class=\"paragraph\" style=\"\"><span>我看到很多新的工程师忽略了这些商业目标。例如：</span></div><ul><li style=\"\"><span>&quot;有一项新的技术，真的很酷。让我们花5天时间把它整合到网站上&quot;（与产品不一致）。</span></li><li style=\"\"><span>&quot;唉，我不喜欢代码的结构方式。让我们花下一个冲刺期来重构&quot;（机会成本--可以用这些时间来建立创造收入的功能）。</span></li><li style=\"\"><span>&quot;这个平台历史遗留问题太多了--让我们迁移到一个新的平台&quot;（迁移是否能帮助你大大加快进度，还是只是一个增量改进？）</span></li></ul><div class=\"paragraph\" style=\"\"><span>正是这种计算方法导致了10倍工程师的出现。如果一个初级工程师花了2个小时在一个不增加收入的复杂功能上，而一个高级工程师花了1个小时在一个简单的复制变化上，使收入增加了5倍，我们就得到了10倍的生产力改善。</span></div><blockquote><div style=\"\"><span>1/2的时间花在一个能产生5倍收入的功能上=10倍的价值交付。</span></div></blockquote><h1 style=\"\" id=\"MmIzOTA3\"><span>最后的思考</span></h1><div class=\"paragraph\" style=\"\"><span>非技术性技能（&quot;软技能&quot;）是最强的工程师和最弱的工程师之间的区别。如果一个工程师避免了上述所有的错误，但他们却很难与之合作，那么他们的10倍技能就会失效。</span></div><div class='image'>\n            <img src=\"./image/7.png\" style=\"width: 610px;\"/>\n            <div class='image-caption'>摘录自Netflix文化牌</div>\n        </div><div class=\"paragraph\" style=\"\"><span>你努力工作，成为一名工程师。工程师比不做一个混蛋要难得多。不要因为你的自负而让你的努力工作付诸东流。并且永远记住：</span></div><blockquote><div style=\"\"><span>工程师的首要任务是创造价值。</span></div></blockquote><div class=\"paragraph\" style=\"\"><span></span></div><div class=\"paragraph\" style=\"\"><span></span></div><div class=\"paragraph\" style=\"\"><span></span></div><div class=\"paragraph\" style=\"\"><span></span></div><div class=\"paragraph\" style=\"\"><span></span></div><div class=\"paragraph\" style=\"\"><span></span></div>","title":"文章示例——优秀软件工程师的自我修养-文档示例","prev":"","next":"./导出PDF示例.html","tocHtml":"<a href=\"#N2NhODBm\" style=\"margin-left:0px\" class=\"tocLabel\">初级工程师常犯的3个错误。你在犯这些错误吗？</a><a href=\"#MzU3ZmE2\" style=\"margin-left:16px\" class=\"tocLabel\">1. 对工具的研究不深入</a><a href=\"#ZTJlZWIx\" style=\"margin-left:32px\" class=\"tocLabel\">任务实例：建立一个网站</a><a href=\"#Nzg3ZTk3\" style=\"margin-left:16px\" class=\"tocLabel\">2. 不寻求帮助</a><a href=\"#NzkwYzk3\" style=\"margin-left:16px\" class=\"tocLabel\">3. 不能创造商业价值</a><a href=\"#MmIzOTA3\" style=\"margin-left:0px\" class=\"tocLabel\">最后的思考</a>","css":[]},{"pageId":"/导出PDF示例","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>导出PDF示例</span></h1><div class=\"file\">\n        <a href=\"./file/8.pdf\" target=\"_blank\"><svg t=\"1667035743245\" class=\"icon\" viewBox=\"0 0 1077 1024\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3315\" width=\"200\" height=\"200\" fill=\"var(--primary-color)\" style=\"margin-right:16px;width:18px;height:18px\"><path d=\"M1024.004851 591.602526a53.894737 53.894737 0 0 1 53.894736 52.385685V808.421053a215.578947 215.578947 0 0 1-212.021894 215.578947H215.583798a215.578947 215.578947 0 0 1-215.578947-212.021895v-166.480842a53.894737 53.894737 0 0 1 107.789473-1.509052V808.421053a107.789474 107.789474 0 0 0 105.957053 107.789473H862.32064a107.789474 107.789474 0 0 0 107.789474-105.957052v-164.756211a53.894737 53.894737 0 0 1 53.894737-53.894737zM538.952219 0a53.894737 53.894737 0 0 1 53.894737 53.894737v524.719158l179.038316-179.038316a53.894737 53.894737 0 0 1 71.141052-4.473263l5.066105 4.473263a53.894737 53.894737 0 0 1 0 76.207158l-266.778947 266.778947a53.786947 53.786947 0 0 1-42.361263 15.629474 53.733053 53.733053 0 0 1-42.361263-15.629474l-266.778948-266.778947a53.894737 53.894737 0 0 1 76.207158-76.207158L485.057482 578.613895V53.894737a53.894737 53.894737 0 0 1 53.894737-53.894737z\" p-id=\"3316\"></path></svg> <span>导出PDF示例.pdf</span></a>\n        <div class=\"file-info\">pdf - 2.3MB</div>\n      </div><div class='image'>\n            <img src=\"./image/9.png\" style=\"width: 1182px;\"/>\n            \n        </div><div class=\"paragraph\" style=\"\"><span></span></div>","title":"导出PDF示例-文档示例","prev":"./index.html","next":"./富文本节点类型/index.html","tocHtml":"","css":[]},{"pageId":"/富文本节点类型/index","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>富文本节点类型</span></h1><ul><li style=\"\"><span>标题</span></li><li style=\"\"><span>文本样式</span></li><li style=\"\"><span>列表</span></li><ul><li style=\"\"><span>无序列表</span></li><li style=\"\"><span>有序列表</span></li><li style=\"\"><span>任务列表</span></li></ul><li style=\"\"><span>代码块</span></li><li style=\"\"><span>引用</span></li><li style=\"\"><span>图片</span></li><li style=\"\"><span>表格</span></li><li style=\"\"><span>提示</span></li><li style=\"\"><span>视频</span></li><li style=\"\"><span>文件</span></li><li style=\"\"><span>HTTP API</span></li><li style=\"\"><span>数学公式</span></li><li style=\"\"><span>CPP API</span></li></ul>","title":"富文本节点类型-文档示例","prev":"../导出PDF示例.html","next":"../富文本节点类型/标题.html","tocHtml":"","css":[]},{"pageId":"/富文本节点类型/标题","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>标题</span></h1><h1 style=\"\" id=\"YzE0ZWNi\"><span>一级标题</span></h1><h2 style=\"\" id=\"N2I0OWNj\"><span>二级标题</span></h2><h3 style=\"\" id=\"NzJhZTRk\"><span>三级标题</span></h3><h4 style=\"\" id=\"MmUyMDZi\"><span>四级标题</span></h4><div class=\"paragraph\" style=\"\"><span>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span></div>","title":"标题-文档示例","prev":"../富文本节点类型/index.html","next":"../富文本节点类型/文本样式.html","tocHtml":"<a href=\"#YzE0ZWNi\" style=\"margin-left:0px\" class=\"tocLabel\">一级标题</a><a href=\"#N2I0OWNj\" style=\"margin-left:16px\" class=\"tocLabel\">二级标题</a><a href=\"#NzJhZTRk\" style=\"margin-left:32px\" class=\"tocLabel\">三级标题</a><a href=\"#MmUyMDZi\" style=\"margin-left:48px\" class=\"tocLabel\">四级标题</a>","css":[]},{"pageId":"/富文本节点类型/文本样式","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>文本样式</span></h1><div class=\"paragraph\" style=\"\"><span><strong>加粗</strong></span><span> </span><span><em>斜体</em></span><span> </span><span><u>下划线</u></span><span> </span><span><s>删除线</s></span><span> </span><span><code>code</code></span><span> click to the url。</span></div><div class=\"paragraph\" style=\"\"><span>左对齐左对齐左对齐</span></div><div class=\"paragraph\" style=\"\"><span>左对齐左对齐左对齐</span></div><div class=\"paragraph\" style=\" text-align:center;\"><span>中对齐中对齐中对齐</span></div><div class=\"paragraph\" style=\" text-align:center;\"><span>中对齐中对齐中对齐</span></div><div class=\"paragraph\" style=\" text-align:right;\"><span>右对齐右对齐右对齐</span></div><div class=\"paragraph\" style=\" text-align:right;\"><span>右对齐右对齐右对齐</span></div>","title":"文本样式-文档示例","prev":"../富文本节点类型/标题.html","next":"../富文本节点类型/列表.html","tocHtml":"","css":[]},{"pageId":"/富文本节点类型/列表","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>列表</span></h1><h2 style=\"\" id=\"OGJmMWQ3\"><span>无序列表</span></h2><ul><li style=\"\"><span>列表项1</span></li><li style=\"\"><span>列表项2</span></li><li style=\"\"><span>列表项3</span></li></ul><h2 style=\"\" id=\"MjA5OTI0\"><span>有序列表</span></h2><ol><li style=\"\"><span>列表项1</span></li><li style=\"\"><span>列表项2</span></li><li style=\"\"><span>列表项3</span></li></ol><h2 style=\"\" id=\"YzRkODM2\"><span>任务列表</span></h2><ul><li class=\"check-list-item\">\n          <span class=\"before\"></span>\n          <span>列表项1</span>\n        </li><li class=\"check-list-item checked\">\n          <span class=\"before\"></span>\n          <span>列表项2</span>\n        </li><li class=\"check-list-item\">\n          <span class=\"before\"></span>\n          <span>列表项3</span>\n        </li></ul><div class=\"paragraph\" style=\"\"><span></span></div>","title":"列表-文档示例","prev":"../富文本节点类型/文本样式.html","next":"../富文本节点类型/代码块.html","tocHtml":"<a href=\"#OGJmMWQ3\" style=\"margin-left:16px\" class=\"tocLabel\">无序列表</a><a href=\"#MjA5OTI0\" style=\"margin-left:16px\" class=\"tocLabel\">有序列表</a><a href=\"#YzRkODM2\" style=\"margin-left:16px\" class=\"tocLabel\">任务列表</a>","css":[]},{"pageId":"/富文本节点类型/代码块","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>代码块</span></h1><pre style=\"overflow-x: auto\"><div style=\"\"><span>console</span><span><span class=\"punctuation\">.</span></span><span><span class=\"function\">log</span></span><span><span class=\"punctuation\">(</span></span><span><span class=\"string\">&quot;Welcome to Docaemon~&quot;</span></span><span><span class=\"punctuation\">)</span></span><span><span class=\"punctuation\">;</span></span></div></pre><pre style=\"overflow-x: auto\"><div style=\"\"><span><span class=\"directive-hash\">#</span></span><span><span class=\"directive\">include</span></span><span> </span><span><span class=\"string\">&lt;stdio.h&gt;</span></span></div><div style=\"\"><span><span class=\"keyword\">int</span></span><span> </span><span><span class=\"function\">main</span></span><span><span class=\"punctuation\">(</span></span><span><span class=\"punctuation\">)</span></span></div><div style=\"\"><span><span class=\"punctuation\">{</span></span></div><div style=\"\"><span>   </span><span><span class=\"function\">printf</span></span><span><span class=\"punctuation\">(</span></span><span><span class=\"string\">&quot;Welcome to Docaemon!&quot;</span></span><span><span class=\"punctuation\">)</span></span><span><span class=\"punctuation\">;</span></span></div><div style=\"\"><span>   </span><span><span class=\"keyword\">return</span></span><span> </span><span><span class=\"number\">0</span></span><span><span class=\"punctuation\">;</span></span></div><div style=\"\"><span><span class=\"punctuation\">}</span></span></div></pre><h1 style=\"\" id=\"NDZkYzNm\"><span></span></h1><div class=\"paragraph\" style=\"\"><span></span></div>","title":"代码块-文档示例","prev":"../富文本节点类型/列表.html","next":"../富文本节点类型/引用.html","tocHtml":"<a href=\"#NDZkYzNm\" style=\"margin-left:0px\" class=\"tocLabel\"></a>","css":[]},{"pageId":"/富文本节点类型/引用","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>引用</span></h1><blockquote><div style=\"\"><span>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</span></div></blockquote><h1 style=\"\" id=\"MDQyZjhk\"><span></span></h1>","title":"引用-文档示例","prev":"../富文本节点类型/代码块.html","next":"../富文本节点类型/提示.html","tocHtml":"<a href=\"#MDQyZjhk\" style=\"margin-left:0px\" class=\"tocLabel\"></a>","css":[]},{"pageId":"/富文本节点类型/提示","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>提示</span></h1><div class=\"hint\" style=\"border-color: #3370FF\">\n        <div class=\"hint-icon\"><svg t=\"1667027785179\" class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4442\" width=\"200\" height=\"200\" style=\"fill:#3370FF\"><path d=\"M512 958.016C266.08 958.016 65.984 757.952 65.984 512 65.984 266.08 266.08 65.984 512 65.984c245.952 0 446.016 200.064 446.016 446.016C958.016 757.952 757.952 958.016 512 958.016zM512 129.984C301.344 129.984 129.984 301.344 129.984 512c0 210.624 171.36 382.016 382.016 382.016 210.624 0 382.016-171.36 382.016-382.016C894.016 301.344 722.624 129.984 512 129.984z\" p-id=\"4443\"></path><path d=\"M512 304m-48 0a1.5 1.5 0 1 0 96 0 1.5 1.5 0 1 0-96 0Z\" p-id=\"4444\"></path><path d=\"M512 768c-17.664 0-32-14.304-32-32l0-288c0-17.664 14.336-32 32-32s32 14.336 32 32l0 288C544 753.696 529.664 768 512 768z\" p-id=\"4445\"></path></svg></div>\n        <div><div class=\"paragraph\" style=\"\"><span>这是一条普通提示。</span></div></div>\n      </div><div class=\"hint\" style=\"border-color: #f77d05\">\n        <div class=\"hint-icon\"><svg t=\"1667027712085\" class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3315\" width=\"200\" height=\"200\" style=\"fill:#f77d05\"><path d=\"M511.251963 668.953681c-26.391067 0-47.795563 21.398356-47.795562 47.789423 0 26.397207 21.398356 47.801702 47.795562 47.801703 26.403347 0 47.795563-21.398356 47.795563-47.801703 0-26.397207-21.393239-47.789423-47.795563-47.789423z\" p-id=\"3316\"></path><path d=\"M511.251963 65.258283c-245.972111 0-446.078615 200.101387-446.078615 446.078615 0 245.978251 200.106504 446.085778 446.078615 446.085777 245.984391 0 446.078615-200.106504 446.078615-446.085777 0-245.977227-200.100364-446.078615-446.078615-446.078615z m0 828.149427c-210.674187 0-382.063649-171.420161-382.063649-382.069789 0-210.680327 171.389462-382.063649 382.063649-382.063649 210.644511 0 382.069789 171.384345 382.069789 382.063649 0 210.649628-171.426301 382.069789-382.069789 382.069789z\" p-id=\"3317\"></path><path d=\"M508.189208 591.596849c21.170159 0 38.331004-17.160845 38.331003-38.331003V257.555937c0-21.171182-17.160845-38.331004-38.331003-38.331004-21.171182 0-38.331004 17.160845-38.331004 38.331004v295.709909c-0.001023 21.170159 17.159822 38.331004 38.331004 38.331003z\" p-id=\"3318\"></path></svg></div>\n        <div><div class=\"paragraph\" style=\"\"><span>这是一条警告！</span></div></div>\n      </div><div class=\"hint\" style=\"border-color: #ff4642\">\n        <div class=\"hint-icon\"><svg t=\"1667027601529\" class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3315\" width=\"200\" height=\"200\" style=\"fill:#ff4642\"><path d=\"M951 799.49l-383.89-651a64 64 0 0 0-110.26 0L73 799.49C47.83 842.16 78.59 896 128.12 896h767.77c49.52 0 80.28-53.84 55.11-96.51zM128.12 832l383.62-651a1 1 0 0 1 0.26 0l383.89 651z\" p-id=\"3316\"></path><path d=\"M470 393.88l8.59 244.51a33.18 33.18 0 0 0 66.31 0.06L554 394a42 42 0 1 0-84-0.08z\" p-id=\"3317\"></path><path d=\"M512 758.4m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z\" p-id=\"3318\"></path></svg></div>\n        <div><div class=\"paragraph\" style=\"\"><span>这是一条危险提示！！</span></div></div>\n      </div><div class=\"hint\" style=\"border-color: #26cb7c\">\n        <div class=\"hint-icon\"><svg t=\"1667027741128\" class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2321\" width=\"200\" height=\"200\" style=\"fill:#26cb7c\"><path d=\"M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z\" p-id=\"2322\"></path><path d=\"M750 377.84a32 32 0 0 0-45.26 0l-248.9 248.9-113.21-113.16a32 32 0 0 0-45.26 45.25l135.77 135.76a32 32 0 0 0 45.26 0L750 423.1a32 32 0 0 0 0-45.26z\" p-id=\"2323\"></path></svg></div>\n        <div><div class=\"paragraph\" style=\"\"><span>这是一条成功提示～</span></div></div>\n      </div><div class=\"paragraph\" style=\"\"><span></span></div>","title":"提示-文档示例","prev":"../富文本节点类型/引用.html","next":"../富文本节点类型/数学公式.html","tocHtml":"","css":[]},{"pageId":"/富文本节点类型/数学公式","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>数学公式</span></h1><div class=\"math\"><span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant=\"normal\">∞</mi></mrow><mi mathvariant=\"normal\">∞</mi></msubsup><mover accent=\"true\"><mi>f</mi><mo>^</mo></mover><mo stretchy=\"false\">(</mo><mi>ξ</mi><mo stretchy=\"false\">)</mo><mtext> </mtext><msup><mi>e</mi><mrow><mn>2</mn><mi>π</mi><mi>i</mi><mi>ξ</mi><mi>x</mi></mrow></msup><mtext> </mtext><mi>d</mi><mi>ξ</mi></mrow><annotation encoding=\"application/x-tex\">% \\f is defined as #1f(#2) using the macro\n\\f\\relax{x} = \\int_{-\\infty}^\\infty\n    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n    \\,d\\xi</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.10764em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3846em;vertical-align:-0.9703em;\"></span><span class=\"mop\"><span class=\"mop op-symbol large-op\" style=\"margin-right:0.44445em;position:relative;top:-0.0011em;\">∫</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4143em;\"><span style=\"top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">∞</span></span></span></span><span style=\"top:-3.8129em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">∞</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9703em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9579em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.10764em;\">f</span></span><span style=\"top:-3.2634em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.0833em;\"><span class=\"mord\">^</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.04601em;\">ξ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mord mathnormal mtight\">πi</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.04601em;\">ξ</span><span class=\"mord mathnormal mtight\">x</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\" style=\"margin-right:0.04601em;\">ξ</span></span></span></span></span></div><div class=\"paragraph\" style=\"\"><span></span></div>","title":"数学公式-文档示例","prev":"../富文本节点类型/提示.html","next":"../富文本节点类型/表格.html","tocHtml":"","css":["../css/math/style.css"]},{"pageId":"/富文本节点类型/表格","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>表格</span></h1><table class=\"\">\n        <colgroup>\n          <col width=\"147.2\" /><col width=\"147.2\" /><col width=\"147.2\" /><col width=\"147.2\" /><col width=\"147.2\" />\n        </colgroup>\n        <tbody><tr><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td><td rowSpan=\"1\" colSpan=\"2\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span><strong></strong></span><span><strong>服务一</strong></span><span></span></div></td><td rowSpan=\"1\" colSpan=\"2\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span><strong></strong></span><span><strong>服务二</strong></span></div></td></tr><tr><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span><strong>任务描述</strong></span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span>召回率</span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span>精确率</span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span>召回率</span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span>精确率</span></div></td></tr><tr><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><ol><li style=\"\"><span>分类</span></li></ol></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span>100%</span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span>100%</span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span>100%</span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\" text-align:center;\"><span>100%</span></div></td></tr><tr><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><ol><li style=\"\"><span>分类</span></li></ol></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td></tr><tr><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><ol><li style=\"\"><span>检查</span></li></ol></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td><td rowSpan=\"1\" colSpan=\"1\" style=\"\"><div class=\"paragraph\" style=\"\"><span></span></div></td></tr></tbody>\n      </table><div class=\"paragraph\" style=\"\"><span></span></div><div class=\"paragraph\" style=\"\"><span></span></div>","title":"表格-文档示例","prev":"../富文本节点类型/数学公式.html","next":"../富文本节点类型/图片.html","tocHtml":"","css":[]},{"pageId":"/富文本节点类型/图片","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>图片</span></h1><div class='image'>\n            <img src=\"../image/10.jpeg\" style=\"width: 711.5630256719517px;\"/>\n            <div class='image-caption'>团建</div>\n        </div><div class=\"paragraph\" style=\"\"><span></span></div>","title":"图片-文档示例","prev":"../富文本节点类型/表格.html","next":"../富文本节点类型/视频.html","tocHtml":"","css":[]},{"pageId":"/富文本节点类型/视频","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>视频</span></h1><video src=\"../video/11.mp4\" controls></video><h1 style=\"\" id=\"MjVhMDdh\"><span></span></h1>","title":"视频-文档示例","prev":"../富文本节点类型/图片.html","next":"../富文本节点类型/文件.html","tocHtml":"<a href=\"#MjVhMDdh\" style=\"margin-left:0px\" class=\"tocLabel\"></a>","css":[]},{"pageId":"/富文本节点类型/文件","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>文件</span></h1><div class=\"file\">\n        <a href=\"../file/12.pdf\" target=\"_blank\"><svg t=\"1667035743245\" class=\"icon\" viewBox=\"0 0 1077 1024\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3315\" width=\"200\" height=\"200\" fill=\"var(--primary-color)\" style=\"margin-right:16px;width:18px;height:18px\"><path d=\"M1024.004851 591.602526a53.894737 53.894737 0 0 1 53.894736 52.385685V808.421053a215.578947 215.578947 0 0 1-212.021894 215.578947H215.583798a215.578947 215.578947 0 0 1-215.578947-212.021895v-166.480842a53.894737 53.894737 0 0 1 107.789473-1.509052V808.421053a107.789474 107.789474 0 0 0 105.957053 107.789473H862.32064a107.789474 107.789474 0 0 0 107.789474-105.957052v-164.756211a53.894737 53.894737 0 0 1 53.894737-53.894737zM538.952219 0a53.894737 53.894737 0 0 1 53.894737 53.894737v524.719158l179.038316-179.038316a53.894737 53.894737 0 0 1 71.141052-4.473263l5.066105 4.473263a53.894737 53.894737 0 0 1 0 76.207158l-266.778947 266.778947a53.786947 53.786947 0 0 1-42.361263 15.629474 53.733053 53.733053 0 0 1-42.361263-15.629474l-266.778948-266.778947a53.894737 53.894737 0 0 1 76.207158-76.207158L485.057482 578.613895V53.894737a53.894737 53.894737 0 0 1 53.894737-53.894737z\" p-id=\"3316\"></path></svg> <span>文章示例——优秀软件工程师的自我修养.pdf</span></a>\n        <div class=\"file-info\">pdf - 586.7KB</div>\n      </div>","title":"文件-文档示例","prev":"../富文本节点类型/视频.html","next":"../富文本节点类型/HTTP API.html","tocHtml":"","css":[]},{"pageId":"/富文本节点类型/HTTP API","pageHtml":"<h1 style=\" border-bottom:1px solid #eee; font-size:2rem; margin-bottom:2rem; text-align:undefined;\" id=\"\"><span>HTTP API</span></h1><h2 style=\" font-size:2.1rem; margin-bottom:1.1rem; line-height:1.5; font-weight:normal; text-align:undefined;\" id=\"dW5kZWZp\"><span>GET 请求用户信息</span></h2><div class='api'>\n        <div class=\"api-title\">\n          <div class=\"api-method\" style=\"background: var(--primary-color);\">GET</div>\n          <span>请求用户信息</span>\n        </div>\n        <div class=\"api-url\">\n          <span class=\"api-url-host\">https://xxx.com</span>\n          <span class=\"api-url-path\">/api/user</span>\n        </div>\n        <div class=\"api-description\"><span>请求用户信息</span></div><div>\n          <div class=\"api-section-title\">Request</div>\n          <div class=\"api-request\">\n        <div class=\"api-request-title\">Path Parameters</div>\n        <div class=\"api-request-parameter-content\">\n        <div class=\"api-parameter\">\n          <div class=\"api-parameter-required\" style=\"color: #e63737\">REQUIRED</div>\n          <div class=\"api-parameter-name\">Authorization</div>\n          <div class=\"api-parameter-type\">\n            <span>string</span>\n          </div>\n          <div class=\"api-parameter-desc\"><span>Bearer xxx</span></div>\n        </div>\n      </div>\n      </div>\n          <div class=\"api-section-title\">Response</div>\n          <div class=\"api-response\">\n       <div class=\"api-response-example\">\n        <div class=\"api-response-title\">\n          <div style=\"background: #26cb7c\" class=\"api-response-status-dot\"></div>\n          <div style=\"width: 100%\">200: OK</div>\n        </div>\n        <div class=\"api-response-content\"><div class=\"api-response-description\"><span>return user data</span></div><pre style=\"overflow-x: auto\"><span><span class=\"punctuation\">{</span></span><span>\n    </span><span><span class=\"property\">&quot;userId&quot;</span></span><span><span class=\"operator\">:</span></span><span> </span><span><span class=\"string\">&quot;&quot;</span></span><span><span class=\"punctuation\">,</span></span><span>\n    </span><span><span class=\"property\">&quot;username&quot;</span></span><span><span class=\"operator\">:</span></span><span> </span><span><span class=\"string\">&quot;&quot;</span></span><span>\n</span><span><span class=\"punctuation\">}</span></span></pre></div>\n       </div>\n        </div>\n      </div>\n      </div><h1 style=\"\" id=\"MTcxMmE2\"><span></span></h1>","title":"HTTP API-文档示例","prev":"../富文本节点类型/文件.html","next":"","tocHtml":"<a href=\"#dW5kZWZp\" style=\"margin-left:16px\" class=\"tocLabel\">GET 请求用户信息</a><a href=\"#MTcxMmE2\" style=\"margin-left:0px\" class=\"tocLabel\"></a>","css":[]}]