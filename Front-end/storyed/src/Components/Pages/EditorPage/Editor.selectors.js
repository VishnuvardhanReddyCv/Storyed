import { createSelector } from 'reselect';

const selectStory = createSelector((state) => state.editor);

export {
    selectStory
}