import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://github.com/L4Ph.png',
        namespace: 'nsfwdoublur',
        match: ['https://'],
      },
    }),
  viteStaticCopy({
      targets: [
        {
          src: "./node_modules/onnxruntime-web/dist/*.wasm",
          dest: "./",
        },
        {
          src: "./public/*.onnx",
          dest: "./",
        },
      ],
    }),
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    }
  ],
});
