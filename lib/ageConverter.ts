export default function ageConverter(birthDate: string){
    const today: Date = new Date();
    const birth: Date = new Date(birthDate);

    let age: number =  today.getFullYear() - birth.getFullYear();
    const month: number = birth.getMonth() - today.getMonth();

    if(month < 0 || (month === 0 && today.getDate() <= birth.getDate())){
        return age--
    }

    return age
}