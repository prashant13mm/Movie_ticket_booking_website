const timeFormat=(minutes)=>{
    const hours=Math.floor(minutes/60);
    const minutesrem=minutes%60;
    return `${hours}h ${minutesrem}m`
}
export default timeFormat;
// card ke andar time minutes aur hours mai aa nhi rha tha isliye humne idhar lib mai aakr funciton bnaya