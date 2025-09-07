//add id to feild and use params to bring them in view onfocus in input fields

export const Template1 = ({data}) => {
    const joinList = (list) => Array.isArray(list) && list.length > 0 ? list.join(", ") : "";

    return (
        <div className="bg-white shadow-lg flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-800 text-white p-6 space-y-6">
                <div className="text-center">
                    <h2 className={focus === 'name'?"text-xl font-bold bg-red-900":"text-xl font-bold"}>{data.name}</h2>
                    <p className="text-sm">{data.profession}</p>
                </div>
                <div>
                    <h3 className="font-semibold border-b border-white pb-1 mb-2">Contact</h3>
                    <p>📍 {data.details?.location || ""}</p>
                    <p>📞 {data.details?.contact || ""}</p>
                    <p>✉️ {data.details?.gmail || ""}</p>
                    {data.details?.portfolio && <a target="_blank" rel="noopener noreferrer" href={data.details.portfolio} className="text-white hover:underline block">🌐 Portfolio</a>}
                    {data.details?.github && <a target="_blank" rel="noopener noreferrer" href={data.details.github} className="text-white hover:underline block">💻 GitHub</a>}
                    {data.details?.linkedin && <a target="_blank" rel="noopener noreferrer" href={data.details.linkedin} className="text-white hover:underline block">🔗 LinkedIn</a>}
                </div>
                <div>
                    {Array.isArray(data.skills?.core) && data.skills.core.length > 0 && (
                        <>
                            <h3 className="font-semibold border-b border-white pb-1 mb-2">Core Skills</h3>
                            <p>{joinList(data.skills.core)}</p>
                        </>
                    )}
                </div>
                <div>
                    {Array.isArray(data.skills?.tools) && data.skills.tools.length > 0 && (
                        <>
                            <h3 className="font-semibold border-b border-white pb-1 mb-2">Tools</h3>
                            <p>{joinList(data.skills.tools)}</p>
                        </>
                    )}
                </div>
                <div>
                    {Array.isArray(data.certificates) && data.certificates.length > 0 && (
                        <>
                            <h3 className="font-semibold border-b border-white pb-1 mb-2">Certifications</h3>
                            {data.certificates.map((cert, idx) => (
                                <p key={idx}>{cert.name}{cert["issued by"] ? ` (${cert["issued by"]})` : ""}</p>
                            ))}
                        </>
                    )}
                </div>
                <div>
                    {Array.isArray(data.languages) && data.languages.length > 0 && (
                        <>
                            <h3 className="font-semibold border-b border-white pb-1 mb-2">Languages</h3>
                            <p>{joinList(data.languages)}</p>
                        </>
                    )}
                </div>
            </div>

            <div className="md:w-2/3 p-6 space-y-6 bg-gray-300">
                <div>
                    <h1 className="text-3xl font-bold">{data.name}</h1>
                    <h2 className="text-xl text-gray-600">{data.profession}</h2>
                </div>
                <div>
                    {data.objective && (
                        <>
                            <h3 className="font-semibold text-blue-800 border-b border-blue-800 pb-1 mb-2">Objective</h3>
                            <p>{data.objective}</p>
                        </>
                    )}
                </div>
                {Array.isArray(data.education) && data.education.length > 0 && (
                    <>
                        <h3 className="font-semibold text-blue-800 border-b border-blue-800 pb-1 mb-2">Education</h3>
                        {data.education.map((edu, idx) => (
                            <div key={idx} className="mb-3">
                                <p><strong>{edu.institute}</strong></p>
                                <p>{edu.study}</p>
                                <p>{edu.field}</p>
                                <p>{edu.duration}</p>
                                <p>{edu.score}</p>
                                {edu.website && <a href={edu.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{edu.website}</a>}
                            </div>
                        ))}
                    </>
                )}
                {Array.isArray(data.projects) && data.projects.length > 0 && (
                    <>
                        <h3 className="font-semibold text-blue-800 border-b border-blue-800 pb-1 mb-2">Projects</h3>
                        {data.projects.map((project, idx) => (
                            <div key={idx} className="mb-4">
                                <p><strong>{project.name}</strong>{project.duration ? ` (${project.duration})` : ""}</p>
                                <p>{project.description}</p>
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live Preview</a>}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};


export const Template2 = ({ data }) => {
    const joinList = (list) => Array.isArray(list) && list.length > 0 ? list.join(", ") : "";

    return (
        <div className="bg-gray-200 shadow-lg p-6 space-y-6">

            <div className="text-center border-b pb-4 mb-4">
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <p className="text-sm mt-1">{data.profession}</p>
                <p className="text-xs mt-2">📞 {data.details?.contact}</p>
                <p className="text-xs mt-1">
                    Portfolio: {data.details?.portfolio
                        ? <a href={data.details.portfolio} className="text-blue-600 underline">{data.details.portfolio}</a>
                        : ""}
                    {data.details?.portfolio ? " | " : ""}
                    LinkedIn: {data.details?.linkedin
                        ? <a href={data.details.linkedin} className="text-blue-600 underline">{data.details.linkedin}</a>
                        : ""}
                    {data.details?.linkedin ? " | " : ""}
                    GitHub: {data.details?.github
                        ? <a href={data.details.github} className="text-blue-600 underline">{data.details.github}</a>
                        : ""}
                </p>
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Summary</h2>
                <p>{data.objective || "Motivated and self-driven Full Stack Developer with a solid foundation in web technologies."}</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <h3 className="font-bold">Core Skills</h3>
                        <p>{joinList(data.skills?.core)}</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Tools</h3>
                        <p>{joinList(data.skills?.tools)}</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Education</h2>
                {Array.isArray(data.education) && data.education.length > 0 ? data.education.map((edu, idx) => (
                    <div key={idx} className="mb-2">
                        <p><strong>{edu.institute}</strong></p>
                        <p>{edu.study}</p>
                        <p>{edu.field}</p>
                        <p>{edu.duration}</p>
                        <p>{edu.score}</p>
                        {edu.website && <a href={edu.website} className="text-blue-600 underline">{edu.website}</a>}
                    </div>
                )) : <p>No education details available.</p>}
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Projects</h2>
                {Array.isArray(data.projects) && data.projects.length > 0 ? data.projects.map((project, idx) => (
                    <div key={idx} className="mb-3 text-sm">
                        <p><strong>{project.name}</strong>{project.duration ? ` (${project.duration})` : ""}</p>
                        <p>{project.description}</p>
                        {project.link && <a href={project.link} className="text-blue-600 underline">Live Preview</a>}
                    </div>
                )) : <p>No projects available.</p>}
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Certifications</h2>
                {Array.isArray(data.certificates) && data.certificates.length > 0 ? (
                    data.certificates.map((cert, idx) => (
                        <p key={idx}>{cert.name}{cert["issued by"] ? ` (${cert["issued by"]})` : ""}</p>
                    ))
                ) : <p>No certifications available.</p>}
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Languages</h2>
                <p>{joinList(data.languages)}</p>
            </div>
        </div>
    );
};

export const Template3 = ({ data }) => {
    const joinList = (list) => Array.isArray(list) && list.length > 0 ? list.join(", ") : "";

    return (
        <div className="bg-gray-200 shadow-lg p-6 space-y-6">
            <div className="text-center border-b pb-4 mb-4">
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <p className="text-sm mt-1">{data.profession}</p>
                <p className="text-xs mt-2">📍 {data.details?.location || ""} | 📞 {data.details?.contact || ""} | ✉ {data.details?.gmail || ""}</p>
                <p className="text-xs mt-1">
                    {data.details?.portfolio && <>🌐 <a href={data.details.portfolio} className="text-blue-600 underline">Portfolio</a> | </>}
                    {data.details?.github && <>💻 <a href={data.details.github} className="text-blue-600 underline">GitHub</a> | </>}
                    {data.details?.linkedin && <>🔗 <a href={data.details.linkedin} className="text-blue-600 underline">LinkedIn</a></>}
                </p>
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Objective</h2>
                <p>{data.objective || "Aspiring learner eager to create learn."}</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Education</h2>
                {Array.isArray(data.education) && data.education.length > 0 ? data.education.map((edu, idx) => (
                    <div key={idx} className="mb-3 text-sm">
                        <p><strong>{edu.institute}</strong></p>
                        <p>{edu.study}</p>
                        <p>{edu.field}</p>
                        <p>{edu.duration}</p>
                        <p>{edu.score}</p>
                        {edu.website && <a href={edu.website} className="text-blue-600 underline">{edu.website}</a>}
                    </div>
                )) : <p>No education information available.</p>}
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Projects</h2>
                {Array.isArray(data.projects) && data.projects.length > 0 ? data.projects.map((proj, idx) => (
                    <div key={idx} className="mb-3 text-sm">
                        <p><strong>{proj.name}</strong>{proj.duration ? ` (${proj.duration})` : ""}</p>
                        <p>{proj.description}</p>
                        {proj.tech && <p>Technologies: {proj.tech}</p>}
                        {proj.link && <a href={proj.link} className="text-blue-600 underline">Live Preview</a>}
                    </div>
                )) : <p>No projects information available.</p>}
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Core Skills</h2>
                <p>{joinList(data.skills?.core)}</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Tools</h2>
                <p>{joinList(data.skills?.tools)}</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Certifications</h2>
                {Array.isArray(data.certificates) && data.certificates.length > 0 ? (
                    data.certificates.map((cert, idx) => (
                        <p key={idx}>{cert.name}{cert["issued by"] ? ` (${cert["issued by"]})` : ""}</p>
                    ))
                ) : <p>No certifications available.</p>}
            </div>

            <div>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Languages</h2>
                <p>{joinList(data.languages)}</p>
            </div>
        </div>
    );
};

