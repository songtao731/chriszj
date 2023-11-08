import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.0bbf01f6.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/index.md","filePath":"components/index.md","lastUpdated":1691980064000}'),l={name:"components/index.md"},o=p(`<h3 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>chris-ui-plus 基于 vue3 + ts + Element-plus 再次封装的基础组件</p></div><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">chriszj</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">使用pnpm安装是最为稳定的</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">### 使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">在tsconfig里配置</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">添加</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;types&quot;:</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;chriszj/components&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&quot;compilerOptions&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;types&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;chriszj/components&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span><span style="color:#B392F0;">js</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#9ECBFF;"> main.ts   </span></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#9ECBFF;"> Chriszj from &quot;chriszj&quot;;</span></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#9ECBFF;"> &quot;chriszj/style.css&quot;;</span></span>
<span class="line"><span style="color:#B392F0;">const</span><span style="color:#9ECBFF;"> app = createApp(</span><span style="color:#B392F0;">App</span><span style="color:#9ECBFF;">)</span></span>
<span class="line"><span style="color:#B392F0;">app.use(Chriszj</span><span style="color:#9ECBFF;">)</span></span>
<span class="line"><span style="color:#B392F0;">app.mount(&#39;#app&#39;</span><span style="color:#9ECBFF;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;">  </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">chriszj</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">使用pnpm安装是最为稳定的</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">### 使用</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6F42C1;">在tsconfig里配置</span><span style="color:#24292E;"> </span><span style="color:#032F62;">添加</span><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;types&quot;:</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;chriszj/components&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;compilerOptions&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;types&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;chriszj/components&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span><span style="color:#6F42C1;">js</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#032F62;"> main.ts   </span></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#032F62;"> Chriszj from &quot;chriszj&quot;;</span></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#032F62;"> &quot;chriszj/style.css&quot;;</span></span>
<span class="line"><span style="color:#6F42C1;">const</span><span style="color:#032F62;"> app = createApp(</span><span style="color:#6F42C1;">App</span><span style="color:#032F62;">)</span></span>
<span class="line"><span style="color:#6F42C1;">app.use(Chriszj</span><span style="color:#032F62;">)</span></span>
<span class="line"><span style="color:#6F42C1;">app.mount(&#39;#app&#39;</span><span style="color:#032F62;">)</span></span></code></pre></div>`,4),e=[o];function t(c,r,i,y,F,E){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{C as __pageData,h as default};
