module.exports = function(config) {
  config.set({
    mutate: ["index.js"],
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "command",
    transpilers: [],
    coverageAnalysis: "none"
  });
};
