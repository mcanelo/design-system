const { defineConfig } = require('vite')
import path from "path"

module.exports = defineConfig({
  build: {
      lib: {
          entry: path.resolve(__dirname, "src/main.ts"),
          name: "index",
      },
  }
});