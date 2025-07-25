import { getStories } from '@/contentful/fetch'
import Storycard from '@/components/Storycard'

export default async function StoriesPage() {
  const stories = await getStories()
  return (
    <section className="max-w-4xl">
      {stories.map((story) => (
        <Storycard key={story.sys.id} {...story.fields} />
      ))}
    </section>
  )
}