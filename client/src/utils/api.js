const API_URL = "http://localhost:3000/api";

const request = async (endpoint , method = "POST", body = null) => {
    const res = await fetch(`${API_URL}/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
    }

    return res.json();
};

export default request;
