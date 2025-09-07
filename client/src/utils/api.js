const API_URL = "https://api.example.com";

const request = async (endpoint, method = 'GET', body = null) => {
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
