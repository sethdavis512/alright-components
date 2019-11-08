import React, { useState } from 'react';
import InputText from 'alright-components/InputText';

function ExampleInputText() {
    const [name, setName] = useState('');
    return (
        <InputText
            label="Your Name:"
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
    );
}

export default ExampleInputText;