// Get the elements in variables
var days = document.getElementById("workingDayInput"),
    modal = document.getElementById("resultModal");

// Constant values
const zeroDay = 0, 
      aPenny = 1,
      ASCIIZero = 48,
      ASCIINine = 57,
      convertToDollor = 100.0,
      multiplyBy = 2,
      maximumDays = 30;

function calculatePenny(){
    if((days.value > 0) || (days.value != ""))
    {
        let pennyPerDay=1, 
            salary=0,  
            day = 1;

        for(;day<=days.value;){    
            salary += pennyPerDay;                 
            $('.modal-content ul').append('<li> Day - ' + day++ + " $" + (day == zeroDay ? aPenny : (pennyPerDay/convertToDollor)) +'</li>');
            pennyPerDay *=multiplyBy   
        }
        $('.modal-footer span').append('Total $' +  (salary/convertToDollor) +' for '+ (day-1)+' days.');        
    }
    else{
        $('.modal-content ul').append('Please add days to count the pay.');
    }
}

function IsNumeric(event) {
    var charCode = (event.which) ? event.which : event.keyCode
    if ((charCode < ASCIIZero || charCode > ASCIINine)) {
        return false;
    } else {
        return true;
    }
}

function reset(){
    window.location.reload();
}
