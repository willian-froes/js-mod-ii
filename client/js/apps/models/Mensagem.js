class Mensagem {

    // if undefined return ""
    constructor(texto) {
        this.texto = texto || "";
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}