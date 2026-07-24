export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "perf",
        "style",
        "build",
        "ci",
        "chore",
        "docs",
        "test",
        "content",
      ],
    ],
  },
};
