import { useEffect, useState } from "react";

export default function Flash({ message }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#38bdf8',
            color: '#fff',
            padding: '16px 32px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1000,
            fontWeight: 'bold',
            fontSize: '1.1rem',
            letterSpacing: '0.5px',
            minWidth: '200px',
            textAlign: 'center',
            opacity: 0.95
        }}>
            {message}
        </div>
    );
}