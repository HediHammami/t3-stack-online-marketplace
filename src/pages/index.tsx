import { SignInButton, SignOutButton, SignedOut, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const user = useUser();
   
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="flex items-center justify-center">
        {user.isSignedIn ? (
          <SignOutButton>Sign me out</SignOutButton>
          
        ) : (
          <SignInButton>Sign me in</SignInButton>
        )}
      </main>
    </>
  );
};

export default Home;
