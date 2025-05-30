function customReander(reactFunction, container){
    // const domEle = document.createElement(reactFunction.type)
    // domEle.innerHTML = reactFunction.Children;
    // domEle.setAttribute('href', reactFunction.props.href);
    // domEle.setAttribute('target', reactFunction.props.target);  
    const domEle = document.createElement(reactFunction.type);
    domEle.innerHTML = reactFunction.Children;
    for (const prop in reactFunction.props) {
        if(prop === 'Children') continue;
        domEle.setAttribute(prop, reactFunction.props[prop]);
    }

container.appendChild(domEle);
}

const reactFunction = {
    type: 'a',
    props:{
        href: 'https://react.dev',
        target: '_blank'
    },
    Children: 'mera name bona hai'
}
const container =document.querySelector('#root')

customReander(reactFunction, container);
