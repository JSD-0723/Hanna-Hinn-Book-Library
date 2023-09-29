import passport from "passport";

export const authenticateJWT = () => {
  return passport.authenticate("jwt", { session: false });
};
