class Features {
    constructor() {
        this.features = [];
        this.questions;
    }

    add(feature) {
        this.features.push(feature);
    }

    get(index) {
        return this.features[index];
    }

    avg() {

        var q1 = new Questions1(0,0,0,0,0,0);
        var q2 = new Questions2(0,0,0,0);
        var q3 = new Questions3(0,0,0);

        for (var i = 0; i < this.features.length; i++) {
            var feature = this.features[i];
            q1.suma(feature.questions.q1.questions);
            q2.suma(feature.questions.q2.questions);
            q3.suma(feature.questions.q3.questions);
        }

        q1.div(this.features.length);
        q2.div(this.features.length);
        q3.div(this.features.length);

        this.questions = new Questions(q1, q2, q3);
    }
}