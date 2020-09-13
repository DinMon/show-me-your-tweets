import React from 'react';
import Card from './components/card'

function App() {
    return (
        <div className="h-screen bg-gray-100">
            <section className="max-w-screen-lg mx-auto pt-20">
                <h1 className="text-5xl font-jura font-bold text-center text-gray-900">show-me-your-tweets</h1>
                <div className="text-center text-gray-600">View tweets in different modes</div>
                <div className="flex mt-32">
                    <Card index='0' title='show me all you got' textHighlight='all' description='a list of all the tweets showed at once'/> 
                    <Card index='1' title='show me what you got' textHighlight='what' description='a list of all the tweets showed at once'/> 
                    <Card index='2' title='show me how lazy you are' textHighlight='how lazy' description='a list of all the tweets showed at once'/> 
                </div>
            </section>
        </div>
    );
}

export default App;
