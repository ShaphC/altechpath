import { mkdir, writeFile } from "node:fs/promises";

const output = "public/images";

const previews = [
  {
    file: "showcase-testimonials.png",
    title: "Scrolling Testimonials",
    subtitle: "Interactive website section",
  },
  {
    file: "showcase-course.png",
    title: "From Skills to Software",
    subtitle: "Educational landing page",
  },
  {
    file: "showcase-software.png",
    title: "Software Projects",
    subtitle: "Web applications and dashboards",
  },
  {
    file: "showcase-calculator.png",
    title: "Instant Quote Calculator",
    subtitle: "Interactive business tool",
  },
];

await mkdir(output, { recursive: true });

for (const preview of previews) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="960" height="600" viewBox="0 0 960 600">
      <defs>
        <linearGradient id="bg" x2="1" y2="1">
          <stop stop-color="#eee6ff"/>
          <stop offset="0.6" stop-color="#f9f6ff"/>
          <stop offset="1" stop-color="#dff5ff"/>
        </linearGradient>
      </defs>
      <rect width="960" height="600" fill="url(#bg)"/>
      <rect x="100" y="90" width="760" height="420" rx="22"
            fill="white" stroke="#dcd2f5" stroke-width="3"/>
      <rect x="100" y="90" width="760" height="54" rx="22"
            fill="#f7f4ff"/>
      <circle cx="140" cy="117" r="8" fill="#c4b5fd"/>
      <circle cx="167" cy="117" r="8" fill="#93c5fd"/>
      <circle cx="194" cy="117" r="8" fill="#ddd6fe"/>
      <text x="480" y="285" font-size="45"
            font-family="Arial,sans-serif"
            font-weight="bold" fill="#0b1438"
            text-anchor="middle">
        ${preview.title}
      </text>
      <text x="480" y="335" font-size="25"
            font-family="Arial,sans-serif"
            fill="#6025dc" text-anchor="middle">
        ${preview.subtitle}
      </text>
      <rect x="380" y="378" width="200" height="52"
            rx="12" fill="#6025dc"/>
      <text x="480" y="411" font-size="19"
            font-family="Arial,sans-serif"
            font-weight="bold" fill="white"
            text-anchor="middle">Preview</text>
    </svg>
  `;

  // SVG placeholders; the homepage will use these paths.
  const svgFile = preview.file.replace(".png", ".svg");

  await writeFile(`${output}/${svgFile}`, svg);
  console.log(`Created ${svgFile}`);
}
