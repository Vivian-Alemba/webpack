const doSomething=require("do-something")

module.exports=function(source){
    const newSource=doSomethingToSource(source)
    return newSource
}