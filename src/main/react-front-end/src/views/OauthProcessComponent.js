import React, { Component, Text } from 'react';

import PropTypes from 'prop-types';

import  { Redirect } from 'react-router-dom';
import {store} from '../App';
import {transferPageUrl, oauthPreUrl,
		DROPBOX_TYPE, GOOGLEDRIVE_TYPE, FTP_TYPE, SFTP_TYPE, GRIDFTP_TYPE, HTTP_TYPE,
		sideLeft, sideRight
} from "../constants";
import {endpointLogin} from '../model/actions';

export default class OauthProcessComponent extends Component{

	constructor(props){
		super(props);
		const {id} = this.props.match.params;
		this.state={
			id: id
		}
		endpointLogin(DROPBOX_TYPE, sideLeft, {uuid: id});
	}

	render(){
		const {id} = this.state;
		return <div>
			<Redirect from={oauthPreUrl+id} to={transferPageUrl}></Redirect>
			<h1> 
				Wait a second, You will be redirected.
			</h1>
			<h2>
				ID: {id}
			</h2>
		</div>
	}
}