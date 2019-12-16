import { createSelector } from 'reselect';

const selectStory = createSelector((state) => state.storyEditor);

export {
    selectStory
}