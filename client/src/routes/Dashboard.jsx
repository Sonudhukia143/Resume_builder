import { useState } from "react";
import ResumeView from "../components/ResumeView";
import getRandomData from "../utils/getRandomData";
import '../index.css';
import ResumeInput from "../components/ResumeInput";

const randomData = getRandomData();

export default function Dashboard() {
    const [initialData, setInitialData] = useState(randomData);
    const [focus, setFocus] = useState(null);

    return (
        <div className="flex flex-col md:flex-row mt-4">
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-2xl max-h-screen overflow-scroll" id="scrollable">
                    <ResumeView data={initialData} focus={focus} />
                </div>
            </div>
            <ResumeInput
                setFocus={setFocus}
                initialData={initialData}
                setInitialData={setInitialData}
            />
        </div>
    );
}
