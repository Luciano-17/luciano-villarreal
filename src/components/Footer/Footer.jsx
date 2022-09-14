import './Footer.css';

const Footer = () => {
    const fecha = new Date();
    const year = fecha.getFullYear('Y');

    return (
        <>
            <footer id='footer' className='text-center p-2'>
                <div className="container">
                    <p>
                        Luciano Villarreal | &copy; Todos los derechos reservados {year}
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer