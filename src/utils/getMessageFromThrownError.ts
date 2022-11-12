const getMessageFromThrownError = (e: unknown) => {
  if (!e) return;
  return e instanceof Error ? e?.message : typeof e === "string" ? e : null;
};

export default getMessageFromThrownError;
