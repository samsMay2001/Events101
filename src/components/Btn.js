// function Btn(){
//     const clickHandler = ()=> {
//         console.log('clicked!') // logs mouse clicked when btn is clicked
//     }
//     return(
//         <div>
//             <button onClick={clickHandler}>Click me</button>
//         </div>
//     ); 
// }

// export default Btn; 

function Btn(){
    const clickHandler = ()=> {
        console.log('mouse over') // logs mouse hover when mouse hovers
    }
    return(
        <div>
            <button onMouseOver={clickHandler}>Click me</button> 
        </div>
    ); 
}
export default Btn; 