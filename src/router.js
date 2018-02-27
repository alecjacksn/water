import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './components/products/Products'
import Home from './components/home/Home'
import productGenerator from './components/tools/ProductGenerator'
export default (
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
        <Route exact path="/" component={Home} /> 
        <Route path="/mens/watches" component={Products} /> 
        <Route path="/mens/sunglasses" component={Products} />     
        <Route path="/womens/watches" component={Products} />
        <Route path="/womens/sunglasses" component={Products} />
        <Route path="/decor" component={Products} />
        <Route path="/motivation" component={Products} />
        <Route path="/books" component={Products} />
    </Switch>
)