import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "esm",
  },
  plugins: [
    nodeResolve({ extensions: [".js", "jsx"] }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/react-preset"],
      extensions: [".js", ".jsx"],
    }),
  ],
};
