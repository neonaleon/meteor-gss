var path = Npm.require('path');
var fs = Npm.require('fs');

var gssHandler = function (compileStep) {
  compileStep.addHtml({
    section: 'head',
    data: '<link rel="stylesheet" type="text/gss" href="/gss/' + compileStep.inputPath + '"></link>'
  });
  compileStep.addAsset({
    path: '/gss/' + compileStep.inputPath,
    data: fs.readFileSync(compileStep.fullInputPath, 'utf8')
  });
};
Plugin.registerSourceHandler('gss', { archMatching: 'web' }, gssHandler);
