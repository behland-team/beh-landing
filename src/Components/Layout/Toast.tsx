import React from 'react';

function Toast({message} : {message: string }) {
    return (
        <div className="border-2 border-cream-medium flex items-center relative bg-[#FEECD8] px-12 py-2 rounded-lg min-h-16">
            <p className="text-sm font-semibold">{message} </p>
        </div>
    );
}

export default Toast;