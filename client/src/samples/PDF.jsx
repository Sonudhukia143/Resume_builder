// TemplatePDF.js
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f3f4f6',
    padding: 20,
    fontSize: 11,
  },
  header: {
    textAlign: 'center',
    borderBottom: '1 solid #d1d5db',
    paddingBottom: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 3,
    color: '#4b5563'
  },
  section: {
    marginBottom: 15
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    borderBottom: '1 solid #d1d5db',
    paddingBottom: 3
  },
  text: {
    marginBottom: 4
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'underline'
  }
});


const joinList = (list) => Array.isArray(list) && list.length > 0 ? list.join(", ") : "";

export const Template1 = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.subtitle}>{data.profession}</Text>
        <Text style={styles.subtitle}>📍 {data.details?.location || ""} | 📞 {data.details?.contact || ""} | ✉ {data.details?.gmail || ""}</Text>
        <Text style={styles.subtitle} >
        Portfolio
        </Text>
        <Text style={styles.subtitle} >
        GitHub
        </Text>
        <Text style={styles.subtitle} >
        LinkedIn
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Objective</Text>
        <Text style={styles.text}>{data.objective || "Aspiring learner eager to create learn."}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Education</Text>
        {data.education && data.education.length > 0 ? data.education.map((edu, idx) => (
          <View key={idx} style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>{edu.institute}</Text>
            <Text>{edu.study}</Text>
            <Text>{edu.field}</Text>
            <Text>{edu.duration}</Text>
            <Text>{edu.score}</Text>
            {edu.website && <Text style={styles.link}>{edu.website}</Text>}
          </View>
        )) : <Text>No education information available.</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Projects</Text>
        {data.projects && data.projects.length > 0 ? data.projects.map((proj, idx) => (
          <View key={idx} style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>{proj.name}{proj.duration ? ` (${proj.duration})` : ""}</Text>
            <Text>{proj.description}</Text>
            {proj.tech && <Text>Technologies: {proj.tech}</Text>}
            {proj.link && <Text style={styles.link}>{proj.link}</Text>}
          </View>
        )) : <Text>No projects information available.</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Core Skills</Text>
        <Text style={styles.text}>{joinList(data.skills?.core)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Tools</Text>
        <Text style={styles.text}>{joinList(data.skills?.tools)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Certifications</Text>
        {data.certificates && data.certificates.length > 0 ? data.certificates.map((cert, idx) => (
          <Text key={idx} style={styles.text}>{cert.name}{cert["issued by"] ? ` (${cert["issued by"]})` : ""}</Text>
        )) : <Text>No certifications available.</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Languages</Text>
        <Text style={styles.text}>{joinList(data.languages)}</Text>
      </View>
    </Page>
  </Document>
);

export const Template2 = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.subtitle}>{data.profession}</Text>
        <Text style={styles.subtitle}>📞 {data.details?.contact}</Text>
        <Text style={styles.subtitle}>
          Portfolio: {data.details?.portfolio || ""} | LinkedIn: {data.details?.linkedin || ""} | GitHub: {data.details?.github || ""}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Summary</Text>
        <Text style={styles.text}>{data.objective || "Motivated and self-driven Full Stack Developer with a solid foundation in web technologies."}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Skills</Text>
        <Text style={styles.text}>Core Skills: {joinList(data.skills?.core)}</Text>
        <Text style={styles.text}>Tools: {joinList(data.skills?.tools)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Education</Text>
        {data.education && data.education.length > 0 ? data.education.map((edu, idx) => (
          <View key={idx} style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>{edu.institute}</Text>
            <Text>{edu.study}</Text>
            <Text>{edu.field}</Text>
            <Text>{edu.duration}</Text>
            <Text>{edu.score}</Text>
            {edu.website && <Text style={styles.link}>{edu.website}</Text>}
          </View>
        )) : <Text>No education details available.</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Projects</Text>
        {data.projects && data.projects.length > 0 ? data.projects.map((project, idx) => (
          <View key={idx} style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>{project.name}{project.duration ? ` (${project.duration})` : ""}</Text>
            <Text>{project.description}</Text>
            {project.link && <Text style={styles.link}>{project.link}</Text>}
          </View>
        )) : <Text>No projects available.</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Certifications</Text>
        {data.certificates && data.certificates.length > 0 ? data.certificates.map((cert, idx) => (
          <Text key={idx} style={styles.text}>{cert.name}{cert["issued by"] ? ` (${cert["issued by"]})` : ""}</Text>
        )) : <Text>No certifications available.</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Languages</Text>
        <Text style={styles.text}>{joinList(data.languages)}</Text>
      </View>
    </Page>
  </Document>
);
