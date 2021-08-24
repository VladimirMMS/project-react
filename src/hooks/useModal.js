import React, { useState } from 'react';


function useModal() {
    const [isOpen, setIsOpen] = useState(false);


    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    console.log(open)
    return [isOpen, open, close]
}

export default useModal;