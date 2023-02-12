const core = require('@actions/core');
const SemVer = require('semver/classes/semver')

async function run() {
  try {
    const tag     = core.getInput('tag');
    const semver  = new SemVer(tag);
    var tagMajor  = `v${semver.major}`;
    var tagRc     = `v${semver.major}.${semver.minor}.${semver.patch}`;
    
    if (semver.prerelease !== null) {
      tagRc = `v${semver.major}.${semver.minor}.${semver.patch}-rc`
    }

    core.setOutput('tag_major', tagMajor);
    core.debug(tagMajor)
    core.setOutput('tag_rc', tagRc);
    core.debug(tagRc)
    core.setOutput('tag_rc_slug', tagRc.replaceAll('.', '-'));
    core.debug(tagRc.replaceAll('.', '-'))
    core.setOutput('tag_rc_underscore', tagRc.replaceAll('.', '_').replaceAll('-', '_'));
    core.debug(tagRc.replaceAll('.', '_').replaceAll('-', '_'))

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
