-- Drop the existing public read policy
DROP POLICY IF EXISTS "Anyone can view usage stats" ON public.usage_stats;

-- Drop the overly permissive service role policy
DROP POLICY IF EXISTS "Service role can update stats" ON public.usage_stats;

-- Create a strict policy: only service_role can read stats (for server-side/edge functions)
-- Note: service_role bypasses RLS by default, but we add explicit policy for clarity
CREATE POLICY "Only service role can read stats"
ON public.usage_stats
FOR SELECT
TO service_role
USING (true);

-- Create policy for service role to update stats
CREATE POLICY "Only service role can update stats"
ON public.usage_stats
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

-- Create policy for service role to insert stats
CREATE POLICY "Only service role can insert stats"
ON public.usage_stats
FOR INSERT
TO service_role
WITH CHECK (true);