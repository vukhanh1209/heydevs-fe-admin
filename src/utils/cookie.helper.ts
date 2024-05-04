export function setCookie(name: string, value: string) {
  const encodedName = encodeURIComponent(name);
  const encodedValue = encodeURIComponent(value);
  const cookieString = `${encodedName}=${encodedValue}`;
  document.cookie = cookieString;
}

export function getCookie(name: string) {
  const decodedName = decodeURIComponent(name);
  const cookiesString = typeof window === "object" ? document.cookie : "";
  const cookiesArray = cookiesString.split(";");
  for (const cookie of cookiesArray) {
    const [key, value] = cookie.split("=");
    if (key.trim() === decodedName) {
      return decodeURIComponent(value.trim());
    }
  }
  return "";
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
