import update from "immutability-helper";

const initialState = {
  title: "",
  content: ""
};

export const storyEditor = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "UPDATE_STORY_DRAFT_CONTENT":
      newState = update(state, {
        content: { $set: action.content }
      });
      return newState;
    case "UPDATE_STORY_DRAFT_TITLE":
      newState = update(state, {
        title: { $set: action.title }
      });
      return newState;
  }
};
