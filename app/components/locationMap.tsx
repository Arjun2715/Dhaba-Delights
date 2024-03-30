import React from 'react';

export default function AddressMap(){
    return (
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d299399.11135053955!2d-0.021668943998047873!3d51.60227391373084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b1a0b7414329%3A0x1990908601e30626!2s8%20Hardy%20Grove%2C%20Dartford%20DA1%205NU%2C%20UK!5e0!3m2!1sen!2ses!4v1710018194811!5m2!1sen!2ses"
                // width="600"
                // height="450" 
                className='w-full h-[500px] rounded-lg'
                style={{ border: 0 }} 
                aria-hidden="false" 
            />
        </div>
    );
}; 