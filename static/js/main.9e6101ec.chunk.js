(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(4),i=n(3),l=n(5),u=n(0),p=n.n(u),s=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return(n=Object(a.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).getColor=function(){return 100===n.props.percent?"green":n.props.percent>50?"gold":n.props.percent>25?"red":"firebrick"},n.getWidthAsPercentOfTotalWidth=function(){return parseInt(n.props.width*(n.props.percent/100),10)},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.percent,n=e.width,r=e.height;return p.a.createElement("div",{style:{border:"1px solid lightgray",width:n,borderRadius:"4px"}},p.a.createElement("div",{style:{width:this.getWidthAsPercentOfTotalWidth(),height:r,backgroundColor:this.getColor(t)}}))}}]),t}(u.Component);s.defaultProps={height:20,width:200};var c=s;n.d(t,"a",function(){return c})},function(e,t,n){"use strict";var r=n(0),o=n.n(r);var a=function(e){var t=e.text,n=void 0===t?"Button":t,r=e.type,a=void 0===r?"button":r;return o.a.createElement("button",{type:a},n)};n.d(t,"a",function(){return a})},function(e,t){e.exports=[{name:"Button",description:"A really great button Button component.",props:{text:{type:{name:"string"},required:!1,description:"Button Text",defaultValue:{value:"'Button'",computed:!1}},type:{type:{name:"string"},required:!1,description:"Button Type",defaultValue:{value:"'button'",computed:!1}}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A really great button Button component. */\nfunction Button({ text = 'Button', type = 'button' }) {\n    return <button type={type}>{text}</button>;\n}\n\nButton.propTypes = {\n    /** Button Text */\n    text: PropTypes.string.isRequired,\n\n    /** Button Type */\n    type: PropTypes.string\n};\n\nexport default Button;\n",examples:[{name:"ExampleButton",description:"",code:"import React from 'react';\nimport Button from 'alright-components/Button';\n\nexport default function ExampleButton() {\n    return <Button text=\"Test\" />;\n}\n"},{name:"ExampleButtonSubmit",description:"",code:"import React from 'react';\nimport Button from 'alright-components/Button';\n\nexport default function ExampleButtonSubmit() {\n    return <Button text=\"Test\" type=\"submit\" />;\n}\n"}]},{name:"InputText",description:"",props:{label:{type:{name:"string"},required:!1,description:"",defaultValue:{value:"'Label'",computed:!1}},onChange:{type:{name:"func"},required:!0,description:""},value:{type:{name:"string"},required:!1,description:"",defaultValue:{value:"''",computed:!1}}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\n\nfunction InputText({ label = 'Label', onChange, value = '' }) {\n    return (\n        <label>\n            {label}\n            <input className=\"input\" onChange={onChange} value={value} />\n        </label>\n    );\n}\n\nInputText.propTypes = {\n    label: PropTypes.string.isRequired,\n    onChange: PropTypes.func.isRequired,\n    value: PropTypes.string.isRequired\n};\n\nexport default InputText;\n",examples:[]},{name:"ProgressBar",description:"",props:{percent:{type:{name:"number"},required:!0,description:""},width:{type:{name:"number"},required:!1,description:"",defaultValue:{value:"200",computed:!1}},height:{type:{name:"number"},required:!1,description:"",defaultValue:{value:"20",computed:!1}}},code:"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends Component {\n    getColor = () => {\n        if (this.props.percent === 100) return 'green';\n        return this.props.percent > 50\n            ? 'gold'\n            : this.props.percent > 25\n            ? 'red'\n            : 'firebrick';\n    };\n\n    getWidthAsPercentOfTotalWidth = () => {\n        return parseInt(this.props.width * (this.props.percent / 100), 10);\n    };\n\n    render() {\n        const { percent, width, height } = this.props;\n        return (\n            <div\n                style={{\n                    border: '1px solid lightgray',\n                    width,\n                    borderRadius: '4px'\n                }}\n            >\n                <div\n                    style={{\n                        width: this.getWidthAsPercentOfTotalWidth(),\n                        height,\n                        backgroundColor: this.getColor(percent)\n                    }}\n                />\n            </div>\n        );\n    }\n}\n\nProgressBar.propTypes = {\n    percent: PropTypes.number.isRequired,\n    width: PropTypes.number.isRequired,\n    height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n    height: 20,\n    width: 200\n};\n\nexport default ProgressBar;\n",examples:[{name:"ExampleProgressBar100",description:"Shows 100% Complete",code:"import React from 'react';\nimport ProgressBar from 'alright-components/ProgressBar';\n\n/** Shows 100% Complete */\nexport default function ExampleProgressBar100() {\n    return <ProgressBar percent={100} />;\n}\n"},{name:"ExampleProgressBar25",description:"Shows 25% Complete",code:"import React from 'react';\nimport ProgressBar from 'alright-components/ProgressBar';\n\n/** Shows 25% Complete */\nexport default function ExampleProgressBar25() {\n    return <ProgressBar percent={25} />;\n}\n"},{name:"ExampleProgressBar50",description:"Shows 50% Complete",code:"import React from 'react';\nimport ProgressBar from 'alright-components/ProgressBar';\n\n/** Shows 50% Complete */\nexport default function ExampleProgressBar50() {\n    return <ProgressBar percent={50} />;\n}\n"},{name:"ExampleProgressBar75",description:"Shows 75% Complete",code:"import React from 'react';\nimport ProgressBar from 'alright-components/ProgressBar';\n\n/** Shows 75% Complete */\nexport default function ExampleProgressBar75() {\n    return <ProgressBar percent={75} />;\n}\n"}]},{name:"Select",description:"",props:{onChange:{type:{name:"func"},required:!0,description:""},options:{type:{name:"array"},required:!1,description:"",defaultValue:{value:"[{ label: 'Option 1', value: 1 }]",computed:!1}}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\n\nfunction Select({ label, onChange, options }) {\n    const mappedOptions = options.map(option => (\n        <option key={option.value} value={option.value}>\n            {option.label}\n        </option>\n    ));\n    return (\n        <label>\n            {label}\n            <select onChange={onChange}>{mappedOptions}</select>\n        </label>\n    );\n}\n\nSelect.propTypes = {\n    onChange: PropTypes.func.isRequired,\n    options: PropTypes.array.isRequired\n};\n\nSelect.defaultProps = {\n    options: [{ label: 'Option 1', value: 1 }]\n};\n\nexport default Select;\n",examples:[{name:"ExampleSelect",description:"",code:"import React from 'react';\nimport Select from 'alright-components/Select';\n\nexport default function ExampleSelect() {\n    return <Select />;\n}\n"}]}]},,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),o=n.n(r),a=n(7);function i(){return o.a.createElement(a.a,{text:"Test"})}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),o=n.n(r),a=n(7);function i(){return o.a.createElement(a.a,{text:"Test",type:"submit"})}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),o=n.n(r),a=n(6);function i(){return o.a.createElement(a.a,{percent:100})}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),o=n.n(r),a=n(6);function i(){return o.a.createElement(a.a,{percent:25})}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),o=n.n(r),a=n(6);function i(){return o.a.createElement(a.a,{percent:50})}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),o=n.n(r),a=n(6);function i(){return o.a.createElement(a.a,{percent:75})}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function a(e){var t=e.label,n=e.onChange,r=e.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.label)});return o.a.createElement("label",null,t,o.a.createElement("select",{onChange:n},r))}a.defaultProps={options:[{label:"Option 1",value:1}]};var i=a;function l(){return o.a.createElement(i,null)}n.d(t,"default",function(){return l})},,,function(e,t,n){e.exports=n(31)},,,,,,function(e,t,n){},,,,function(e,t,n){var r={"./Button/ExampleButton":11,"./Button/ExampleButton.js":11,"./Button/ExampleButtonSubmit":12,"./Button/ExampleButtonSubmit.js":12,"./ProgressBar/ExampleProgressBar100":13,"./ProgressBar/ExampleProgressBar100.js":13,"./ProgressBar/ExampleProgressBar25":14,"./ProgressBar/ExampleProgressBar25.js":14,"./ProgressBar/ExampleProgressBar50":15,"./ProgressBar/ExampleProgressBar50.js":15,"./ProgressBar/ExampleProgressBar75":16,"./ProgressBar/ExampleProgressBar75.js":16,"./Select/ExampleSelect":17,"./Select/ExampleSelect.js":17};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=30},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(18),i=n.n(a),l=(n(26),n(28),n(1)),u=n(2),p=n(4),s=n(3),c=n(5),m=function(e){var t=e.components;return o.a.createElement("ul",{className:"navigation"},t.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement("a",{href:"#".concat(e)},e))}))},d=n(9),f=n.n(d),h=n(19),g=n.n(h),E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){f.a.registerLanguage("javascript",g.a),f.a.highlightBlock(this.element)}},{key:"render",value:function(){var e=this;return o.a.createElement("pre",{ref:function(t){e.element=t}},o.a.createElement("code",null,this.props.children))}}]),t}(o.a.Component),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(s.a)(t).call(this,e))).toggleCode=function(e){e.preventDefault(),n.setState(function(e){return{showCode:!e.showCode}})},n.state={showCode:!1},n}return Object(c.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.showCode,t=this.props.example,r=t.code,a=t.description,i=t.name,l=n(30)("./".concat(this.props.componentName,"/").concat(i)).default;return o.a.createElement("div",{className:"example"},a&&o.a.createElement("h4",null,a),o.a.createElement(l,null),o.a.createElement("p",null,o.a.createElement("a",{href:"",onClick:this.toggleCode},e?"Hide":"Show"," Code")),e&&o.a.createElement(E,null,r))}}]),t}(o.a.Component),b=function(e){var t=e.props;return o.a.createElement("table",{className:"props"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Required"))),o.a.createElement("tbody",null,Object.keys(t).map(function(e){return o.a.createElement("tr",{key:e},o.a.createElement("td",null,e),o.a.createElement("td",null,t[e].description),o.a.createElement("td",null,t[e].type.name),o.a.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value),o.a.createElement("td",null,t[e].required&&"Yes"))})))},y=function(e){var t=e.component,n=t.name,r=t.description,a=t.props,i=t.examples;return o.a.createElement("div",{className:"componentpage"},o.a.createElement("h2",null,n),o.a.createElement("p",null,r),o.a.createElement("h3",null,"Example",i.length>1&&"s"),i.length>0?i.map(function(e){return o.a.createElement(v,{key:e.code,example:e,componentName:n})}):"No examples exist.",o.a.createElement("h3",null,"Props"),a?o.a.createElement(b,{props:a}):"This component accepts no props.")},B=n(8),x=n.n(B),P=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(s.a)(t).call(this,e))).state={route:window.location.hash.substr(1)},n}return Object(c.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",function(){e.setState({route:window.location.hash.substr(1)})})}},{key:"render",value:function(){var e=this.state.route,t=e?x.a.filter(function(t){return t.name===e})[0]:x.a[0];return o.a.createElement("div",null,o.a.createElement("h1",null,"Alright Components"),o.a.createElement(m,{components:x.a.map(function(e){return e.name})}),o.a.createElement(y,{component:t}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,2,1]]]);
//# sourceMappingURL=main.9e6101ec.chunk.js.map