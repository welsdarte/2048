function FormulaManager (grid) {
    this.formula = {
        description : "",
    }
    this.grid = grid;
}


FormulaManager.prototype.setFormula = function (no) {
    
    switch (no){
        case 1:
            this.formula = {description: "Number of non-empty cells"}
            break;
        case 2:
            this.formula = {description: "Arithmetic mean"}
            break;
        case 3:
            this.formula = {description: "Biggest"}
            break;
        case 4:
            this.formula = {description: "Summation"}
            break;
    } 
}