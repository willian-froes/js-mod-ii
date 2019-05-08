if(!Array.prototype.includes) {
    console.log("Polyfill para Arrays aplicado!");

    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) != -1;
    };
}