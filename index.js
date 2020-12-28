const { ESLint } = require("eslint");
const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
  const eslint = new ESLint();
  const srcPath = core.getInput('src')

  const results = await eslint.lintFiles(srcPath);
  console.log(results);
};

main().catch((err) => {
  process.exitCode = =;
  console.error(err);
});
