import React from "react";
import '../Styles/Why-us.css'

const advantagesData = [
    {
        icon: '1',
        title: 'Перевага 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aut, blanditiis consectetur cum dicta dolor eius, error esse est expedita fugiat hic ipsam magni maxime numquam officia placeat possimus quae quaerat quas quia quo recusandae similique tempora temporibus totam veritatis! Fugiat illum molestiae nam obcaecati reiciendis soluta veritatis vero.',
    },
    {
        icon: '2',
        title: 'Перевага 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aut, blanditiis consectetur cum dicta dolor eius, error esse est expedita fugiat hic ipsam magni maxime numquam officia placeat possimus quae quaerat quas quia quo recusandae similique tempora temporibus totam veritatis! Fugiat illum molestiae nam obcaecati reiciendis soluta veritatis vero.',
    },
    {
        icon: '3',
        title: 'Перевага 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aut, blanditiis consectetur cum dicta dolor eius, error esse est expedita fugiat hic ipsam magni maxime numquam officia placeat possimus quae quaerat quas quia quo recusandae similique tempora temporibus totam veritatis! Fugiat illum molestiae nam obcaecati reiciendis soluta veritatis vero.',
    },
    {
        icon: '4',
        title: 'Перевага 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aut, blanditiis consectetur cum dicta dolor eius, error esse est expedita fugiat hic ipsam magni maxime numquam officia placeat possimus quae quaerat quas quia quo recusandae similique tempora temporibus totam veritatis! Fugiat illum molestiae nam obcaecati reiciendis soluta veritatis vero.',
    },
    {
        icon: '5',
        title: 'Перевага 5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aut, blanditiis consectetur cum dicta dolor eius, error esse est expedita fugiat hic ipsam magni maxime numquam officia placeat possimus quae quaerat quas quia quo recusandae similique tempora temporibus totam veritatis! Fugiat illum molestiae nam obcaecati reiciendis soluta veritatis vero.',
    },
    {
        icon: '6',
        title: 'Перевага 6',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aut, blanditiis consectetur cum dicta dolor eius, error esse est expedita fugiat hic ipsam magni maxime numquam officia placeat possimus quae quaerat quas quia quo recusandae similique tempora temporibus totam veritatis! Fugiat illum molestiae nam obcaecati reiciendis soluta veritatis vero.',
    },
];

const WhyUs = () => {
    return (
        <div className="why-us-container">
            <h2 className="why-us-text" id="why-us">Why us</h2>
            <section className="advantages">
                {advantagesData.map((advantage, index) => (
                    <div className="advantage" key={index}>
                        <div className="icon">{advantage.icon}</div>
                        <h2>{advantage.title}</h2>
                        <p>{advantage.text}</p>
                        <button className="order-button">Замовити</button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default WhyUs;
