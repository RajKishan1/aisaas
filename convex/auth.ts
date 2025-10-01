import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import Google from "@auth/core/providers/Google";
export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Google, Password],
});
