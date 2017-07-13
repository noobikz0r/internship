const _ = require('lodash');

class ValidationService {
    constructor(body) {
        this.body = body;
        this.errors = {};
    }

    required(param) {
        if (!this.body[param]) {
            this.setErrorParam(param, 'REQUIRED');
        }

        return this;
    }

    max(param, length = 255) {
        if (this.body[param] && this.body[param].length > length) {
            this.setErrorParam(param, 'MAX');
        }

        return this;
    }

    setErrorParam(param, error) {
        if (!this.errors[param]) {
            this.errors[param] = [];
        }

        this.errors[param].push(error);
    }

    check() {
        if (_.isEmpty(this.errors)) {
            return true;
        }

        return false;
    }
}

module.exports = ValidationService;