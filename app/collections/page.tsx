import { getCollections } from '@/contentful/fetch';
import CollectionCard from '@/components/CollectionCard';
import Header from '@/components/Header';

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <>
    <Header />
    <section className="mx-auto w-full">
      <div className="space-y-4">
        {collections.map((collection) => (
          <CollectionCard key={collection.sys.id} {...collection.fields} />
        ))}
      </div>
    </section>
    </>
  );
}