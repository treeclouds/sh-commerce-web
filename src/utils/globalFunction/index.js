export const formatDate = (date, type)=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let dateObj = new Date(date);
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = ''
    if(type ==='ver2'){
        output = day  + ' '+ month  + ' ' + year;
    }else{
        output = month  + ' '+ day  + ', ' + year;
    }
    return output
}

