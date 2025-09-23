import { getStories } from '@/contentful/fetch';
import StoryListItem from '@/components/StoryListItem';
import Search from '@/components/Search';
import Header from '@/components/Header';

export default async function StoriesPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const {query} = await searchParams;
  const stories = await getStories(query || '');

  return (
    <>
    <Header />
    <section className="mx-auto">
      <Search />
      <div className="space-y-4">
        {stories.map((story) => (
          <StoryListItem key={story.sys.id} {...story.fields} />
        ))}
      </div>
    </section>
    </>
  );
}