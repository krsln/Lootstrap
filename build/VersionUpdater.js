const packageJson = require('../package.json');
// we need to run our script, so we need to run a new process
const {execSync} = require('child_process');

//
// OLD Version
//

let oldVer = packageJson.version;

// If there is beta version
if (packageJson.version.indexOf('-') > -1) {
    oldVer = packageJson.version.substring(0, packageJson.version.indexOf('-'));
}


let oldBeta = 0;
if (packageJson.version.lastIndexOf('-beta.') > -1) {
    oldBeta = +packageJson.version.substring(packageJson.version.lastIndexOf('.') + 1);
}

console.log('OLD Version \t', oldVer, '\t', `-beta.${oldBeta}`);

//
// NEW Version
//

const date = new Date();
const newVer = `${date.getFullYear().toString().substring(2)}.${date.getMonth() + 1}.${date.getDate()}`;

// Reset beta counter if it's not at the same day
if (newVer !== oldVer) {
    console.log('OLD & NEW versions are NOT at the same day!');
    oldBeta = -1;
}

const newBeta = `-beta.${(oldBeta + 1)}`;
console.log('New Version \t', newVer, '\t', newBeta);


// # this sets the version
// # in package.json to 1.0.2
// npm version 1.0.2
execSync("npm version " + newVer + newBeta);