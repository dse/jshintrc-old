const enforcingOptions = [
    { name: "bitwise", description: "prohibit use of bitwise operators", },
    { name: "curly", description: "require curly braces around blocks in loops and conditionals", },
    { name: "eqeqeq", description: "prohibit == and != in favor of === and !==", },
    { name: "esversion", description: "ECMAScript version to which code must adhere", defaultValue: 2020, values: [
        { value: 3, description: "IE 6/7/8/9 and other older environments", },
        { value: 5, description: "ECMAScript 5.1", },
        { value: [6, 2015,], description: "ES6", },
        { value: [7, 2016,], description: "ES7, notably with the `**` operator", },
        { value: [8, 2017,], description: "ES8, notably with `async` functions, shared memory, and atomics", },
        { value: [9, 2018,], description: "ES9, notably with async iteration, rest/spread, various RegExp extensions", },
        { value: [10, 2019,], description: "ES10, notably with optional catch bindings", },
        { value: [11, 2020,], description: "ES11, notably with nullish coalescing and optional chaining", },
    ], },
    { name: "forin", description: "require all `for in` loops to filter objects' items", },
    { name: "freeze", description: "prohibit overwriting prototypes of native objects", },
    { name: "futurehostile", description: "warn about use of identifiers defined in future versions of JS", },
    { name: "latedef", description: "prohibit use of vars before definition; \"nofunc\" to ignore fn declarations", defaultValue: true, values: [
        { value: true, },
        { value: false, },
        { value: "nofunc", description: "allow fn declarations to be ignored", },
    ], },
    { name: "leanswitch", description: "prohibit unnecessary switch clauses", },
    { name: "noarg", description: "prohibit use of arguments.caller and arguments.callee", },
    { name: "nocomma", description: "prohibit use of comma operator", },
    { name: "nonbsp", description: "warn about U+00A0 NO-BREAK SPACE characters", },
    { name: "nonew", description: "prohibit constructors without `new`", },
    { name: "noreturnawait", description: "prohibit `return await`", },
    { name: "regexpu", description: "warn about regexps not including /u flag", },
    { name: "shadow", description: "suppress warnings about declaring vars already declared in outer scope", defaultValue: "inner", values: [
        { value: true, description: "allow var shadowing", },
        { value: false, description: "same as \"inner\"", },
        { value: "inner", description: "check for vars defined in same scope only", },
        { value: "outer", description: "check for vars defined in same scope or outer scopes", },
    ], },
    { name: "singleGroups", default: false, description: "prohibit unnecessary use of grouping operator", },
    { name: "strict", description: "require code to run in ES5 strict mode", defaultValue: true, values: [
        { value: "global", description: "require `\"use strict\";` at global level", },
        { value: "implied", description: "lint as if there's a `\"use strict\";` directive", },
        { value: false, description: "disable warnings about strict mode", },
        { value: true, description: "require `\"use strict\";` at function level", },
    ], },
    { name: "trailingcomma", default: false, description: "warn about missing trailing commas", },
    { name: "undef", description: "prohibit use of vars not explicitly declared", },
    { name: "unused", description: "warn about vars defined and never used", },
    { name: "varstmt", description: "prohibit `var` stmts in favor of `let` and `const`", },
    { name: "globals", description: "whitelist of global vars not formally defined here", defaultValue: [], commentOut: true, },
    { name: "predef", description: "list of vars implicitly defined in environment", defaultValue: [], commentOut: true, },
];
const relaxingOptions = [
    { name: "asi", description: "allow missing semicolons", },
    { name: "boss", description: "allow assignments where comparisons are expected", },
    { name: "debug", description: "allow `debugger` statements", },
    { name: "elision", description: "allow ES3 array elision elements", },
    { name: "eqnull", description: "allow `== null` comparisons", },
    { name: "evil", description: "allow `eval`", },
    { name: "expr", description: "allow use of exprs as stmts (instead of fn calls or assignments)", },
    { name: "funcscope", description: "allow outer use of vars declared in inner control structs", },
    { name: "iterator", description: "allow use of `__iterator__` property", },
    { name: "lastsemic", description: "allow omission of last `;` before closing 1-line block ", },
    { name: "loopfunc", description: "allow use of functions inside loops", },
    { name: "moz", description: "allow Mozilla JS extensions", },
    { name: "notypeof", description: "allow invalid `typeof` values", },
    { name: "noyield", description: "allow generator fns without `yield` stmts", },
    { name: "plusplus", description: "prohibit use of `++` and `--` operators", },
    { name: "proto", description: "allow use of `__proto__` property", },
    { name: "scripturl", description: "allow use of script-targeted URLs, e.g., `javascript:...`", },
    { name: "supernew", description: "allow certain weird constructions", },
    { name: "validthis", description: "in strict mode, allow use of `this` in non-constructor fns", },
    { name: "withstmt", description: "allow use of `with` stmt, hail satan", },
];
const environmentOptions = [
    { name: "browser", description: "modern browsers", },
    { name: "browserify", description: "globals available when using Browserify", },
    { name: "couch", description: "CouchDB", },
    { name: "devel", description: "poor-man's debugging: console, alert, etc.", },
    { name: "dojo", description: "the Dojo Toolkit", },
    { name: "jasmine", description: "the Jasmine unit testing framework", },
    { name: "jquery", description: "the jQuery JavaScript library", },
    { name: "mocha", description: "the \"BDD\" and \"TDD\" UIs of the Mocha unit testing framework", },
    { name: "module", description: "inform JSHint that the input code describes an ECMAScript 6 module", },
    { name: "mootools", description: "the MooTools JavaScript framework", },
    { name: "node", description: "globals available inside the Node runtime environment", },
    { name: "nonstandard", description: "non-standard but widely adopted globals such as escape and unescape", },
    { name: "phantom", description: "globals available inside the PhantomJS runtime environment", },
    { name: "prototypejs", description: "the Prototype JavaScript framework", },
    { name: "qunit", description: "the QUnit unit testing framework", },
    { name: "rhino", description: "globals available inside the Rhino runtime environment", },
    { name: "shelljs", description: "the ShellJS library", },
    { name: "typed", description: "globals for typed array constructors", },
    { name: "worker", description: "code running in Web Workers", },
    { name: "wsh", description: "code running in Windows Script Host", },
    { name: "yui", description: "the YUI JavaScript framework", },
];
const jshintOptions = [
    { name: "maxerr", description: "maximum # warnings before quitting", },
];
const codeComplexityOptions = [
    { name: "maxcomplexity", description: "maximum cyclomatic complexity", },
    { name: "maxdepth", description: "maximum block nesting depth", },
    { name: "maxparams", description: "maximum # arguments in fn signature", },
    { name: "maxstatements", description: "maximum # stmts allowed per fn", },
];
module.exports = {
    enforcingOptions,
    relaxingOptions,
    environmentOptions,
    jshintOptions,
    codeComplexityOptions,
};