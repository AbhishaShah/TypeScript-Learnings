//1. Combine existing Properties using &

type cardNumber = {
    cardNo: Number;
}

type cardDate = {
    carddate : Date;
}

type cardDetails = cardNumber & cardDate;


export {} // Temporary to remove ts error.