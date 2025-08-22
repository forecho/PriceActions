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

    // 配置搜索功能
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        },
        // MiniSearch 配置选项
        miniSearch: {
          options: {
            // 使用默认的字段提取器
          },
          // 搜索选项配置
          searchOptions: {
            fuzzy: 0.2,        // 模糊匹配阈值
            prefix: true,      // 启用前缀搜索
            boost: {           // 搜索结果权重
              title: 4,        // 标题权重最高
              text: 2,         // 正文内容权重
              titles: 1        // 标题层级权重
            }
          }
        },
        // 排除特定页面或路径
        exclude: (path) => {
          // 排除一些不需要搜索的页面
          return path.startsWith('/mes-recap/') ||
            path.startsWith('/qa-summary/') ||
            path.includes('search-config')
        }
      }
    },

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
            "text": "02 A",
            "link": "/02-chart-basics/02a"
          },
          {
            "text": "02 B",
            "link": "/02-chart-basics/02b"
          },
          {
            "text": "02 C",
            "link": "/02-chart-basics/02c"
          },
          {
            "text": "02 D",
            "link": "/02-chart-basics/02d"
          }
        ]
      },
      {
        "text": "外汇基础",
        "collapsed": false,
        "items": [
          {
            "text": "03 A",
            "link": "/03-forex-basics/03a"
          },
          {
            "text": "03 B",
            "link": "/03-forex-basics/03b"
          },
          {
            "text": "03 C",
            "link": "/03-forex-basics/03c"
          },
          {
            "text": "03 D",
            "link": "/03-forex-basics/03d"
          },
          {
            "text": "03 E",
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
            "text": "07 A",
            "link": "/07-starting-out/07a"
          },
          {
            "text": "07 B",
            "link": "/07-starting-out/07b"
          }
        ]
      },
      {
        "text": "K线、交易机会和信号K线",
        "collapsed": false,
        "items": [
          {
            "text": "08 A",
            "link": "/08-candles-setups/08a"
          },
          {
            "text": "08 B",
            "link": "/08-candles-setups/08b"
          },
          {
            "text": "08 C",
            "link": "/08-candles-setups/08c"
          },
          {
            "text": "08 D",
            "link": "/08-candles-setups/08d"
          }
        ]
      },
      {
        "text": "回调和数K线",
        "collapsed": false,
        "items": [
          {
            "text": "09 A",
            "link": "/09-pullbacks-counting/09a"
          },
          {
            "text": "09 B",
            "link": "/09-pullbacks-counting/09b"
          },
          {
            "text": "09 C",
            "link": "/09-pullbacks-counting/09c"
          }
        ]
      },
      {
        "text": "买压和卖压",
        "collapsed": false,
        "items": [
          {
            "text": "10 A",
            "link": "/10-buying-selling-pressure/10a"
          },
          {
            "text": "10 B",
            "link": "/10-buying-selling-pressure/10b"
          }
        ]
      },
      {
        "text": "缺口",
        "collapsed": false,
        "items": [
          {
            "text": "11 A",
            "link": "/11-gaps/11a"
          },
          {
            "text": "11 B",
            "link": "/11-gaps/11b"
          },
          {
            "text": "11 C",
            "link": "/11-gaps/11c"
          },
          {
            "text": "11 D",
            "link": "/11-gaps/11d"
          }
        ]
      },
      {
        "text": "市场周期",
        "collapsed": false,
        "items": [
          {
            "text": "12 A",
            "link": "/12-market-cycle/12a"
          },
          {
            "text": "12 B",
            "link": "/12-market-cycle/12b"
          },
          {
            "text": "12 C",
            "link": "/12-market-cycle/12c"
          }
        ]
      },
      {
        "text": "Always In",
        "collapsed": false,
        "items": [
          {
            "text": "13 A",
            "link": "/13-always-in/13a"
          },
          {
            "text": "13 B",
            "link": "/13-always-in/13b"
          },
          {
            "text": "13 C",
            "link": "/13-always-in/13c"
          }
        ]
      },
      {
        "text": "趋势",
        "collapsed": false,
        "items": [
          {
            "text": "14 A",
            "link": "/14-trends/14a"
          },
          {
            "text": "14 B",
            "link": "/14-trends/14b"
          },
          {
            "text": "14 C",
            "link": "/14-trends/14c"
          },
          {
            "text": "14 D",
            "link": "/14-trends/14d"
          },
          {
            "text": "14 E",
            "link": "/14-trends/14e"
          }
        ]
      },
      {
        "text": "突破",
        "collapsed": false,
        "items": [
          {
            "text": "15 A",
            "link": "/15-breakouts/15a"
          },
          {
            "text": "15 B",
            "link": "/15-breakouts/15b"
          },
          {
            "text": "15 C",
            "link": "/15-breakouts/15c"
          },
          {
            "text": "15 D",
            "link": "/15-breakouts/15d"
          },
          {
            "text": "15 E",
            "link": "/15-breakouts/15e"
          },
          {
            "text": "15 F",
            "link": "/15-breakouts/15f"
          },
          {
            "text": "15 G",
            "link": "/15-breakouts/15g"
          },
          {
            "text": "15 H",
            "link": "/15-breakouts/15h"
          }
        ]
      },
      {
        "text": "通道",
        "collapsed": false,
        "items": [
          {
            "text": "16 A",
            "link": "/16-channels/16a"
          },
          {
            "text": "16 B",
            "link": "/16-channels/16b"
          },
          {
            "text": "16 C",
            "link": "/16-channels/16c"
          },
          {
            "text": "16 D",
            "link": "/16-channels/16d"
          },
          {
            "text": "16 E",
            "link": "/16-channels/16e"
          },
          {
            "text": "16 F",
            "link": "/16-channels/16f"
          }
        ]
      },
      {
        "text": "窄通道和微通道",
        "collapsed": false,
        "items": [
          {
            "text": "17 A",
            "link": "/17-tight-channels/17a"
          },
          {
            "text": "17 B",
            "link": "/17-tight-channels/17b"
          }
        ]
      },
      {
        "text": "震荡区间",
        "collapsed": false,
        "items": [
          {
            "text": "18 A",
            "link": "/18-trading-ranges/18a"
          },
          {
            "text": "18 B",
            "link": "/18-trading-ranges/18b"
          },
          {
            "text": "18 C",
            "link": "/18-trading-ranges/18c"
          },
          {
            "text": "18 D",
            "link": "/18-trading-ranges/18d"
          },
          {
            "text": "18 E",
            "link": "/18-trading-ranges/18e"
          },
          {
            "text": "18 F",
            "link": "/18-trading-ranges/18f"
          }
        ]
      },
      {
        "text": "支撑和阻力",
        "collapsed": false,
        "items": [
          {
            "text": "19 A",
            "link": "/19-support-resistance/19a"
          },
          {
            "text": "19 B",
            "link": "/19-support-resistance/19b"
          },
          {
            "text": "19 C",
            "link": "/19-support-resistance/19c"
          },
          {
            "text": "19 D",
            "link": "/19-support-resistance/19d"
          },
          {
            "text": "19 E",
            "link": "/19-support-resistance/19e"
          }
        ]
      },
      {
        "text": "测量移动",
        "collapsed": false,
        "items": [
          {
            "text": "20 A",
            "link": "/20-measured-moves/20a"
          },
          {
            "text": "20 B",
            "link": "/20-measured-moves/20b"
          }
        ]
      },
      {
        "text": "反转",
        "collapsed": false,
        "items": [
          {
            "text": "21 A",
            "link": "/21-reversals/21a"
          },
          {
            "text": "21 B",
            "link": "/21-reversals/21b"
          },
          {
            "text": "21 C",
            "link": "/21-reversals/21c"
          },
          {
            "text": "21 D",
            "link": "/21-reversals/21d"
          }
        ]
      },
      {
        "text": "主要趋势反转",
        "collapsed": false,
        "items": [
          {
            "text": "22 A",
            "link": "/22-major-trend-reversals/22a"
          },
          {
            "text": "22 B",
            "link": "/22-major-trend-reversals/22b"
          },
          {
            "text": "22 C",
            "link": "/22-major-trend-reversals/22c"
          },
          {
            "text": "22 D",
            "link": "/22-major-trend-reversals/22d"
          }
        ]
      },
      {
        "text": "最终旗形",
        "collapsed": false,
        "items": [
          {
            "text": "23 A",
            "link": "/23-final-flags/23a"
          },
          {
            "text": "23 B",
            "link": "/23-final-flags/23b"
          }
        ]
      },
      {
        "text": "楔形",
        "collapsed": false,
        "items": [
          {
            "text": "24 A",
            "link": "/24-wedges/24a"
          },
          {
            "text": "24 B",
            "link": "/24-wedges/24b"
          },
          {
            "text": "24 C",
            "link": "/24-wedges/24c"
          },
          {
            "text": "24 D",
            "link": "/24-wedges/24d"
          },
          {
            "text": "24 E",
            "link": "/24-wedges/24e"
          }
        ]
      },
      {
        "text": "双顶和双底",
        "collapsed": false,
        "items": [
          {
            "text": "25 A",
            "link": "/25-double-tops-bottoms/25a"
          },
          {
            "text": "25 B",
            "link": "/25-double-tops-bottoms/25b"
          }
        ]
      },
      {
        "text": "三角形",
        "collapsed": false,
        "items": [
          {
            "text": "26 A",
            "link": "/26-triangles/26a"
          },
          {
            "text": "26 B",
            "link": "/26-triangles/26b"
          }
        ]
      },
      {
        "text": "头肩形态",
        "collapsed": false,
        "items": [
          {
            "text": "27 A",
            "link": "/27-head-shoulders/27a"
          },
          {
            "text": "27 B",
            "link": "/27-head-shoulders/27b"
          }
        ]
      },
      {
        "text": "圆顶和圆底",
        "link": "/28-rounded-tops-bottoms/"
      },
      {
        "text": "高潮",
        "collapsed": false,
        "items": [
          {
            "text": "29 A",
            "link": "/29-climaxes/29a"
          },
          {
            "text": "29 B",
            "link": "/29-climaxes/29b"
          },
          {
            "text": "29 C",
            "link": "/29-climaxes/29c"
          },
          {
            "text": "29 D",
            "link": "/29-climaxes/29d"
          },
          {
            "text": "29 E",
            "link": "/29-climaxes/29e"
          }
        ]
      }
    ]
  },
  {
    "text": "如何交易",
    "items": [
      {
        "text": "交易设置",
        "collapsed": false,
        "items": [
          {
            "text": "30 A",
            "link": "/30-trading-setups/30a"
          },
          {
            "text": "30 B",
            "link": "/30-trading-setups/30b"
          },
          {
            "text": "30 C",
            "link": "/30-trading-setups/30c"
          },
          {
            "text": "30 D",
            "link": "/30-trading-setups/30d"
          },
          {
            "text": "30 E",
            "link": "/30-trading-setups/30e"
          }
        ]
      },
      {
        "text": "交易入场",
        "collapsed": false,
        "items": [
          {
            "text": "31 A",
            "link": "/31-trading-entries/31a"
          },
          {
            "text": "31 B",
            "link": "/31-trading-entries/31b"
          },
          {
            "text": "31 C",
            "link": "/31-trading-entries/31c"
          },
          {
            "text": "31 D",
            "link": "/31-trading-entries/31d"
          }
        ]
      },
      {
        "text": "交易出场",
        "collapsed": false,
        "items": [
          {
            "text": "32 A",
            "link": "/32-trading-exits/32a"
          },
          {
            "text": "32 B",
            "link": "/32-trading-exits/32b"
          },
          {
            "text": "32 C",
            "link": "/32-trading-exits/32c"
          }
        ]
      },
      {
        "text": "保护性止损",
        "collapsed": false,
        "items": [
          {
            "text": "33 A",
            "link": "/33-protective-stops/33a"
          },
          {
            "text": "33 B",
            "link": "/33-protective-stops/33b"
          },
          {
            "text": "33 C",
            "link": "/33-protective-stops/33c"
          },
          {
            "text": "33 D",
            "link": "/33-protective-stops/33d"
          },
          {
            "text": "33 E",
            "link": "/33-protective-stops/33e"
          },
          {
            "text": "33 F",
            "link": "/33-protective-stops/33f"
          },
          {
            "text": "33 G",
            "link": "/33-protective-stops/33g"
          }
        ]
      },
      {
        "text": "实际风险",
        "collapsed": false,
        "items": [
          {
            "text": "34 A",
            "link": "/34-actual-risk/34a"
          },
          {
            "text": "34 B",
            "link": "/34-actual-risk/34b"
          }
        ]
      },
      {
        "text": "分批入场",
        "collapsed": false,
        "items": [
          {
            "text": "35 A",
            "link": "/35-scaling-in/35a"
          },
          {
            "text": "35 B",
            "link": "/35-scaling-in/35b"
          },
          {
            "text": "35 C",
            "link": "/35-scaling-in/35c"
          }
        ]
      },
      {
        "text": "交易管理",
        "collapsed": false,
        "items": [
          {
            "text": "36 A",
            "link": "/36-trade-management/36a"
          },
          {
            "text": "36 B",
            "link": "/36-trade-management/36b"
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
        "text": "问答总结",
        "collapsed": false,
        "items": [
          {
            "text": "about-liquidity-grab",
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