import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
              <h1>heello this is fixed content</h1>
              
              <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;