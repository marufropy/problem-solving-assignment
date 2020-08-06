function feetToMile(feet){
    if(feet < 0){
        return "error! length can not be negative."
    }
    else{
        var result = feet/5280;
        return result.toFixed(6);//for handling fraction input   
    }
}

var foot = 5279.99;
var mile = feetToMile(foot);
console.log(mile);


function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0 || !(Number.isInteger(chair)) || !(Number.isInteger(table)) || !(Number.isInteger(bed))){
        return "error! amount can not be negative or fraction."
    }
    else{
        var result = (chair*1) + (table*3) + (bed*5);
        return result;    
    }
}

var chair = 1;
var table = 1;
var bed = 1;
var wood = woodCalculator(chair, table, bed);
console.log(wood);


function brickCalculator(height){
    if(height < 0 || !(Number.isInteger(height))){
        return "error! height can not be negative or fraction."
    }
    else{
        if(height < 11){
            var result = (15*height)*1000;
            return result;
        }
        else if(height < 21){
            var extraHeight = height - 10;
            var result = (15*10 + 12*extraHeight)*1000;
            return result;
        }
        else{
            var extraHeight = height - 20;
            var result = (15*10 + 12*10 + 10*extraHeight)*1000;
            return result;
        }
    }
}

var height = 27;
var brickCount = brickCalculator(height);
console.log(brickCount);


function tinyFriend(friends){
    if(friends.length == 0){
        return "error! empty array given."
    }
    else{
        var result = friends[0];
        for(var i = 1; i < friends.length; i++){
            if(friends[i].length < result.length){
                result = friends[i];
            }
        }
        return result;    
    }
}

var friends = ["brad", "leonardo", "tom", "ross", "chandler", "joey", "jennifer", "megan", "emilia", "rachel", "monica", "phoebe"];
var friend = tinyFriend(friends);
console.log(friend);