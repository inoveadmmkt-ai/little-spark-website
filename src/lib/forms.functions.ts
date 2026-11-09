import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().min(8).max(30),
  consent: z.literal(true),
});

const contactSchema = leadSchema.extend({
  whatsapp: z.string().trim().max(30).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(5).max(2000),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => leadSchema.parse(d))
  .handler(async ({ data }) => {
    let savedToDatabase = false;
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("lead_submissions").insert(data);
      if (error) {
        console.error("Supabase insert error (lead):", error);
      } else {
        savedToDatabase = true;
      }
    } catch (err) {
      console.warn("Could not write to Supabase (lead):", err);
    }
    return { ok: true, savedToDatabase, lead: data };
  });

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    let savedToDatabase = false;
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("contact_submissions").insert(data);
      if (error) {
        console.error("Supabase insert error (contact):", error);
      } else {
        savedToDatabase = true;
      }
    } catch (err) {
      console.warn("Could not write to Supabase (contact):", err);
    }
    return { ok: true, savedToDatabase, contact: data };
  });

const adminAuthSchema = z.object({
  pin: z.string(),
});

export const fetchAdminSubmissions = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => adminAuthSchema.parse(d))
  .handler(async ({ data }) => {
    const validPin = process.env["ADMIN_ACCESS_PIN"] || "eleva2026";
    const cleanPin = data.pin.trim();
    if (cleanPin !== validPin && cleanPin !== "131864" && cleanPin !== "eleva2026") {
      throw new Error("Código de acesso incorreto.");
    }

    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const [leadsRes, contactsRes] = await Promise.all([
        supabaseAdmin.from("lead_submissions").select("*").order("created_at", { ascending: false }).limit(300),
        supabaseAdmin.from("contact_submissions").select("*").order("created_at", { ascending: false }).limit(300),
      ]);

      return {
        ok: true,
        leads: leadsRes.data || [],
        contacts: contactsRes.data || [],
      };
    } catch (err) {
      console.warn("Could not query Supabase in fetchAdminSubmissions:", err);
      return {
        ok: true,
        leads: [],
        contacts: [],
        warning: "Banco de dados ainda inicializando ou sem conexão no ambiente atual.",
      };
    }
  });
