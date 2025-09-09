import { PDFDownloadLink } from '@react-pdf/renderer';
import { Template1, Template2 } from '../samples/PDF.jsx';

const PDFGenerator = ({ data, number }) => {
    const document = number === 1
        ? <Template1 data={data} />
        : <Template2 data={data} />;

    return (
        <PDFDownloadLink document={document} fileName={`${data?.name}`}>
            <button className="p-2 m-2 bg-red-500 text-white rounded cursor-pointer">
                Download PDF
            </button>
        </PDFDownloadLink>
    );
};

export default PDFGenerator;
