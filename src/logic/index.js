const Base = require('./base.js');

module.exports = class extends Base {
    formatAction() {
        this.rules = {
            content: {
                required: true
            }
        };
    }
};
