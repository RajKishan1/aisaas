import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import google from "@auth/core/providers/google";
export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [google, Password],
});
