"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Badge = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "badge ".concat(!props.value ? "badge--none" : "", " ")
  }, /*#__PURE__*/React.createElement("h4", {
    className: "heavy"
  }, props.value || 0));
};

var _default = Badge;
exports.default = _default;