const l=JSON.parse('{"key":"v-bf578778","path":"/%E5%B7%A5%E5%85%B7/Git.html","title":"Git","lang":"zh-CN","frontmatter":{"description":"Git Git概述 版本系统 SVN 是集中式版本控制系统，版本库是集中放在中央服务器的，而开发人员工作的时候，用的都是自己的电脑，所以首先要从中央服务器下载最新的版本，然后开发，开发完后，需要把自己开发的代码提交到中央服务器。 集中式版本控制工具缺点：服务器单点故障、容错性差 Git 是分布式版本控制系统（Distributed Version Control System，简称 DVCS） ，分为两种类型的仓库： 本地仓库和远程仓库： 本地仓库：是在开发人员自己电脑上的 Git 仓库 远程仓库：是在远程服务器上的 Git 仓库","head":[["meta",{"property":"og:url","content":"https://newzone.top/learn_data/%E5%B7%A5%E5%85%B7/Git.html"}],["meta",{"property":"og:site_name","content":"挨踢牛马"}],["meta",{"property":"og:title","content":"Git"}],["meta",{"property":"og:description","content":"Git Git概述 版本系统 SVN 是集中式版本控制系统，版本库是集中放在中央服务器的，而开发人员工作的时候，用的都是自己的电脑，所以首先要从中央服务器下载最新的版本，然后开发，开发完后，需要把自己开发的代码提交到中央服务器。 集中式版本控制工具缺点：服务器单点故障、容错性差 Git 是分布式版本控制系统（Distributed Version Control System，简称 DVCS） ，分为两种类型的仓库： 本地仓库和远程仓库： 本地仓库：是在开发人员自己电脑上的 Git 仓库 远程仓库：是在远程服务器上的 Git 仓库"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-16T07:46:55.000Z"}],["meta",{"property":"article:author","content":"挨踢牛马"}],["meta",{"property":"article:modified_time","content":"2023-08-16T07:46:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-16T07:46:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"挨踢牛马\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"Git概述","slug":"git概述","link":"#git概述","children":[{"level":3,"title":"版本系统","slug":"版本系统","link":"#版本系统","children":[]},{"level":3,"title":"工作流程","slug":"工作流程","link":"#工作流程","children":[]},{"level":3,"title":"Git安装","slug":"git安装","link":"#git安装","children":[]},{"level":3,"title":"代码托管","slug":"代码托管","link":"#代码托管","children":[]}]},{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":2,"title":"本地仓库","slug":"本地仓库","link":"#本地仓库","children":[{"level":3,"title":"获取仓库","slug":"获取仓库","link":"#获取仓库","children":[]},{"level":3,"title":"工作过程","slug":"工作过程","link":"#工作过程","children":[]},{"level":3,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[]}]},{"level":2,"title":"远程仓库","slug":"远程仓库","link":"#远程仓库","children":[{"level":3,"title":"工作流程","slug":"工作流程-1","link":"#工作流程-1","children":[]},{"level":3,"title":"查看仓库","slug":"查看仓库","link":"#查看仓库","children":[]},{"level":3,"title":"添加仓库","slug":"添加仓库","link":"#添加仓库","children":[]},{"level":3,"title":"克隆仓库","slug":"克隆仓库","link":"#克隆仓库","children":[]},{"level":3,"title":"删除仓库","slug":"删除仓库","link":"#删除仓库","children":[]},{"level":3,"title":"拉取仓库","slug":"拉取仓库","link":"#拉取仓库","children":[]},{"level":3,"title":"推送仓库","slug":"推送仓库","link":"#推送仓库","children":[]}]},{"level":2,"title":"版本管理","slug":"版本管理","link":"#版本管理","children":[]},{"level":2,"title":"分支管理","slug":"分支管理","link":"#分支管理","children":[{"level":3,"title":"查看分支","slug":"查看分支","link":"#查看分支","children":[]},{"level":3,"title":"创建分支","slug":"创建分支","link":"#创建分支","children":[]},{"level":3,"title":"推送分支","slug":"推送分支","link":"#推送分支","children":[]},{"level":3,"title":"切换分支","slug":"切换分支","link":"#切换分支","children":[]},{"level":3,"title":"合并分支","slug":"合并分支","link":"#合并分支","children":[]},{"level":3,"title":"删除分支","slug":"删除分支","link":"#删除分支","children":[]}]},{"level":2,"title":"标签管理","slug":"标签管理","link":"#标签管理","children":[{"level":3,"title":"查看标签","slug":"查看标签","link":"#查看标签","children":[]},{"level":3,"title":"新建标签","slug":"新建标签","link":"#新建标签","children":[]},{"level":3,"title":"推送标签","slug":"推送标签","link":"#推送标签","children":[]},{"level":3,"title":"切换标签","slug":"切换标签","link":"#切换标签","children":[]},{"level":3,"title":"删除标签","slug":"删除标签","link":"#删除标签","children":[]}]},{"level":2,"title":"IDEA操作","slug":"idea操作","link":"#idea操作","children":[{"level":3,"title":"环境配置","slug":"环境配置-1","link":"#环境配置-1","children":[]},{"level":3,"title":"创建仓库","slug":"创建仓库","link":"#创建仓库","children":[]},{"level":3,"title":"文件操作","slug":"文件操作-1","link":"#文件操作-1","children":[]},{"level":3,"title":"版本管理","slug":"版本管理-1","link":"#版本管理-1","children":[]},{"level":3,"title":"分支管理","slug":"分支管理-1","link":"#分支管理-1","children":[]},{"level":3,"title":"推送仓库","slug":"推送仓库-1","link":"#推送仓库-1","children":[]},{"level":3,"title":"克隆仓库","slug":"克隆仓库-1","link":"#克隆仓库-1","children":[]}]}],"git":{"createdTime":1692172015000,"updatedTime":1692172015000,"contributors":[{"name":"mnz","email":"dhuhua@foxmail.com","commits":1}]},"readingTime":{"minutes":10.21,"words":3062},"filePathRelative":"工具/Git.md","localizedDate":"2023年8月16日","excerpt":"<h1> Git</h1>\\n<h2> Git概述</h2>\\n<h3> 版本系统</h3>\\n<p>SVN 是集中式版本控制系统，版本库是集中放在中央服务器的，而开发人员工作的时候，用的都是自己的电脑，所以首先要从中央服务器下载最新的版本，然后开发，开发完后，需要把自己开发的代码提交到中央服务器。</p>\\n<p>集中式版本控制工具缺点：服务器单点故障、容错性差</p>\\n<p>Git 是分布式版本控制系统（Distributed Version Control System，简称 DVCS） ，分为两种类型的仓库：</p>\\n<p>本地仓库和远程仓库：</p>\\n<ul>\\n<li>本地仓库：是在开发人员自己电脑上的 Git 仓库</li>\\n<li>远程仓库：是在远程服务器上的 Git 仓库</li>\\n</ul>","autoDesc":true}');export{l as data};