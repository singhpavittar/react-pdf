import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { SideBar } from '../components/sidebar';
import PdfViewer from '../components/pdfviewer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            file: '',
            selected: -1
        };
        this._handleFile = this._handleFile.bind(this);
        this._handleActive = this._handleActive.bind(this);
    }

    _handleFile = (e) => {
        let file = e.target.files[0];
        let files = [...this.state.files];
        files.push({ name: file.name, url: file });
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.setState({ file: { file: reader.result, name: file.name }, files, selected: this.state.selected + 1 });
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    _handleActive = (i) => {
        let file = this.state.files[i];
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.setState({ file: { file: reader.result, name: file.name }, selected: i });
        }, false);

        if (file) {
            reader.readAsDataURL(file.url);
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <SideBar _handleFile={this._handleFile} files={this.state.files} selected={this.state.selected} _handleActive={this._handleActive} />
                    </div>
                    <div className="col-10">
                        <PdfViewer file={this.state.file} />
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) =>
    ({
    });

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);