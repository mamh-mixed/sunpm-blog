import{_ as s,c as n,o as a,d as l}from"./app.18e1115a.js";const C=JSON.parse('{"title":"vue\u6253\u5305\u7684html\u600E\u4E48\u6837\u7981\u6B62\u6253\u5F00F12\u5F00\u53D1\u8005\u5DE5\u5177\u5462\uFF1F","description":"","frontmatter":{},"headers":[],"relativePath":"\u6742\u9879/\u7591\u96BE\u6742\u75C7/\u7981\u6B62\u6253\u5F00F12\u5F00\u53D1\u8005\u5DE5\u5177.md","lastUpdated":1660551929000}'),p={name:"\u6742\u9879/\u7591\u96BE\u6742\u75C7/\u7981\u6B62\u6253\u5F00F12\u5F00\u53D1\u8005\u5DE5\u5177.md"},o=l(`<h1 id="vue\u6253\u5305\u7684html\u600E\u4E48\u6837\u7981\u6B62\u6253\u5F00f12\u5F00\u53D1\u8005\u5DE5\u5177\u5462\uFF1F" tabindex="-1">vue\u6253\u5305\u7684html\u600E\u4E48\u6837\u7981\u6B62\u6253\u5F00F12\u5F00\u53D1\u8005\u5DE5\u5177\u5462\uFF1F <a class="header-anchor" href="#vue\u6253\u5305\u7684html\u600E\u4E48\u6837\u7981\u6B62\u6253\u5F00f12\u5F00\u53D1\u8005\u5DE5\u5177\u5462\uFF1F" aria-hidden="true">#</a></h1><p>\u628A\u4F60\u60F3\u5230\u7684\u542F\u52A8\u5B83\u7684\u65B9\u5F0F\u90FD\u7981\u6B62\u5C31\u884C\u4E86.</p><ul><li>\u7981\u6B62F12</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onkeydown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onkeyup </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onkeypress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5224\u65AD\u662F\u5426\u6309\u4E0BF12\uFF0CF12\u952E\u7801\u4E3A123  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keyCode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">123</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preventDefault</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6\u884C\u4E3A  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">returnValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><ul><li>\u7981\u6B62\u53F3\u952E</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4E3A\u53F3\u952E\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7981\u7528  </span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">oncontextmenu</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preventDefault</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6\u884C\u4E3A  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u7981\u6B62\u9884\u5148\u8C03\u8BD5\u548C\u5FEB\u6377\u952E\u7EC4\u5408</li></ul><ol><li>\u63D0\u524D\u6253\u5F00\u8C03\u8BD5\u7A97\u53E3\uFF0C\u7136\u540E\u5728\u5730\u5740\u4E2D\u8F93\u5165\u7F51\u5740\uFF0C\u8FD9\u6837\u5C31\u7B97\u4E0D\u7528\u53F3\u952E\u548CF12\u4E5F\u662F\u6253\u5F00\u8C03\u8BD5\u7A97\u53E3\u7684\uFF1B</li><li>\u901A\u8FC7\u6D4F\u89C8\u5668\u83DC\u5355\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u6765\u5F00\u542F\u8C03\u8BD5\u7A97\u53E3\uFF0C\u8FD8\u6709\u8BF8\u5982 shift+ctrl+i \u7684\u5FEB\u6377\u952E\u6253\u5F00\u63A7\u5236\u53F0</li></ol><p>\u5BF9\u4E8E\u8FD9\u79CD\u9884\u5148\u6253\u5F00\u8C03\u8BD5\u7A97\u53E3\u7684\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6BD4\u8F83\u5C4F\u5E55 window.outerWidth \u548C\u9875\u9762\u53EF\u89C1\u5185\u5BB9\u533A\u57DF window.innerWidth \u7684\u5DEE\u8DDD\u5224\u65AD\u662F\u5426\u6253\u5F00\u63A7\u5236\u53F0</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> threshold </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">160</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6253\u5F00\u63A7\u5236\u53F0\u7684\u5BBD\u6216\u9AD8\u9608\u503C  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6BCF\u79D2\u68C0\u67E5\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setInterval</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outerWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">threshold</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outerHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">threshold</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5982\u679C\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u5219\u5237\u65B0\u9875\u9762</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1e3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u4F5C\u8005\uFF1A\u524D\u7AEF\u4E4B\u8DEF\u6F2B\u957F\u4E0D\u5DF2</p><p>\u94FE\u63A5\uFF1A<a href="https://www.zhihu.com/question/340109086/answer/785160782" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/340109086/answer/785160782</a></p><p>\u6765\u6E90\uFF1A\u77E5\u4E4E</p><p>\u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>`,14),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
