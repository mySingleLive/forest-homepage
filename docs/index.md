---
home: true
heroImage: /img/Forest_Logo_Anim.gif
heroText: Forest
tagline: 声明式与编程式双修，让天下没有难以发送的 HTTP 请求
actionText: 开始使用 →
actionLink: /pages/1.6.x/install_guide/
actions:
  - actionText: 开始使用 →
    actionLink: /pages/1.6.x/install_guide/
  - actionText: 加入社区
    actionLink: /pages/group/
bannerBg: none
sitemap.priority: 0.99
features:
  - title: 🍭 容易上手
    details: 10分钟即可完成请求的定义、发送、接收、解析、错误处理、日志打印等过程，此外还有直观的API和详尽的文档
  - title: ☕ 简单优雅
    details: 将繁复的 HTTP 请求细节封装成 Java 接口 + 注解的形式，不必关心请求发送的具体过程
  - title: 🧩 扩展灵活
    details: 能使用自定义拦截器和自定义注解来扩展Forest的能力，即使面对意想不到的场景也能轻松应对
  - title: 🧱 多种后端
    details: Forest 后端底层支持 OkHttp3 和 HttpClient 框架，助你应对各种场景的不同情况
  - title: 🏸 多种范式
    details: Forest 支持声明式以及编程式的请求发送范式，并对每种范式都提供了尽可能快捷高效的接口
  - title: ⚽️ 多种格式
    details: Forest 支持JSON、XML、表单、Protobuf 等多种主流数据格式转换

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---

<br/><br/>

## 特别赞助

<br/>

::: cardList
```yaml
- name: MaxKey
  desc: 业界领先的身份管理和认证产品
  avatar: /img/sponsor/max-key.png
  link: https://maxkey.top/
  bgColor: '#282c34' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: '#ffffff' # 可选，默认var(--textColor)
- name: Snowy
  desc: 国内首个国密前后端分离快速开发平台
  avatar: /img/sponsor/snowy.png
  link: https://xiaonuo.vip/
  bgColor: '#1373CC' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: '#ffffff' # 可选，默认var(--textColor)
- name: Postcat
  desc: 开源 API 管理工具，接口文档、接口测试、Mock..
  avatar: /img/sponsor/eoapi.png
  link: https://datayi.cn/w/noqbyyr9
  bgColor: '#142765' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: '#ffffff' # 可选，默认var(--textColor)
- name: 明道云HAP超级应用平台
  desc: 不止零代码，融合多元能力，就是能解决很多问题
  avatar: /img/sponsor/mingdao.png
  link: https://www.mingdao.com?s=utm_80&utm_source=forest&utm_medium=banner&utm_campaign=IT%E7%BD%91%E7%AB%99&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1
  bgColor: '#2196f3'
  textColor: '#ffffff'
- name: Fast Request
  desc: IDEA版Postman,为简化API调试而生
  avatar: /img/sponsor/fast-request.svg
  link: https://dromara.gitee.io/fast-request/
  bgColor: '#2a2a2a'
  textColor: '#ffffff'
- name: zyplayer-doc
  desc: 可私有化部署的文档与知识库管理平台
  avatar: /img/sponsor/zyplayer-logo.png
  link: https://doc.zyplayer.com/#/integrate/zyplayer-doc?utm=forest
  bgColor: '#ffffff'
  textColor: '#000000'
- name: frsimple
  desc: 一个纯净的中后台脚手架，无封装，支持springboot2.7.x和3.x双分支版本
  avatar: /img/sponsor/frsimple.jpg
  link: https://frsimple.cn/blogs/other/money.html
  bgColor: '#407cfe'
  textColor: '#ffffff'
- name: JNPF低代码开发平台
  desc: 技术双引擎系统，无限制业务场景，永久使用权，全源码交付
  avatar: /img/sponsor/jnpfsoft.png
  link: https://www.jnpfsoft.com/index.html?from=forest
  bgColor: '#ffffff'
  textColor: '#000000'
- name: 成为赞助商
  desc: 期待您的大力支持
  avatar: /img/sponsor/sponsor.svg
  link: /pages/donate/
  bgColor: '#e6e6e6' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: '#1f2328' # 可选，默认var(--textColor)
```
:::
<br/>

