export const FishBash = (n: number) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fish bash");
        } else if (i % 3 === 0) {
            console.log("fish");
        } else if (i % 5 === 0) {
            console.log("bash");
        } else {
            console.log(i);
        }
    }
}

FishBash(30);