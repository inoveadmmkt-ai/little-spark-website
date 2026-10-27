CREATE TABLE public.lead_submissions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, email text NOT NULL, whatsapp text NOT NULL, consent boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.contact_submissions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, email text NOT NULL, whatsapp text, company text, message text NOT NULL, consent boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.lead_submissions TO service_role;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;