import { getAllProducts } from '@/actions/getAllProducts';
import { algoliasearch } from 'algoliasearch';
const client = algoliasearch('AE1LGFUMZI', 'b648acc6405916ebfc83a94e08fc5fa7');

// Function to add or update products in Algolia
export const processRecords = async () => {
  const datasetRequest = await getAllProducts();
  const products = await datasetRequest;

  if(!products) return;
  await client.clearObjects({indexName:'products'});
  // Loop through each product and use addOrUpdateObject to either add or update the object
  for (const product of products) {
    const response = await client.addOrUpdateObject({
      indexName: 'products',
      objectID: product.product_id,
      body: {
        title: product.title,
        description: product.description,
        image_urls: product.image_urls,
        price: product.price,
        product_id:product.product_id,
        seller:product.seller,
        condition:product.condition,
        category:product.category,
        brand:product.brand,
        current_price:product.current_price,
        created_at:product.created_at,
        total_likes:product.total_likes,
        size:product.size,
        defect:product.defect,
        listed:product.listed,
        sold:product.sold,
      }
    });

  }

  return 'Records processed';
};
