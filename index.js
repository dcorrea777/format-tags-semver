const core = require('@actions/core');
const SemVer = require('semver/classes/semver')

async function run() {
  try {
    const tag     = core.getInput('tag');
    const semver  = new SemVer(tag);
    var tagMajor  = `v${semver.major}`;
    var tagRc     = `v${semver.major}.${semver.minor}.${semver.patch}`;
    
    if (semver.prerelease() !== null) {
      tagRc = `v${semver.major}.${semver.minor}.${semver.patch}-rc`
    }

    core.setOutput('tag_major', tagMajor);
    core.setOutput('tag_rc', tagRc);
    core.setOutput('tag_rc_slug', tagRc.replace(['.', '-'], '_'));
    core.setOutput('tag_rc_hyphen', tagRc.replace(['.', '-'], '-'));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
