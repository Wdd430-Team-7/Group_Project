"use client";
import { createStory } from "@/app/lib/actions";

export default function CreateStoryForm({ artist_id }: { artist_id: string }) {
  return (
    <form action={createStory} className="p-4 flex flex-col gap-4 rounded-md">
      <p className="font-bold">Share a new story:</p>
      <label htmlFor="story_content">
        <textarea
          name="story_content"
          id="story_content"
          rows={3}
          className="w-full rounded-md p-2"
          placeholder="What is on your mind?"
          required
        ></textarea>
      </label>
      <input
        type="submit"
        value="Post"
        className="text-black px-4 py-2 bg-amber-500 hover:bg-green-500 rounded-md w-fit self-center"
      />
      <input type="hidden" name="artist_id" value={artist_id} />
    </form>
  );
}