<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="128"></div>

<br/>


<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color: #4aa962;
  border-radius: 30px;
  box-sizing: border-box;
  border: 2px solid #4aa962;
}
</style>

<br>

## 特性

<div class="row">
    <div class="col" style="margin: 1.5rem 2.5rem 0rem 0rem; width: 28.5rem;">
        <div class="introContent">
            <ul>
                <li>支持 <b>声明式接口</b>，方便与业务代码解耦</li>
                <li>支持 <b>编程式接口</b>，方便快速访问请求</li>
                <li>支持底层 HTTP 库: <b>OkHttp 3</b></li>
                <li>支持底层 HTTP 库: <b>Httpclient</b></li>
                <li>不依赖中间件</li>
                <li>支持 <b>GET</b>、<b>POST</b> 等所有请求方法</li>
                <li>约定大于配置</li>
                <li>自动 <b>JSON</b>、<b>XML</b>、<b>Protobuf</b> 转换</li>
                <li>支持 <b>自定义转换器</b></li>
                <li>多种加签方式</li>
                <li>支持 <b>Spring</b> 和 <b>Springboot</b> 集成</li>
                <li>支持 <b>上传下载</b></li>
                <li>支持 <b>模板表达式</b></li>
                <li>支持 <b>拦截器</b></li>
                <li>支持 <b>自定义注解</b></li>
                <li>支持 <b>异步请求</b></li>
            </ul>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; margin: 0px 1.7rem 0px 0px">
        <img class="img_margin img_shadow img_bg" style="padding: 1rem;" src="/img/forest_request_flow.svg" alt="request flow" />
    </div>
</div>

<br><br>


## 正在使用 Forest 的企业

