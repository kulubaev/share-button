'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _visibility = require('./visibility');

var _visibility2 = _interopRequireDefault(_visibility);

var _reactAutoBind = require('react-auto-bind');

var _reactAutoBind2 = _interopRequireDefault(_reactAutoBind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SharePopup = function (_React$Component) {
  _inherits(SharePopup, _React$Component);

  function SharePopup(props) {
    _classCallCheck(this, SharePopup);

    var _this = _possibleConstructorReturn(this, (SharePopup.__proto__ || Object.getPrototypeOf(SharePopup)).call(this, props));

    (0, _reactAutoBind2.default)(_this);
    return _this;
  }

  _createClass(SharePopup, [{
    key: 'copyClicked',
    value: function copyClicked(e) {
      var t = e.currentTarget;
      var c = t.dataset.copytarget;
      var inp = c ? document.querySelector(c) : null;

      if (inp && inp.select) {
        inp.select();
        try {
          document.execCommand('copy');
          inp.blur();
        } catch (err) {
          alert('Please copy manually');
        }
      }
      this.props.sharedBy('copy');
    }
  }, {
    key: 'whatsappClicked',
    value: function whatsappClicked(e) {
      var _this2 = this;

      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      var link = '';
      if (/android/i.test(userAgent)) {
        link = 'https://play.google.com/store/apps/details?id=com.whatsapp';
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        link = 'https://itunes.apple.com/app/id310633997';
      }
      var delay = 1000;
      var start = new Date().getTime();
      setTimeout(function () {
        var end = new Date().getTime();
        if (_this2.visibility && _this2.visibility.isHidden() || end - start >= delay * 2) return;
        window.open(link, '_blank');
      }, delay);
      this.props.sharedBy('whatsapp');
    }
  }, {
    key: 'fbClicked',
    value: function fbClicked() {
      this.props.sharedBy('fb');
    }
  }, {
    key: 'twitterClicked',
    value: function twitterClicked() {
      this.props.sharedBy('twitter');
    }
  }, {
    key: 'gmailClicked',
    value: function gmailClicked() {
      this.props.sharedBy('gmail');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var text = this.props.text + ' ' + this.props.url;
      var gmailURL = 'https://mail.google.com/mail/u/0/?view=cm&ui=2&tf=0&fs=1&su=' + this.props.subject + '&body=' + this.props.text + '%0A' + this.props.url;
      return _react2.default.createElement(
        'div',
        { className: 'share-popup', onClick: this.props.onClick },
        this.props.shareModalOpen && _react2.default.createElement(_visibility2.default, { ref: function ref(node) {
            _this3.visibility = node;
          } }),
        _react2.default.createElement(
          'a',
          { className: 'sp-tab', href: 'whatsapp://send?text=' + text, onClick: this.whatsappClicked },
          _react2.default.createElement('div', { className: 'icon whatsapp' }),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            'WhatsApp'
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'sp-tab', href: 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(this.props.url) + '&p[title]=' + encodeURIComponent(this.props.text), onClick: this.fbClicked, target: '_blank' },
          _react2.default.createElement('div', { className: 'icon fb' }),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            'Facebook'
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'sp-tab', href: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.props.text) + '&url=' + encodeURIComponent(this.props.url), onClick: this.twitterClicked, target: '_blank' },
          _react2.default.createElement('div', { className: 'icon twitter' }),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            'Twitter'
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'sp-tab', href: gmailURL, onClick: this.gmailClicked, target: '_blank' },
          _react2.default.createElement('div', { className: 'icon gmail' }),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            'Mail'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'sp-tab copy', onClick: this.copyClicked, 'data-copytarget': '#url' },
          _react2.default.createElement(
            'div',
            { className: 'copy-input' },
            _react2.default.createElement('input', { type: 'text', id: 'url', defaultValue: this.props.url, readOnly: true })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { className: 'icon copy' }),
            _react2.default.createElement(
              'span',
              { className: 'text' },
              'Copy to clipboard'
            )
          )
        )
      );
    }
  }]);

  return SharePopup;
}(_react2.default.Component);

var ShareBtn = function (_React$Component2) {
  _inherits(ShareBtn, _React$Component2);

  function ShareBtn(props) {
    _classCallCheck(this, ShareBtn);

    var _this4 = _possibleConstructorReturn(this, (ShareBtn.__proto__ || Object.getPrototypeOf(ShareBtn)).call(this, props));

    _this4.state = {
      shareModalOpen: false
    };
    _this4.toggleShare = _this4.toggleShare.bind(_this4);
    return _this4;
  }

  _createClass(ShareBtn, [{
    key: 'toggleShare',
    value: function toggleShare() {
      if (!this.state.shareModalOpen && this.props.onShareBtnClick) {
        this.props.onShareBtnClick();
      }
      if (navigator && navigator.share !== undefined) {
        navigator.share({
          title: this.props.subject,
          text: this.props.text,
          url: this.props.url
        }).then(function () {
          return console.log('Successful share');
        }).catch(function (error) {
          return console.log('Error sharing:', error);
        });
      } else {
        document.body.style.overflow = !this.state.shareModalOpen ? 'hidden' : 'auto';
        this.setState({ shareModalOpen: !this.state.shareModalOpen });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'share-btn ' + this.props.className },
        _react2.default.createElement(
          'div',
          { onClick: this.toggleShare },
          this.props.displayText
        ),
        _react2.default.createElement(
          'div',
          { className: 'share-modal ' + (this.state.shareModalOpen ? 'open' : '') },
          _react2.default.createElement('div', { className: 'overlay', onClick: this.toggleShare }),
          _react2.default.createElement(SharePopup, _extends({}, this.props, { toggleShare: this.toggleShare, shareModalOpen: this.state.shareModalOpen }))
        )
      );
    }
  }]);

  return ShareBtn;
}(_react2.default.Component);

exports.default = ShareBtn;


ShareBtn.propTypes = {
  url: _react2.default.PropTypes.string,
  text: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  displayText: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
  onShareBtnClick: _react2.default.PropTypes.func,
  subject: _react2.default.PropTypes.string
};

ShareBtn.defaultProps = {
  url: '',
  text: '',
  subject: '',
  className: '',
  displayText: 'Share',
  onShareBtnClick: function onShareBtnClick() {}
};

SharePopup.propTypes = {
  url: _react2.default.PropTypes.string,
  text: _react2.default.PropTypes.string,
  subject: _react2.default.PropTypes.string,
  shareModalOpen: _react2.default.PropTypes.bool,
  sharedBy: _react2.default.PropTypes.func,
  onClick: _react2.default.PropTypes.func
};

ShareBtn.defaultProps = {
  sharedBy: function sharedBy(medium) {
    console.log('Shared via ', medium);
  }
};