const Proyecto = ({imagen, imagenwebp, alt, cardTitle, badges, cardText, github, link}) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card shadow">
                    <picture>
                        <source srcSet={imagenwebp} type="type/webp" />
                        <source srcSet={imagen} type="type/jpeg" />
                        <img src={imagen} className="card-img-top" alt={alt} loading='lazy' />
                    </picture>

                    <div className="card-body">
                        <h5 className="card-title mb-0">{cardTitle}</h5>
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