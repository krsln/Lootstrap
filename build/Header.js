const packageJson = require('../package.json');
const fs = require('fs')

/*!
 * CSS Compiled on: 2021-07-30
 *
 * Lootstrap v2021.7.29 (https://github.com/krsln/Lootstrap/)
 * Copyright 2021 Qrsln/Krlsn.
 * Licensed under MIT (https://github.com/krsln/Lootstrap/blob/master/LICENSE)
 */

const datetime = new Date();
const year = datetime.getFullYear();
const formatted = datetime.toISOString().slice(0, 10)

const desc = `
/*!
 * CSS Compiled on: ${formatted}
 *
 * Lootstrap v${packageJson.version} (https://github.com/krsln/Lootstrap/)
 * Copyright ${year} ${packageJson.author}.
 * Licensed under MIT (https://github.com/krsln/Lootstrap/blob/master/LICENSE)
*/ 
`

// console.log(desc);

const path = 'scss/_header.scss';

fs.writeFile(path, desc, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});