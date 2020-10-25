class Features {
    constructor() {
        this.features = [];
    }

    add(feature) {
        this.features.push(feature);
    }

    get(index) {
        return this.features[index];
    }
}