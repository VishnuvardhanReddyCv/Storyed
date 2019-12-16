export function getContentChangeAction(content) {
    return {
        type : "UPDATE_STORY_DRAFT_CONTENT",
        content,
    }
} 

export function getTitleChangeAction(title) {
    return {
        type : "UPDATE_STORY_DRAFT_TITLE",
        title,
    }
} 