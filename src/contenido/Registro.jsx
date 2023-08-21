import React, { useState } from 'react';

const Registro = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const [submittedData, setSubmittedData] = useState(null);
    
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        let validationErrors = {};
    
        if (formData.name.trim() === '') {
          validationErrors.name = 'El nombre es obligatorio';
        }
    
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
          validationErrors.email = 'Ingrese un correo electrónico válido';
        }
    
        if (formData.password.length < 6) {
          validationErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          setSubmittedData(null);
        } else {
          setSubmittedData(formData);
        }
      };
    
      return (
        <div className="registration-form">
          <h2>Formulario de Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit">Registrarse</button>
          </form>
    
          {submittedData && (
            <div className="submitted-data">
              <h3>Datos ingresados:</h3>
              <p>Nombre: {submittedData.name}</p>
              <p>Correo Electrónico: {submittedData.email}</p>
              <p>Contraseña: {submittedData.password}</p>
            </div>
          )}
        </div>
      );
    };
export default Registro;