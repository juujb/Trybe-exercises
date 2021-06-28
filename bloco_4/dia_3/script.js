let n = 5;

for (let i = 0; i < n; i++) {
    for (let z = 1; z >= (i/2)-1; z--) {
        console.log("*");
    }

    for (let x = 0; x <= (i*2)-i; x++) {
        console.log(i+1);
    }

    for (let y = 1; y >= (i/2)-1; y--) {
        console.log("*");

    }

    i+=1;

}
