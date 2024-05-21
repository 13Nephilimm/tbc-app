import * as jose from "jose";
import * as bcrypt from "bcrypt";

export const createJWT = async (user: {
  username: string;
  email: string;
  id: number;
  role: string;
}): Promise<string> => {
  const jwt = await new jose.SignJWT({
    ...user,
  })
    .setProtectedHeader({
      alg: process.env.JWT_ALGORITHM as string,
    })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME as string)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  return jwt;
};

export const validateJWT = async (token: string) => {
  const { payload } = await jose.jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET),
    {
      issuer: "urn:example:issuer",
      audience: "urn:example:audience",
    }
  );
  return payload;
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
