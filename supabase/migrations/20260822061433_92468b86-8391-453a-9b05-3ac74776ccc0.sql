CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nickname TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.chat_messages TO anon;
GRANT SELECT, INSERT ON public.chat_messages TO authenticated;
GRANT ALL ON public.chat_messages TO service_role;

ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read chat messages"
  ON public.chat_messages FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can post chat messages"
  ON public.chat_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(btrim(nickname)) BETWEEN 1 AND 24
    AND length(btrim(body)) BETWEEN 1 AND 300
  );

CREATE INDEX chat_messages_created_at_idx ON public.chat_messages (created_at DESC);

ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_messages;