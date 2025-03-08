#!/bin/bash
# 字幕总结文件迁移脚本
# 用于将根目录下的字幕总结文件自动迁移到 VitePress docs 目录结构中

# 设置颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}开始迁移字幕总结文件...${NC}"

# 创建基本目录结构（如果不存在）
mkdir -p docs/{01-terminology,02-chart-basics,03-forex-basics,04-my-setup,05-program-trading,06-personality-traits,07-starting-out,08-candles-setups,09-buying-selling-pressure,10-gaps,11-market-cycle,12-always-in,13-trends,14-breakouts,15-channels,16-tight-channels,17-trading-ranges,price-action-all-in-one,mes-recap}

# 处理术语文件
if [ -f "01 Terminology.md" ]; then
  cp "01 Terminology.md" "docs/01-terminology/index.md"
  echo -e "${GREEN}已迁移:${NC} 01 Terminology.md -> docs/01-terminology/index.md"
fi

# 处理图表基础和价格行为文件
for file in "02A Chart Basics and Price Action.md" "02B Chart Basics and Price Action.md" "02C Chart Basics and Price Action.md" "02D Chart Basics and Price Action.md"; do
  if [ -f "$file" ]; then
    # 从文件名提取字母
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/02-chart-basics/02$letter_lower.md"
    cp "$file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $file -> $target_path"
  fi
done

