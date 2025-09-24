import { getCollections } from '@/lib/contentful/fetch';
import CollectionListItem from '@/components/CollectionListItem';
import Header from '@/components/Header';

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <>
      <Header />
      <section className='mx-auto w-full'>
        <div className='space-y-4'>
          {collections.map((collection) => (
            <CollectionListItem key={collection.id} {...collection} />
          ))}
        </div>
      </section>
    </>
  );
}
