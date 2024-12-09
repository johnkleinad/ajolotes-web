import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({ name: '', email: '', meetupUser: '', attendedMeetup: false });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'attendedMeetup') {
            setFormData((prevData) => ({ ...prevData, [name]: value === 'true' }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.meetupUser) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        try {
            const response = await fetch('https://ysflq8q0wf.execute-api.us-east-2.amazonaws.com/Produccion/Form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Formulario enviado. ¡Gracias!');
                setFormData({ name: '', email: '', meetupUser: '', attendedMeetup: false });
            } else {
                alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error de conexión. Por favor, inténtalo más tarde.');
        }
    };

    return (
        <div className="max-w-md mx-auto shadow-lg rounded-md mt-10">
            <h2 className="text-3xl font-bold text-center mb-4">Regístrate para obtener un lugar en nuestra posada!</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-left">
                        Nombre
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-left">
                        Correo
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Correo electrónico"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="meetupUser" className="block text-sm font-medium text-left">
                        Usuario de Meetup
                    </label>
                    <input
                        id="meetupUser"
                        name="meetupUser"
                        type="text"
                        value={formData.meetupUser}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Usuario de Meetup"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="attendedMeetup" className="block text-sm font-medium text-left">
                        ¿Has asistido a nuestros Meetups?
                    </label>
                    <select
                        id="attendedMeetup"
                        name="attendedMeetup"
                        value={formData.attendedMeetup}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Form;