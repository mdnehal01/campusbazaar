import getProductById from "@/actions/getProductById";
import ProductInfo from "./components/ProductInfo";

const Page = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const resolvedParams = await params;
    const productId = resolvedParams.productId;
  
    const product = await getProductById(productId);
  
    return (
        <div className="w-full h-[calc(100vh-80px)] overflow-auto">
            <ProductInfo product={product}/>
        </div>
    );
  };
  
  export default Page;
  