import { defineConfig } from 'tinacms';

export default defineConfig({
    branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '00000000-0000-0000-0000-000000000000',
    token: process.env.TINA_TOKEN || 'dummy_token',

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },

    media: {
        tina: {
            mediaRoot: 'images',
            publicFolder: 'public',
        },
    },

    schema: {
        collections: [
            // ── HOMEPAGE ────────────────────────────────────────────────
            {
                name: 'homepage',
                label: 'الصفحة الرئيسية',
                path: 'content/homepage',
                format: 'json',
                ui: {
                    allowedActions: { create: false, delete: false },
                    global: true,
                },
                fields: [
                    {
                        type: 'string',
                        name: 'heroHeadline',
                        label: 'عنوان القسم الرئيسي',
                    },
                    {
                        type: 'string',
                        name: 'heroSubtext',
                        label: 'النص الفرعي',
                    },
                    {
                        type: 'string',
                        name: 'heroCTAPrimary',
                        label: 'نص الزر الرئيسي',
                    },
                    {
                        type: 'string',
                        name: 'heroCTASecondary',
                        label: 'نص الزر الثانوي',
                    },
                ],
            },

            // ── PROJECTS ────────────────────────────────────────────────
            {
                name: 'project',
                label: 'المشاريع',
                path: 'content/projects',
                format: 'json',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'عنوان المشروع',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'وصف المشروع',
                        ui: { component: 'textarea' },
                    },
                    {
                        type: 'string',
                        name: 'category',
                        label: 'الفئة',
                        options: ['مطابخ', 'غرف ملابس', 'وحدات تلفزيون', 'تصميمات خاصة'],
                    },
                    {
                        type: 'string',
                        name: 'completionDate',
                        label: 'تاريخ الإنجاز',
                    },
                    {
                        type: 'string',
                        name: 'images',
                        label: 'الصور',
                        list: true,
                    },
                ],
            },

            // ── REVIEWS ─────────────────────────────────────────────────
            {
                name: 'review',
                label: 'آراء العملاء',
                path: 'content/reviews',
                format: 'json',
                fields: [
                    {
                        type: 'string',
                        name: 'name',
                        label: 'اسم العميل',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'location',
                        label: 'الموقع',
                    },
                    {
                        type: 'number',
                        name: 'rating',
                        label: 'التقييم (1-5)',
                    },
                    {
                        type: 'string',
                        name: 'quote',
                        label: 'التعليق',
                        ui: { component: 'textarea' },
                    },
                ],
            },

            // ── SETTINGS ────────────────────────────────────────────────
            {
                name: 'settings',
                label: 'إعدادات الموقع',
                path: 'content/settings',
                format: 'json',
                ui: {
                    allowedActions: { create: false, delete: false },
                    global: true,
                },
                fields: [
                    {
                        type: 'string',
                        name: 'brandName',
                        label: 'اسم العلامة التجارية',
                    },
                    {
                        type: 'string',
                        name: 'phone',
                        label: 'رقم الهاتف',
                    },
                    {
                        type: 'string',
                        name: 'email',
                        label: 'البريد الإلكتروني',
                    },
                    {
                        type: 'string',
                        name: 'location',
                        label: 'العنوان',
                    },
                    {
                        type: 'string',
                        name: 'whatsapp',
                        label: 'رقم الواتساب (بالكود الدولي)',
                    },
                    {
                        type: 'string',
                        name: 'instagram',
                        label: 'رابط إنستقرام',
                    },
                    {
                        type: 'string',
                        name: 'facebook',
                        label: 'رابط فيسبوك',
                    },
                    {
                        type: 'string',
                        name: 'goldColor',
                        label: 'اللون الذهبي الرئيسي',
                    },
                ],
            },
        ],
    },
});
