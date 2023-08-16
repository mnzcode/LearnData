import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-3aac6385.js";const e={},p=t(`<h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> AJAX</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><ul><li><p>AJAX(Asynchronous JavaScript And XML)：异步的 JavaScript 和 XML。</p></li><li><p>不是一种新技术，而是多个技术综合，用于快速创建动态网页的技术。</p></li><li><p>一般的网页如果需要更新内容，必需重新加载个页面。而 AJAX 通过浏览器与服务器进行少量数据交换，就可以使网页实现异步更新。也就是在不重新加载整个页 面的情况下，对网页的部分内容进行<strong>局部更新</strong>。</p><figure><img src="https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/AJAX网页局部更新.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><hr><h2 id="实现ajax" tabindex="-1"><a class="header-anchor" href="#实现ajax" aria-hidden="true">#</a> 实现AJAX</h2><h3 id="js方式" tabindex="-1"><a class="header-anchor" href="#js方式" aria-hidden="true">#</a> JS方式</h3><ul><li><p>核心对象：XMLHttpRequest</p><ul><li>用于在后台与服务器交换数据。可以在不重新加载整个网页的情况下，对网页的某部分进行更新。</li></ul></li><li><p>打开链接：open(method,url,async)</p><ul><li>method：请求的类型 GET 或 POST</li><li>url：请求资源的路径</li></ul><ul><li>async：true(异步) 或 false(同步)。</li></ul></li><li><p>发送请求：send(String params)</p><ul><li>params：请求的参数(POST 专用)</li></ul></li><li><p>处理响应：onreadystatechange</p><ul><li>readyState：0-请求未初始化，1-服务器连接已建立，2-请求已接收，3-请求处理中，4-请求已完成，且响应已就绪。</li></ul><ul><li>status：200-响应已全部 OK。</li></ul></li><li><p>获得响应数据形式</p><ul><li><p>responseText：获得字符串形式的响应数据。</p></li><li><p>responseXML：获得 XML 形式的响应数据。</p></li></ul></li></ul><p>鼠标移出输入框，判断用户名是否被注册：</p><ul><li><p>Servlet</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/userServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//设置请求和响应的乱码</span>
        req<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//1.获取请求参数</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//模拟服务器处理请求需要1秒钟</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//2.判断姓名是否已注册</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;font color=&#39;red&#39;&gt;用户名已注册&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;font color=&#39;green&#39;&gt;用户名可用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>html文件</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;!DOCTYPE html&gt;
  &lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
      &lt;meta charset=&quot;UTF-8&quot;&gt;
      &lt;title&gt;用户注册&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
      &lt;form autocomplete=&quot;off&quot;&gt;
          姓名：&lt;input type=&quot;text&quot; id=&quot;username&quot;&gt;
          &lt;span id=&quot;uSpan&quot;&gt;&lt;/span&gt;
          &lt;br&gt;
          密码：&lt;input type=&quot;password&quot; id=&quot;password&quot;&gt;
          &lt;br&gt;
          &lt;input type=&quot;submit&quot; value=&quot;注册&quot;&gt;
      &lt;/form&gt;
  &lt;/body&gt;
  &lt;script&gt;
      //1.为姓名绑定失去焦点事件
      document.getElementById(&quot;username&quot;).onblur = function() {
          //2.创建XMLHttpRequest核心对象
          let xmlHttp = new XMLHttpRequest();
  
          //3.打开链接
          let username = document.getElementById(&quot;username&quot;).value;
          xmlHttp.open(&quot;GET&quot;, &quot;userServlet?username=&quot; + username, true);
      
          //4.发送请求
          xmlHttp.send();
      
          //5.处理响应
          xmlHttp.onreadystatechange = function() {
              //判断请求和响应是否成功
              if(xmlHttp.readyState == 4 &amp;&amp; xmlHttp.status == 200) {
                  //将响应的数据显示到span标签
                  document.getElementById(&quot;uSpan&quot;).innerHTML = xmlHttp.responseText;
              }
          }
      }
  &lt;/script&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="jq方式" tabindex="-1"><a class="header-anchor" href="#jq方式" aria-hidden="true">#</a> JQ方式</h3><p><strong>核心语法：</strong><code>$.ajax({name:value,name:value,…}); </code></p><ul><li>url：请求的资源路径。</li><li>async：是否异步请求，true-是，false-否 (默认是 true)。</li><li>data：发送到服务器的数据，可以是<strong>键值对或者 js 对象</strong>形式。</li><li>type：请求方式，POST 或 GET (默认是 GET)。</li><li>dataType：预期的返回数据的类型，取值可以是 xml, html, js, json, text等。</li><li>success：请求成功时调用的回调函数。</li><li>error：请求失败时调用的回调函数。</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/jquery-3.3.1.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//1.为用户名绑定失去焦点事件</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> username <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.jQuery的通用方式实现AJAX</span>
        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">//请求资源路径</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;userServletxxx&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">//是否异步</span>
            <span class="token literal-property property">async</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token comment">//请求参数</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token string">&quot;username=&quot;</span><span class="token operator">+</span>username<span class="token punctuation">,</span>
            <span class="token comment">//请求方式</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">//数据形式</span>
            <span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">//请求成功后调用的回调函数</span>
            <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//将响应的数据显示到span标签</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#uSpan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">//请求失败后调用的回调函数</span>
            <span class="token function-variable function">error</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;操作失败...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="分页知识" tabindex="-1"><a class="header-anchor" href="#分页知识" aria-hidden="true">#</a> 分页知识</h2><figure><img src="https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/分页知识.png" alt="分页知识" tabindex="0" loading="lazy"><figcaption>分页知识</figcaption></figure><hr>`,19),l=[p];function i(o,c){return s(),a("div",null,l)}const d=n(e,[["render",i],["__file","AJAX.html.vue"]]);export{d as default};
