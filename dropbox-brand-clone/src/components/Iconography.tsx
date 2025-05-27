import React from 'react';

const Iconography: React.FC = () => {
    return (
        <div>
            <h2>Iconography</h2>
            <p>Here are the icons used in our brand:</p>
            <ul>
                <li>
                    <img src="/path/to/icon1.svg" alt="Icon 1" />
                    <p>Icon 1 Description</p>
                </li>
                <li>
                    <img src="/path/to/icon2.svg" alt="Icon 2" />
                    <p>Icon 2 Description</p>
                </li>
                <li>
                    <img src="/path/to/icon3.svg" alt="Icon 3" />
                    <p>Icon 3 Description</p>
                </li>
                {/* Add more icons as needed */}
            </ul>
        </div>
    );
};

export default Iconography;