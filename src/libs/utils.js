const GET = async (url) => {
    try {
        const raw = await fetch(url);
        const res = await raw.json();
        return res;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const POST = async (url, body) => {
    try {
        const raw = await fetch(url, 
            { 
                method: 'POST', 
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        const res = await raw.json();
        return res;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const DELETE = async (url) => {
    try {
        const raw = await fetch(url, { method: 'DELETE' });
        const res = await raw.json();
        return res;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    GET,
    POST,
    DELETE
}