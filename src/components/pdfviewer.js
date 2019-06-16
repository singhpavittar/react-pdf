import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import fileIcon from '../assets/Vector.png';

export default class PdfViewer extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div className="p-5">
                {this.props.file && <React.Fragment>
                    <h3 className="text-uppercase"><img src={fileIcon} width="25" height="25" />  {this.props.file.name}</h3>
                    <Document
                        file={this.props.file.file}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </React.Fragment>}
            </div>
        );
    }
}
