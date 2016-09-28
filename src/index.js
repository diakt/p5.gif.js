import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import reducer from './reducers'
import {App, AboutPage, GifPage} from './containers'

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    </DockMonitor>
)

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        DevTools.instrument()
    )
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={GifPage}/>
                    <Route path="about" component={AboutPage}/>
                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
)
