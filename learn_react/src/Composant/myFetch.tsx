export default function (str: string, timeout: number): Promise<string> {
    return new Promise((resolve) =>
        setTimeout(() => resolve(str), timeout)
    );
}
