import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().trim().max(100).optional().or(z.literal("")),
  details: z.string().trim().min(1).max(4000),
});

const TO = "velorawebsolutions@gmail.com";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    
    const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("Missing RESEND_API_KEY");
}

const resend = new Resend(apiKey);
    

    const rows: [string, string][] = [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone || "—"],
      ["Company", data.company || "—"],
      ["Service", data.service || "—"],
      ["Budget", data.budget || "—"],
    ];

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;padding:24px;color:#111">
        <h2 style="margin:0 0 16px">New Velora enquiry</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows.map(([k, v]) => `<tr><td style="padding:6px 8px;background:#f5f5f5;font-weight:600;width:120px">${k}</td><td style="padding:6px 8px;border-bottom:1px solid #eee">${escapeHtml(v)}</td></tr>`).join("")}
        </table>
        <h3 style="margin:20px 0 8px">Project details</h3>
        <p style="white-space:pre-wrap;line-height:1.5;font-size:14px">${escapeHtml(data.details)}</p>
      </div>
    `;
console.log("Sending to:", TO);
    const { error } = await resend.emails.send({
  from: "Velora Contact <onboarding@resend.dev>",
  to: TO,
  replyTo: data.email,
text: `
Name: ${data.name}

Email: ${data.email}

Phone: ${data.phone}

Company: ${data.company}

Service: ${data.service}

Budget: ${data.budget}

Project Details:

${data.details}
`,
  subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
  html,
});

if (error) {
  console.error(error);
  throw new Error(error.message || "Failed to send email");
}
    return { ok: true };
  });
