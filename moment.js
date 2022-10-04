var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString('en-US', {
    day: 'numeric',
    month: 'short',
    years: 'numeric'
});
var currentHour = date
//var today = moment();
//$("#currentDay").text(today.format("dddd MMMM, YYYY"));







document.getElementById('currentDay').innerText = time
//check how I did this with moment just for project sake 
//so may need to delete var date and var time 

hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

var container = document.querySelector('.container')

for (let index = 0; index < hours.length; index++) { 
    var outerDiv = document.createElement('div')
    outerDiv.classList.add('row', 'time-block')
    outerDiv.innerHTML = `<div class="col-md-1 hour">${getTimeLabel(hours[index])}</div>
    <textarea class="col-md-10 description ${getColorClass(hours[index])}"></textarea>
    <button class="ol-md-1 saveBtn btns" data-hour=${hours[index]}/>
        <i class=" fas fa-save "></i> 
    </button>`
    container.append(outerDiv)

}

var buttonsArray = document.querySelectorAll('.btns')
buttonsArray.forEach(function(button){
    button.addEventListener('click', function(event){
        var hour = event.currentTarget.dataset.hours
        var text = event.currentTarget.parentElement.children[1].value
        localStorage.setItem(hour, text)    
        
    })
})

function getColorClass(hour){
    if (hour < currentHour) return "past"
    else if (hour == currentHour) return "present"
    else return "future"
}

function getTimeLabel(hour) {

    switch (hour) {
        case 9:
            return '9 AM'


        case 10:
            return '10 AM' 
            
        case 11:
            return '11 AM'    
        
        case 12:
            return '12 PM'
                
        case 13:
            return '1 PM'
            
        case 14:
            return '2 PM'
        
        case 15:
            return '3 PM'
        
        case 16:
            return '4 PM'
        
        case 17: 
            return '5 PM'    
    }
}

















