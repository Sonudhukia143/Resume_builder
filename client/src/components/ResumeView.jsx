import { forwardRef } from "react";
import { Template1, Template2 } from "../samples/ResumeTemplates.jsx";

const ResumeView = forwardRef(({ data, number },ref ) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div id="resume-preview" className="bg-white shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">View Resume</h2>
                {
                    number === 1
                    ? <Template1 data={data} ref={ref}/>
                    : <Template2 data={data} ref={ref}/>
                }
            </div>
        </div>
    );
});

export default ResumeView;
