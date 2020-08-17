const escapeHTML = require('escape-html');
module.exports = function escapeHtmlInObject(input) {
    try {
        input = input.toJSON();
    } catch (error) {}
    if(Array.isArray(input)) {
        return input.map(escapeHtmlInObject)
    }else if(typeof input == 'object') {
        const output = {};
        Object.keys(input).forEach(k => {
            output[k] = escapeHtmlInObject(input[k])
        })
        return output;
    }else if(typeof input == 'string') {
        return escapeHTML(input)
    }else {
        return input;
    }
}