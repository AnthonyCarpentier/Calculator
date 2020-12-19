function operate(firstNum, operatorOption, secondNum) {
    switch (operatorOption) {
        case `add`:
            return (firstNum + secondNum);
            break;
        case `subtract`:
            return (firstNum - secondNum);
            break;
        case `multiply`:
            return (firstNum * secondNum);
            break;
        case `divide`:
            return (firstNum / secondNum);
            break;
        default:
            break;
    }
}