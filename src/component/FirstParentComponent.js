import React from 'react'
import './FirstParentComponent.css';
import { connect } from 'react-redux';
// import childReducer from './childReducer';

const FirstParentComponent = ({ carts }) => (
    <div className="header">
                    <ul class="nav bg-dark mr-2  p-3">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="/" tabindex="-1" aria-disabled="true">About</a>
            </li>
            </ul>
        <div className="container">
            {carts.map(cart => {
                return (
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={cart.image} className="card-img-top" alt="images" />
                        <div className="card-body">
                            <h5>{cart.title}</h5>
                            <p className="card-text"> {cart.body}</p>
                            <button type="button" class="btn btn-dark">Show More</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        carts: state.child.carts
    }
}

export default connect(mapStateToProps)(FirstParentComponent);
