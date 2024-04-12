type Data = {
    Message:String,
    Time:String
    first:boolean
}

interface NumberState {
    number: string;
    zip: string;
}

interface InputProps {
    data: NumberState;
    setData: (value: string,name: string) => void;
}

interface ButtonInterface {
    text:string,
    disable?:boolean,
    onClick?: () => void
}

interface OtpInterface {
    data:string,
    matchOtp:()=>void,
    handleOtp:(value:string)=> void,
    onClick:()=> void
}