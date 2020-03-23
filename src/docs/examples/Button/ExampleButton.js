import React from 'react';
import Button from 'alright-components/Button';

export default function ExampleButton() {
    return (
        <div>
            <Button className="is-default mr-2" text="Test 1" />
            <Button className="is-primary mr-2" text="Test 2" />
            <Button className="is-danger mr-2" text="Test 3" />
            <Button className="is-warning mr-2" text="Test 4" />
            <Button className="is-success mr-2" text="Test 5" />
            <Button className="mr-2" text="Test 6" />
        </div>
    );
}
