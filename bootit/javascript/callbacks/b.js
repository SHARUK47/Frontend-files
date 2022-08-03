let s1 = (a, b) => {
    return a + b;
    }
    let r1 = s1(10, 20);

    let s2 = (a, b, callback) => {
        return a * b;
    }

    let r2 = s2 (10,20, s1);

    console.log(r2);