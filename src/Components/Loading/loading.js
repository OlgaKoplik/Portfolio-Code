import React from 'react';
import './loading.css';

const Loading = () =>
    <div className="loading">
        <div className="flip first">
            <div><div>Html</div></div>
        </div>
        <div className="flip second">
            <div><div>Css</div></div>
        </div>
        <div className="flip third">
            <div><div>JavaScript</div></div>
        </div>
    </div>

export {Loading};