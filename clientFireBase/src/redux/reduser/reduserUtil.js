function convertActionTypeName(actionType){
return actionType.toLowerCase().replace(/_(\w)/g, v=>v[1].toUpperCase())
}

export default function createReduser(state, action, handelrs) {
    const key = convertActionTypeName(action.type)
    const handelr = handelrs[key]
    if (handelr) {
        handelr(state, action)
    }
}