module.exports = [
    { text: '首页', link: '/' },
    { text: '文档', link: '/pages/1.5.36/install_guide/', items: [
            { text: '当前版本', items: [
                    {text: 'v1.6.1', link: '/pages/1.6.1/install_guide/'}
                ]
            },
            { text: '历史版本', items: [
                    { text: 'v1.5.36', link: '/pages/1.5.36/install_guide/'},
                    { text: 'v1.5.35', link: '/pages/1.5.35/intro/' },
                    { text: 'v1.5.33', link: '/pages/1.5.33/intro/' },
                    { text: 'v1.5.30 ~ v1.5.32', link: '/pages/1.5.32/intro/' },
                    { text: 'v1.5.0 ~ v1.5.28', link: '/pages/1.5.28/intro/' },
                ]
            },
            { text: '插件', items: [
                    {text: 'ForestX', link: '/pages/plugin/forestx/'}
                ]
            },
            { text: '问答', items: [
                    { text: '常见问题', link: '/pages/q_and_a/' },
                ]
            },
            { items: [
                    { text: '更新记录', link: '/pages/releases/' },
                ]
            },
        ]
    },
    { text: '案例', link: '/pages/cases/' },
    { text: '社区', items:[
            { text: '加入群聊', link: '/pages/group/'},
            { text: '赞助我们', link: '/pages/donate/'},
            { text: '参与贡献', link: '/pages/contribute/'},
            { text: '贡献者们', link: '/pages/contributors/'},
        ]
    },
    { text: '关于', items:[
            { text: '项目介绍', link: '/pages/intro/' },
            { text: '开发团队', link: '/pages/team/'},
            { text: '关于作者', link: '/pages/author/'},
        ]
    },
    { text: '推荐', items: [
            { text: 'MaxKey - 业界领先的身份管理和认证产品', link: 'https://maxkey.top/' },
            { text: 'Snowy - 国内首个国密前后端分离快速开发平台', link: 'https://xiaonuo.vip/' },
            { text: 'Eoapi - 一个开源、可拓展的 API 工具平台', link: 'https://www.eoapi.io/?utm_source=sponsor&utm_campaign=s-forest' },
            { text: 'Fast Request - IDEA版Postman,为简化API调试而生', link: 'https://dromara.gitee.io/fast-request' },
            { text: 'Bean Searcher - 专注高级查询的只读 ORM', link: 'https://bs.zhxu.cn/' },
            { text: 'zyplayer-doc - 可私有化部署的文档与知识库管理平台', link: 'https://doc.zyplayer.com/#/integrate/zyplayer-doc?utm=forest' },
            { text: 'frSimple - 中后台脚手架/小程序商城', link: 'https://frsimple.cn/blogs/other/money.html' },
        ]
    },
    { text: '源码', items: [
            { text: 'Gitee', link: 'https://gitee.com/dromara/forest' },
            { text: 'Github', link: 'https://github.com/dromara/forest' },
            { text: 'GitCode', link: 'https://gitcode.com/dromara/forest' }
        ]
    }
];
