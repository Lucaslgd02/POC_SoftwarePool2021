type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

export function callback(err: Error, result?: undefined): Error;
export function callback(err: null, result: number): number;

export function callback(err: Error | null, result: number): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(`Result: ${result}`);
    return result;
}

export function superComputer(first_nbr: number, op: string, scd_nbr: number, cb: Callback) {
    let str = first_nbr + op + scd_nbr;
    let nbr = eval(str);
    return callback(null, nbr);
}

superComputer(1, "%", 0, callback);