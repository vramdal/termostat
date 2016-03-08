import React from 'react';
import './Termometer.scss';
import { connect } from 'react-redux';

export default class Termometer extends React.Component {

    render() {
        let value = Math.min(this.props.max, Math.max(this.props.value, this.props.min));
        let fraction = (value-this.props.min)/(this.props.max-this.props.min) * 100;
        let rectY = 100 - Math.min(70, Math.max(fraction, 0)) - 30;
        console.log("value =", value);
        console.log("rectY =", rectY);
        return (
                <termometer-bar>
                    <svg version="1.1" x="0" y="0" width="144" height="576" viewBox="0, 0, 144, 576">
                        <defs>
                            <clipPath id="mercuryClipPath">
                                <rect x="0" y={rectY + '%'} width="100%" height="100%" id="mercuryRect" />
                            </clipPath>
                            <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="70.5" y1="564.5" x2="70.5" y2="0">
                                <stop offset="0" stopColor="#0014FF"/>
                                <stop offset="1" stopColor="#FA0000"/>
                            </linearGradient>
                        </defs>
                        <g id="Streker" transform="translate(0, 0)">
                          <path d="M99.5,431.5 L117.5,431.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,395.5 L117.5,395.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,361.5 L117.5,361.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,325.5 L117.5,325.5" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,289 L117.5,289" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,253 L117.5,253" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,219 L117.5,219" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,183 L117.5,183" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,143 L117.5,143" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,107 L117.5,107" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,73 L117.5,73" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                          <path d="M99.5,37 L117.5,37" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                        </g>
                        <g id="Tall" transform="translate(0, 0)">
                          <text transform="matrix(1, 0, 0, 1, 130.656, 72.5)">
                            <tspan id="text1" x="-6" y="4.25" fontFamily="Palatino-Bold" fontSize="12" fill="#000000">30</tspan>
                          </text>
                          <text transform="matrix(1, 0, 0, 1, 130.344, 182.75)">
                            <tspan id="text2" x="-6" y="4.25" fontFamily="Palatino-Bold" fontSize="12" fill="#000000">25</tspan>
                          </text>
                          <text transform="matrix(1, 0, 0, 1, 130.656, 288)">
                            <tspan id="text3" x="-6" y="4.25" fontFamily="Palatino-Bold" fontSize="12" fill="#000000">20</tspan>
                          </text>
                          <text transform="matrix(1, 0, 0, 1, 130.656, 395)">
                            <tspan id="text4" x="-6" y="4.25" fontFamily="Palatino-Bold" fontSize="12" fill="#000000">15</tspan>
                          </text>
                        </g>
                        <g id="Omriss">
                            <path d="M79.045,0.5 C85.552,0.5 90.827,5.589 90.827,11.866 L90.827,437.207 C123.058,446.161 143.653,472.066 144.5,504.377 C144.5,542.737 112.264,573.833 72.5,573.833 C32.735,573.833 0.5,542.737 0.5,504.377 C1.267,473.29 18.349,451.124 47.627,439.182 L47.627,11.866 C47.627,5.589 52.902,0.5 59.409,0.5 L79.045,0.5 z" fillOpacity="0" stroke="#000000" strokeWidth="1"/>
                        </g>
                        <g id="Gradient">
                            <g>
                                <path clipPath="url(#mercuryClipPath)"
                                      d="M68.888,5.889 C74.58,6.712 78.393,11.005 78.682,16.681 L78.682,445.764 C108.803,449.033 129.759,475.734 130.5,504.837 C130.5,537.788 103.637,564.5 70.5,564.5 C37.363,564.5 10.5,537.788 10.5,504.837 C10.668,477.941 29.82,452.273 56.864,446.775 L56.864,16.681 C56.864,10.69 61.748,5.833 67.773,5.833 L68.888,5.889 z" fill="url(#Gradient_1)"/>
                            </g>
                        </g>
                    </svg>
                </termometer-bar>
        );
    }
}

function model(state) {
    return {
        value: state.sensors.temperature
    }
}

export default connect(model)(Termometer);

Termometer.propTypes = {
    max: React.PropTypes.number.isRequired,
    min: React.PropTypes.number.isRequired,
    value: React.PropTypes.number
};

Termometer.defaultProps = {
    value: 0
};