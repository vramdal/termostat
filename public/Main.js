import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './reducers';
import { connect } from 'react-redux';
import { temperatureChanged } from './actions/temperatureActions';

import Termometer from './components/Termometer/Termometer.jsx';

import './Main.scss';

export default class Main extends React.Component {

    onTempChange() {
        console.log("onTempChange);");
        let temperature = parseFloat(this.tempInput.value);
        console.log("temperature =", temperature);
        store.dispatch(temperatureChanged(temperature));
    }

    render() {
        let min = 14;
        let max = 30;
        let temperature = store.getState().sensors.temperature;
        return (
                <Provider store={store}>
                    <div id="Main">
                        <Termometer min={min} max={max} />
                        <input type="number" min={min} max={max} value={temperature} onChange={this.onTempChange.bind(this)} ref={ref => this.tempInput = ref}/>
                    </div>
                </Provider>
        );
    }

}

let store = createStore(combinedReducer);
ReactDOM.render(<Main/>, document.getElementById('app'));