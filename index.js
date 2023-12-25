module.exports = async function(source) {
    const options = this.getOptions();
    if (options instanceof Array) {
        for (let i = 0, len = options.length; i < len; i++) {
            const one = options[i];
            source = source.replace(one.pattern, one.replacement);
        }
    } else if (options instanceof Object) {
        return source.replace(options.pattern, options.replacement);
    }
    return source;
}