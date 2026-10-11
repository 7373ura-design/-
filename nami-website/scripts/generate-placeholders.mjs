/**
 * Generates the concept moodboards and indicative floor plans for the NAMI CONCEPT projects.
 *
 *   node scripts/generate-placeholders.mjs
 *
 * Every file is a soft, flat-rendered interior study in the NAMI direction
 * (Japanese × Australian × coastal × natural materials). Replace any file with
 * real photography (JPG/WebP) and update the path in src/data/*.ts.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const C = {
  cream: "#f7f1e5",
  paper: "#fffdf8",
  beige: "#e9dcc8",
  navy: "#073b5c",
  deep: "#075985",
  ocean: "#008fb5",
  aqua: "#75c9d5",
  vermilion: "#f04b32",
};

let uid = 0;
const id = (p) => `${p}${++uid}`;

function tag(W, H, label = "NAMI · PLACEHOLDER IMAGE") {
  return `<text x="${W * 0.025}" y="${H - W * 0.022}" font-family="Helvetica, Arial, sans-serif" font-size="${Math.round(W * 0.0105)}" letter-spacing="${(W * 0.0028).toFixed(1)}" fill="#073b5c" opacity="0.38">${label}</text>`;
}

function wrap(W, H, defs, body, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice">
<defs>${defs}</defs>
${body}
${tag(W, H, label)}
</svg>
`;
}

/* ---------- Shared building blocks ---------- */

function plankFloor(W, H, floorY, tone, vpX) {
  const g = id("floor");
  let lines = "";
  const n = 22;
  for (let i = -6; i <= n + 6; i++) {
    const bx = (W / n) * i;
    const t = 0.35;
    const tx = vpX + (bx - vpX) * t;
    lines += `<line x1="${bx.toFixed(1)}" y1="${H}" x2="${tx.toFixed(1)}" y2="${floorY}" stroke="#000" stroke-opacity="0.07" stroke-width="1.4"/>`;
  }
  return {
    defs: `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${tone}" stop-opacity="0.85"/><stop offset="1" stop-color="${tone}"/></linearGradient>`,
    body: `<rect x="0" y="${floorY}" width="${W}" height="${H - floorY}" fill="url(#${g})"/>${lines}`,
  };
}

function wall(W, floorY, tone) {
  const g = id("wall");
  return {
    defs: `<linearGradient id="${g}" x1="0" y1="0" x2="1" y2="0.3"><stop offset="0" stop-color="${tone}" stop-opacity="0.82"/><stop offset="0.55" stop-color="${tone}"/><stop offset="1" stop-color="${tone}" stop-opacity="0.9"/></linearGradient>`,
    body: `<rect width="${W}" height="${floorY}" fill="${C.paper}"/><rect width="${W}" height="${floorY}" fill="url(#${g})"/>`,
  };
}

/** A view through an opening. kind: ocean | courtyard | city | garden */
function view(x, y, w, h, kind, opts = {}) {
  const clip = id("view");
  const sky = id("sky");
  const skyTop = opts.night ? "#0b2740" : opts.dusk ? "#f2c7a5" : "#cfe9ee";
  const skyBottom = opts.night ? "#1d4a6a" : opts.dusk ? "#f7e2c9" : "#f3efe4";
  let scene = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${sky})"/>`;
  const horizon = y + h * (opts.horizon ?? 0.55);

  if (opts.sun) {
    scene += `<circle cx="${x + w * opts.sun[0]}" cy="${y + h * opts.sun[1]}" r="${w * 0.07}" fill="${C.vermilion}" opacity="${opts.dusk ? 0.9 : 0.8}"/>`;
  }

  if (kind === "ocean") {
    scene += `<path d="M${x} ${horizon - h * 0.04} C ${x + w * 0.15} ${horizon - h * 0.16}, ${x + w * 0.3} ${horizon - h * 0.12}, ${x + w * 0.42} ${horizon} L ${x} ${horizon} Z" fill="#7f9a86" opacity="0.75"/>`;
    scene += `<rect x="${x}" y="${horizon}" width="${w}" height="${h}" fill="${C.ocean}"/>`;
    scene += `<rect x="${x}" y="${horizon}" width="${w}" height="${h * 0.08}" fill="${C.deep}" opacity="0.55"/>`;
    for (let i = 0; i < 9; i++) {
      const yy = horizon + h * 0.06 + i * h * 0.045;
      const off = (i % 3) * w * 0.11;
      scene += `<path d="M${x + off} ${yy} q ${w * 0.04} -${h * 0.012} ${w * 0.08} 0 t ${w * 0.08} 0" stroke="${C.paper}" stroke-width="${Math.max(1.5, w * 0.003)}" fill="none" opacity="0.55"/>`;
      scene += `<path d="M${x + off + w * 0.45} ${yy + h * 0.02} q ${w * 0.04} -${h * 0.012} ${w * 0.08} 0" stroke="${C.aqua}" stroke-width="${Math.max(1.5, w * 0.003)}" fill="none" opacity="0.8"/>`;
    }
    // beach strip
    scene += `<path d="M${x} ${y + h * 0.9} Q ${x + w * 0.5} ${y + h * 0.82} ${x + w} ${y + h * 0.88} L ${x + w} ${y + h} L ${x} ${y + h} Z" fill="#ecdcbc"/>`;
    scene += `<path d="M${x} ${y + h * 0.9} Q ${x + w * 0.5} ${y + h * 0.82} ${x + w} ${y + h * 0.88}" stroke="${C.paper}" stroke-width="${w * 0.006}" fill="none" opacity="0.9"/>`;
  }

  if (kind === "courtyard" || kind === "garden") {
    scene += `<rect x="${x}" y="${y + h * 0.18}" width="${w}" height="${h * 0.6}" fill="#cfae86"/>`;
    for (let i = 0; i < 7; i++) {
      scene += `<line x1="${x}" x2="${x + w}" y1="${y + h * (0.24 + i * 0.075)}" y2="${y + h * (0.24 + i * 0.075)}" stroke="#a8875f" stroke-opacity="0.35" stroke-width="${h * 0.006}"/>`;
    }
    scene += `<rect x="${x}" y="${y + h * 0.78}" width="${w}" height="${h * 0.22}" fill="#e2cfa6"/>`;
    for (let i = 0; i < 4; i++) {
      scene += `<ellipse cx="${x + w * (0.2 + i * 0.2)}" cy="${y + h * 0.89}" rx="${w * 0.06}" ry="${h * 0.025}" fill="#d3bc8f"/>`;
    }
    // tree
    const tx = x + w * 0.55;
    scene += `<path d="M${tx} ${y + h * 0.82} C ${tx - w * 0.02} ${y + h * 0.6}, ${tx + w * 0.03} ${y + h * 0.45}, ${tx - w * 0.01} ${y + h * 0.3}" stroke="#d9cfc0" stroke-width="${w * 0.018}" fill="none" stroke-linecap="round"/>`;
    scene += `<path d="M${tx} ${y + h * 0.5} C ${tx + w * 0.06} ${y + h * 0.42}, ${tx + w * 0.1} ${y + h * 0.38}, ${tx + w * 0.14} ${y + h * 0.3}" stroke="#d9cfc0" stroke-width="${w * 0.009}" fill="none" stroke-linecap="round"/>`;
    const blobs = [
      [-0.12, 0.22, 0.13], [0.05, 0.14, 0.14], [0.17, 0.25, 0.11], [-0.04, 0.33, 0.1], [0.12, 0.08, 0.08],
    ];
    for (const [dx, dy, r] of blobs) {
      scene += `<ellipse cx="${tx + w * dx}" cy="${y + h * dy}" rx="${w * r}" ry="${w * r * 0.62}" fill="#6f8a74" opacity="0.88"/>`;
    }
    for (const [dx, dy, r] of blobs) {
      scene += `<ellipse cx="${tx + w * dx - w * r * 0.25}" cy="${y + h * dy - w * r * 0.15}" rx="${w * r * 0.55}" ry="${w * r * 0.3}" fill="#9db29a" opacity="0.6"/>`;
    }
    // grasses
    for (let i = 0; i < 14; i++) {
      const gx = x + w * (0.05 + i * 0.065);
      scene += `<path d="M${gx} ${y + h * 0.8} q ${w * 0.01} -${h * 0.08} ${w * 0.03} -${h * 0.12}" stroke="#5c7a62" stroke-width="${w * 0.004}" fill="none"/>`;
    }
  }

  if (kind === "city") {
    const bs = [
      [0, 0.45, 0.12], [0.1, 0.3, 0.1], [0.19, 0.5, 0.09], [0.27, 0.22, 0.08], [0.34, 0.4, 0.12],
      [0.45, 0.32, 0.07], [0.51, 0.55, 0.12], [0.62, 0.28, 0.09], [0.7, 0.42, 0.13], [0.82, 0.36, 0.1], [0.9, 0.5, 0.12],
    ];
    for (const [bx, by, bw] of bs) {
      scene += `<rect x="${x + w * bx}" y="${y + h * by}" width="${w * bw}" height="${h}" fill="${opts.night ? "#0e3350" : "#9bb4c0"}"/>`;
      for (let r = 0; r < 12; r++) {
        for (let c = 0; c < 3; c++) {
          if ((r * 7 + c * 3 + Math.round(bx * 100)) % 4 === 0) {
            scene += `<rect x="${x + w * (bx + 0.015 + c * bw * 0.3)}" y="${y + h * (by + 0.04 + r * 0.05)}" width="${w * 0.012}" height="${h * 0.018}" fill="#f6d79a" opacity="0.85"/>`;
          }
        }
      }
    }
    scene += `<rect x="${x}" y="${y + h * 0.86}" width="${w}" height="${h * 0.14}" fill="${opts.night ? C.deep : C.ocean}" opacity="0.9"/>`;
  }

  return {
    defs: `<clipPath id="${clip}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath><linearGradient id="${sky}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${skyTop}"/><stop offset="1" stop-color="${skyBottom}"/></linearGradient>`,
    body: `<g clip-path="url(#${clip})">${scene}</g>`,
  };
}

function windowFrame(x, y, w, h, frame, panes = 3, shoji = false) {
  const t = Math.max(6, w * 0.012);
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${frame}" stroke-width="${t * 1.6}"/>`;
  for (let i = 1; i < panes; i++) {
    s += `<rect x="${x + (w / panes) * i - t / 2}" y="${y}" width="${t}" height="${h}" fill="${frame}"/>`;
  }
  if (shoji) {
    // half-open shoji screen on the left pane
    const pw = w / panes;
    s += `<rect x="${x}" y="${y}" width="${pw * 0.9}" height="${h}" fill="${C.paper}" opacity="0.88"/>`;
    for (let i = 1; i < 4; i++) s += `<line x1="${x + (pw * 0.9 * i) / 4}" x2="${x + (pw * 0.9 * i) / 4}" y1="${y}" y2="${y + h}" stroke="${frame}" stroke-width="${t * 0.35}"/>`;
    for (let j = 1; j < 7; j++) s += `<line x1="${x}" x2="${x + pw * 0.9}" y1="${y + (h * j) / 7}" y2="${y + (h * j) / 7}" stroke="${frame}" stroke-width="${t * 0.35}"/>`;
    s += `<rect x="${x}" y="${y}" width="${pw * 0.9}" height="${h}" fill="none" stroke="${frame}" stroke-width="${t * 0.8}"/>`;
  }
  return s;
}

function lightPatch(x1, x2, floorY, H, skew = 0.12) {
  const w = x2 - x1;
  return `<polygon points="${x1},${floorY} ${x2},${floorY} ${x2 + w * skew},${floorY + (H - floorY) * 0.75} ${x1 - w * 0.3},${floorY + (H - floorY) * 0.75}" fill="#fff6dc" opacity="0.32"/>`;
}

function lantern(cx, top, r) {
  let s = `<line x1="${cx}" x2="${cx}" y1="0" y2="${top}" stroke="${C.navy}" stroke-width="${r * 0.025}" opacity="0.6"/>`;
  s += `<ellipse cx="${cx}" cy="${top + r * 0.8}" rx="${r}" ry="${r * 0.8}" fill="${C.paper}"/>`;
  for (let i = 1; i < 6; i++) {
    const yy = top + r * 0.8 - r * 0.8 + (r * 1.6 * i) / 6;
    const dy = yy - (top + r * 0.8);
    const rx = r * Math.sqrt(Math.max(0, 1 - (dy / (r * 0.8)) ** 2));
    s += `<line x1="${cx - rx}" x2="${cx + rx}" y1="${yy}" y2="${yy}" stroke="#d8c7a8" stroke-width="${r * 0.02}"/>`;
  }
  s += `<ellipse cx="${cx}" cy="${top + r * 0.8}" rx="${r * 1.6}" ry="${r * 1.3}" fill="#fff4d6" opacity="0.18"/>`;
  return s;
}

function sofa(x, y, w, h, fabric) {
  const leg = h * 0.12;
  return `<rect x="${x + w * 0.04}" y="${y + h - leg}" width="${w * 0.02}" height="${leg}" fill="#6b4d33"/><rect x="${x + w * 0.94}" y="${y + h - leg}" width="${w * 0.02}" height="${leg}" fill="#6b4d33"/>
<rect x="${x}" y="${y + h * 0.5}" width="${w}" height="${h * 0.38}" rx="${h * 0.06}" fill="${fabric}"/>
<rect x="${x + w * 0.02}" y="${y}" width="${w * 0.47}" height="${h * 0.56}" rx="${h * 0.1}" fill="${fabric}" style="filter:brightness(1.04)"/>
<rect x="${x + w * 0.51}" y="${y}" width="${w * 0.47}" height="${h * 0.56}" rx="${h * 0.1}" fill="${fabric}"/>
<rect x="${x}" y="${y + h * 0.46}" width="${w}" height="${h * 0.14}" rx="${h * 0.06}" fill="#fff" opacity="0.25"/>
<rect x="${x + w * 0.1}" y="${y + h * 0.12}" width="${w * 0.14}" height="${h * 0.32}" rx="${h * 0.06}" fill="${C.ocean}" opacity="0.85" transform="rotate(-8 ${x + w * 0.17} ${y + h * 0.28})"/>
<rect x="${x + w * 0.74}" y="${y + h * 0.14}" width="${w * 0.12}" height="${h * 0.3}" rx="${h * 0.06}" fill="#d9a77c" transform="rotate(6 ${x + w * 0.8} ${y + h * 0.29})"/>`;
}

function lowTable(x, y, w, h, wood) {
  return `<ellipse cx="${x + w / 2}" cy="${y + h * 1.8}" rx="${w * 0.55}" ry="${h * 0.5}" fill="#000" opacity="0.06"/>
<rect x="${x + w * 0.08}" y="${y + h * 0.5}" width="${w * 0.04}" height="${h * 1.3}" fill="${wood}" style="filter:brightness(0.8)"/>
<rect x="${x + w * 0.88}" y="${y + h * 0.5}" width="${w * 0.04}" height="${h * 1.3}" fill="${wood}" style="filter:brightness(0.8)"/>
<rect x="${x}" y="${y}" width="${w}" height="${h * 0.55}" rx="${h * 0.1}" fill="${wood}"/>`;
}

function vase(cx, base, s, color = "#e7dccb", branches = true) {
  let out = "";
  if (branches) {
    out += `<path d="M${cx} ${base - s * 0.9} C ${cx - s * 0.3} ${base - s * 1.8}, ${cx - s * 0.7} ${base - s * 2.2}, ${cx - s * 1.0} ${base - s * 2.6}" stroke="#5c7a62" stroke-width="${s * 0.04}" fill="none"/>`;
    out += `<path d="M${cx} ${base - s * 0.9} C ${cx + s * 0.2} ${base - s * 1.6}, ${cx + s * 0.6} ${base - s * 2.0}, ${cx + s * 0.8} ${base - s * 2.4}" stroke="#5c7a62" stroke-width="${s * 0.04}" fill="none"/>`;
    for (let i = 0; i < 9; i++) {
      const t = i / 9;
      const lx = cx - s * 1.0 * t + (i % 2 ? s * 0.12 : -s * 0.12);
      const ly = base - s * 0.9 - s * 1.7 * t;
      out += `<ellipse cx="${lx}" cy="${ly}" rx="${s * 0.13}" ry="${s * 0.06}" fill="#7e9c84" transform="rotate(${i % 2 ? 30 : -30} ${lx} ${ly})"/>`;
      const rx2 = cx + s * 0.8 * t + (i % 2 ? -s * 0.1 : s * 0.1);
      const ry2 = base - s * 0.9 - s * 1.5 * t;
      out += `<ellipse cx="${rx2}" cy="${ry2}" rx="${s * 0.12}" ry="${s * 0.055}" fill="#93ad96" transform="rotate(${i % 2 ? -25 : 25} ${rx2} ${ry2})"/>`;
    }
  }
  out += `<path d="M${cx - s * 0.18} ${base - s} Q ${cx - s * 0.5} ${base - s * 0.5} ${cx - s * 0.28} ${base} L ${cx + s * 0.28} ${base} Q ${cx + s * 0.5} ${base - s * 0.5} ${cx + s * 0.18} ${base - s} Z" fill="${color}"/>`;
  return out;
}

function rug(cx, cy, rx, ry, color) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${color}"/><ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.9}" ry="${ry * 0.82}" fill="none" stroke="#fff" stroke-opacity="0.4" stroke-width="2"/>`;
}

/* ---------- Scenes ---------- */

function living(W, H, p) {
  const floorY = H * 0.7;
  const parts = [wall(W, floorY, p.wall), plankFloor(W, H, floorY, p.floor, W * 0.55)];
  const wx = W * 0.4, wy = H * 0.1, ww = W * 0.54, wh = floorY - H * 0.1;
  const v = view(wx, wy, ww, wh, p.view ?? "ocean", { sun: p.sun, dusk: p.dusk, night: p.night, horizon: 0.5 });
  parts.push(v);
  let body = parts.map((x) => x.body).join("");
  body += windowFrame(wx, wy, ww, wh, p.frame, 3, p.shoji);
  body += `<rect x="${wx - 10}" y="${floorY - 6}" width="${ww + 20}" height="12" fill="${p.frame}"/>`;
  body += lightPatch(wx, wx + ww, floorY, H);
  body += rug(W * 0.36, H * 0.86, W * 0.3, H * 0.07, p.rug ?? "#e3d6bf");
  body += sofa(W * 0.04, H * 0.52, W * 0.38, H * 0.2, p.fabric);
  body += lowTable(W * 0.27, H * 0.78, W * 0.2, H * 0.035, p.wood);
  body += vase(W * 0.33, H * 0.78, H * 0.07, p.vase ?? "#e7dccb");
  body += `<circle cx="${W * 0.41}" cy="${H * 0.77}" r="${H * 0.014}" fill="${C.navy}"/>`;
  body += lantern(W * 0.24, H * 0.12, H * 0.08);
  return wrap(W, H, parts.map((x) => x.defs).join(""), body);
}

function bedroom(W, H, p) {
  const floorY = H * 0.72;
  const parts = [wall(W, floorY, p.wall), plankFloor(W, H, floorY, p.floor, W * 0.4)];
  const wx = W * 0.08, wy = H * 0.12, ww = W * 0.42, wh = floorY - H * 0.12;
  parts.push(view(wx, wy, ww, wh, p.view ?? "ocean", { sun: p.sun, dusk: p.dusk, night: p.night, horizon: 0.48 }));
  let body = parts.map((x) => x.body).join("");
  body += windowFrame(wx, wy, ww, wh, p.frame, 2, p.shoji);
  body += lightPatch(wx, wx + ww, floorY, H, 0.4);
  // bed
  const bx = W * 0.44, by = H * 0.6, bw = W * 0.52, bh = H * 0.2;
  body += `<rect x="${bx}" y="${by + bh * 0.62}" width="${bw}" height="${bh * 0.32}" fill="${p.wood}"/>`;
  body += `<rect x="${bx + bw * 0.02}" y="${by + bh * 0.2}" width="${bw * 0.96}" height="${bh * 0.5}" rx="${bh * 0.12}" fill="${C.paper}"/>`;
  body += `<rect x="${bx + bw * 0.3}" y="${by + bh * 0.15}" width="${bw * 0.68}" height="${bh * 0.58}" rx="${bh * 0.12}" fill="${p.fabric}"/>`;
  body += `<rect x="${bx + bw * 0.04}" y="${by - bh * 0.05}" width="${bw * 0.2}" height="${bh * 0.32}" rx="${bh * 0.1}" fill="${C.beige}"/>`;
  body += `<rect x="${bx + bw * 0.2}" y="${by}" width="${bw * 0.18}" height="${bh * 0.28}" rx="${bh * 0.1}" fill="#f1e8d8"/>`;
  body += `<rect x="${bx + bw * 0.62}" y="${by + bh * 0.35}" width="${bw * 0.36}" height="${bh * 0.12}" fill="${C.ocean}" opacity="0.55"/>`;
  // artwork on wall
  body += `<rect x="${W * 0.62}" y="${H * 0.2}" width="${W * 0.18}" height="${H * 0.26}" fill="${C.paper}" stroke="${p.wood}" stroke-width="6"/>`;
  body += `<circle cx="${W * 0.71}" cy="${H * 0.3}" r="${H * 0.04}" fill="${C.vermilion}" opacity="0.85"/>`;
  body += `<path d="M${W * 0.63} ${H * 0.4} q ${W * 0.04} -${H * 0.04} ${W * 0.08} 0 t ${W * 0.08} 0" stroke="${C.deep}" stroke-width="5" fill="none"/>`;
  body += lantern(W * 0.9, H * 0.18, H * 0.06);
  body += vase(W * 0.4, H * 0.8, H * 0.08, "#d9c9ad");
  return wrap(W, H, parts.map((x) => x.defs).join(""), body);
}

function dining(W, H, p) {
  const floorY = H * 0.7;
  const parts = [wall(W, floorY, p.wall), plankFloor(W, H, floorY, p.floor, W * 0.5)];
  const wx = W * 0.18, wy = H * 0.1, ww = W * 0.64, wh = floorY - H * 0.1;
  parts.push(view(wx, wy, ww, wh, p.view ?? "garden", { sun: p.sun, dusk: p.dusk, night: p.night }));
  let body = parts.map((x) => x.body).join("");
  body += windowFrame(wx, wy, ww, wh, p.frame, 4, p.shoji);
  body += lightPatch(wx, wx + ww, floorY, H, 0.2);
  // table
  const tx = W * 0.22, ty = H * 0.66, tw = W * 0.56;
  body += `<rect x="${tx + tw * 0.06}" y="${ty}" width="${tw * 0.03}" height="${H * 0.18}" fill="${p.wood}" style="filter:brightness(0.8)"/>`;
  body += `<rect x="${tx + tw * 0.91}" y="${ty}" width="${tw * 0.03}" height="${H * 0.18}" fill="${p.wood}" style="filter:brightness(0.8)"/>`;
  body += `<rect x="${tx}" y="${ty - H * 0.02}" width="${tw}" height="${H * 0.03}" fill="${p.wood}"/>`;
  // chairs
  for (const cx of [0.12, 0.38, 0.62, 0.88]) {
    const x = tx + tw * cx;
    body += `<rect x="${x - W * 0.035}" y="${ty + H * 0.06}" width="${W * 0.07}" height="${H * 0.02}" fill="${p.wood}" style="filter:brightness(0.9)"/>`;
    body += `<rect x="${x - W * 0.03}" y="${ty + H * 0.08}" width="${W * 0.006}" height="${H * 0.1}" fill="${p.wood}" style="filter:brightness(0.75)"/>`;
    body += `<rect x="${x + W * 0.024}" y="${ty + H * 0.08}" width="${W * 0.006}" height="${H * 0.1}" fill="${p.wood}" style="filter:brightness(0.75)"/>`;
  }
  // objects
  body += vase(W * 0.5, ty - H * 0.02, H * 0.06, "#e5d6bd");
  body += `<ellipse cx="${W * 0.36}" cy="${ty - H * 0.03}" rx="${W * 0.03}" ry="${H * 0.012}" fill="${C.deep}"/>`;
  body += `<ellipse cx="${W * 0.64}" cy="${ty - H * 0.03}" rx="${W * 0.025}" ry="${H * 0.01}" fill="#c46a4a"/>`;
  body += lantern(W * 0.5, H * 0.08, H * 0.09);
  return wrap(W, H, parts.map((x) => x.defs).join(""), body);
}

function shelf(W, H, p) {
  const parts = [wall(W, H, p.wall)];
  let body = parts.map((x) => x.body).join("");
  // light from side
  body += `<polygon points="${W * 0.55},0 ${W},0 ${W},${H} ${W * 0.2},${H}" fill="#fff6dc" opacity="0.25"/>`;
  const rows = [0.3, 0.58, 0.86];
  rows.forEach((r, i) => {
    body += `<rect x="${W * 0.1}" y="${H * r}" width="${W * 0.8}" height="${H * 0.025}" fill="${p.wood}"/>`;
    body += `<rect x="${W * 0.1}" y="${H * r + H * 0.025}" width="${W * 0.8}" height="${H * 0.01}" fill="#000" opacity="0.08"/>`;
    const base = H * r;
    if (i === 0) {
      body += vase(W * 0.25, base, H * 0.13, "#e7dccb");
      body += `<circle cx="${W * 0.48}" cy="${base - H * 0.06}" r="${H * 0.06}" fill="${C.deep}"/>`;
      body += `<rect x="${W * 0.6}" y="${base - H * 0.14}" width="${W * 0.14}" height="${H * 0.14}" fill="${C.paper}" stroke="${p.wood}" stroke-width="4"/><circle cx="${W * 0.67}" cy="${base - H * 0.07}" r="${H * 0.03}" fill="${C.vermilion}"/>`;
    } else if (i === 1) {
      const books = ["#c9b28c", C.navy, "#e2d3b8", "#8a6c4b", C.ocean, "#efe6d6"];
      books.forEach((b, j) => {
        body += `<rect x="${W * (0.16 + j * 0.035)}" y="${base - H * (0.15 + (j % 3) * 0.015)}" width="${W * 0.03}" height="${H * (0.15 + (j % 3) * 0.015)}" fill="${b}"/>`;
      });
      body += `<ellipse cx="${W * 0.55}" cy="${base - H * 0.04}" rx="${W * 0.06}" ry="${H * 0.04}" fill="#d7c4a5"/>`;
      body += `<path d="M${W * 0.7} ${base} q ${W * 0.03} -${H * 0.16} ${W * 0.07} 0 Z" fill="#c46a4a"/>`;
    } else {
      body += `<rect x="${W * 0.16}" y="${base - H * 0.12}" width="${W * 0.22}" height="${H * 0.12}" fill="#e6dccb"/>`;
      for (let k = 0; k < 6; k++) body += `<line x1="${W * 0.16}" x2="${W * 0.38}" y1="${base - H * 0.12 + k * H * 0.02}" y2="${base - H * 0.12 + k * H * 0.02}" stroke="#cdbd9f" stroke-width="2"/>`;
      body += `<circle cx="${W * 0.55}" cy="${base - H * 0.05}" r="${H * 0.05}" fill="#efe6d6" stroke="#cdbd9f" stroke-width="3"/>`;
      body += vase(W * 0.75, base, H * 0.1, C.aqua, false);
    }
  });
  return wrap(W, H, parts.map((x) => x.defs).join(""), body);
}

function consult(W, H, p) {
  const parts = [wall(W, H * 0.55, p.wall)];
  const v = view(W * 0.1, H * 0.06, W * 0.8, H * 0.46, "ocean", { horizon: 0.55, sun: [0.78, 0.32] });
  let body = parts.map((x) => x.body).join("") + v.body;
  body += windowFrame(W * 0.1, H * 0.06, W * 0.8, H * 0.46, p.frame, 3);
  // table top (perspective)
  body += `<polygon points="0,${H * 0.55} ${W},${H * 0.55} ${W},${H} 0,${H}" fill="${p.wood}"/>`;
  for (let i = 0; i < 10; i++) body += `<path d="M0 ${H * (0.6 + i * 0.045)} Q ${W * 0.5} ${H * (0.585 + i * 0.045)} ${W} ${H * (0.6 + i * 0.045)}" stroke="#000" stroke-opacity="0.06" stroke-width="2" fill="none"/>`;
  // papers
  body += `<g transform="rotate(-6 ${W * 0.35} ${H * 0.75})"><rect x="${W * 0.18}" y="${H * 0.62}" width="${W * 0.32}" height="${H * 0.3}" fill="${C.paper}"/>`;
  for (let i = 0; i < 4; i++) body += `<rect x="${W * 0.21}" y="${H * (0.66 + i * 0.03)}" width="${W * (0.18 - i * 0.03)}" height="${H * 0.008}" fill="${C.navy}" opacity="0.4"/>`;
  body += `<rect x="${W * 0.21}" y="${H * 0.79}" width="${W * 0.26}" height="${H * 0.1}" fill="none" stroke="${C.navy}" stroke-width="3" opacity="0.6"/><line x1="${W * 0.33}" x2="${W * 0.33}" y1="${H * 0.79}" y2="${H * 0.89}" stroke="${C.navy}" stroke-width="3" opacity="0.6"/></g>`;
  // swatches
  const sw = [C.beige, "#c9a679", C.ocean, "#efe6d6", C.vermilion];
  sw.forEach((c, i) => {
    body += `<rect x="${W * (0.58 + i * 0.065)}" y="${H * (0.66 + (i % 2) * 0.04)}" width="${W * 0.06}" height="${W * 0.06}" fill="${c}" transform="rotate(${i * 4 - 8} ${W * (0.61 + i * 0.065)} ${H * 0.72})"/>`;
  });
  // cup
  body += `<ellipse cx="${W * 0.86}" cy="${H * 0.86}" rx="${W * 0.045}" ry="${W * 0.03}" fill="#e7dccb"/><ellipse cx="${W * 0.86}" cy="${H * 0.855}" rx="${W * 0.034}" ry="${W * 0.02}" fill="#8a6c4b"/>`;
  // pencil
  body += `<rect x="${W * 0.52}" y="${H * 0.9}" width="${W * 0.2}" height="${H * 0.012}" fill="${C.navy}" transform="rotate(-12 ${W * 0.62} ${H * 0.9})"/>`;
  return wrap(W, H, parts.map((x) => x.defs).join("") + v.defs, body);
}

function moodboard(W, H, p) {
  const linen = id("linen");
  const grain = id("grain");
  const defs = `<pattern id="${linen}" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 4h8M4 0v8" stroke="#000" stroke-opacity="0.05"/></pattern>
<pattern id="${grain}" width="200" height="40" patternUnits="userSpaceOnUse"><path d="M0 10 Q 50 4 100 12 T 200 10 M0 28 Q 60 22 120 30 T 200 26" stroke="#000" stroke-opacity="0.12" fill="none" stroke-width="2"/></pattern>`;
  let body = `<rect width="${W}" height="${H}" fill="${p.board ?? C.beige}"/>`;
  const sw = p.swatches;
  // big timber
  body += `<g transform="rotate(-4 ${W * 0.3} ${H * 0.4})"><rect x="${W * 0.08}" y="${H * 0.12}" width="${W * 0.42}" height="${H * 0.36}" fill="${sw[0]}"/><rect x="${W * 0.08}" y="${H * 0.12}" width="${W * 0.42}" height="${H * 0.36}" fill="url(#${grain})"/></g>`;
  // linen
  body += `<g transform="rotate(5 ${W * 0.7} ${H * 0.3})"><rect x="${W * 0.55}" y="${H * 0.1}" width="${W * 0.34}" height="${H * 0.4}" fill="${sw[2]}"/><rect x="${W * 0.55}" y="${H * 0.1}" width="${W * 0.34}" height="${H * 0.4}" fill="url(#${linen})"/></g>`;
  // plaster
  body += `<rect x="${W * 0.12}" y="${H * 0.55}" width="${W * 0.28}" height="${H * 0.32}" fill="${sw[1]}"/>`;
  // accent tile
  body += `<rect x="${W * 0.45}" y="${H * 0.58}" width="${W * 0.16}" height="${W * 0.16}" rx="${W * 0.01}" fill="${sw[3]}"/>`;
  body += `<rect x="${W * 0.47}" y="${H * 0.6}" width="${W * 0.12}" height="${W * 0.12}" rx="${W * 0.008}" fill="#fff" opacity="0.12"/>`;
  // ceramic bowl
  body += `<circle cx="${W * 0.78}" cy="${H * 0.7}" r="${W * 0.1}" fill="#efe6d6"/><circle cx="${W * 0.78}" cy="${H * 0.7}" r="${W * 0.072}" fill="#e2d6c2"/><circle cx="${W * 0.78}" cy="${H * 0.7}" r="${W * 0.03}" fill="${C.vermilion}" opacity="0.85"/>`;
  // leaf
  body += `<path d="M${W * 0.36} ${H * 0.9} C ${W * 0.4} ${H * 0.7}, ${W * 0.5} ${H * 0.62}, ${W * 0.6} ${H * 0.55}" stroke="#5c7a62" stroke-width="5" fill="none"/>`;
  for (let i = 0; i < 6; i++) {
    const t = i / 6;
    const lx = W * (0.38 + t * 0.2), ly = H * (0.84 - t * 0.27);
    body += `<ellipse cx="${lx}" cy="${ly}" rx="${W * 0.035}" ry="${W * 0.012}" fill="#7e9c84" transform="rotate(${i % 2 ? -40 : 20} ${lx} ${ly})"/>`;
  }
  // labels
  ["TIMBER", "PLASTER", "LINEN", "GLAZE"].forEach((l, i) => {
    const pos = [[0.1, 0.52], [0.12, 0.91], [0.56, 0.54], [0.45, 0.8]][i];
    body += `<text x="${W * pos[0]}" y="${H * pos[1]}" font-family="Helvetica, Arial, sans-serif" font-size="${W * 0.014}" letter-spacing="3" fill="${C.navy}" opacity="0.6">${l}</text>`;
  });
  return wrap(W, H, defs, body);
}

function plan(W, H, p) {
  const s = C.navy;
  const t = W * 0.008;
  let body = `<rect width="${W}" height="${H}" fill="${C.paper}"/>`;
  // grid
  for (let x = 0; x < W; x += W / 32) body += `<line x1="${x}" x2="${x}" y1="0" y2="${H}" stroke="${C.aqua}" stroke-opacity="0.25"/>`;
  for (let y = 0; y < H; y += W / 32) body += `<line x1="0" x2="${W}" y1="${y}" y2="${y}" stroke="${C.aqua}" stroke-opacity="0.25"/>`;
  const L = W * 0.12, T = H * 0.14, R = W * 0.88, B = H * 0.84;
  body += `<rect x="${L}" y="${T}" width="${R - L}" height="${B - T}" fill="none" stroke="${s}" stroke-width="${t}"/>`;
  if (p.courtyard) {
    const cx1 = W * 0.4, cx2 = W * 0.6, cy1 = H * 0.36, cy2 = H * 0.62;
    body += `<rect x="${cx1}" y="${cy1}" width="${cx2 - cx1}" height="${cy2 - cy1}" fill="#cfe2d0" stroke="${s}" stroke-width="${t}"/>`;
    body += `<circle cx="${W * 0.5}" cy="${H * 0.49}" r="${W * 0.04}" fill="#9db29a"/>`;
    body += `<line x1="${cx1}" x2="${cx1}" y1="${T}" y2="${cy1}" stroke="${s}" stroke-width="${t * 0.6}"/>`;
    body += `<line x1="${cx2}" x2="${cx2}" y1="${cy2}" y2="${B}" stroke="${s}" stroke-width="${t * 0.6}"/>`;
  } else {
    body += `<line x1="${W * 0.55}" x2="${W * 0.55}" y1="${T}" y2="${H * 0.55}" stroke="${s}" stroke-width="${t * 0.6}"/>`;
    body += `<line x1="${L}" x2="${W * 0.55}" y1="${H * 0.55}" y2="${H * 0.55}" stroke="${s}" stroke-width="${t * 0.6}"/>`;
    body += `<line x1="${W * 0.72}" x2="${W * 0.72}" y1="${H * 0.55}" y2="${B}" stroke="${s}" stroke-width="${t * 0.6}"/>`;
  }
  if (p.deck) {
    body += `<rect x="${L}" y="${B}" width="${R - L}" height="${H * 0.08}" fill="#e9dcc8" stroke="${s}" stroke-width="${t * 0.4}"/>`;
    for (let x = L; x < R; x += W * 0.02) body += `<line x1="${x}" x2="${x}" y1="${B}" y2="${B + H * 0.08}" stroke="${s}" stroke-opacity="0.25"/>`;
  }
  // door swings
  body += `<path d="M${W * 0.3} ${B} a ${W * 0.06} ${W * 0.06} 0 0 0 ${-W * 0.06} ${-W * 0.06}" fill="none" stroke="${s}" stroke-width="2"/>`;
  body += `<path d="M${W * 0.55} ${H * 0.4} a ${W * 0.05} ${W * 0.05} 0 0 1 ${W * 0.05} ${W * 0.05}" fill="none" stroke="${s}" stroke-width="2"/>`;
  // furniture
  body += `<rect x="${W * 0.16}" y="${H * 0.2}" width="${W * 0.18}" height="${H * 0.08}" rx="6" fill="${C.beige}" stroke="${s}" stroke-width="2"/>`;
  body += `<rect x="${W * 0.2}" y="${H * 0.33}" width="${W * 0.1}" height="${H * 0.08}" fill="none" stroke="${s}" stroke-width="2"/>`;
  body += `<rect x="${W * 0.66}" y="${H * 0.2}" width="${W * 0.16}" height="${H * 0.2}" fill="${C.beige}" stroke="${s}" stroke-width="2"/>`;
  body += `<rect x="${W * 0.18}" y="${H * 0.64}" width="${W * 0.16}" height="${H * 0.08}" fill="none" stroke="${s}" stroke-width="2"/>`;
  for (const cx of [0.2, 0.26, 0.32]) body += `<circle cx="${W * cx}" cy="${H * 0.76}" r="${W * 0.012}" fill="none" stroke="${s}" stroke-width="2"/>`;
  body += `<rect x="${W * 0.76}" y="${H * 0.6}" width="${W * 0.08}" height="${H * 0.2}" fill="none" stroke="${s}" stroke-width="2"/>`;
  // labels
  const labels = p.courtyard
    ? [["LIVING", 0.16, 0.46], ["COURTYARD", 0.44, 0.34], ["BEDROOM", 0.66, 0.46], ["DINING", 0.16, 0.6], ["BATH", 0.76, 0.58]]
    : [["LIVING", 0.16, 0.46], ["BEDROOM", 0.66, 0.46], ["KITCHEN / DINING", 0.16, 0.6], ["ENTRY", 0.58, 0.8], ["BATH", 0.76, 0.58]];
  for (const [l, x, y] of labels) body += `<text x="${W * x}" y="${H * y}" font-family="Helvetica, Arial, sans-serif" font-size="${W * 0.014}" letter-spacing="3" fill="${s}">${l}</text>`;
  // north + scale
  body += `<g transform="translate(${W * 0.92} ${H * 0.1})"><circle r="${W * 0.02}" fill="none" stroke="${s}" stroke-width="2"/><path d="M0 ${-W * 0.018} L ${W * 0.008} ${W * 0.01} L 0 ${W * 0.004} L ${-W * 0.008} ${W * 0.01} Z" fill="${C.vermilion}"/></g>`;
  body += `<text x="${W * 0.12}" y="${H * 0.08}" font-family="Georgia, serif" font-size="${W * 0.022}" fill="${s}">${p.title}</text>`;
  return wrap(W, H, "", body, "NAMI CONCEPT · INDICATIVE PLAN · NOT FOR CONSTRUCTION");
}

/* ---------- Palettes ---------- */

const P = {
  coastal: { wall: "#f1e8d8", floor: "#c9a679", frame: "#8a6c4b", fabric: "#e8dfcf", wood: "#b88c5e", rug: "#e3d6bf" },
  small: { wall: "#f3ede2", floor: "#dcc29a", frame: "#a5835a", fabric: "#d9cbb3", wood: "#c9a77a", rug: "#c46a4a55", shoji: true },
  court: { wall: "#ead9be", floor: "#a88257", frame: "#5e4630", fabric: "#e6dccb", wood: "#8f6a45", rug: "#d8c7a6" },
};

const files = {


  "projects/nami-house-01/mood-1.svg": () => moodboard(1200, 1200, { swatches: ["#c9a679", "#efe6d6", "#e3d8c4", "#2f7f9a"] }),
  "projects/nami-house-01/mood-2.svg": () => shelf(1200, 1200, P.coastal),
  "projects/nami-house-01/plan.svg": () => plan(1600, 1100, { title: "NAMI House 01 — Coastal Home", deck: true }),

  "projects/nami-house-02/mood-1.svg": () => moodboard(1200, 1200, { swatches: ["#dcc29a", "#f5efe2", "#ece3d2", "#c46a4a"] }),
  "projects/nami-house-02/mood-2.svg": () => shelf(1200, 1200, P.small),
  "projects/nami-house-02/plan.svg": () => plan(1600, 1100, { title: "NAMI House 02 — Small Sydney Home" }),

  "projects/nami-house-03/mood-1.svg": () => moodboard(1200, 1200, { swatches: ["#a88257", "#cfae86", "#e2cfa6", "#6f8a74"], board: "#efe4d2" }),
  "projects/nami-house-03/mood-2.svg": () => shelf(1200, 1200, P.court),
  "projects/nami-house-03/plan.svg": () => plan(1600, 1100, { title: "NAMI House 03 — Courtyard House", courtyard: true }),


};

for (const [rel, make] of Object.entries(files)) {
  const out = join(root, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, make());
}
console.log(`Generated ${Object.keys(files).length} placeholder images in public/images`);
