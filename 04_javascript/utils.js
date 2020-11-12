const self = module.exports = {
    sanitizeHeader(raw) {
        // because mentioned that:
        // it can be assumed that all records in the initial JSON result set have the same fields
        // so we use the first index (0) to get all keys
        return Object.keys(raw[0]);
    },

    sanitizeData(raw) {
        return raw.map(o => Object.values(o));
    },

    sanitizeResponse(raw) {
        const h = self.sanitizeHeader(raw);
        const d = self.sanitizeData(raw)
        return { h, d };
    }
}
