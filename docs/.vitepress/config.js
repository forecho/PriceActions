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
                                    "text": "K线、交易机会和信号K线",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "K线、交易机会和信号K线 A",
                                                "link": "/08-candles-setups/08a"
                                          },
                                          {
                                                "text": "K线、交易机会和信号K线 B",
                                                "link": "/08-candles-setups/08b"
                                          },
                                          {
                                                "text": "K线、交易机会和信号K线 C",
                                                "link": "/08-candles-setups/08c"
                                          },
                                          {
                                                "text": "K线、交易机会和信号K线 D",
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
                                    "text": "买压和卖压",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "买压和卖压 A",
                                                "link": "/10-buying-selling-pressure/10a"
                                          },
                                          {
                                                "text": "买压和卖压 B",
                                                "link": "/10-buying-selling-pressure/10b"
                                          }
                                    ]
                              },
                              {
                                    "text": "缺口",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "缺口 A",
                                                "link": "/11-gaps/11a"
                                          },
                                          {
                                                "text": "缺口 B",
                                                "link": "/11-gaps/11b"
                                          },
                                          {
                                                "text": "缺口 C",
                                                "link": "/11-gaps/11c"
                                          },
                                          {
                                                "text": "缺口 D",
                                                "link": "/11-gaps/11d"
                                          }
                                    ]
                              },
                              {
                                    "text": "市场周期",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "市场周期 A",
                                                "link": "/12-market-cycle/12a"
                                          },
                                          {
                                                "text": "市场周期 B",
                                                "link": "/12-market-cycle/12b"
                                          },
                                          {
                                                "text": "市场周期 C",
                                                "link": "/12-market-cycle/12c"
                                          }
                                    ]
                              },
                              {
                                    "text": "Always In",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "Always In A",
                                                "link": "/13-always-in/13a"
                                          },
                                          {
                                                "text": "Always In B",
                                                "link": "/13-always-in/13b"
                                          },
                                          {
                                                "text": "Always In C",
                                                "link": "/13-always-in/13c"
                                          }
                                    ]
                              },
                              {
                                    "text": "趋势",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "趋势 A",
                                                "link": "/14-trends/14a"
                                          },
                                          {
                                                "text": "趋势 B",
                                                "link": "/14-trends/14b"
                                          },
                                          {
                                                "text": "趋势 C",
                                                "link": "/14-trends/14c"
                                          },
                                          {
                                                "text": "趋势 D",
                                                "link": "/14-trends/14d"
                                          },
                                          {
                                                "text": "趋势 E",
                                                "link": "/14-trends/14e"
                                          }
                                    ]
                              },
                              {
                                    "text": "突破",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "突破 A",
                                                "link": "/15-breakouts/15a"
                                          },
                                          {
                                                "text": "突破 B",
                                                "link": "/15-breakouts/15b"
                                          },
                                          {
                                                "text": "突破 C",
                                                "link": "/15-breakouts/15c"
                                          },
                                          {
                                                "text": "突破 D",
                                                "link": "/15-breakouts/15d"
                                          },
                                          {
                                                "text": "突破 E",
                                                "link": "/15-breakouts/15e"
                                          },
                                          {
                                                "text": "突破 F",
                                                "link": "/15-breakouts/15f"
                                          },
                                          {
                                                "text": "突破 G",
                                                "link": "/15-breakouts/15g"
                                          },
                                          {
                                                "text": "突破 H",
                                                "link": "/15-breakouts/15h"
                                          }
                                    ]
                              },
                              {
                                    "text": "通道",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "通道 A",
                                                "link": "/16-channels/16a"
                                          },
                                          {
                                                "text": "通道 B",
                                                "link": "/16-channels/16b"
                                          },
                                          {
                                                "text": "通道 C",
                                                "link": "/16-channels/16c"
                                          },
                                          {
                                                "text": "通道 D",
                                                "link": "/16-channels/16d"
                                          },
                                          {
                                                "text": "通道 E",
                                                "link": "/16-channels/16e"
                                          },
                                          {
                                                "text": "通道 F",
                                                "link": "/16-channels/16f"
                                          }
                                    ]
                              },
                              {
                                    "text": "窄通道和微通道",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "窄通道和微通道 A",
                                                "link": "/17-tight-channels/17a"
                                          },
                                          {
                                                "text": "窄通道和微通道 B",
                                                "link": "/17-tight-channels/17b"
                                          }
                                    ]
                              },
                              {
                                    "text": "震荡区间",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "震荡区间 A",
                                                "link": "/18-trading-ranges/18a"
                                          },
                                          {
                                                "text": "震荡区间 B",
                                                "link": "/18-trading-ranges/18b"
                                          },
                                          {
                                                "text": "震荡区间 C",
                                                "link": "/18-trading-ranges/18c"
                                          },
                                          {
                                                "text": "震荡区间 D",
                                                "link": "/18-trading-ranges/18d"
                                          },
                                          {
                                                "text": "震荡区间 E",
                                                "link": "/18-trading-ranges/18e"
                                          },
                                          {
                                                "text": "震荡区间 F",
                                                "link": "/18-trading-ranges/18f"
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
                                    "text": "MES 回顾",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "20250307",
                                                "link": "/mes-recap/20250307"
                                          },
                                          {
                                                "text": "20250310",
                                                "link": "/mes-recap/20250310"
                                          },
                                          {
                                                "text": "20250311",
                                                "link": "/mes-recap/20250311"
                                          },
                                          {
                                                "text": "20250312",
                                                "link": "/mes-recap/20250312"
                                          },
                                          {
                                                "text": "20250313",
                                                "link": "/mes-recap/20250313"
                                          },
                                          {
                                                "text": "20250314",
                                                "link": "/mes-recap/20250314"
                                          },
                                          {
                                                "text": "20250317",
                                                "link": "/mes-recap/20250317"
                                          },
                                          {
                                                "text": "20250318",
                                                "link": "/mes-recap/20250318"
                                          },
                                          {
                                                "text": "20250319",
                                                "link": "/mes-recap/20250319"
                                          },
                                          {
                                                "text": "20250320",
                                                "link": "/mes-recap/20250320"
                                          },
                                          {
                                                "text": "20250321",
                                                "link": "/mes-recap/20250321"
                                          },
                                          {
                                                "text": "20250409",
                                                "link": "/mes-recap/20250409"
                                          },
                                          {
                                                "text": "20250410",
                                                "link": "/mes-recap/20250410"
                                          },
                                          {
                                                "text": "20250411",
                                                "link": "/mes-recap/20250411"
                                          }
                                    ]
                              },
                              {
                                    "text": "问答汇总",
                                    "collapsed": false,
                                    "items": [
                                          {
                                                "text": "关于流动性猎取",
                                                "link": "/qa-summary/about-liquidity-grab"
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