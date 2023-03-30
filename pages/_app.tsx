import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import Layout from "@/components/Layout";
import LoginModals from "@/components/modals/LoginModals";
import RegisterModal from "@/components/modals/RegisterModal";

import "@/styles/globals.css";
import EditModal from "@/components/modals/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <EditModal />
      <RegisterModal />
      <LoginModals />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
