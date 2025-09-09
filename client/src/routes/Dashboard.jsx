import { useRef, useState } from "react";
import ResumeView from "../components/ResumeView";
import getRandomData from "../utils/getRandomData";
import '../index.css';
import ResumeInput from "../components/ResumeInput";
import html2pdf from "html2pdf.js";

const randomData = getRandomData();

export default function Dashboard() {
    const [initialData, setInitialData] = useState(randomData);
    const [number, setNumber] = useState(1);
    const printRef = useRef(null);

    const handleDownload = () => {
        const element = printRef.current;

        const options = {
            margin: 0.2,
            filename: `${initialData.name}`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(options).from(element).save();
    };


    return (
        <>
            <div className="p-2">
                <button className="p-2 bg-red-500 text-white rounded cursor-pointer" onClick={handleDownload}>PRINT PDF</button>
                <button type="button" onClick={() => setNumber(1)} className={1 === number ? "p-2 mx-3 rounded-[4px] px-2 bg-white-900 cursor-pointer bg-green-900 text-white" : "text-dark-900 p-2 mx-3 rounded-[4px] px-2 bg-white-900 cursor-pointer"}>TEMPLATE 1</button>
                <button type="button" onClick={() => setNumber(2)} className={2 === number ? "p-2 mx-3 rounded-[4px] px-2 bg-white-900 cursor-pointer bg-green-900 text-white" : "text-dark-900 p-2 mx-3 rounded-[4px] px-2 bg-white-900 cursor-pointer"}>TEMPLATE 2</button>
            </div>
            <div className="flex flex-col md:flex-row mt-4">

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-2xl max-h-screen overflow-scroll printContent" id="scrollable" >
                        <ResumeView ref={printRef} data={initialData} number={number} />
                    </div>
                </div >
                <ResumeInput
                    initialData={initialData}
                    setInitialData={setInitialData}
                />
            </div >
        </>
    );
}