<div class="users_block">
    <table class="user_logo">
        <tr>
            <td><a href="https://www.huawei.com/cn/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img height="50px" src="/img/users/logo_huawei.png" class="no-zoom" alt="华为"></div></a></td>
            <td><a href="https://www.antgroup.com/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img height="50px" src="/img/users/logo_antgroup.png" class="no-zoom" alt="蚂蚁集团"></div></a></td>
            <td><a href="https://zgh.com/" target="_blank"><div class="logo_box1" style="background-color: #ffffff"><img height="50px" src="/img/users/logo_geely.png" class="no-zoom" alt="吉利集团"></div></a></td>
        </tr>
        <tr>
            <td><a href="https://www.ictbda.com/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_ictbda.png" class="no-zoom" alt="中科院计算所大数据研究院"></div></a></td>
            <td><a href="http://zy.zjcvmc.cn/" target="_blank"><div class="logo_box1" style="background-color: #ffffff"><img src="/img/users/logo_zgjj.png" class="no-zoom" alt="中国交建"></div></a></td>
            <td><a href="http://tldt.net/" target="_blank"><div class="logo_box" style="background-color: #1590d6;"><img src="/img/users/logo_tldt.png" class="no-zoom" alt="神州通立电梯"></div></a></td>
        </tr>
        <tr>
    <td><a href="https://dms.yadea.com.cn/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_changhongit.png" class="no-zoom" alt="雅迪"></div></a></td>
            <td><a href="https://dms.yadea.com.cn/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_yadea.png" class="no-zoom" alt="雅迪"></div></a></td>
            <td><a href="https://www.woshipm.com/" target="_blank"><div class="logo_box0" style="background-color: #4470f5"><img src="/img/users/logo_woshipm.webp" class="no-zoom" alt="人人都是产品经理"></div></a></td>
        </tr>
        <tr>
            <td><a href="https://weidubim.com/" target="_blank"><div class="logo_box" style="background-color: #222222;"><img height="50px" src="/img/users/logo_weidubim.png" class="no-zoom" alt="万智维度"></div></a></td>
            <td><a href="https://www.yiring.com/" target="_blank"><div class="logo_box0" style="background-color: #ffffff"><img src="/img/users/logo_yiring.png" class="no-zoom" alt="壹润"></div></a></td>
            <td><a href="http://gzsunrun.cn/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img height="50px" src="/img/users/logo_gzsunrun.jpg" class="no-zoom" alt="尚融网络科技"></div></a></td>
        </tr>
        <tr>
            <td><a href="https://www.huafang-aiot.com/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_huafangzhilian.png" class="no-zoom" alt="华方智联"></div></a></td>
            <td><a href="https://www.hyperchain.cn/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_hyperchain.png" class="no-zoom" alt="趣链科技"></div></a></td>
            <td><a href="https://www.thebeastshop.com/" target="_blank"><div class="logo_box1" style="background-color: #ffffff"><img height="50px" src="/img/users/logo_thebeastshop.jpg" class="no-zoom" alt="野兽派花店"></div></a></td>
        </tr>
        <tr>
            <td><a href="http://www.datapps.cn/" target="_blank"><div class="logo_box" style="background-color: #095888"><img src="/img/users/logo_datapps.png" class="no-zoom" alt="聚云位智"></div></a></td>
            <td><a href="https://www.nndrobot.com/" target="_blank"><div class="logo_box1" style="background-color: #ffffff;"><img src="/img/users/logo_nndrobot.png" class="no-zoom" alt="新佰人机器人"></div></a></td>
            <td><a href="https://www.yintatech.cn/" target="_blank"><div class="logo_box" style="background-color: #ffffff;"><img src="/img/users/logo_yintatech.png" class="no-zoom" alt="赢他科技"></div></a></td>
        </tr>
        <tr>
            <td><a href="https://www.swifthealth.cn/" target="_blank"><div class="logo_box" style="background-color: #ffffff;"><img src="/img/users/logo_swifthealth.png" class="no-zoom" alt="朝前智能"></div></a></td>
            <td><a href="https://www.manyibar.com/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_manyibar.png" class="no-zoom" alt="满意吧"></div></a></td>
            <td><a href="http://www.ue-one.com/" target="_blank"><div class="logo_box" style="background-color: #042f55;"><img src="/img/users/logo_ue-one.png" class="no-zoom" alt="源一科技"></div></a></td>
        </tr>
        <tr>
            <td><a href="https://www.xwsoft.com.cn/" target="_blank"><div class="logo_box" style="background-color: #333333;"><img src="/img/users/logo_xwsoft.png" class="no-zoom" alt="欣网视讯"></div></a></td>
            <td><a href="http://www.ynjzh.com/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_ynjzh.png" class="no-zoom" alt="嘉之会科技"></div></a></td>
            <td><a href="http://www.xingsnb.cn/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img height="50px" src="/img/users/logo_xingsnb.jpg" class="no-zoom" alt="星晟工程"></div></a></td>
        </tr>
        <tr>
            <td><a href="https://www.byai.com/" target="_blank"><div class="logo_box" style="background-color: #2b58fa;"><img src="/img/users/logo_byai.png" class="no-zoom" alt="百应"></div></a></td>
            <td><a href="https://m.hibobi.com/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_hibobi.png" class="no-zoom" alt="嗨宝贝"></div></a></td>
            <td><a href="https://hzqianqi.com/" target="_blank"><div class="logo_box" style="background-color: #ffffff"><img src="/img/users/logo_hzqianqi.png" class="no-zoom" alt="仟奇"></div></a></td>
        </tr>
    </table>
</div>

<div style="text-align: center">
（如果您的企业也使用 Forest，您可以 <a href="javascript:window.open('https://gitee.com/dromara/forest/issues/I3CG1U')">在此</a> 提交）
</div>

<br><br>


## 最新版本


<code-group>
<code-block title="Springboot 环境" active>

```xml
<!-- Spring Boot3 环境请用 forest-spring-boot3-starter -->
<!-- Forest Spring Boot 启动包 -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-spring-boot-starter</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- Forest JAXB 扩展包 -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-jaxb</artifactId>
    <version>1.6.4</version>
</dependency>
```

</code-block>
<code-block title="Springboot 3 环境">

