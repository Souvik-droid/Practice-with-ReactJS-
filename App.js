import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement(
'div',
{id: 'parent'},[
React.createElement('div',{id:'child'}, 
    [
        React.createElement('h1', {}, 'text for h1'),
        React.createElement('h2', {}, 'text for child 12')
    ]),

React.createElement('div',{id:'child2'},
    [
        React.createElement('h1', {}, 'text for h1'),
        React.createElement('h2', {}, 'text for child 2')
    ])
]
)

const jsxheading = <h1 id='heading'>React using JSX</h1>

const HeadingComponent = () =>  (<h1>Heading Component</h1>)


const Title = () => {
    return (
        <div id='container'>
            <HeadingComponent />
            <p>This is a paragraph inside the container div.</p>
        </div>
        
        
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<HeadingComponent>);
    
root.render(<Title/>);
