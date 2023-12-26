module.exports = function(source) {
    const options = this.getOptions();
    if (options.map) {
        for (let i = 0, len = options.map.length; i < len; i++) {
            const one = options.map[i];
            source = source.replaceAll(one.pattern, one.replacement);
        }
    } else if (options instanceof Object) {
        return source.replaceAll(options.pattern, options.replacement);
    }
    return source;
}