'use strict';

var ButtonAction = Reflux.createActions(['login', 'register']);

var Store = Reflux.createStore({
    getInitialState: function getInitialState() {
        return {
            name: 'store state'
        };
    },
    listenables: ButtonAction,
    onLogin: function onLogin(data) {
        console.log(data);
        this.trigger(data + ' login');
    },
    onRegister: function onRegister(data) {
        console.log(data);
        this.trigger(data + ' register');
    }
});

var ButtonClass = React.createClass({
    displayName: 'ButtonClass',

    mixins: [Reflux.connectFilter(Store, 'name', function (data) {
        console.log(data);
        return data;
    })],

    render: function render() {

        return React.createElement(
            'div',
            { className: 'b' },
            this.state.name
        );
    }
});

var i = 0;

var ButtonClass2 = React.createClass({
    displayName: 'ButtonClass2',

    getInitialState: function getInitialState() {
        return {
            name: this.props.name
        };
    },
    clicked: function clicked(e) {
        this.props.action(i++);
    },
    render: function render() {
        return React.createElement(
            'button',
            { className: 'b', onClick: this.clicked },
            this.state.name
        );
    }
});

React.render(React.createElement(ButtonClass, { name: '按钮1' }), document.querySelector('.c1'));
React.render(React.createElement(ButtonClass2, { name: '按钮 register', action: ButtonAction.login }), document.querySelector('.c2'));
React.render(React.createElement(ButtonClass2, { name: '按钮 register', action: ButtonAction.register }), document.querySelector('.c3'));

//# sourceMappingURL=buttons-compiled.js.map