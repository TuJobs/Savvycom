var fibonacci = {
    next: (function () {
        var a = 0, b = 1;
        return function () {
            tmp = a;
            a = b;
            b += tmp;
            return b;
        };
    })()
};
var n;
for (;;) {
    n = fibonacci.next();
    if (n > 1000)
        break;
    console.log(n);
} 