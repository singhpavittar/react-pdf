import React from 'react';
import WhiteLogo from '../assets/logo_sm_white.png';
import upload from '../assets/upload.png';
import fileIcon from '../assets/Vector.png';

export const SideBar = (props) => {
    return (
        <div className="siderbarComponent">
            <div>
                <img src={WhiteLogo} className="mt-50" />
                <h3 className="sidebar-heading">
                    FILES
                </h3>
                <ul className="list-group">
                    {props.files.map((x, i) => <li key={i} className={`list-group-item ${props.selected === i ? 'active' : ''}`} onClick={() => props._handleActive(i)}>
                        <ul className="p-0 ul-inline" type="none">
                            <li><img src={fileIcon} width="15" height="15" /></li>
                            <li className="pl-3">
                                <p className="first text-uppercase"> {x.name}</p>
                                <p className="second">{x.name}</p>
                            </li>
                        </ul>
                    </li>)}
                </ul>
            </div>
            <div className="btn-fixed">
                <div className="input-group ">
                    <div className="custom-file w-100">
                        <input type="file" className="custom-file-input d-none" id="inputGroupFile02" accept="application/pdf" onChange={(event) => {
                            props._handleFile(event);
                        }}
                        />
                        <label className="custom-file-label w-100 text-center btn btn-upload" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                            {/* <button className=""> */}
                            <img src={upload} />
                            <span className="pl-14">Upload Files</span>
                            {/* </button> */}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
