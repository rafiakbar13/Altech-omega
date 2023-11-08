export const FishBash = (n: number) => {
    for (let i = 1; i <= n; i++) {
        let result = ""
        if (i % 3 === 0) result += "fish "
        if (i % 5 === 0) result += "bash"
        console.log(result || i)
    }
};

FishBash(15)