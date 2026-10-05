/*
# Create feedback_submissions table (single-tenant, no auth)

1. New Tables
- `feedback_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — name of the person submitting the form
  - `phone` (text, not null) — contact phone number
  - `email` (text, nullable) — optional email address
  - `message` (text, not null) — the feedback/request message
  - `created_at` (timestamptz, defaults to now()) — submission timestamp

2. Security
- Enable RLS on `feedback_submissions`.
- Allow anon + authenticated INSERT only (public can submit forms).
- No SELECT/UPDATE/DELETE for anon or authenticated — submissions are write-only from the frontend.
  This protects user-submitted data from being read by other visitors.

3. Notes
- This is a single-tenant app with no sign-in screen, so policies use `TO anon, authenticated`.
- Only INSERT is allowed publicly; reading submissions is reserved for the service role (server-side only).
*/

CREATE TABLE IF NOT EXISTS feedback_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_feedback" ON feedback_submissions;
CREATE POLICY "anon_insert_feedback"
ON feedback_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
