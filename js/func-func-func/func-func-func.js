//Javascript functions are also objects, so it is possible to assign properties to them.
//We assign the function itself to a property with the same name making it circular.
const func = (func) => console.log(func);
func.func = func;
func.func.func.func.func
    .func.func.func.func
    .func.func.func.func
    .func.func.func.func
    .func.func.func.func
    .func.func.func.func
    .func.func.func.func
    .func.func.func.func
    .func.func.func('func');
