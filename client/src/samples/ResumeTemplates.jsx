const joinList = (list) => Array.isArray(list) && list.length > 0 ? list.join(', ') : '';

export const Template2 = ({ data,ref}) => {
    return (
        <div ref={ref} className="bg-gray-200 shadow-lg p-6 space-y-6" style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        
            <div className="print-container">
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
        </div>
    );
};

export const Template1 = ({ data,ref}) => {
    return (
        <div ref={ref} className="bg-gray-200 shadow-lg p-6 space-y-6" style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
            <div className="print-container"></div>
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

