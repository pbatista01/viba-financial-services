import logo from "../assets/LogoViba3.png"

function Navbar(){
    return (
        <header className="px-6 pt-6 flex justify-between items-center">
            <img
                src={logo}
                alt="ViBa Financial Services"
                className="h-[76px]"
            />
            <button className="flex flex-col justify-between h-6 w-6 pr-8 cursor">
                <span className="block w-8 h-1 bg-dark rounded"></span>
                <span className="block w-8 h-1 bg-dark rounded"></span>
                <span className="block w-8 h-1 bg-dark rounded"></span>
            </button>
        
        </header>

    );
}

export default Navbar;