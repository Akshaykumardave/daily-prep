{
    let arr = [1, -1, 2, -3, 5, 6, -2, 10, -5, null];

    let sum = 0;
    arr.forEach((ele) => {
        if (ele != null) {
            sum += ele;
        }
    });

    console.log(sum);
}