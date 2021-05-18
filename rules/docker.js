const { ifFile } = require('../utils');

const usesDocker = ifFile('Dockerfile', true, false) || ifFile('docker-compose.yml', true, false);

/**
 * Turns off `import/no-unresolved` errors for node modules in projects using
 * Docker, to avoid false positives.
 */
module.exports = usesDocker ? { 'import/no-unresolved': ['error', { ignore: ['^[^.]+'] }] } : {};
