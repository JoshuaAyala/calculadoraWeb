/* var first = 0;
var second = 0;
var operation = "";
var handler = 0;

function validate(x){
    if(x == "+" || x == "-" || x == "*" || x == "/" ){
        operation = x;
    } else if(first!=0){
        second = x;
        return calcular(first, operation, second);
    }else{
        first = x;
    }
} 

function calcular(f, op, s) {
    if (array[array.length] == "+" || array[array.length] == "-" || array[array.length] == "*" || array[array.length] == "/" ) {
        array.pop()
    }
    resultadoOperacion = eval(f + operation + second)
    document.getElementById("operation-handler").value = resultadoOperacion;
}

function addOperationX(x){
    if(!done){
        array.push(x);
        operation = array.join("");
        document.getElementById("operation-handler").value = operation;
        console.log(array);
    }else{
        done = false;
        array = []
        addOperation(x)
    }
    
}

*/

let array = [];
let operation = array.join("");
let done = false;
let variabletype = false; // False: Entero  True: Decimal

function clearArray(){
    array = [];
    document.getElementById("operation-handler").value = "";
    console.log("Limpio" + array);
}

function retroceder() {
    array.pop()
    operation = array.join("");
    document.getElementById("operation-handler").value = operation;
}

function cambiarIntDecimal() {
    console.log(variabletype)
    if (!variabletype) {
        variabletype = true;
        document.getElementById('cambiartipo').innerHTML = "E";
        console.log("Cambio a Decimal");
        console.log(variabletype)
    } else {
        variabletype = false;
        document.getElementById('cambiartipo').innerHTML = "D";
        console.log("Cambio a Entero");
        console.log(variabletype)
    }
    
}

function resultado() {
    if (array[array.length-1] == "+" || array[array.length-1] == "-" || array[array.length-1] == "*" || array[array.length-1] == "/" || array[array.length-1] == ".") {
        array.pop()
    }
    operation = array.join("");
    console.log(operation);
    try {
        resultadoOperacion = eval(operation);
        if(!variabletype){
            document.getElementById("operation-handler").value = Math.trunc(resultadoOperacion);
        }else{
            document.getElementById("operation-handler").value = resultadoOperacion;
        }
    } catch (e) {
        console.log(e.stack);
        document.getElementById("operation-handler").value = "Error de sintaxis";
    }
    
    
    array = []
    done = true;
}

let opSign = false;

function addOperation(x){
    if(!done){
        if(x == "+" || x == "-" || x == "*" || x == "/" || x == "."){
            if(!opSign){
                array.push(x);
                operation = array.join("");
                document.getElementById("operation-handler").value = operation;
                console.log(array);
                opSign = true;
            }else{
                console.log("aki");
                array.pop()
                array.push(x);
                operation = array.join("");
                document.getElementById("operation-handler").value = operation;
                console.log(array);
            }
        } else {
            opSign = false;
            array.push(x);
            operation = array.join("");
            document.getElementById("operation-handler").value = operation;
            console.log(array);
        }
    }else{
        done = false;
        array = []
        addOperation(x)
    }
}
