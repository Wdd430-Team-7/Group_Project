
import {fetchCategories} from '../lib/online-data';

// api/products.tsx
export const getServerSideProps = async () => {
  const data = await fetchCategories();
  
  // console.log(data);
  return {
      props: { categories: data }
  };
};

