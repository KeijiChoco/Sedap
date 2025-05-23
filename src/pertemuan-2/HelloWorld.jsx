export default function HelloWorld(){
    const propsUserCard = {
        nama: "Bert",
        nim: "2355301012",
        tanggal: "2090-12-12"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama="Albert"
                nim="2355301012"
                tanggal={new Date().toLocaleDateString()}
            />
            <UserCard {...propsUserCard}/>

            <img src="img/Kucing.png" alt="logo"/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari binjai</small>
    )
}

function QuoteText(){
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return(
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}