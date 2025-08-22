import fs from 'fs';
import path from 'path';

/**
 * 清理文件的脚本
 * 1. 删除文件名带有 .en.srt 的文件
 * 2. 删除文件名的前缀 "BTC PAF "
 */

function cleanupFiles() {
    const currentDir = process.cwd();

    try {
        // 获取当前目录下的所有文件
        const files = fs.readdirSync(currentDir);

        let deletedCount = 0;
        let renamedCount = 0;

        console.log('开始清理文件...\n');

        files.forEach(file => {
            const filePath = path.join(currentDir, file);
            const stats = fs.statSync(filePath);

            // 只处理文件，不处理目录
            if (!stats.isFile()) {
                return;
            }

            // 需求1: 删除文件名带有 .en.srt 的文件
            if (file.includes('.en.srt')) {
                try {
                    fs.unlinkSync(filePath);
                    console.log(`✅ 已删除: ${file}`);
                    deletedCount++;
                } catch (error) {
                    console.error(`❌ 删除失败: ${file} - ${error.message}`);
                }
                return;
            }

            // 需求2: 删除文件名的前缀 "BTC PAF "
            if (file.startsWith('BTC PAF ')) {
                const newName = file.replace(/^BTC PAF /, '');
                const newPath = path.join(currentDir, newName);

                // 检查新文件名是否已存在
                if (fs.existsSync(newPath)) {
                    console.log(`⚠️  跳过重命名: ${file} -> ${newName} (目标文件已存在)`);
                    return;
                }

                try {
                    fs.renameSync(filePath, newPath);
                    console.log(`🔄 已重命名: ${file} -> ${newName}`);
                    renamedCount++;
                } catch (error) {
                    console.error(`❌ 重命名失败: ${file} - ${error.message}`);
                }
            }
        });

        console.log('\n=== 清理完成 ===');
        console.log(`删除文件数量: ${deletedCount}`);
        console.log(`重命名文件数量: ${renamedCount}`);

    } catch (error) {
        console.error('❌ 脚本执行失败:', error.message);
        process.exit(1);
    }
}

// 执行清理
cleanupFiles();
