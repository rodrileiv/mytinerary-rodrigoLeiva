import Label from "./Label" 

export default function NavBarFooter() {
    let options = [
        {to: "/", title: "Home"},
        {to: "cities", title: "Cities"},
        {to: "signIn", title: "Sign In", backgroundColor: "#4F46E5", color: "white"}
    ]

    return (
        <>
            <div>
                <div>
                    <Label options={options} />
                </div>
            </div>
        </>
    )
}