"use client";
import { createStory } from "@/app/lib/actions";
import { useFormState } from "react-dom";

export default function CreateStoryForm({ artist_id }: { artist_id: string }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createStory, initialState);
  return (
    <form action={dispatch} className="p-4 flex flex-col gap-4 rounded-md">
      <p className="font-bold">Share a new story:</p>
      <label htmlFor="story_content">
        <textarea
          name="story_content"
          id="story_content"
          rows={3}
          className="w-full rounded-md p-2"
          placeholder="What's on your mind?"
          aria-describedby="content-error"
        ></textarea>
      </label>
      <div id="content-error" aria-live="polite" aria-atomic="true">
        {state.errors?.story_content &&
          state.errors.story_content.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <input
        type="submit"
        value="Post"
        className="text-black px-4 py-2 bg-amber-500 hover:bg-green-500 rounded-md w-fit self-center"
      />
      <input type="hidden" name="artist_id" value={artist_id} />
    </form>
  );
}
