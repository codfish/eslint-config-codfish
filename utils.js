/**
 * Utility Methods
 *
 * Credit: Kent C. Dodds
 *
 * @see https://github.com/kentcdodds/kcd-scripts/blob/master/src/utils.js
 */
const fs = require('fs');
const path = require('path');
const readPkgUp = require('read-pkg-up');
const arrify = require('arrify');
const has = require('lodash.has');

const { package: pkg, path: pkgPath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});
const appDirectory = path.dirname(pkgPath);

const fromRoot = (...p) => path.join(appDirectory, ...p);
const hasFile = (...p) => fs.existsSync(fromRoot(...p));
const ifFile = (files, t, f) => (arrify(files).some(file => hasFile(file)) ? t : f);

const hasPkgProp = props => arrify(props).some(prop => has(pkg, prop));
const hasPkgSubProp = pkgProp => props => hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`));

const hasDep = hasPkgSubProp('dependencies');
const hasDevDep = hasPkgSubProp('devDependencies');
const hasPeerDep = hasPkgSubProp('peerDependencies');
const hasAnyDep = args => [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args));
const ifAnyDep = (deps, t, f) => (hasAnyDep(arrify(deps)) ? t : f);

module.exports = { ifAnyDep, ifFile };
