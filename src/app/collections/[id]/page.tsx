import React from "react";
import { products } from "@/data/product";
import "./styles.css";
import { Props } from "@/app/types/types";
import ClientProductDetails from "../../components/ClientProductDetails";

export async function generateMetadata({ params }: Props) {
  const product_id = parseInt((await params).productId, 10);
  const product = products.find((prod) => prod.id === product_id);
  return product ? product.name : "Lorentia | product details";
}

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  return <ClientProductDetails params={await params} />;
};

export default DetailPage;
