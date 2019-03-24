// 1) See ../../state/modules/FindandReplace
// 2) Find and Replace the term 'FindandReplace' with same name from corresponding redux file.
// 3) Find and Replace the tern 'FindReplace' (no 'and') with your Component name. Can be different from corresponding redux file.
// 4) Change name of this directory.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { IStore } from '../../state/IStore';
import { createFindandReplace, readFindandReplace, updateFindandReplace, deleteFindandReplace, IFindandReplace } from '../../state/modules/FindandReplace';
import classNames from 'classnames/bind';

const style = require('./style.scss');
const cs = classNames.bind(style);

interface IStateProps {
    // custom type for mapping redux store to Component props
}

interface IDispatchProps {
    createFindandReplace: (data:IFindandReplace) => (dispatch:Dispatch) => void;
    readFindandReplace: (data:IFindandReplace) => (dispatch:Dispatch) => void;
    updateFindandReplace: (data:IFindandReplace) => (dispatch:Dispatch) => void;
    deleteFindandReplace: (data:IFindandReplace) => (dispatch:Dispatch) => void;
}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {
    // custom state type for Component
}

class FindReplace extends Component<IProps, IState> {
    constructor(props) {
        super (props);
        this.state = {
            // set initial state or remove constructor altogether
        }
    }

    render() {
        return(
            <h2 className={cs(`text-center`)}>Easy Peasy with Find and Replace!</h2>
        )
    }
}

const mapStateToProps = (state:IStore) => {
    return {
        // return desired parts of the store
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        createFindandReplace: bindActionCreators(createFindandReplace, dispatch),
        readFindandReplace: bindActionCreators(readFindandReplace, dispatch),
        updateFindandReplace: bindActionCreators(updateFindandReplace, dispatch),
        deleteFindandReplace: bindActionCreators(deleteFindandReplace, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindReplace)