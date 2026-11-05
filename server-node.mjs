import handler from "./dist/server/server.js";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname } from "node:path";

const port = process.env.PORT || 3000;
const clientDir = "./dist/client";

const mimeTypes = {
  ".js": "application/javascript",
  ".css": "text/css",
  ".html": "text/html",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

createServer(async (req, res) => {
  // Try to serve static file first
  const staticPath = join(clientDir, req.url.split("?")[0]);
  if (existsSync(staticPath) && !staticPath.endsWith("/")) {
    const ext = extname(staticPath);
    const mime = mimeTypes[ext] || "application/octet-stream";
    const file = await readFile(staticPath);
    res.writeHead(200, { "Content-Type": mime });
    res.end(file);
    return;
  }

  // Fall through to SSR handler
  const url = new URL(req.url, `http://localhost:${port}`);
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : req,
  });

  const response = await handler.fetch(request, {}, {});
  res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
  res.end(Buffer.from(await response.arrayBuffer()));
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
