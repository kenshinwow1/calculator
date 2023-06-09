const OPERATION = {
    sum: '+',
    substract: '-',
    multiply: '*',
    division: '/'
};

function calculate({a, b, operation}){

    let result = null;

    switch (operation) {
        case OPERATION.sum:
            result = sum (a, b);
            break;

        case OPERATION.substract:
            result = substract (a, b);
            break;

        case OPERATION.multiply:
            result = multiply (a, b);
            break;

        case OPERATION.division:
            result = division (a, b);    
            break;
    
        default:
            break;
    }

    return result;
}