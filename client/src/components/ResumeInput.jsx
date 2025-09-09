export default function ResumeInput({ setFocus, initialData, setInitialData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle details fields
        if (["location", "contact", "gmail", "portfolio", "github", "linkedin"].includes(name)) {
            setInitialData({
                ...initialData,
                details: { ...initialData.details, [name]: value }
            });
        }
        // Handle skills arrays
        else if (name === "core" || name === "tools") {
            setInitialData({
                ...initialData,
                skills: { ...initialData.skills, [name]: value.split(",").map(item => item.trim()) }
            });
        }
        // Handle languages array
        else if (name === "languages") {
            setInitialData({
                ...initialData,
                languages: value.split(",").map(item => item.trim())
            });
        }
        // Other fields
        else {
            setInitialData({
                ...initialData,
                [name]: value
            });
        }
    };

    const handleArrayChange = (e, idx, field, subfield) => {
        const arr = [...initialData[field]];
        arr[idx][subfield] = e.target.value;
        setInitialData({ ...initialData, [field]: arr });
    };

    const addArrayItem = (field, template) => {
        setInitialData({ ...initialData, [field]: [...initialData[field], { ...template }] });
    };

    const removeArrayItem = (field, idx) => {
        const arr = [...initialData[field]];
        arr.splice(idx, 1);
        setInitialData({ ...initialData, [field]: arr });
    };

    return (
        <div className="w-full mt-6 md:w-1/2 justify-center items-center bg-white shadow-lg max-h-screen overflow-scroll" id="scrollable">
            <div className="w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Edit Resume</h2>
                <form className="space-y-3">
                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input name="name" onFocus={() => setFocus('name')} value={initialData?.name} onChange={handleChange} placeholder="Your Name" className="w-full border rounded px-3 py-2" />
                    </div>

                    {/* Profession */}
                    <div>
                        <label className="block font-medium mb-1">Profession</label>
                        <input name="profession" value={initialData?.profession} onChange={handleChange} placeholder="e.g. MERN Stack Developer" className="w-full border rounded px-3 py-2" />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="block font-medium mb-1">Location</label>
                        <input name="location" value={initialData?.details?.location} onChange={handleChange} placeholder="Location" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input name="gmail" value={initialData?.details?.gmail} onChange={handleChange} placeholder="Email" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Contact</label>
                        <input name="contact" value={initialData?.details?.contact} onChange={handleChange} placeholder="Contact" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">GitHub</label>
                        <input name="github" value={initialData?.details?.github} onChange={handleChange} placeholder="GitHub link or username" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">LinkedIn</label>
                        <input name="linkedin" value={initialData?.details?.linkedin} onChange={handleChange} placeholder="LinkedIn link" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Portfolio</label>
                        <input name="portfolio" value={initialData?.details?.portfolio} onChange={handleChange} placeholder="Portfolio link" className="w-full border rounded px-3 py-2" />
                    </div>

                    {/* Objective */}
                    <div>
                        <label className="block font-medium mb-1">Objective</label>
                        <textarea name="objective" value={initialData?.objective} onChange={handleChange} placeholder="Professional objective" className="w-full border rounded px-3 py-2" />
                    </div>

                    {/* Education */}
                    <div>
                        <label className="block font-medium mb-1">Education</label>
                        {initialData?.education.map((edu, idx) => (
                            <div key={idx} className="flex flex-wrap gap-2 mb-2">
                                <input placeholder="Institute" value={edu.institute} onChange={e => handleArrayChange(e, idx, 'education', 'institute')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Study" value={edu.study} onChange={e => handleArrayChange(e, idx, 'education', 'study')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Field" value={edu.field} onChange={e => handleArrayChange(e, idx, 'education', 'field')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Score" value={edu.score} onChange={e => handleArrayChange(e, idx, 'education', 'score')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Duration" value={edu.duration} onChange={e => handleArrayChange(e, idx, 'education', 'duration')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Website" value={edu.website} onChange={e => handleArrayChange(e, idx, 'education', 'website')} className="flex-1 border rounded px-2 py-1" />
                                <button type="button" onClick={() => removeArrayItem('education', idx)} className="text-red-100 rounded-[4px] px-2 bg-white-900 cursor-pointer">❌</button>
                            </div>
                        ))}
                        <button type="button" onClick={() => addArrayItem('education', { institute: "", study: "", field: "", score: "", duration: "", website: "" })} className="text-white font-bold p-2 cursor-pointer bg-blue-400 m-2 border-1 rounded-[4px]">Add Education</button>
                    </div>

                    {/* Skills */}
                    <div>
                        <label className="block font-medium mb-1">Core Skills (comma separated)</label>
                        <input name="core" value={initialData?.skills?.core.join(", ")} onChange={handleChange} placeholder="e.g. JavaScript, TypeScript, React..." className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Tools (comma separated)</label>
                        <input name="tools" value={initialData?.skills?.tools.join(", ")} onChange={handleChange} placeholder="e.g. Docker, Git, Postman..." className="w-full border rounded px-3 py-2" />
                    </div>

                    {/* Certifications */}
                    <div>
                        <label className="block font-medium mb-1">Certifications</label>
                        {initialData?.certificates.map((cert, idx) => (
                            <div key={idx} className="flex flex-wrap gap-2 mb-2">
                                <input placeholder="Issuer Name" value={cert["issued by"]} onChange={e => handleArrayChange(e, idx, 'certificates', 'issued by')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Certificate Name" value={cert.name} onChange={e => handleArrayChange(e, idx, 'certificates', 'name')} className="flex-1 border rounded px-2 py-1" />
                                <button type="button" onClick={() => removeArrayItem('certificates', idx)} className="text-red-100 rounded-[4px] px-2 bg-white-900 cursor-pointer">❌</button>
                            </div>
                        ))}
                        <button type="button" onClick={() => addArrayItem('certificates', { name: "", "issued by": "" })} className="text-white font-bold p-2 cursor-pointer bg-blue-400 m-2 border-1 rounded-[4px]">Add Certification</button>
                    </div>

                    {/* Languages */}
                    <div>
                        <label className="block font-medium mb-1">Languages (comma separated)</label>
                        <input name="languages" value={initialData?.languages.join(", ")} onChange={handleChange} placeholder="e.g. English, Hindi" className="w-full border rounded px-3 py-2" />
                    </div>

                    {/* Projects */}
                    <div>
                        <label className="block font-medium mb-1">Projects</label>
                        {initialData?.projects.map((proj, idx) => (
                            <div key={idx} className="flex flex-wrap gap-2 mb-2">
                                <input placeholder="Project Name" value={proj.name} onChange={e => handleArrayChange(e, idx, 'projects', 'name')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Duration" value={proj.duration} onChange={e => handleArrayChange(e, idx, 'projects', 'duration')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Description" value={proj.description} onChange={e => handleArrayChange(e, idx, 'projects', 'description')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Technologies" value={proj.tech} onChange={e => handleArrayChange(e, idx, 'projects', 'tech')} className="flex-1 border rounded px-2 py-1" />
                                <input placeholder="Link" value={proj.link} onChange={e => handleArrayChange(e, idx, 'projects', 'link')} className="flex-1 border rounded px-2 py-1" />
                                <button type="button" onClick={() => removeArrayItem('projects', idx)} className="text-red-100 rounded-[4px] px-2 bg-white-400 cursor-pointer">❌</button>
                            </div>
                        ))}
                        <button type="button" onClick={() => addArrayItem('projects', { name: "", duration: "", description: "", tech: "", link: "" })} className="text-white font-bold p-2 cursor-pointer bg-blue-400 m-2 border-1 rounded-[4px]">Add Project</button>
                    </div>
                </form>
            </div>
        </div>
    );
}