import { supabase } from "./supabase";
import * as AuthSession from "expo-auth-session";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

export const googleAuth = async () => {
  try {
    const redirectUri = AuthSession.makeRedirectUri();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: redirectUri },
    });

    if (error || !data.url) throw new Error("Failed to get Google sign-in URL");

    const browserResult = await openAuthSessionAsync(
        data.url,
        redirectUri
    );

    if (browserResult.type !== "success") {
      throw new Error("Google sign-in canceled or failed");
    }

    const url = new URL(browserResult.url);
    const accessToken = url.searchParams.get("access_token");
    if (!accessToken) throw new Error("Failed to retrieve access token");

    const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: url.searchParams.get("refresh_token") || "",
    });

    if (sessionError || !sessionData.session) {
      throw new Error("Failed to create session");
    }

    return true; 
  } catch (error) {
    console.error("Google Auth Error:", error);
    return false;
  }
};
