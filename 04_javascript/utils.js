const self = module.exports = {
    sanitizeHeader(raw) {
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