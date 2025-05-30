
const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    //do anything
    if(hasMeeting){
        const meetingDetails = {
            name :"technical meeting",
            location : "meet",
            time : '10:00 PM'
        }
        resolve(meetingDetails);
    }
    reject(new error('no meeting '))
});

// const addToCalendar = (meetingDetails) =>{
//      return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been sceduled on ${meetingDetails.location} at ${meetingDetails.time}`
//         resolve(calendar)
//      })}

const addToCalendar = (meetingDetails) =>{
      
        const calendar = `${meetingDetails.name} has been sceduled on ${meetingDetails.location} at ${meetingDetails.time}`;
       return Promise.resolve(calendar)
    }

meeting
.then(addToCalendar)
.then((res) => {
    //resolve data
    console.log(res)
})
.catch((err)=>{
    //error data
    console.log(err)
})