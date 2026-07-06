import { SignJWT, jwtVerify } from "jose";

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length === 0) {
    throw new Error("The environment variable JWT_SECRET is not set.");
  }
  return new TextEncoder().encode(secret);
};

export async function verifyAuth(token: string) {
  try {
    const verified = await jwtVerify(token, getJwtSecretKey());
    return verified.payload;
  } catch (err) {
    return null;
  }
}

export async function createAuthToken(payload: any) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h") // Token expires in 24 hours
    .sign(getJwtSecretKey());
  return token;
}

import { cookies } from "next/headers";
export async function authenticateServerAction() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) throw new Error("Unauthorized");
  const verified = await verifyAuth(token);
  if (!verified) throw new Error("Unauthorized");
}
