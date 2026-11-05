import handler from "./dist/server/server.js";
import { createServer } from "node:http";

const port = process.env.PORT || 3000;

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : req,
  });

  const response = await handler.fetch(request, {}, {});

  res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
  res.end(await response.arrayBuffer().then(b => Buffer.from(b)));
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
