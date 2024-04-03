module.exports = {
  root: true,
  extends: ["@react-native-community", "prettier"],
  plugins: ["simple-import-sort"],
  rules: {
    "react-hooks/exhaustive-deps": 0,
    "no-void": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-duplicate-imports": "error",
  },
};
