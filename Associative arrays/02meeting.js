function meetingg(input) {
    let succesfulMeetings = {}

    for (const el  of input) {
        let currentElement = el.split(' ')
        let [day, name] = currentElement
        
        
        if((succesfulMeetings.hasOwnProperty(day)) == false){
            succesfulMeetings[day] = name
            console.log(`Scheduled for ${day}`)
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in succesfulMeetings) {
        console.log(`${key} -> ${succesfulMeetings[key]}`);
    }



} meetingg(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

)