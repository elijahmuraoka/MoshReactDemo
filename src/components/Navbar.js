export default function Navbar(props) {
    const counters = props.counters;
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <span>Total Counters: {counters.length}</span>
            </div>
        </nav>
    );
}
