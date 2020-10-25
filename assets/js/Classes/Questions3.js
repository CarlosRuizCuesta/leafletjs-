class Questions3 extends Question {

    constructor(si, no, ns) {
        super();
        super.questions = {"Si" : si, "No" : no, "Ns/NC" : ns};
    }

    suma(question) {

        if (question["Si"] == undefined || question["No"] == undefined || question["Ns/NC"] == undefined) {
            return;
        }

        this.questions["Si"] = this.questions["Si"] + question["Si"];
        this.questions["No"] = this.questions["No"] + question["No"];
        this.questions["Ns/NC"] = this.questions["Ns/NC"] + question["Ns/NC"];
    }

    div(number) {
        this.questions["Si"] = this.questions["Si"] / number;
        this.questions["No"] = this.questions["No"] / number;
        this.questions["Ns/NC"] = this.questions["Ns/NC"] / number;
    }
}