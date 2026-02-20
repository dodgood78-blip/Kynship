// tina/config.js
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "00000000-0000-0000-0000-000000000000",
  token: process.env.TINA_TOKEN || "dummy_token",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ── HOMEPAGE ────────────────────────────────────────────────
      {
        name: "homepage",
        label: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
        path: "content/homepage",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        fields: [
          {
            type: "string",
            name: "heroHeadline",
            label: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A"
          },
          {
            type: "string",
            name: "heroSubtext",
            label: "\u0627\u0644\u0646\u0635 \u0627\u0644\u0641\u0631\u0639\u064A"
          },
          {
            type: "string",
            name: "heroCTAPrimary",
            label: "\u0646\u0635 \u0627\u0644\u0632\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A"
          },
          {
            type: "string",
            name: "heroCTASecondary",
            label: "\u0646\u0635 \u0627\u0644\u0632\u0631 \u0627\u0644\u062B\u0627\u0646\u0648\u064A"
          }
        ]
      },
      // ── PROJECTS ────────────────────────────────────────────────
      {
        name: "project",
        label: "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
        path: "content/projects",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "\u0648\u0635\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "category",
            label: "\u0627\u0644\u0641\u0626\u0629",
            options: ["\u0645\u0637\u0627\u0628\u062E", "\u063A\u0631\u0641 \u0645\u0644\u0627\u0628\u0633", "\u0648\u062D\u062F\u0627\u062A \u062A\u0644\u0641\u0632\u064A\u0648\u0646", "\u062A\u0635\u0645\u064A\u0645\u0627\u062A \u062E\u0627\u0635\u0629"]
          },
          {
            type: "string",
            name: "completionDate",
            label: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u062C\u0627\u0632"
          },
          {
            type: "string",
            name: "images",
            label: "\u0627\u0644\u0635\u0648\u0631",
            list: true
          }
        ]
      },
      // ── REVIEWS ─────────────────────────────────────────────────
      {
        name: "review",
        label: "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
        path: "content/reviews",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "location",
            label: "\u0627\u0644\u0645\u0648\u0642\u0639"
          },
          {
            type: "number",
            name: "rating",
            label: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 (1-5)"
          },
          {
            type: "string",
            name: "quote",
            label: "\u0627\u0644\u062A\u0639\u0644\u064A\u0642",
            ui: { component: "textarea" }
          }
        ]
      },
      // ── SETTINGS ────────────────────────────────────────────────
      {
        name: "settings",
        label: "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        fields: [
          {
            type: "string",
            name: "brandName",
            label: "\u0627\u0633\u0645 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629"
          },
          {
            type: "string",
            name: "phone",
            label: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"
          },
          {
            type: "string",
            name: "email",
            label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
          },
          {
            type: "string",
            name: "location",
            label: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646"
          },
          {
            type: "string",
            name: "whatsapp",
            label: "\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628 (\u0628\u0627\u0644\u0643\u0648\u062F \u0627\u0644\u062F\u0648\u0644\u064A)"
          },
          {
            type: "string",
            name: "instagram",
            label: "\u0631\u0627\u0628\u0637 \u0625\u0646\u0633\u062A\u0642\u0631\u0627\u0645"
          },
          {
            type: "string",
            name: "facebook",
            label: "\u0631\u0627\u0628\u0637 \u0641\u064A\u0633\u0628\u0648\u0643"
          },
          {
            type: "string",
            name: "goldColor",
            label: "\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0630\u0647\u0628\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
