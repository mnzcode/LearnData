# Nginx

## 安装软件

Nginx 是一个高性能的 HTTP 和[反向代理 ](https://baike.baidu.com/item/反向代理/7793488)Web 服务器，同时也提供了 IMAP/POP3/SMTP 服务

Nginx 两个最核心的功能：高性能的静态 Web 服务器，反向代理

* 安装指令：sudo apt-get install nginx

* 查看版本：nginx -v
* 系统指令：systemctl / service  start/restart/stop/status nginx

配置文件安装目录：/etc/nginx

日志文件：/var/log/nginx



***



## 配置文件

nginx.conf 文件时 Nginx 的主配置文件

<img src="https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/Nginx配置文件conf.jpg" style="zoom:80%;" />

* main 部分
  <img src="https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/Nginx配置文件main部分.jpg" style="zoom: 67%;" />

* events 部分
  <img src="https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/Nginx配置文件events部分.jpg" style="zoom:67%;" />

* server 部分
  <img src="https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/Nginx配置文件server部分.jpg" style="zoom:67%;" />

  root 设置的路径会拼接上 location 的路径，然后去最终路径寻找对应的文件



***



## 发布项目

1. 创建一个 toutiao 目录

   ```sh
   cd /home
   mkdir toutiao
   ```

2. 将项目上传到 toutiao 目录

3. 解压项目 unzip web.zip

4. 编辑 Nginx 配置文件 nginx.conf

   ```shell
   server {
   	listen       80;
   	server_name  localhost;
   	location / {
   		root   /home/seazean/toutiao;
   		index  index.html index.htm;
   	}
   }
   ```

5. 重启 Nginx 服务：systemctl  restart nginx

6. 浏览器打开网址：http://127.0.0.1:80



***



## 反向代理

> 无法访问 Google，可以配置一个代理服务器，发送请求到代理服务器，代理服务器经过转发，再将请求转发给 Google，返回结果之后，再次转发给用户，这个叫做正向代理，正向代理对于用户来说，是有感知的

**正向代理（forward proxy）**：是一个位于客户端和目标服务器之间的代理服务器，为了从目标服务器取得内容，客户端向代理服务器发送一个请求并指定目标，然后代理服务器向目标服务器转交请求并将获得的内容返回给客户端，**正向代理，其实是"代理服务器"代理了当前"客户端"，去和"目标服务器"进行交互**

作用：

* 突破访问限制：通过代理服务器，可以突破自身 IP 访问限制，访问国外网站，教育网等
* 提高访问速度：代理服务器都设置一个较大的硬盘缓冲区，会将部分请求的响应保存到缓冲区中，当其他用户再访问相同的信息时， 则直接由缓冲区中取出信息，传给用户，以提高访问速度
* 隐藏客户端真实 IP：隐藏自己的 IP，免受攻击

<img src="https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/正向代理.png" style="zoom:50%;" />





**反向代理（reverse proxy）**：是指以代理服务器来接受 Internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器，**反向代理，其实是"代理服务器"代理了"目标服务器"，去和当前"客户端"进行交互**

作用：

* 隐藏服务器真实 IP：使用反向代理，可以对客户端隐藏服务器的 IP 地址
* 负载均衡：根据所有真实服务器的负载情况，将客户端请求分发到不同的真实服务器上
* 提高访问速度：反向代理服务器可以对于静态内容及短时间内有大量访问请求的动态内容提供缓存服务
* 提供安全保障：反向代理服务器可以作为应用层防火墙，为网站提供对基于 Web 的攻击行为（例如 DoS/DDoS）的防护，更容易排查恶意软件等

<img src="https://seazean.oss-cn-beijing.aliyuncs.com/img/Web/反向代理.png" style="zoom:50%;" />

区别：

* 正向代理其实是客户端的代理，帮助客户端访问其无法访问的服务器资源；反向代理则是服务器的代理，帮助服务器做负载均衡，安全防护等
* 正向代理一般是客户端架设的，比如在自己的机器上安装一个代理软件；反向代理一般是服务器架设的，比如在自己的机器集群中部署一个反向代理服务器
* 正向代理中，服务器不知道真正的客户端到底是谁，以为访问自己的就是真实的客户端；反向代理中，客户端不知道真正的服务器是谁，以为自己访问的就是真实的服务器

* 正向代理和反向代理的作用和目的不同。正向代理主要是用来解决访问限制问题；而反向代理则是提供负载均衡、安全防护等作用；二者均能提高访问速度