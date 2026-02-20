import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const contentDir = path.join(process.cwd(), 'content', 'projects');
        const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.json'));
        const projects = files.map((file) => {
            const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
            const data = JSON.parse(raw);
            return { ...data, id: file.replace(/\.json$/, '') };
        });

        return res.status(200).json({ success: true, projects });
    } catch (err) {
        console.error('Projects API error:', err);
        return res.status(500).json({ success: false, message: 'Failed to load projects' });
    }
}
