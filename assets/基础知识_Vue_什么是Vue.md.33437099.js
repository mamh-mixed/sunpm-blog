import{_ as s,c as n,o as a,d as l}from"./app.b53740a3.js";const b=JSON.parse('{"title":"\u4EC0\u4E48\u662FVue","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue\u7684\u4E24\u4E2A\u6838\u5FC3\u529F\u80FD\uFF1A","slug":"vue\u7684\u4E24\u4E2A\u6838\u5FC3\u529F\u80FD\uFF1A"},{"level":2,"title":"\u5355\u6587\u4EF6\u7EC4\u4EF6","slug":"\u5355\u6587\u4EF6\u7EC4\u4EF6"},{"level":2,"title":"API\u98CE\u683C","slug":"api\u98CE\u683C"},{"level":3,"title":"\u9009\u9879\u5F0FAPI\uFF08Options APi\uFF09","slug":"\u9009\u9879\u5F0Fapi\uFF08options-api\uFF09"},{"level":3,"title":"\u7EC4\u5408\u5F0F API \uFF08Composition API\uFF09","slug":"\u7EC4\u5408\u5F0F-api-\uFF08composition-api\uFF09"}],"relativePath":"\u57FA\u7840\u77E5\u8BC6/Vue/\u4EC0\u4E48\u662FVue.md","lastUpdated":1663056335000}'),p={name:"\u57FA\u7840\u77E5\u8BC6/Vue/\u4EC0\u4E48\u662FVue.md"},e=l(`<h1 id="\u4EC0\u4E48\u662Fvue" tabindex="-1">\u4EC0\u4E48\u662FVue <a class="header-anchor" href="#\u4EC0\u4E48\u662Fvue" aria-hidden="true">#</a></h1><p>Vue \u662F\u4E00\u6B3E\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684js\u6846\u67B6\uFF08\u9762\u5411\u89C6\u56FE\u5C42\uFF09\uFF0C\u57FA\u4E8E\u6807\u51C6\u7684 html \u3001 css \u548C js \u6784\u5EFA\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E00\u5957\u58F0\u660E\u5F0F\u7684\u3001\u7EC4\u4EF6\u5316\u7684\u7F16\u7A0B\u6A21\u578B\u6765\u5F00\u53D1\u7528\u6237\u754C\u9762</p><h2 id="vue\u7684\u4E24\u4E2A\u6838\u5FC3\u529F\u80FD\uFF1A" tabindex="-1">Vue\u7684\u4E24\u4E2A\u6838\u5FC3\u529F\u80FD\uFF1A <a class="header-anchor" href="#vue\u7684\u4E24\u4E2A\u6838\u5FC3\u529F\u80FD\uFF1A" aria-hidden="true">#</a></h2><ul><li>**\u58F0\u660E\u5F0F\u6E32\u67D3\uFF1A**Vue \u57FA\u4E8E\u6807\u51C6 html \u62D3\u5C55\u4E86\u4E00\u5957\u6A21\u7248\u8BED\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u58F0\u660E\u5F0F\u5730\u63CF\u8FF0\u6700\u7EC8\u8F93\u51FA html \u548C js \u72B6\u6001\u4E4B\u95F4\u7684\u5173\u7CFB\u3002</li><li>**\u54CD\u5E94\u5F0F\uFF1A**Vue \u4F1A\u81EA\u52A8\u8DDF\u8E2A js \u72B6\u6001\u53D8\u5316\u5E76\u5728\u6539\u53D8\u53D1\u751F\u65F6\u54CD\u5E94\u5F0F\u66F4\u65B0 DOM\u3002</li></ul><h2 id="\u5355\u6587\u4EF6\u7EC4\u4EF6" tabindex="-1">\u5355\u6587\u4EF6\u7EC4\u4EF6 <a class="header-anchor" href="#\u5355\u6587\u4EF6\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728 Vue \u9879\u76EE\u4E2D\uFF0C\u4F7F\u7528\u4E00\u79CD\u7C7B\u4F3C html \u683C\u5F0F\u7684\u6587\u4EF6\u6765\u4E66\u5199 vue \u7EC4\u4EF6\uFF0C\u88AB\u79F0\u4E3A<strong>\u5355\u6587\u4EF6\u7EC4\u4EF6</strong>\uFF08\u4E5F\u88AB\u79F0\u4E3A<code>*.vue</code>\u6587\u4EF6\uFF09\u3002</p><p>Vue \u7684\u5355\u6587\u4EF6\u7EC4\u4EF6\u5C06\u4E00\u4E2A\u7EC4\u4EF6\u7684\u903B\u8F91\uFF08js\uFF09\uFF0C\u6A21\u7248\uFF08html\uFF09\u548C\u6837\u5F0F\uFF08css\uFF09\u5C01\u88C5\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u91CC\u3002</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Count is: </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="api\u98CE\u683C" tabindex="-1">API\u98CE\u683C <a class="header-anchor" href="#api\u98CE\u683C" aria-hidden="true">#</a></h2><p>Vue \u7684\u7EC4\u4EF6\u53EF\u4EE5\u6309\u4E24\u79CD\u4E0D\u540C\u7684\u98CE\u683C\u6765\u4E66\u5199\uFF1A<strong>\u9009\u9879\u5F0FAPI</strong>\u548C<strong>\u7EC4\u5408\u5F0FAPI</strong>\u3002</p><h3 id="\u9009\u9879\u5F0Fapi\uFF08options-api\uFF09" tabindex="-1">\u9009\u9879\u5F0FAPI\uFF08Options APi\uFF09 <a class="header-anchor" href="#\u9009\u9879\u5F0Fapi\uFF08options-api\uFF09" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u9009\u9879\u5F0F API\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u5305\u542B\u591A\u4E2A\u9009\u9879\u7684\u5BF9\u8C61\u6765\u63CF\u8FF0\u7EC4\u4EF6\u7684\u903B\u8F91\uFF0C\u4F8B\u5982 <code>data</code>\u3001<code>methods</code> \u548C <code>mounted</code> \u7B49\u7B49\u3002\u5B9A\u4E49\u7684\u5C5E\u6027\u90FD\u4F1A\u66B4\u9732\u5728\u51FD\u6570\u5185\u90E8\u7684 <code>this</code> \u4E0A\uFF0C\u5B83\u4F1A\u6307\u5411\u5F53\u524D\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// data() \u8FD4\u56DE\u7684\u5C5E\u6027\u5C06\u4F1A\u6210\u4E3A\u54CD\u5E94\u5F0F\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5E76\u4E14\u66B4\u9732\u5728 \`this\`\u6216\`this.$data\` \u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// methods \u662F\u4E00\u4E9B\u7528\u6765\u66F4\u6539\u72B6\u6001\u4E0E\u89E6\u53D1\u66F4\u65B0\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5B83\u4EEC\u53EF\u4EE5\u5728\u6A21\u677F\u4E2D\u4F5C\u4E3A\u4E8B\u4EF6\u76D1\u542C\u5668\u7ED1\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u751F\u547D\u5468\u671F\u94A9\u5B50\u4F1A\u5728\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5404\u4E2A\u4E0D\u540C\u9636\u6BB5\u88AB\u8C03\u7528</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4F8B\u5982\u8FD9\u4E2A\u51FD\u6570\u5C31\u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u88AB\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">The initial count is </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Count is: </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="\u7EC4\u5408\u5F0F-api-\uFF08composition-api\uFF09" tabindex="-1">\u7EC4\u5408\u5F0F API \uFF08Composition API\uFF09 <a class="header-anchor" href="#\u7EC4\u5408\u5F0F-api-\uFF08composition-api\uFF09" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5BFC\u5165\u7684 API \u51FD\u6570\u6765\u63CF\u8FF0\u7EC4\u4EF6\u903B\u8F91\u3002\u5728\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\uFF0C\u7EC4\u5408\u5F0F API \u901A\u5E38\u4F1A\u4E0E <code>&lt;script setup&gt;</code> \u642D\u914D\u4F7F\u7528\u3002\u8FD9\u4E2A <code>setup</code> attribute \u662F\u4E00\u4E2A\u6807\u8BC6\uFF0C\u544A\u8BC9 Vue \u9700\u8981\u5728\u7F16\u8BD1\u65F6\u8FDB\u884C\u4E00\u4E9B\u5904\u7406\uFF0C\u53EF\u4EE5\u66F4\u7B80\u6D01\u5730\u4F7F\u7528\u7EC4\u5408\u5F0F API\u3002\u6BD4\u5982\uFF1A<code>&lt;script setup&gt;</code> \u4E2D\u7684\u5BFC\u5165\u548C\u9876\u5C42\u53D8\u91CF/\u51FD\u6570\u90FD\u80FD\u591F\u5728\u6A21\u677F\u4E2D\u76F4\u63A5\u4F7F\u7528\u3002</p><p>\u4E0B\u9762\u662F\u4F7F\u7528\u4E86\u7EC4\u5408\u5F0F API \u4E0E <code>&lt;script setup&gt;</code> \u6539\u9020\u540E\u548C\u4E0A\u9762\u6A21\u677F\u5B8C\u5168\u4E00\u6837\u903B\u8F91\u7684\u7EC4\u4EF6\uFF1A</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u54CD\u5E94\u5F0F\u72B6\u6001</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u7528\u6765\u4FEE\u6539\u72B6\u6001\u3001\u89E6\u53D1\u66F4\u65B0\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u751F\u547D\u5468\u671F\u94A9\u5B50</span></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">The initial count is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Count is: </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,17),o=[e];function c(t,r,F,D,i,y){return a(),n("div",null,o)}const A=s(p,[["render",c]]);export{b as __pageData,A as default};
