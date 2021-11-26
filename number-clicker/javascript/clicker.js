var counter = 0; 
function count () { 
  counter = counter + 1 //this says that the new variable value is the old ones (zero) + 1. so every time it gets called, it adds one to the previous counter.
  document.getElementById ("counthtmltext").innerHTML = counter //this connects to html with the id name and then targets specifically the innrer html text. 
}