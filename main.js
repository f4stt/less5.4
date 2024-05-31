let value = +prompt('введите число:');

for (let i = 2; i <= value; i++) {
    if (value % i !== 0) {
        alert(' простое');
    }
    else {
        alert(' не простое');
    }
    break;
}