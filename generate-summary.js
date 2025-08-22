

import fs from 'fs/promises';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

// AI Completion function
async function aicomplete(prompt, srtContent, referenceContent) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
    const fullPrompt = `${prompt}\n\nHere is the reference markdown file content for style and format:\n${referenceContent}\n\nHere is the SRT subtitle content to summarize:\n${srtContent}\n\nImportant: Please provide ONLY the markdown content without any introductory text like "Here is the summary..." or "好的，这是根据您提供的..." - start directly with the markdown content.`;
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
}

async function generateSummary(referenceFile, srtFile, referenceContent) {
    const srtContent = await fs.readFile(srtFile, 'utf-8');
    const prompt = `Please refer to the provided markdown file format and summarize the content of the provided SRT subtitle file. The summary should be concise, clear, and retain key information.`;

    console.log(`Generating summary for ${srtFile}...`);

    const summary = await aicomplete(prompt, srtContent, referenceContent);

    // 检查返回内容是否为空或0字节
    if (!summary || summary.trim().length === 0) {
        console.log(`Warning: Generated summary for ${srtFile} is empty, skipping file generation.`);
        return false;
    }

    const outputFileName = path.basename(srtFile, '.srt') + '.md';
    await fs.writeFile(outputFileName, summary);

    console.log(`Successfully generated: ${outputFileName}`);
    return true;
}

async function main() {
    const projectRoot = process.cwd();
    const referenceFile = path.join(projectRoot, '09C Pullbacks and Bar Counting.md');

    try {
        console.log(`Using reference file: ${referenceFile}`);
        const referenceContent = await fs.readFile(referenceFile, 'utf-8');

        const allFiles = await fs.readdir(projectRoot);
        const srtFiles = allFiles.filter(file => file.endsWith('.srt'));
        const mdFiles = new Set(allFiles.filter(file => file.endsWith('.md')));

        let generatedCount = 0;

        for (const srtFile of srtFiles) {
            const mdFileName = path.basename(srtFile, '.srt') + '.md';
            if (!mdFiles.has(mdFileName)) {
                const srtFilePath = path.join(projectRoot, srtFile);
                const success = await generateSummary(referenceFile, srtFilePath, referenceContent);
                if (success) {
                    generatedCount++;
                }
            }
        }

        if (generatedCount === 0) {
            console.log("All SRT files already have corresponding markdown files. Nothing to generate.");
        } else {
            console.log(`\nFinished generating ${generatedCount} new markdown file(s).`);
        }

    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Error: The reference file "${referenceFile}" was not found.`);
            console.error('Please ensure the reference file exists or update the script to point to the correct file.');
        } else {
            console.error('An unexpected error occurred:', error);
        }
        process.exit(1);
    }
}

main();

