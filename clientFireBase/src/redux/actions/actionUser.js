
// export function setPhone(phone,id) {
//     return { type: 'SET_PHONE', payload: phone ,id}
// }
// export function setEmail(email,id) {
//     return { type: 'SET_EMAIL', payload: email ,id}
// }
// export function setAdress(adress,id) {
//     return { type: 'SET_ADRESS', payload: adress ,id}
// }
// export function setNewUserName(name) {
//     debugger;
//     return { type: 'SET_NEW_NAME_USER', payload: name }
// }
// export function setNewPhone(phone) {
//     return { type: 'SET_NEW_PHONE', payload: phone }
// }
// export function setNewEmail(email) {
//     return { type: 'SET_NEW_EMAIL', payload: email }
// }
// export function setNewAdress(adress) {
//     return { type: 'SET_NEW_ADRESS', payload: adress }
// }
// export function addUser()
// {
//     return {type:"ADD_USER"}
// }

function convertActionTypeName(actionType){
    return actionType.replace(/([A-Z])/g,"_$1").toUpperCase()
    }
    
export  const actionUser = new Proxy(
    {},
    {
        get: function (target, prop) {
            if (target[prop] === undefined) {
                return function (arg) {
                    return{
                        type: convertActionTypeName(prop),
                        payload:arg
                    };
                };
            }
          else 
          return target[prop]
        }
    }
)