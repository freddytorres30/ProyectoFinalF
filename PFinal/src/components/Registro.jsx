import { useState, useEffect } from "react";
import postUsers from "../services/PostReg";
import { useNavigate } from "react-router-dom";
import getUsers from "../services/GetLogin";

function Modal({ message, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
}

function FormRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [indicator, setIndicator] = useState("none");
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [existingUsers, setExistingUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers();
                setExistingUsers(users.map(user => user.email));
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setIndicator("inline");
            return;
        }

        if (existingUsers.includes(email)) {
            setModalMessage('El correo ya está en uso. Por favor, elige otro.');
            setShowModal(true);
            return;
        }

        try {
            const data = { name, email, password };
            await postUsers(data);
            setModalMessage('Registro exitoso');
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/login');
            }, 1500);
        } catch (error) {
            setModalMessage('Error al registrar usuario');
            setShowModal(true);
            setTimeout(() => setShowModal(false), 1500);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="center">
                <div className="containerR">
                    <h2 className="reg-title">Registro</h2>

                    <form className="reg-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre de usuario</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Nombre de usuario"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Correo</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="me@example.com"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div>
                            <span id="vacios" style={{ display: indicator }} className="vacios">Completa todos los datos</span>
                        </div>
                        <button className="btn btn--reg" type="submit">
                            Registro
                        </button>
                    </form>
                </div>
            </div>

            {showModal && <Modal message={modalMessage} onClose={closeModal} />}
        </>
    );
}

export default FormRegister;
