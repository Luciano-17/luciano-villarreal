const Proyecto = ({imagen, alt, cardTitle, badges, cardText, github, link}) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card shadow">
                    <img src={imagen} className="card-img-top" alt={alt}/>

                    <div className="card-body">
                        <h5 className="card-title mb-0">{cardTitle}</h5>
                        {/* <span className="badge rounded-pill bg-danger">HTML</span>
                        <span className="badge rounded-pill bg-primary ms-1">CSS</span> */}
                        {badges}
                        <p className="card-text mt-4">{cardText}</p>
                    </div>

                    <div className="card-body text-center">
                        <div className="row">
                            <div className="col-6">
                                <a href={github} target="_blank" className="btn btn-secondary w-100">GitHub</a>
                            </div>

                            <div className="col-6">
                                <a href={link} target="_blank" className="btn btn-second d-block w-100">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyecto