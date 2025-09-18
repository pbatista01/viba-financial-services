import logo from "../assets/LogoViba3.png"

function Navbar(){
    return (
        <header className="px-4 pt-4 flex justify-between items-center">
            <img
                src={logo}
                alt="ViBa Financial Services"
                className="h-[70px]"
            />
            <button className="flex flex-col justify-between h-5 w-6 pr-12 cursor">
                <span className="block w-7 h-[3px] bg-dark rounded"></span>
                <span className="block w-7 h-[3px] bg-dark rounded"></span>
                <span className="block w-7 h-[3px] bg-dark rounded"></span>
            </button>
        
        </header>

    );
}

export default Navbar;