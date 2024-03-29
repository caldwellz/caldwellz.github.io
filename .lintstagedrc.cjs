'use strict';

module.exports = {
  // Process .js, .cjs, .mjs, .jsx, & .json files
  '*.?(c|m)js?(x|on)': function (filenames) {
    const commands = [`eslint -c .eslintrc.json --cache --fix "${filenames.join('" "')}"`];
    return commands;
  }
};
