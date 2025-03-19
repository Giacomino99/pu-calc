import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from '/imports/ui/Header';
import { Sizing } from '/imports/ui/Sizing';

Meteor.startup(() => {
    const container = document.getElementById('react-target');
    const root = createRoot(container);
    root.render(
        <Router>
            <Header />
            <Routes>
                <Route path='/sizing' element={<Sizing />} />
            </Routes>
        </Router>
    );
});
