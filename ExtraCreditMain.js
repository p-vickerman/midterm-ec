    function twoSmallest(array){
    
        if (array.length < 2){
            console.log(undefined)
        }
        let secondSmallest = Math.pow(200, 8)
        let smallest = Math.pow(200, 8)
    
        for (let i = 0; i < array.length; i++){
            let current = array[i];
            if(smallest>current){
                secondSmallest=smallest;
                smallest=current;
            
            }else if (array[i] > smallest && array[i] < secondSmallest){

            }
           
        }
        return [smallest, secondSmallest]
    }
