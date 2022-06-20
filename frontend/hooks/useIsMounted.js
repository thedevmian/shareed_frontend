import React, { useEffect, useState } from 'react';


export function useIsMounted() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    
        return () => {
            setMounted(false);
        }
    });

    return mounted;
}

