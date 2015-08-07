var ButtonAction = Reflux.createActions(['login','register']);

var Store = Reflux.createStore({
    getInitialState:function(){
        return {
            name:'store state'
        }
    },
    listenables:ButtonAction,
    onLogin:function(data){
        console.log(data);
        this.trigger(data+' login');
    },
    onRegister:function(data){
        console.log(data);
        this.trigger(data + ' register');
    }
});


var ButtonClass = React.createClass({

    mixins:[Reflux.connectFilter(Store,'name',function(data){
        console.log(data);
        return data;
    })],

    render:function(){

        return (
            <div className='b' >
                {this.state.name}
            </div>
        );
    }
});

var i=0;

var ButtonClass2 = React.createClass({

    getInitialState:function(){
        return {
            name:this.props.name,
        }
    },
    clicked:function(e){
        this.props.action(i++);
    },
    render:function(){
        return (
            <button className='b' onClick={this.clicked}>
                {this.state.name}
            </button>
        );
    }
});

React.render(
    <ButtonClass name='按钮1' />,
    document.querySelector('.c1')
);
React.render(
    <ButtonClass2 name='按钮 register' action={ButtonAction.login} />,
    document.querySelector('.c2')
);
React.render(
    <ButtonClass2 name='按钮 register' action={ButtonAction.register} />,
    document.querySelector('.c3')
);
