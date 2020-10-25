class Questions1 extends  Question {
    constructor(mb, b, mbn, m, mm, ns) {
        super();
        super.questions = {"Muy buena" : mb, "Buena" : b, "Normal" : mbn, "Mala" : m, "Muy mala" : mm, "Ns/NC" : ns}
        super.quesLabel = Object.keys(this.questions);
        super.quesData = Object.values(this.questions);
    }


    suma(question) {

        if (question["Muy buena"] == undefined || question["Buena"] == undefined
            || question["Normal"] == undefined || question["Mala"] == undefined
            || question["Muy mala"] == undefined || question["Ns/NC"] == undefined) {
            return;
        }

        this.questions["Muy buena"] = this.questions["Muy buena"] + question["Muy buena"];
        this.questions["Buena"] = this.questions["Buena"] + question["Buena"];
        this.questions["Normal"] = this.questions["Normal"] + question["Normal"];
        this.questions["Mala"] = this.questions["Mala"] + question["Mala"];
        this.questions["Muy mala"] = this.questions["Muy mala"] + question["Muy mala"];
        this.questions["Ns/NC"] = this.questions["Ns/NC"] + question["Ns/NC"];
    }

    div(number) {
        this.questions["Muy buena"] = this.questions["Muy buena"] / number;
        this.questions["Buena"] = this.questions["Buena"] / number;
        this.questions["Normal"] = this.questions["Normal"] / number;
        this.questions["Mala"] = this.questions["Mala"] / number;
        this.questions["Muy mala"] = this.questions["Muy mala"] / number;
        this.questions["Ns/NC"] = this.questions["Ns/NC"] / number;
    }
}