module.exports = {
  env: {
    cjs: {
      presets: [
        ["@babel/preset-env", {
          targets: {
            node: "8"
          }
        }],
        "@babel/preset-typescript"
      ],
      plugins: ["@babel/plugin-proposal-export-default-from"]
    },
    es6: {
      presets: [
        ["@babel/preset-env", {
          targets: {
            node: "8"
          },
          modules: false
        }],
        "@babel/preset-typescript"
      ],
      plugins: ["@babel/plugin-proposal-export-default-from"]
    },
    test: {
      presets: [
        ["@babel/preset-env", {
          targets: {
            node: "8"
          },
        }],
        "@babel/preset-typescript"
      ],
      plugins: ["@babel/plugin-proposal-export-default-from"]
    }
  }
}