```xml
<!-- Forest Spring Boot3 启动包 -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-spring-boot3-starter</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- Forest Jakarta 扩展包 -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-jakarta-xml</artifactId>
    <version>1.6.4</version>
</dependency>
```

</code-block>
<code-block title="Spring 环境">

```xml
<!-- Forest 核心包 -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-core</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- Forest Spring 扩展包 -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-spring</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- 若 Java 版本在 17 以下，就使用 forest-jaxb -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-jaxb</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- 若 Java 环境为 17 及以上版本，则使用 forest-jakarta-xml -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-jakarta-xml</artifactId>
    <version>1.6.4</version>
</dependency>
```
</code-block>

<code-block title="Solon 环境">

```xml
<!-- Forest Solon 插件包 -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-solon-plugin</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- 若 Java 版本在 17 以下，就使用 forest-jaxb -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-jaxb</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- 若 Java 环境为 17 及以上版本，则使用 forest-jakarta-xml -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-jakarta-xml</artifactId>
    <version>1.6.4</version>
</dependency>
```

</code-block>

<code-block title="原生 Java 环境">

```xml
<!-- Forest 核心包 -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-core</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- 若 Java 版本在 17 以下，就使用 forest-jaxb -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-jaxb</artifactId>
    <version>1.6.4</version>
</dependency>

<!-- 若 Java 环境为 17 及以上版本，则使用 forest-jakarta-xml -->
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-jakarta-xml</artifactId>
    <version>1.6.4</version>
</dependency>
```
</code-block>

</code-group>

::: warning 所需环境

JDK版本: `8+`

可集成的 spring boot 版本: `1.x`, `2.x`, `3.x`

spring boot3 所依赖的 starter 不同，请注意坐标

也可不依赖 spring boot 和 spring
:::

<br/><br/>


## 代码托管

<a href='https://gitee.com/dromara/forest' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/dromara/forest" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/><br/>

## 知识星球

<span class="row" style="height: 180px">
    <img class="img_shadow2 col" style="height: 180px;" :src="$withBase('/img/dromara-zsxq-h.png')" alt="zsxq" />
</span>

<br/><br/>

## 开源社区平台
<div class="row">
<span class="link">
    <a href="https://gitee.com" target="_blank">
        <img :src="$withBase('/img/link/gitee-logo.png')" class="no-zoom">
    </a>
</span>

<span class="link">
    <a href="https://www.oschina.net/" target="_blank">
        <img :src="$withBase('/img/link/oschina-logo.png')" class="no-zoom">
    </a>
</span>
</div>
<br><br>

## dromara 组织项目
<div class="row">
<span class="link">
    <a href="https://gitee.com/dromara/forest" target="_blank">
        <img :src="$withBase('/img/dromara/forest-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/TLog" target="_blank">
        <img :src="$withBase('/img/dromara/tlog-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/hutool" target="_blank">
        <img :src="$withBase('/img/dromara/hutool-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/sa-token" target="_blank">
        <img :src="$withBase('/img/dromara/satoken-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/hmily" target="_blank">
        <img :src="$withBase('/img/dromara/hmily-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/Raincat" target="_blank">
        <img :src="$withBase('/img/dromara/raincat-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/Akali" target="_blank">
        <img :src="$withBase('/img/dromara/akali-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/liteFlow" target="_blank">
        <img :src="$withBase('/img/dromara/liteflow-logo.png')" class="no-zoom">
    </a>
</span>
</div>
<div class="row">
<span class="link">
    <a href="https://jpom.top" target="_blank">
        <img :src="$withBase('/img/dromara/jpom-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/sureness" target="_blank">
        <img :src="$withBase('/img/dromara/sureness-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/easy-es" target="_blank">
        <img :src="$withBase('/img/dromara/ee-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/northstar" target="_blank">
        <img :src="$withBase('/img/dromara/northstar-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/fast-request" target="_blank">
        <img :src="$withBase('/img/dromara/fastrequest-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/dynamic-tp" target="_blank">
        <img :src="$withBase('/img/dromara/dynamictp-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/mendmix" target="_blank">
        <img :src="$withBase('/img/dromara/mendmix-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/cubic" target="_blank">
        <img :src="$withBase('/img/dromara/cubic-logo.png')" class="no-zoom">
    </a>
