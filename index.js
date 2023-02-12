const core = require('@actions/core');
const SemVer = require('semver/classes/semver')

async function run() {
  try {
    const tag     = core.getInput('tag');
    const semver  = new SemVer(tag);
    core.setOutput('raw', semver.raw);
    core.setOutput('major', semver.major);
    core.setOutput('minor', semver.minor);
    core.setOutput('patch', semver.patch);
    core.setOutput('release', semver.prerelease.length ? semver.prerelease[1] : null);
    core.setOutput('version', semver.version);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
