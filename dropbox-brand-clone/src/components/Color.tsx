import React from 'react';

const Color: React.FC = () => {
    return (
        <div>
            <h1>Brand Colors</h1>
            <div>
                <h2>Primary Colors</h2>
                <div style={{ backgroundColor: '#007EE5', padding: '10px', color: '#FFFFFF' }}>
                    <p>Blue - #007EE5</p>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '10px', color: '#000000' }}>
                    <p>White - #FFFFFF</p>
                </div>
            </div>
            <div>
                <h2>Secondary Colors</h2>
                <div style={{ backgroundColor: '#F4F4F4', padding: '10px', color: '#000000' }}>
                    <p>Light Gray - #F4F4F4</p>
                </div>
                <div style={{ backgroundColor: '#A0A0A0', padding: '10px', color: '#FFFFFF' }}>
                    <p>Gray - #A0A0A0</p>
                </div>
            </div>
            <div>
                <h2>Usage Guidelines</h2>
                <p>Use primary colors for call-to-action buttons and important elements. Secondary colors can be used for backgrounds and less prominent elements.</p>
            </div>
        </div>
    );
};

export default Color;