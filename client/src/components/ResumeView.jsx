import { Template1, Template2, Template3 } from "../samples/ResumeTemplates";

export default function ResumeView({ data }) {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div id="resume-preview" className="bg-white shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">View Resume</h2>
                <Template3 data={data} />
            </div>
        </div>
    );
}