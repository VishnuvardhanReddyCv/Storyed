import update from "immutability-helper";

export function FeedReducer(state = [],action) {

    let newState = state;
    switch(action.type) {
        case "UPDATE_FEED_DATA" :
            newState = update(state, {$push: action.upcomingFeed});
            return newState;
        default :
            return state;
    }

}