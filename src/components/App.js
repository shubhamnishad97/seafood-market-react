import React from 'react';
import Header from './Header.js';

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
            </div>
        );
    }
}

export default App;
