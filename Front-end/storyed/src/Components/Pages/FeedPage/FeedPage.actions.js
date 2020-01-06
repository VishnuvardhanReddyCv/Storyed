export function getUpdateFeedAction(feed){
    return {
        type : "UPDATE_FEED_DATA",
        upcomingFeed : feed
    }
}

export function getGetFeedAction(){
    return {
        type : "GET_FEED"
    }
}