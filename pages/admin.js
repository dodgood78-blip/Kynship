import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to TinaCMS admin panel
        window.location.href = '/admin/index.html';
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            fontFamily: 'Cairo, sans-serif',
            background: '#fafaf8',
        }}>
            <div style={{ textAlign: 'center', color: '#3a3a3a' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12, color: '#C8A646' }}>
                    Kynship Admin
                </div>
                <p style={{ color: '#7a7a7a' }}>جاري التوجيه إلى لوحة الإدارة...</p>
            </div>
        </div>
    );
}
