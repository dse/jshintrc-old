/*jshint esversion: 2020 */
const { enforcingOptions, relaxingOptions, environmentOptions } = require('./options');

function writeOption(option, defaultValue) {
    const name = option.name;
    const commentOut = option.commentOut || defaultValue === '//';
    if (commentOut) {
        defaultValue = true;
    }
    defaultValue = option.defaultValue ?? defaultValue ?? true;

    let s;
    s = (JSON.stringify(name) + ':').padEnd(16) + ' ' + JSON.stringify(defaultValue) + ',';
    s = s.padEnd(32);
    s = s + '// ' + option.description;
    if (commentOut) {
        s = '// ' + s;
    }
    s = '    ' + s;
    console.log(s);
}

console.log('{');
console.log(`    // Enforcing Options`);
enforcingOptions.forEach((option) => writeOption(option, true));
console.log(``);
console.log(`    // Relaxing Options`);
relaxingOptions.forEach((option) => writeOption(option, false));
console.log(``);
console.log(`    // Environment Options`);
environmentOptions.forEach((option) => writeOption(option, '//'));
console.log('}');
