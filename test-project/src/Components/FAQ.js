import React, { useState } from 'react';
import '../Styles/FAQ.css'

const FAQBlock = () => {
    const [faqItems, setFAQItems] = useState([
        {
            question: "What is the purpose of this website?",
            answer: "This website is designed to provide information and services to our customers.",
            isOpen: false,
        },
        {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Sign Up' button and follow the registration process.",
            isOpen: false,
        },
        {
            question: "Is my data secure on this platform?",
            answer: "Yes, we take security seriously and employ various measures to protect your data.",
            isOpen: false,
        },
        {
            question: "Can I change my password?",
            answer: "Yes, you can change your password in your account settings.",
            isOpen: false,
        },
    ]);

    const toggleAnswer = (index) => {
        const updatedFAQ = [...faqItems];
        updatedFAQ[index].isOpen = !updatedFAQ[index].isOpen;
        setFAQItems(updatedFAQ);
    };

    return (
        <div className="faq-block">
            <h2 id="FAQ">FAQ</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <strong className="faq-question" onClick={() => toggleAnswer(index)}>
                            {item.question}
                        </strong>
                        {item.isOpen && <p className="faq-answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQBlock;
