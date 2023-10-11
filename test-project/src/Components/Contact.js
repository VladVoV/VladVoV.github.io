import React, { useState } from 'react';
import '../Styles/Contact.css'; // Import your CSS file

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        contactMethod: 'email',
        email: '',
        telegram: '',
        whatsapp: '',
        viber: '',
        comments: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleContactMethodChange = (method) => {
        setFormData((prevFormData) => ({
            ...formData,
            contactMethod: method,
        }));
    };

    const renderContactInputs = () => {
        const { contactMethod } = formData;

        if (contactMethod === 'email') {
            return (
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
            );
        } else if (contactMethod === 'telegram') {
            return (
                <div className="form-group">
                    <label>Телеграм:</label>
                    <input
                        type="text"
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleInputChange}
                    />
                </div>)
        } else if (contactMethod === 'whatsapp') {
            return (
                <div className="form-group">
                    <label>WhatsApp:</label>
                    <input
                        type="text"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                    />
                </div>)
        } else if (contactMethod === 'viber') {
            return (
                <div className="form-group">
                    <label>Viber:</label>
                    <input
                        type="text"
                        name="viber"
                        value={formData.viber}
                        onChange={handleInputChange}
                    />
                </div>)
        }
        return null;
    };

    return (
        <div className="contact-us-container">
        <div className="contact-us" id="contact-us">
                <h2>Зв'яжіться з нами</h2>
                <h3>Контакти:</h3>
                <ul>
                    <li>Email: your-email@example.com</li>
                    <li>Telegram: @your-telegram-nick</li>
                    <li>WhatsApp: +123456789</li>
                    <li>Viber: +987654321</li>
                </ul>

                <h3>Форма зворотнього зв'язку</h3>
                <div className="contact-methods">
                    <label>
                        <input
                            type="radio"
                            name="contactMethod"
                            value="email"
                            checked={formData.contactMethod === 'email'}
                            onChange={() => handleContactMethodChange('email')}
                        />
                        Email
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="contactMethod"
                            value="telegram"
                            checked={formData.contactMethod === 'telegram'}
                            onChange={() => handleContactMethodChange('telegram')}
                        />
                        Telegram
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="contactMethod"
                            value="whatsapp"
                            checked={formData.contactMethod === 'whatsapp'}
                            onChange={() => handleContactMethodChange('whatsapp')}
                        />
                        WhatsApp
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="contactMethod"
                            value="viber"
                            checked={formData.contactMethod === 'viber'}
                            onChange={() => handleContactMethodChange('viber')}
                        />
                        Viber
                    </label>
                </div>

                {renderContactInputs()}

                <div className="form-group">
                    <label>Ім'я:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Додаткове поле для тексту:</label>
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                    />
                </div>

                <button className="order-button" type="submit">Відправити</button>
            </div>
        </div>
    );
}

export default ContactUs;
