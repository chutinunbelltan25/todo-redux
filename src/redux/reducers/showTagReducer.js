const INTIAL_STATE = {
    tagStatus:'General'
}

function showTagReducer(showTag=INTIAL_STATE, action) {
    switch(action.type) {
        case 'SET_TAG_STATUS':
            return {
                ...showTag,
                tagStatus: action.tagvalue
            }
        default:
            return showTag
    }
}
export default showTagReducer