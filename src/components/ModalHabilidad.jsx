import '../styles/habilidades.css';

const ModalHabilidad = ({modal, setModal, nombre, nivel}) => {


    return (
        <div id="modalHabilidad" className='modal' style={{display: modal ? 'flex' : 'none'}}>
            <div className='modal-content'>
                <div className="modal-header">
                    <h3>{nombre}</h3>

                    <span className='modal-close' onClick={() => setModal(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div>

                <div className="modal-body">
                    <p>Nivel de esta tecnología:</p>
                    <div className={`nivel ${nivel}`}>
                        <span>{nivel}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalHabilidad