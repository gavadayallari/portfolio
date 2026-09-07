import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text = `Yallari Gavada
Full-Stack MERN Developer
Pune, India
Email: yallarigavada11@gmail.com
Phone: +91-9112736428

Experience
6-month internship at Eklavya.Me

Education
M.C.A. - Suryadatta Institute of Business Management and Technology (SIBMT) - CGPA: 8.53
B.Sc. Computer Science - Smt. Kasturbai Walchand College, Sangli - CGPA: 8.20
HSC (12th) - Laxmanrao Kirloskar Vidyamandir, Palus - 82%
SSC (10th) - Laxmanrao Kirloskar Vidyamandir, Palus - 69.20%

Skills
Frontend: React.js, HTML5, CSS
Languages: JavaScript, Java, Python
Backend: Node.js, Express.js, REST APIs
Databases: MongoDB, MySQL, SQL
Tools: Git

Projects
Real-Time Code Editor
React, JavaScript, Node.js, Socket.IO, Tailwind CSS
A real-time collaborative code editor enabling multiple users to code together in shared rooms with instant updates.

Achievements
1st Place - MindSweeper Project Presentation
TechFest 2025 - Suryadatta MCA Department`;

function escapePdf(str) {
  return str.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const lines = text.split("\n");
let y = 800;
const content = ["BT", "/F1 11 Tf", "14 TL", "50 800 Td"];
lines.forEach((line, i) => {
  if (i === 0) {
    content.push("/F1 16 Tf", `(${escapePdf(line)}) Tj`, "T*", "/F1 11 Tf");
  } else {
    content.push(`(${escapePdf(line)}) Tj`, "T*");
  }
  y -= 14;
});
content.push("ET");
const stream = content.join("\n");

const objects = [
  "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
  "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
  "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj",
  `4 0 obj << /Length ${stream.length} >> stream\n${stream}\nendstream endobj`,
  "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((obj) => {
  offsets.push(pdf.length);
  pdf += obj + "\n";
});
const xrefPos = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
offsets.slice(1).forEach((off) => {
  pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "resume.pdf");
writeFileSync(out, pdf);
console.log("Wrote", out);