</span>
</div>
<div class="row">
<span class="link">
    <a href="https://gitee.com/dromara/koalas-rpc" target="_blank">
        <img :src="$withBase('/img/dromara/koalas-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/MaxKey" target="_blank">
        <img :src="$withBase('/img/dromara/maxkey-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/gobrs-async" target="_blank">
        <img :src="$withBase('/img/dromara/gobrsasync-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/x-easypdf" target="_blank">
        <img :src="$withBase('/img/dromara/xeasypdf-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/image-combiner" target="_blank">
        <img :src="$withBase('/img/dromara/imagecombiner-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/dante-cloud" target="_blank">
        <img :src="$withBase('/img/dromara/dantecloud-logo.png')" class="no-zoom">
    </a>
</span>
<span class="link">
    <a href="https://gitee.com/dromara/go-view" target="_blank">
        <img :src="$withBase('/img/dromara/goview-logo.png')" class="no-zoom">
    </a>
</span>
</div>
<br><br>


## 友情链接
<div class="row">
<span class="link2">
    <a href="https://bs.zhxu.cn/" target="_blank">
        <img :src="$withBase('/img/link/bean-searcher-logo.png')" height="2em" class="no-zoom">
    </a>
</span>

<span class="link">
    <a href="http://www.ipidea.net/?utm-source=Forest&utm-keyword=?Forest" target="_blank">
        <img :src="$withBase('/img/link/ipidea.png')" class="no-zoom">
    </a>
</span>

<span class="link">
    <a href="https://uiadmin.jiangruyi.com/" target="_blank">
        <img :src="$withBase('/img/link/uniadmin.png')" class="no-zoom">
    </a>
</span>

<span class="link">
    <a href="https://www.mingdao.com?s=utm_82&utm_source=forest&utm_medium=referral&utm_campaign=friendLink&utm_content=website_footer" target="_blank">
        <img :src="$withBase('/img/link/mingdao-logo.png')" class="no-zoom icon">
    </a>
</span>

<span class="link">
    <a href="https://www.wxy97.com/" target="_blank">
        <img :src="$withBase('/img/link/wxy97-logo.jpg')" class="no-zoom icon">
        <div>王旭阳博客</div>
    </a>
</span>


</div>

<br><br>

<style>
  .link {
    width: 8.4em;
    text-align: left;
  }
  .link img {
    height:1.5em;
    max-width:200px;
    margin: 14px;
  }
  .link .icon {
    margin: 14px 5px 14px 14px;
  }
  .link a {
    display: flex;
    flex-direction: row;
  }
  .link a div {
    line-height: 51px;
    font-weight: bold;
    font-size: 0.75em;
    color: #457451;
  }


  .link2 {
    width: 8.4em;
    text-align: left;
  }
  .link2 img {
    height:2.6em;
    max-width:200px;
    margin: 14px;
  }
  .link2 .icon {
    margin: 14px 5px 14px 14px;
  }
  .link2 a {
    display: flex;
    flex-direction: row;
  }
  .link2 a div {
    line-height: 51px;
    font-weight: bold;
    font-size: 0.75em;
    color: #457451;
  }

  .page-wwads{
    width:100%!important;
    min-height: 0;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .introContent {
    margin-top: 15px;
    font-size: 14px;
  }
  .introContent li {
    list-style-type: none;
    background: url("/img/guigou_green.svg") no-repeat 0rem 0.3rem;
    background-size: 1rem 1rem;
    text-indent: 2em;
    margin: 5px 0rem 0rem 0rem;
  }




.user_logo {
}

.user_logo td {
    width: 500px;
}

.user_logo a {
    cursor: pointer;
}

.logo_box0 {
    height: 60px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.logo_box0 img {
    height: 60px;
}


.logo_box1 {
    height: 58px;
    padding: 1px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.logo_box1 img {
    height: 56px;
}



.logo_box {
    height: 50px;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.logo_box img {
    height: 40px;
}


</style>
