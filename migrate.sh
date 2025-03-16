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
mkdir -p docs/{01-terminology,02-chart-basics,03-forex-basics,04-my-setup,05-program-trading,06-personality-traits,07-starting-out,08-candles-setups,09-pullbacks-counting,10-buying-selling-pressure,11-gaps,12-market-cycle,13-always-in,14-trends,15-breakouts,16-channels,17-tight-channels,18-trading-ranges,price-action-all-in-one,mes-recap}

# 显示当前目录下的所有文件，用于调试
echo -e "${YELLOW}当前目录下的文件列表:${NC}"
find . -maxdepth 1 -type f -name "[0-9]*.md" | sort

# 使用IFS确保文件名中的空格不会导致分割
IFS=$'\n'

# 通用处理函数
# 参数:
# $1: 章节号 (例如: "01")
# $2: 目标目录名 (例如: "01-terminology")
# $3: 章节描述 (例如: "术语")
# $4: 特殊过滤条件 (可选，例如: "Terminology" 或 "Pullbacks")
# $5: 排除过滤条件 (可选，例如: "Buying and Selling Pressure")
process_chapter() {
  local chapter_num="$1"
  local target_dir="$2"
  local description="$3"
  local filter="$4"
  local exclude="$5"
  
  echo -e "${YELLOW}处理${description}文件（第${chapter_num}章 -> ${target_dir}）...${NC}"
  
  # 构建查找命令
  local find_cmd="find . -maxdepth 1 -type f -name \"${chapter_num}*.md\""
  
  # 添加过滤条件（如果有）
  if [ -n "$filter" ]; then
    find_cmd="${find_cmd} | grep \"${filter}\""
  fi
  
  # 添加排除条件（如果有）
  if [ -n "$exclude" ]; then
    find_cmd="${find_cmd} | grep -v \"${exclude}\""
  fi
  
  # 执行查找命令
  for file in $(eval ${find_cmd}); do
    # 去掉路径前缀 ./
    file=${file#./}
    echo -e "${YELLOW}处理文件:${NC} $file"
    
    # 提取字母（如果存在）
    if [[ "$file" =~ ^${chapter_num}([A-Z]) ]]; then
      letter=${BASH_REMATCH[1]}
      letter_lower=$(echo "$letter" | tr '[:upper:]' '[:lower:]')
      
      # 处理文件名中可能包含版本信息的情况
      if [[ "$file" == *" v"* ]]; then
        # 保持版本信息，但是不要重复字母
        version=$(echo "$file" | grep -o "v[0-9]*")
        target_path="docs/${target_dir}/${chapter_num}${letter_lower}_${version}.md"
      else
        target_path="docs/${target_dir}/${chapter_num}${letter_lower}.md"
      fi
    else
      # 没有字母的情况
      target_path="docs/${target_dir}/index.md"
    fi
    
    cp "$file" "$target_path"
    echo -e "${GREEN}已迁移:${NC} $file -> $target_path"
  done
}

# 处理各章节文件
process_chapter "01" "01-terminology" "术语" "Terminology"
process_chapter "02" "02-chart-basics" "图表基础和价格行为"
process_chapter "03" "03-forex-basics" "外汇基础"
process_chapter "04" "04-my-setup" "我的设置" "My Setup"
process_chapter "05" "05-program-trading" "程序化交易" "Program Trading"
process_chapter "06" "06-personality-traits" "交易者特质" "Personality Traits"
process_chapter "07" "07-starting-out" "入门"
process_chapter "08" "08-candles-setups" "蜡烛图设置"
process_chapter "09" "09-pullbacks-counting" "回调和数K线" "Pullbacks"
process_chapter "10" "10-buying-selling-pressure" "买卖压力" "Buying and Selling Pressure"
process_chapter "11" "11-gaps" "缺口" "Gaps"
process_chapter "12" "12-market-cycle" "市场周期" "Market Cycle"
process_chapter "13" "13-always-in" "Always In" "Always In"
process_chapter "14" "14-trends" "趋势" "Trends"
process_chapter "15" "15-breakouts" "突破" "Breakouts"
process_chapter "16" "16-channels" "通道" "Channels"
process_chapter "17" "17-tight-channels" "紧密通道" "Tight Channels"
process_chapter "18" "18-trading-ranges" "交易区间" "Trading Ranges"

# 恢复默认的IFS
unset IFS

# 处理总结文件
echo -e "${YELLOW}处理总结文件...${NC}"
if [ -f "Price Action All In One.md" ]; then
  cp "Price Action All In One.md" "docs/price-action-all-in-one/index.md"
  echo -e "${GREEN}已迁移:${NC} Price Action All In One.md -> docs/price-action-all-in-one/index.md"
fi

# 处理 MES Recap 目录
echo -e "${YELLOW}处理 MES Recap 目录...${NC}"
if [ -d "MES Recap" ]; then
  cp -r "MES Recap"/* "docs/mes-recap/"
  echo -e "${GREEN}已迁移:${NC} MES Recap/* -> docs/mes-recap/"
fi

echo -e "${GREEN}文件迁移完成！${NC}"
echo -e "${YELLOW}注意：如果有新的文件被添加到 docs 目录，您可能需要更新 VitePress 配置文件以添加相应的导航链接。${NC}"

# 为脚本添加执行权限
chmod +x migrate.sh 