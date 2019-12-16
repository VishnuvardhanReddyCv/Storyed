import { postData } from "../../../api";

export async function postStory(story) {
  try {
    const data = await postData("/stories/post", story);
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }
}
