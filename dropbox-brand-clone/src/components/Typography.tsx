import React from 'react';

const Typography: React.FC = () => {
    return (
        <div>
            <h1>Typography Guidelines</h1>
            <h2>Headings</h2>
            <p>Use the following styles for headings:</p>
            <ul>
                <li><strong>H1:</strong> 32px, Bold</li>
                <li><strong>H2:</strong> 24px, Semi-Bold</li>
                <li><strong>H3:</strong> 20px, Medium</li>
            </ul>
            <h2>Body Text</h2>
            <p>Use the following styles for body text:</p>
            <ul>
                <li><strong>Body Large:</strong> 16px, Regular</li>
                <li><strong>Body Small:</strong> 14px, Regular</li>
            </ul>
            <h2>Font Family</h2>
            <p>The primary font family is <em>Helvetica Neue</em>, with fallback to <em>Arial</em> and <em>sans-serif</em>.</p>
        </div>
    );
};

export default Typography;