import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";
// @ts-expect-error "YES"
import uniqid from "uniqid";

export const UploadProduct = async (form: FormData, router: any) => {
  try {
    const user = await supabase.auth.getSession();
    console.log(user);

    const category = form.get("category");
    const size = form.get("size");
    const brand = form.get("brand");
    const condition = form.get("condition");
    const title = form.get("title");
    const price = form.get("price");
    const description = form.get("description");
    const defect = form.get("defect");
    const userId = form.get("userId");
    const uniqueID = uniqid();
    const uploadedPaths: string[] = [];
    const files = form.getAll("file") as File[];
console.log("Files received:", files);

if (!files || files.length === 0) {
  toast.error("No files received.");
  return;
}

files.forEach((file, i) => {
  console.log(`File ${i}:`, file.name, file.type, file.size);
});


    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const { data, error } = await supabase.storage
        .from("product-image")
        .upload(`${userId}/${file.name}-${uniqueID}-${i}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        toast.error(`Failed to upload ${file.name}: ${error.message}`);
        return;
      }

      uploadedPaths.push(data?.fullPath);
    }

    const image_urls = {
      primary: uploadedPaths,
    };

    const { data: insertedData, error: insertError } = await supabase
      .from("products")
      .insert({
        'title':title, 
        'brand':brand, 
        'price':price, 
        'description':description, 
        'condition': condition, 
        'image_urls': image_urls, 
        'size':size,
        'defect': defect, 
        'category':category,
        'seller':userId,
        'current_price': price
      })
      .single();
      

    if (insertError) {
      console.error("Insert error:", insertError.message);
      toast.error("Product not uploaded.");
    } else {
      toast.success("Product uploaded successfully!");
      router.push("/my-uploads");
      return insertedData;
    }
  } catch (error) {
    console.log("Unexpected error:", error);
    toast.error("Something went wrong.");
  }
};
