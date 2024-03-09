import React from 'react';

export default function AddressMap(){
    return (
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.722048474034!2d-0.08068948354352018!3d51.496142636956726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034154d4d867%3A0x4ff7ff324437b937!2sMaltby%20Street%20Market!5e0!3m2!1sen!2ses!4v1709982478100!5m2!1sen!2ses"
                width="600"
                height="450" 
                style={{ border: 0 }} 
                aria-hidden="false" 
            />
        </div>
    );
}; 