import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { marked } from 'marked';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ROOT_DIR = process.cwd();

// Files to convert
const documents = [
  {
    input: 'THARO_MASTER_PLAN.md',
    output: 'THARO_MASTER_PLAN.pdf',
    title: 'Tharo Technologies | Master Plan & Executive Blueprint',
    subtitle: 'Executive Strategy, Architecture & Multi-Domain System Overview',
    badge: 'Executive Blueprint • v1.0.0'
  },
  {
    input: 'THARO_MANUAL.md',
    output: 'THARO_MANUAL.pdf',
    title: 'Tharo Technologies | Master Starter Manual & System Blueprint',
    subtitle: 'Operational Blueprint, Engineering Protocols & Technical Reference',
    badge: 'Starter Manual • v1.0.0'
  },
  {
    input: 'THARO_ROADMAP.md',
    output: 'THARO_ROADMAP.pdf',
    title: 'Tharo Technologies | Master Execution Roadmap & Timeline',
    subtitle: '10-Week Phased Launch, 9-Track Deliverables & Risk Log',
    badge: 'Execution Roadmap • Active'
  }
];

const cssTemplate = `
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=JetBrains+Mono:wght@400;500&display=swap');

@page {
  size: A4;
  margin: 18mm 16mm 18mm 16mm;
  @bottom-right {
    content: "tharo.tech";
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 8pt;
    color: #888888;
  }
}

* {
  box-sizing: border-box;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

body {
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1a1a1a;
  background-color: #ffffff;
  font-size: 9.5pt;
  line-height: 1.55;
  margin: 0;
  padding: 0;
}

/* Document Header / Cover Header */
.doc-header {
  border-bottom: 2px solid #0D3B2E;
  padding-bottom: 14px;
  margin-bottom: 24px;
}

.doc-badge {
  display: inline-block;
  font-size: 7.5pt;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0D3B2E;
  background-color: #EBF3F0;
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.doc-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 20pt;
  font-weight: 700;
  color: #0D3B2E;
  margin: 0 0 6px 0;
  letter-spacing: -0.02em;
}

.doc-subtitle {
  font-size: 10pt;
  color: #555555;
  margin: 0;
  font-weight: 400;
}

/* Headings */
h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 16pt;
  font-weight: 700;
  color: #0D3B2E;
  margin-top: 24px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 6px;
  page-break-after: avoid;
  break-after: avoid;
}

h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 13pt;
  font-weight: 600;
  color: #12382B;
  margin-top: 18px;
  margin-bottom: 8px;
  page-break-after: avoid;
  break-after: avoid;
}

h3 {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 10.5pt;
  font-weight: 700;
  color: #222222;
  margin-top: 14px;
  margin-bottom: 6px;
  page-break-after: avoid;
  break-after: avoid;
}

h4 {
  font-size: 9.5pt;
  font-weight: 700;
  color: #333333;
  margin-top: 12px;
  margin-bottom: 4px;
  page-break-after: avoid;
  break-after: avoid;
}

p {
  margin: 0 0 10px 0;
  text-align: justify;
}

/* Metadata blockquote */
blockquote {
  margin: 12px 0 16px 0;
  padding: 10px 14px;
  background-color: #F8F9FA;
  border-left: 3.5px solid #0D3B2E;
  color: #333333;
  font-size: 9pt;
  border-radius: 0 6px 6px 0;
  page-break-inside: avoid;
  break-inside: avoid;
}

blockquote p {
  margin: 0;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 14px 0 18px 0;
  font-size: 8.5pt;
  page-break-inside: auto;
}

tr {
  page-break-inside: avoid;
  break-inside: avoid;
}

th {
  background-color: #0D3B2E;
  color: #ffffff;
  font-weight: 600;
  text-align: left;
  padding: 7px 10px;
  font-size: 8pt;
  letter-spacing: 0.03em;
  border: 1px solid #0D3B2E;
}

td {
  padding: 6px 10px;
  border: 1px solid #E2E8F0;
  vertical-align: top;
}

tr:nth-child(even) td {
  background-color: #FBFBFC;
}

/* Lists */
ul, ol {
  margin: 4px 0 12px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 4px;
}

li input[type="checkbox"] {
  margin-right: 6px;
  vertical-align: middle;
}

/* Code Blocks & Inline Code */
code {
  font-family: 'JetBrains Mono', Consolas, Monaco, monospace;
  font-size: 8pt;
  background-color: #F1F5F9;
  color: #0D3B2E;
  padding: 1.5px 4px;
  border-radius: 3px;
  border: 1px solid #E2E8F0;
}

pre {
  background-color: #0F172A;
  color: #E2E8F0;
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 7.5pt;
  line-height: 1.45;
  overflow-x: auto;
  margin: 10px 0 14px 0;
  page-break-inside: avoid;
  break-inside: avoid;
  border: 1px solid #1E293B;
}

pre code {
  background: transparent;
  color: inherit;
  padding: 0;
  border: none;
  font-size: inherit;
}

/* Links */
a {
  color: #0D3B2E;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px dotted #0D3B2E;
}

/* Horizontal Rule */
hr {
  border: none;
  border-top: 1px solid #E2E8F0;
  margin: 20px 0;
}

/* Document Footer */
.doc-footer {
  margin-top: 28px;
  padding-top: 12px;
  border-top: 1px solid #E2E8F0;
  font-size: 7.5pt;
  color: #718096;
  display: flex;
  justify-content: space-between;
}
`;

function buildHtml(docConfig, rawMarkdown) {
  // Convert markdown to HTML
  const parsedHtml = marked.parse(rawMarkdown, {
    gfm: true,
    breaks: false
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${docConfig.title}</title>
  <style>
    ${cssTemplate}
  </style>
</head>
<body>
  <div class="doc-header">
    <div class="doc-badge">${docConfig.badge}</div>
    <div class="doc-title">${docConfig.title}</div>
    <div class="doc-subtitle">${docConfig.subtitle} • Domain: <strong>tharo.tech</strong></div>
  </div>

  <div class="doc-content">
    ${parsedHtml}
  </div>

  <div class="doc-footer">
    <span>Confidential — Internal & Stakeholder Reference — Tharo Technologies</span>
    <span>https://tharo.tech</span>
  </div>
</body>
</html>`;
}

console.log('Starting PDF generation for Tharo documents...\n');

for (const doc of documents) {
  const inputPath = path.join(ROOT_DIR, doc.input);
  const outputPath = path.join(ROOT_DIR, doc.output);
  const tempHtmlPath = path.join(ROOT_DIR, `temp_${doc.input.replace('.md', '.html')}`);

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    continue;
  }

  const rawMarkdown = fs.readFileSync(inputPath, 'utf8');
  const htmlContent = buildHtml(doc, rawMarkdown);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  console.log(`Rendering ${doc.output} using headless Chrome...`);
  try {
    const cmd = `"${CHROME_PATH}" --headless=new --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${outputPath}" "${tempHtmlPath}"`;
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Generated: ${doc.output} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Failed to generate ${doc.output}:`, err.message);
  } finally {
    if (fs.existsSync(tempHtmlPath)) {
      fs.unlinkSync(tempHtmlPath);
    }
  }
}

console.log('\nAll PDFs generated successfully!');
