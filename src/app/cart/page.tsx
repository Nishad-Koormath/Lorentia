import type { Metadata } from "next";
import ClientCartPage from "../components/ClientCartPage";

export const metadata: Metadata = {
  title: "Lorentia | Cart",
};

export default function CartPage() {
  return <ClientCartPage />;
}
