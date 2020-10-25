class Questions2 extends  Question {
    constructor(mp, i, mbn, ns) {
        super();
        super.questions = {"Mas bien positiva" : mp, "Indiferente" : i, "Mas bien negativa" : mbn, "Ns/NC" : ns};
    }


    suma(question) {

        if (question["Mas bien positiva"] == undefined || question["Indiferente"] == undefined
            || question["Mas bien negativa"] == undefined || question["Ns/NC"] == undefined) {
            return;
        }

        this.questions["Mas bien positiva"] = this.questions["Mas bien positiva"] + question["Mas bien positiva"];
        this.questions["Indiferente"] = this.questions["Indiferente"] + question["Indiferente"];
        this.questions["Mas bien negativa"] = this.questions["Mas bien negativa"] + question["Mas bien negativa"];
        this.questions["Ns/NC"] = this.questions["Ns/NC"] + question["Ns/NC"];
    }

    div(number) {
        this.questions["Mas bien positiva"] = this.questions["Mas bien positiva"] / number;
        this.questions["Indiferente"] = this.questions["Indiferente"] / number;
        this.questions["Mas bien negativa"] = this.questions["Mas bien negativa"] / number;
        this.questions["Ns/NC"] = this.questions["Ns/NC"] / number;
    }
}