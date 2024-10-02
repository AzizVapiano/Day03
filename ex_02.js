function findHousing (housingToFind, housingList){ 
    let a=0
      while (a < housingList.length){
        if (housingToFind.toLowerCase() === housingList[a].toLowerCase()) {
            return [a,housingList[a]]
        }
        
        
        a++
        }
    }


//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")