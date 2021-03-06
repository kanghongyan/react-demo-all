import Header from './components/Header/Header';
// import Page1 from './view/Page1';

const routeConfig = {
  path: '/',
  component: Header,
  childRoutes: [
    {
      path: 'page1/:a',
      // component: Page1
      getComponents(nextState, callback) {
        require.ensure([], function (require) {
          callback(null, require('./view/Page1').default);
          // {xx: require('./view/Page1').default}
        }, 'page1')
      },
      childRoutes: [{
        path: 'test',
        getComponents(nextState, callback) {
          require.ensure([], function (require) {
            callback(null, require('./view/test').default);
            // {xx: require('./view/Page1').default}
          }, 'test')
        },
      }]
    },
    {
      path: 'page2',
      getComponents(nextState, callback) {
        require.ensure([], function (require) {
          callback(null, require('./view/Page2').default);
          // {xx: require('./view/Page1').default}
        }, 'page2')
      }
    },
    {
      path: 'page4',
      getComponents(nextState, callback) {
        require.ensure([], function (require) {
          callback(null, require('./view/Page4').default);
          // {xx: require('./view/Page1').default}
        }, 'page4')
      }
    }
    /*{
     path: 'inbox',
     component: Inbox,
     childRoutes: [
     {path: '/messages/:id', component: Message},
     {
     path: 'messages/:id',
     onEnter: function (nextState, replaceState) {
     replaceState(null, '/messages/' + nextState.params.id)
     }
     }
     ]
     }*/
  ]
};

export default routeConfig;