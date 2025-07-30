import { getStories } from '@/contentful/fetch';
import Storycard from '@/components/Storycard';
import Search from '@/components/Search';

export default async function StoriesPage({ searchParams }: { searchParams: { query?: string } }) {
  const {query} = await searchParams;
  const stories = await getStories(query || '');

  return (
    <section className="max-w-4xl mx-auto p-4">
      <Search />
      <div className="mt-6 space-y-4">
        {stories.map((story) => (
          <Storycard key={story.sys.id} {...story.fields} />
        ))}
      </div>
    </section>
  );
}