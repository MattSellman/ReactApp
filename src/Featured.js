var SearchPage = require('./Search');
var Initial = require('./Initial');
var AnotherSubView = // ...

class Featured extends Component {
    getInitialState: function() {
        title: "initial",
        component: <Initial/>
        return({title:title, component:component});
    }
    showSearchPage(){
        console.log('showing search page');
        this.setState({
            title: "Search",
            component: <SearchPage/>
        });
    }

    render() {
        var title = this.state.title;
        var component = this.state.component;
        return (<div>
           <TouchableHighlight onPress={() => this.showSearchPage()}>
              <View style={styles.row}>
                <Text style={styles.label}>Open Search Page</Text>
              </View>
            </TouchableHighlight>
            {component}          
        </div>);
    }
}

module.exports = Featured;


//source: https://stackoverflow.com/questions/32043421/how-to-make-simple-button-navigation-to-other-view