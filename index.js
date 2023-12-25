module.exports = async function(source) {
    const options = this.getOptions();
    return source.replace(options.pattern, options.replacement);
}