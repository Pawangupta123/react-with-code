import React from 'react';
import { Children } from 'react';

function Container({children}){
    return <div className=' w-full max-w-7xl max-auto pd-4'>{children}</div>;
    
    
}
export default Container