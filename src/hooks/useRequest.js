export async function useLogin(fields) {
  const { username, password } = fields;
  const data = "";

  const results = await fetch("", data);
  return results;
}
