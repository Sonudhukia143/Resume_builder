const API_URL = "https://resume-builder-11qc.onrender.com/api";

const request = async (endpoint, method = "POST", body = null) => {
    console.log(`${API_URL}/${endpoint}`);
    try {
        const res = await fetch(`${API_URL}/${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        // if (!res.ok) {
        //     throw new Error(`Error: ${res.statusText}`);
        // }

        if (res.ok) {
            return {result:true,res:res.json()};
        }else{
            return {result:false,res:res.json()};
        }
    } catch (err) {
        console.log(err);
        return { message: "ERROR UNEXPECTED" };
    }

};

export default request;
