// https://vitepress.dev/reference/site-config
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "价格行为交易",
  description: "Al Brooks 的《Price Action Fundamentals》系列视频总结",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/01-terminology/' }
    ],

    sidebar: [
      {
            "text": "基础知识",
            "items": [
                  {
                        "text": "术语",
                        "link": "/01-terminology/"
                  },
                  {
                        "text": "图表基础和价格行为",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "图表基础和价格行为 A",
                                    "link": "/02-chart-basics/02a"
                              },
                              {
                                    "text": "图表基础和价格行为 B",
                                    "link": "/02-chart-basics/02b"
                              },
                              {
                                    "text": "图表基础和价格行为 C",
                                    "link": "/02-chart-basics/02c"
                              },
                              {
                                    "text": "图表基础和价格行为 D",
                                    "link": "/02-chart-basics/02d"
                              }
                        ]
                  },
                  {
                        "text": "外汇基础",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "外汇基础 A",
                                    "link": "/03-forex-basics/03a"
                              },
                              {
                                    "text": "外汇基础 B",
                                    "link": "/03-forex-basics/03b"
                              },
                              {
                                    "text": "外汇基础 C",
                                    "link": "/03-forex-basics/03c"
                              },
                              {
                                    "text": "外汇基础 D",
                                    "link": "/03-forex-basics/03d"
                              },
                              {
                                    "text": "外汇基础 E",
                                    "link": "/03-forex-basics/03e"
                              }
                        ]
                  },
                  {
                        "text": "我的设置",
                        "link": "/04-my-setup/"
                  },
                  {
                        "text": "程序化交易",
                        "link": "/05-program-trading/"
                  },
                  {
                        "text": "成功交易者的性格特质",
                        "link": "/06-personality-traits/"
                  }
            ]
      },
      {
            "text": "交易技巧",
            "items": [
                  {
                        "text": "入门",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "入门 A",
                                    "link": "/07-starting-out/07a"
                              },
                              {
                                    "text": "入门 B",
                                    "link": "/07-starting-out/07b"
                              }
                        ]
                  },
                  {
                        "text": "蜡烛图设置和信号棒",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "蜡烛图设置和信号棒 A",
                                    "link": "/08-candles-setups/08a"
                              },
                              {
                                    "text": "蜡烛图设置和信号棒 B",
                                    "link": "/08-candles-setups/08b"
                              },
                              {
                                    "text": "蜡烛图设置和信号棒 C",
                                    "link": "/08-candles-setups/08c"
                              },
                              {
                                    "text": "蜡烛图设置和信号棒 D",
                                    "link": "/08-candles-setups/08d"
                              }
                        ]
                  },
                  {
                        "text": "回调和数K线",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "回调和数K线 A",
                                    "link": "/09-pullbacks-counting/09a"
                              },
                              {
                                    "text": "回调和数K线 B",
                                    "link": "/09-pullbacks-counting/09b"
                              },
                              {
                                    "text": "回调和数K线 C",
                                    "link": "/09-pullbacks-counting/09c"
                              }
                        ]
                  },
                  {
                        "text": "买卖压力",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "买卖压力 A",
                                    "link": "/09-buying-selling-pressure/10a"
                              },
                              {
                                    "text": "买卖压力 B",
                                    "link": "/09-buying-selling-pressure/10b"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "总结",
            "items": [
                  {
                        "text": "价格行为全解",
                        "link": "/price-action-all-in-one/"
                  }
            ]
      },
      {
            "text": "其他资源",
            "items": [
                  {
                        "text": "MES回顾",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "20250307",
                                    "link": "/mes-recap/20250307"
                              },
                              {
                                    "text": "20250310",
                                    "link": "/mes-recap/20250310"
                              }
                        ]
                  }
            ]
      }
],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/forecho/PriceActions' }
    ]
  },
  
  // 配置 Markdown
  markdown: {
    lineNumbers: true,
  },
  
  // 使用干净的 URL（没有 .html 后缀）
  cleanUrls: true,
  
  // 部署配置
  base: '/'
})