# 处理外汇基础文件
for file in "03A Forex Basics.md" "03B Forex Basics.md" "03C Forex Basics.md" "03D Forex Basics.md" "03E Forex Basics.md"; do
  if [ -f "$file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/03-forex-basics/03$letter_lower.md"
    cp "$file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $file -> $target_path"
  fi
done

# 处理我的设置文件
if [ -f "04 My Setup.md" ]; then
  cp "04 My Setup.md" "docs/04-my-setup/index.md"
  echo -e "${GREEN}已迁移:${NC} 04 My Setup.md -> docs/04-my-setup/index.md"
fi

# 处理程序化交易文件
if [ -f "05 Program Trading.md" ]; then
  cp "05 Program Trading.md" "docs/05-program-trading/index.md"
  echo -e "${GREEN}已迁移:${NC} 05 Program Trading.md -> docs/05-program-trading/index.md"
fi

# 处理交易者特质文件
if [ -f "06 Personality Traits of Successful Traders.md" ]; then
  cp "06 Personality Traits of Successful Traders.md" "docs/06-personality-traits/index.md"
  echo -e "${GREEN}已迁移:${NC} 06 Personality Traits of Successful Traders.md -> docs/06-personality-traits/index.md"
fi

# 处理入门文件
for file in "07A Starting Out.md" "07B Starting Out.md"; do
  if [ -f "$file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/07-starting-out/07$letter_lower.md"
    cp "$file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $file -> $target_path"
  fi
done

# 处理蜡烛图设置文件
for file in "08A Candles Setups and Signal Bars.md" "08B Candles Setups and Signal Bars.md" "08C Candles Setups and Signal Bars.md" "08D Candles Setups and Signal Bars.md"; do
  if [ -f "$file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/08-candles-setups/08$letter_lower.md"
    cp "$file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $file -> $target_path"
  fi
done

# 处理买卖压力文件
for file in "09A Buying and Selling Pressure.srt" "09B Buying and Selling Pressure.srt" "10A Buying and Selling Pressure.srt" "10B Buying and Selling Pressure.srt"; do
  base_name=$(basename "$file" .srt)
  md_file="${base_name}.md"
  
  # 检查是否有对应的 md 文件
  if [ -f "$md_file" ]; then
    num=$(echo "$file" | cut -c 1-2)
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/09-buying-selling-pressure/${num}${letter_lower}.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  fi
done

# 处理缺口文件
for file in "11A Gaps.srt" "11B Gaps.srt" "11C Gaps.srt" "11D Gaps.srt"; do
  base_name=$(basename "$file" .srt)
  md_file="${base_name}.md"
  
  if [ -f "$md_file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/10-gaps/11$letter_lower.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  fi
done

# 处理市场周期文件
for file in "12A Market Cycle.srt" "12B Market Cycle.srt" "12C Market Cycle.srt"; do
  base_name=$(basename "$file" .srt)
  md_file="${base_name}.md"
  
  if [ -f "$md_file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/11-market-cycle/12$letter_lower.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  fi
done

# 处理Always In文件
for file in "13A Always In.srt" "13B Always In.srt" "13C Always In.srt"; do
  base_name=$(basename "$file" .srt)
  md_file="${base_name}.md"
  
  if [ -f "$md_file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/12-always-in/13$letter_lower.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  fi
done

# 处理趋势文件
for file in "14A Trends.srt" "14B Trends.srt" "14C Trends.srt" "14D Trends.srt" "14E Trends.srt"; do
  base_name=$(basename "$file" .srt)
  md_file="${base_name}.md"
  
  if [ -f "$md_file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/13-trends/14$letter_lower.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  fi
done

# 处理突破文件
for file in "15A Breakouts.srt" "15B Breakouts.srt" "15C Breakouts.srt" "15D Breakouts v2.srt" "15E Breakouts v4.srt" "15F Breakouts v2.srt" "15G Breakouts v3.srt" "15H Breakouts v2.srt"; do
  # 移除版本信息获取基本名称
  base_name=$(echo "$file" | sed 's/ v[0-9]\+//')
  base_name=$(basename "$base_name" .srt)
  md_file="${base_name}.md"
  
  if [ -f "$md_file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/14-breakouts/15$letter_lower.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  elif [ -f "${base_name} v2.md" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/14-breakouts/15$letter_lower.md"
    cp "${base_name} v2.md" "$target_path"
    echo -e "${GREEN}已迁移:${NC} ${base_name} v2.md -> $target_path"
  elif [ -f "${base_name} v3.md" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/14-breakouts/15$letter_lower.md"
    cp "${base_name} v3.md" "$target_path"
    echo -e "${GREEN}已迁移:${NC} ${base_name} v3.md -> $target_path"
  elif [ -f "${base_name} v4.md" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/14-breakouts/15$letter_lower.md"
    cp "${base_name} v4.md" "$target_path"
    echo -e "${GREEN}已迁移:${NC} ${base_name} v4.md -> $target_path"
  fi
done

# 处理通道文件
for file in "16A Channels v3.srt" "16B Channels.srt" "16C Channels.srt" "16D Channels.srt" "16E Channels.srt" "16F Channels v2.srt"; do
  # 移除版本信息获取基本名称
  base_name=$(echo "$file" | sed 's/ v[0-9]\+//')
  base_name=$(basename "$base_name" .srt)
  md_file="${base_name}.md"
  
  if [ -f "$md_file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/15-channels/16$letter_lower.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  elif [ -f "${base_name} v2.md" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/15-channels/16$letter_lower.md"
    cp "${base_name} v2.md" "$target_path"
    echo -e "${GREEN}已迁移:${NC} ${base_name} v2.md -> $target_path"
  elif [ -f "${base_name} v3.md" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/15-channels/16$letter_lower.md"
    cp "${base_name} v3.md" "$target_path"
    echo -e "${GREEN}已迁移:${NC} ${base_name} v3.md -> $target_path"
  fi
done

# 处理紧密通道文件
for file in "17A Tight Channels and MC.srt" "17B Tight Channels and MC.srt"; do
  base_name=$(basename "$file" .srt)
  md_file="${base_name}.md"
  
  if [ -f "$md_file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/16-tight-channels/17$letter_lower.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  fi
done

# 处理交易区间文件
for file in "18A Trading Ranges v2.srt" "18B Trading Ranges.srt" "18C Trading Ranges.srt" "18D Trading Ranges v2.srt" "18E Trading Ranges.srt" "18F Trading Ranges.srt"; do
  # 移除版本信息获取基本名称
  base_name=$(echo "$file" | sed 's/ v[0-9]\+//')
  base_name=$(basename "$base_name" .srt)
  md_file="${base_name}.md"
  
  if [ -f "$md_file" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/17-trading-ranges/18$letter_lower.md"
    cp "$md_file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $md_file -> $target_path"
  elif [ -f "${base_name} v2.md" ]; then
    letter=$(echo "$file" | cut -c 3)
    letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
    target_path="docs/17-trading-ranges/18$letter_lower.md"
    cp "${base_name} v2.md" "$target_path"
    echo -e "${GREEN}已迁移:${NC} ${base_name} v2.md -> $target_path"
  fi
done

# 处理总结文件
if [ -f "Price Action All In One.md" ]; then
  cp "Price Action All In One.md" "docs/price-action-all-in-one/index.md"
  echo -e "${GREEN}已迁移:${NC} Price Action All In One.md -> docs/price-action-all-in-one/index.md"
fi

# 处理 MES Recap 目录
if [ -d "MES Recap" ]; then
  cp -r "MES Recap"/* "docs/mes-recap/"
  echo -e "${GREEN}已迁移:${NC} MES Recap/* -> docs/mes-recap/"
fi

echo -e "${GREEN}文件迁移完成！${NC}"
echo -e "${YELLOW}注意：如果有新的文件被添加到 docs 目录，您可能需要更新 VitePress 配置文件以添加相应的导航链接。${NC}"

# 为脚本添加执行权限
chmod +x migrate.sh 