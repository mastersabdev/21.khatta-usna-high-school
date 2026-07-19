export const hasWelcomeSpeechData = (data) =>
  Boolean(
    data?.name?.trim() && data?.speech?.trim() && data?.image_url?.trim()
  );
