import { forwardRef } from "react";

const joinList = (list) => Array.isArray(list) && list.length > 0 ? list.join(', ') : '';

export const Template2 = forwardRef(({ data }, ref) => {
    return (

        <div style={{ padding: "10px", backgroundColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #ccc' }}>
            <div ref={ref} style={{ padding: "0px", margin: "0px" }}>
                <div style={{ textAlign: 'center', borderBottom: '1px solid #d1d5db' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.name}</h1>
                    <p style={{ fontSize: '0.875rem', marginTop: '5px' }}>{data.profession}</p>
                    <p style={{ fontSize: '0.75rem', marginTop: '5px' }}>📞 {data.details?.contact}</p>
                    <p style={{ fontSize: '0.75rem', marginTop: '5px' }}>
                        Portfolio: {data.details?.portfolio
                            ? <a href={data.details.portfolio} style={{ color: '#2563eb', textDecoration: 'underline' }}>{data.details.portfolio}</a>
                            : ""}
                        {data.details?.portfolio ? " | " : ""}
                        LinkedIn: {data.details?.linkedin
                            ? <a href={data.details.linkedin} style={{ color: '#2563eb', textDecoration: 'underline' }}>{data.details.linkedin}</a>
                            : ""}
                        {data.details?.linkedin ? " | " : ""}
                        GitHub: {data.details?.github
                            ? <a href={data.details.github} style={{ color: '#2563eb', textDecoration: 'underline' }}>{data.details.github}</a>
                            : ""}
                    </p>
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Summary</h2>
                    <p>{data.objective || "Motivated and self-driven Full Stack Developer with a solid foundation in web technologies."}</p>
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Skills</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.875rem' }}>
                        <div>
                            <h3 style={{ fontWeight: 'bold' }}>Core Skills</h3>
                            <p>{joinList(data.skills?.core)}</p>
                        </div>
                        <div>
                            <h3 style={{ fontWeight: 'bold' }}>Tools</h3>
                            <p>{joinList(data.skills?.tools)}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Education</h2>
                    {Array.isArray(data.education) && data.education.length > 0 ? data.education.map((edu, idx) => (
                        <div key={idx} style={{ marginBottom: '10px' }}>
                            <p><strong>{edu.institute}</strong></p>
                            <p>{edu.study}</p>
                            <p>{edu.field}</p>
                            <p>{edu.duration}</p>
                            <p>{edu.score}</p>
                            {edu.website && <a href={edu.website} style={{ color: '#2563eb', textDecoration: 'underline' }}>{edu.website}</a>}
                        </div>
                    )) : <p>No education details available.</p>}
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Projects</h2>
                    {Array.isArray(data.projects) && data.projects.length > 0 ? data.projects.map((project, idx) => (
                        <div key={idx} style={{ marginBottom: '10px', fontSize: '0.875rem' }}>
                            <p><strong>{project.name}</strong>{project.duration ? ` (${project.duration})` : ""}</p>
                            <p>{project.description}</p>
                            {project.link && <a href={project.link} style={{ color: '#2563eb', textDecoration: 'underline' }}>Live Preview</a>}
                        </div>
                    )) : <p>No projects available.</p>}
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Certifications</h2>
                    {Array.isArray(data.certificates) && data.certificates.length > 0 ? data.certificates.map((cert, idx) => (
                        <p key={idx}>{cert.name}{cert["issued by"] ? ` (${cert["issued by"]})` : ""}</p>
                    )) : <p>No certifications available.</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px', marginBottom: '10px' }}>Languages</h2>
                    <p>{joinList(data.languages)}</p>
                </div>


            </div>
        </div>
    );
});

export const Template1 = forwardRef(({ data }, ref) => {
    return (
        <div style={{ padding: "10px", backgroundColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #ccc', }}>
            <div ref={ref} style={{ height: "1000px", padding: "0px", margin: "0px" }}>
                <div style={{ textAlign: 'center', borderBottom: '1px solid #d1d5db', marginTop: "0px" }}>
                    <h1 style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{data.name}</h1>
                    <p style={{ fontSize: '0.875rem', marginTop: '5px' }}>{data.profession}</p>
                    <p style={{ fontSize: '0.75rem', marginTop: '10px' }}>📍 {data.details?.location || ""} | 📞 {data.details?.contact || ""} | ✉ {data.details?.gmail || ""}</p>
                    <p style={{ fontSize: '0.75rem', marginTop: '5px' }}>
                        {data.details?.portfolio && <>🌐 <a href={data.details.portfolio} style={{ color: '#2563eb', textDecoration: 'underline' }}>Portfolio</a> | </>}
                        {data.details?.github && <>💻 <a href={data.details.github} style={{ color: '#2563eb', textDecoration: 'underline' }}>GitHub</a> | </>}
                        {data.details?.linkedin && <>🔗 <a href={data.details.linkedin} style={{ color: '#2563eb', textDecoration: 'underline' }}>LinkedIn</a></>}
                    </p>
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Objective</h2>
                    <p>{data.objective || "Aspiring learner eager to create learn."}</p>
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Education</h2>
                    {Array.isArray(data.education) && data.education.length > 0 ? data.education.map((edu, idx) => (
                        <div key={idx} style={{ marginBottom: '10px', fontSize: '0.875rem' }}>
                            <p><strong>{edu.institute}</strong></p>
                            <p>{edu.study}</p>
                            <p>{edu.field}</p>
                            <p>{edu.duration}</p>
                            <p>{edu.score}</p>
                            {edu.website && <a href={edu.website} style={{ color: '#2563eb', textDecoration: 'underline' }}>{edu.website}</a>}
                        </div>
                    )) : <p>No education information available.</p>}
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Projects</h2>
                    {Array.isArray(data.projects) && data.projects.length > 0 ? data.projects.map((proj, idx) => (
                        <div key={idx} style={{ marginBottom: '10px', fontSize: '0.875rem' }}>
                            <p><strong>{proj.name}</strong>{proj.duration ? ` (${proj.duration})` : ""}</p>
                            <p>{proj.description}</p>
                            {proj.tech && <p>Technologies: {proj.tech}</p>}
                            {proj.link && <a href={proj.link} style={{ color: '#2563eb', textDecoration: 'underline' }}>Live Preview</a>}
                        </div>
                    )) : <p>No projects information available.</p>}
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Core Skills</h2>
                    <p>{joinList(data.skills?.core)}</p>
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Tools</h2>
                    <p>{joinList(data.skills?.tools)}</p>
                </div>

                <div>
                    <h2 style={{ fontSize: '.925rem', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '5px' }}>Certifications</h2>
                    {Array.isArray(data.certificates) && data.certificates.length > 0 ? data.certificates.map((cert, idx) => (
                        <p key={idx}>{cert.name}{cert["issued by"] ? ` (${cert["issued by"]})` : ""}</p>
                    )) : <p>No certifications available.</p>}
                </div>


            </div>
        </div>
    );
});
