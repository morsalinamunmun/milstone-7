// export default function Todo({task}){
//     return (
//         <div>
//             <li>Task: {task}</li>
//         </div>
//     )
// }

//conditional rendering 1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished Task: {task}</li>
//     }else{
//         return <li>Please finished task: {task}</li>
//     }
// }

//conditional rendering 2
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished Task: {task}</li>
//     }
//     return <li>Please finished task: {task}</li>
// }

//conditional rendering 3
// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone? 'Finished': 'Please finished task'}: {task}</li>
//     )
// }

//conditional rendering 4: &&
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

//conditional rendering 5: ||
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

//conditional rendering 6
// export default function Todo({task, isDone}){
//     let listItem;
//     if(isDone === true){
//         listItem = <li>Finished Task: {task}</li>
//     }else{
//         listItem = <li>Please finished task: {task}</li>
//     }
// }