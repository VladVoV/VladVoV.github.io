import React, { useState } from 'react';
import '../Styles/Services.css';

function Services() {
    const [selectedButton, setSelectedButton] = useState({
        title: 'Button 1',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aut, blanditiis consectetur cum dicta dolor eius, error esse est expedita fugiat hic ipsam magni maxime numquam officia placeat possimus quae quaerat quas quia quo recusandae similique tempora temporibus totam veritatis! Fugiat illum molestiae nam obcaecati reiciendis soluta veritatis vero.',
    });

    const buttons = [
        { id: 1, title: 'Service 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a pulvinar dui. Etiam faucibus sem id feugiat feugiat. Morbi porta tristique odio ut blandit. Mauris sagittis, neque sit amet tempor placerat, massa arcu ultricies lectus, venenatis convallis sapien ipsum in mauris. Integer pretium nunc tellus, in mattis augue tristique nec. Phasellus ligula turpis, auctor et tellus quis, tincidunt commodo velit. In aliquam ornare tempus.' },
        { id: 2, title: 'Service 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aut, blanditiis consectetur cum dicta dolor eius, error esse est expedita fugiat hic ipsam magni maxime numquam officia placeat possimus quae quaerat quas quia quo recusandae similique tempora temporibus totam veritatis! Fugiat illum molestiae nam obcaecati reiciendis soluta veritatis vero.' },
        { id: 3, title: 'Service 3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a pulvinar dui. Etiam faucibus sem id feugiat feugiat. Morbi porta tristique odio ut blandit. Mauris sagittis, neque sit amet tempor placerat, massa arcu ultricies lectus, venenatis convallis sapien ipsum in mauris. Integer pretium nunc tellus, in mattis augue tristique nec. Phasellus ligula turpis, auctor et tellus quis, tincidunt commodo velit. In aliquam ornare tempus.' },
        { id: 4, title: 'Service 4', text: 'Proin porttitor euismod mauris. Donec nisl metus, elementum non nulla eget, tempus lobortis enim. Nulla luctus porta suscipit. Suspendisse venenatis erat eget mattis dapibus. Integer lobortis, neque id imperdiet consequat, magna mi tincidunt dui, non malesuada leo dolor a ligula. Nulla in fringilla ex. Donec ac lectus sed massa semper laoreet eget ac velit.' },
        { id: 5, title: 'Service 5', text: 'Praesent facilisis sed nulla et elementum. Nullam ullamcorper, turpis non condimentum malesuada, libero nisl vulputate dolor, non ultrices tortor massa non diam. Sed porttitor, libero eu blandit bibendum, ligula elit luctus lectus, et euismod ex metus eget arcu. Nunc elit augue, ultrices ac fringilla vel, pellentesque nec nisi. Nam vel ex in ex feugiat egestas sit amet sed tellus. Vivamus vel dignissim risus, quis ultricies urna. Sed dictum libero pellentesque urna tristique, sed commodo nunc aliquet.' },
        { id: 6, title: 'Service 6', text: 'Curabitur gravida justo et tellus convallis, at finibus nunc bibendum. Nulla nisl purus, eleifend non tincidunt sed, consequat sit amet lectus. Fusce leo dolor, gravida quis mauris sed, semper tempor quam. Proin varius vel ex nec sodales. Mauris rhoncus condimentum vulputate. Sed eget gravida orci. Nunc ultrices, ex vel dictum fermentum, ipsum metus bibendum enim, vitae fermentum augue augue nec felis. Cras dapibus tortor purus, non consequat libero luctus a.' },
    ];

    const handleButtonClick = (button) => {
        setSelectedButton({ title: button.title, text: button.text });
    };

    return (
        <div className="services-container">
            <div className="container" id="services">
                <div className="button-row">
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => handleButtonClick(button)}
                            className={selectedButton.title === button.title ? 'selected' : ''}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>
                <div className="scroller">
                    <h2>{selectedButton.title}</h2>
                    <p>{selectedButton.text}</p>
                    <button className={'service-button'}>Хочу</button>
                </div>
            </div>
        </div>
    );
}

export default Services;
