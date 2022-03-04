export interface People {
    name: string;
}

export const m1 = () => {
    console.log('12');
}

export const m2 = (interval: number, num: number) => {
    return new Promise((resolve: any) => setTimeout(() => {
        console.log(num)
        resolve();
    }, interval));
}