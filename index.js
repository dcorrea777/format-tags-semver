const core = require('@actions/core');
const SemVer = require('semver/classes/semver')

// most @actions toolkit packages have async methods
async function run() {
  try {
    const tag = core.getInput('tag');
    const semver = new SemVer(tag);

    core.info(`Your is ${tag} tag ...`);
    core.setOutput('full', `v${semver.major}.${semver.minor}.${semver.patch}-rc`);

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
