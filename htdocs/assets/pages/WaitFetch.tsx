export default async function waitFetch(url: string) {
    let res = await fetch(url);
    return res.json();
}


