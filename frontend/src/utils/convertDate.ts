export function convertDate({ date,flag,forDay }: { date: Date,flag?:boolean,forDay?:boolean }) {
    const parsedDate = new Date(date);
    const today = new Date();
    const formattedHours = getTime({parsedDate});
    if (
        today.getDate() === parsedDate.getDate() &&
        today.getMonth() === parsedDate.getMonth() &&
        today.getFullYear() === parsedDate.getFullYear()
    ) {
        if(flag) return `Today ${formattedHours}`;
        if(forDay) return `Today`;
        return `${formattedHours}`;
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffInDays = Math.round(Math.abs((today.getTime() - parsedDate.getTime()) / oneDay));

    if (diffInDays <= 7) {
        // Return the day of the week at hh:mm format
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[parsedDate.getDay()];

        if(flag) return `${dayOfWeek} at ${formattedHours}`;
        if(forDay) return `${dayOfWeek}`
        return `${formattedHours}`;
    }

    // Return the date in dd:mm:yy format
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    if(flag || forDay) return `${months[month]} ${formattedDay}, ${year}`;
    return `${formattedHours}`;
}

function getTime({parsedDate}:{parsedDate:Date}){
    let hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${formattedHours}:${formattedMinutes} ${ampm}`
}
