import EditProductForm from '@/app/ui/dashboard/products/edit-form';
// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchProductById, fetchCategories } from '@/app/lib/online-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Edit Product",
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [product, categories] = await Promise.all([
        fetchProductById(id),
        fetchCategories(),
    ]);

    if (!product) {
        notFound();
    }
    
    return (
        <div>
            {/* <Breadcrumbs
                breadcrumbs={[
                    {label: 'Invoices', href: '/dashboard/invoices'},
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            /> */}
            <EditProductForm product={product} categories={categories} />
        </div>
    )
}