const pug = require('pug');

module.exports = function(embark) {
  embark.registerPipeline((embark.pluginConfig.files || ['**/*.pug']), function (opts) {
    return pug.compile(opts.source, {});
  });
};
