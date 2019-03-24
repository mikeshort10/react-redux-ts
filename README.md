# ReactRedux.ts

## This is a template for CRUDy React Components using Redux-Thunk to quickly create new Components for your React-Redux Application's Front End

### Important notes before you integrate this into your application
Several files in this template are simply shell files. 

1. Bootstrap is not installed in this directory.
2. ./client/state/modules/FindandReplace/style.scss refers to a bootstrap file that does not exist. 
3. ./client/state/modules/FindandReplace/index.tsx refers to the IStore interface in the eponymous file. Currently this interface is empty. It can easily be replaced by the IStore interface in your application by changing the relative path.
4. This React-Redux set up is incomplete. It does not include a redux *store*, an *index.html* file for displaying the React Component, and *combinedReducers* file if you need multiple reducers in your application. It also has no functionality on it's own, even if these were added. These aspects are omitted because they should be specific to your application, so adding them here would be redundant. 
5. There are several npm packages and corresponding @types/ files. Most of these are needed for these files to work properly, and all are recommended to add to your application. Make sure to add them to your package.json.

### Customizing your files after adding them to your application.

#### In See ./client/state/modules/FindandReplace
1. Find and Replace the term *_FindandReplace_* with UpperCamelCase name for reducer and corresponding action creators and handlers.
2. Find and Replace the tern _FindReplace_ (no _and_) with UPPERCASE name for action types.
3. Find and Replace _endpoint_ to correctly interact with your server.
4. Change `host` value to your domain. Default set equal `http://localhost:3000/`
5. Change name of the FindandReplace directory.

#### In ./client/containers/FindandReplace/index.tsx: 
6. Find and Replace the term _FindandReplace_ with same name from corresponding redux file.
7. Find and Replace the tern _FindReplace_ (no _and_) with your Component name. Can be different from corresponding redux file.
8. Change name of the FindandReplace directory.

#### Change the relative paths referenced in each of these files as needed.
