export const getAuth = async (objAuth) => {
    const url = 'remplazar cadena por la de produccion'
    try {
        const data = await fetch(url);
        const res = await data.json();
        return res;
    } catch (error) {
        console.log(error)
    }
};