// higher order function or call backs functions
// higher order function or call backs function are those function in some function we pass argumernt the function is called call back function

function userData (a){
    a
}
userData(function(){
    console.log('hi to see you!');
});

function funOne (a){
    a()
};
function funTwo (){
    console.log("hello");
};
funOne(funTwo);
