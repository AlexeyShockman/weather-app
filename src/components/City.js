import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {changeCity} from "../redux/actions";


function City(state) {
    const dispatch = useDispatch();

    return (

            <div className="city">
                {state.state.cities.map((city) => (
                    <button
                        key={city}
                        onClick={(e) => dispatch(changeCity(e))}
                    >
                        {city}</button>
                    ))}
            </div>
            )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, null)(City);