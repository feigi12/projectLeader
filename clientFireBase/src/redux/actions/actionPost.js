 

// function convertActionTypeName(actionType){
//     return actionType.replace(/([A-Z])/g,"_$1").toUpperCase()
//     }
    
// export  const actionPost = new Proxy(
//     {},
//     {
//         get: function (target, prop) {
//             debugger;
//             if (target[prop] === undefined) {
//                 return function (arg) {
//                     return{
//                         type: convertActionTypeName(prop),
//                         payload:arg
//                     };
//                 };
//             }
//           else 
//           return target[prop]
//         }
//     }
// )