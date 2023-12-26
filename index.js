module.exports = function(source) {
    const options = JSON.parse(this.query.slice(1));
    if (options instanceof Array) {
        for (let i = 0, len = options.length; i < len; i++) {
            const one = options[i];
            source = source.replaceAll(one.pattern, one.replacement);
        }
    } else if (options instanceof Object) {
        return source.replaceAll(options.pattern, options.replacement);
    }
    return source;
}