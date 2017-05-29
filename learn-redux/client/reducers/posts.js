//a reducer takes in two things


//1.  the action (info about what happened)
//2 copy of current state

//actin, store
//let me process
// return the updated store

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}


export default posts;
