//jshint eversion:6

exports.getDate=function (){
    const today= new Date();
    let currentDay=today.getDay();
    //let day="";
    const options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    return today.toLocaleDateString("en-us", options);
    
}

exports.getDay=function (){
    const today= new Date();
    let currentDay=today.getDay();
    //let day="";
    const options={
        weekday:"long",
        
    };
    return today.toLocaleDateString("en-us", options);
    
}

