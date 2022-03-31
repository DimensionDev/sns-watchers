;(window.webpackJsonp = window.webpackJsonp || []).push([
  [84, 7, 9, 12, 18, 78],
  {
    '+/sI': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      }),
        n.d(t, 'b', function () {
          return y
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        s = n.n(l),
        c = n('2VqO'),
        d = n.n(c),
        u = (n('Wd/2'), n('M+/F'), n('2G9S'), n('ERkP')),
        p = n.n(u),
        m = n('TGcR'),
        h = n('t62R'),
        f = n('a6qo'),
        g = n('rHpw'),
        v = 'animated_gif',
        y = 'video',
        b = (function (e) {
          s()(n, e)
          var t = d()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.durationInMilliseconds,
                    a = t.type
                  if (a === v || 'vine' === a)
                    e =
                      a === v
                        ? p.a.createElement(h.b, { weight: 'bold' }, 'GIF')
                        : p.a.createElement(m.a, { style: _.icon })
                  else if (a === y && n) {
                    var r = Math.trunc(n / 6e4),
                      i = '0'.concat(Math.trunc((n % 6e4) / 1e3)).slice(-2)
                    e = p.a.createElement(h.b, { color: 'white' }, ''.concat(r, ':').concat(i))
                  }
                  return e ? p.a.createElement(f.a, { align: 'left' }, e) : null
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        _ = g.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = b
    },
    '/Imo': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        b = (n('2G9S'), n('jQ3i'), n('x4t0'), n('ERkP')),
        _ = n.n(b),
        w = n('/yvb'),
        C = n('k/Ka'),
        E = n('3XMw'),
        T = n.n(E),
        x = n('rHpw'),
        S = ['accept', 'disabled', 'multiple', 'onChange', 'testID'],
        I = T.a.i5450beb,
        k = T.a.f7432494,
        R = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_handlePress', function (t) {
                var n = e.props.onPress
                n && n(t), e._fileInput && e._fileInput.click()
              }),
              y()(p()(e), '_handleChange', function (t) {
                var n = e.props.onChange,
                  a = t.target,
                  r = a.files
                r.length && n && n(r), (a.value = '')
              }),
              y()(p()(e), '_handleFileInputButtonRef', function (t) {
                e._fileInput = t
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accept,
                    n = e.disabled,
                    a = e.multiple,
                    i = (e.onChange, e.testID),
                    l = o()(e, S),
                    s = !((null != t && t.includes('video')) || (null != t && t.includes('gif')))
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      w.a,
                      r()({ hoverLabel: t ? { label: s ? k : I } : void 0 }, l, {
                        disabled: n,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(C.a)('input', {
                      accept: t,
                      disabled: n,
                      multiple: a,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: M.input,
                      tabIndex: -1,
                      testID: i,
                      type: 'file',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      y()(R, 'defaultProps', { disabled: !1, multiple: !1 })
      var M = x.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = R
    },
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return v
      }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'h', function () {
          return b
        }),
        n.d(t, 'g', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return w
        }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return T
        }),
        n.d(t, 'a', function () {
          return x
        }),
        n.d(t, 'i', function () {
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        s = n('kGix'),
        c = (n('hBpG'), n('M6MT')),
        d = n('Ssj5'),
        u = n('qlwE'),
        p = n('a/ea'),
        m = n('474o'),
        h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        g = Object.freeze({
          initial: { fetchStatus: s.a.NONE },
          lastSearch: { fetchStatus: s.a.NONE },
          lastSelectedPlace: void 0,
        })
      var v = function (e) {
          return e.placePicker.initial.results
        },
        y = function (e) {
          return e.placePicker.initial.fetchStatus
        },
        b = function (e) {
          return e.placePicker.lastSearch.results
        },
        _ = function (e) {
          return e.placePicker.lastSearch.fetchStatus
        },
        w = function (e) {
          return (function (e, t) {
            return null != t
              ? t
              : null == e
              ? void 0
              : e.places.find(function (t) {
                  return (null == e ? void 0 : e.autotag_place_id) === t.place.id
                })
          })(
            v(e),
            (function (e) {
              return e.placePicker.lastSelectedPlace
            })(e),
          )
        },
        C = function (e, t) {
          return function (n, a, r) {
            var i = r.api
            return Object(l.b)(n, { request: i.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        E = function (e) {
          return function (t, n, a) {
            a.api
            var r = Object(p.d)(n())
            return t(
              C(
                {
                  query_type: m.a.tweet_compose_location,
                  lat: null == r ? void 0 : r.coords.latitude,
                  long: null == r ? void 0 : r.coords.longitude,
                  hacc: null == r ? void 0 : r.coords.accuracy,
                  search_term: e,
                },
                m.c.lastSearch,
              ),
            )
          }
        },
        T = function () {
          return function (e, t, n) {
            n.api
            var a = y(t()),
              r = v(t())
            if (a === s.a.LOADING || r) return Promise.resolve()
            var i = Object(p.d)(t())
            return i
              ? e(
                  C(
                    {
                      lat: i.coords.latitude,
                      long: i.coords.longitude,
                      hacc: i.coords.accuracy,
                      query_type: m.a.tweet_compose_location,
                      count: 50,
                    },
                    m.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        x = function () {
          return function (e, t, n) {
            n.api
            return Object(u.l)(t()) && Object(p.c)(t()) === c.b.granted
              ? e(Object(p.b)())
                  .then(function () {
                    return e(T())
                  })
                  .then(function () {
                    return w(t())
                  })
              : Promise.resolve()
          }
        },
        S = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        I = function (e) {
          return { type: S, payload: e }
        }
      d.a.register(
        r()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, n, { fetchStatus: s.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, a, { fetchStatus: s.a.FAILED }))
            case f.SUCCESS:
              var i = t.meta.resultSet,
                l = t.payload
              return o()(o()({}, e), {}, r()({}, i, { fetchStatus: s.a.LOADED, results: l }))
            case S:
              var c = t.payload
              return o()(o()({}, e), {}, { lastSelectedPlace: null != c ? c : void 0 })
            default:
              return e
          }
        }),
      )
    },
    '07FG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('cnVF'),
        r = function (e) {
          return e === a.B
        }
    },
    '0uGn': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Ce
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        b =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('jwue'),
          n('+oxZ'),
          n('2G9S'),
          n('z84I'),
          n('JtPf'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('LqLs'),
          n('m9LP'),
          n('ERkP')),
        _ = n.n(b),
        w = (n('TJCb'), n('DZ+c'), n('xZGM')),
        C = n('GTeL'),
        E = n('3XMw'),
        T = n.n(E),
        x = n('rHpw'),
        S = x.a.create(function (e) {
          return {
            formTextInput: {
              width: '100%',
              backgroundColor: e.colors.navigationBackground,
              paddingHorizontal: e.spaces.space12,
              paddingBottom: 0,
              borderTopWidth: e.spaces.space1,
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
            },
            attachmentContainer: { width: '100%', height: '100%', flexGrow: 1 },
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
          }
        }),
        I = 'altTextInput',
        k = 'endEditingButton',
        R = 'altTextEducationSheetPrimaryAction',
        M = n('MWbm'),
        P = n('t62R'),
        L = n('p+r5'),
        D = T.a.feabf2a0,
        O = T.a.e36287c6,
        A = T.a.cf565d08,
        F = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? _.a.createElement(P.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, A) : null
              }),
              y()(p()(e), '_handleChange', function (t) {
                var n = e.props,
                  a = n.currentMediaId,
                  r = n.mediaItem,
                  i = n.onChange,
                  o = t.target.value
                r ? i(o, r.id.toString()) : a && i(o, a)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    n = e.maxLength,
                    a = e.mediaItem,
                    r = e.orientedImage,
                    i = e.value
                  return _.a.createElement(
                    M.a,
                    { style: S.root },
                    _.a.createElement(
                      M.a,
                      { style: S.attachmentContainer },
                      _.a.createElement(C.a, { mediaItem: a, orientedImage: r }),
                      _.a.createElement(L.a, {
                        accessibilityLabel: D,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: O,
                        maxLength: n,
                        maxNumberOfLines: 6,
                        multiline: !0,
                        name: 'altTextInput',
                        numberOfLines: 2,
                        onChange: this._handleChange,
                        style: S.formTextInput,
                        testID: I,
                        value: i,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        B = n('rxPX'),
        N = function (e, t) {
          return Object(w.D)(e, w.a)
        },
        j = Object(B.a)()
          .propsFromState(function () {
            return { showEducationOnMount: N }
          })
          .propsFromActions(function () {
            return { addFlag: w.z }
          })
          .withAnalytics(),
        U = n('feu+'),
        H = T.a.ffe9ec3a,
        z = T.a.j063b261,
        V = T.a.e57144f0,
        W = T.a.f9f9210c,
        K = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), 'state', { showAltTextEducationSheet: !1 }),
              y()(p()(e), '_handleOpenEducationPrompt', function () {
                var t = e.props.analytics
                e.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: 'education', action: 'click' })
              }),
              y()(p()(e), '_handleCloseEducationPrompt', function () {
                e.setState({ showAltTextEducationSheet: !1 })
              }),
              y()(p()(e), '_handleEducationPromptPrimaryAction', function () {
                var t = e.props.analytics
                e._handleCloseEducationPrompt(),
                  t.scribe({ component: 'education', element: 'alt_text_button', action: 'click' })
              }),
              y()(p()(e), '_handleEducationPromptSecondaryAction', function () {
                e.props.history.goBack()
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag,
                    n = e.analytics
                  e.showEducationOnMount &&
                    (this.setState({ showAltTextEducationSheet: !0 }),
                    n.scribe({ component: 'education', action: 'open' }),
                    t(w.a))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    n = e.onAltTextChange,
                    a = e.orientedImage,
                    r = e.value,
                    i = this.state.showAltTextEducationSheet,
                    o = t && t.id.toString()
                  return _.a.createElement(
                    M.a,
                    { style: G.root },
                    i
                      ? _.a.createElement(U.a, {
                          actionLabel: V,
                          headline: H,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: R,
                          secondaryActionLabel: W,
                          subtext: z,
                        })
                      : null,
                    _.a.createElement(F, {
                      autofocus: !0,
                      currentMediaId: o,
                      maxLength: 1e3,
                      mediaItem: t,
                      onChange: n,
                      onShowEducation: this._handleOpenEducationPrompt,
                      orientedImage: a,
                      value: r,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        G = x.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        q = j(K),
        X = n('jHSc'),
        Q = n('EeFI'),
        Y = n('7JQg'),
        J = n('9Q4p'),
        Z = n('PrL8'),
        $ = n('k/OQ'),
        ee = n('/yvb'),
        te = n('oQhu'),
        ne = n('ddV6'),
        ae = n.n(ne),
        re = function (e) {
          var t = new Map()
          return (
            e.forEach(function (e) {
              var n = ae()(e, 2),
                a = n[0],
                r = n[1]
              t.set(a, r)
            }),
            t
          )
        },
        ie = n('mN6z'),
        oe = n('95Se'),
        le = n('7Mjr'),
        se = n('Mbn/'),
        ce = n('zIWA'),
        de = n('1auM'),
        ue = n('eYns'),
        pe = { section: 'alt_text' },
        me = { section: 'crop' },
        he = { section: 'sensitive_media' },
        fe = T.a.e070024a,
        ge = T.a.i2209530,
        ve = T.a.i7d24b36,
        ye = T.a.f96a38a2,
        be = T.a.hac7c548,
        _e = T.a.e3dbfba3,
        we = T.a.dd4a83a5,
        Ce = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        Ee = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            s()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_cropper', _.a.createRef()),
              y()(
                p()(a),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === Ce.sensitiveMedia
                    ? { namespace: he, title: we, renderer: a._renderSensitiveMediaTab }
                    : e === Ce.altText
                    ? { namespace: pe, title: _e, renderer: a._renderAltTextTab }
                    : { namespace: me, title: be, renderer: a._renderCropTab }
                }),
              ),
              y()(p()(a), '_renderTabContent', function (e) {
                var t,
                  n = a.props,
                  r = n.location,
                  i = n.sensitiveMediaTabEnabled,
                  o = a._getMemoizedTabMetadata(e, i),
                  l = !(null !== (t = r.state) && void 0 !== t && t.hideTabs),
                  s = l ? a._getTabLinks(e) : [],
                  c = o.renderer()
                return l && s.length > 1
                  ? _.a.createElement(
                      _.a.Fragment,
                      null,
                      _.a.createElement($.a, { accessibilityLabel: fe, links: s }),
                      _.a.createElement(M.a, { style: Z.a.segmentedControlChildren }, c),
                    )
                  : c
              }),
              y()(p()(a), '_renderAltTextTab', function () {
                var e = a.props.history,
                  t = a.state,
                  n = t.currentMediaId,
                  r = t.mediaMetadata,
                  i = t.orientedImage,
                  o = a._getCurrentMediaItem(),
                  l = r[n] && r[n].altText
                return _.a.createElement(q, {
                  history: e,
                  key: n,
                  mediaItem: o,
                  onAltTextChange: a._handleAltTextChange,
                  orientedImage: i.get(n),
                  value: l,
                })
              }),
              y()(p()(a), '_renderCropTab', function () {
                var e = a.state,
                  t = e.cropData,
                  n = e.currentMediaId,
                  r = a._getCurrentMediaItem()
                return _.a.createElement(Q.a, {
                  defaultCropData: t.get(n),
                  key: n,
                  media: r,
                  ref: a._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              y()(p()(a), '_renderSensitiveMediaTab', function () {
                var e = a.state,
                  t = e.currentMediaId,
                  n = e.mediaMetadata,
                  r = e.orientedImage,
                  i = a._getCurrentMediaItem(),
                  o = n[t] && n[t].sensitiveMediaWarning
                return _.a.createElement(J.a, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: i,
                  onWarningChange: a._handleSensitiveWarningChange,
                  orientedImage: r.get(t),
                })
              }),
              y()(p()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing,
                  t = a._getNextMediaIndex(1),
                  n = a._getNextMediaIndex(-1)
                return _.a.createElement(
                  M.a,
                  { style: Z.a.rightControl },
                  a._hasMediaAtIndex(n) || a._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        M.a,
                        { style: [Z.a.rightControl, Z.a.leftRightButtons] },
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ye,
                          disabled: !a._hasMediaAtIndex(n),
                          icon: _.a.createElement(oe.a, null),
                          onPress: a._handleClickToMediaAtIndex(n),
                          size: 'small',
                          style: Z.a.prevButton,
                          type: 'primaryOutlined',
                        }),
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ve,
                          disabled: !a._hasMediaAtIndex(t),
                          icon: _.a.createElement(le.a, null),
                          onPress: a._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  _.a.createElement(
                    ee.a,
                    {
                      disabled: e,
                      onPress: a._handleEndEditingClick,
                      size: 'small',
                      style: Z.a.saveButton,
                      testID: k,
                      type: 'primaryFilled',
                    },
                    ge,
                  ),
                )
              }),
              y()(p()(a), '_handleCancelEditingClick', function (e) {
                a._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              y()(p()(a), '_handleClickTab', function (e) {
                var t = a.props.analytics
                a._handleSaveCropData(),
                  a._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              y()(p()(a), '_getCurrentMediaItem', function () {
                var e = a.props.media,
                  t = a.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              y()(p()(a), '_getNextMediaIndex', function (e) {
                var t = a.props.media,
                  n = a._getCurrentMediaItem()
                return t.indexOf(n) + e
              }),
              y()(p()(a), '_hasMediaAtIndex', function (e) {
                var t = a.props.media
                return e >= 0 && e < t.length
              }),
              y()(p()(a), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = a.props.media
                  if (a._hasMediaAtIndex(e)) {
                    a._handleSaveCropData()
                    var n = t[e].id
                    a.setState({ currentMediaId: n })
                  }
                }
              }),
              y()(p()(a), '_saveMediaMetadata', function () {
                var e = a.props,
                  t = e.media,
                  n = e.setMediaMetadata,
                  r = a.state.mediaMetadata
                t.forEach(function (e) {
                  n(e.id, r[e.id])
                })
              }),
              y()(p()(a), '_handleEndEditingClick', function () {
                var e = a.props.history,
                  t = a._cropper && a._cropper.current,
                  n = a.state.cropData
                if (t || n.size) {
                  var r = a.props,
                    i = r.media,
                    l = r.processMedia,
                    s = r.updateMediaUpload,
                    c = a.state.currentMediaId
                  a.setState({ isProcessing: !0 })
                  var d = t ? re([].concat(o()(n), [[c, t.getCropData()]])) : n,
                    u = i.map(function (e) {
                      return d.get(e.id) ? (s({ id: e.id, cropData: d.get(e.id) }), l(e.id)) : Promise.resolve()
                    })
                  Promise.all(u).then(function () {
                    a._scribeWithNamespace({ action: 'done' })
                  })
                }
                a._saveMediaMetadata(), e.goBack()
              }),
              y()(p()(a), '_handleAltTextChange', function (e) {
                a.setState(function (t) {
                  return {
                    mediaMetadata: r()(
                      r()({}, t.mediaMetadata),
                      {},
                      y()({}, t.currentMediaId, r()(r()({}, t.mediaMetadata[t.currentMediaId]), {}, { altText: e })),
                    ),
                  }
                })
              }),
              y()(p()(a), '_handleSensitiveWarningChange', function (e, t) {
                a.setState(function (n) {
                  var a =
                    (n.mediaMetadata[n.currentMediaId] && n.mediaMetadata[n.currentMediaId].sensitiveMediaWarning) ||
                    new Set()
                  return (
                    t ? a.add(e) : a.delete(e),
                    {
                      mediaMetadata: r()(
                        r()({}, n.mediaMetadata),
                        {},
                        y()(
                          {},
                          n.currentMediaId,
                          r()(r()({}, n.mediaMetadata[n.currentMediaId]), {}, { sensitiveMediaWarning: a }),
                        ),
                      ),
                    }
                  )
                })
              }),
              y()(p()(a), '_handleSaveCropData', function () {
                var e = a._cropper && a._cropper.current
                if (e) {
                  var t = a.state.currentMediaId,
                    n = e.getCropData(),
                    r = a._getCurrentMediaItem()
                  if (
                    r &&
                    !Object(ie.a)(n, a.state.cropData.get(t)) &&
                    (a.setState(function (e) {
                      return { orientedImage: re([].concat(o()(e.orientedImage), [[t, null]])) }
                    }),
                    r.originalMediaFile && r.originalMediaFile instanceof de.a)
                  ) {
                    var i = r.cropData
                    Object(ue.b)(r.originalMediaFile, { cropData: n || i })
                      .then(function (e) {
                        return new de.a(e).withDimensionsAndOrientation().then(function (e) {
                          a.setState(function (a) {
                            return {
                              orientedImage: re([].concat(o()(a.orientedImage), [[t, e]])),
                              cropData: re([].concat(o()(a.cropData), [[t, n]])),
                            }
                          })
                        })
                      })
                      .catch(function () {
                        a.setState(function (e) {
                          return { orientedImage: re([].concat(o()(e.orientedImage), [[t, void 0]])) }
                        })
                      })
                  }
                  a.setState(function (e) {
                    return { cropData: re([].concat(o()(e.cropData), [[t, n]])) }
                  })
                }
              }),
              y()(p()(a), '_scribeWithNamespace', function (e) {
                var t = a.props,
                  n = t.analytics,
                  i = t.sensitiveMediaTabEnabled,
                  o = a._getCurrentTab(),
                  l = a._getMemoizedTabMetadata(o, i)
                n.scribe(r()(r()({}, l.namespace), e))
              }),
              y()(p()(a), '_getMediaMetadata', function (e) {
                var t = {}
                return (
                  e.forEach(function (e) {
                    return (t[e.id] = e.mediaMetadata)
                  }),
                  t
                )
              })
            var i = e.initialMediaId,
              l = e.media,
              c = a._getMediaMetadata(l)
            return (
              (a.state = {
                cropData: new Map(),
                isProcessing: !1,
                mediaMetadata: c,
                currentMediaId: i || -1,
                orientedImage: new Map(),
              }),
              a
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.sensitiveMediaTabEnabled,
                    a = this._getCurrentTab(),
                    r = this._getMemoizedTabMetadata(a, n)
                  return _.a.createElement(
                    Y.c,
                    { namespace: r.namespace },
                    _.a.createElement(
                      X.b,
                      {
                        backButtonType: 'back',
                        containerStyle: Z.a.root,
                        documentTitle: r.title,
                        history: t,
                        onBackClick: this._handleCancelEditingClick,
                        rightControl: this._renderAppBarRightControl(),
                        title: r.title,
                      },
                      this._renderTabContent(a),
                    ),
                  )
                },
              },
              {
                key: '_getCurrentTab',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.location,
                    a = t.sensitiveMediaTabEnabled,
                    r = null === (e = n.state) || void 0 === e ? void 0 : e.tab
                  return a && r === Ce.sensitiveMedia ? Ce.sensitiveMedia : r === Ce.altText ? Ce.altText : Ce.crop
                },
              },
              {
                key: '_getTabLinks',
                value: function (e) {
                  var t,
                    n = this,
                    a = this.props,
                    i = a.analytics,
                    o = a.location,
                    l = a.sensitiveMediaTabEnabled,
                    s = this._getCurrentMediaItem(),
                    c = []
                  return (
                    null != s &&
                      null !== (t = s.originalMediaFile) &&
                      void 0 !== t &&
                      t.isImage &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Ce.crop }) }),
                        label: _.a.createElement(se.a, null),
                        key: Ce.crop,
                        accessibilityLabel: be,
                        isActive: function () {
                          return e === Ce.crop
                        },
                        onClick: function () {
                          return i.scribePageImpression()
                        },
                      }),
                    c.push({
                      to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Ce.altText }) }),
                      label: _.a.createElement(P.b, { weight: 'bold' }, 'ALT'),
                      key: Ce.altText,
                      accessibilityLabel: _e,
                      isActive: function () {
                        return e === Ce.altText
                      },
                      onClick: function () {
                        return n._handleClickTab('alt_text_button')
                      },
                    }),
                    l &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Ce.sensitiveMedia }) }),
                        label: _.a.createElement(ce.a, null),
                        key: Ce.sensitiveMedia,
                        accessibilityLabel: we,
                        isActive: function () {
                          return e === Ce.sensitiveMedia
                        },
                        onClick: function () {
                          return n._handleClickTab('sensitive_media_tab')
                        },
                      }),
                    c
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      t.b = Ee
    },
    '21U8': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('Rqga'), n('2G9S'), n('ERkP')),
        g = n.n(f),
        v = n('/yvb'),
        y = n('3XMw'),
        b = n.n(y),
        _ = n('3rX5'),
        w = n('rHpw'),
        C = n('MWbm'),
        E = w.a.create(function (e) {
          return {
            mask: {
              backgroundColor: 'transparent',
              borderWidth: e.spaces.space4,
              borderColor: e.colors.primary,
              boxShadow: '0 0 0 9999px '.concat(e.colors.activeFaintGray),
            },
            circle: { borderRadius: e.borderRadii.infinite },
          }
        }),
        T = function (e) {
          var t = e.circle,
            n = e.height,
            a = e.width
          return g.a.createElement(C.a, {
            pointerEvents: 'none',
            style: [E.mask, { width: a, height: n }, t && E.circle],
          })
        },
        x = n('ZvMt'),
        S = n('97Jx'),
        I = n.n(S),
        k = n('m3Bd'),
        R = n.n(k),
        M = n('CHgo'),
        P = n('7ep7'),
        L = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        D = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(s()(a), '_previousTouchDistance', 0),
              h()(s()(a), '_previousPositionX', 0),
              h()(s()(a), '_previousPositionY', 0),
              h()(s()(a), '_centerPosition', { x: 0, y: 0 }),
              h()(s()(a), '_panResponder', {}),
              h()(s()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(M.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(M.b)(e, a._preventDefaultEvent, !1))
                  var l = e.getBoundingClientRect()
                  a._centerPosition = { x: l.width / 2 + l.left, y: l.height / 2 + l.top }
                }
              }),
              h()(s()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(s()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  i = a.props,
                  o = i.onPanMove,
                  l = i.onPinchMove,
                  s = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (l) {
                    var c =
                        ((n = s[0]),
                        (r = s[1]),
                        Math.sqrt(Math.pow(n.pageY - r.pageY, 2) + Math.pow(n.pageX - r.pageX, 2))),
                      d = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(s[0], s[1]),
                      u = d.pageX,
                      p = d.pageY,
                      m = a._previousPositionX ? u - a._previousPositionX : 0,
                      h = a._previousPositionY ? p - a._previousPositionY : 0,
                      f = a._previousTouchDistance ? c - a._previousTouchDistance : 0
                    ;(a._previousPositionX = u), (a._previousPositionY = p), (a._previousTouchDistance = c)
                    var g = a._centerPosition
                    l(f, g.x - u, g.y - p, m, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              h()(s()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              h()(s()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = a._centerPosition,
                  l = o.x - t,
                  s = o.y - n
                a.props.onWheel && a.props.onWheel(r, i, l, s)
              }),
              (a._panResponder = P.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: a._handlePanResponderMove,
                onPanResponderRelease: a._handlePanResponderEnd,
                onPanResponderTerminate: a._handlePanResponderEnd,
              })),
              (a._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, R()(e, L))
                  return g.a.createElement(
                    C.a,
                    I()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
                    this.props.children,
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(),
                    this._removeScrollToScaleListener && this._removeScrollToScaleListener(),
                    this._removeSelectStartListener()
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        O = n('9RkS'),
        A = n('rOXj'),
        F = n('aITJ'),
        B = n('yiKp'),
        N = n.n(B),
        j = n('Lsrn'),
        U = n('k/Ka'),
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var z = H,
        V = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      V.metadata = { width: 24, height: 24 }
      var W = V,
        K = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      K.metadata = { width: 24, height: 24 }
      var G = K,
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              g.a.createElement('path', {
                d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      q.metadata = { width: 24, height: 24 }
      var X = q,
        Q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(U.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              g.a.createElement('path', {
                d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
              }),
            ),
          )
        }
      Q.metadata = { width: 24, height: 24 }
      var Y = Q,
        J = b.a.d85bc1b8,
        Z = b.a.f596ace8,
        $ = b.a.df031fca,
        ee = b.a.b40332c5,
        te = b.a.e547b368,
        ne = b.a.f7571204,
        ae = b.a.e6e16811,
        re =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ie = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a, i
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(s()(a), '_previousLeft', 0),
              h()(s()(a), '_previousTop', 0),
              h()(s()(a), '_panStyles', { top: 0, left: 0 }),
              h()(s()(a), '_shouldShowZoomControl', function () {
                return (!F.b.isMobileOS() || !A.a.isTouchSupported()) && a.props.withZoomControl
              }),
              h()(s()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  i = t.width / t.height,
                  o = a._shouldShowZoomControl()
                return n || o
                  ? g.a.createElement(
                      C.a,
                      { style: oe.controlsContainer },
                      n
                        ? g.a.createElement(
                            C.a,
                            { style: oe.ratioContainer },
                            g.a.createElement(v.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: r === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: g.a.createElement(z, null),
                              onPress: a._setAspectRatio(i),
                              size: 'medium',
                            }),
                            g.a.createElement(v.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: g.a.createElement(W, null),
                              onPress: a._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            g.a.createElement(v.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: g.a.createElement(G, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? g.a.createElement(
                            C.a,
                            { style: oe.zoomContainer },
                            g.a.createElement(O.a, {
                              accessibilityLabel: J,
                              max: a._maxScale,
                              maxIcon: g.a.createElement(X, { style: oe.icon }),
                              min: 0,
                              minIcon: g.a.createElement(Y, { style: oe.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              h()(s()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              h()(s()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              h()(s()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  i = n.width,
                  o = x.a.getCoverDimensions({ width: i, height: r }, t),
                  l = o.height
                return { width: o.width * Math.pow(2, e), height: l * Math.pow(2, e) }
              }),
              h()(s()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = x.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              h()(s()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              h()(s()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    o = r / n.width,
                    l = re(i / (t.width * o))
                  a.setState({ imageScale: l })
                  var s = a._getUnscaledCropData(),
                    c = s.left,
                    d = s.top
                  ;(a._panStyles.top = d - t.top * o * Math.pow(2, l)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = c - t.left * o * Math.pow(2, l)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              h()(s()(a), '_handleWheel', function (e, t, n, r) {
                var i = (-1 * t) / 500
                a.setState(function (e) {
                  var t = e.imageScale,
                    o = Math.min(a._maxScale, Math.max(t + i, 0))
                  return (
                    (a._panStyles.left += n * (o - t)),
                    (a._panStyles.top += r * (o - t)),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: o }
                  )
                })
              }),
              h()(s()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              h()(s()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              h()(s()(a), '_handlePinchMove', function (e, t, n, r, i) {
                var o = e / 200
                a.setState(function (e) {
                  var l = e.imageScale,
                    s = Math.min(a._maxScale, Math.max(l + o, 0))
                  return (
                    (a._panStyles.left += t * (s - l) + r),
                    (a._panStyles.top += n * (s - l) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: s }
                  )
                })
              }),
              h()(s()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  r = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  l = !1
                n < 0 && ((l = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  r < 0 && ((l = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  i > 0 && ((l = !0), (a._panStyles.left += i), (a._previousLeft += i)),
                  o > 0 && ((l = !0), (a._panStyles.top += o), (a._previousTop += o)),
                  l && a._updateNativeStyles()
              }),
              h()(s()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              h()(s()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  l = a._panStyles,
                  s = l.left
                return { top: (t - i) / 2 - l.top, left: (n - o) / 2 - s, width: o, height: i }
              }),
              h()(s()(a), '_setAspectRatio', function (e) {
                return function () {
                  a.setState({ aspectRatio: e })
                }
              }),
              (a.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (a._maxScale = ((i = e.image), Math.max(Math.min(re(i.width / 150), re(i.height / 150), 3), 0.5))),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    n = e.image,
                    a = e.withZoomControl,
                    r = this._getImageDimensions(),
                    i = r.height,
                    o = r.width,
                    l = this._getMaskDimensions(),
                    s = l.height,
                    c = l.width,
                    d = this.state.containerWidth && this.state.containerHeight
                  return g.a.createElement(
                    C.a,
                    { style: oe.container },
                    g.a.createElement(
                      D,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: a ? this._handlePinchMove : void 0,
                        onWheel: a ? this._handleWheel : void 0,
                        style: oe.root,
                      },
                      d
                        ? g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(_.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: oe.image,
                            }),
                            g.a.createElement(T, { circle: t, height: s, width: c }),
                          )
                        : null,
                    ),
                    d ? this._renderControls() : null,
                  )
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this._updateNativeStyles(), this._adjustToInBounds()
                },
              },
              {
                key: 'getCropData',
                value: function () {
                  var e = this._getImageDimensions().width,
                    t = this.props.image.width / e,
                    n = this._getUnscaledCropData()
                  return {
                    aspectRatio: this.state.aspectRatio,
                    top: Math.round(t * n.top),
                    left: Math.round(t * n.left),
                    width: Math.round(t * n.width),
                    height: Math.round(t * n.height),
                  }
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(ie, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var oe = w.a.create(function (e) {
        return {
          container: { flexGrow: 1, flexShrink: 1 },
          controlsContainer: {
            backgroundColor: e.colors.navigationBackground,
            minHeight: e.spaces.space20,
            flexDirection: 'row',
            paddingVertical: e.spaces.space4,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
          },
          ratioContainer: {
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          zoomContainer: {
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 1,
            justifyContent: 'center',
            height: e.spaces.space40,
            paddingHorizontal: e.spaces.space20,
            maxWidth: 400,
          },
          root: {
            flexGrow: 1,
            flexShrink: 1,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'move',
          },
          image: { position: 'absolute' },
          icon: { color: e.colors.gray700 },
        }
      })
      t.a = ie
    },
    '2WeA': function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var a = n('pcjM'),
        r = n('ORQL')
      t.default = Object(r.a)(a.default)
    },
    '2qZs': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M2.264 22.983c-.322 0-.638-.126-.88-.368-.374-.374-.473-.926-.25-1.405L2.8 17.58c-1.017-1.7-1.55-3.62-1.55-5.58C1.25 6.072 6.072 1.25 12 1.25S22.75 6.072 22.75 12 17.928 22.75 12 22.75c-1.957 0-3.876-.533-5.55-1.54l-3.66 1.657c-.17.078-.35.116-.526.116zm4.158-3.286c.278 0 .558.077.807.23 1.434.864 3.085 1.323 4.77 1.323 5.1 0 9.25-4.15 9.25-9.25S17.1 2.75 12 2.75 2.75 6.9 2.75 12c0 1.688.458 3.338 1.326 4.774.266.44.298.977.086 1.434l-1.384 3.014 3.016-1.386c.2-.093.413-.14.628-.14z',
              }),
              o.a.createElement('path', {
                d: 'M12 18.25c-3.446 0-6.25-2.804-6.25-6.25S8.554 5.75 12 5.75s6.25 2.804 6.25 6.25-2.804 6.25-6.25 6.25zm0-11c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75S14.62 7.25 12 7.25z',
              }),
              o.a.createElement('path', {
                d: 'M14.5 12.75c-.414 0-.75-.336-.75-.75 0-.965-.785-1.75-1.75-1.75-.414 0-.75-.336-.75-.75s.336-.75.75-.75c1.792 0 3.25 1.458 3.25 3.25 0 .414-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('2G9S')
      var a = n('1YZw'),
        r = n('pXBW'),
        i = n('3XMw'),
        o = n.n(i),
        l = n('SrIh'),
        s = o.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var i = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(i.id, ': ').concat(i.action)),
                Object(l.a)(n, { extra: { context: i, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '474o': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return i
        })
      n('yH/f')
      var a = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        r = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        i = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '4bHO': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('ho0z')
      var a = function (e, t) {
        switch (e.type) {
          case 'user':
            return '@'.concat('users' === t ? e.data.screen_name : e.data.name, ' ')
          case 'hashtag':
          case 'topic':
          case 'event':
            return ''.concat(e.data.topic, ' ')
          case 'dm_conversation':
            return ''.concat(e.data.name, ' ')
          case 'no_result':
            return ''.concat(e.data.text, ' ')
          default:
            return ''
        }
      }
    },
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              o.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '6XNv': function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = n('yiKp'),
        y = n.n(v),
        b = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(b),
        w = n('t62R'),
        C = n('piX5'),
        E = n('4r2z'),
        T = n('FG+G'),
        x = n('rHpw'),
        S = n('k/Ka'),
        I = n('shC7'),
        k = n('MWbm'),
        R = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        M = function (e) {
          return Object(S.a)('option', e)
        },
        P = 1,
        L = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              g()(d()(a), '_selectRef', _.a.createRef()),
              g()(d()(a), 'state', { isFocused: !1 }),
              g()(d()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  l = i.value
                n && n(l, o - (r ? 1 : 0))
              }),
              g()(d()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              g()(d()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(P)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (P += 1),
              a
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityDescribedBy,
                    n = e.disabled,
                    a = e.errorText,
                    i = e.hasError,
                    o = e.helperText,
                    l = e.options,
                    s = e.style,
                    c = e.testID,
                    d = e.value,
                    u = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = w.b.getLanguage(),
                    h =
                      'ja' === m
                        ? x.a.theme.fontFamilies.japan
                        : I.a.getConstants().isRTL || E.a.isLocaleRTL(m)
                        ? x.a.theme.fontFamilies.rtl
                        : x.a.theme.fontFamilies.normal,
                    f = void 0 === i ? !!a : i,
                    g = new Set()
                  a && g.add(this._errorID), t && g.add(t), o && g.add(this._helperID)
                  var v = g.size ? r()(g).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      k.a,
                      {
                        style: [
                          C.a.border,
                          D.container,
                          n && C.a.disabled,
                          p && C.a.focusedBorderValid,
                          f && C.a.invalidBorderColor,
                          p && f && C.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        R,
                        {
                          accessibilityDescribedBy: v,
                          accessibilityInvalid: f,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [D.select, { fontFamily: h }, n && C.a.disabled],
                          testID: c || '',
                          value: d,
                        },
                        u ? _.a.createElement(M, { disabled: !0, style: D.option, value: '' }) : null,
                        l.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            M,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: D.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(T.a, {
                        style: [D.dropdownCaret, p && C.a.validColor, (i || a) && C.a.invalidColor],
                      }),
                    ),
                    o ? this._renderHelperText() : null,
                    f && a ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    n = e.hasError,
                    a = e.label,
                    r = this.state.isFocused
                  return _.a.createElement(
                    w.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: D.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return _.a.createElement(
                    k.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'gray700', nativeID: this._helperID, style: D.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return _.a.createElement(
                    k.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'red500', nativeID: this._errorID, style: D.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      g()(L, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (L.propTypes = {})
      var D = x.a.create(function (e) {
        return {
          container: { backgroundColor: e.colors.cellBackground },
          dropdownCaret: {
            color: e.colors.gray700,
            height: ''.concat(1.5, 'em'),
            pointerEvents: 'none',
            position: 'absolute',
            marginTop: '-'.concat(0.75, 'em'),
            top: '50%',
            right: e.spaces.space12,
          },
          label: {
            position: 'absolute',
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space8,
            pointerEvents: 'none',
            lineHeight: e.lineHeights.subtext2,
          },
          option: { backgroundColor: e.colors.navigationBackground },
          select: {
            appearance: 'none',
            backgroundColor: 'transparent',
            borderRadius: e.borderRadii.none,
            borderWidth: e.borderWidths.none,
            color: e.colors.text,
            cursor: 'pointer',
            fontSize: e.fontSizes.headline2,
            lineHeight: e.lineHeights.headline2,
            margin: 0,
            marginTop: e.spaces.space16,
            outlineStyle: 'none',
            padding: 0,
            paddingTop: e.spaces.space12,
            paddingBottom: e.spaces.space8,
            paddingHorizontal: e.spaces.space8,
          },
          helperText: {
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space2,
          },
        }
      })
      t.a = L
    },
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('yH/f')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('EHV7'),
        l = n('rHpw'),
        s = l.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        c = n('7Mjr'),
        d = n('I4+6'),
        u = n('cm6r'),
        p = n('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var h = l.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          n = e.landingUrl,
          a = e.nativeID,
          f = e.rightControl,
          g = e.style,
          v = e.subtext,
          y = e.testID,
          b = e.text,
          _ = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(o.a, { style: s.icon })
              default:
                return null
            }
          })(t),
          w = v ? null : h.withSubtext,
          C = d.a.generate({
            backgroundColor: l.a.theme.colors.gray0,
            color: l.a.theme.colors.cellBackground,
            customFocusBackgroundColor: l.a.theme.colors.gray0,
            customHoverBackgroundColor: l.a.theme.colors.gray0,
            customPressedBackgroundColor: l.a.theme.colors.gray0,
          })
        return r.a.createElement(
          u.a,
          {
            interactiveStyles: n ? C : null,
            link: null == n ? void 0 : n.url,
            nativeID: a,
            style: [h.root, g],
            testID: y,
          },
          r.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: h.mainContent },
            r.a.createElement(p.a, { style: h.icon }, _),
            r.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: w, weight: 'heavy', withHashflags: !0 },
              b,
            ),
            r.a.createElement(
              p.a,
              { style: h.rightControlGroup },
              n ? r.a.createElement(p.a, { style: w }, r.a.createElement(c.a, { style: h.iconArrow })) : null,
              f ? r.a.createElement(p.a, null, f) : null,
            ),
          ),
          v
            ? r.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: h.subtext, withHashflags: !0 },
                v,
              )
            : null,
        )
      }
    },
    '7myi': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('M+/F'), n('ERkP')),
        g = n.n(f),
        v = n('oEoC'),
        y = n('2dXj'),
        b = n('4bHO'),
        _ = n('dzqK'),
        w = n('GZwR'),
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_genericWrapperRef', g.a.createRef()),
              h()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  l = t.source,
                  s = e.state,
                  c = s.canShowTypeahead,
                  d = s.queryContext,
                  u = c && d ? { word: d.word, resultType: d.resultType } : void 0
                return g.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: u,
                    ref: e._genericWrapperRef,
                    source: l || w.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType),
                    i = e._replaceToken(r, a),
                    o = i.newCursor,
                    l = i.newTweetText
                  n({ target: { value: l } }), e._updateDOMTextArea(o, l)
                }
                e._setQueryContext(void 0)
              }),
              h()(s()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              h()(s()(e), '_handleInputChange', function (t) {
                if (Object(_.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  a = e.state.queryContext
                e._textAreaRef = n
                var r = a && a.word,
                  i = n.value,
                  o = v.c(n.selectionStart, i),
                  l = o.end,
                  s = o.start,
                  c = o.word,
                  d = v.e(c || '', 'compose')
                if ((null == d ? void 0 : d.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (d) {
                    var u = d.q,
                      p = d.result_type
                    e._setQueryContext({ word: u, resultType: p, fullText: n.value, startIndex: s, endIndex: l })
                  } else e._setQueryContext(void 0)
              }),
              h()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(s()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.endIndex,
                    a = t.fullText,
                    r = t.startIndex,
                    i = a.slice(0, r)
                  return { newTweetText: i + e + a.slice(n), newCursor: i.length + e.length }
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.a = C
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
              }),
              o.a.createElement('path', {
                d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '9B+1': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('PbbS'),
        r = function (e) {
          return { topicId: e.topicId, functionalityType: e.functionalityType }
        },
        i = function (e) {
          return e === a.a.Star
            ? a.a.Star
            : e === a.a.Favorite
            ? a.a.Favorite
            : e === a.a.Interested
            ? a.a.Interested
            : a.a.Default
        }
    },
    '9Jxp': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('CXUS'),
        s = n('rHpw'),
        c = n('MWbm'),
        d = s.a.create(function () {
          return { hidden: { opacity: 0 } }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.draggableId,
          a = e.fromVirtualList,
          i = e.index,
          s = e.isBeingDragged,
          u = e.isDragDisabled
        return a && s
          ? o.a.createElement(c.a, { style: d.hidden }, t)
          : o.a.createElement(l.b, { draggableId: n, index: i, isDragDisabled: u }, function (e) {
              return o.a.createElement('div', r()({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps), t)
            })
      }
    },
    '9Q4p': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('GTeL'),
        o = n('3XMw'),
        l = n.n(o),
        s = n('MWbm'),
        c = n('PbQQ'),
        d = n('6vad'),
        u = n('e0ey'),
        p = n('rHpw'),
        m = n('ZkMC'),
        h = l.a.j9cf595f,
        f = l.a.d69a782e,
        g = l.a.faf745f9,
        v = l.a.b96e6682,
        y = l.a.h2437f25
      function b(e) {
        var t = e.currentWarnings,
          n = e.mediaItem,
          a = e.onWarningChange,
          o = e.orientedImage,
          l = [
            { label: g, value: 'adult_content' },
            { label: v, value: 'graphic_violence' },
            { label: y, value: 'other' },
          ],
          p = c.b.useOpaqueIdentifier(),
          b = r.a.createElement(i.a, { mediaItem: n, orientedImage: o })
        return r.a.createElement(
          s.a,
          { style: _.root },
          r.a.createElement(
            s.a,
            { style: _.modalContainer },
            null != t && t.size
              ? r.a.createElement(
                  m.a,
                  { revealableTombstoneConfig: m.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  b,
                )
              : b,
            r.a.createElement(d.b, { nativeID: p, subtext: f, text: h }),
            r.a.createElement(
              s.a,
              { accessibilityLabelledBy: p, accessibilityRole: 'group' },
              l.map(function (e) {
                var n = e.label,
                  i = e.value
                return r.a.createElement(u.a, { checked: t && t.has(i), key: i, label: n, name: i, onChange: a })
              }),
            ),
          ),
        )
      }
      var _ = p.a.create(function (e) {
        return {
          modalContainer: { width: '100%', height: '100%', flexGrow: 1 },
          root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
        }
      })
    },
    BLtI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return qn
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('97Jx'),
        o = n.n(i),
        l = n('yiKp'),
        s = n.n(l),
        c = n('VrFO'),
        d = n.n(c),
        u = n('Y9Ll'),
        p = n.n(u),
        m = n('1Pcy'),
        h = n.n(m),
        f = n('5Yy7'),
        g = n.n(f),
        v = n('2VqO'),
        y = n.n(v),
        b = n('KEM+'),
        _ = n.n(b),
        w =
          (n('2G9S'),
          n('KqXw'),
          n('WNMA'),
          n('hBvt'),
          n('ho0z'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('849X'),
          n('5BYb'),
          n('uFXj'),
          n('ERkP')),
        C = n.n(w),
        E = n('rcen'),
        T = n('Rp9C'),
        x = n('MWbm'),
        S = n('Irs7'),
        I = n('htQn'),
        k = n('t62R'),
        R = n('OOKO'),
        M = n('/yvb'),
        P = n('rHpw'),
        L = n('v6aA'),
        D = n('Lsrn'),
        O = n('k/Ka'),
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(O.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M20.937 3.223c-.403-.263-.948-.375-1.48-.195-.726.247-1.906.534-3.457.534-1.38 0-2.286-.225-3.273-.472l-.01-.003c-1.01-.252-2.1-.525-3.717-.525-1.67 0-3.235.484-4.357.946-.16.066-.312.132-.455.197V2.75c0-.518-.42-.938-.938-.938s-.937.42-.937.938v18.5c0 .518.42.938.938.938s.94-.42.94-.938v-2.457c.28-.15.682-.35 1.168-.55 1.002-.414 2.312-.806 3.642-.806 1.38 0 2.286.225 3.273.472l.01.002c1.01.253 2.102.525 3.717.525 2.4 0 4.075-.6 4.804-.922.58-.257.883-.823.883-1.378V4.577c0-.612-.343-1.088-.75-1.354zm-3.28 8.717c-.465.226-1.026.03-1.25-.435-.71-1.462-2.598-1.42-3.234.113l-.307.74c-.145.35-.487.58-.866.58-.38 0-.72-.23-.866-.58l-.308-.74c-.636-1.532-2.525-1.576-3.233-.113-.226.466-.786.66-1.252.435-.465-.226-.66-.786-.434-1.252C7.16 8.1 10.392 7.905 12 9.94c1.608-2.035 4.84-1.84 6.094.748.225.466.03 1.026-.436 1.252z',
              }),
            ),
          )
        }
      A.metadata = { width: 24, height: 24 }
      var F = A,
        B = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(O.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M3.25 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v1.247C5.144 3.453 7.007 2.75 9 2.75c1.592 0 2.655.266 3.682.522.982.246 1.91.478 3.318.478 1.687 0 2.945-.332 3.704-.61.41-.15.87-.086 1.235.168.35.244.56.64.56 1.054V16.21c0 .474-.272.905-.694 1.1-.62.284-2.325.94-4.806.94-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433v2.567c0 .414-.336.75-.75.75zM4 5.683v11.314c1.144-.544 3.007-1.247 5-1.247 1.592 0 2.655.266 3.682.522.982.245 1.91.478 3.318.478 1.975 0 3.36-.458 4-.725v-11.4c-.887.302-2.246.625-4 .625-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433z',
              }),
              C.a.createElement('path', {
                d: 'M17.925 10.77c-1.23-2.543-4.46-2.65-5.925-.496-1.465-2.153-4.695-2.047-5.925.495-.18.372-.025.82.348 1 .373.182.82.026 1.002-.347.78-1.61 2.878-1.556 3.575.123l.308.74c.116.28.39.464.693.464s.578-.182.694-.463l.306-.74c.697-1.68 2.795-1.734 3.575-.124.18.373.63.53 1.002.348.373-.18.53-.628.348-1z',
              }),
            ),
          )
        }
      B.metadata = { width: 24, height: 24 }
      var N = B,
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(O.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M17.296 2.642c-2.068-1.17-4.464-1.62-6.816-1.283C8.13 1.692 5.956 2.8 4.3 4.5c-1.658 1.707-2.704 3.91-2.976 6.27-.27 2.357.245 4.738 1.468 6.77.005.01.008.02.01.03 0 .01-.002.017-.004.025L1.12 21.2c-.11.232-.145.49-.103.742.043.254.162.488.343.67.18.184.412.307.665.353.253.047.514.014.747-.094l3.63-1.67h.01l.01.01.01.005c1.68 1.01 3.606 1.542 5.567 1.537 2.373 0 4.68-.783 6.562-2.232 1.882-1.45 3.23-3.482 3.836-5.778.604-2.298.432-4.73-.49-6.92-.925-2.188-2.548-4.01-4.614-5.178zM12 7.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75S14.623 7.25 12 7.25zM5.75 12c0-3.452 2.798-6.25 6.25-6.25s6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25S5.75 15.452 5.75 12zm5.5-2.5c0-.414.336-.75.75-.75 1.794 0 3.25 1.455 3.25 3.25 0 .413-.337.75-.75.75-.415 0-.75-.337-.75-.75 0-.967-.784-1.75-1.75-1.75-.414 0-.75-.336-.75-.75z',
              }),
            ),
          )
        }
      j.metadata = { width: 24, height: 24 }
      var U = j,
        H = n('7Mjr'),
        z = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_scribeAction', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.destinationUrl,
                  i = n.note
                a.scribe({ action: t, data: { items: [T.a.getBirdwatchItem(null == i ? void 0 : i.rest_id, r)] } })
              }),
              _()(h()(e), '_handlePivotClick', function () {
                e._scribeAction('click')
              }),
              _()(h()(e), '_getBirdwatchIcon', function (e) {
                switch (e) {
                  case 'BirdwatchFlagFill':
                    return C.a.createElement(F, { style: V.birdwatchIcon, testID: 'icon-birdwatch-flag' })
                  case 'BirdwatchFlagStroke':
                    return C.a.createElement(N, { style: V.birdwatchIcon, testID: 'icon-birdwatch-flag-stroke' })
                  default:
                    return C.a.createElement(U, { style: V.birdwatchIcon, testID: 'icon-birdwatch-fill' })
                }
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribeAction('impression')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.callToAction,
                    n = e.destinationUrl,
                    a = e.footer,
                    r = e.iconType,
                    i = e.subtitle,
                    o = e.title,
                    l = '#' === n ? void 0 : { pathname: n, anchorless: !0 },
                    s = l ? this._handlePivotClick : void 0,
                    c = (null == t ? void 0 : t.destinationUrl) || '#',
                    d = '#' === c ? void 0 : c
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    C.a.createElement(
                      I.a,
                      {
                        link: l,
                        onPress: s,
                        style: V.pivotContainer,
                        testID: 'birdwatch-pivot',
                        withInteractiveStyling: !!l,
                      },
                      C.a.createElement(
                        x.a,
                        { style: V.headerContainer },
                        C.a.createElement(
                          x.a,
                          { style: [V.headerTextContainer, !t && V.headerTextAndThumbnailContainer] },
                          this._getBirdwatchIcon(r),
                          C.a.createElement(k.b, { size: 'subtext1', style: V.birdwatchLabel, weight: 'bold' }, o),
                        ),
                        t ? null : C.a.createElement(H.a, { style: V.icon, testID: 'icon-arrow-right' }),
                      ),
                      i
                        ? C.a.createElement(E.a, {
                            entities: i.entities,
                            size: 'body',
                            style: V.subtitle,
                            text: i.text,
                          })
                        : null,
                      t
                        ? C.a.createElement(
                            C.a.Fragment,
                            null,
                            C.a.createElement(R.a, { spacing: 'space2' }),
                            C.a.createElement(
                              x.a,
                              { style: V.callToActionContainer },
                              C.a.createElement(k.b, { size: 'subtext1' }, t.prompt),
                              C.a.createElement(
                                M.a,
                                { link: d, onPress: this._handlePivotClick, size: 'small', type: 'primaryOutlined' },
                                t.title,
                              ),
                            ),
                          )
                        : null,
                    ),
                    a
                      ? C.a.createElement(E.a, {
                          color: 'gray700',
                          entities: a.entities,
                          size: 'subtext2',
                          style: V.footer,
                          text: a.text,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(z, 'contextType', L.a)
      var V = P.a.create(function (e) {
          return {
            birdwatchLabel: { display: 'flex', alignItems: 'center' },
            footer: { paddingVertical: e.spaces.space12 },
            pivotContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              marginTop: e.spaces.space12,
              overflow: 'hidden',
            },
            headerContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              backgroundColor: e.colors.hoverBlack,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            headerTextContainer: { flexDirection: 'row', width: '100%' },
            headerTextAndThumbnailContainer: { width: '80%' },
            callToActionContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            icon: { color: e.colors.text, paddingLeft: e.spaces.space12, flexShrink: 0 },
            birdwatchIcon: {
              marginRight: e.spacesPx.space4,
              padding: e.spacesPx.space2,
              color: e.colors.primary,
              flexShrink: 0,
            },
            thumbnail: { color: e.colors.whiteOnColor },
            subtitle: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12 },
          }
        }),
        W = Object(S.a)(z, { element: 'birdwatch_pivot' }),
        K = n('6/RC'),
        G = n('3XMw'),
        q = n.n(G),
        X = n('5S/X')
      n('jwue'), n('+oxZ'), n('z84I')
      function Q(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(Q.prototype = Object.create(Error.prototype)), (Q.prototype.constructor = Q)
      var Y = function (e, t) {
          if (!e) throw new Q(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
        },
        J = n('E6XO'),
        Z = n('sXY3'),
        $ = n('tn7R'),
        ee = n('+d3d'),
        te = n('oECP'),
        ne = n('fs1G'),
        ae = {},
        re = 0,
        ie = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        oe = function () {
          Object(Z.a)(ae).forEach(function (e, t) {
            var n = r()(e, 2),
              a = n[0],
              i = n[1],
              o = Object($.a)(i),
              l = o.length
            o.forEach(function (e) {
              Object(Z.a)(ie).map(function (t) {
                var n = r()(t, 2),
                  i = n[0],
                  o = r()(n[1], 2),
                  s = o[0],
                  c = o[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(l) &&
                  s in e &&
                  c in e &&
                  Object(J.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(a, i),
                    { duration_ms: e[s] - e[c] },
                  )
              })
            })
          }),
            Object(J.a)(),
            (ae = {})
        },
        le = Object(ee.a)(oe, 2e4) || oe,
        se = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Y(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var a = e.__lifecycleIdentifier
          return (
            !a && t && ((re += 1), (a = e.__lifecycleIdentifier = re)),
            (ae[n] && ae[n][a]) || (ae[n] = s()(s()({}, ae[n]), {}, _()({}, a, {}))),
            [n, a]
          )
        },
        ce = function (e, t, n, a) {
          ae[e][t][n] = a
        },
        de = K.canUseDOM
          ? function (e) {
              var t = {
                UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || ne.a,
                componentDidMount: e.prototype.componentDidMount || ne.a,
                UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || ne.a,
                componentDidUpdate: e.prototype.componentDidUpdate || ne.a,
                componentWillUnmount: e.prototype.componentWillUnmount || ne.a,
              }
              return (
                (e.prototype.UNSAFE_componentWillMount = function () {
                  for (
                    var e = se(this, !0),
                      n = r()(e, 2),
                      a = n[0],
                      i = n[1],
                      o = arguments.length,
                      l = new Array(o),
                      s = 0;
                    s < o;
                    s++
                  )
                    l[s] = arguments[s]
                  t.UNSAFE_componentWillMount.apply(this, l), ce(a, i, 'willMount', Date.now())
                }),
                (e.prototype.componentDidMount = function () {
                  for (
                    var e = se(this), n = r()(e, 2), a = n[0], i = n[1], o = arguments.length, l = new Array(o), s = 0;
                    s < o;
                    s++
                  )
                    l[s] = arguments[s]
                  t.componentDidMount.apply(this, l), ce(a, i, 'didMount', Date.now()), le()
                }),
                (e.prototype.UNSAFE_componentWillUpdate = function () {
                  for (
                    var e = se(this, !0),
                      n = r()(e, 2),
                      a = n[0],
                      i = n[1],
                      o = arguments.length,
                      l = new Array(o),
                      s = 0;
                    s < o;
                    s++
                  )
                    l[s] = arguments[s]
                  t.UNSAFE_componentWillUpdate.apply(this, l), ce(a, i, 'willUpdate', Date.now())
                }),
                (e.prototype.componentDidUpdate = function () {
                  for (
                    var e = se(this), n = r()(e, 2), a = n[0], i = n[1], o = arguments.length, l = new Array(o), s = 0;
                    s < o;
                    s++
                  )
                    l[s] = arguments[s]
                  t.componentDidUpdate.apply(this, l), ce(a, i, 'didUpdate', Date.now()), le()
                }),
                (e.prototype.componentWillUnmount = function () {
                  for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a]
                  t.componentWillUnmount.apply(this, n), le()
                }),
                e
              )
            }
          : te.a,
        ue = n('caTy'),
        pe = n('Y6L+'),
        me = (n('lTEL'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        he = Object(me.a)({
          loader: function () {
            return n.e(180).then(n.bind(null, 'mL9d'))
          },
        }),
        fe = n('m3Bd'),
        ge = n.n(fe),
        ve = n('xM7j'),
        ye = n('LKCq'),
        be = ['onActionClick'],
        _e = 'inner_tombstone'
      function we(e) {
        var t,
          n = e.children,
          a = e.config,
          r = e.nativeID,
          i = Object(S.b)()
        if (X.b) return n
        var l = (null === (t = a.richRevealText) || void 0 === t ? void 0 : t.text) || a.revealText,
          s = a.richText
            ? C.a.createElement(E.a, {
                alignment: a.richText.alignment,
                entities: a.richText.entities,
                onEntityClick: function () {
                  i.scribe({ action: 'open_link', component: _e })
                },
                rtl: a.richText.rtl,
                text: a.richText.text,
              })
            : a.text
        return C.a.createElement(
          x.a,
          { nativeID: r },
          l
            ? C.a.createElement(
                ye.a,
                {
                  label: s,
                  onReveal: function () {
                    i.scribe({ action: 'click', component: _e })
                  },
                  render: function (e) {
                    var t = e.onActionClick,
                      n = ge()(e, be)
                    return C.a.createElement(ve.a, o()({}, n, { inline: !0, onClick: t }))
                  },
                  revealLabel: l,
                },
                n,
              )
            : C.a.createElement(ve.a, { inline: !0 }, s),
        )
      }
      var Ce = n('PeW/'),
        Ee = n('3IPs'),
        Te = (n('1t7P'), n('jQ/y'), n('PbbS')),
        xe = n('LWCC'),
        Se = n('JUsM'),
        Ie = P.a.create(function (e) {
          return { topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) } }
        }),
        ke = function (e) {
          var t = e.defaultRef,
            n = e.topic,
            a = e.topicFollowPrompt,
            r = (null == a ? void 0 : a.description) || {},
            i = r.entities,
            o = r.text
          return C.a.createElement(
            x.a,
            { style: Ie.topicFollowPrompt },
            C.a.createElement(Se.a, {
              containerRef: t,
              primaryAction: C.a.createElement(xe.a, {
                showRelationshipChangeConfirmation: !0,
                textMode: Te.a.FollowTopic,
                topic: n,
              }),
              text: C.a.createElement(E.a, { entities: i, text: o }),
            }),
          )
        },
        Re = n('SrIh'),
        Me = n('gdQ4'),
        Pe = n('qbku'),
        Le = n('tocL'),
        De = 'analyticsButton',
        Oe = 'promotedIndicator',
        Ae = 'readerModeBottomBar',
        Fe = 'socialContext',
        Be = 'tweet',
        Ne = n('X04g'),
        je = n('v/3V'),
        Ue = (n('Ysgh'), n('RqPI')),
        He = n('3zvM'),
        ze = n('lMB6'),
        Ve = n('iChn'),
        We = Object(He.e)({
          namespace: 'translationsTweets',
          fetchOneContext: 'FETCH_TWEET_TRANSLATION',
          fetchOneEndpoint: function (e) {
            return function (t, n) {
              return e.Tweets.fetchTranslation(t, n).then(Ke)
            }
          },
          fetchOneParams: function (e) {
            return { id: e }
          },
        }),
        Ke = function (e) {
          var t = Array.isArray(e) ? e : [e]
          return {
            entities: {
              translationsTweets: Object(Ve.a)(t, function (e) {
                return e.id_str
              }),
            },
          }
        },
        Ge = ze.a.register(We),
        qe = n('rxPX'),
        Xe = n('0KEI'),
        Qe = function (e, t) {
          return Ge.select(e, t.tweetId)
        },
        Ye = function (e, t) {
          return Ge.selectFetchStatus(e, t.tweetId)
        },
        Je = Object(qe.a)()
          .propsFromState(function () {
            return { translation: Qe, translationFetchStatus: Ye, userLanguage: Ue.p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Xe.createLocalApiErrorHandlerWithContextFactory)('TRANSLATE_TWEET'),
              fetchTranslation: Ge.fetchOneIfNeeded,
            }
          }),
        Ze = n('PdwO'),
        $e = n('cTG8'),
        et = n('oQhu'),
        tt = n('YeIG'),
        nt = n('Gpeq'),
        at = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'enrichments',
          'fetchTranslation',
          'header',
          'hitHighlights',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'weight',
          'withOriginalText',
        ],
        rt = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'fetchTranslation',
          'header',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'withOriginalText',
        ],
        it = q.a.b4947556,
        ot = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_fetchTranslation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTranslation)(t.tweetId).catch(n())
              }),
              _()(h()(e), '_shouldDisableTranslation', function () {
                var t = e.props,
                  n = t.disableTranslation,
                  a = t.displayTextRange,
                  r = t.entities,
                  i = t.lang,
                  o = t.supplementalLang,
                  l = t.text,
                  s = t.userLanguage
                return e._getMemoizedDisableTranslation(n, a, r, l, i, o, s)
              }),
              _()(h()(e), '_renderTranslation', function () {
                var t = e.props,
                  n =
                    (t.createLocalApiErrorHandler,
                    t.disableTranslation,
                    t.enrichments,
                    t.fetchTranslation,
                    t.header,
                    t.hitHighlights,
                    t.onMediaTranslation,
                    t.style,
                    t.supplementalLang,
                    t.translation),
                  a = (t.translationFetchStatus, t.tweetId, t.userLanguage, t.weight, t.withOriginalText, ge()(t, at))
                if (n)
                  return C.a.createElement(
                    $e.a,
                    o()({}, a, {
                      displayTextRange: e._getMemoizedDisplayTextRange(n.text),
                      entities: n.entities,
                      lang: n.destinationLanguage,
                      text: n.text,
                    }),
                  )
              }),
              _()(
                h()(e),
                '_getMemoizedDisplayTextRange',
                Object(et.a)(function (e) {
                  return [0, e.length]
                }),
              ),
              _()(
                h()(e),
                '_getMemoizedDisableTranslation',
                Object(et.a)(function (e, t, n, a, r, i, o) {
                  var l = o && Object(nt.c)(r.split('-')[0]) !== Object(nt.c)(o.split('-')[0])
                  return e || !!i || !l || !Object(nt.b)({ displayTextRange: t, entities: n, text: a, language: r })
                }),
              ),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.onMediaTranslation,
                    a = t.translation
                  if (e.translation !== a && a) {
                    var r,
                      i = this.context.featureSwitches,
                      o = {}
                    ;((null == a || null === (r = a.entities) || void 0 === r ? void 0 : r.media) || []).forEach(
                      function (e) {
                        e.alt_text && (o[e.id_str] = e.alt_text)
                      },
                    ),
                      n && !Object(tt.a)(o) && i.isTrue('responsive_web_alt_text_translations_enabled') && n(o)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.createLocalApiErrorHandler, e.disableTranslation, e.fetchTranslation, e.header),
                    n = (e.onMediaTranslation, e.style),
                    a = (e.supplementalLang, e.translation),
                    r = e.translationFetchStatus,
                    i = e.tweetId,
                    o = (e.userLanguage, e.withOriginalText),
                    l = ge()(e, rt)
                  return C.a.createElement(
                    Ze.a,
                    {
                      disableTranslation: this._shouldDisableTranslation(),
                      fetchTranslation: this._fetchTranslation,
                      header: t,
                      key: i,
                      originLanguage: a && a.localizedSourceLanguage,
                      style: n,
                      translateButtonText: it,
                      translatedMessage: this._renderTranslation(),
                      translationFetchStatus: r,
                      withOriginalText: o,
                    },
                    C.a.createElement($e.a, l),
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(ot, 'contextType', L.a)
      var lt = Je(ot),
        st = n('2qZs'),
        ct = n('wwsH'),
        dt = { viewType: 'birdwatch' },
        ut = P.a.create(function (e) {
          return { birdwatchIcon: { marginLeft: e.spaces.space12 } }
        }),
        pt = function (e) {
          var t = e.onPress,
            n = e.onShow,
            a = e.tweetId,
            r = { pathname: '/i/birdwatch/t/'.concat(a), external: !0 }
          return (
            C.a.useEffect(
              function () {
                n && n()
              },
              [n],
            ),
            C.a.createElement(ct.a, {
              Icon: st.a,
              accessibilityLabel: 'Birdwatch note',
              activeColor: 'primary',
              behavioralEventContext: dt,
              link: r,
              onPress: t,
              style: ut.birdwatchIcon,
            })
          )
        },
        mt = n('xXop'),
        ht = n('xrkw'),
        ft = n('mqpi'),
        gt = q.a.g1fa869c,
        vt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_shouldDisable', ft.b.bind(null, e.context.featureSwitches)),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.endControl,
                    n = e.loggedInUserId,
                    a = e.onAnalyticsClick,
                    r = e.style,
                    i = e.tweet
                  return !this._shouldDisable(i, ft.a.Analytics) && n === i.user.id_str
                    ? C.a.createElement(
                        x.a,
                        { style: [yt.activityContainerWithChildren, r] },
                        C.a.createElement(
                          I.a,
                          {
                            link: ''.concat(i.permalink, '/analytics'),
                            onPress: a,
                            style: yt.analyticsButton,
                            testID: De,
                          },
                          C.a.createElement(ht.a, { style: yt.analyticsIcon }),
                          C.a.createElement(k.b, { color: 'gray700' }, gt),
                        ),
                        t,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      _()(vt, 'contextType', L.a)
      var yt = P.a.create(function (e) {
          return {
            analyticsIcon: { color: e.colors.gray700, paddingRight: e.spaces.space4 },
            analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: 'row', flexGrow: 1 },
            activityContainerWithChildren: {
              justifyContent: 'space-between',
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
              alignItems: 'center',
            },
          }
        }),
        bt = vt,
        _t = n('tmUV'),
        wt = n('YBcl'),
        Ct = n('k89r'),
        Et = function (e) {
          var t = Object(Ct.a)()
          return C.a.createElement(
            wt.a,
            o()({}, e, {
              handleAnchorAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'see_conversation', action: 'click' })
              },
              handleAnchorOpen: function (e) {
                t.scribe({ element: e, action: 'click' })
              },
              handleAnchorSecondaryAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'ok', action: 'click' })
              },
              handleHeadsUpImpression: function (e, n) {
                t.scribe({ element: 'heads_up_context', action: n, data: { tweet_id: e } })
              },
            }),
          )
        },
        Tt = n('uFYP'),
        xt = q.a.g6237a1e,
        St = q.a.d6b5949e,
        It = function (e) {
          switch (e) {
            case 'paused':
              return St
            case 'in-progress':
            default:
              return xt
          }
        },
        kt = function (e) {
          var t = e.nativeID,
            n = e.status,
            a = e.style,
            r = 'paused' === n
          return C.a.createElement(
            x.a,
            { style: [Rt.root, a] },
            C.a.createElement(Tt.a, { style: [Rt.icon, r ? Rt.withGray700 : null] }),
            C.a.createElement(k.b, { color: r ? 'gray700' : 'text', nativeID: t, size: 'subtext2' }, It(n)),
          )
        },
        Rt = P.a.create(function (e) {
          return {
            root: { alignItems: 'center', flexDirection: 'row' },
            icon: { color: e.colors.buttonBlack, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
            withGray700: { color: e.colors.gray700 },
          }
        }),
        Mt = n('TuTd'),
        Pt = function (e, t) {
          return Object(Mt.a)(e, t.tweetId)
        },
        Lt = Object(qe.a)()
          .propsFromState(function () {
            return { liveCounts: Pt }
          })
          .adjustStateProps(function (e) {
            var t = e.liveCounts
            return {
              liveLikeCount: t && t.likeCount,
              liveQuoteCount: t && t.quoteCount,
              liveRetweetCount: t && t.retweetCount,
            }
          }),
        Dt = (n('KOtZ'), n('LW0h'), n('tQbP'), n('Jkc4')),
        Ot = n('855f'),
        At = n('MtXG'),
        Ft = n('de1q'),
        Bt = n('cHvH'),
        Nt = q.a.fd80ffbf,
        jt = P.a.theme.spacesPx.space20,
        Ut = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              d()(this, n),
              (r = t.call(this, e, a)),
              _()(
                h()(r),
                '_reactionsLegacyHeartEnabled',
                r.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              _()(h()(r), '_renderQuoteTweetTimelinePivot', function () {
                var e = r.props.permalink
                return C.a.createElement(
                  I.a,
                  {
                    link: ''.concat(e, '/retweets/with_comments'),
                    onPress: r._handleQuoteTweetPivotScribeOnClick,
                    style: Ht.quoteTweetPivot,
                    withDarkerInteractiveBackground: !1,
                  },
                  C.a.createElement(k.b, { color: 'primary' }, Nt),
                )
              }),
              _()(h()(r), '_updateStateIfChanged', function (e, t) {
                return function (n) {
                  var a = n.nativeEvent.layout.width
                  a !== e() && t(a)
                }
              }),
              _()(
                h()(r),
                '_handleQuoteTweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.quoteTweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ quoteTweetLabelWidth: e })
                  },
                ),
              ),
              _()(
                h()(r),
                '_handleRetweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.retweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ retweetLabelWidth: e })
                  },
                ),
              ),
              _()(
                h()(r),
                '_handleLikeStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.likeLabelWidth
                  },
                  function (e) {
                    return r.setState({ likeLabelWidth: e })
                  },
                ),
              ),
              _()(
                h()(r),
                '_handleStatGroupLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.groupWidth
                  },
                  function (e) {
                    return r.setState({ groupWidth: e })
                  },
                ),
              ),
              _()(h()(r), '_handleRetweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'retweet_stat', action: 'click' })
              }),
              _()(h()(r), '_handleQuoteTweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_stat', action: 'click' })
              }),
              _()(h()(r), '_handleQuoteTweetPivotScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_pivot', action: 'click' })
              }),
              (r.state = {
                retweetLabelWidth: void 0,
                likeLabelWidth: void 0,
                quoteTweetLabelWidth: void 0,
                groupWidth: void 0,
              }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.isNonCompliantTweet,
                    a = e.quoteTweetCount
                  n && t.scribe({ element: 'quote_tweet_pivot', action: 'impression' }),
                    a && a > 0 && t.scribe({ element: 'quote_tweet_stat', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.isNonCompliantTweet ? this._renderQuoteTweetTimelinePivot() : this._renderStats()
                },
              },
              {
                key: '_renderReaction',
                value: function (e) {
                  var t = this,
                    n = this.props.permalink,
                    a = Ot.a.getTruncatedCount(e.count),
                    r = { pathname: ''.concat(n, '/reactions'), state: { reactionType: e.type } }
                  return C.a.createElement(
                    x.a,
                    { key: e.type },
                    C.a.createElement(Dt.a, null, function (n) {
                      return C.a.createElement(
                        At.a,
                        { count: e.count, link: r, onPress: n() },
                        C.a.createElement(
                          x.a,
                          { style: Ht.reactionStat },
                          C.a.createElement(Ft.a, {
                            legacyHeart: t._reactionsLegacyHeartEnabled,
                            reactionType: e.type,
                            style: Ht.reaction,
                          }),
                          C.a.createElement(At.a.Value, { animated: !0, count: e.count, weight: 'normal' }, a),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderReactionsStatsGroup',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.permalink,
                    a = t.reactionCount,
                    r =
                      (a &&
                        a.reduce(function (e, t) {
                          return (t.count || 0) + e
                        }, 0)) ||
                      0
                  if (!r || !a) return null
                  var i = Ot.a.getTruncatedCount(r),
                    o = a
                      .sort(function (e, t) {
                        return t.count - e.count
                      })
                      .filter(function (e) {
                        return e.count > 0
                      })
                  return C.a.createElement(Bt.a, null, function (t) {
                    var a = t.windowWidth
                    return C.a.createElement(
                      At.a.Group,
                      { style: [Ht.detailItemContainer, Ht.detailItem] },
                      a > P.a.theme.breakpoints.small
                        ? C.a.createElement(
                            x.a,
                            null,
                            C.a.createElement(Dt.a, null, function (e) {
                              return C.a.createElement(
                                At.a,
                                { count: r, link: ''.concat(n, '/reactions'), onPress: e() },
                                C.a.createElement(
                                  q.a.I18NFormatMessage,
                                  { $i18n: 'd01be6d8' },
                                  C.a.createElement(
                                    At.a.Value,
                                    { animated: !0, count: r },
                                    q.a.b4a4e4aa({ displayCountAll: i }),
                                  ),
                                  C.a.createElement(At.a.Label, null, q.a.ifa70ada({ count: r })),
                                ),
                              )
                            }),
                          )
                        : null,
                      o.map(function (t) {
                        return e._renderReaction(t)
                      }),
                    )
                  })
                },
              },
              {
                key: '_renderLikesStat',
                value: function (e) {
                  var t = Ot.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return C.a.createElement(
                    x.a,
                    { onLayout: this._handleLikeStatLayout },
                    C.a.createElement(Dt.a, null, function (a) {
                      return C.a.createElement(
                        At.a,
                        { count: e, link: ''.concat(n, '/likes'), onPress: a() },
                        C.a.createElement(
                          q.a.I18NFormatMessage,
                          { $i18n: 'e4eeeefe' },
                          C.a.createElement(At.a.Value, { animated: !0, count: e }, q.a.ha054943({ displayCount: t })),
                          C.a.createElement(At.a.Label, null, q.a.d260af55({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderRetweetsStat',
                value: function (e) {
                  var t = this,
                    n = Ot.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return C.a.createElement(
                    x.a,
                    { onLayout: this._handleRetweetStatLayout },
                    C.a.createElement(Dt.a, null, function (r) {
                      return C.a.createElement(
                        At.a,
                        { count: e, link: ''.concat(a, '/retweets'), onPress: r(t._handleRetweetScribeOnClick) },
                        C.a.createElement(
                          q.a.I18NFormatMessage,
                          { $i18n: 'b07c7c02' },
                          C.a.createElement(At.a.Value, { animated: !0, count: e }, q.a.j142cb3f({ displayCount: n })),
                          C.a.createElement(At.a.Label, null, q.a.e59a4e90({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderQuoteTweetsStat',
                value: function (e) {
                  var t = this,
                    n = Ot.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return C.a.createElement(
                    x.a,
                    { onLayout: this._handleQuoteTweetStatLayout },
                    C.a.createElement(Dt.a, null, function (r) {
                      return C.a.createElement(
                        At.a,
                        {
                          count: e,
                          link: ''.concat(a, '/retweets/with_comments'),
                          onPress: r(t._handleQuoteTweetScribeOnClick),
                        },
                        C.a.createElement(
                          q.a.I18NFormatMessage,
                          { $i18n: 'f0259953' },
                          C.a.createElement(At.a.Value, { animated: !0, count: e }, q.a.f6e12705({ displayCount: n })),
                          C.a.createElement(At.a.Label, null, q.a.e2414184({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderStats',
                value: function () {
                  var e = this.props,
                    t = e.containerStyle,
                    n = e.likeCount,
                    a = e.quoteTweetCount,
                    r = e.reactionCount,
                    i = e.retweetCount,
                    o = e.style,
                    l = e.withReactions,
                    s = this.state,
                    c = s.groupWidth,
                    d = s.likeLabelWidth,
                    u = s.quoteTweetLabelWidth,
                    p = s.retweetLabelWidth,
                    m = p && u && d && c && p + jt + (l ? 0 : d + jt) + u > c,
                    h = c,
                    f = l ? void 0 : n
                  return i || f || a || r
                    ? C.a.createElement(
                        x.a,
                        { onLayout: this._handleStatGroupLayout, style: h ? t : Ht.hidden },
                        l ? this._renderReactionsStatsGroup() : null,
                        i || f || a
                          ? C.a.createElement(
                              At.a.Group,
                              { style: [Ht.detailItemContainer, Ht.detailItem, Ht.noWrap, o] },
                              i ? this._renderRetweetsStat(i) : null,
                              a ? this._renderQuoteTweetsStat(a) : null,
                              f && !m ? this._renderLikesStat(f) : null,
                            )
                          : null,
                        m && f
                          ? C.a.createElement(
                              At.a.Group,
                              { style: [Ht.detailItemContainer, Ht.detailItem, o] },
                              this._renderLikesStat(f),
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      _()(Ut, 'contextType', L.a)
      var Ht = P.a.create(function (e) {
          return {
            detailItem: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space16 },
            detailItemContainer: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
            },
            hidden: { visibility: 'hidden' },
            noWrap: { flexWrap: 'nowrap' },
            quoteTweetPivot: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              paddingVertical: e.spaces.space16,
            },
            reaction: { width: '1.2em', height: '1.2em', marginRight: '0.5em' },
            reactionStat: { flexDirection: 'row', alignItems: 'center', display: 'inline-flex' },
          }
        }),
        zt = Object(S.a)(Ut)
      var Vt = Lt(function (e) {
          var t = e.containerStyle,
            n = e.isNonCompliantTweet,
            a = e.liveLikeCount,
            r = e.liveQuoteCount,
            i = e.liveRetweetCount,
            o = e.tweetLikeCount,
            l = e.tweetPermalink,
            s = e.tweetQuoteTweetCount,
            c = e.tweetReactionCount,
            d = e.tweetRetweetCount,
            u = e.withReactions
          return C.a.createElement(zt, {
            containerStyle: t,
            isNonCompliantTweet: n,
            likeCount: a || o,
            permalink: l,
            quoteTweetCount: r || s,
            reactionCount: c,
            retweetCount: i || d,
            withReactions: u,
          })
        }),
        Wt = n('avOP'),
        Kt = function (e) {
          var t = e.children
          return X.b ? C.a.createElement(Wt.a, { itemProp: 'articleBody' }, t) : t
        },
        Gt = n('hqKg'),
        qt = n('B/Qy'),
        Xt = n('M0jS'),
        Qt = function (e, t) {
          return Xt.b.select(e, t.userId)
        },
        Yt = Object(qe.a)().propsFromState(function () {
          return {
            userSpace: Object(Gt.createSelector)(Qt, function (e) {
              var t = e ? e.spaces : void 0
              return t
                ? {
                    presenceRingType: 'space',
                    link: {
                      pathname: Object(qt.a)(t.live_content.audiospace.broadcast_id),
                      state: { origin: 'audiospace_ring' },
                    },
                  }
                : void 0
            }),
          }
        }),
        Jt = n('Sksh'),
        Zt = n('1I0O'),
        $t = n('jhWN'),
        en = function (e) {
          var t = e.avatarRef,
            n = e.imageLayoutCache,
            a = e.nativeID,
            r = e.onClick,
            i = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            s = e.screenName,
            c = e.size,
            d = e.style,
            u = e.uri,
            p = e.userId,
            m = e.userSpace,
            h = e.withHoverCard,
            f = e.withLink
          return (
            C.a.useEffect(
              function () {
                return (
                  Jt.a.registerUserInApp(p),
                  function () {
                    Jt.a.deregisterUserInApp(p)
                  }
                )
              },
              [p],
            ),
            m
              ? C.a.createElement(
                  Zt.a,
                  o()(
                    {
                      avatarRef: t,
                      imageLayoutCache: n,
                      nativeID: a,
                      onClick: r,
                      onHoverCardScreenNameClick: i,
                      promotedContent: l,
                      screenName: s,
                      size: c,
                      style: d,
                      uri: u,
                      withHoverCard: h,
                      withLink: f,
                    },
                    m,
                  ),
                )
              : C.a.createElement($t.a, {
                  avatarRef: t,
                  imageLayoutCache: n,
                  nativeID: a,
                  onClick: r,
                  onHoverCardScreenNameClick: i,
                  promotedContent: l,
                  screenName: s,
                  size: c,
                  style: d,
                  uri: u,
                  withHoverCard: h,
                  withLink: f,
                })
          )
        },
        tn = Yt(C.a.memo(en)),
        nn = n('FGLp'),
        an = n('TIdA'),
        rn = n('DNho'),
        on = an.a.createLayoutCache(),
        ln = P.a.create(function (e) {
          return { avatar: { display: 'block' }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: '100%' } }
        }),
        sn = function (e) {
          var t = Object(S.b)(),
            n = C.a.useContext(L.a).featureSwitches,
            a = e.avatarRef,
            r = e.nativeID,
            i = e.onClick,
            o = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            s = e.screenName,
            c = e.uri,
            d = e.userId,
            u = e.withHoverCard,
            p = void 0 === u || u,
            m = e.withLink,
            h = void 0 === m || m,
            f = e.withNftAvatar,
            g = e.withUserPresence,
            v = void 0 !== g && g
          return (
            Object(nn.a)(function () {
              f && n.isTrue('responsive_web_nft_avatar') && t.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            C.a.createElement(
              x.a,
              { style: ln.avatarWrapper },
              C.a.createElement(rn.a.Consumer, null, function (e) {
                var t = e.avatarSize
                return v
                  ? C.a.createElement(tn, {
                      avatarRef: a,
                      imageLayoutCache: on,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: s,
                      size: t,
                      style: ln.avatar,
                      uri: c,
                      userId: d,
                      withHoverCard: p,
                      withLink: h,
                    })
                  : C.a.createElement($t.a, {
                      avatarRef: a,
                      imageLayoutCache: on,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: s,
                      size: t,
                      style: ln.avatar,
                      uri: c,
                      withHoverCard: p,
                      withLink: h,
                    })
              }),
            )
          )
        },
        cn = n('aITJ'),
        dn = n('E0cF'),
        un = n('Z6aJ'),
        pn = n('dCqJ'),
        mn = n('Olb6'),
        hn = n('nBUg'),
        fn = n('r7g+'),
        gn = n('PbQQ'),
        vn = n('e5HP'),
        yn = n('JWUO'),
        bn = n('9VO7'),
        _n = n('GBcw'),
        wn = n('jV+4'),
        Cn = n('ir4X'),
        En = n('aA1u'),
        Tn = n('kY28'),
        xn = n('6nXH')
      function Sn(e, t, n) {
        var a,
          r = dn.a.getOriginalTweet(e),
          i = null == r || null === (a = r.entities) || void 0 === a ? void 0 : a.hashtags
        if (Array.isArray(i) && !(i.length < 1)) {
          var o = i[0]
          return n &&
            (function (e) {
              var t = dn.a.getOriginalTweet(e),
                n = t.extended_entities && t.extended_entities.media
              return (
                !!(n && n.length > 0) &&
                n.some(function (e) {
                  return 'animated_gif' === e.type
                })
              )
            })(e) &&
            t.isTrue('responsive_web_hashtag_highlight_is_enabled')
            ? o.text
            : void 0
        }
      }
      function In(e, t) {
        if (e && t.isTrue('responsive_web_hashtag_highlight_show_avatar')) return e.profile_image_url_https
      }
      n('yH/f')
      var kn = n('9B+1'),
        Rn = n('YICZ'),
        Mn = n('21zW'),
        Pn = n('8bWS'),
        Ln = q.a.gf5e9ea6,
        Dn = q.a.e2f2b658,
        On = Object.freeze({
          see_more: q.a.ffd9cfe6,
          discover_more: q.a.d172116a,
          more: q.a.h63a5c3b,
          more_tweets: q.a.iac074c3,
          more_suggestions: q.a.g11ebd34,
          browse: q.a.g4a69019,
          browse_tweets: q.a.b1abb17d,
        })
      var An = function (e) {
          var t = e.onUndoTopicNotInterestedClick
          return C.a.createElement(
            x.a,
            { style: Nn.tombstone },
            C.a.createElement(ve.a, { actionText: Ln, children: Dn, inline: !0, onClick: t }),
          )
        },
        Fn = Object(S.a)(function (e) {
          var t = e.analytics,
            n = e.bannerText,
            a = e.label,
            r = e.link,
            i = e.linkText,
            o = e.onNotInterestedPress,
            l = e.topic,
            s = e.withRightControl,
            c = n && '' === n.text,
            d = i && '' === i.text,
            u = !d,
            p = !(c || d)
          return C.a.createElement(
            x.a,
            { style: Nn.topicActions },
            p && C.a.createElement(Mn.a, null),
            u &&
              C.a.createElement(
                k.b,
                {
                  color: 'primary',
                  link: r,
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  size: 'subtext2',
                  weight: 'bold',
                },
                i ? C.a.createElement(E.a, i) : a,
              ),
            s
              ? C.a.createElement(
                  x.a,
                  { style: Nn.notInterestedButtonWrapper },
                  C.a.createElement(Rn.a, {
                    onPress: o,
                    size: 'small',
                    topicId: l.id,
                    type: 'brandText',
                    withIconOnly: !0,
                  }),
                )
              : null,
          )
        }),
        Bn = function (e) {
          var t = e.isExpanded,
            n = e.onNotInterestedPress,
            a = e.topic,
            r = a.following ? Nn.followingTopicButtonWrapper : Nn.followTopicButtonWrapper,
            i = [t && r, !t && Nn.followTopicButtonWrapperNotExpanded],
            o = t ? Nn.largeNotInterestedButtonWrapper : Nn.notInterestedButtonWrapper
          return C.a.createElement(
            x.a,
            { style: Nn.topicActions },
            t ? null : C.a.createElement(Mn.a, { style: Nn.topicMiddot }),
            C.a.createElement(
              x.a,
              { style: i },
              C.a.createElement(xe.a, {
                isTransparent: !t,
                showRelationshipChangeConfirmation: !0,
                size: t ? 'small' : 'xSmall',
                style: Nn.followTopicButton,
                textMode: Te.a.FollowTopic,
                topic: a,
              }),
            ),
            n || (t && !a.following)
              ? C.a.createElement(
                  x.a,
                  { style: o },
                  C.a.createElement(Rn.a, {
                    onPress: n,
                    size: 'small',
                    topicId: a.id,
                    type: t ? 'primaryOutlined' : 'brandText',
                    withIconOnly: !t,
                  }),
                )
              : null,
          )
        }
      var Nn = P.a.create(function (e) {
          return {
            tombstone: { paddingBottom: e.componentDimensions.gutterVertical },
            iconStyle: {
              paddingBottom: 'calc('.concat(e.spaces.space2, ' + ').concat(e.spaces.space1, ')'),
              marginBottom: e.spaces.space4,
            },
            topicActions: { flexDirection: 'row', flexGrow: 1, alignItems: 'center', minHeight: e.spaces.space32 },
            topicMiddot: { alignSelf: 'center', paddingRight: 0 },
            followTopicButton: { marginTop: e.spaces.space1 },
            followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 },
            followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingRight: e.spaces.space4, width: '50%' },
            followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: '100%' },
            notInterestedButtonWrapper: { alignItems: 'flex-end', flexGrow: 1 },
            largeNotInterestedButtonWrapper: {
              marginVertical: e.spaces.space4,
              paddingLeft: e.spaces.space4,
              width: '50%',
            },
          }
        }),
        jn = n('0zXz'),
        Un = P.a.theme.aspectRatios.maxTimelineImage,
        Hn = P.a.theme.aspectRatios.minTimelineImage,
        zn = q.a.f277e949,
        Vn = q.a.ee79367a,
        Wn = q.a.a2a3824a,
        Kn = q.a.c14cdb18,
        Gn = q.a.e8adeec8,
        qn = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_defaultInlinePromptRef', C.a.createRef()),
              _()(h()(e), '_iconContainerRef', C.a.createRef()),
              _()(h()(e), 'state', { mediaAltTranslations: {} }),
              _()(h()(e), '_transformPromotedUrl', je.a.bind(null, e.context.featureSwitches)),
              _()(
                h()(e),
                '_isEdgeToEdgeEnabled',
                e.context.featureSwitches.isTrue('media_edge_to_edge_content_enabled'),
              ),
              _()(h()(e), '_getWithTopLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.isFocal,
                  r = t.tweet,
                  i = dn.a.getOriginalTweet(r),
                  o = e._getConversationPosition(),
                  l = e._getIsConversationStart(),
                  s = n && n.ancestorConnector,
                  c = n && n.indents,
                  d = (a && !!i.in_reply_to_status_id_str) || (o && !l)
                return c ? 'top' === s : d
              }),
              _()(h()(e), '_getWithBottomLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.tweet,
                  r = dn.a.getOriginalTweet(a),
                  i = e._getConversationPosition(),
                  o = n && n.indents,
                  l = n && n.descendantConnector,
                  s = i && !i.isEnd
                return o
                  ? l
                  : !(
                      !r.in_reply_to_status_id_str &&
                      'ancestor' !== (null == i ? void 0 : i.position) &&
                      e._isEdgeToEdgeEnabled
                    ) && s
              }),
              _()(h()(e), '_getFeatureConfigurationContextProviderValue', function () {
                var t = e.props,
                  n = t.onMediaHashtagHighlightClick,
                  a = t.promotedContent,
                  r = t.promotedContentAdvertiser,
                  i = t.tweet,
                  o = e.context.featureSwitches,
                  l = {
                    highlightedHashtag: function () {
                      return Sn(i, o, un.a.isPromoted(a))
                    },
                    avatarURIForHashtagHighlight: function () {
                      return In(r, o)
                    },
                    shouldUseSmallFontForHashtagHighlight: function () {
                      return o.isTrue('responsive_web_hashtag_highlight_use_small_font')
                    },
                    onMediaHashtagHighlightClick: n,
                  },
                  c = {
                    c9sEnabled: function () {
                      return o.isTrue('c9s_enabled')
                    },
                    trustedFriendsEnabled: function () {
                      return o.isTrue('trusted_friends_consumption_enabled')
                    },
                  },
                  d = e._getWithTopLine(),
                  u = e._getWithBottomLine(),
                  p = !e.props.isFocal && (d || u)
                return s()(
                  s()(s()({}, l), c),
                  {},
                  {
                    withEdgeToEdgeContent: function () {
                      return !p && o.isTrue('media_edge_to_edge_content_enabled')
                    },
                    withEdgeToEdgeTweetAnatomy: function () {
                      return o.isTrue('media_edge_to_edge_content_enabled')
                    },
                    headsUpVariant: function () {
                      return o.getStringValue('conversational_safety_heads_up_treatment_A_enabled')
                    },
                    misinfoLabelRevampTweaksEnabled: function () {
                      return o.isTrue('responsive_web_misinfo_label_revamp_tweaks_enabled')
                    },
                    sensitiveMediaWarningsEnabled: function () {
                      return o.isTrue('sensitive_tweet_warnings_enabled')
                    },
                    tweetRendersPromotedContentBadgeBelowHeader: function () {
                      return o.isTrue('responsive_web_promoted_badge_below_header')
                    },
                    socialContextRefreshEnabled: function () {
                      return e.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                    },
                  },
                )
              }),
              _()(h()(e), '_renderPromotedDetails', function (t) {
                var n = e.props,
                  a = n.onPoliticalSponsorWebsiteClick,
                  r = n.onPromotedDisclaimerLearnMoreClick,
                  i = n.onPromotedIndicatorClick,
                  o = n.promotedContent,
                  l = n.promotedContentAdvertiser,
                  s = n.tweet
                return r && a && i
                  ? C.a.createElement(pn.a, {
                      onPoliticalSponsorWebsiteClick: a,
                      onPromotedDisclaimerLearnMoreClick: r,
                      onPromotedIndicatorClick: i,
                      promotedContent: o,
                      promotedContentAdvertiser: l,
                      style: Xn.promotedDetails,
                      testID: Oe,
                      tweet: s,
                      withCircleIcon: t,
                    })
                  : null
              }),
              _()(h()(e), '_getPromoteButtonOnPress', function (t) {
                var n = e.props,
                  a = n.onPromoteAgainButtonClick,
                  r = n.onPromoteButtonClick
                return 'EligibleWithPreviousCampaign' === t ? a : r
              }),
              _()(h()(e), '_renderBirdwatchPivot', function () {
                var t = e.props,
                  n = t.tweet,
                  a = t.withBirdwatchPivots,
                  r = dn.a.getOriginalTweet(n)
                return r.birdwatch_pivot &&
                  a &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_pivots_enabled')
                  ? C.a.createElement(W, r.birdwatch_pivot)
                  : null
              }),
              _()(h()(e), '_renderModeratedRepliesIcon', function () {
                var t = e.props,
                  n = t.hasModeratedReplies,
                  a = t.onModeratedIconClick,
                  r = t.tweet
                return n ? C.a.createElement(mn.a, { link: ''.concat(r.permalink, '/hidden'), onPress: a }) : null
              }),
              _()(h()(e), '_renderBirdwatchNotesIcon', function () {
                var t = e.props,
                  n = t.onBirdwatchNotesIconClick,
                  a = t.onBirdwatchNotesIconShown,
                  r = t.tweet
                return !(
                  r.birdwatch_pivot &&
                  !0 ===
                    e.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_birdwatch_pivots_enabled')
                ) &&
                  r.has_birdwatch_notes &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_consumption_enabled') &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_contribution_enabled')
                  ? C.a.createElement(pt, { onPress: n, onShow: a, tweetId: r.id_str })
                  : null
              }),
              _()(h()(e), '_getUsernameStackedLayoutEnabled', function () {
                return e.props.isFocal || e._isEdgeToEdgeEnabled
              }),
              _()(h()(e), '_handleSocialContextClick', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.socialContext
                if (n && r && a && a(Ne.a.ItemType.USER)) {
                  var i,
                    o = (null === (i = r.landingUrl) || void 0 === i ? void 0 : i.url.match(pe.A.id)) || '',
                    l = r.text || ''
                  n({ topic: { id: o && o[0], name: l, description: Wn, type: Ee.a.Topic } })
                }
              }),
              _()(h()(e), '_renderTweetTextHWTweet', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  i = n.isFocal,
                  l = n.linkify,
                  c = n.onEntityClick,
                  d = n.tweet,
                  u = n.tweetTextSize,
                  p = n.withCardLinks,
                  m = n.withInlineMedia,
                  h = n.withQuotedTweetLinks,
                  f = dn.a.getOriginalTweet(d),
                  g = dn.a.hasInteractiveText(f),
                  v = u || (g ? 'title4' : t.size),
                  y = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled'),
                  b = s()(
                    s()({}, t),
                    {},
                    {
                      excludeCardUrl: a,
                      hitHighlights: r,
                      linkify: l,
                      onEntityClick: c,
                      size: v,
                      style: g && Xn.interactiveHighlightSpacer,
                      transformUrl: e._transformUrl,
                      unmentionedUserIds: f.unmentioned_user_ids,
                      weight: g ? 'heavy' : void 0,
                      withCardLinks: p,
                      withMediaLinks: !m,
                      withQuoteLinks: h || dn.a.isQuotedTweetUnavailable(f),
                      withUnicodeEmojis: X.b,
                    },
                  )
                return C.a.createElement(
                  Kt,
                  null,
                  y
                    ? C.a.createElement(
                        lt,
                        o()({}, b, {
                          disableTranslation: f.user.protected,
                          lang: f.lang,
                          onMediaTranslation: e._handleMediaTranslations,
                          supplementalLang: f.supplemental_language,
                          text: f.text,
                          tweetId: f.id_str,
                          withOriginalText: i,
                        }),
                      )
                    : C.a.createElement($e.a, b),
                )
              }),
              _()(h()(e), '_renderTweetText', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  i = n.isFocal,
                  o = n.linkify,
                  l = n.onEntityClick,
                  s = n.tweet,
                  c = n.tweetTextSize,
                  d = n.withCardLinks,
                  u = n.withInlineMedia,
                  p = n.withQuotedTweetLinks,
                  m = dn.a.getOriginalTweet(s),
                  h = dn.a.hasInteractiveText(m),
                  f = c || (i || h ? 'title4' : 'body'),
                  g = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled')
                return C.a.createElement(
                  Kt,
                  null,
                  i || g
                    ? C.a.createElement(lt, {
                        disableTranslation: m.user.protected,
                        displayTextRange: m.display_text_range,
                        enrichments: m.enrichments,
                        entities: m.entities,
                        excludeCardUrl: a,
                        hitHighlights: i ? void 0 : r,
                        lang: m.lang,
                        linkify: !!i || o,
                        nativeID: t,
                        onEntityClick: l,
                        onMediaTranslation: e._handleMediaTranslations,
                        quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                        quotedTweetPermalink: m.quoted_status_permalink,
                        size: f,
                        style: i ? Xn.expandedTweetText : h && Xn.interactiveHighlightSpacer,
                        supplementalLang: m.supplemental_language,
                        text: m.text,
                        transformUrl: e._transformUrl,
                        tweetId: m.id_str,
                        unmentionedUserIds: m.unmentioned_user_ids,
                        weight: h ? 'heavy' : void 0,
                        withCardLinks: i ? void 0 : d,
                        withMediaLinks: i ? void 0 : !u,
                        withOriginalText: i,
                        withQuoteLinks: (!i && p) || dn.a.isQuotedTweetUnavailable(m),
                        withUnicodeEmojis: X.b,
                      })
                    : C.a.createElement($e.a, {
                        displayTextRange: m.display_text_range,
                        enrichments: m.enrichments,
                        entities: m.entities,
                        excludeCardUrl: a,
                        hitHighlights: r,
                        lang: m.lang,
                        linkify: o,
                        nativeID: t,
                        onEntityClick: e.props.onEntityClick,
                        quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                        quotedTweetPermalink: m.quoted_status_permalink,
                        size: f,
                        style: h && Xn.interactiveHighlightSpacer,
                        text: m.text,
                        transformUrl: e._transformUrl,
                        unmentionedUserIds: m.unmentioned_user_ids,
                        weight: h ? 'heavy' : void 0,
                        withCardLinks: d,
                        withMediaLinks: !u,
                        withQuoteLinks: p || dn.a.isQuotedTweetUnavailable(m),
                        withUnicodeEmojis: X.b,
                      }),
                )
              }),
              _()(h()(e), '_handleMediaTranslations', function (t) {
                e.setState({ mediaAltTranslations: t })
              }),
              _()(h()(e), '_transformUrl', function (t) {
                var n
                return e._transformPromotedUrl(
                  t,
                  null === (n = e.props.promotedContent) || void 0 === n ? void 0 : n.click_tracking_info,
                )
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.forwardPivotInfo,
                    i = t.hideConversationControlsEducationText,
                    l = t.hideExclusivityInfoEducationTextInReplies,
                    c = t.hideTrustedFriendsEducationTextInReplies,
                    d = t.isFocal,
                    u = t.loggedInUser,
                    p = t.onBlur,
                    m = t.onClick,
                    h = t.onFocus,
                    f = t.promotedContent,
                    g = t.quotedTweetTombstoneInfo,
                    v = t.readerModeAvailable,
                    y = t.renderCurationActionMenu,
                    b = t.showConversationHeadsUp,
                    _ = t.socialContext,
                    w = t.to,
                    E = t.tweet,
                    T = t.withReaderModeBottomBar,
                    S = t.withTimestamp,
                    I = t.withTimestampLink,
                    R = t.withUnreadStyles,
                    L = dn.a.getOriginalTweet(E),
                    D = L.has_super_follower,
                    O = L.quick_promote_eligibility,
                    A = L.user,
                    F = null == O ? void 0 : O.eligibility,
                    B = this._getIsQuickPromoteEligible(F),
                    N = un.a.isPromoted(f),
                    j = !!N && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_below_header'),
                    U = !!N && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_use_circle_icon'),
                    H = !(!A.professional || !B),
                    z = 'IneligibleCampaignRunning' === F || 'IneligibleCampaignPaused' === F,
                    V = 'string' == typeof w ? { pathname: w } : w,
                    W = n && n.ancestorConnector,
                    G = n && n.indents,
                    q = this._getWithTopLine(),
                    X = this._getWithBottomLine(),
                    Q = q || X,
                    Y = (Q && !d) || !this._isEdgeToEdgeEnabled,
                    J = V ? s()(s()({}, V), {}, { anchorless: !0 }) : void 0,
                    Z = d ? 'detail' : 'inline'
                  return !d &&
                    this.context.featureSwitches.isTrue('responsive_web_consumes_horizon_web_tweet_in_timelines')
                    ? C.a.createElement(
                        hn.b.Provider,
                        { value: this._getFeatureConfigurationContextProviderValue() },
                        C.a.createElement(
                          _t.a,
                          { forwardPivotInfo: a, tweet: E },
                          C.a.createElement(fn.a, {
                            conversationTreeMetadata: n
                              ? { ancestorConnector: n.ancestorConnector, depth: n.depth, indents: n.indents }
                              : void 0,
                            link: K.canUseDOM ? J : void 0,
                            onBlur: p,
                            onFocus: h,
                            onPress: m,
                            promotedContent: f,
                            quotedTweetTombstoneInfo: g,
                            renderActionMenu: y && K.canUseDOM ? y : jn.a,
                            renderActionsBar: E.isPreview
                              ? function () {
                                  return C.a.createElement(he, { previewTweetId: E.id_str })
                                }
                              : function (t) {
                                  return C.a.createElement(
                                    C.a.Fragment,
                                    null,
                                    e._renderTweetActions({
                                      actionSize: t.actionSize,
                                      displayStyle: t.displayStyle,
                                      nativeID: t.nativeID,
                                      style: t.style,
                                      withCount: t.withCount,
                                      withAnalyticsAction: !0,
                                    }),
                                    e.props.withReaderModeBottomBar
                                      ? C.a.createElement(x.a, { style: Xn.readerBottomBar, testID: Ae })
                                      : null,
                                  )
                                },
                            renderEducation: function (t) {
                              return C.a.createElement(
                                C.a.Fragment,
                                null,
                                H &&
                                  C.a.createElement(
                                    M.a,
                                    {
                                      link: ''.concat(E.permalink, '/quick_promote_web/intro'),
                                      onPress: e._getPromoteButtonOnPress(F),
                                      style: Xn.promoteButton,
                                      type: 'primaryOutlined',
                                    },
                                    e._getPromoteButtonText(F),
                                  ),
                                C.a.createElement(
                                  Et,
                                  o()({}, t, {
                                    hideConversationControlsEducationText: !!i,
                                    hideExclusivityInfoEducationTextInReplies: !!l,
                                    hideTrustedFriendsEducationTextInReplies: !!c,
                                    loggedInUser: u,
                                  }),
                                ),
                              )
                            },
                            renderHighlightedUserLabel: function (t) {
                              var n
                              return 'AutomatedLabel' !==
                                (null === (n = t.label) || void 0 === n ? void 0 : n.userLabelType) ||
                                e.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                                ? C.a.createElement(fn.a.HighlightedUserLabel, t)
                                : null
                            },
                            renderPromotedIndicator: function (e) {
                              return C.a.createElement(fn.a.PromotedIndicator, o()({}, e, { withCircleIcon: U }))
                            },
                            renderPromotionStatusBadge: z
                              ? function (t) {
                                  return C.a.createElement(kt, {
                                    nativeID: t.nativeID,
                                    status: e._getTweetPromotionStatus(F),
                                    style: Xn.promotionStatus,
                                  })
                                }
                              : function () {
                                  return null
                                },
                            renderReplyContext: function (t) {
                              return e._renderReplyContext({ nativeID: t.nativeID })
                            },
                            renderRichContent: function (t) {
                              return e._renderRichContent({ nativeID: t.nativeID, withRoundMediaCorners: Y })
                            },
                            renderSelfThreadCTA: function () {
                              return e._renderSelfThreadCTA()
                            },
                            renderSocialContext: function (t) {
                              return e._renderSocialContext({ nativeID: t.nativeID })
                            },
                            renderText: function (t) {
                              return e._renderTweetTextHWTweet(t)
                            },
                            renderTimestamp: S
                              ? function (t) {
                                  return C.a.createElement(
                                    fn.a.Timestamp,
                                    o()({}, t, {
                                      link: I ? t.link : void 0,
                                      nativeID: e._isEdgeToEdgeEnabled ? void 0 : t.nativeID,
                                    }),
                                  )
                                }
                              : jn.a,
                            renderTombstone: function (t) {
                              return e._renderTombstoneHWTweet(t)
                            },
                            renderUserAvatar: function (t) {
                              return e._renderAvatar(t.nativeID)
                            },
                            renderUserName: function (t) {
                              return e._renderUserNameHWTweet(t)
                            },
                            socialContext: _
                              ? {
                                  contextType: _.contextType,
                                  isSelfRetweet: _.isSelfRetweet,
                                  link: _.landingUrl ? Object(ue.b)(_.landingUrl) : void 0,
                                  name: _.name,
                                  screenName: _.screenName,
                                  text: _.text,
                                }
                              : void 0,
                            staticLinkConfig: null,
                            testID: Be,
                            tweet: E,
                            withBottomLine: X,
                            withTopLine: q,
                            withUnreadStyles: R,
                          }),
                        ),
                      )
                    : C.a.createElement(gn.c.UseTweetA11yIds, { tweet: E }, function (t) {
                        var o = r()(t, 2),
                          s = o[0],
                          g = o[1],
                          _ = j
                            ? dn.a.hasInteractiveText(L)
                              ? Xn.promotedIndicatorBelowHeaderWithInteractiveHighlights
                              : Xn.promotedIndicatorBelowHeader
                            : Xn.promotedIndicator,
                          w =
                            f && N
                              ? C.a.createElement(vn.a, {
                                  contentAuthorId: A.id_str,
                                  nativeID: s.promotedLabel,
                                  promotedContent: f,
                                  style: _,
                                  withCircleIcon: U,
                                })
                              : null,
                          I = z
                            ? C.a.createElement(kt, {
                                nativeID: s.promotionStatusLabel,
                                status: e._getTweetPromotionStatus(F),
                                style: Xn.promotionStatus,
                              })
                            : null,
                          O = n
                            ? C.a.createElement(
                                k.b,
                                { nativeID: s.conversationLevel, style: P.a.visuallyHidden },
                                Vn({ conversationTreeDepth: n.depth.toString() }),
                              )
                            : null,
                          B = L.tombstoneInfo || E.tombstoneInfo,
                          V = C.a.createElement(
                            C.a.Fragment,
                            null,
                            B ? e._renderTombstone(B) : null,
                            d || !B
                              ? C.a.createElement(
                                  C.a.Fragment,
                                  null,
                                  e._renderReplyContext({ nativeID: s.replyContext }),
                                  C.a.createElement(x.a, null, e._renderTweetText(s.text)),
                                  C.a.createElement(
                                    x.a,
                                    null,
                                    e._renderRichContent({ nativeID: s.richContent, withRoundMediaCorners: Y }),
                                  ),
                                )
                              : null,
                          )
                        return C.a.createElement(
                          hn.b.Provider,
                          { value: e._getFeatureConfigurationContextProviderValue() },
                          C.a.createElement(
                            _t.a,
                            { forwardPivotInfo: a, tweet: E },
                            C.a.createElement(
                              yn.a,
                              {
                                a11yDomIds: g,
                                actionMenu: y && K.canUseDOM ? y() : null,
                                avatar: e._renderAvatar(s.avatar),
                                footer: e._renderFooter(),
                                header: e._renderHeader(s),
                                indents: G,
                                link: d || !K.canUseDOM ? void 0 : J,
                                onBlur: p,
                                onFocus: h,
                                onPress: m,
                                testID: Be,
                                timestamp:
                                  N || e._getUsernameStackedLayoutEnabled() || !S
                                    ? null
                                    : e._renderTweetRelativeTimestamp(s.timestamp),
                                userFollowIndicators: D ? C.a.createElement(bn.a, { type: 'superFollower' }) : void 0,
                                userLabel: e._renderUserLabel(A, s.userLabel),
                                userName: e._renderUserName(s.username, s.timestamp),
                                withBottomLine: X,
                                withElbow: G ? 'side' === W : void 0,
                                withFooterGap: !d,
                                withFullWidthChildren: d || (!Q && e._isEdgeToEdgeEnabled),
                                withTopLine: q,
                                withUnreadStyles: R,
                              },
                              j && d ? e._renderPromotedDetails(U) : null,
                              j && !d ? w : null,
                              O,
                              V,
                              H &&
                                'inline' === Z &&
                                C.a.createElement(
                                  M.a,
                                  {
                                    link: ''.concat(E.permalink, '/quick_promote_web/intro'),
                                    onPress: e._getPromoteButtonOnPress(F),
                                    style: Xn.promoteButton,
                                    type: 'primaryOutlined',
                                  },
                                  e._getPromoteButtonText(F),
                                ),
                              e._renderFocalContent(j, H, I),
                              'inline' === Z &&
                                C.a.createElement(Et, {
                                  conversationControlLabelNativeID: s.conversationControlLabel,
                                  displayStyle: 'inline',
                                  exclusivityInfoLabelNativeID: s.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!i,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!c,
                                  loggedInUser: u,
                                  trustedFriendsLabelNativeID: s.trustedFriendsLabel,
                                  tweet: E,
                                }),
                              E.isPreview
                                ? C.a.createElement(he, { previewTweetId: E.id_str })
                                : e._renderTweetActions({
                                    actionSize: d ? 'large' : void 0,
                                    displayStyle: d ? 'block' : void 0,
                                    nativeID: s.actionsBar,
                                    style: [
                                      d ? Xn.actionBarFocalTweet : Xn.actionBar,
                                      d && !v && Xn.actionBarWithInlineReply,
                                    ],
                                    withAnalyticsAction: !d,
                                    withCount: !d,
                                  }),
                              e._renderReaderModeButton(),
                              j || d ? null : w,
                              d ? null : I,
                              'detail' === Z &&
                                C.a.createElement(Et, {
                                  conversationControlLabelNativeID: s.conversationControlLabel,
                                  displayStyle: 'detail',
                                  exclusivityInfoLabelNativeID: s.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!i,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!c,
                                  loggedInUser: u,
                                  showConversationHeadsUp: b,
                                  trustedFriendsLabelNativeID: s.trustedFriendsLabel,
                                  tweet: E,
                                }),
                              T ? C.a.createElement(x.a, { style: Xn.readerBottomBar, testID: Ae }) : null,
                            ),
                          ),
                        )
                      })
                },
              },
              {
                key: '_renderTweetRelativeTimestamp',
                value: function (e) {
                  var t = this.props,
                    n = t.promotedContent,
                    a = t.tweet,
                    r = t.withTimestampLink,
                    i = dn.a.getOriginalTweet(a)
                  return C.a.createElement(_n.a, {
                    link: r
                      ? { pathname: i.permalink, state: { contextTweetId: i.id_str, promotedContent: n } }
                      : void 0,
                    nativeID: e,
                    timestamp: i.created_at,
                  })
                },
              },
              {
                key: '_renderUserNameHWTweet',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.tweet,
                    i = t.withUserHoverCard,
                    l = t.withUserName,
                    s = dn.a.getOriginalTweet(r).user
                  return l
                    ? C.a.createElement(
                        fn.a.UserName,
                        o()({}, e, {
                          onAvatarClick: n,
                          onLinkClick: a,
                          onScreenNameClick: a,
                          withHoverCard: i && !s.blocking,
                          withLink: !!a,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserName',
                value: function (e, t) {
                  var n = this.props,
                    a = n.isFocal,
                    r = n.onAvatarClick,
                    i = n.onScreenNameClick,
                    o = n.promotedContent,
                    l = n.tweet,
                    s = n.withUserHoverCard,
                    c = n.withUserName,
                    d = dn.a.getOriginalTweet(l).user,
                    u = un.a.isPromoted(o)
                  return c
                    ? C.a.createElement(wn.a, {
                        isProtected: d.protected,
                        isVerified: d.verified,
                        name: d.name,
                        nativeID: e,
                        onAvatarClick: r,
                        onLinkClick: i,
                        onScreenNameClick: i,
                        promotedContent: o,
                        screenName: d.screen_name,
                        screenNameSuffix:
                          u || a || !this._isEdgeToEdgeEnabled ? null : this._renderTweetRelativeTimestamp(),
                        withHoverCard: s && !d.blocking,
                        withLink: !!i,
                        withStackedLayout: this._getUsernameStackedLayoutEnabled(),
                      })
                    : null
                },
              },
              {
                key: '_renderUserLabel',
                value: function (e, t) {
                  var n = e.highlightedLabel,
                    a = 'AutomatedLabel' === (null == n ? void 0 : n.userLabelType),
                    r = !!a && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !n || (a && !r) ? null : C.a.createElement(Cn.a, { label: n, nativeID: t })
                },
              },
              {
                key: '_renderFocalContent',
                value: function (e, t, n) {
                  var a = this.props,
                    r = a.isFocal,
                    i = a.onAnalyticsClick,
                    o = a.tweet,
                    l = dn.a.getOriginalTweet(o),
                    s = l.created_at,
                    c = l.place,
                    d = l.quick_promote_eligibility,
                    u = l.source,
                    p = l.source_name,
                    m = null == d ? void 0 : d.eligibility,
                    h = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                  return r
                    ? C.a.createElement(
                        C.a.Fragment,
                        null,
                        C.a.createElement(
                          x.a,
                          { style: Xn.footerContainer },
                          C.a.createElement(
                            x.a,
                            { style: Xn.footerContent },
                            C.a.createElement(En.a, {
                              linkColor: 'gray700',
                              place: c && c.full_name,
                              placeLink: c && c.id ? '/places/'.concat(c.id) : void 0,
                              source: u && p ? p : void 0,
                              sourceLink: 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels',
                              style: Xn.timeLocSource,
                              timestamp: s,
                              timestampLink: l.permalink,
                            }),
                            C.a.createElement(
                              x.a,
                              { style: Xn.footerIcons },
                              this._renderModeratedRepliesIcon(),
                              this._renderBirdwatchNotesIcon(),
                            ),
                          ),
                          e ? null : this._renderPromotedDetails(),
                          n,
                        ),
                        C.a.createElement(bt, {
                          endControl: t
                            ? C.a.createElement(
                                M.a,
                                {
                                  link: ''.concat(o.permalink, '/quick_promote_web/intro'),
                                  onPress: this._getPromoteButtonOnPress(m),
                                  style: Xn.tweetActivityPromoteButton,
                                  type: 'primaryFilled',
                                },
                                this._getPromoteButtonText(m),
                              )
                            : null,
                          loggedInUserId: this.context.loggedInUserId,
                          onAnalyticsClick: i,
                          tweet: l,
                        }),
                        C.a.createElement(Vt, {
                          isNonCompliantTweet: 'non_compliant' === l.limited_actions,
                          tweetId: l.id_str,
                          tweetLikeCount: l.favorite_count,
                          tweetPermalink: l.permalink,
                          tweetQuoteTweetCount: l.quote_count,
                          tweetReactionCount: l.reaction_count,
                          tweetRetweetCount: l.retweet_count,
                          withReactions: h,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderFooter',
                value: function () {
                  var e = this.props,
                    t = e.isFocal,
                    n = e.topic,
                    a = e.topicFollowPrompt
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    this._renderSelfThreadCTA(),
                    !t && n && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? ke({ defaultRef: this._defaultInlinePromptRef, topic: n, topicFollowPrompt: a })
                      : null,
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function (e) {
                  var t = this.props,
                    n = t.isFocal,
                    a = t.topic,
                    r = t.topicFollowPrompt
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    n && r && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? ke({ defaultRef: this._defaultInlinePromptRef, topic: a, topicFollowPrompt: r })
                      : this._renderSocialContext({ nativeID: e.socialContext }),
                  )
                },
              },
              {
                key: '_renderSelfThreadCTA',
                value: function () {
                  var e = this.props,
                    t = e.onSelfThreadClick,
                    n = e.onSelfThreadImpression,
                    a = e.tweet,
                    r = dn.a.getOriginalTweet(a),
                    i = this._shouldShowSelfThreadWithAvatar()
                  return this._shouldShowSelfThread()
                    ? C.a.createElement(Me.a, {
                        avatarUrl: i ? r.user.profile_image_url_https : void 0,
                        onClick: t,
                        onImpression: n,
                        style: Xn.selfThreadCTA,
                        to: a.permalink,
                        userName: r.user.screen_name,
                        withConversationLine: i,
                      })
                    : null
                },
              },
              {
                key: '_shouldShowSelfThread',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.tweet,
                    a = e.withSelfThread,
                    r = dn.a.getOriginalTweet(n)
                  return a && !t && r.self_thread && !n.isPreview
                },
              },
              {
                key: '_shouldShowSelfThreadWithAvatar',
                value: function () {
                  var e = this.props,
                    t = e.shouldSelfThreadIncludeAvatar,
                    n = e.tweet,
                    a = dn.a.getOriginalTweet(n)
                  return this._shouldShowSelfThread() && t && !a.in_reply_to_status_id_str
                },
              },
              {
                key: '_getConversationPosition',
                value: function () {
                  return this._shouldShowSelfThreadWithAvatar()
                    ? { isStart: !0, isEnd: !1 }
                    : this.props.conversationPosition
                },
              },
              {
                key: '_getIsConversationStart',
                value: function () {
                  var e = this.props.tweet,
                    t = this._getConversationPosition(),
                    n = dn.a.getOriginalTweet(e)
                  return t && (t.isStart || !n.in_reply_to_status_id_str)
                },
              },
              {
                key: '_getIsQuickPromoteEligible',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                    case 'EligibleWithPreviousCampaign':
                      return !0
                    default:
                      return !1
                  }
                },
              },
              {
                key: '_getPromoteButtonText',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                      return Kn
                    case 'EligibleWithPreviousCampaign':
                      return Gn
                    default:
                      return (
                        Object(Re.a)(
                          new Error(
                            'Tweet promote button should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        Kn
                      )
                  }
                },
              },
              {
                key: '_getTweetPromotionStatus',
                value: function (e) {
                  switch (e) {
                    case 'IneligibleCampaignRunning':
                      return 'in-progress'
                    case 'IneligibleCampaignPaused':
                      return 'paused'
                    default:
                      return (
                        Object(Re.a)(
                          new Error(
                            'Tweet promotion badge should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        'in-progress'
                      )
                  }
                },
              },
              {
                key: '_renderSocialContext',
                value: function (e) {
                  var t = e.nativeID,
                    n = this.props,
                    a = n.conversationPosition,
                    r = n.injectedFeedbackItem,
                    i = n.isFocal,
                    l = n.onUndoTopicNotInterestedClick,
                    s = n.promotedContent,
                    c = n.socialContext,
                    d = n.topic
                  if (!n.withSocialContext || !c || un.a.isPromoted(s)) return null
                  var u = this.context.featureSwitches,
                    p = a && !this._getIsConversationStart(),
                    m = c.contextType,
                    h = c.isSelfRetweet,
                    f = c.landingUrl,
                    g = c.name,
                    v = c.screenName,
                    y = c.text,
                    b = c.topicContext,
                    _ = f ? Object(ue.b)(f) : void 0
                  if (
                    b &&
                    d &&
                    (function (e) {
                      var t = e.featureSwitches,
                        n = e.isExpanded,
                        a = e.topic,
                        r = e.topicContext
                      return (
                        Object(Pn.c)(r) &&
                        n &&
                        a.not_interested &&
                        (!(t.getStringValue('topics_context_controls_implicit_variation') in On) ||
                          t.isTrue('topics_context_controls_implicit_context_x_enabled'))
                      )
                    })({ featureSwitches: u, isExpanded: i, topic: d, topicContext: b })
                  )
                    return C.a.createElement(An, { onUndoTopicNotInterestedClick: l })
                  var w = {
                      contextType: m,
                      iconSize: 'large',
                      withLeftPadding: this.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                        ? p || !1
                        : !p && !i,
                      text: y,
                    },
                    T =
                      b && d
                        ? (function (e) {
                            var t,
                              n = e.featureSwitches,
                              a = e.iconSize,
                              r = e.injectedFeedbackItem,
                              i = e.isExpanded,
                              o = e.socialContext,
                              l = e.topic,
                              s = e.withLeftPadding,
                              c = o.contextType,
                              d = o.landingUrl,
                              u = o.topicContext,
                              p = d ? Object(ue.b)(d) : void 0,
                              m = u && Object(Pn.b)(u),
                              h = u && Object(Pn.c)(u),
                              f = n.isTrue('media_edge_to_edge_content_enabled'),
                              g = f ? Le.a.TextOnly : Le.a.Topic,
                              v =
                                null == r || null === (t = r.markNotInterestedTopic) || void 0 === t
                                  ? void 0
                                  : t.onClick,
                              y = u ? Object(kn.a)(u) : void 0,
                              b = null != u && u.bannerText ? C.a.createElement(E.a, u.bannerText) : o.text
                            if (m && n.getStringValue('topics_context_controls_followed_variation') in On) {
                              var _ = On[n.getStringValue('topics_context_controls_followed_variation')]
                              return {
                                iconSize: a,
                                contextType: g,
                                rightControl: C.a.createElement(Fn, {
                                  bannerText: o.topicContext && o.topicContext.bannerText,
                                  label: _,
                                  link: p,
                                  linkText: o.topicContext && o.topicContext.linkText,
                                  topic: l,
                                }),
                                withBottomBorder: !1,
                                withLeftPadding: !(
                                  n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                ),
                                topicData: y,
                                text: b,
                              }
                            }
                            if (h) {
                              if (n.getStringValue('topics_context_controls_implicit_variation') in On) {
                                var w,
                                  T = On[n.getStringValue('topics_context_controls_implicit_variation')]
                                return {
                                  iconSize: a,
                                  contextType: g,
                                  rightControl: C.a.createElement(Fn, {
                                    bannerText: o.topicContext && o.topicContext.bannerText,
                                    label: T,
                                    link: p,
                                    linkText: null === (w = o.topicContext) || void 0 === w ? void 0 : w.linkText,
                                    onNotInterestedPress: v,
                                    topic: l,
                                    withRightControl: n.isTrue('topics_context_controls_implicit_context_x_enabled'),
                                  }),
                                  topicData: y,
                                  text: b,
                                  withBottomBorder: !1,
                                  withLeftPadding: !(
                                    n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                  ),
                                }
                              }
                              var x = C.a.createElement(Bn, { isExpanded: i, onNotInterestedPress: v, topic: l })
                              return i
                                ? {
                                    bottomControl: x,
                                    contextType: c,
                                    iconSize: 'xLarge',
                                    iconStyle: Nn.iconStyle,
                                    textColor: 'text',
                                    textSize: 'headline1',
                                    text: o.text,
                                    topicData: void 0,
                                    withBottomBorder: !0,
                                    withLeftPadding: s,
                                  }
                                : {
                                    contextType: c,
                                    iconSize: a,
                                    iconStyle: Nn.iconStyle,
                                    rightControl: x,
                                    topicData: y,
                                    text: o.text,
                                    withBottomBorder: !0,
                                    withLeftPadding: s,
                                  }
                            }
                            return { contextType: c, iconSize: a, text: o.text, withLeftPadding: s }
                          })({
                            featureSwitches: u,
                            iconSize: w.iconSize,
                            injectedFeedbackItem: r,
                            isExpanded: i,
                            socialContext: c,
                            topic: d,
                            withLeftPadding: w.withLeftPadding,
                          })
                        : w
                  return C.a.createElement(
                    Pe.a,
                    o()({}, T, {
                      link: _,
                      nativeID: t,
                      onClick: m === Le.a.Topic ? this._handleSocialContextClick : void 0,
                      retweetData: { name: g, screenName: v, isSelfRetweet: h },
                      style: Xn.socialContext,
                      testID: Fe,
                      weight: 'bold',
                    }),
                  )
                },
              },
              {
                key: '_renderReplyContext',
                value: function (e) {
                  var t,
                    n = e.nativeID,
                    a = this.props,
                    r = a.conversationPosition,
                    i = a.conversationTreeMetadata,
                    o = a.isFocal,
                    l = a.onReplyContextClick,
                    s = a.replyContext,
                    c = a.tweet,
                    d = dn.a.getOriginalTweet(c),
                    u = d.self_thread
                  return this._shouldShowSelfThread() ||
                    s !== Tn.a.ReplyContextTypes.Isolated ||
                    !d.in_reply_to_status_id_str ||
                    (i && !o) ||
                    (u && r && !r.isStart) ||
                    (u && o)
                    ? null
                    : C.a.createElement(Tn.a, {
                        displayTextRange: d.display_text_range,
                        inReplyToName: d.in_reply_to_name,
                        inReplyToScreenName: d.in_reply_to_screen_name,
                        inReplyToStatusIdStr: d.in_reply_to_status_id_str,
                        inReplyToUserIdStr: d.in_reply_to_user_id_str,
                        nativeID: n,
                        onClick: l,
                        style: [Xn.replyContext, o && Xn.replyContextBig],
                        tweetPermalink: d.permalink,
                        unmentionedUserIds: d.unmentioned_user_ids,
                        userMentionsEntities: null === (t = d.entities) || void 0 === t ? void 0 : t.user_mentions,
                      })
                },
              },
              {
                key: '_renderReaderModeButton',
                value: function () {
                  var e = this.props,
                    t = e.readerModeAvailable,
                    n = e.tweet
                  return t
                    ? C.a.createElement(
                        x.a,
                        { style: Xn.actionBarWithInlineReply },
                        C.a.createElement(Ce.a, { focalTweet: n, isExpanded: !0, readerModeAvailable: !!t }),
                      )
                    : null
                },
              },
              {
                key: '_renderTweetActions',
                value: function (e) {
                  var t = e.actionSize,
                    n = e.displayStyle,
                    a = e.nativeID,
                    r = e.style,
                    i = e.withAnalyticsAction,
                    o = e.withCount,
                    l = this.props,
                    s = l.allowDownvote,
                    c = l.bookmarkFolderId,
                    d = l.contextTweet,
                    u = l.enableKeyboardShortcuts,
                    p = l.forwardPivotInfo,
                    m = l.onLikeSuccess,
                    h = l.onReplyPress,
                    f = l.promotedContent,
                    g = l.tweet,
                    v = l.withActionsDisabled,
                    y = l.withRemoveFromBookmarks
                  return this.props.withActions
                    ? C.a.createElement(mt.a, {
                        actionSize: t,
                        allowDownvote: s,
                        bookmarkFolderId: c,
                        displayStyle: n,
                        enableKeyboardShortcuts: u,
                        forwardPivotInfo: g.softIntervention || p,
                        likeActionIconContainerRef: this._iconContainerRef,
                        nativeID: a,
                        onLikeSuccess: m,
                        onReplyPress: h,
                        promotedContent: f,
                        style: r,
                        tweet: d || g,
                        withActionsDisabled: v,
                        withAnalyticsAction: i,
                        withCount: o,
                        withRemoveFromBookmarks: y,
                      })
                    : null
                },
              },
              {
                key: '_renderAvatar',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.promotedContent,
                    i = t.tweet,
                    o = t.withAvatarLink,
                    l = t.withUserAvatar,
                    s = t.withUserHoverCard,
                    c = t.withUserPresence,
                    d = dn.a.getOriginalTweet(i).user,
                    u = dn.a.getOriginalTweet(i).user.id_str
                  return l
                    ? C.a.createElement(sn, {
                        avatarRef: this._defaultInlinePromptRef,
                        nativeID: e,
                        onClick: n,
                        onHoverCardScreenNameClick: a,
                        promotedContent: r,
                        screenName: d.screen_name,
                        uri: d.profile_image_url_https,
                        userId: u,
                        withHoverCard: s && !d.blocking,
                        withLink: o,
                        withNftAvatar: d.has_nft_avatar,
                        withUserPresence: c,
                      })
                    : null
                },
              },
              {
                key: '_renderTombstoneHWTweet',
                value: function (e) {
                  var t = e.actionLink,
                    n = e.actionText,
                    a = e.children,
                    r = e.style,
                    i = this.props,
                    o = i.conversationTreeMetadata,
                    l = i.onClick
                  return C.a.createElement(
                    x.a,
                    { style: r },
                    C.a.createElement(
                      ve.a,
                      { actionLink: t, actionText: n, conversationTreeMetadata: o, inline: !0, onClick: l },
                      a,
                    ),
                  )
                },
              },
              {
                key: '_renderTombstone',
                value: function (e) {
                  var t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.isFocal,
                    r = t.onClick,
                    i = t.tweet,
                    o = dn.a.getOriginalTweet(i),
                    l = e.richText
                  return o && e && l
                    ? C.a.createElement(
                        x.a,
                        { style: Xn.spacingVertical },
                        C.a.createElement(
                          ve.a,
                          {
                            actionLink: a ? void 0 : o.permalink,
                            actionText: a ? void 0 : zn,
                            conversationTreeMetadata: n,
                            inline: !0,
                            onClick: a ? void 0 : r,
                          },
                          C.a.createElement(E.a, { entities: l.entities, rtl: l.rtl, text: l.text }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_hasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = dn.a.getOriginalTweet(e),
                    n = t.extended_entities && t.extended_entities.media
                  return (
                    !!(n && n.length > 0) &&
                    n.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_quoteTweetHasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = dn.a.getOriginalTweet(e)
                  return !!(
                    t.quoted_status &&
                    t.quoted_status.entities &&
                    t.quoted_status.entities.media &&
                    t.quoted_status.entities.media.length > 0 &&
                    t.quoted_status.entities.media.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_renderRichContent',
                value: function (e) {
                  var t = e.nativeID,
                    n = e.withRoundMediaCorners,
                    a = this.context.featureSwitches,
                    r = this.props.withActionsDisabled,
                    i = this.props,
                    o = i.enableKeyboardShortcuts,
                    l = i.forwardPivotInfo,
                    s = i.inlineCalloutInfo,
                    c = i.innerForwardPivotInfo,
                    d = i.isFocal,
                    u = i.linkableQuotedTweet,
                    p = i.onCardLinkClick,
                    m = i.onMediaClick,
                    h = i.onQuoteTweetClick,
                    f = i.preventVideoPlayback,
                    g = i.promotedContent,
                    v = i.quoteTweetSocialContextProps,
                    y = i.quotedTweetTombstoneInfo,
                    b = i.tweet,
                    _ = i.withCardLinks,
                    w = i.withInlineMedia,
                    E = i.withUserHoverCard,
                    T = d ? 'DETAIL' : 'TIMELINE',
                    x = (this._hasPhoto() || this._quoteTweetHasPhoto()) && !!cn.b.isDesktopOS() && !d,
                    S = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    I = dn.a.getOriginalTweet(b)
                  return (
                    (r = r || Object(ft.b)(a, I, ft.a.VoteOnPoll)),
                    C.a.createElement(
                      C.a.Fragment,
                      null,
                      C.a.createElement(xn.a, {
                        cardCacheLocationKey: T,
                        displayMediaMetadata: d,
                        enableKeyboardShortcuts: o,
                        forwardPivotInfo: b.softIntervention || l,
                        inlineCalloutInfo: s,
                        innerForwardPivotInfo: c,
                        isMediaMaxHeightEnabled: x,
                        loggedInUserId: this.context.loggedInUserId,
                        mediaAltTranslations: this.state.mediaAltTranslations,
                        mediaCacheLocationKey: T,
                        nativeID: t,
                        onCardLinkClick: p,
                        onMediaClick: m,
                        onQuoteTweetClick: h,
                        preventVideoPlayback: f,
                        promotedContent: g,
                        quoteTweetSingleImageMinAspectRatio: Hn,
                        quoteTweetSocialContextProps: v,
                        quotedTweetTombstoneInfo: y,
                        renderQuoteTweetTombstone: function (e) {
                          return C.a.createElement(we, e)
                        },
                        singleImageMaxAspectRatio: Un,
                        singleImageMinAspectRatio: d ? 0.1 : Hn,
                        tweet: b,
                        withActionsDisabled: r,
                        withAltTextBadge: this.context.featureSwitches.isTrue('responsive_web_alt_text_badge_enabled'),
                        withCardLinks: _,
                        withCenterCrop: !0,
                        withCondensedQuoteTweet: !d && dn.a.hasMedia(I, !w),
                        withMediaTagsIcon: d,
                        withQuoteTweetHeaderLinks: !K.canUseDOM,
                        withQuoteTweetLink: u,
                        withQuoteTweetMedia: w,
                        withReactions: S,
                        withRoundMediaCorners: n,
                        withTweetMedia: w,
                        withUserHoverCard: E,
                      }),
                      this._renderBirdwatchPivot(),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(qn, 'contextType', L.a),
        _()(qn, 'displayName', 'Tweet'),
        _()(qn, 'defaultProps', {
          displayBlocked: !1,
          isFocal: !1,
          linkify: !0,
          onBirdwatchNotesIconClick: ne.a,
          onModeratedIconClick: ne.a,
          onModeratedIconShown: ne.a,
          replyContext: Tn.a.ReplyContextTypes.Isolated,
          withActions: !1,
          withAvatarLink: !0,
          withBirdwatchPivots: !0,
          withCardLinks: !1,
          withInlineMedia: !0,
          withQuotedTweetLinks: !1,
          withRemoveFromBookmarks: !1,
          withSocialContext: !1,
          withTimestampLink: !0,
          withUserHoverCard: !0,
          withUserAvatar: !0,
          withUserName: !0,
          withTimestamp: !0,
        })
      var Xn = P.a.create(function (e) {
        return {
          replyContextBig: { marginTop: e.spaces.space12, marginBottom: 0 },
          replyContext: { marginBottom: e.spaces.space2 },
          selfThreadCTA: { marginHorizontal: 'calc(-1 * '.concat(e.componentDimensions.gutterHorizontal, ')') },
          innerRow: { alignItems: 'baseline', flexDirection: 'row', flexShrink: 1 },
          actionBar: { marginTop: e.spaces.space12 },
          actionBarFocalTweet: {
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            height: e.spaces.space48,
          },
          actionsBarNarrow: { minWidth: 250, marginRight: 'auto' },
          actionBarWithInlineReply: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
          },
          promoteButton: { marginTop: e.spaces.space12 },
          tweetActivityPromoteButton: { marginVertical: e.spaces.space8 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          promotedDetails: { marginTop: e.spaces.space4 },
          promotionStatus: { marginTop: e.spaces.space12 },
          socialContext: { marginBottom: e.spaces.space4, marginTop: '-'.concat(e.spaces.space4) },
          spacingVertical: { marginVertical: e.spaces.space4 },
          followTopicButton: { justifyContent: 'center' },
          expandedTweetText: { marginTop: e.spaces.space12 },
          footerContainer: { marginVertical: e.spaces.space16 },
          footerContent: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          footerIcons: { flexDirection: 'row' },
          interactiveHighlightSpacer: { marginTop: e.spaces.space8 },
          readerBottomBar: {
            borderBottomColor: e.colors.nestedBorderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            marginTop: e.spaces.space20,
            width: e.spaces.space32,
          },
          timeLocSource: { marginRight: e.spaces.space12 },
          topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) },
        }
      })
      t.b = de(qn)
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return R
      }),
        n.d(t, 'l', function () {
          return P
        }),
        n.d(t, 'f', function () {
          return D
        }),
        n.d(t, 'd', function () {
          return A
        }),
        n.d(t, 'g', function () {
          return F
        }),
        n.d(t, 'e', function () {
          return N
        }),
        n.d(t, 'i', function () {
          return U
        }),
        n.d(t, 'j', function () {
          return H
        }),
        n.d(t, 'k', function () {
          return z
        }),
        n.d(t, 'h', function () {
          return V
        }),
        n.d(t, 'a', function () {
          return K
        }),
        n.d(t, 'b', function () {
          return q
        }),
        n.d(t, 'c', function () {
          return Y
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        l = n('m3Bd'),
        s = n.n(l),
        c = n('KEM+'),
        d = n.n(c),
        u = n('yiKp'),
        p = n.n(u),
        m =
          (n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('lTEL'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('2G9S'),
          n('1IsZ'),
          n('AspN')),
        h = n('xPna'),
        f = n('oEOe'),
        g = n('xCUF'),
        v = n('ude7'),
        y = n('07FG'),
        b = n('Ssj5'),
        _ = n('fEA7'),
        w = n.n(_),
        C = n('uKEd'),
        E = n('lnti'),
        T = n('/NU0'),
        x = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        S = 'dmComposer',
        I = {}
      var k = function (e) {
          var t = e.conversation_id,
            n = e.id,
            a = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            l = e.attachment,
            s = void 0 === l ? {} : l,
            c = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: a, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        R = function (e) {
          return function (t, n, a) {
            var i = a.api,
              l = e || {},
              c = l.senderId,
              d = l.cardUrl,
              u = l.conversationId,
              b = l.localMediaId,
              _ = l.recipients,
              S = void 0 === _ ? [] : _,
              I = l.requestId,
              R = void 0 === I ? w.a.v1() : I,
              M = l.tweetAttachment,
              P = l.quickReply,
              L = s()(l, x)
            t(Z(u))
            var D = n(),
              O = b || j(n(), u),
              F = m.k(D, O),
              B = o()(F, 1)[0] || {},
              N = B.mediaFile,
              U = B.mediaMetadata,
              H = S.length > 0 && S.join(','),
              z = {}
            N && N.isGif
              ? (z.extraInitParams = '&media_category=dm_gif')
              : N && N.isVideo && (z.extraInitParams = '&media_category=dm_video')
            var W = m.p(O, z),
              K = [t(W)],
              G = (V(D, u) || {}).found_media_origin
            return (
              N && N.isGif && K.push(Object(v.a)(N)),
              Promise.all(K).then(
                function (n) {
                  var a = o()(n, 2),
                    l = o()(a[0], 1)[0],
                    s = a[1],
                    v = (null == U ? void 0 : U.altText) || (null == U ? void 0 : U.defaultAltText),
                    b = !!v
                  return (
                    l && (G || b)
                      ? t(m.m(p()({ media_id: l.uploadId, found_media_origin: G }, !!b && { alt_text: { text: v } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (M || {}).id_str,
                        a = {}
                      if (l) {
                        var o = l.mediaFile,
                          m = void 0 === o ? {} : o,
                          v = {
                            original_info: { width: m.width, height: m.height },
                            sizes: [{ h: m.height, w: m.width, resize: 'fit' }],
                          }
                        m.isImage
                          ? (a.photo = p()(p()({}, v), {}, { media_url_https: m.url }))
                          : m.isGif
                          ? (a.animated_gif = p()(p()({}, v), {}, { media_url_https: s, type: 'animated_gif' }))
                          : m.isVideo && (a.video = p()(p()({}, v), {}, { media_url_https: m.url, type: 'video' }))
                      } else M && (a.tweet = { status: n })
                      var b = (l || {}).uploadId,
                        _ = k({
                          attachment: a,
                          conversation_id: u,
                          id: R,
                          recipient_ids: H,
                          sender_id: c,
                          text: e.text,
                        }),
                        w = p()(
                          p()(
                            p()(p()({}, L), Object(y.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !n && { media_id: b },
                          ),
                          {},
                          { recipient_ids: H, request_id: R, tweet_id: n },
                        )
                      P &&
                        ((w['quick_reply_response[options][id]'] = P.id),
                        (w['quick_reply_response[options][selected_id]'] = P.selected_id))
                      var x = Object(E.a)([
                        ee(u),
                        { type: g.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(C.b)(u, R, _),
                      ])
                      return (
                        t(x),
                        i.DirectMessages.sendMessage(w).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              l = a.tweets,
                              s = a.users,
                              c = n.result.conversations
                            Object(T.a)(O) && t(Y(u, O))
                            var d = Object(E.a)(
                              [{ type: g.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: c, entries: o, users: s, tweets: l, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(C.j)(u, R, e), A(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = k({
                                attachment: a,
                                conversation_id: u,
                                error: !0,
                                id: R,
                                localMediaId: O,
                                recipient_ids: H,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(E.a)([
                                { type: g.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(C.b)(u, R, r),
                              ])
                            return t(i), Object(f.e)(t, n, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ne(u)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(E.a)([Object(T.a)(O) && Y(u, O), ne(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        M = function (e, t) {
          return e.dmComposer[t]
        },
        P = function (e, t) {
          var n = M(e, t)
          return n ? n.text : null
        },
        L = 'rweb/dmComposer/SAVE_TEXT',
        D = function (e, t) {
          return { type: L, conversationId: e, text: t }
        },
        O = 'rweb/dmComposer/REMOVE_TEXT',
        A = function (e) {
          return { type: O, conversationId: e }
        },
        F = function (e, t) {
          var n = M(e, t)
          return n ? n.cardUrl : null
        },
        B = 'rweb/dmComposer/SAVE_CARD_URL',
        N = function (e, t) {
          return { type: B, conversationId: e, cardUrl: t }
        },
        j = function (e, t) {
          var n = M(e, t)
          return n ? n.mediaId : null
        },
        U = function (e, t) {
          var n = m.k(e, j(e, t))
          return n.length > 0 ? n[0] : null
        },
        H = function (e, t) {
          var n = M(e, t)
          return !!n && n.isUploading
        },
        z = function (e, t) {
          return m.l(e, j(e, t))
        },
        V = function (e, t) {
          var n = M(e, t)
          return n ? n.gifMetadata : null
        },
        W = 'rweb/dmComposer/ADD_MEDIA',
        K = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: W, conversationId: e }
        },
        G = 'rweb/dmComposer/CANCEL_UPLOAD',
        q = function (e) {
          return { type: G, conversationId: e }
        },
        X = 'rweb/dmComposer/REMOVE_MEDIA',
        Q = function (e) {
          return { type: X, conversationId: e }
        },
        Y = function (e, t) {
          return function (n) {
            n(m.i(t)), n([q(e), Q(e)])
          }
        },
        J = 'rweb/dmComposer/UPLOAD_REQUEST',
        Z = function (e) {
          return { type: J, conversationId: e }
        },
        $ = 'rweb/dmComposer/UPLOAD_SUCCESS',
        ee = function (e) {
          return { type: $, conversationId: e }
        },
        te = 'rweb/dmComposer/UPLOAD_FAILURE',
        ne = function (e) {
          return { type: te, conversationId: e }
        }
      b.a.register(
        d()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case W:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), t.payload)))
            case J:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), {}, { isUploading: !0 })))
            case G:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case X:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                d()({}, n, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case L:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, l), {}, { text: t.text })))
            case B:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, s), {}, { cardUrl: t.cardUrl })))
            case O:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, c), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    Drq4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
              o.a.createElement('path', {
                d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
              }),
              o.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    EeFI: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('ERkP'),
        h = n.n(m),
        f = n('3XMw'),
        g = n.n(f),
        v = n('MWbm'),
        y = n('Qwev'),
        b = n('21U8'),
        _ = n('rHpw'),
        w = n('1auM'),
        C = n('eYns'),
        E = g.a.gff1f69e,
        T = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return o()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof w.a &&
                    Object(C.b)(n).then(function (t) {
                      return new w.a(t).withDimensionsAndOrientation().then(function (t) {
                        e.setState({ orientedImage: t })
                      })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.orientedImage
                    ? this._renderCropper()
                    : h.a.createElement(y.a, { accessibilityLabel: E, style: x.activityIndicator })
                },
              },
              {
                key: '_renderCropper',
                value: function () {
                  var e = this.props,
                    t = e.cropperRef,
                    n = e.defaultAspectRatio,
                    a = e.defaultCropData,
                    r = e.media,
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    l = this.state.orientedImage,
                    s = r || {},
                    c = s.cropData,
                    d = s.originalMediaFile,
                    u = void 0 === d ? {} : d
                  return l
                    ? h.a.createElement(
                        v.a,
                        { style: x.cropper },
                        h.a.createElement(b.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || n,
                          defaultCropData: a || c,
                          image: { src: l.url, width: u.width, height: u.height },
                          ref: t,
                          withAspectRatioOptions: i,
                          withZoomControl: o,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        x = _.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(T, r()({}, e, { cropperRef: t }))
      })
    },
    G31s: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        s = n.n(l),
        c = n('2VqO'),
        d = n.n(c),
        u = n('KEM+'),
        p = n.n(u),
        m = n('ERkP'),
        h = n.n(m),
        f = n('pKoL'),
        g = n('MWbm'),
        v = n('rHpw'),
        y = n('ZvMt'),
        b = n('9Xij'),
        _ = n('v6aA'),
        w = (function (e) {
          s()(n, e)
          var t = d()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    n = e.style
                  return h.a.createElement(g.a, { style: n }, this._renderImageGroup(t.length))
                },
              },
              {
                key: '_renderImageGroup',
                value: function (e) {
                  switch (e) {
                    case 1:
                      return this._renderGroupOf1()
                    case 2:
                      return this._renderGroupOf2()
                    case 3:
                      return this._renderGroupOf3()
                    case 4:
                      return this._renderGroupOf4()
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderGroupOf1',
                value: function () {
                  var e = this.props.media,
                    t = e && !!e[0].mediaFile,
                    n = (e && !t && e[0].externalMediaDetails) || {},
                    a = n.height,
                    r = n.width,
                    i = v.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      l,
                      s = v.a.theme.aspectRatios.minTimelineImage,
                      c = v.a.theme.aspectRatios.maxTimelineImage
                    i = y.a.getImageAspectRatio(s, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (l = e[0].mediaFile) || void 0 === l ? void 0 : l.height,
                    })
                  }
                  return h.a.createElement(
                    b.a,
                    { ratio: t ? i : r / a },
                    h.a.createElement(g.a, { style: C.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: v.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      g.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, C.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: v.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      g.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, C.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: v.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      g.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], C.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return h.a.createElement(
                    g.a,
                    { style: [C.column, t] },
                    this._renderMediaAtIndex(e[0], C.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var n,
                    a,
                    r,
                    i,
                    o = this.props,
                    l = o.editable,
                    s = o.isActive,
                    c = o.media,
                    d = o.onClickMedia,
                    u = o.onEditMedia,
                    p = o.onEditSensitiveWarning,
                    m = o.onRemoveMedia,
                    g = o.onSetMediaPreviewRef,
                    v = c[e],
                    y = null === (n = v.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    b = null === (a = v.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    _ = !(
                      null === (r = v.mediaMetadata) ||
                      void 0 === r ||
                      null === (i = r.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    w = u && l && s,
                    E = w && _ && !!p
                  return h.a.createElement(f.a, {
                    accessibilityLabel: y || b,
                    accessibilityRole: 'group',
                    enableGif: s,
                    key: v.id,
                    mediaItem: v,
                    onClick: d ? d(v.id) : void 0,
                    onEdit: u ? u(v.id) : void 0,
                    onEditSensitiveWarning: p && E ? p(v.id) : void 0,
                    onRemove: m(v.id),
                    ref: g,
                    style: [C.mediaContainer, t],
                    withAltTextLabel: !!y,
                    withCloseButton: l && s,
                    withEditButton: w,
                    withEditSensitiveWarningButton: E,
                  })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(w, 'contextType', _.a)
      var C = v.a.create(function (e) {
        return {
          column: { flexDirection: 'column', flexGrow: 1, flexBasis: 0 },
          gutterRight: { marginRight: e.spaces.space12 },
          gutterBottom: { marginBottom: e.spaces.space12 },
          mediaContainer: {
            borderRadius: e.borderRadii.xLarge,
            transitionProperty: 'width',
            transitionDuration: '0.1s',
            transitionTimingFunction: 'ease-out',
            overflow: 'hidden',
            flexGrow: 1,
            flexBasis: 0,
          },
          mediaPreviewWrapper: { flexDirection: 'row', height: '100%', width: '100%' },
        }
      })
    },
    GTeL: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('pKoL'),
        s = n('Qwev'),
        c = n('rHpw'),
        d = n('U+bB'),
        u = n('MWbm'),
        p = o.a.gff1f69e
      var m = c.a.create(function (e) {
        return {
          activityIndicator: { height: '100%', width: '100%' },
          image: { width: '100%', flexGrow: 1 },
          mediaContainer: { overflow: 'hidden', flexGrow: 1, flexBasis: 0, width: '100%' },
          mediaPreviewWrapper: {
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'center',
            width: '100%',
            paddingVertical: 25,
            paddingHorizontal: 25,
            backgroundColor: e.colors.gray0,
          },
        }
      })
      t.a = function (e) {
        var t = e.mediaItem,
          n = e.orientedImage
        return r.a.createElement(
          u.a,
          { style: m.mediaPreviewWrapper },
          void 0 === n && t
            ? r.a.createElement(l.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: m.mediaContainer,
                withCloseButton: !1,
              })
            : n
            ? r.a.createElement(d.a, { resizeMode: 'contain', source: n.url, style: m.image })
            : r.a.createElement(s.a, { accessibilityLabel: p, style: m.activityIndicator }),
        )
      }
    },
    JUsM: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('uFXj'), n('2G9S'), n('ERkP')),
        o = n.n(i),
        l = n('t62R'),
        s = n('rHpw'),
        c = n('shC7'),
        d = n('MWbm'),
        u = s.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              backgroundColor: e.colors.navigationBackground,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              borderColor: e.colors.gray50,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            containerDown: { marginTop: e.spaces.space12 },
            containerUp: { marginTop: e.spaces.space20 },
            text: { flexShrink: 1, alignSelf: 'center', alignItems: 'flex-start' },
            actionsContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: e.spaces.space12 },
            arrowContainer: { position: 'absolute', display: 'flex', width: '100%', alignItems: 'center' },
            arrowDirectionUp: { top: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrowDirectionDown: { bottom: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrow: {
              borderStyle: 'solid',
              borderTopWidth: 0,
              borderRightWidth: e.spaces.space1,
              borderBottomWidth: e.spaces.space1,
              borderLeftWidth: 0,
              borderColor: e.colors.gray50,
              width: e.spaces.space12,
              height: e.spaces.space12,
              backgroundColor: e.colors.navigationBackground,
            },
          }
        })
      t.a = function (e) {
        var t = e.containerRef,
          n = e.primaryAction,
          a = e.secondaryAction,
          i = e.text,
          s = o.a.useState(void 0),
          p = r()(s, 2),
          m = p[0],
          h = p[1],
          f = c.a.getConstants().isRTL,
          g = o.a.useRef(0),
          v = o.a.useRef(0),
          y = (function () {
            if (null != t && t.current && m) {
              var e = t.current.getBoundingClientRect(),
                n = e.left,
                a = e.top,
                r = e.width
              g.current = a
              var i = n + r / 2 - m
              return { left: f ? void 0 : i, right: f ? i : void 0 }
            }
          })(),
          b = v.current < g.current,
          _ = b ? [u.arrowDirectionDown] : [u.arrowDirectionUp],
          w = b
            ? f
              ? { transform: 'rotate(-45deg)' }
              : { transform: 'rotate(45deg)' }
            : f
            ? { transform: 'rotate(135deg)' }
            : { transform: 'rotate(-135deg)' },
          C = b ? [u.containerDown] : [u.containerUp]
        return o.a.createElement(
          d.a,
          {
            accessibilityRole: 'text',
            onLayout: function (e) {
              var t = e.nativeEvent.layout,
                n = t.left,
                a = t.top,
                r = t.width
              ;(v.current = a), h(n + r / 2)
            },
            style: [u.root, C],
          },
          null != t && t.current
            ? o.a.createElement(
                d.a,
                { style: [_, u.arrowContainer, y] },
                o.a.createElement(d.a, { style: [u.arrow, w] }),
              )
            : null,
          o.a.createElement(l.b, { style: u.text }, i),
          o.a.createElement(d.a, { style: u.actionsContainer }, n, a),
        )
      }
    },
    KqB4: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var n = [], a = (0, r.default)(e, t), i = 0; i < a.length; i++) n.push(a[i].url)
          return n
        })
      var r = a(n('vwfs'))
      e.exports = t.default
    },
    LCtV: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return I
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('yH/f'), n('2G9S'), n('uFXj'), n('ERkP')),
        g = n.n(f),
        v = n('3XMw'),
        y = n.n(v),
        b = n('mN6z'),
        _ = n('Qwev'),
        w = n('rHpw'),
        C = n('1auM'),
        E = n('ude7'),
        T = n('U+bB'),
        x = n('MWbm'),
        S = y.a.gff1f69e,
        I = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        k = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { imagePreviewUrl: null }),
              h()(s()(e), '_getImageSrc', function () {
                var t = e.props,
                  n = t.enableGif,
                  a = t.mediaItem,
                  r = e.state.imagePreviewUrl
                if (a && a.mediaFile) return a.mediaFile.isGif && !n ? r : a.mediaFile.url
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.enableGif,
                    a = t.mediaItem.mediaFile,
                    r = this.state.imagePreviewUrl
                  n ||
                    r ||
                    (a instanceof C.a &&
                      a.isGif &&
                      Object(E.a)(a).then(function (t) {
                        e.setState({ imagePreviewUrl: t })
                      }))
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(b.a)(e, this.props) || !Object(b.a)(t, this.state)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    a = e.mediaItem,
                    r = e.onClick,
                    i = e.resizeMode,
                    o = (this.state || {}).imagePreviewUrl,
                    l = a.mediaFile && a.mediaFile.isGif && !n && !o,
                    s = a.needsProcessing || l,
                    c = [M.root, R[t], s && M.loadingBorder],
                    d = this._getImageSrc()
                  return g.a.createElement(
                    x.a,
                    { onClick: r, style: c },
                    s || !d
                      ? g.a.createElement(_.a, { accessibilityLabel: S, style: M.activityIndicator })
                      : g.a.createElement(T.a, { resizeMode: i, source: d, style: M.image }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(k, 'defaultProps', { borderRadius: I.NONE, enableGif: !0, resizeMode: 'cover' })
      var R = w.a.create(function (e) {
          var t
          return (
            (t = {}),
            h()(t, I.INFINITE, { borderRadius: e.borderRadii.infinite }),
            h()(t, I.MEDIUM, { borderRadius: e.borderRadii.small }),
            h()(t, I.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        M = w.a.create(function (e) {
          return {
            root: {
              borderRadius: e.borderRadii.xLarge,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.none,
              borderColor: 'transparent',
              maxWidth: '100%',
              height: '100%',
              overflow: 'hidden',
            },
            image: { display: 'block', height: '100%', width: '100%' },
            loadingBorder: { borderColor: e.colors.gray300 },
            activityIndicator: { height: '100%' },
          }
        })
      t.b = k
    },
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return v
      }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'b', function () {
          return _
        }),
        n.d(t, 'f', function () {
          return w
        }),
        n.d(t, 'a', function () {
          return C
        })
      n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('dWxr'),
        l = n.n(o),
        s = n('OiMc'),
        c = n('hHEM'),
        d = n('rHpw'),
        u = n('aITJ'),
        p = n('IZ3v'),
        m = function (e, t) {
          for (var n = l()(e.getText()), a = 0; a < n.length; a++)
            n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
        },
        h = { clipPath: 'circle(0% at center)' },
        f = function (e, t, n) {
          e.findEntityRanges(function (e) {
            var t = e.getEntity(),
              a = t ? n.getEntity(t) : null
            return !!a && 'LINK' === a.getType()
          }, t)
        },
        g = function (e) {
          return function (t) {
            if (!t.entityKey) return null
            var n = t.children,
              a = t.contentState.getEntity(t.entityKey).getData().url
            return r.a.createElement(
              s.a,
              { animationDuration: 'normal', renderContent: e(n, a), withArrow: !0 },
              r.a.createElement(i.b, { color: 'text', withInteractiveStyling: !0, withUnderline: !0 }, n),
            )
          }
        },
        v = function (e) {
          return { strategy: f, component: g(e) }
        },
        y = {
          strategy: f,
          component: function (e) {
            return e.entityKey
              ? r.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        b = {
          strategy: m,
          component: function (e) {
            var t = l()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(p.b)(t)
            return n ? r.a.createElement(i.b, { link: Object(p.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        _ = {
          strategy: m,
          component: function (e) {
            return r.a.createElement('span', { style: { color: d.a.theme.colors.link } }, e.children)
          },
        },
        w = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t && n.getEntity(t)
              return !(!a || a.type !== c.a.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              a = e.entityKey,
              i = (a && n.getEntity(a)) || {}
            return !(u.b.isFirefox() && u.b.firefoxVersion() < 49)
              ? r.a.Children.map(t, function (e) {
                  var t,
                    n = r.a.Children.map(e, function (e) {
                      return r.a.createElement('span', { style: h }, e)
                    })[0]
                  return r.a.cloneElement(
                    r.a.createElement('span', null),
                    {
                      style:
                        ((t = (i.data && i.data.url) || ''),
                        {
                          backgroundImage: 'url("'.concat(t, '")'),
                          backgroundSize: '1em 1em',
                          padding: '0.15em',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          WebkitTextFillColor: 'transparent',
                        }),
                    },
                    n,
                  )
                })
              : t
          },
        },
        C = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var a, r, i = t.getText(); (a = e.exec(i)); ) n((r = a.index), r + a[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        }
    },
    LWCC: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(f),
        v = n('Zejx'),
        y = n('rxPX'),
        b = n('0KEI'),
        _ = Object(y.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: v.a.follow,
              unfollow: v.a.unfollow,
            }
          })
          .withAnalytics(),
        w = n('CGyZ'),
        C = n('PbbS'),
        E = n('3XMw'),
        T = n.n(E),
        x = n('sUoZ'),
        S = n('Tp1h'),
        I = n('Jkc4'),
        k = n('TnY3'),
        R = Object.freeze({ follow: T.a.i79ab12a, following: T.a.d960b55b, unfollow: T.a.c0f56044 }),
        M = Object.freeze({
          follow: T.a.fcf51fe6,
          following: T.a.e9a90d71,
          unfollow: T.a.bf403715,
          confirmationHeadline: T.a.c9f08e28,
          confirmationSheetText: T.a.abc600f3,
        }),
        P = Object.freeze({
          follow: T.a.cd876e01,
          following: T.a.f2816e02,
          unfollow: T.a.f5b04fbb,
          confirmationHeadline: T.a.c481ae3f,
          confirmationSheetText: T.a.aa3ba123,
        }),
        L = Object.freeze({
          follow: T.a.e0e730b0,
          following: T.a.e0e730b0,
          unfollow: T.a.b1850062,
          confirmationHeadline: T.a.gd3f996f,
          confirmationSheetText: T.a.i36c403c,
        }),
        D = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              h()(s()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case C.a.Favorite:
                  case C.a.Star:
                  case C.a.Interested:
                    return g.a.createElement(x.a, null)
                  case C.a.FollowTopic:
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(s()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? g.a.createElement(g.a.Fragment, null) : void 0
              }),
              h()(s()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case C.a.FollowTopic:
                    return { follow: R.follow, unfollow: R.unfollow, following: R.following }
                  case C.a.Favorite:
                    return {
                      follow: P.follow,
                      unfollow: P.unfollow,
                      following: P.following,
                      confirmationHeadline: P.confirmationHeadline && P.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: P.confirmationSheetText,
                    }
                  case C.a.Star:
                    return {
                      follow: M.follow,
                      unfollow: M.unfollow,
                      following: M.following,
                      confirmationHeadline: M.confirmationHeadline && M.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: M.confirmationSheetText,
                    }
                  case C.a.Interested:
                    return {
                      follow: L.follow,
                      unfollow: L.unfollow,
                      following: L.following,
                      confirmationHeadline: L.confirmationHeadline && L.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: L.confirmationSheetText,
                    }
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(s()(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.educateOnFollow,
                  r = t.follow,
                  i = t.history,
                  o = t.topic
                r(o.id).catch(n()),
                  e._handleScribe('follow'),
                  a && o && i.push({ pathname: '/i/topics/education', state: { topicName: o.name } })
              }),
              h()(s()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.topic
                ;(0, t.unfollow)(a.id).catch(n()), e._handleScribe('unfollow')
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescribedBy,
                    a = t.isTransparent,
                    r = t.nativeID,
                    i = t.showRelationshipChangeConfirmation,
                    o = t.size,
                    l = t.style,
                    s = t.textMode,
                    c = t.topic,
                    d = c.following,
                    u = c.name
                  return g.a.createElement(I.a, { customText: u, displayMode: S.a.topic }, function (t) {
                    return g.a.createElement(w.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(s),
                        followingIcon: e._getFollowingButtonIcon(s),
                      },
                      buttonText: e._getButtonText(s),
                      displayMode: e._getDisplayMode(s),
                      isFollowing: d,
                      isTransparent: a,
                      name: u,
                      nativeID: r,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: i,
                      size: o,
                      style: l,
                      type: 'topic',
                      withConfirmationSheetText: d,
                    })
                  })
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'topic', action: e })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(D, 'defaultProps', { size: 'small', textMode: C.a.Default })
      t.a = Object(k.a)(_(D))
    },
    LtQU: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M19 10H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      n('yH/f')
      var a = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    MLl7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return i
        })
      n('yH/f'), n('vrRf'), n('1IsZ')
      var a = Object.freeze({ Composition: 'composition', DMComposition: 'dm_composition' }),
        r = function (e) {
          return Object.values(a).indexOf(e) >= 0
        },
        i = function (e, t) {
          return 'boolean' == typeof e ? e : t
        }
    },
    'Mbn/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M3.5 5.25H2c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm18.5 12H7.5c-.414 0-.75-.337-.75-.75V2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.5c0 1.24 1.01 2.25 2.25 2.25H22c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4 2.5c-.414 0-.75.336-.75.75V22c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z',
              }),
              o.a.createElement('path', {
                d: 'M8.5 6.75h8c.414 0 .75.337.75.75v8c0 .414.336.75.75.75s.75-.336.75-.75v-8c0-1.24-1.01-2.25-2.25-2.25h-8c-.414 0-.75.336-.75.75s.336.75.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('rHpw'),
        o = n('MWbm')
      function l(e) {
        var t = e.spacing
        return r.a.createElement(o.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != t ? i.a.theme.spaces[t] : void 0 }],
        })
      }
      var s = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    ORQL: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('RH6X'),
        s = n('rziq'),
        c = n('hHEM'),
        d = n('keCP'),
        u = {
          convertEmojiToEntities: c.a.convertEmojiToEntities,
          element: d.a,
          initEditorState: c.a.initEditorState,
          insertTextAtCursor: c.a.insertTextAtCursor,
          updateOverflowStyle: c.a.updateOverflowStyle,
          dismissComposerCommandName: s.a,
          sendTweetCommandName: s.b,
        }
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(e, r()({}, t, { richTextInputContext: u, typeaheadWrapper: l.a }))
        }
      }
    },
    Olb6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('5cUs'),
        s = n('wwsH'),
        c = o.a.d9fd5570,
        d = { viewType: 'hidden_replies' }
      t.a = function (e) {
        var t = e.link,
          n = e.onPress
        return r.a.createElement(s.a, {
          Icon: l.a,
          accessibilityLabel: c,
          activeColor: 'primary',
          behavioralEventContext: d,
          link: t,
          onPress: n,
        })
      }
    },
    PKbs: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      n('yH/f'), n('M+/F'), n('z84I'), n('ho0z'), n('1t7P'), n('jQ/y')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('t62R'),
        l = n('3XMw'),
        s = n.n(l),
        c = n('MWbm'),
        d = r.a.createElement(
          s.a.I18NFormatMessage,
          { $i18n: 'i5ba24f4' },
          r.a.createElement(
            o.b,
            { link: 'https://help.twitter.com/en/rules-and-policies/twitter-rules', withInteractiveStyling: !1 },
            s.a.b154b059,
          ),
        ),
        u = function (e) {
          var t = e.containerStyle,
            n = e.explanation,
            a = e.explanationStyle,
            i = e.heading
          return r.a.createElement(c.a, { style: t }, i, r.a.createElement(o.b, { color: 'gray700', style: a }, n || d))
        },
        p = n('csss'),
        m = function (e) {
          var t = e.getPivotLink,
            n = e.renderBadge,
            a = e.rules
          return r.a.createElement(
            r.a.Fragment,
            null,
            a.map(function (e, a) {
              var i = e.description,
                l = e.name,
                s = e.rest_id,
                c = t(e),
                d = n(a + 1),
                u = r.a.createElement(o.b, { weight: 'bold' }, l)
              return r.a.createElement(p.a, { description: i, key: s, label: u, link: c, thumbnail: d })
            }),
          )
        },
        h = n('97Jx'),
        f = n.n(h),
        g = n('ddV6'),
        v = n.n(g),
        y = (n('hCOa'), n('87if'), n('Ee2X'), n('9Jxp')),
        b = n('LtQU'),
        _ = n('rHpw'),
        w = _.a.create(function (e) {
          return { icon: { color: e.colors.gray300, flexShrink: 0, paddingLeft: e.spaces.space12 } }
        }),
        C = function (e) {
          var t = e.badge,
            n = e.rule,
            a = n.description,
            i = n.name,
            l = r.a.createElement(o.b, { weight: 'bold' }, i)
          return r.a.createElement(p.a, {
            description: a,
            label: l,
            renderRightContent: function () {
              return r.a.createElement(b.a, { style: w.icon })
            },
            thumbnail: t,
          })
        },
        E = n('CXUS'),
        T = function (e) {
          var t = e.onReorder,
            n = e.renderBadge,
            a = e.rules
          return r.a.createElement(
            E.a,
            {
              onDragEnd: function (e) {
                if (e.destination) {
                  var n = (function (e, t, n) {
                    var a = Array.from(e),
                      r = a.splice(t, 1),
                      i = v()(r, 1)[0]
                    return a.splice(n, 0, i), a
                  })(a, e.source.index, e.destination.index)
                  t(n)
                }
              },
            },
            r.a.createElement(E.c, { droppableId: 'droppable' }, function (e, t) {
              return r.a.createElement(
                'div',
                f()({}, e.droppableProps, { ref: e.innerRef }),
                a.map(function (e, a) {
                  var i = e.rest_id
                  return r.a.createElement(
                    y.a,
                    { draggableId: i, index: a, isBeingDragged: t.draggingFromThisWith === i, key: i },
                    r.a.createElement(C, { badge: n(a + 1), rule: e }),
                  )
                }),
                e.placeholder,
              )
            }),
          )
        },
        x = n('C6f5'),
        S = n('X00g'),
        I = n('h0NW'),
        k = Object.freeze({ Default: 'Default', Pivot: 'Pivot', Reorder: 'Reorder' }),
        R = function (e, t) {
          var n = t.badgeStyle,
            a = t.enabled,
            i = t.theme,
            l = S.a.getCommunityUIColor(i)
          return r.a.createElement(
            c.a,
            { style: [M.badge, a && { backgroundColor: l }, n] },
            r.a.createElement(o.b, { align: 'center', color: 'white', weight: 'bold' }, e),
          )
        },
        M = _.a.create(function (e) {
          return {
            badge: {
              backgroundColor: e.colors.primary,
              borderRadius: e.borderRadii.infinite,
              justifyContent: 'center',
              overflow: 'hidden',
              height: e.spaces.space32,
              width: e.spaces.space32,
            },
            bottomMargin: { marginBottom: x.a },
          }
        })
      t.b = function (e) {
        var t = e.badgeStyle,
          n = e.displayType,
          a = void 0 === n ? k.Default : n,
          o = e.explanation,
          l = e.getPivotLink,
          s = e.headerContainerStyle,
          d = e.headerExplanationStyle,
          p = e.heading,
          h = e.limit,
          f = e.onReorder,
          g = e.ruleContainerStyle,
          v = e.rules,
          y = e.theme,
          b = e.withBottomMargin,
          _ = void 0 !== b && b,
          w = e.withHeader,
          C = void 0 === w || w,
          E = {
            theme: y,
            enabled: r.a.useContext(i.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            badgeStyle: t,
          },
          x = (function (e, t, n) {
            return (t ? e.slice(0, t) : e).map(function (e, t) {
              return { label: e.name, description: e.description, decoration: R(t + 1, n) }
            })
          })(v, h, E),
          S = function (e) {
            return R(e, E)
          }
        return x.length > 0
          ? r.a.createElement(
              c.a,
              { style: _ ? M.bottomMargin : null },
              C ? r.a.createElement(u, { containerStyle: s, explanation: o, explanationStyle: d, heading: p }) : null,
              a === k.Pivot && l
                ? r.a.createElement(m, { getPivotLink: l, renderBadge: S, rules: v })
                : a === k.Reorder && f
                ? r.a.createElement(T, { onReorder: f, renderBadge: S, rules: v })
                : r.a.createElement(I.a, { containerStyle: g, items: x }),
            )
          : null
      }
    },
    PbbS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f'), n('ERkP')
      var a = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    PrL8: function (e, t, n) {
      'use strict'
      var a = n('rHpw').a.create(function (e) {
        return {
          root: { flexGrow: 1, flexShrink: 1, paddingBottom: e.spaces.space12 },
          rightControl: { display: 'flex', flexDirection: 'row' },
          prevButton: { marginEnd: e.spaces.space2 },
          saveButton: { marginStart: e.spaces.space12 },
          segmentedControlChildren: { flexGrow: 1 },
          leftRightButtons: { alignItems: 'center' },
          videoTrimmerWrapper: { flexGrow: 1, flexShrink: 1, marginBottom: e.spaces.space20 },
        }
      })
      t.a = a
    },
    RH6X: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        g = n.n(f),
        v = n('oEoC'),
        y = n('2dXj'),
        b = n('4bHO'),
        _ = n('dzqK'),
        w = n('GZwR'),
        C = n('zpdM'),
        E = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(s()(e), '_genericWrapperRef', g.a.createRef()),
              h()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  l = t.source,
                  s = e.state,
                  c = s.canShowTypeahead,
                  d = s.queryContext,
                  u = c && d ? { word: d.word, resultType: d.resultType } : void 0
                return g.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: u,
                    ref: e._genericWrapperRef,
                    source: l || w.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(s()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              h()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              h()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              h()(s()(e), '_handleInputChange', function (t) {
                if (!Object(_.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  a = n && n.word,
                  r = e._getPlaintextFromCurrentBlock(t),
                  i = v.c(e._getCaret(t), r),
                  o = i.end,
                  l = i.start,
                  s = i.word,
                  c = v.e(s || '', 'compose')
                if ((null == c ? void 0 : c.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (c) {
                    var d = c.q,
                      u = c.result_type
                    e._setQueryContext({ word: d, resultType: u, editorState: t, startIndex: l, endIndex: o })
                  } else e._setQueryContext(void 0)
              }),
              h()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(s()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.editorState,
                    a = t.endIndex,
                    r = t.startIndex,
                    i = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                    o = C.Modifier.replaceText(n.getCurrentContent(), i, e),
                    l = C.EditorState.push(n, o, 'insert-characters'),
                    s = r + e.length,
                    c = l.getSelection().merge({ anchorOffset: s, focusOffset: s })
                  return C.EditorState.forceSelection(l, c)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.a = E
    },
    Rqga: function (e, t, n) {
      var a = n('ax0f'),
        r = Math.log,
        i = Math.LN2
      a(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return r(e) / i
          },
        },
      )
    },
    RrO2: function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var a = n('ORQL'),
        r = n('x8Sc')
      t.default = Object(a.a)(r.default)
    },
    Sksh: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('KEM+'),
        s = n.n(l),
        c = (n('+KXO'), n('849X'), n('TJCb'), n('SrIh')),
        d = n('M0jS'),
        u = n('+d3d'),
        p = n('VY6S'),
        m = (function () {
          function e() {
            var t = this
            r()(this, e),
              s()(this, 'usersInApp', {}),
              s()(
                this,
                '_throttledInitialFetch',
                Object(u.a)(function () {
                  t.store.dispatch(d.b.fetchManyIfNeeded(Object.keys(t.usersInApp)))
                }, 1500),
              )
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  this.store = e
                },
              },
              {
                key: 'registerUserInApp',
                value: function (e) {
                  Object.keys(this.usersInApp).length > 50 &&
                    ((this.usersInApp = {}),
                    Object(c.a)(new Error('Registered users in app has exceeded 50'), { level: 'warning' })),
                    this.usersInApp[e]
                      ? (this.usersInApp[e] = this.usersInApp[e] + 1)
                      : ((this.usersInApp[e] = 1), Object(p.a)(this._throttledInitialFetch(), 100))
                },
              },
              {
                key: 'deregisterUserInApp',
                value: function (e) {
                  this.usersInApp[e] && this.usersInApp[e] > 1
                    ? (this.usersInApp[e] = this.usersInApp[e] - 1)
                    : delete this.usersInApp[e]
                },
              },
            ]),
            e
          )
        })()
      t.a = new m()
    },
    UgB4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return P
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(v),
        b = n('3XMw'),
        _ = n.n(b),
        w = n('cjZk'),
        C = 'fileInput',
        E = n('sjK1'),
        T = n('/Imo'),
        x = n('rHpw'),
        S = n('9HgX'),
        I = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        k = _.a.b9960f31,
        R = { viewType: 'media_picker' },
        M = y.a.createElement(w.a, null),
        P = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? S.b : []).concat(t ? [S.a] : []).concat(r ? E.a : [])
        },
        L = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptImages,
                    a = e.acceptVideo,
                    i = e.customMimeTypes,
                    l = e.icon,
                    s = e.style,
                    c = e.withIcon,
                    d = o()(e, I),
                    u = P({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    T.a,
                    r()({}, d, {
                      accept: u,
                      behavioralEventContext: R,
                      icon: c ? l : void 0,
                      style: [D.root, s],
                      testID: C,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      g()(L, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: k,
        icon: M,
        size: 'medium',
        withIcon: !0,
      })
      var D = x.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = L
    },
    WOwf: function (e, t, n) {
      'use strict'
      function a(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    XpKj: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return p
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'c', function () {
          return _
        }),
        n.d(t, 'a', function () {
          return w
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = (n('yH/f'), n('LW0h'), n('7x/C'), n('oEOe')),
        s = n('kGix'),
        c = n('Ssj5'),
        d = 'scheduledTweets',
        u = { fetchStatus: s.a.NONE, scheduledTweets: [] },
        p = 'FETCH_SCHEDULED_TWEETS',
        m = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE',
        }),
        h = 'DELETE_SCHEDULED_TWEET',
        f = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE',
        }),
        g = function (e, t) {
          return t.filter(function (t) {
            return t.rest_id !== e
          })
        }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case m.SUCCESS:
            if (t.payload) return o()(o()({}, e), {}, { fetchStatus: s.a.LOADED, scheduledTweets: t.payload })
            break
          case m.FAILURE:
            return o()(o()({}, e), {}, { fetchStatus: s.a.FAILED })
          case m.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: s.a.LOADING })
          case f.SUCCESS:
            var n = t.meta
            return n && n.deleteScheduledTweetId
              ? o()(o()({}, e), {}, { scheduledTweets: g(n.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(r()({}, d, v))
      var y = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        b = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        _ = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(l.b)(e, { request: a.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: m,
              context: p,
            }).then(function () {})
          }
        },
        w = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(l.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: f,
              context: h,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    YICZ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('Zejx'),
        o = n('rxPX'),
        l = n('0KEI'),
        s = Object(o.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'TOPIC_NOT_INTERESTED_CONTEXT',
            ),
            setNotInterested: i.a.notInterested,
          }
        }),
        c = n('3XMw'),
        d = n.n(c),
        u = n('hOZg'),
        p = n('Jkc4'),
        m = n('Irs7'),
        h = n('/yvb'),
        f = n('rHpw'),
        g = d.a.d9b417c4,
        v = d.a.c29d6806,
        y = d.a.e839db39,
        b = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.nativeID,
            a = e.onPress,
            i = e.setNotInterested,
            o = e.size,
            l = e.style,
            s = e.text,
            c = e.topicId,
            d = e.type,
            u = e.withIconOnly,
            f = Object(m.b)(),
            v = r.a.useCallback(
              function (e) {
                e.preventDefault(),
                  a ? a(e) : (f.scribe({ element: 'topic', action: 'not_interested' }), i(c).catch(t()))
              },
              [f, t, a, i, c],
            )
          return r.a.createElement(p.a, null, function (e) {
            return r.a.createElement(
              h.a,
              {
                accessibilityLabel: g,
                hoverLabel: { label: y },
                icon: u ? w : void 0,
                nativeID: n,
                onPress: e(v),
                pullRight: u,
                size: o,
                style: l,
                type: d,
              },
              u ? null : s,
            )
          })
        }
      b.defaultProps = { size: 'small', text: v, type: 'brandText', withIconOnly: !0 }
      var _ = f.a.create(function (e) {
          return { closeIcon: { color: e.colors.gray700 } }
        }),
        w = r.a.createElement(u.a, { style: _.closeIcon }),
        C = s(b)
      t.a = C
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return u
      }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return v
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        s = n('Ssj5'),
        c = 'geoLocation',
        d = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var u = function (e) {
          return e.geoLocation.permissionStatus
        },
        p = function (e) {
          return e.geoLocation.position
        },
        m = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: m }
        },
        f = 'rweb/geoLocation/SET_POSITION',
        g = function () {
          return function (e, t) {
            return y()
              .then(function (t) {
                return e({ payload: t, type: f })
              })
              .catch(function (t) {
                return e(h(l.b.denied)), Promise.reject(t)
              })
          }
        },
        v = function () {
          return function (e, t) {
            return p(t()) ? Promise.resolve() : e(g())
          }
        },
        y = function () {
          return new Promise(function (e, t) {
            return navigator.geolocation.getCurrentPosition(function (t) {
              var n = {
                timestamp: t.timestamp,
                coords: {
                  latitude: t.coords.latitude,
                  longitude: t.coords.longitude,
                  altitude: t.coords.altitude,
                  accuracy: t.coords.accuracy,
                  altitudeAccuracy: t.coords.altitudeAccuracy,
                  heading: t.coords.heading,
                  speed: t.coords.speed,
                },
              }
              return e(n)
            }, t)
          })
        }
      s.a.register(
        r()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m:
              return o()(o()({}, e), {}, { permissionStatus: t.payload })
            case f:
              return o()(o()({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    aA1u: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        v = n('t62R'),
        y = n('21zW'),
        b = n('rHpw'),
        _ = n('3XMw'),
        w = n.n(_),
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_formatTimestamp', function (e) {
                var t = w.a.jade381b,
                  n = w.a.d725a288,
                  a = new Date(e),
                  r = t(a),
                  i = n(a)
                return ''.concat(i, ' · ').concat(r)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.style
                  return g.a.createElement(
                    v.b,
                    { color: 'gray700', style: e },
                    this._renderTimestampAndMaybePlace(),
                    this._maybeRenderSource(),
                  )
                },
              },
              {
                key: '_renderTimestampAndMaybePlace',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onPlaceClick,
                    a = e.onTimestampClick,
                    r = e.place,
                    i = e.placeLink,
                    o = e.timestamp,
                    l = e.timestampLink,
                    s = this._formatTimestamp(o)
                  return r
                    ? g.a.createElement(
                        w.a.I18NFormatMessage,
                        { $i18n: 'ba64a3b2' },
                        g.a.createElement(
                          v.b,
                          { color: l ? t : void 0, link: l, onClick: a },
                          w.a.e9c24489({ date: s }),
                        ),
                        g.a.createElement(
                          v.b,
                          { color: i ? t : void 0, link: i, onClick: n },
                          w.a.a16de8a4({ place: r }),
                        ),
                      )
                    : g.a.createElement(v.b, { color: l ? t : void 0, link: l, onClick: a }, s)
                },
              },
              {
                key: '_maybeRenderSource',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onSourceClick,
                    a = e.source,
                    r = e.sourceLink
                  return a
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(y.a, null),
                        g.a.createElement(v.b, { color: r ? t : void 0, link: r, onClick: n, style: E.source }, a),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(C, 'defaultProps', { linkColor: 'link' })
      var E = b.a.create(function (e) {
        return { source: { whiteSpace: 'normal' } }
      })
      t.a = C
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        s = n.n(l),
        c = n('v6aA'),
        d = n('XOJV'),
        u = n('eSoz'),
        p = n('rxPX'),
        m = n('0KEI'),
        h = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            a = n && d.a.select(e, n)
          return a ? Object(u.g)(e, a) : void 0
        },
        g = Object(p.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: d.a.createHydratedTweetSelector(h) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        v = n('YeIG'),
        y = n('uCxL'),
        b = n('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        w = g(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l = (e.tweetId, o()(e, _)),
            d = s.a.useContext(c.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              m && Object(v.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var h = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(b.f)(i, p, t),
            g = f && Object(b.e)(f),
            w = u.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            y.a,
            r()({}, l, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: h,
              socialContextProps: g,
              tweet: i,
              withReactions: w,
            }),
          )
        })
      t.a = w
    },
    c0ZR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('7x/C'), n('JtPf'), n('849X'), n('TJCb')
      var a = function (e) {
        return new Promise(function (t, n) {
          var a = new window.XMLHttpRequest()
          ;(a.responseType = 'blob'),
            (a.onreadystatechange = function () {
              a.readyState === window.XMLHttpRequest.DONE &&
                (200 === a.status ? t(a.response) : n(new Error('Unexpected status code')))
            }),
            (a.onerror = function (e) {
              return n(e)
            }),
            (a.ontimeout = function (e) {
              return n(e)
            }),
            a.open('GET', e, !0),
            a.send()
        })
      }
    },
    cIoY: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('1YZw'),
        o = n('rxPX'),
        l = Object(o.a)().propsFromActions(function () {
          return { addToast: i.b }
        }),
        s = n('VrFO'),
        c = n.n(s),
        d = n('Y9Ll'),
        u = n.n(d),
        p = n('1Pcy'),
        m = n.n(p),
        h = n('5Yy7'),
        f = n.n(h),
        g = n('2VqO'),
        v = n.n(g),
        y = n('KEM+'),
        b = n.n(y),
        _ = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        w = n('3XMw'),
        C = n.n(w),
        E = n('sgih'),
        T = n('t62R'),
        x = n('/yvb'),
        S = n('rHpw'),
        I = C.a.cfd2f35d,
        k = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(m()(e), '_handleOnFocus', function (e) {
                e.currentTarget.select()
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.cancelButtonLabel,
                    n = e.description,
                    a = e.headerText,
                    i = e.link,
                    o = e.onCancel,
                    l = Object(_.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: R.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    E.a,
                    { onMaskClick: o, style: R.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(T.b, { align: 'center', style: R.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(T.b, { align: 'center', color: 'gray700', style: R.labelText }, n),
                    l,
                    r.a.createElement(x.a, { onPress: o, size: 'xLarge', style: R.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      b()(k, 'defaultProps', { cancelButtonLabel: I })
      var R = S.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              paddingVertical: e.spaces.space32,
              paddingHorizontal: e.spaces.space12,
              position: 'relative',
            },
            headerText: { marginBottom: e.spaces.space16 },
            labelText: { marginBottom: e.spaces.space16, width: '100%' },
            linkInput: {
              backgroundColor: e.colors.gray0,
              borderColor: 'transparent',
              color: e.colors.gray700,
              fontSize: e.fontSizes.body,
              marginBottom: e.spaces.space12,
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space20,
            },
            cancelButton: { width: '100%' },
          }
        }),
        M = k,
        P = n('I/9y'),
        L = n('mjJ+'),
        D = n('cm6r'),
        O = n('CaKu'),
        A = n('U+bB'),
        F = C.a.e05c00b4,
        B = C.a.eabf2209,
        N = C.a.a613e72f,
        j = C.a.f88553c8,
        U = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        H = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              b()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(L.a, {
                  items: [{ text: N, Icon: P.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              b()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                O.a.isAvailable() ? (O.a.setString(r), n({ text: j })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
              }),
              b()(m()(a), '_handleCopyLinkSheetCancel', function () {
                a.setState({ showCopyLinkSheet: !1 })
              }),
              (a.state = { showCopyLinkSheet: !1 }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.showCopyLinkSheet,
                    t = this.props,
                    n = t.gifUrl,
                    a = t.provider,
                    i = a.display_name,
                    o = a.name,
                    l = U[o]
                  return l
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        e
                          ? r.a.createElement(M, {
                              description: B({ providerName: i }),
                              headerText: F,
                              link: n,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        r.a.createElement(
                          T.b,
                          { align: 'center', color: 'gray700', style: z.root },
                          r.a.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'e2e6ea0d' },
                            this._renderAttribution(i, l),
                          ),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderAttribution',
                value: function (e, t) {
                  return r.a.createElement(
                    D.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    r.a.createElement(
                      T.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(A.a, { source: { uri: t }, style: z.image }),
                      r.a.createElement(T.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.PureComponent),
        z = S.a.create(function (e) {
          return {
            button: { marginLeft: e.spaces.space12 },
            image: {
              display: 'inline-block',
              height: e.spaces.space16,
              marginHorizontal: e.spaces.space4,
              width: e.spaces.space16,
            },
            root: { marginHorizontal: e.spaces.space12 },
          }
        }),
        V = H,
        W = l(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(V, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = W
    },
    dCqJ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('cm6r'),
        o = n('VrFO'),
        l = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        d = n('1Pcy'),
        u = n.n(d),
        p = n('5Yy7'),
        m = n.n(p),
        h = n('2VqO'),
        f = n.n(h),
        g = n('KEM+'),
        v = n.n(g),
        y = (n('2G9S'), n('t62R')),
        b = n('rHpw'),
        _ = n('3XMw'),
        w = n.n(_),
        C = w.a.d7e50a66,
        E = 'INDIRECT',
        T = 'NO_SPONSORSHIP',
        x = 'ISSUE',
        S = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(u()(e), '_renderDisclaimerDetails', function () {
                var t = e.props,
                  n = t.onPoliticalSponsorWebsiteClick,
                  a = t.promotedContent
                if (!a.adMetadataContainer) return null
                var i = a.adMetadataContainer,
                  o = i.disclaimerType,
                  l = i.sponsorshipCandidate,
                  s = i.sponsorshipOrganization,
                  c = i.sponsorshipOrganizationWebsite,
                  d = i.sponsorshipType,
                  u =
                    c && o !== x
                      ? r.a.createElement(y.b, { link: c, onClick: n })
                      : r.a.createElement(y.b, { color: 'gray700', size: 'subtext2' })
                if (!s) return null
                var p = r.a.createElement(
                    w.a.I18NFormatMessage,
                    { $i18n: 'e1e348dc' },
                    r.a.cloneElement(u, null, w.a.b1e5bc63({ sponsorshipOrganization: s })),
                  ),
                  m = r.a.createElement(
                    w.a.I18NFormatMessage,
                    { $i18n: 'c7dea0d0' },
                    r.a.cloneElement(u, null, w.a.a84fcff2({ sponsorshipOrganization: s })),
                  ),
                  h = l
                    ? r.a.createElement(
                        w.a.I18NFormatMessage,
                        { $i18n: 'b5c2371a', sponsorshipCandidate: l },
                        r.a.cloneElement(u, null, w.a.fd985325({ sponsorshipOrganization: s })),
                      )
                    : null
                return r.a.createElement(
                  y.b,
                  { color: 'gray700', size: 'subtext2' },
                  o === x ? p : d === T ? m : d === E ? h : p,
                )
              }),
              v()(u()(e), '_renderLearnMoreLink', function () {
                var t = e.props,
                  n = t.onPromotedDisclaimerLearnMoreClick,
                  a = t.promotedContent,
                  i = t.tweet,
                  o = (a.adMetadataContainer || {}).disclaimerType === x ? 'issue_ad' : 'political_ad',
                  l = 'http://ads.twitter.com/transparency/ads/'.concat(i.user.screen_name, '/tweet/').concat(i.id_str)
                return r.a.createElement(y.b, { link: l, onClick: n(o), size: 'subtext2', style: I.learnMore }, C)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this._renderDisclaimerDetails(),
                    this._renderLearnMoreLink(),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        I = b.a.create(function (e) {
          return { learnMore: { alignSelf: 'flex-start' } }
        }),
        k = n('e5HP'),
        R = n('Z6aJ'),
        M = n('MWbm')
      t.a = function (e) {
        var t = e.onPoliticalSponsorWebsiteClick,
          n = e.onPromotedDisclaimerLearnMoreClick,
          a = e.onPromotedIndicatorClick,
          o = e.promotedContent,
          l = e.promotedContentAdvertiser,
          s = e.style,
          c = e.testID,
          d = e.tweet,
          u = e.withCircleIcon,
          p = R.a.isPromoted(o),
          m =
            !!o &&
            ((o.adMetadataContainer &&
              ('POLITICAL' === o.adMetadataContainer.disclaimerType ||
                'ISSUE' === o.adMetadataContainer.disclaimerType)) ||
              'political' === R.a.getDisclosureType(o) ||
              'issue' === R.a.getDisclosureType(o))
        return p
          ? r.a.createElement(
              M.a,
              { style: s, testID: c },
              l && o
                ? r.a.createElement(
                    i.a,
                    {
                      interactiveStyles: null,
                      link: {
                        pathname: 'https://twitter.com/'.concat(l.screen_name),
                        state: { promotedTweetState: o },
                      },
                      onPress: a,
                    },
                    r.a.createElement(k.a, { promotedContent: o, withCircleIcon: u }),
                  )
                : !!o && r.a.createElement(k.a, { promotedContent: o }),
              m && o
                ? r.a.createElement(S, {
                    onPoliticalSponsorWebsiteClick: t,
                    onPromotedDisclaimerLearnMoreClick: n,
                    promotedContent: o,
                    tweet: d,
                  })
                : null,
            )
          : null
      }
    },
    dWxr: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, l.default)(e, t)
            .concat((0, o.default)(e))
            .concat((0, i.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == n.length) return []
          return (0, s.default)(n), n
        })
      var r = a(n('EW8Q')),
        i = a(n('yyPN')),
        o = a(n('YXS5')),
        l = a(n('vwfs')),
        s = a(n('c8jd'))
      e.exports = t.default
    },
    dzqK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('ERkP')
      var a = n('zpdM')
      function r(e) {
        return e instanceof a.EditorState
      }
    },
    gdQ4: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        v = n('tRj+'),
        y = n('3XMw'),
        b = n.n(y),
        _ = n('oQhu'),
        w = n('MWbm'),
        C = n('htQn'),
        E = n('5mJL'),
        T = n('jhWN'),
        x = n('/yvb'),
        S = n('t62R'),
        I = n('rHpw'),
        k = b.a.e3a24e4b,
        R = b.a.i569ff3e,
        M = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(
                s()(e),
                '_getMemoizedBehavioralEventContext',
                Object(_.a)(function (e) {
                  return { viewType: e }
                }),
              ),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onImpression
                  e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUrl,
                    n = e.onClick,
                    a = e.style,
                    r = e.to,
                    i = e.userName,
                    o = e.withButton,
                    l = e.withConversationLine,
                    s = t && i,
                    c = o ? 'add_tweet' : 'see_more',
                    d = this._getMemoizedBehavioralEventContext(c)
                  return g.a.createElement(
                    v.a,
                    { behavioralEventContext: d },
                    g.a.createElement(
                      C.a,
                      { link: r, onClick: n, style: [P.root, a] },
                      g.a.createElement(
                        E.a,
                        {
                          avatarCell: s
                            ? g.a.createElement(
                                w.a,
                                { style: [P.avatarColumn, !l && P.avatarColumnWithoutLine] },
                                l ? g.a.createElement(w.a, { style: P.conversationLine }) : null,
                                g.a.createElement(T.a, { size: 'large', uri: t }),
                              )
                            : null,
                          avatarCellStyle: P.conversationConnector,
                          cellStyle: o ? P.buttonContainer : s ? P.labelWithAvatar : P.label,
                        },
                        o
                          ? g.a.createElement(
                              x.a,
                              { accessibilityRole: 'none', size: 'xSmall', style: P.button, type: 'brandOutlined' },
                              k,
                            )
                          : g.a.createElement(S.b, { color: 'link', style: P.enlargeTouchTarget }, R),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      h()(M, 'defaultProps', { withButton: !1, withConversationLine: !1 })
      var P = I.a.create(function (e) {
        return {
          root: {
            overflow: 'hidden',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space2,
          },
          avatarColumn: { flexDirection: 'column', flexGrow: 0, alignItems: 'center', paddingBottom: e.spaces.space4 },
          avatarColumnWithoutLine: { paddingTop: e.spaces.space12 },
          conversationConnector: { alignItems: 'center', display: 'flex', position: 'relative' },
          label: { flexGrow: 1, paddingVertical: e.spaces.space4 },
          labelWithAvatar: { flexGrow: 1, justifyContent: 'center' },
          conversationLine: {
            backgroundColor: e.colors.gray200,
            flexGrow: 1,
            flexShrink: 1,
            width: e.componentDimensions.conversationLineWidth,
            marginBottom: e.spaces.space4,
          },
          buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: 'row', flexGrow: 1 },
          button: { marginVertical: e.spaces.space4 },
          enlargeTouchTarget: { paddingVertical: e.spaces.space8 },
        }
      })
    },
    gpVt: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return V
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('z84I'), n('KqXw'), n('3uku'), n('jwue'), n('7x/C'), n('+oxZ'), n('ho0z'), n('ERkP')),
        g = n.n(f),
        v = n('K1iM'),
        y = n.n(v),
        b = n('RhWx'),
        _ = n.n(b),
        w = (n('wFPu'), n('CDB5')),
        C = n('xVN5'),
        E = n('vjRr'),
        T = n('rxPX'),
        x = n('0KEI'),
        S = function (e, t) {
          var n,
            a,
            r = t.urls,
            i = _()(r),
            o = y()(i.reverse())
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var l = a.value
              if ((n = E.a.select(e, l))) break
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return n
        },
        I = Object(T.a)()
          .propsFromState(function () {
            return { card: S }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: E.a.fetchCardPreviewIfNeeded,
              updateDMComposer: w.e,
              updateTweetComposer: C.w,
            }
          }),
        k = n('KqB4'),
        R = n.n(k),
        M = n('aX4+'),
        P = n('3XMw'),
        L = n.n(P),
        D = n('hOZg'),
        O = n('cnVF'),
        A = n('MWbm'),
        F = n('v6aA'),
        B = n('/yvb'),
        N = n('rHpw'),
        j = n('VY6S'),
        U = n('mN6z'),
        H = L.a.f6fec9f6,
        z = /^https?:\/\//i,
        V = function (e) {
          var t = R()(e)
          if (t.length)
            return t.map(function (e) {
              return (!z.test(e) && 'http://'.concat(e)) || e
            })
        },
        W = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(s()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              h()(s()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: O.B })
              }),
              h()(s()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  a = t.index,
                  r = t.updateDMComposer,
                  o = t.updateTweetComposer,
                  l = (e || {}).cardUrl
                i._isDMComposer ? n && r(n, l) : o({ updates: { cardUrl: l }, index: a })
              }),
              (i._debouncedFetchCardPreview = Object(j.a)(i._fetchCardPreviewIfNeeded, 1e3)),
              (i._isDMComposer = !!e.conversationId),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.urls
                  Object(U.a)(e.urls, t) || this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._updateSingleComposer()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.card,
                    n = e.isCardPreviewTombstoned,
                    a = e.style,
                    r = this.context.loggedInUserId
                  return t && !n && r
                    ? g.a.createElement(
                        A.a,
                        { style: a },
                        g.a.createElement(M.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        g.a.createElement(B.a, {
                          accessibilityLabel: H,
                          icon: g.a.createElement(D.a, null),
                          onPress: this._handleCardPreviewDismissal,
                          size: 'xSmall',
                          style: K.closeButton,
                          type: 'onMediaDominantColorFilled',
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(W, 'contextType', F.a)
      var K = N.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        G = I(W)
      t.a = G
    },
    h5NW: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        l = n('yiKp'),
        s = n.n(l),
        c = n('VrFO'),
        d = n.n(c),
        u = n('Y9Ll'),
        p = n.n(u),
        m = n('1Pcy'),
        h = n.n(m),
        f = n('5Yy7'),
        g = n.n(f),
        v = n('2VqO'),
        y = n.n(v),
        b = n('KEM+'),
        _ = n.n(b),
        w =
          (n('2G9S'),
          n('yH/f'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('5BYb'),
          n('KqXw'),
          n('3uku'),
          n('7xRU'),
          n('JtPf'),
          n('jQ3i'),
          n('x4t0'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('hBvt'),
          n('MvUL'),
          n('ulNE'),
          n('urw/'),
          n('LW0h'),
          n('hCOa'),
          n('DfhM'),
          n('vrRf'),
          n('uFXj'),
          n('ERkP')),
        C = n.n(w),
        E = n('dDSG'),
        T = n('pXBW'),
        x = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('ddV6'),
        k = n.n(I),
        R = n('+Kfv'),
        M = n('eSoz'),
        P = n('rxPX'),
        L = function (e, t) {
          var n = t.communityId
          return n ? M.c.select(e, n) : void 0
        },
        D = Object(P.a)().propsFromState(function () {
          return { community: L }
        }),
        O = n('MtXG'),
        A = n('t62R'),
        F = n('CKsB'),
        B = n('rHpw'),
        N = n('3XMw'),
        j = n.n(N),
        U = j.a.d58baa7e,
        H = D(
          C.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var i,
              o = n.member_count
            return C.a.createElement(F.a, {
              actionSubText:
                ((i = U(o)),
                C.a.createElement(
                  O.a.Group,
                  null,
                  C.a.createElement(
                    O.a,
                    null,
                    C.a.createElement(
                      A.b,
                      { color: 'white' },
                      C.a.createElement(
                        j.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        C.a.createElement(O.a.Value, null, j.a.ibd0106d({ formattedCount: i })),
                        C.a.createElement(O.a.Label, null, j.a.cface2d0({ count: o })),
                      ),
                    ),
                  ),
                )),
              actionText: n.name,
              isSelected: r === a,
              key: a,
              media: n.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: a,
                conversationControlsValue: 'community_members',
              }),
              selectable: !0,
              style: z.menuItem,
            })
          }),
        ),
        z = B.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        V = n('0zXz'),
        W = n('FS1z'),
        K = n('Irs7'),
        G = n('MWbm'),
        q = n('yw4N'),
        X = n('/yvb'),
        Q = n('+Eiw'),
        Y = n('Zg3A'),
        J = n('EyD/'),
        Z = n('5wO0'),
        $ = j.a.e815fc33,
        ee = j.a.c63602d3,
        te = j.a.baffe39a,
        ne = j.a.aa4209e8,
        ae = j.a.d0748dae,
        re = j.a.abd845fd,
        ie = { viewType: 'everyone' },
        oe = { viewType: 'community' },
        le = j.a.d58baa7e,
        se = B.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: Q.a.getBackgroundImage() },
            viewport: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'auto',
              zIndex: void 0,
            },
          }
        }),
        ce = function (e) {
          var t,
            n,
            a,
            r,
            i,
            o = e.audienceControlsValue,
            l = e.dismiss,
            s = e.hasMemberships,
            c = e.history,
            d = e.isC9sParticipationEnabled,
            u = e.isSuperFollowsCreator,
            p = e.isTrustedFriendsEnabled,
            m = e.onAudienceControlsValueChange,
            h = e.sliceModule,
            f = e.updateSingleComposer,
            g = o.communityIdValue || void 0,
            v = o.exclusivityControlValue || void 0,
            y = o.trustedFriendsValue || void 0,
            b = null === (t = e.trustedFriendsList) || void 0 === t ? void 0 : t.rest_id,
            _ =
              null !== (n = null === (a = e.trustedFriendsList) || void 0 === a ? void 0 : a.member_count) &&
              void 0 !== n
                ? n
                : 0,
            w = Object(K.b)(),
            E = C.a.useCallback(
              function (e) {
                return function () {
                  m(e),
                    ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                      f({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } }),
                    l()
                }
              },
              [m, f, l],
            ),
            T = C.a.useCallback(
              function () {
                if (b)
                  return (
                    w.scribe({
                      section: 'audience_selector',
                      component: 'trusted_friends',
                      element: 'edit_list_button',
                      action: 'click',
                    }),
                    c.push('/i/circles/'.concat(b, '/members'))
                  )
              },
              [w, c, b],
            )
          return C.a.createElement(
            G.a,
            { style: se.root },
            C.a.createElement(
              q.a,
              { style: se.viewport },
              C.a.createElement(
                C.a.Fragment,
                null,
                C.a.createElement(A.b, { size: 'headline1', style: se.title, weight: 'bold' }, $),
                C.a.createElement(
                  R.a,
                  { behavioralEventContext: ie },
                  C.a.createElement(F.a, {
                    Icon: Y.a,
                    actionText: te,
                    isSelected: !v && !g && !y,
                    onClick: E({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: se.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                u
                  ? C.a.createElement(F.a, {
                      Icon: J.a,
                      actionText: ne,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!v,
                      onClick: E({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: se.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                p && e.trustedFriendsList && b
                  ? C.a.createElement(F.a, {
                      Icon: Z.a,
                      actionSubText:
                        ((r = _),
                        (i = le(r)),
                        C.a.createElement(
                          O.a.Group,
                          null,
                          C.a.createElement(
                            O.a,
                            null,
                            C.a.createElement(
                              A.b,
                              { color: 'white' },
                              C.a.createElement(
                                j.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                C.a.createElement(O.a.Value, null, j.a.a5f7b70f({ formattedCount: i })),
                                C.a.createElement(O.a.Label, null, j.a.a7daec1e({ count: r })),
                              ),
                            ),
                            C.a.createElement(X.a, { onPress: T, size: 'xSmall', type: 'primaryText' }, re),
                          ),
                        )),
                      actionText: ae,
                      iconThumbnailColor: 'success',
                      isSelected: !!y,
                      onClick: E({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsMemberCount: _,
                        trustedFriendsValue: { trusted_friends_list_id: b },
                      }),
                      selectable: !0,
                      style: se.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              s && h && d
                ? C.a.createElement(
                    G.a,
                    null,
                    C.a.createElement(
                      R.a,
                      { behavioralEventContext: oe },
                      C.a.createElement(A.b, { style: se.title, weight: 'bold' }, ee),
                      C.a.createElement(W.a, {
                        module: h,
                        noItemsRenderer: V.a,
                        renderer: function (e) {
                          return C.a.createElement(H, {
                            clickHandler: E,
                            communityId: e,
                            dismiss: l,
                            key: e,
                            selectedCommunityId: g,
                          })
                        },
                        withoutHeadroom: !0,
                      }),
                    ),
                  )
                : null,
            ),
          )
        },
        de = n('v6aA'),
        ue = n('xVN5'),
        pe = n('wAC9'),
        me = function (e) {
          return Object(pe.a)({
            contextSuffix: 'COMMUNITIES_MEMBERSHIPS_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.Communities.fetchCommunitiesMembershipsSlice
            },
            getEndpointParams: function (e) {
              return e
            },
            sliceKey: 'communitiesMembershipsSlice-'.concat(e),
          })
        },
        he = n('hqKg'),
        fe = n('li/m'),
        ge = n('RqPI'),
        ve = n('xZGM'),
        ye = n('0KEI'),
        be = n('oEOe'),
        _e = n('kGix'),
        we = n('Ssj5'),
        Ce = 'trustedFriends',
        Ee = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        Te = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        xe = function (e) {
          return e.trustedFriends.lists
        },
        Se = function () {
          return function (e, t, n) {
            var a = n.api
            return be.b(e, { request: a.TrustedFriends.createTrustedFriendsList })({
              actionTypes: Te,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        Ie = function () {
          return function (e, t) {
            var n = t(),
              a = xe(n)
            ;(a.length ? a[0] : void 0) ||
              e(function (e, t, n) {
                var a = n.api
                return be.b(e, { request: a.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: Ee,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && Se && e(Se())
              })
          }
        },
        ke = Object.freeze({ lists: [], fetchStatus: _e.a.NONE })
      we.a.register(
        _()({}, Ce, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case Ee.REQUEST:
              return s()(s()({}, e), {}, { fetchStatus: _e.a.LOADING })
            case Ee.FAILURE:
              return s()(s()({}, e), {}, { error: t.payload, fetchStatus: _e.a.FAILED })
            case Ee.SUCCESS:
              if (t.payload)
                return s()(
                  s()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: _e.a.LOADED },
                )
              break
            case Te.REQUEST:
              return s()(s()({}, e), {}, { fetchStatus: _e.a.LOADING })
            case Te.FAILURE:
              return s()(s()({}, e), {}, { error: t.payload, fetchStatus: _e.a.FAILED })
            case Te.SUCCESS:
              if (t.payload)
                return s()(
                  s()({}, e),
                  {},
                  { lists: [t.payload.trusted_friends_list_create], error: null, fetchStatus: _e.a.LOADED },
                )
              break
            default:
              return e
          }
          return e
        }),
      )
      var Re = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? M.c.select(e, n) : void 0
        },
        Me = function (e, t) {
          return Object(ve.D)(e, ve.f)
        },
        Pe = function (e, t) {
          return Object(ve.D)(e, ve.w)
        },
        Le = function (e) {
          var t = xe(e)
          return t.length ? t[0] : void 0
        },
        De = Object(P.a)()
          .propsFromState(function () {
            return {
              communities: M.f,
              educationalVisibilityFlag: Me,
              trustedFriendsEducationVisibilityFlag: Pe,
              hasMemberships: fe.d,
              selectedCommunity: Re,
              sliceModule: Object(he.createSelector)(ge.r, function (e) {
                return e ? me(e) : void 0
              }),
              selectTrustedFriendsList: Le,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ye.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(ve.z)(ve.f)
              },
              addTrustedFriendsEducationFlag: function () {
                return Object(ve.z)(ve.w)
              },
              updateSingleComposer: ue.w,
              fetchOrCreateTrustedFriendsList: Ie,
            }
          }),
        Oe = n('FG+G'),
        Ae = n.p + 'twitter-circle.b1a74a95.svg',
        Fe = n('TIdA'),
        Be = n('A91F'),
        Ne = j.a.f0598964,
        je = j.a.ceec051b,
        Ue = j.a.fc5bfd95,
        He = j.a.f5b3dc1d,
        ze = B.a.create(function (e) {
          return {
            root: { flexDirection: 'column', paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space12 },
            createButton: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
            coverContainer: { height: '170px', width: '100%' },
          }
        }),
        Ve = function (e) {
          var t = e.onAction,
            n = e.setShowTrustedFriendsModal
          return C.a.createElement(
            C.a.Fragment,
            null,
            C.a.createElement(
              G.a,
              {
                accessibilityDescribedBy: 'trusted-friends-education-popover',
                accessibilityLabelledBy: 'trustd-friends-education-title',
                accessibilityRole: 'dialog',
                style: ze.root,
              },
              C.a.createElement(
                G.a,
                { style: ze.coverContainer },
                C.a.createElement(Fe.a, { accessibilityLabel: '', aspectMode: Be.a.COVER, image: Ae }),
              ),
              C.a.createElement(
                G.a,
                { style: ze.title },
                C.a.createElement(
                  A.b,
                  { nativeID: 'conversation-controls-title', size: 'title3', style: ze.title, weight: 'bold' },
                  Ne,
                ),
                C.a.createElement(
                  A.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body', style: ze.createButton },
                  je,
                ),
                C.a.createElement(
                  X.a,
                  {
                    onPress: function () {
                      t(), n(!0)
                    },
                    size: 'xLarge',
                    style: ze.createButton,
                    type: 'primaryFilled',
                  },
                  Ue,
                ),
                C.a.createElement(
                  X.a,
                  {
                    key: 'button_cancel',
                    onPress: function () {
                      t()
                    },
                    size: 'xLarge',
                    style: ze.cancelButton,
                    type: 'primaryOutlined',
                  },
                  He,
                ),
              ),
            ),
          )
        },
        We = n('7JQg'),
        Ke = n('feu+'),
        Ge = n('cOhU'),
        qe = n('a5gf'),
        Xe = n('Lsrn'),
        Qe = n('k/Ka'),
        Ye = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Qe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Xe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M1 7c0-.552.448-1 1-1h9.38c.545-2.275 2.83-3.678 5.104-3.135 1.552.37 2.764 1.583 3.135 3.135H22c.552 0 1 .448 1 1s-.448 1-1 1h-2.38c-.545 2.275-2.83 3.678-5.104 3.135-1.552-.37-2.764-1.583-3.135-3.135H2c-.552 0-1-.448-1-1zm21 9h-9.38c-.545-2.275-2.83-3.678-5.104-3.135-1.552.37-2.764 1.583-3.135 3.135H2c-.552 0-1 .448-1 1s.448 1 1 1h2.38c.545 2.275 2.83 3.678 5.104 3.135 1.552-.37 2.764-1.583 3.135-3.135H22c.552 0 1-.448 1-1s-.448-1-1-1z',
              }),
            ),
          )
        }
      Ye.metadata = { width: 24, height: 24 }
      var Je = Ye,
        Ze = j.a.e76b4485,
        $e = j.a.j24c37b2,
        et = j.a.bb55e8ed,
        tt = j.a.h3fad86e,
        nt = j.a.g31872be,
        at = j.a.b28ec85f,
        rt = j.a.h0318479
      function it(e) {
        var t = e.changeAudienceToTrustedFriends,
          n = e.history,
          a = e.setShowModal,
          r = e.trustedFriendsListId,
          i = C.a.useCallback(
            function () {
              t(), r && (a(!1), n.push('/i/circles/'.concat(r, '/members')))
            },
            [n, a, r, t],
          ),
          o = C.a.useCallback(
            function () {
              a(!1), t()
            },
            [a, t],
          ),
          l = C.a.createElement(
            C.a.Fragment,
            null,
            C.a.createElement(
              G.a,
              { style: ot.contentWrapper },
              C.a.createElement(G.a, null, C.a.createElement(Ge.a, { style: ot.icon })),
              C.a.createElement(
                G.a,
                { style: ot.subtextContainer },
                C.a.createElement(
                  A.b,
                  { align: 'left', color: 'text', style: ot.subtextContainer, weight: 'bold' },
                  et,
                ),
                C.a.createElement(A.b, { align: 'left', color: 'gray700' }, tt),
              ),
            ),
            C.a.createElement(
              G.a,
              { style: ot.contentWrapper },
              C.a.createElement(G.a, null, C.a.createElement(qe.a, { style: ot.icon })),
              C.a.createElement(
                G.a,
                { style: ot.subtextContainer },
                C.a.createElement(A.b, { color: 'text', weight: 'bold' }, nt),
                C.a.createElement(A.b, { color: 'gray700' }, at),
              ),
            ),
            C.a.createElement(
              G.a,
              { style: ot.contentWrapper },
              C.a.createElement(G.a, null, C.a.createElement(Je, { style: ot.icon })),
              C.a.createElement(
                G.a,
                { style: ot.subtextContainer },
                C.a.createElement(A.b, { color: 'text', weight: 'bold' }, rt),
                C.a.createElement(
                  A.b,
                  { color: 'gray700' },
                  C.a.createElement(
                    j.a.I18NFormatMessage,
                    { $i18n: 'c97dfde4' },
                    C.a.createElement(
                      A.b,
                      {
                        color: 'text',
                        link: 'https://help.twitter.com/using-twitter/twitter-circle',
                        style: ot.learnMore,
                        weight: 'bold',
                        withUnderline: !0,
                      },
                      j.a.b2f72d11,
                    ),
                  ),
                ),
              ),
            ),
          )
        return C.a.createElement(
          We.c,
          null,
          C.a.createElement(Ke.a, {
            actionLabel: $e,
            headline: Ze,
            onAction: i,
            onClose: o,
            subtext: l,
            withCloseButton: !0,
          }),
        )
      }
      var ot = B.a.create(function (e) {
          return {
            subtextContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
            icon: { color: e.colors.green500, paddingTop: e.spaces.space4, paddingRight: e.spaces.space24 },
            learnMore: { whiteSpace: 'nowrap' },
            contentWrapper: { display: 'flex', flexDirection: 'row', paddingTop: e.spaces.space32 },
          }
        }),
        lt = n('FGLp'),
        st = n('X00g'),
        ct = n('Sp5X'),
        dt = n('efqG'),
        ut = j.a.baffe39a,
        pt = j.a.e815fc33,
        mt = j.a.aa4209e8,
        ht = j.a.d0748dae,
        ft = { viewType: 'communities_controls' },
        gt = C.a.createElement(Oe.a, null)
      var vt = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        yt = De(function (e) {
          var t,
            n = C.a.useContext(de.a),
            a = C.a.useState(!1),
            i = k()(a, 2),
            o = i[0],
            l = i[1],
            s = C.a.useState(!1),
            c = k()(s, 2),
            d = c[0],
            u = c[1],
            p = e.addEducationFlag,
            m = e.addTrustedFriendsEducationFlag,
            h = e.audienceControlsValue,
            f = e.educationalVisibilityFlag,
            g = e.hasMemberships,
            v = e.isC9sParticipationEnabled,
            y = e.isSuperFollowsCreator,
            b = e.isTrustedFriendsEnabled,
            _ = e.onAudienceControlsValueChange,
            w = e.selectTrustedFriendsList,
            E = e.selectedCommunity,
            T = e.sliceModule,
            x = e.trustedFriendsEducationVisibilityFlag,
            S = e.updateSingleComposer,
            I = n.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            M = h.communityIdValue || !1,
            P = h.exclusivityControlValue || !1,
            L = h.trustedFriendsValue || !1,
            D = null == w ? void 0 : w.rest_id,
            O = b && x,
            A = (f && !E) || O,
            F = ut
          if ((M && null != E && E.name ? (F = E.name) : P ? (F = mt) : L && (F = ht), P))
            t = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
          else if (L) t = { color: 'green500', borderColor: 'green500', backgroundColor: 'transparent' }
          else if (M && null != E && E.theme && I) {
            var B = st.a.getCommunityUIColorName(E.theme)
            t = { color: B, borderColor: B, backgroundColor: 'transparent' }
          } else t = { type: 'brandOutlined' }
          Object(lt.a)(function () {
            var t = e.fetchOrCreateTrustedFriendsList
            b && (null == t || t())
          })
          var N = C.a.useCallback(
              function () {
                u(!1), p(), m()
              },
              [p, m],
            ),
            j = C.a.useCallback(
              function (e) {
                return O && !M
                  ? C.a.createElement(Ve, { history: ct.a, onAction: e, setShowTrustedFriendsModal: l })
                  : C.a.createElement(ce, {
                      audienceControlsValue: h,
                      dismiss: e,
                      hasMemberships: g,
                      history: ct.a,
                      isC9sParticipationEnabled: v,
                      isSuperFollowsCreator: y,
                      isTrustedFriendsEnabled: b,
                      onAudienceControlsValueChange: function (e) {
                        N(), _(e)
                      },
                      sliceModule: T,
                      trustedFriendsList: w,
                      updateSingleComposer: S,
                    })
              },
              [N, T, S, h, g, v, y, w, _, M, O, b],
            ),
            U = C.a.useCallback(
              function () {
                D &&
                  _({
                    _type: 'trusted_friends_tweet',
                    conversationControlsValue: 'trusted_friends_tweet',
                    trustedFriendsMemberCount: null == w ? void 0 : w.member_count,
                    trustedFriendsValue: { trusted_friends_list_id: D },
                  })
              },
              [_, D, w],
            )
          return y || g || (b && e.selectTrustedFriendsList)
            ? C.a.createElement(
                R.a,
                { behavioralEventContext: ft },
                C.a.createElement(
                  G.a,
                  { style: vt.container },
                  o
                    ? C.a.createElement(it, {
                        changeAudienceToTrustedFriends: U,
                        history: ct.a,
                        setShowModal: l,
                        trustedFriendsListId: D,
                      })
                    : null,
                  C.a.createElement(
                    dt.a,
                    {
                      onDismiss: N,
                      onOpen: function () {
                        u(!0)
                      },
                      renderContent: j,
                      visibilityBehavior: A && !o ? 'forceVisible' : 'interactive',
                    },
                    C.a.createElement(
                      X.a,
                      r()(
                        {
                          accessibilityExpanded: d,
                          accessibilityHasPopup: 'menu',
                          accessibilityLabel: pt,
                          accessibilityRole: 'button',
                          icon: gt,
                          size: 'xSmall',
                        },
                        t,
                      ),
                      F,
                    ),
                  ),
                ),
              )
            : null
        }),
        bt = n('PKbs'),
        _t = function (e, t) {
          var n = t.selectedCommunityId
          return n ? M.c.select(e, n) : void 0
        },
        wt = Object(P.a)()
          .propsFromState(function () {
            return { community: _t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ye.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: M.c.fetchOneIfNeeded,
            }
          }),
        Ct = n('YeIG'),
        Et = n('21zW'),
        Tt = j.a.gfca5254,
        xt = j.a.f510c8b2,
        St = C.a.createElement(A.b, { weight: 'bold' }, xt),
        It = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            badgeStyle: { marginRight: e.spaces.space12 },
            container: {
              display: 'inline-flex',
              flexDirection: 'row',
              paddingBottom: e.spaces.space12,
              alignItems: 'baseline',
            },
            rulesHeader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space12 },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: 'normal' },
          }
        }),
        kt = wt(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.selectedCommunityId,
            o = e.showMiddot
          C.a.useEffect(
            function () {
              i && Object(Ct.a)(t) && a(i).catch(n())
            },
            [t, i, n, a],
          )
          var l = C.a.useState(!1),
            s = k()(l, 2),
            c = s[0],
            d = s[1],
            u = C.a.useContext(de.a).featureSwitches,
            p = C.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return C.a.createElement(bt.b, {
                    badgeStyle: It.badgeStyle,
                    headerContainerStyle: It.rulesHeader,
                    heading: St,
                    ruleContainerStyle: It.ruleContainerStyle,
                    rules: n,
                    theme: a,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var m = t.theme,
              h = st.a.getCommunityUIColorName(m),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return C.a.createElement(
              G.a,
              { style: It.container },
              o ? C.a.createElement(Et.a, null) : null,
              C.a.createElement(
                dt.a,
                {
                  onDismiss: function () {
                    return d(!1)
                  },
                  onOpen: function () {
                    return d(!0)
                  },
                  renderContent: p,
                },
                C.a.createElement(
                  X.a,
                  r()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: It.button,
                    },
                    f,
                  ),
                  Tt,
                ),
              ),
            )
          }
          return null
        }),
        Rt = n('ii+P'),
        Mt = n('4zmP'),
        Pt = j.a.g46f363d,
        Lt = { viewType: 'rule_education' },
        Dt = function () {
          var e = Object(Rt.a)(ve.g),
            t = k()(e, 2),
            n = t[0],
            a = t[1]
          return (
            C.a.useEffect(
              function () {
                return a
              },
              [a],
            ),
            n
              ? C.a.createElement(
                  G.a,
                  { style: Ot.container },
                  C.a.createElement(Mt.a, { behavioralEventContext: Lt, onClose: a, text: Pt, withCloseButton: !0 }),
                )
              : null
          )
        },
        Ot = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        At = C.a.memo(Dt),
        Ft = n('H7Rt'),
        Bt = n('m3Bd'),
        Nt = n.n(Bt),
        jt = n('yZqq'),
        Ut = function (e, t) {
          return Object(ve.D)(e, ve.s)
        },
        Ht = Object(P.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Ut }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ve.z)(ve.s)
              },
            }
          }),
        zt = j.a.aa65a449,
        Vt = { viewType: 'persistent_conversation_controls_education' }
      var Wt = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        Kt = Ht(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = C.a.useContext(de.a).featureSwitches,
            i = C.a.useState(),
            o = k()(i, 2),
            l = o[0],
            s = o[1],
            c = function () {
              t()
            }
          return (
            C.a.useEffect(function () {
              return c
            }, []),
            C.a.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    a = e.width
                  s(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? C.a.createElement(
                  G.a,
                  { style: Wt.container },
                  C.a.createElement(Mt.a, {
                    arrowPositionStart: l,
                    behavioralEventContext: Vt,
                    onClose: c,
                    text: zt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        Gt = n('DlMI'),
        qt = n('gBde'),
        Xt = n('gUPl'),
        Qt = ['analytics'],
        Yt = C.a.createElement(Gt.a, null),
        Jt = C.a.createElement(qt.a, null),
        Zt = C.a.createElement(Xt.a, null),
        $t = C.a.createElement(Ge.a, null),
        en = C.a.createElement(qe.a, null),
        tn = 'conversation_control',
        nn = { viewType: tn },
        an = Object.freeze({
          all: { icon: Yt, label: j.a.i8ea6d4e },
          community: { icon: Zt, label: j.a.ec5a4a25 },
          by_invitation: { icon: Jt, label: j.a.b4543009 },
          community_members: { icon: $t, label: j.a.i13be5a0 },
          super_followers_exclusive: { icon: Yt, label: j.a.f8393bda },
          trusted_friends_tweet: { icon: en, label: j.a.c0857ccd },
        }),
        rn =
          (Object.freeze(['community', 'by_invitation']),
          Object(K.a)(function (e) {
            var t = e.analytics,
              n = Nt()(e, Qt),
              a = e.disabled,
              r = e.value,
              i = an[r],
              o = i.icon,
              l = i.label,
              s = C.a.useState(!1),
              c = k()(s, 2),
              d = c[0],
              u = c[1],
              p = C.a.useRef(null)
            Object(lt.a)(function () {
              r !== Ft.a.all && r !== Ft.a.community_members && u(!0)
            })
            var m = C.a.useCallback(
              function (e) {
                t.scribe({ element: tn, action: 'click' })
              },
              [t],
            )
            return C.a.createElement(
              R.a,
              { behavioralEventContext: nn },
              d ? C.a.createElement(Kt, { buttonRef: p.current }) : null,
              C.a.createElement(
                G.a,
                { style: on.controlsContainer },
                C.a.createElement(
                  jt.a,
                  n,
                  C.a.createElement(
                    X.a,
                    { disabled: a, icon: o, onPress: m, ref: p, size: 'xSmall', style: on.button, type: 'brandText' },
                    l,
                  ),
                ),
              ),
            )
          })),
        on = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        ln = n('krmn'),
        sn = n('cIoY'),
        cn = n('w3n3'),
        dn = n('MLl7'),
        un = n('1auM'),
        pn = n('07FG'),
        mn = n('Q8CU'),
        hn = n('QbaN'),
        fn = n('VPdC'),
        gn = n('WPfJ'),
        vn = B.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            avatarContainerExpanded: { paddingTop: e.spaces.space4 },
            avatarContainer: { justifyContent: 'center' },
            avatar: { width: '100%' },
            controlsContainer: {
              marginLeft: -e.spacesPx.space8,
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.spaces.space1,
              flexWrap: 'wrap',
              width: '100%',
            },
            mobileControlsLayout: { flexDirection: 'column' },
            controlsLayout: { flexDirection: 'row', alignItems: 'center' },
            rightColumn: {
              paddingTop: e.spaces.space4,
              justifyContent: 'center',
              position: 'static',
              transitionProperty: 'opacity, color',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
            },
            composeBoxContainer: {
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              flexShrink: 1,
              position: 'static',
              zIndex: 1,
            },
            inputArea: { zIndex: 1 },
            dragDrop: {
              borderColor: e.colors.transparent,
              borderRadius: e.borderRadii.small,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
            },
            textInputArea: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              zIndex: gn.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: gn.e },
            iconEmojiPicker: { zIndex: gn.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: gn.a,
            },
            firstToolBarButton: { marginLeft: '-'.concat(e.spaces.space8) },
            toolBarButton: { marginHorizontal: 0 },
            toolBarIconsContainer: { alignItems: 'center', flexDirection: 'row', marginTop: e.spaces.space12 },
            separator: {
              width: '1px',
              backgroundColor: e.colors.gray300,
              height: e.fontSizes.title2,
              marginRight: e.spaces.space12,
              marginLeft: 'calc('.concat(e.spaces.space12, ' - 2px)'),
            },
            conversationLine: {
              alignSelf: 'center',
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              flexShrink: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginTop: e.spaces.space4,
              marginBottom: e.spaces.space4,
            },
            conversationLineWithOverflow: { marginTop: '-'.concat(e.spaces.space4) },
            attachmentContainer: { marginTop: e.spaces.space4, marginBottom: e.spaces.space4 },
            mediaPreview: { marginTop: e.spaces.space4 },
            quoteTweet: { backgroundColor: e.colors.transparent, marginTop: e.spaces.space4, marginBottom: 0 },
            addImageTextContainer: {
              alignSelf: 'flex-start',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            },
            addImageActionIcon: { marginHorizontal: e.spaces.space4 },
            addImageTextPadding: { marginEnd: e.spaces.space48 },
            imageActions: { alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: e.spaces.space4 },
            blurStyle: { opacity: 0.5 },
            inputStyle: { width: '100%' },
            collapsedInputStyle: { flexGrow: 1, flexShrink: 1 },
            highlightedText: {
              borderRadius: e.borderRadii.large,
              paddingVertical: e.spaces.space12,
              paddingLeft: e.spaces.space12,
              marginTop: 0,
              marginBottom: 0,
            },
            highlightedTextInner: { marginHorizontal: e.spaces.space4 },
            taggedLocationButton: {
              paddingLeft: e.spacesPx.space8 + e.spacesPx.space2,
              paddingRight: e.spacesPx.space8 + e.spacesPx.space2,
              maxWidth: '100%',
            },
            taggedLocationContainer: {
              display: 'inline-flex',
              flexDirection: 'row',
              minWidth: 0,
              flexShrink: 1,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        yn = j.a.bdbcdd93,
        bn = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            i = n || t.length >= 4,
            o = t.length < 3
          return C.a.createElement(fn.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? yn : void 0,
            disabled: i,
            multiple: o,
            onChange: a,
            onPress: r,
            style: [vn.toolBarButton, vn.firstToolBarButton],
            type: 'brandText',
          })
        },
        _n = n('oQhu'),
        wn = n('p+r5'),
        Cn = n('GWvE'),
        En = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_setInputRef', function (t) {
                e._inputRef = t
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.defaultValue,
                    a = e.editable,
                    r = e.label,
                    i = e.name,
                    o = e.onBlur,
                    l = e.onChange
                  return C.a.createElement(
                    G.a,
                    { style: Tn.root },
                    C.a.createElement(wn.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: r,
                      maxLength: 25,
                      name: i,
                      onBlur: o,
                      onChange: l,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Tn.formTextInput,
                    }),
                  )
                },
              },
              {
                key: 'value',
                get: function () {
                  return this._inputRef && this._inputRef.getValue()
                },
              },
              {
                key: 'isValid',
                get: function () {
                  var e = this.props.optional
                  return (
                    (!this.value && e) ||
                    (this.value && !Object(Cn.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(En, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Tn = B.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1 },
            action: { width: e.spaces.space40 },
            addButton: { flexGrow: 1, minHeight: '100%', padding: 0 },
            formTextInput: {
              flexGrow: 1,
              flexShrink: 1,
              marginVertical: 0,
              paddingTop: 0,
              paddingHorizontal: 0,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        xn = En,
        Sn = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        In = n('6XNv'),
        kn = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            return d()(this, n), t.apply(this, arguments)
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.label,
                    a = e.last,
                    r = e.max,
                    i = e.min,
                    o = e.onChange,
                    l = e.testID,
                    s = !t || i === r,
                    c = e.value.toString(),
                    d = Object(Sn.a)(i, r + 1).map(function (e) {
                      return { label: ''.concat(j.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return C.a.createElement(In.a, {
                    disabled: s,
                    label: n,
                    onChange: o,
                    options: d,
                    style: [Rn.selector, !a && Rn.rightMargin],
                    testID: l,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      _()(kn, 'defaultProps', { last: !1 })
      var Rn = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Mn = kn,
        Pn = 'addPollChoice',
        Ln = 'selectPollDays',
        Dn = 'selectPollHours',
        On = 'selectPollMinutes',
        An = 'removePollButton',
        Fn = j.a.caf8edc4,
        Bn = j.a.g93586be,
        Nn = j.a.d073b644,
        jn = j.a.a2f0728e,
        Un = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              d()(this, n),
              (r = t.call(this, e, a)),
              _()(h()(r), '_handleDaysChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.hours,
                    i = a.minutes,
                    o = 0 === n && 0 === r && 0 === i ? 1 : 7 === n ? 0 : r,
                    l = { days: n, hours: o, minutes: 7 === n ? 0 : 0 === n && 0 === o && i < 5 ? 5 : i }
                  return t && t(l), { duration: l }
                })
              }),
              _()(h()(r), '_handleHoursChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.days,
                    i = a.minutes,
                    o = { days: r, hours: n, minutes: 0 === r && 0 === n && i < 5 ? 5 : i }
                  return t && t(o), { duration: o }
                })
              }),
              _()(h()(r), '_handleMinutesChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = { days: a.days, hours: a.hours, minutes: n }
                  return t && t(r), { duration: r }
                })
              }),
              (r.state = { duration: e.initialDuration }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    n = e.style
                  return C.a.createElement(
                    G.a,
                    { style: n },
                    C.a.createElement(A.b, { style: Hn.durationLabel }, t ? Fn : ''),
                    this._renderPicker(),
                  )
                },
              },
              {
                key: '_renderPicker',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.isActive,
                    a = this.state.duration,
                    r = a.days,
                    i = a.hours,
                    o = a.minutes
                  return C.a.createElement(
                    G.a,
                    { style: Hn.durationControls },
                    C.a.createElement(Mn, {
                      editable: t && n,
                      label: Bn,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Ln,
                      value: r,
                    }),
                    C.a.createElement(Mn, {
                      editable: t && n,
                      label: Nn,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Dn,
                      value: i,
                    }),
                    C.a.createElement(Mn, {
                      editable: t && n,
                      label: jn,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === i ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: On,
                      value: o,
                    }),
                  )
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this.state.duration
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(Un, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var Hn = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        zn = Un,
        Vn = n('iY63'),
        Wn = n('jtO7'),
        Kn = j.a.g589c2e1,
        Gn = j.a.a1e6c3a1,
        qn = j.a.a739e006,
        Xn = j.a.d89a5b92,
        Qn = j.a.c2a8118d,
        Yn = j.a.a8ede1de,
        Jn = j.a.af40a8ef,
        Zn = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            d()(this, n),
              (r = t.call(this, e, a)),
              _()(h()(r), '_setChoice1Ref', function (e) {
                r._choice1 = e
              }),
              _()(h()(r), '_setChoice2Ref', function (e) {
                r._choice2 = e
              }),
              _()(h()(r), '_setChoice3Ref', function (e) {
                r._choice3 = e
              }),
              _()(h()(r), '_setChoice4Ref', function (e) {
                r._choice4 = e
              }),
              _()(h()(r), '_setDurationPickerRef', function (e) {
                r._durationPicker = e
              }),
              _()(h()(r), '_handleValidation', function () {
                var e = r.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  a = e.onValid,
                  i = r.choices,
                  o = h()(r),
                  l = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                i && i.length >= 2 && l ? a() : n(), t && t({ choices: i, duration: r.duration })
              }),
              _()(h()(r), '_handleAdd', function () {
                r.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  r.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              _()(h()(r), '_handleDurationChange', function (e) {
                var t = r.props.onChange
                t && t({ choices: r.choices, duration: e })
              }),
              _()(h()(r), '_handleBlur', function () {
                var e = r.props.onBlur
                null == e || e()
              })
            var i = e.initialChoices,
              o = void 0 === i,
              l = (i || []).length,
              s = l > 2 ? l : 2
            return (r.state = { autoFocus: o, choiceCount: s }), r
          }
          return (
            p()(n, [
              {
                key: '_renderChoices',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialChoices,
                    a = void 0 === n ? [] : n,
                    r = e.isActive,
                    i = this.state,
                    o = i.autoFocus,
                    l = i.choiceCount,
                    s = C.a.createElement(
                      G.a,
                      { style: $n.rightColumn },
                      l < 4
                        ? C.a.createElement(X.a, {
                            accessibilityLabel: Yn,
                            disabled: !(t && r),
                            hoverLabel: { label: Jn },
                            icon: C.a.createElement(Vn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: $n.addButton,
                            testID: Pn,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return C.a.createElement(
                    G.a,
                    { style: $n.choicesAndAddButton },
                    C.a.createElement(
                      G.a,
                      { style: $n.choices },
                      C.a.createElement(xn, {
                        autoFocus: o,
                        defaultValue: a[0],
                        editable: t && r,
                        label: Kn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      C.a.createElement(xn, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: Gn,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      l >= 3
                        ? C.a.createElement(xn, {
                            autoFocus: o,
                            defaultValue: a[2],
                            editable: t && r,
                            label: qn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === l
                        ? C.a.createElement(xn, {
                            autoFocus: o,
                            defaultValue: a[3],
                            editable: t && r,
                            label: Xn,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    s,
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialDuration,
                    a = e.isActive,
                    r = e.onRemove
                  return C.a.createElement(
                    G.a,
                    { style: $n.root },
                    this._renderChoices(),
                    C.a.createElement(zn, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: $n.durationPicker,
                    }),
                    C.a.createElement(
                      G.a,
                      { style: $n.removePollButton },
                      C.a.createElement(Wn.a, { color: 'red500', label: Qn, onPress: r, testID: An }),
                    ),
                  )
                },
              },
              {
                key: 'choices',
                get: function () {
                  var e = this._choice1,
                    t = this._choice2,
                    n = this._choice3,
                    a = this._choice4
                  return [e && e.value, t && t.value, n && n.value, a && a.value].filter(Boolean)
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this._durationPicker ? this._durationPicker.duration : void 0
                },
              },
            ]),
            n
          )
        })(C.a.Component),
        $n = B.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.transparent,
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.xLarge,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              flexDirection: 'column',
              overflow: 'hidden',
              paddingTop: e.spaces.space12,
            },
            choicesAndAddButton: { paddingHorizontal: e.spaces.space12, flexDirection: 'row' },
            choices: { flexGrow: 1, flexShrink: 1 },
            removePollButton: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
            },
            rightColumn: { flexDirection: 'column-reverse' },
            addButton: { marginBottom: e.spaces.space24, marginLeft: e.spaces.space4 },
            durationPicker: {
              borderTopColor: e.colors.nestedBorderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomColor: e.colors.nestedBorderColor,
              borderBottomWidth: e.borderWidths.small,
              padding: e.spaces.space12,
            },
          }
        }),
        ea = Object(K.a)(Zn),
        ta = n('+d3d'),
        na = ['onChange'],
        aa = function (e) {
          var t = e.composerIndex,
            n = e.editable,
            a = e.initialChoices,
            i = e.initialDuration,
            o = e.isActive,
            l = e.isPollValid,
            s = e.updateComposer,
            c = Object(K.b)(),
            d = C.a.useMemo(
              function () {
                return {
                  onChange: function (e) {
                    s({ pollChoices: null == e ? void 0 : e.choices, pollDuration: null == e ? void 0 : e.duration }, t)
                  },
                  onValid: function () {
                    !l && s({ pollValid: !0 }, t)
                  },
                  onInvalid: function () {
                    l && s({ pollValid: !1 }, t)
                  },
                  onRemove: function () {
                    c.scribe({ element: 'remove_poll', action: 'click' }), s({ pollActive: !1 }, t)
                  },
                }
              },
              [c, l, s, t],
            ),
            u = d.onChange,
            p = Nt()(d, na),
            m = C.a.useMemo(
              function () {
                return Object(ta.a)(
                  function (e) {
                    var t = e.choices,
                      n = e.duration
                    u({ choices: t, duration: n })
                  },
                  200,
                  { leading: !0, trailing: !0 },
                )
              },
              [u],
            ),
            h = C.a.useCallback(
              function () {
                m.flush()
              },
              [m],
            )
          return C.a.createElement(
            ea,
            r()({ editable: n, initialChoices: a, initialDuration: i, isActive: o, onBlur: h, onChange: m }, p),
          )
        },
        ra = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        ia = j.a.i859676b,
        oa = C.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          C.a.createElement(
            A.b,
            { link: '/settings/audience_and_tagging', style: ra.link, withInteractiveStyling: !0, withUnderline: !0 },
            j.a.c9a48d3f,
          ),
        )
      function la() {
        return C.a.createElement(G.a, { style: ra.container }, C.a.createElement(Mt.a, { headline: ia, text: oa }))
      }
      var sa = n('b5s6'),
        ca = n('rcen'),
        da = n('zmS9'),
        ua = 'addButton',
        pa = 'addSubtitlesLabel',
        ma = 'altTextLabel',
        ha = 'tagPeopleLabel',
        fa = 'attachments',
        ga = 'createPollButton',
        va = 'geoButton',
        ya = 'gifSearchButton',
        ba = 'scheduleOption',
        _a = 'taggedUsersLabel',
        wa = 'tweetTextarea_',
        Ca = 'toolBar',
        Ea = 'scheduledTweetIndicator',
        Ta = n('xM7j'),
        xa = n('6OUF'),
        Sa = n('tZIO'),
        Ia = n('5mJL'),
        ka = n('DNho'),
        Ra = n('jhWN'),
        Ma = n('rFBM'),
        Pa = n('zfvc'),
        La = n('Ujvi'),
        Da = n('yTN1'),
        Oa = n('gpVt'),
        Aa = n('hOZg'),
        Fa = n('ll3R'),
        Ba = n('J0mu'),
        Na = n('EfHu'),
        ja = n('KrGU'),
        Ua = n('boUI'),
        Ha = n('6ZHn'),
        za = n('/WPq'),
        Va = n('wpLu'),
        Wa = n('pHub'),
        Ka = n('8A5z'),
        Ga = n('G31s'),
        qa = n('S1qy'),
        Xa = n.n(qa),
        Qa = n('cjAp'),
        Ya = n.n(Qa),
        Ja = j.a.f0afcc0e,
        Za = j.a.ha5e2e79,
        $a = j.a.a3de3b68,
        er = j.a.cc2b28fc,
        tr = j.a.g45af04e,
        nr = j.a.j1d5791c,
        ar = j.a.ee9c4013,
        rr = j.a.af40a8ef,
        ir = j.a.e68b09b4,
        or = j.a.ec10ee02,
        lr = j.a.h735a98d,
        sr = j.a.c4ccfbe2,
        cr = j.a.j499fbcb,
        dr = j.a.b7d8e3f0,
        ur = j.a.d1175c78,
        pr = j.a.bf4e9d79,
        mr = j.a.e0342f98,
        hr = j.a.e349147b,
        fr = j.a.e3a24e4b,
        gr = j.a.fbd24526,
        vr = j.a.de4669e2,
        yr = j.a.d2c7a41c,
        br = j.a.f7364fa1,
        _r = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        wr = j.a.ia24dc8c,
        Cr = C.a.createElement(Aa.a, null),
        Er = C.a.createElement(Vn.a, null),
        Tr = C.a.createElement(Fa.a, null),
        xr = C.a.createElement(Ba.a, null),
        Sr = { viewType: 'schedule_tweet' },
        Ir = { viewType: 'add_poll' },
        kr = { viewType: 'add_composer' },
        Rr = { viewType: 'tag_location' },
        Mr = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            d()(this, n),
              (i = t.call(this, e, a)),
              _()(h()(i), '_handleConversationControlsValueChange', function (e) {
                i._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              _()(h()(i), '_handleAudienceControlsValueChange', function (e) {
                i.props.updateAudienceControlsValue(e)
              }),
              _()(
                h()(i),
                '_triggerConversationControlsImpression',
                Object(_n.a)(function () {
                  return i.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              _()(h()(i), '_shouldRenderControls', function (e, t) {
                var n = i.state.isFocused,
                  a = i.props,
                  r = a.audienceControlsValue,
                  o = a.isActive,
                  l = a.isInline,
                  s = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== Ft.a.community_members &&
                      r.conversationControlsValue !== Ft.a.super_followers_exclusive &&
                      r.conversationControlsValue !== Ft.a.trusted_friends_tweet) ||
                    !s
                  ) ||
                  (o && !s && (!l || n || e))
                )
              }),
              _()(h()(i), '_renderConversationControls', function (e) {
                var t = i.state.isFocused,
                  n = i.props,
                  a = n.audienceControlsValue,
                  r = n.isInline
                if (
                  (n.isReply || (!t && r) || i._triggerConversationControlsImpression(),
                  !i._conversationControlsCreationEnabled)
                )
                  return null
                var o = a.conversationControlsValue,
                  l = i._shouldRenderControls(e, 'conversation'),
                  s =
                    o === Ft.a.community_members ||
                    o === Ft.a.super_followers_exclusive ||
                    o === Ft.a.trusted_friends_tweet ||
                    i._isScheduled()
                return l
                  ? C.a.createElement(rn, { disabled: s, onChange: i._handleConversationControlsValueChange, value: o })
                  : null
              }),
              _()(h()(i), '_renderTaggedLocation', function (e) {
                return C.a.createElement(
                  G.a,
                  { style: vn.taggedLocationContainer },
                  C.a.createElement(
                    X.a,
                    {
                      icon: C.a.createElement(Na.a, null),
                      onPress: i._handleGeoButtonClick,
                      size: 'xSmall',
                      style: vn.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              _()(h()(i), '_renderMainContent', function () {
                var e = i.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  r = e.isExpanded,
                  o = e.isInline,
                  l = e.isInlineReply,
                  s = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = n.cardUrl,
                  u = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(Oa.b)(h) || (d && !Object(pn.a)(d) && [d]),
                  g = !!u.length || p || !!m,
                  v = i.props.typeaheadWrapper,
                  y = !i._isEmpty()
                return C.a.createElement(
                  G.a,
                  { style: vn.textInputArea },
                  C.a.createElement(
                    G.a,
                    { style: r ? vn.inputStyle : vn.collapsedInputStyle },
                    i._renderAudienceControls(y),
                    C.a.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: l,
                        onTextUpdated: c ? i._handleRichTextChange : i._handlePlainTextChange,
                        onTypeaheadStateChange: s,
                      },
                      i._renderFieldTextInput,
                    ),
                    f && !g
                      ? C.a.createElement(Oa.a, { index: a, isCardPreviewTombstoned: Object(pn.a)(d), urls: f })
                      : null,
                  ),
                  r ? null : t,
                )
              }),
              _()(h()(i), '_renderFieldTextInput', function (e) {
                var t = i.props,
                  n = t.autoFocus,
                  a = t.data,
                  o = t.editable,
                  l = t.index,
                  s = t.isActive,
                  c = t.isExpanded,
                  d = t.isInline,
                  u = t.isInlineReply,
                  p = t.isLast,
                  m = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  v = i.state.isFocused,
                  y = a.text,
                  b = 0 === l && p,
                  _ = !!g,
                  w = g || {},
                  E = w.dismissComposerCommandName,
                  T = w.element,
                  x = w.sendTweetCommandName,
                  S = u && !g && !c,
                  I = g
                    ? {
                        onChange: i._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: E,
                          editorState: i.state.editorState,
                          element: T,
                          sendTweetCommandName: x,
                        },
                      }
                    : { onChange: i._getHandlePlainTextChange(e) }
                return C.a.createElement(
                  xa.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: $a,
                      autoFocus: n || (s && !d),
                      closeButton:
                        s && (i._deleteNonemptyTweetstormComposerEnabled || i._isEmpty()) && !b
                          ? i._renderCloseButton()
                          : void 0,
                      contentBelow: i._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [vn.textInputStyle, S && vn.textInputMobileCollapsed],
                      keyCommandHandlers: m,
                      maxNumberOfLines: _ ? 30 : 10,
                      multiline: !0,
                      numberOfLines: i._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: i._handleFilesAdded,
                      placeholder: i._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: i._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(wa).concat(l),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              _()(
                h()(i),
                '_getHandleRichTextChange',
                Object(_n.a)(function (e) {
                  return function (t) {
                    e(t), i._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                h()(i),
                '_getHandlePlainTextChange',
                Object(_n.a)(function (e) {
                  return function (t) {
                    e(t), i._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(h()(i), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = i.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? C.a.createElement(la, null) : null
              }),
              _()(h()(i), '_renderAudienceControls', function (e) {
                var t = i.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  o = i.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  l = i.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  s = i.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return i._shouldRenderControls(e, 'audience') && 0 === a && (o || l || s)
                  ? C.a.createElement(yt, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: r && l,
                      isTrustedFriendsEnabled: s,
                      onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(h()(i), '_renderCommunitiesRulesEducation', function () {
                return i.shouldRenderCommunitiesRules ? C.a.createElement(At, null) : null
              }),
              _()(h()(i), '_renderCommunitiesRules', function (e) {
                var t = i.props.audienceControlsValue.communityIdValue || void 0
                return i.shouldRenderCommunitiesRules && t
                  ? C.a.createElement(kt, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              _()(h()(i), '_calcNumberOfLines', function () {
                var e = i.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  o = t.media,
                  l = t.pollActive,
                  s = t.quotedStatus,
                  c = !!o.length || !!l || !!s
                return (r && (a || c)) || !n ? 1 : 4
              }),
              _()(h()(i), '_renderScheduledTweetLegend', function () {
                var e = i.props.scheduledFor
                return C.a.createElement(da.a, {
                  onPress: i._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Ea,
                })
              }),
              _()(h()(i), '_handlePressScheduledTweetLegend', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              _()(h()(i), '_renderEmojiPicker', function () {
                return C.a.createElement(ln.a, {
                  onEmojiSelect: i._handleInsertEmoji,
                  size: 'medium',
                  style: i._getEmojiPickerButtonStyles(),
                  textInputRef: i._textInputRef || void 0,
                })
              }),
              _()(
                h()(i),
                '_getEmojiPickerButtonStyles',
                Object(_n.a)(function () {
                  return [vn.iconEmojiPicker, vn.toolBarButton]
                }),
              ),
              _()(h()(i), '_isSchedulingDisabled', function () {
                var e = i.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  o = n.pollActive,
                  l = n.quotedStatus,
                  s = n.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  p = t.conversationControlsValue !== Ft.a.all
                return Boolean(o || !u || (l && '' === s && !a.length) || p || r.length > 0)
              }),
              _()(h()(i), '_renderSchedulingButton', function () {
                return C.a.createElement(X.a, {
                  accessibilityLabel: Za,
                  behavioralEventContext: Sr,
                  disabled: i._isSchedulingDisabled(),
                  hoverLabel: { label: lr },
                  icon: xr,
                  onClick: i._handleClickScheduler,
                  size: 'medium',
                  style: vn.toolBarButton,
                  testID: ba,
                  type: 'brandText',
                })
              }),
              _()(h()(i), '_handleClickScheduler', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              _()(h()(i), '_renderCloseButton', function () {
                var e = i.props.onRemoveComposer
                return C.a.createElement(X.a, {
                  accessibilityLabel: ar,
                  hoverLabel: { label: ir },
                  icon: Cr,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              _()(h()(i), '_renderTweetAttachment', function () {
                var e = i.props,
                  t = e.data,
                  n = e.editable,
                  a = e.index,
                  r = e.isActive,
                  o = e.updateSingleComposer,
                  l = t.media,
                  s = t.pollActive,
                  c = t.pollChoices,
                  d = t.pollDuration,
                  u = t.quotedStatus
                if (0 === l.length && !s && !u) return null
                var p = i.hasAttachedVideo && (i._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return C.a.createElement(
                  G.a,
                  { onClick: i._handleFocus, style: [vn.attachmentContainer, vn.tweetAttachmentArea], testID: fa },
                  l.length > 0
                    ? C.a.createElement(Ga.a, {
                        editable: n,
                        isActive: r,
                        media: l,
                        onClickMedia: i.hasAttachedImage ? i._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: i.hasAttachedImage
                          ? i._handleClickMediaDetail('crop')
                          : p
                          ? i._handleClickMediaDetail(p)
                          : void 0,
                        onEditSensitiveWarning:
                          i.hasAttachedImage || i.hasAttachedVideo
                            ? i._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: i._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: i._handleSetMediaPreviewRef,
                        style: vn.mediaPreview,
                      })
                    : null,
                  r ? i._renderMediaActions() : null,
                  s
                    ? C.a.createElement(aa, {
                        composerIndex: a,
                        editable: n,
                        initialChoices: c,
                        initialDuration: d,
                        isActive: r,
                        isPollValid: t.pollValid,
                        updateComposer: o,
                      })
                    : null,
                  u ? i._renderQuoteTweet(u) : null,
                )
              }),
              _()(h()(i), '_renderQuoteTweet', function (e) {
                var t = i.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? C.a.createElement(
                      Ta.a,
                      null,
                      C.a.createElement(ca.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : C.a.createElement(sa.a, {
                      isCondensed: t.length > 0,
                      style: vn.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              _()(h()(i), '_renderToolbar', function (e) {
                var t = i.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  r = t.hidePoll,
                  o = t.hideScheduling,
                  l = t.isInlineReply,
                  s = t.isReply,
                  c = t.isSelfThreadReply,
                  d = t.richTextInputContext,
                  u = t.setActiveParentKey,
                  p = !!d,
                  m = !l && !r,
                  h = !l && !o,
                  f = i.context.featureSwitches.isTrue('responsive_web_reply_storm_enabled'),
                  g = e && (!s || c || f)
                return C.a.createElement(
                  G.a,
                  { style: vn.toolBar, testID: Ca },
                  C.a.createElement(
                    G.a,
                    { style: vn.toolBarIconsContainer },
                    C.a.createElement(bn, {
                      media: a,
                      mediaAttachDisabled: i.mediaAttachDisabled,
                      onFilesAdded: i._handleFilesAdded,
                      setActiveParentKey: u,
                    }),
                    i._renderGifButton(),
                    m ? i._renderPollButton() : null,
                    p ? i._renderEmojiPicker() : null,
                    h ? i._renderSchedulingButton() : null,
                    i._renderGeoButton(),
                  ),
                  C.a.createElement(
                    G.a,
                    { style: vn.toolBarIconsContainer },
                    e ? i._renderCountdownCircle() : null,
                    g &&
                      C.a.createElement(
                        C.a.Fragment,
                        null,
                        C.a.createElement(G.a, { style: vn.separator }),
                        i._renderAddComposerButton(),
                      ),
                    n,
                  ),
                )
              }),
              _()(h()(i), '_addOverflowStyle', function (e) {
                var t = i.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    a = n.length,
                    r = i._getParsedTweet(n).validRangeEnd,
                    o = r + 1 < a
                  if (i.state.hasOverflowStyle || o) {
                    var l = o ? r + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, l, i.state.hasOverflowStyle),
                      hasOverflowStyle: o,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: o }
                }
              }),
              _()(h()(i), '_handleRichTextChange', function (e) {
                var t = i.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  i.setState(i._addOverflowStyle(a))
                }
                i._handleTextValueChange(n)
              }),
              _()(h()(i), '_handlePlainTextChange', function (e) {
                var t = Sa.a.replaceCarriageReturns(e.target.value)
                i._handleTextValueChange(t)
              }),
              _()(h()(i), '_handleTextValueChange', function (e) {
                var t = i.props,
                  n = t.data,
                  a = n.key,
                  r = n.text,
                  o = t.onTextChange
                r !== e && o(e, a)
              }),
              _()(h()(i), '_handleClickAltTextShortcut', function () {
                i.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              _()(h()(i), '_handleClickSubtitlesShortcut', function () {
                i.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              _()(h()(i), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var n = i.props,
                      a = n.analytics,
                      r = n.history
                    a.scribe({ element: 'media_detail_button', action: 'click' }),
                      (i.hasAttachedImage || i.hasAttachedVideo) &&
                        r.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              _()(h()(i), '_handleFilesAdded', function (e) {
                var t = i.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  r = t.onFilesAdded
                a ? n({ text: er }) : r(e)
              }),
              _()(h()(i), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  i.props.onRemoveMedia(i.props.index, e)
                }
              }),
              _()(h()(i), '_handleInsertEmoji', function (e) {
                var t = i.state.editorState,
                  n = i.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  i._handleRichTextChange(a)
                }
              }),
              _()(h()(i), '_validateMedia', function (e) {
                var t = i.props.data.media
                return S.c(t.concat(e))
              }),
              _()(h()(i), '_handlePollAdd', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              _()(h()(i), '_handleGeoButtonClick', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              _()(h()(i), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  i.focus()
              }),
              _()(h()(i), '_handleFocus', function () {
                var e = i.props,
                  t = e.index,
                  n = e.isActive,
                  a = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  n ||
                    (window.requestAnimationFrame(function () {
                      i._mediaPreviewRef && i._mediaPreviewRef.playVideo()
                    }),
                    a(t))
              }),
              _()(h()(i), '_handleEditorFocus', function () {
                return i.setState({ isFocused: !0 })
              }),
              _()(h()(i), '_formatCountdownNumber', function (e) {
                return wr(Math.ceil(e / i._userLanguageWeight))
              }),
              _()(h()(i), '_getPlaceHolderText', function () {
                var e = i.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  o = e.isReply,
                  l = e.isSelfThreadReply
                return a
                  ? vr
                  : n
                  ? br
                  : i.isReplyOrReplyThread && 0 === r
                  ? yr
                  : o && !l && r > 0
                  ? gr
                  : l || r > 0
                  ? fr
                  : hr
              }),
              _()(h()(i), '_getNumberOfAltTextEntries', function () {
                return i.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              _()(
                h()(i),
                '_getParsedTweet',
                Object(_n.a)(function (e) {
                  var t = Ya.a[i.props.twitterTextConfigurationVersion]
                  return Xa()(e, t)
                }),
              ),
              _()(h()(i), '_isEmpty', function () {
                var e = i.props.data
                return Object(mn.c)(e)
              }),
              _()(h()(i), '_isScheduled', function () {
                var e = i.props.data.scheduledFor
                return Object(hn.h)(e)
              }),
              _()(h()(i), '_autotagLocationIfNeeded', function () {
                var e = i.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  r = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && r({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              _()(h()(i), '_handleSetMediaPreviewRef', function (e) {
                i._mediaPreviewRef = e
              }),
              _()(h()(i), '_setTextInputRef', function (e) {
                i._textInputRef = e
              })
            var o = e.data.text,
              l = e.richTextInputContext,
              s = e.userLanguage,
              c = (l || {}).initEditorState
            return (
              (i._conversationControlsCreationEnabled =
                !0 ===
                i.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (i._deleteNonemptyTweetstormComposerEnabled = i.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (i._userLanguageWeight = s && _r.indexOf(s) > -1 ? 2 : 1),
              i._autotagLocationIfNeeded(),
              (i.state = { editorState: c ? c(o) : null, hasOverflowStyle: !1, isFocused: !1 }),
              i
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof un.a) && e.mediaFile.isVideo
                    })) &&
                    e.isActive &&
                    !this.props.isActive &&
                    this._mediaPreviewRef &&
                    this._mediaPreviewRef.pauseVideo()
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._textInputRef && this._textInputRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.data.taggedLocation,
                    a = t.isActive,
                    r = t.isExpanded,
                    i = t.isInline,
                    o = t.isLast,
                    l = t.loggedInUser,
                    s = t.windowWidth,
                    c = t.withAvatar,
                    d = !this._isEmpty(),
                    u = this._shouldRenderControls(d),
                    p = s < B.a.theme.breakpoints.small
                  return C.a.createElement(
                    G.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [vn.root, !a && vn.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    C.a.createElement(
                      Ia.a,
                      {
                        avatarCell: C.a.createElement(
                          C.a.Fragment,
                          null,
                          c
                            ? C.a.createElement(ka.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return C.a.createElement(Ra.a, {
                                  accessibilityLabel: l ? l.name : void 0,
                                  screenName: l ? l.screen_name : void 0,
                                  size: t,
                                  style: vn.avatar,
                                  uri: l ? l.profile_image_url_https : void 0,
                                  withLink: i,
                                })
                              })
                            : null,
                          o
                            ? null
                            : C.a.createElement(G.a, {
                                style: [vn.conversationLine, !c && vn.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? vn.avatarContainerExpanded : vn.avatarContainer,
                        cellStyle: vn.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      C.a.createElement(
                        G.a,
                        { onFocus: this._handleEditorFocus, style: vn.inputArea },
                        C.a.createElement(
                          Ma.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: vn.dragDrop,
                          },
                          function (t) {
                            return C.a.createElement(
                              C.a.Fragment,
                              null,
                              C.a.createElement(G.a, { style: vn.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      C.a.createElement(
                        G.a,
                        { style: [(u || n) && vn.controlsContainer, p ? vn.mobileControlsLayout : vn.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      C.a.createElement(Pa.b, { show: a && r }, this._renderToolbar(d)),
                    ),
                  )
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = e.history,
                    i = e.loggedInUser,
                    o = e.setActiveParentKey,
                    l = a || n.length || !i
                  return C.a.createElement(cn.a, {
                    enabled: !l,
                    gifSearchKeySource: dn.a.Composition,
                    history: r,
                    onPress: o,
                    testID: ya,
                  })
                },
              },
              {
                key: '_renderPollButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = t.quotedStatus,
                    i = e.loggedInUser,
                    o = this._isScheduled(),
                    l = !(!(a || n.length || r || o) && i)
                  return C.a.createElement(X.a, {
                    accessibilityLabel: Ja,
                    behavioralEventContext: Ir,
                    disabled: l,
                    hoverLabel: { label: or },
                    icon: Tr,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: vn.toolBarButton,
                    testID: ga,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGeoButton',
                value: function () {
                  var e = this.props,
                    t = e.data.taggedLocation,
                    n = e.geoEnabled,
                    a = e.loggedInUser,
                    r = !(n && a),
                    i = t ? C.a.createElement(Na.a, null) : C.a.createElement(ja.a, null)
                  return C.a.createElement(X.a, {
                    accessibilityLabel: sr,
                    behavioralEventContext: Rr,
                    disabled: r,
                    hoverLabel: { label: sr },
                    icon: i,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: vn.toolBarButton,
                    testID: va,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderMediaActions',
                value: function () {
                  var e = this.props.data,
                    t = e.gifMetadata,
                    n = e.media,
                    a = 0 !== e.mediaTags.length,
                    r =
                      n.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || r)) return null
                  var i = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return C.a.createElement(
                    G.a,
                    { style: vn.imageActions },
                    t && t.url && t.provider
                      ? C.a.createElement(
                          G.a,
                          { style: vn.addImageTextPadding },
                          C.a.createElement(sn.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !i) || this._isScheduled()
                      ? null
                      : C.a.createElement(
                          A.b,
                          {
                            accessibilityLabel: ur,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [vn.addImageTextContainer, vn.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? C.a.createElement(
                          A.b,
                          {
                            accessibilityLabel: cr({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: vn.addImageTextContainer,
                          },
                          this._renderAltTextLabel(),
                        )
                      : null,
                    this.hasAttachedVideo ? this._renderSubtitlesLabel() : null,
                  )
                },
              },
              {
                key: '_renderTagPeopleLabel',
                value: function () {
                  return C.a.createElement(
                    A.b,
                    { color: 'gray700', size: 'subtext2', testID: ha },
                    C.a.createElement(Ua.a, { style: vn.addImageActionIcon }),
                    ur,
                  )
                },
              },
              {
                key: '_renderTaggedUsers',
                value: function () {
                  var e = this.props,
                    t = e.data.mediaTags,
                    n = e.loggedInUser,
                    a = t.map(function (e) {
                      return {
                        name: e.data.name,
                        screen_name: e.data.screen_name,
                        type: e.type,
                        user_id: e.data.id_str,
                      }
                    })
                  return C.a.createElement(
                    A.b,
                    { color: 'gray700', size: 'subtext2', testID: _a },
                    C.a.createElement(Ha.a, { style: vn.addImageActionIcon }),
                    C.a.createElement(La.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
                  )
                },
              },
              {
                key: '_renderAltTextLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = e[0].mediaMetadata
                  return this.hasAttachedAltText
                    ? e.length > 1
                      ? C.a.createElement(
                          A.b,
                          { color: 'gray700', size: 'subtext2', testID: ma },
                          C.a.createElement(Va.a, { style: vn.addImageActionIcon }),
                          dr({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : C.a.createElement(
                          A.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: ma },
                          C.a.createElement(Va.a, { style: vn.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : C.a.createElement(
                        A.b,
                        { color: 'gray700', size: 'subtext2', testID: ma },
                        C.a.createElement(za.a, { style: vn.addImageActionIcon }),
                        cr({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Wa.a : Ka.a
                  return C.a.createElement(
                    A.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: vn.addImageTextContainer,
                      testID: pa,
                    },
                    C.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? mr : void 0,
                      style: vn.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : pr,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = Ya.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return C.a.createElement(Da.a, {
                    count: r,
                    formatNumber: this._formatCountdownNumber,
                    maxCount: a.maxWeightedTweetLength,
                    warningCount: 260,
                  })
                },
              },
              {
                key: '_renderAddComposerButton',
                value: function () {
                  var e = this.props,
                    t = e.addComposerLink,
                    n = e.disableAddTweet,
                    a = e.isCommunityTweetFromProtectedUser,
                    r = e.loggedInUser,
                    i = e.onAddComposer,
                    o = this._isEmpty(),
                    l = this._isScheduled(),
                    s = n || o || l || !r || a
                  return C.a.createElement(X.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? nr : tr,
                    behavioralEventContext: kr,
                    disabled: s,
                    hoverLabel: { label: rr },
                    icon: Er,
                    link: s ? void 0 : t,
                    onPress: i,
                    size: 'xSmall',
                    testID: ua,
                    type: 'brandOutlined',
                  })
                },
              },
              {
                key: 'mediaAttachDisabled',
                get: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = e.loggedInUser,
                    i = n.length,
                    o = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    l = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof un.a) && e.mediaFile.isVideo
                    })
                  return 4 === i || o || l || a || this.hasExternalMedia || !r
                },
              },
              {
                key: 'hasAttachedImage',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isImage
                  })
                },
              },
              {
                key: 'hasAttachedVideo',
                get: function () {
                  var e = this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isVideo
                  })
                  return (
                    e &&
                      (this._videoTrimmerEnabled = this.context.featureSwitches.isTrue(
                        'responsive_web_video_trimmer_enabled',
                      )),
                    e
                  )
                },
              },
              {
                key: 'attachedSubtitles',
                get: function () {
                  var e,
                    t = this.props.data.media
                  if (this.hasAttachedVideo) {
                    var n = t.find(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof un.a) && e.mediaFile.isVideo
                    })
                    return null == n || null === (e = n.mediaMetadata) || void 0 === e ? void 0 : e.subtitles
                  }
                },
              },
              {
                key: 'hasAttachedAltText',
                get: function () {
                  return this._getNumberOfAltTextEntries() > 0
                },
              },
              {
                key: 'hasExternalMedia',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    return !!e.externalMediaDetails
                  })
                },
              },
              {
                key: 'shouldRenderCommunitiesRules',
                get: function () {
                  var e = this.props.audienceControlsValue,
                    t = this.context.featureSwitches.isTrue('c9s_enabled'),
                    n = e.communityIdValue || void 0,
                    a = t && n,
                    r = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(r && a)
                },
              },
              {
                key: 'isReplyOrReplyThread',
                get: function () {
                  var e = this.props,
                    t = e.isReply,
                    n = e.isSelfThreadReply
                  return t && !n
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(Mr, 'contextType', de.a),
        _()(Mr, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Pr = Object(K.a)(Mr),
        Lr = C.a.createElement(A.b, { weight: 'bold' }),
        Dr = C.a.createElement(A.b, { color: 'link' }),
        Or = function (e) {
          return '@'.concat(e)
        },
        Ar = n('SrIh'),
        Fr = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Br = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = {
              replyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  C.a.cloneElement(Dr, null, j.a.b50e199a({ userName: Or(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  C.a.cloneElement(Dr, null, j.a.f2e4dd37({ replyUserName: Or(t), otherUserName: Or(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  C.a.cloneElement(
                    Dr,
                    null,
                    j.a.eccfddc3({ userOneName: Or(t), userTwoName: Or(a), userThreeName: Or(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  C.a.cloneElement(Dr, null, j.a.h758cd22({ userOneName: Or(n), userTwoName: Or(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  C.a.cloneElement(Dr, null, j.a.e9f8a0eb({ userName: Or(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  C.a.cloneElement(Dr, null, j.a.df7e9fbc({ replyUserName: Or(n), otherUserName: Or(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  C.a.cloneElement(
                    Dr,
                    null,
                    j.a.b45fa505({ userOneName: Or(n), userTwoName: Or(r), userThreeName: Or(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  C.a.cloneElement(Dr, null, j.a.a4383815({ userOneName: Or(a), userTwoName: Or(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  C.a.cloneElement(Dr, null, j.a.ff792e35({ userName: Or(t) })),
                  C.a.cloneElement(Lr, null, j.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  C.a.cloneElement(Dr, null, j.a.g7d5e985({ replyUserName: Or(t), otherUserName: Or(n) })),
                  C.a.cloneElement(Lr, null, j.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  C.a.cloneElement(
                    Dr,
                    null,
                    j.a.fe5a61e9({ userOneName: Or(t), userTwoName: Or(a), userThreeName: Or(n) }),
                  ),
                  C.a.cloneElement(Lr, null, j.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  C.a.cloneElement(Dr, null, j.a.bc9dd514({ userOneName: Or(n), userTwoName: Or(a), othersCount: t })),
                  C.a.cloneElement(Lr, null, j.a.de5071ba),
                )
              },
              trustedFriendsReplyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'db690c7e', userName: Or(t) },
                  C.a.cloneElement(Dr, null, j.a.b9f0a3f7({ userName: Or(t) })),
                )
              },
              trustedFriendsReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'gb7cb27c' },
                  C.a.cloneElement(Dr, null, j.a.ca43a0c6({ replyUserName: Or(t), otherUserName: Or(n) })),
                  C.a.cloneElement(Dr, null, j.a.g2257dd2({ replyUserName: Or(t) })),
                )
              },
              trustedFriendsReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'e9288772' },
                  C.a.cloneElement(
                    Dr,
                    null,
                    j.a.d339d100({ userOneName: Or(t), userTwoName: Or(a), userThreeName: Or(n) }),
                  ),
                  C.a.cloneElement(Dr, null, j.a.aeaba5d4({ userOneName: Or(t) })),
                )
              },
              trustedFriendsReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'h0589b50' },
                  C.a.cloneElement(Dr, null, j.a.f48a8367({ userOneName: Or(n), userTwoName: Or(a), othersCount: t })),
                  C.a.cloneElement(Dr, null, j.a.e9861a9c({ userOneName: Or(n) })),
                )
              },
            },
            o = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            l = a.retweeted_status || a,
            s = l.exclusivity_info,
            c = l.trusted_friends_info,
            d = l.user,
            u = o.filter(function (e) {
              return e.id_str !== d.id_str
            }),
            p = k()(u, 2),
            m = p[0],
            h = p[1],
            f = [d, m, h].map(Fr),
            g = k()(f, 3),
            v = g[0],
            y = g[1],
            b = g[2],
            _ = o.length - 2
          switch (o.length) {
            case 0:
              return Object(Ar.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? i.communityReplyToOne({ communityName: t, userName: v })
                : s
                ? i.exclusiveReplyToOne({ userName: v })
                : c
                ? i.trustedFriendsReplyToOne({ userName: v })
                : i.replyToOne({ userName: v })
            case 2:
              return t
                ? i.communityReplyToTwo({ communityName: t, userOneName: v, userTwoName: y })
                : s
                ? i.exclusiveReplyToTwo({ userOneName: v, userTwoName: y })
                : c
                ? i.trustedFriendsReplyToTwo({ userOneName: v, userTwoName: y })
                : i.replyToTwo({ userOneName: v, userTwoName: y })
            case 3:
              return t
                ? i.communityReplyToThree({ communityName: t, userOneName: v, userTwoName: y, userThreeName: b })
                : s
                ? i.exclusiveReplyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
                : c
                ? i.trustedFriendsReplyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
                : i.replyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
            default:
              return t
                ? i.communityReplyToMany({ communityName: t, userOneName: v, userTwoName: y, othersCount: _ })
                : s
                ? i.exclusiveReplyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
                : c
                ? i.trustedFriendsReplyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
                : i.replyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
          }
        },
        Nr = C.a.memo(Br),
        jr = n('fs1G'),
        Ur = n('BLtI'),
        Hr = n('kY28')
      function zr(e) {
        null == e || e.preventDefault()
      }
      var Vr = B.a.create(function (e) {
          return {
            replyUsersContainer: {
              flexDirection: 'row',
              minHeight: e.spaces.space12,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: 0,
            },
            grid: { flexGrow: 1, flexShrink: 1 },
            repliesTextContainer: { flexGrow: 1 },
            repliesMessage: { flexGrow: 1, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space4 },
            conversationLineContainer: { alignItems: 'center' },
            conversationLine: {
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginBottom: e.spaces.space4,
            },
          }
        }),
        Wr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = e.onPress,
            o = e.shouldDisplayRepliesText,
            l = e.showParentTweet,
            s = void 0 === l || l
          return C.a.createElement(
            G.a,
            null,
            s
              ? C.a.createElement(Ur.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: jr.a,
                  onAvatarClick: zr,
                  onEntityClick: zr,
                  onMediaClick: zr,
                  onReplyContextClick: zr,
                  replyContext: Hr.a.ReplyContextTypes.None,
                  tweet: a,
                  withAvatarLink: !1,
                  withCardLinks: !0,
                  withInlineMedia: !1,
                  withQuotedTweetLinks: !0,
                  withSocialContext: !1,
                  withTimestampLink: !1,
                  withUserHoverCard: !1,
                })
              : null,
            C.a.createElement(
              G.a,
              { style: Vr.replyUsersContainer },
              C.a.createElement(
                Ia.a,
                {
                  avatarCell: s ? C.a.createElement(G.a, { style: Vr.conversationLine }) : null,
                  avatarCellStyle: Vr.conversationLineContainer,
                  cellStyle: Vr.repliesTextContainer,
                  style: Vr.grid,
                },
                o
                  ? C.a.createElement(
                      A.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: i, style: s && Vr.repliesMessage },
                      C.a.createElement(Nr, {
                        communityName: t,
                        excludedRecipients: n,
                        inReplyToStatus: a,
                        loggedInUserId: r,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        Kr = n('Tb0w'),
        Gr = n('1YZw'),
        qr = n('pidX'),
        Xr = n('5oBF'),
        Qr = n('JYYi'),
        Yr = n('/Rsk'),
        Jr = n('u7LJ'),
        Zr = n('XOJV'),
        $r = n('G6rE'),
        ei = n('AspN'),
        ti = n('oEGd'),
        ni = n('2iUg'),
        ai = n('P1r1'),
        ri = ['mediaIds'],
        ii = function (e) {
          return e.parentTweetId || (e.isInline ? Qr.a.homeTimeline : Qr.a.modal)
        },
        oi = function (e, t) {
          var n = ii(t)
          return ue.k(e, n)
        },
        li = function (e, t) {
          var n = ii(t)
          return ue.l(e, n)
        },
        si = function (e, t) {
          var n = ii(t)
          return ue.j(e, n)
        },
        ci = function (e, t) {
          var n = vi(e, t),
            a = si(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            i = r ? M.c.select(e, r) : void 0
          return i ? i.name : void 0
        },
        di = function (e, t) {
          var n = ii(t)
          return ue.m(e, n)
        },
        ui = function (e, t) {
          var n = ii(t)
          return ue.i(e, n)
        },
        pi = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        mi = Object(he.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          $r.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        hi = function (e, t) {
          return t.parentTweetId || fi(e, t) || gi(e, t)
        },
        fi = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        gi = pi(function (e) {
          return e.inReplyToStatusId
        }),
        vi = function (e, t) {
          var n = hi(e, t)
          return n ? Zr.a.selectHydrated(e, n) : void 0
        },
        yi = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        bi = pi(function (e) {
          return e.hasArticleNudge
        }),
        _i = pi(function (e) {
          return e.convoCardData
        }),
        wi = pi(function (e) {
          return e.externalMedia
        }),
        Ci = pi(function (e) {
          return e.externalMediaFiles
        }),
        Ei = pi(function (e) {
          return e.previewTweetId
        }),
        Ti = pi(function (e) {
          return e.defaultText
        }),
        xi = function (e, t) {
          var n = Ti(e, t),
            a = Object(qr.a)(t.location)
          return (yi(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Si = pi(function (e) {
          return e.quotedStatusId
        }),
        Ii = pi(function (e) {
          return e.quotedStatus
        }),
        ki = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Ii(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Si(e, t)
              return n ? Zr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Ri = pi(function (e) {
          return e.isSelfThreadReply
        }),
        Mi = pi(function (e) {
          return e.positionCursorAtBeginning
        }),
        Pi = pi(function (e) {
          return e.promotedContent
        }),
        Li = function () {
          return Object(he.createSelector)(oi, xi, ki, ei.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return s()(
                s()({}, ((i = e).mediaIds, Nt()(i, ri))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === r ? n : void 0,
                  text: 0 === r && t ? t : e.text,
                },
              )
              var i
            })
          })
        },
        Di = {
          addComposer: ue.a,
          addToast: Gr.b,
          createLocalApiErrorHandler: Object(ye.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: ue.b,
          deletePreviewTweet: Xr.c,
          fetchAltTextPromptPreferenceIfNeeded: ni.a,
          fetchAutotaggedLocationIfNeeded: Yr.a,
          fetchTweetIfNeeded: Zr.a.fetchOneIfNeeded,
          removeComposer: ue.e,
          resetDraft: ue.f,
          retweet: Zr.a.retweet,
          schedule: ue.h,
          draftTweet: ue.d,
          send: ue.q,
          updateActiveComposerIndex: ue.s,
          updateAudienceControlsValue: ue.t,
          updateConvoCardState: Kr.b,
          preUploadMedia: ei.e,
          addMedia: ei.b,
          processMultipleMedia: ei.g,
          removeMediaUpload: ei.i,
          removeToast: Gr.c,
          updateSingleComposer: ue.w,
          setActiveParentKey: ue.r,
          copyDataFromInlineComposerToModalComposer: ue.c,
        },
        Oi = Object(ti.e)(function () {
          return Object(he.createStructuredSelector)({
            activeComposerIndex: ui,
            activeUser: mi,
            altTextNudgeType: ni.b,
            audienceControlsValue: si,
            composerData: Li(),
            dataSaverMode: ai.j,
            excludedRecipients: li,
            externalMedia: wi,
            externalMediaFiles: Ci,
            geoEnabled: ai.o,
            hasArticleNudge: bi,
            inReplyToStatus: vi,
            inReplyToStatusId: hi,
            isIntentRoute: yi,
            isSelfThreadReply: Ri,
            isSending: di,
            isSuperFollowsCreator: ge.l,
            positionCursorAtBeginning: Mi,
            loggedInUser: $r.e.selectLoggedInUser,
            prepopulatedText: xi,
            previewTweetId: Ei,
            promotedContent: Pi,
            scheduledFor: ue.n,
            selectedCommunityName: ci,
            sendingProgress: ue.o,
            convoCardData: _i,
            undoTweetSettings: Jr.d,
            userLanguage: ge.p,
            quotedStatusId: Si,
          })
        }, Di),
        Ai = n('45mF'),
        Fi = n('c0ZR'),
        Bi = n('W5XZ'),
        Ni = n('Drq4'),
        ji = n('0uGn'),
        Ui = n('I8M8'),
        Hi = n('7myi'),
        zi = n('7nmT'),
        Vi = n.n(zi),
        Wi = n('vbWy'),
        Ki = n('Rp9C'),
        Gi = n('Q5Mu'),
        qi = n('N5qz'),
        Xi = 'tweetButton',
        Qi = 'tweetButtonInline',
        Yi = Object(P.a)()
          .propsFromState(function () {
            return { loggedInUser: $r.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return {
              userName: t && t.name,
              userProfileImageUrl: t && t.profile_image_url_https,
              userScreenName: t && t.screen_name,
            }
          })
          .withAnalytics(),
        Ji = n('cHvH'),
        Zi = n('sgih'),
        $i = n('xKuM'),
        eo = n('5Vk4'),
        to = B.a.create(function (e) {
          return {
            mainCard: {
              marginHorizontal: 'auto',
              paddingVertical: e.spaces.space16,
              textAlign: 'center',
              alignItems: 'center',
            },
            largeScreenCard: { width: '70%' },
            smallScreenCard: { width: '85%' },
            sheetStyle: { justifyContent: 'center' },
          }
        }),
        no = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            i = e.sheetType,
            o = e.showActionButton
          return C.a.createElement(Ji.a, null, function (e) {
            var l = e.windowWidth > B.a.theme.breakpoints.small
            return C.a.createElement(
              Zi.a,
              { onMaskClick: r, style: to.sheetStyle, type: i, withMask: !0 },
              o &&
                C.a.createElement($i.a, {
                  leftControl: C.a.createElement(eo.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              C.a.createElement(G.a, { style: [to.mainCard, l ? to.largeScreenCard : to.smallScreenCard] }, n),
            )
          })
        },
        ao = j.a.cb7c0987,
        ro = j.a.de3bcf27,
        io = j.a.e710ce75,
        oo = j.a.h11e5910,
        lo = j.a.b7ec04f3,
        so = j.a.i62a03aa,
        co = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        uo = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return C.a.createElement(
            no,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            C.a.createElement(A.b, { size: 'title4', style: co.itemPadding, weight: 'heavy' }, ao),
            C.a.createElement(A.b, { color: 'gray700', style: co.itemPadding }, ro),
            C.a.createElement(A.b, { color: 'gray700', style: co.itemPadding }, io),
            C.a.createElement(
              G.a,
              { style: co.buttonContainer },
              C.a.createElement(A.b, { size: 'title4', style: co.itemPadding, weight: 'heavy' }, oo),
              C.a.createElement(X.a, { onPress: a, style: co.itemPadding, type: 'brandOutlined' }, lo),
              C.a.createElement(X.a, { onPress: n, style: co.itemPadding, type: 'brandOutlined' }, so),
            ),
          )
        },
        po = n('cm6r'),
        mo = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        ho = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return C.a.createElement(po.a, { interactiveStyles: null, onPress: a }, function (e) {
            return C.a.createElement(
              C.a.Fragment,
              null,
              C.a.createElement(X.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: mo.button,
                type: 'primaryOutlined',
              }),
              C.a.createElement(A.b, { color: 'gray700' }, n),
            )
          })
        },
        fo = n('sjK1'),
        go = n('FDY4'),
        vo = n('tevE'),
        yo = n('jV+4'),
        bo = n('UgB4'),
        _o = n('TW8A'),
        wo = n('hiGS'),
        Co = n('WtWS'),
        Eo = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Qe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Xe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      Eo.metadata = { width: 24, height: 24 }
      var To = Eo,
        xo = [
          { headlineText: j.a.f3a7a80c, subTextLine1: j.a.ge52d1de, subTextLine2: null },
          { headlineText: j.a.j311bf49, subTextLine1: j.a.ae42ebff, subTextLine2: j.a.aa350ab1 },
          { headlineText: j.a.j18b2956, subTextLine1: j.a.f6bee896, subTextLine2: j.a.dddd0995 },
          { headlineText: j.a.d02a94fa, subTextLine1: j.a.dddd0995, subTextLine2: null },
          { headlineText: j.a.i018b746, subTextLine1: j.a.b8d85df9, subTextLine2: j.a.d5ca11f0 },
        ],
        So = j.a.h11e5910,
        Io = j.a.abd845fd,
        ko = j.a.bea869b3,
        Ro = j.a.d96cf7cd,
        Mo = j.a.d3145da8,
        Po = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
            profanityIcon: {
              backgroundColor: e.colors.primary,
              color: e.colors.whiteOnColor,
              width: e.spaces.space48,
              height: e.spaces.space48,
              borderRadius: e.borderRadii.infinite,
            },
            tweetContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              width: '100%',
              textAlign: 'left',
            },
            tweetContent: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
            tweetBody: { flexDirection: 'row' },
            userName: { paddingBottom: e.spaces.space4 },
            mobileButtonContainer: {
              justifyContent: 'space-around',
              flexDirection: 'row',
              width: '100%',
              marginTop: e.spaces.space72,
            },
            thanksContainer: { flexDirection: 'row', alignItems: 'center' },
            thanksCheckMark: { color: B.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        Lo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            i = e.onEditTweet,
            o = e.onSendTweet,
            l = e.onWeGotItWrong,
            s = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = C.a.useContext(de.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = xo[(p = p >= 0 && p <= 4 ? p : 0)]
          return C.a.createElement(Ji.a, null, function (e) {
            var p,
              h,
              f,
              g = e.windowWidth
            return C.a.createElement(
              no,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: g > B.a.theme.breakpoints.medium,
              },
              C.a.createElement(To, { style: [Po.profanityIcon, Po.itemPadding] }),
              C.a.createElement(vo.a, { size: 'title4', style: Po.itemPadding, weight: 'heavy' }, m.headlineText),
              C.a.createElement(A.b, { color: 'gray700', style: Po.itemPadding }, m.subTextLine1),
              C.a.createElement(A.b, { color: 'gray700', style: Po.itemPadding }, m.subTextLine2),
              C.a.createElement(
                G.a,
                { style: [Po.tweetContainer, Po.itemPadding] },
                C.a.createElement(
                  G.a,
                  { style: Po.tweetContent },
                  C.a.createElement(yo.a, { name: c, profileImageUrl: d, screenName: u, style: Po.userName }),
                  C.a.createElement(
                    G.a,
                    { style: Po.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof fo.c) r = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var i
                          r = null === (i = e.mediaFile) || void 0 === i ? void 0 : i.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: r,
                          width: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.width) || 100,
                          height: (null === (a = e.mediaFile) || void 0 === a ? void 0 : a.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return C.a.createElement(
                        G.a,
                        { style: Po.photos },
                        C.a.createElement(go.a, {
                          containerAspectRatio: 1,
                          images: e,
                          previewMode: !1,
                          singleImageMaxAspectRatio: 1,
                          singleImageMinAspectRatio: 1,
                          withCenterCrop: !0,
                          withLink: !1,
                        }),
                      )
                    })(),
                    C.a.createElement(A.b, { style: Po.textStyle }, s),
                  ),
                ),
              ),
              t
                ? C.a.createElement(
                    G.a,
                    { style: Po.thanksContainer },
                    C.a.createElement(Co.a, { style: Po.thanksCheckMark }),
                    C.a.createElement(A.b, { align: 'center', style: Po.itemPadding }, Mo),
                  )
                : C.a.createElement(A.b, { align: 'center', onPress: l, style: Po.itemPadding, withUnderline: !0 }, So),
              g > B.a.theme.breakpoints.small
                ? C.a.createElement(
                    G.a,
                    { style: Po.buttonContainer },
                    C.a.createElement(X.a, { onPress: i, style: Po.itemPadding, type: 'brandFilled' }, Io),
                    C.a.createElement(X.a, { onPress: o, style: Po.itemPadding, type: 'brandOutlined' }, ko),
                    C.a.createElement(X.a, { onPress: a, style: Po.itemPadding, type: 'destructiveText' }, Ro),
                  )
                : ((p = C.a.createElement(bo.a, { style: { color: B.a.theme.colors.text } })),
                  (h = C.a.createElement(_o.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = C.a.createElement(wo.a, { style: { color: B.a.theme.colors.red500 } })),
                  C.a.createElement(
                    G.a,
                    { style: Po.mobileButtonContainer },
                    C.a.createElement(ho, { icon: p, label: ko, onPress: o }),
                    C.a.createElement(ho, { icon: h, label: Io, onPress: i }),
                    C.a.createElement(ho, { icon: f, label: Ro, onPress: a }),
                  )),
            )
          })
        },
        Do = Yi(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            i = e.onDismiss,
            o = e.onEditTweet,
            l = e.onSendTweet,
            s = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = C.a.useState(!1),
            m = k()(p, 2),
            h = m[0],
            f = m[1],
            g = C.a.useState(!1),
            v = k()(g, 2),
            y = v[0],
            b = v[1],
            _ = function (e) {
              var n = e.action,
                r = e.element,
                i = e.page,
                o = [{ nudge_id: a }]
              t.scribe({ action: n, data: { items: o }, element: r, page: i, section: 'dialog' })
            }
          return h
            ? C.a.createElement(uo, {
                onBack: function () {
                  _({ action: 'back', element: 'action', page: 'nudge_more_info' }), f(!1)
                },
                onNo: function () {
                  _({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), b(!0), f(!1)
                },
                onYes: function () {
                  _({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), b(!0), f(!1)
                },
              })
            : C.a.createElement(Lo, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  _({ action: 'cancel', element: 'action', page: 'nudge' }), r()
                },
                onDismiss: function () {
                  _({ action: 'dismiss', element: 'action', page: 'nudge' }), i()
                },
                onEditTweet: function () {
                  _({ action: 'revise', element: 'action', page: 'nudge' }), o()
                },
                onSendTweet: function () {
                  _({ action: 'send', element: 'action', page: 'nudge' }), l()
                },
                onWeGotItWrong: function () {
                  _({ action: 'more_info', element: 'action', page: 'nudge' }),
                    _({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: s,
                userName: c,
                userProfileImageUrl: d,
                userScreenName: u,
              })
        }),
        Oo = n('aITJ'),
        Ao = n('eb3s'),
        Fo = n('JYMr'),
        Bo = n('sCk0'),
        No = n('3A2y'),
        jo = n('zrOZ'),
        Uo = n('s1N3'),
        Ho = n('4FGy'),
        zo = n('mN6z'),
        Vo = n('eyty'),
        Wo = n('rziq'),
        Ko = n('lsKC'),
        Go = n('jTgF'),
        qo = j.a.d28215f0,
        Xo = j.a.ec909a54,
        Qo = j.a.jd53409d,
        Yo = {
          singular: j.a.edae65de,
          plural: j.a.a859846a,
          oneOfMultiple: j.a.e90118f5,
          someOfMultiple: j.a.c211dcb1,
        },
        Jo = { singular: j.a.d7c26bfb, plural: j.a.a75e3ccc },
        Zo = j.a.dcb7e3a0,
        $o = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = Jo.singular), (t = r ? Yo.singular : Yo.oneOfMultiple))
              : ((n = Jo.plural), (t = r ? Yo.plural : Yo.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(Zo)
          )
        },
        el = j.a.c1bf53b0,
        tl = j.a.bb8170da,
        nl = j.a.dad5a4b8,
        al = j.a.e65aed64,
        rl = j.a.bc2ceaf2,
        il = j.a.d8222374,
        ol = j.a.j890123a,
        ll = j.a.bb01231c,
        sl = j.a.d4ab68e2,
        cl = j.a.d8af8a4c,
        dl = j.a.d09d4c05,
        ul = j.a.i2209530,
        pl = j.a.bf9b89e4,
        ml = j.a.f277e949,
        hl = j.a.b551cd22,
        fl = j.a.f026a7fa,
        gl = j.a.a5d4fda0,
        vl = j.a.ib067d6a,
        yl = x.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        bl = { element: 'alt_text_prompt' },
        _l = { component: 'article_nudge' },
        wl = { viewType: 'send_tweet' },
        Cl = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        El = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r, i, l
            d()(this, n),
              (l = t.call(this, e, a)),
              _()(h()(l), '_getParentKey', function () {
                var e = l.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Qr.a.homeTimeline : Qr.a.modal)
              }),
              _()(h()(l), '_updateSingleComposer', function (e, t) {
                return (0, l.props.updateSingleComposer)({ updates: e, index: t, parentKey: l._getParentKey() })
              }),
              _()(h()(l), '_resetDraft', function () {
                ;(0, l.props.resetDraft)({ parentKey: l._getParentKey(), isPreview: l.isPreview })
              }),
              _()(h()(l), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = l.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              _()(h()(l), '_syncTexts', function () {
                var e = l.props.composerData,
                  t = l.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && l._updateSingleComposer({ text: a }, n)
                })
              }),
              _()(h()(l), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              _()(h()(l), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              _()(h()(l), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              _()(h()(l), '_handleDeletePreviewTweet', function () {
                var e = l.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId,
                  a = e.removeToast
                n && (a(), t(n))
              }),
              _()(h()(l), '_handleAnimateComplete', function () {
                var e = l.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = Vi.a.findDOMNode(l._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    i = r.bottom,
                    o = r.top,
                    s = Math.max(o, window.scrollY)
                  if (s < window.pageYOffset || i > window.innerHeight) {
                    var c = n ? s - n() - 14 : s - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      yl ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              _()(h()(l), '_handleFetchTweetIfNeeded', function () {
                var e = l.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.quotedStatus,
                  o = e.quotedStatusId
                !a && r && n(r).catch(t(Bi.a)), !i && o && n(o).catch(t(Bi.a))
              }),
              _()(h()(l), '_blockHistory', function (e, t) {
                var n = l.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  i = !r && /unsent/.test(e.pathname),
                  o = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return l.shouldShowDiscardConfirmation && 'POP' === t && o
                  ? (l.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : l._canSaveDraft && i && 'PUSH' === t
                  ? l.shouldShowDiscardConfirmation
                    ? (l.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: i }), !1)
                    : (l._resetDraft(), !0)
                  : l.shouldShowBackgroundSendConfirmation && 'POP' === t && o
                  ? (l._cancelAllMediaUploads(), !1)
                  : !('POP' === t && o && l._areComposersEmptyOrUnchanged && !Object(mn.a)(a)) || (l._resetDraft(), !0)
              }),
              _()(h()(l), '_getKeyCommandHandlers', function () {
                return l.state.typeaheadActive ? l._keyCommandHandlersForActiveTypeahead : l._keyCommandHandlers
              }),
              _()(h()(l), 'handleTweetOrRetweet', function () {
                if (
                  (l._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  l._areComposersValid())
                )
                  return l.shouldShowAltTextPrompt
                    ? (l.setState({ showAltTextPrompt: !0 }), void l._scribe(s()(s()({}, bl), {}, { action: 'show' })))
                    : l._handleTweetOrRetweet()
              }),
              _()(h()(l), '_handleTweetOrRetweet', function () {
                return l.isRetweet ? l._handleRetweet() : l._handleTweet()
              }),
              _()(h()(l), '_renderReplyContext', function () {
                var e = l.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  i = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (a && l._shouldBeExpanded())
                  return C.a.createElement(Wr, {
                    communityName: o,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: l._handleViewRecipients,
                    shouldDisplayRepliesText: !i,
                    showParentTweet: !r,
                  })
              }),
              _()(h()(l), '_renderAltTextPrompt', function () {
                var e = l._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return C.a.createElement(Ao.a, {
                  Icon: Ni.a,
                  cancelButtonLabel: tl,
                  confirmButtonLabel: el({ numOfDescriptions: t }),
                  headline: Qo,
                  onCancel: l._handleIgnoreAltTextPrompt,
                  onConfirm: l._handleAcceptAltTextPrompt,
                  onMaskClick: l._handleCancelAltTextPrompt,
                  text: $o({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              _()(h()(l), '_renderToxicReplyNudge', function () {
                var e = l._getSingleComposerDataWithLatestText(l.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return C.a.createElement(Do, {
                  media: n,
                  nudgeId: l.state.nudgeId,
                  onDeleteTweet: l._handleReplyNudgeDeleteTweet,
                  onDismiss: l._handleReplyNudgeDismiss,
                  onEditTweet: l._handleReplyNudgeEditTweet,
                  onSendTweet: l._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              _()(h()(l), '_handleAddComposer', function () {
                var e = l.props,
                  t = e.addComposer,
                  n = e.copyDataFromInlineComposerToModalComposer,
                  a = e.isInline,
                  r = e.parentTweetId
                l.isInlineReply ? n(r) : a && n(Qr.a.homeTimeline), t()
              }),
              _()(
                h()(l),
                '_makeAddComposerLink',
                Object(_n.a)(function (e, t, n) {
                  return Object(Ko.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: n })
                }),
              ),
              _()(h()(l), '_handleReplyNudgeDeleteTweet', function () {
                l._hideToxicReplyNudge(), l._handleConfirmDiscardTweet()
              }),
              _()(h()(l), '_handleReplyNudgeDismiss', function () {
                l._hideToxicReplyNudge()
              }),
              _()(h()(l), '_handleReplyNudgeEditTweet', function () {
                l._hideToxicReplyNudge()
              }),
              _()(h()(l), '_handleReplyNudgeSendTweet', function () {
                l._hideToxicReplyNudge(), l._handleSendTweet()
              }),
              _()(h()(l), '_setRootRef', function (e) {
                e && (l._root = e)
              }),
              _()(h()(l), '_handleTweet', function () {
                var e = l.props.composerData[0].scheduledFor
                l.setState({ errorMessage: void 0 }),
                  e ? Object(hn.h)(e) && l._handleScheduleTweet() : l._checkToxicReplyAndSendTweet()
              }),
              _()(h()(l), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = l.props,
                    r = a.analytics,
                    i = a.createLocalApiErrorHandler
                  if (Object(Go.d)(n) && n.code === Ui.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var o = Object(Go.b)(n)
                  if (o) return l.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(Ai.a)(void 0, !1)
                  i(s()({}, c))(n)
                  var d = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  l.setState({ errorMessage: { text: d ? d.toast.text : gl } })
                }
              }),
              _()(h()(l), '_handleScheduleTweet', function () {
                var e = l.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  i = e.schedule,
                  o = l._getSingleComposerDataWithLatestText(n[0])
                i({ excludedRecipients: a, inReplyToStatus: r, scheduleData: o })
                  .then(function (e) {
                    l.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(hn.c)(o.scheduledFor)
                    if (a) {
                      var r = Object(hn.b)(a),
                        i = Object(hn.i)(a),
                        c = hl({ scheduleDate: r, scheduleTime: i })
                      t({ text: c, action: { label: ml, link: { pathname: '/compose/tweet/unsent/scheduled' } } }),
                        l._scribeTweetSent(n[0], s()(s()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    l._updateConvoCardState(), l._close()
                  })
                  .catch(l._handleTweetError('schedule_tweet_cancel'))
              }),
              _()(h()(l), '_handleDraftTweet', function () {
                var e = l.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: l._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    l.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: pl, action: { label: ml, link: { pathname: '/compose/tweet/unsent/drafts' } } }),
                      l._scribeTweetSent(n[0], s()(s()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      l._updateConvoCardState(),
                      l._close()
                  })
                  .catch(l._handleTweetError('draft_tweet_cancel', Gi.a))
              }),
              _()(h()(l), '_checkToxicReply', function () {
                var e = l.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.parentTweetId,
                  o = t(
                    l._getSingleComposerDataWithLatestText(n[0]).text,
                    i || r,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t, n, a, r, i, o, s
                    if (
                      !l.context.featureSwitches
                        .getArrayValue('responsive_web_reply_nudge_supported_languages')
                        .includes(
                          null === (t = e.create_nudge) || void 0 === t || null === (n = t.nudge) || void 0 === n
                            ? void 0
                            : n.proposed_tweet_language,
                        )
                    )
                      return !1
                    var c =
                        null == e ||
                        null === (a = e.create_nudge) ||
                        void 0 === a ||
                        null === (r = a.nudge) ||
                        void 0 === r ||
                        null === (i = r.nudge_type) ||
                        void 0 === i
                          ? void 0
                          : i.__typename,
                      d =
                        null == e ||
                        null === (o = e.create_nudge) ||
                        void 0 === o ||
                        null === (s = o.nudge) ||
                        void 0 === s
                          ? void 0
                          : s.id
                    return d && l.setState({ nudgeId: d }), !!c
                  }),
                  s = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([o, s])
              }),
              _()(h()(l), '_showToxicReplyNudge', function () {
                l._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: l.state.nudgeId }] },
                ),
                  l.setState({ showToxicReplyNudge: !0 })
              }),
              _()(h()(l), '_hideToxicReplyNudge', function () {
                return l.setState({ showToxicReplyNudge: !1 })
              }),
              _()(h()(l), '_checkToxicReplyAndSendTweet', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = l.state.nudgeId
                if (
                  !(
                    !l._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    l.isReply &&
                    !n &&
                    l.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return l._handleSendTweet()
                l._checkToxicReply().then(function (e) {
                  if (!e) return l._handleSendTweet()
                  l.context.featureSwitches.isTrue('responsive_web_reply_nudge_show_nudge') && l._showToxicReplyNudge()
                })
              }),
              _()(h()(l), '_handleSendTweet', function () {
                var e = l.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  r = e.audienceControlsValue,
                  i = e.composeSemanticCoreId,
                  o = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  d = e.history,
                  u = e.inReplyToStatus,
                  p = e.isSelfThreadReply,
                  m = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  g = e.send,
                  v = r.conversationControlsValue,
                  y = r.exclusivityControlValue,
                  b = void 0 === y ? void 0 : y,
                  _ = r.trustedFriendsValue,
                  w = void 0 === _ ? void 0 : _,
                  C = r.trustedFriendsMemberCount,
                  E = void 0 === C ? void 0 : C,
                  T = l.isPreview,
                  x = l.props.composerData.map(function (e) {
                    return l._getSingleComposerDataWithLatestText(e)
                  }),
                  I = Object(hn.c)(x[0].scheduledFor)
                if (I) {
                  var k = Object(hn.b)(I),
                    R = Object(hn.i)(I),
                    M = hl({ scheduleDate: k, scheduleTime: R })
                  return n({ text: M, action: { label: ml, link: '' } }), void l._close()
                }
                if (
                  (o.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  w &&
                    a.scribe({
                      action: 'send_trusted_friends_tweet',
                      data: { trusted_friends_control_details: { list_member_count: E } },
                    }),
                  l._conversationControlsCreationEnabled)
                )
                  if ('community' === v) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var P = l._getSingleComposerDataWithLatestText(x[0]).text,
                      L = Object(S.d)(P)
                    a.scribe({
                      action: L ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && a.scribe({ action: 'send_my_followers_tweet' })
                var D = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  O = D ? '8.31.'.concat(D) : '',
                  A = i ? (D ? [i, O].join(',') : i) : O
                g({
                  sendData: x,
                  communityIdValue: D,
                  conversationControlsValue: v,
                  excludedRecipients: o,
                  exclusivityControlValue: b,
                  inReplyToStatus: u,
                  isSelfThreadReply: p,
                  promotedContent: h,
                  composeSemanticCoreId: A,
                  isPreview: T,
                  trustedFriendsValue: w,
                  tweetType: l.tweetType,
                })
                  .then(function (e) {
                    T || l.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return l._scribeTweetSent(x[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && l._scribeThreadSent(x, e, 'thread_send_success')
                    var a = e.length > 1 ? al : nl
                    if (D && f) {
                      var r = f,
                        i = e.length
                      a = Xo({ numOfTweets: i, communityName: r })
                    }
                    var o = T && l.isReply,
                      s = { label: ml, link: void 0, onAction: void 0 }
                    if (o || !T) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      s.link = { pathname: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '') }
                    } else s.onAction = Object(Ko.a)(d, m, D)
                    n({ text: T ? rl : a, action: s }),
                      l.isInlineReply && l.setState({ focused: !1 }),
                      l._updateConvoCardState(),
                      l._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      r = void 0 === n ? [] : n,
                      i = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      o = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      p = { message: e.type, event_info: i ? ''.concat(i) : void 0, status_code: u, url: o }
                    throw (
                      (r.map(
                        function (e, t) {
                          return l._scribeTweetSent(x[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(Go.d)(e) && e.code === Ui.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: p }),
                      x.length > 1 && l._scribeThreadSent(x, r, 'thread_send_failure'),
                      r.length &&
                        d.replace({
                          pathname: m.pathname,
                          state: s()(
                            s()({}, Object(No.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(l._handleTweetError('send_tweet_cancel', Gi.a))
              }),
              _()(h()(l), '_setActiveParentKey', function () {
                ;(0, l.props.setActiveParentKey)(l._getParentKey())
              }),
              _()(h()(l), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  i = n.isDraftTweet,
                  o = void 0 !== i && i,
                  c = n.isScheduled,
                  d = void 0 !== c && c,
                  u = l.state.nudgeId,
                  p = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  m = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? m : d ? p : 'send_',
                  f = { items: [Ki.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  b = Object(jo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  _ = l.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (l._scribe({ action: ''.concat(h, 'tweet') }, f),
                  o || !e.draftTweetId || e.scheduledTweetId || l._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  l.isQuoteTweet &&
                    (l._scribe({ action: 'retweet_with_comment' }, f),
                    r && l._scribe(s()(s()({}, _l), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  l.isReply && l._scribe({ component: _, action: ''.concat(h, 'reply') }, f),
                  g && l._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  l._hasPhoto(e) &&
                    (l._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    v && l._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && l._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  l._hasVideo(e) &&
                    (l._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && l._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  b.size)
                ) {
                  var w = l._hasPhoto(e) ? 'photo' : 'video'
                  b.forEach(function (e) {
                    l._scribe({ action: ''.concat(h).concat(w, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var C = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    l.isReply &&
                    !d &&
                    (o
                      ? l._scribe(s()(s()({}, C), {}, { action: 'save' }), { items: [{ nudge_id: u }] })
                      : l._scribe(s()(s()({}, C), {}, { action: 'sent' }), { items: [{ nudge_id: u }] })),
                  u || o || !l.isReply || d || l._scribe(s()(s()({}, C), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var E = t.id_str && Ki.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  l._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: E ? [E] : [] })
                  var T = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || T) &&
                    l._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: E ? [E] : [] },
                    ),
                    y && l._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else l._hasGif(e) && (l._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && l._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              _()(h()(l), '_scribeThreadSent', function (e, t, n) {
                var a = l.props.inReplyToStatus,
                  r = { items: [Ki.a.getSendThreadItem(e, t.length, !!a)] }
                l._scribe({ action: n }, r)
              }),
              _()(h()(l), '_scribeRetweet', function (e) {
                var t = l.props.hasArticleNudge,
                  n = { items: [Ki.a.getTweetItem(e)] }
                l._scribe({ action: 'retweet' }, n),
                  t && l._scribe(s()(s()({}, _l), {}, { element: 'result', action: 'retweet' }), n)
              }),
              _()(h()(l), '_handleRetweet', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (l._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    l.setState({ tweetsSentOrScheduled: !0 }), l._close()
                  }, n(Wi.a)))
              }),
              _()(h()(l), 'handleDismissComposer', function () {
                l.shouldShowDiscardConfirmation
                  ? l.setState({ showDiscardTweetConfirmation: !0 })
                  : l.shouldShowBackgroundSendConfirmation
                  ? l._cancelAllMediaUploads()
                  : l._close()
              }),
              _()(h()(l), '_cancelAllMediaUploads', function () {
                l.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              _()(h()(l), '_handleConfirmDiscardTweet', function () {
                var e = l.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = l._canSaveDraft ? 'draft' : 'send'
                l.setState({ showDiscardTweetConfirmation: !1 }),
                  l._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && l._scribe(s()(s()({}, _l), {}, { element: 'result', action: 'cancel' })),
                  l.state.nudgeId &&
                    l._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: l.state.nudgeId }] },
                    )
              }),
              _()(h()(l), '_handleCancelDiscardTweet', function () {
                l.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  l._restoreFocusToActiveComposer()
                })
              }),
              _()(h()(l), '_handleAcceptAltTextPrompt', function () {
                l.setState({ showAltTextPrompt: !1 })
                var e = l.props.history,
                  t = l._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (l._scribe(s()(s()({}, bl), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: ji.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              _()(h()(l), '_handleIgnoreAltTextPrompt', function () {
                l._scribe(s()(s()({}, bl), {}, { action: 'declined' })),
                  l.setState({ showAltTextPrompt: !1 }),
                  l._handleTweetOrRetweet()
              }),
              _()(h()(l), '_handleCancelAltTextPrompt', function () {
                l._scribe(s()(s()({}, bl), {}, { action: 'cancel' })),
                  l.setState({ showAltTextPrompt: !1 }, function () {
                    l._restoreFocusToActiveComposer()
                  })
              }),
              _()(h()(l), '_restoreFocusToActiveComposer', function () {
                var e = l.props.activeComposerIndex
                void 0 !== e && l._composerRefs[e] && l._composerRefs[e].focus()
              }),
              _()(h()(l), '_close', function () {
                var e = l.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || l._resetDraft(),
                  l.state.navigatingToOutbox
                    ? l._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              _()(h()(l), '_handleComposerFocus', function (e) {
                l._composerRefs[e]
                  ? l.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      l._restoreFocusToActiveComposer()
                    }, 0)
              }),
              _()(h()(l), '_handleFocus', function () {
                l.state.focused ||
                  (l.isInlineReply && l._scribe({ element: 'inline_reply', action: 'reply' }),
                  l.setState({ focused: !0 }))
              }),
              _()(h()(l), '_handleTypeaheadStateChange', function (e) {
                l.setState({ typeaheadActive: e })
              }),
              _()(h()(l), '_handleRemoveComposer', function () {
                var e = l.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  i = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(No.a)(r.state || {}, 'quotedStatus') }),
                  i(),
                  setTimeout(l._restoreFocusToActiveComposer)
              }),
              _()(h()(l), '_handleViewRecipients', function () {
                var e = l.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                l._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              _()(h()(l), '_handleTextChange', function (e, t) {
                var n = l.state.textMap,
                  a = l.props,
                  r = a.activeComposerIndex,
                  i = a.isInline,
                  o = a.setValidity
                if (
                  (l.setState({ textMap: s()(s()({}, n), {}, _()({}, t, e)) }, function () {
                    o && o(l._areComposersValid())
                  }),
                  l.setState({ errorMessage: void 0 }),
                  Oo.b.isIOS())
                ) {
                  var c = i ? 0 : r
                  l._updateSingleComposer({ text: e }, c)
                }
              }),
              _()(
                h()(l),
                '_handleTextOnBlur',
                Object(_n.a)(function (e, t) {
                  return function () {
                    var n = l.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      i = l.props.composerData,
                      o = a[e],
                      s = i.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !r && s && l._updateSingleComposer({ text: o }, t)
                  }
                }),
              ),
              _()(h()(l), '_updateAudienceControlsValue', function (e) {
                var t = l.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = l.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!l._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!l._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (l._updateSingleComposer({ pollActive: !1 }, 0), l.setState({ errorMessage: { text: qo } })),
                      (null == r ? void 0 : r.text) === qo && l.setState({ errorMessage: void 0 })
                }
                a(e, l._getParentKey())
              }),
              _()(h()(l), '_renderProgressBar', function () {
                var e = l.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return C.a.createElement(Fo.a, { progress: t ? Math.max(n, 0.02) : 0, style: Tl.progressBar })
              }),
              _()(h()(l), '_updateConvoCardState', function () {
                var e = l.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              _()(h()(l), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Fi.a)(e)
                    }),
                  ).then(l._handleAddMediaFiles(e))
                }
              }),
              _()(h()(l), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    i,
                    o,
                    s = l.props,
                    c = s.addMedia,
                    d = s.addToast,
                    u = s.composerData,
                    p = s.dataSaverMode,
                    m = s.preUploadMedia,
                    f = s.processMultipleMedia,
                    g = s.removeMediaUpload,
                    v = u[e],
                    y = v.pollActive,
                    b = Object(Vo.e)(
                      null === (a = h()(l)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                      null === (i = h()(l)) || void 0 === i || null === (o = i.context) || void 0 === o
                        ? void 0
                        : o.featureSwitches,
                    )
                  y ||
                    c(t, { location: Vo.d.Tweet, canUploadLongVideo: b }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(v, t)) {
                        var r = v.media.map(function (e) {
                          return e.id
                        })
                        l._updateSingleComposer({ mediaIds: Object(Uo.a)(r.concat(a)) }, e),
                          f(t, { onFailure: l._handleMediaRemoveFactory(e) }).then(function (e) {
                            p ||
                              m(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else d({ text: vl }), g(a)
                    })
                }
              }),
              _()(h()(l), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return l._handleMediaRemove(e, t)
                }
              }),
              _()(h()(l), '_handleMediaRemove', function (e, t) {
                var n = l.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  i = a[e],
                  o = i.media,
                  s = i.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(Ho.a)(e, n)
                  })(
                    o.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  d = c.length > 0 ? s : []
                l._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: d }, e),
                  r(t),
                  l.setState({ errorMessage: void 0 })
              }),
              _()(h()(l), '_setComposerRef', function (e) {
                return function (t) {
                  l._composerRefs[e] = t
                }
              }),
              _()(h()(l), '_shouldBeExpanded', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (l.state.focused) return !0
                var a = !Object(mn.c)(l._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              _()(h()(l), '_areComposersValid', function () {
                var e = l.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  i = 'community_members' === t
                return (
                  (l.isRetweet && !r && !i) ||
                  n.every(function (e) {
                    return Object(mn.e)(l._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(h()(l), '_areComposersEmptyOrUnchanged', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(mn.d)(l._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              _()(h()(l), '_getAltTextMetadata', function () {
                var e = l.props.composerData,
                  t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] }
                return (
                  e.forEach(function (e) {
                    var n,
                      a = (e.media || []).filter(function (e) {
                        var t = e.mediaFile
                        return (null == t ? void 0 : t.isImage) || (null == t ? void 0 : t.isGif)
                      }),
                      r = a
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += a.length), (n = t.noDescriptionImageIDs).push.apply(n, o()(r))
                  }),
                  (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                  t
                )
              }),
              _()(h()(l), '_getSingleComposerDataWithLatestText', function (e) {
                var t = l.state.textMap
                return 'string' == typeof t[e.key] ? s()(s()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
            return (
              (l.state = {
                focused: c,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (l._composerRefs = {}),
              (l._conversationControlsCreationEnabled =
                !0 ===
                l.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (l._throttledSyncTexts = Object(ta.a)(l._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (l._keyCommandHandlers =
                ((i = {}), _()(i, Wo.b, l.handleTweetOrRetweet), _()(i, Wo.a, l.handleDismissComposer), i)),
              (l._keyCommandHandlersForActiveTypeahead = _()({}, Wo.b, l.handleTweetOrRetweet)),
              (l._isAltTextNudgeEnabled =
                !0 ===
                l.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (l._isCommunitiesEnabled = l.context.featureSwitches.isTrue('c9s_enabled')),
              l
            )
          }
          return (
            p()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props.onRef
                  e && e(this)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.convoCardData,
                    n = e.externalMedia,
                    a = e.externalMediaFiles,
                    r = e.fetchAltTextPromptPreferenceIfNeeded,
                    i = e.history,
                    o = e.isInline,
                    l = e.isIntentRoute,
                    c = e.location,
                    d = e.prepopulatedText,
                    u = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    r(),
                    d || (t && t.cardUrl))
                  ) {
                    var p = s()({}, null)
                    d && (p.text = d), t && t.cardUrl && (p.cardUrl = t.cardUrl), this._updateSingleComposer(p)
                  }
                  ;(d || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !l &&
                    i.replace({
                      query: Object(qr.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(No.a)(Object(qr.b)(c.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    u && u(this._areComposersValid()),
                    o || this._setActiveParentKey(),
                    this.isInlineReply && this._root && (this._height = this._root.getBoundingClientRect().height)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.addToast,
                    r = n.composerData,
                    i = n.copyDataFromInlineComposerToModalComposer,
                    o = n.externalMedia,
                    l = n.externalMediaFiles,
                    s = n.onRef,
                    c = n.parentTweetId,
                    d = n.replyPressToggle,
                    u = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== s && e.onRef(void 0),
                    s && s !== e.onRef && s(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: fl }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : l.length > 0 && l !== e.externalMediaFiles && this._handleAddMediaFiles(0)(l),
                    u && !Object(zo.a)(r, e.composerData) && u && u(this._areComposersValid()),
                    d !== e.replyPressToggle && i(c)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props.onRef
                  this._unblockHistory && this._unblockHistory(), e && e(void 0), this._syncTexts()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this,
                    a = this.props,
                    i = a.activeUser,
                    o = a.addToast,
                    l = a.audienceControlsValue,
                    s = a.composeHeader,
                    c = a.composerData,
                    d = a.customizePropsForSingleComposerItem,
                    u = a.geoEnabled,
                    p = a.history,
                    m = a.inReplyToStatus,
                    h = a.isInline,
                    f = a.isModal,
                    g = a.isSelfThreadReply,
                    v = a.isSending,
                    y = a.isSuperFollowsCreator,
                    b = a.parentTweetId,
                    _ = a.positionCursorAtBeginning,
                    w = a.richTextInputContext,
                    E = a.scheduledFor,
                    T = a.typeaheadWrapper,
                    x = a.userLanguage,
                    S = a.windowWidth,
                    I = this.state,
                    k = I.errorMessage,
                    R = I.focused,
                    M = I.shouldDisableButton,
                    P = I.showAltTextPrompt,
                    L = I.showDiscardTweetConfirmation,
                    D = I.showToxicReplyNudge,
                    O = I.typeaheadActive,
                    A = !f && O,
                    F = h ? 0 : this.props.activeComposerIndex,
                    B = A || h ? [c[F]] : c,
                    N = this._areComposersValid(),
                    j = this.hasNonCompliantQuote && this.isRetweet,
                    U = h ? G.a : Bo.a,
                    H = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    z = M || !N || j || this.isCommunityTweetFromProtectedUser,
                    V = (h && qi.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet,
                    W = (h && qi.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet || this.isExclusiveTweet
                  return C.a.createElement(
                    G.a,
                    { ref: this._setRootRef, style: !b && Tl.root },
                    h ? this._renderProgressBar() : null,
                    k &&
                      C.a.createElement(
                        G.a,
                        { style: Tl.inlineCallout },
                        C.a.createElement(Mt.a, {
                          action:
                            null !== (e = k.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = k.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: k.action.label, link: k.action.link }
                              : void 0,
                          text: k.text,
                          type: 'danger',
                        }),
                      ),
                    C.a.createElement(
                      G.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Tl.content, b && Tl.contentInlineReply, f && Tl.contentModal],
                      },
                      m ? this._renderReplyContext() : null,
                      s,
                      C.a.createElement(
                        U,
                        H,
                        B.map(function (e, t) {
                          var a = Object(hn.h)(e.scheduledFor),
                            s = c.indexOf(e),
                            I = d(e, t, B),
                            k =
                              f || h
                                ? C.a.createElement(
                                    X.a,
                                    {
                                      behavioralEventContext: wl,
                                      disabled: z,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Tl.inlineSendButton,
                                      testID: f ? Xi : Qi,
                                      type: 'brandFilled',
                                    },
                                    Object(Ko.b)({
                                      inReplyToStatus: !!m,
                                      isSelfThreadReply: !!g,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            M = n._getSingleComposerDataWithLatestText(e)
                          return C.a.createElement(
                            G.a,
                            { key: e.key },
                            C.a.createElement(
                              Pr,
                              r()(
                                {
                                  addComposerLink: n._makeAddComposerLink(h, g, b),
                                  addToast: o,
                                  additionalToolbarContent: k,
                                  audienceControlsValue: l,
                                  autoFocus: n.isInlineReply && R,
                                  data: M,
                                  disableAddTweet: c.length >= 25,
                                  editable: !v && !!i,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: u,
                                  hidePoll: V,
                                  hideScheduling: W,
                                  history: p,
                                  index: s,
                                  isActive: s === F && !v,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: h,
                                  isInlineReply: n.isInlineReply,
                                  isLast: h || s === c.length - 1,
                                  isReply: !!m || n.isInlineReply,
                                  isSelfThreadReply: !!g,
                                  isSuperFollowsCreator: y,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: i,
                                  onAddComposer: n._handleAddComposer,
                                  onFilesAdded: n._handleAddMediaFiles(s),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(M.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!_,
                                  ref: n._setComposerRef(s),
                                  richTextInputContext: w,
                                  scheduledFor: E,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: O,
                                  typeaheadWrapper: T,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: x,
                                  windowWidth: S,
                                },
                                I,
                              ),
                            ),
                          )
                        }),
                      ),
                      L
                        ? this._canSaveDraft
                          ? C.a.createElement(Ao.a, {
                              cancelButtonLabel: sl,
                              confirmButtonLabel: ul,
                              headline: cl,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: dl,
                            })
                          : C.a.createElement(Ao.a, {
                              confirmButtonLabel: sl,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? ol : il,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: ll,
                            })
                        : null,
                      P ? this._renderAltTextPrompt() : null,
                      D ? this._renderToxicReplyNudge() : null,
                      C.a.createElement(G.a, { style: v && Tl.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(s()(s()({}, e), {}, { data: t }))
                },
              },
              {
                key: 'isInlineReply',
                get: function () {
                  return !!this.props.parentTweetId
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length,
                    n = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && '' === n && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData,
                    t = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && t.length > 0
                },
              },
              {
                key: 'hasNonCompliantQuote',
                get: function () {
                  var e
                  return (
                    'non_compliant' ===
                    (null === (e = this.props.composerData[0].quotedStatus) || void 0 === e
                      ? void 0
                      : e.limited_actions)
                  )
                },
              },
              {
                key: 'shouldShowDiscardConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t[0].scheduledTweetId,
                    r = this.state.showDiscardTweetConfirmation,
                    i = this._areComposersEmptyOrUnchanged()
                  return !(n || i || r || a)
                },
              },
              {
                key: 'shouldShowBackgroundSendConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t.some(function (e) {
                      return e.media.some(function (e) {
                        return e.uploading
                      })
                    })
                  return n && a
                },
              },
              {
                key: 'shouldShowAltTextPrompt',
                get: function () {
                  var e = this.props.altTextNudgeType
                  return (
                    !(
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== E.a.prompt
                    ) && this._getAltTextMetadata().numberOfDescriptionsMissing > 0
                  )
                },
              },
              {
                key: '_canSaveDraft',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isInline
                  return !(
                    this.isCommunityTweet ||
                    this.isExclusiveTweet ||
                    this.isThread ||
                    t[0].pollActive ||
                    0 !== t[0].mediaTags.length ||
                    n
                  )
                },
              },
              {
                key: 'isCommunityTweet',
                get: function () {
                  var e = this.props,
                    t = e.audienceControlsValue,
                    n = e.inReplyToStatus
                  return !!((null != n && n.community_id_str) || 'community_members' === t._type)
                },
              },
              {
                key: 'isCommunityTweetFromProtectedUser',
                get: function () {
                  var e
                  return !(
                    !this.isCommunityTweet ||
                    null === (e = this.props.activeUser) ||
                    void 0 === e ||
                    !e.protected
                  )
                },
              },
              {
                key: 'isReply',
                get: function () {
                  return !(!this.props.inReplyToStatus && !this.props.inReplyToStatusId)
                },
              },
              {
                key: 'isExclusiveTweet',
                get: function () {
                  return !!this.props.audienceControlsValue.exclusivityControlValue
                },
              },
              {
                key: 'isTrustedFriendsTweet',
                get: function () {
                  return !!this.props.audienceControlsValue.trustedFriendsValue
                },
              },
              {
                key: 'tweetType',
                get: function () {
                  return this.isQuoteTweet
                    ? Cl.Quote
                    : this.isThread
                    ? Cl.Thread
                    : this.isReply
                    ? Cl.Reply
                    : Cl.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    n = this.props.undoTweetSettings
                  return (
                    (null == this ||
                    null === (e = this.context) ||
                    void 0 === e ||
                    null === (t = e.userClaims) ||
                    void 0 === t
                      ? void 0
                      : t.isTrueAndEnabled('subscriptions_feature_1003')) &&
                    (!n || void 0 === n[this.tweetType] || n[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(El, 'defaultProps', {
        customizePropsForSingleComposerItem: function (e, t, n) {
          return {}
        },
        externalMedia: [],
        externalMediaFiles: [],
        isSelfThreadReply: !1,
        isModal: !1,
        positionCursorAtBeginning: !1,
        prepopulatedText: '',
        setValidity: function () {},
        typeaheadWrapper: Hi.a,
      }),
        _()(El, 'contextType', de.a),
        _()(El, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var Tl = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: s()({}, B.a.absoluteFillObject),
          inlineSendButton: { marginLeft: e.spaces.space12 },
          progressBar: {
            position: 'absolute',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
          },
          inlineCallout: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          hidden: { position: 'absolute', visibility: 'hidden', width: '100%' },
        }
      })
      t.a = Object(K.a)(Oi(El))
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ')
      var a = n('z4Oz'),
        r = n('LQrL'),
        i = n('zpdM'),
        o = function (e, t) {
          for (var n = 0, a = 0; a < e.length; a++) {
            var r = e[a],
              i = r.getText().length
            if (n + i >= t) return { blockKey: r.key, offset: t - n }
            n += i + 1
          }
          return Object.freeze({})
        },
        l = function (e, t) {
          var n = e.getCurrentContent(),
            a = n.getFirstBlock(),
            r = n.getLastBlock(),
            o = t.blockKey,
            l = void 0 === o ? r.key : o,
            s = t.offset,
            c = void 0 === s ? r.getText().length : s,
            d = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: l, focusOffset: c, isBackward: !1 }),
            u = i.Modifier.removeInlineStyle(e.getCurrentContent(), d, 'overflow')
          return i.EditorState.push(e, u, 'change-inline-style')
        },
        s = function (e, t) {
          var n = t.blockKey,
            a = t.offset,
            r = e.getCurrentContent(),
            o = r.getLastBlock(),
            l = c(r, n, a)
          if (n) {
            var s = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: l,
                  focusKey: o.key,
                  focusOffset: o.getText().length,
                  isBackward: !1,
                }),
              d = i.Modifier.applyInlineStyle(r, s, 'overflow')
            return i.EditorState.push(e, d, 'change-inline-style')
          }
          return e
        },
        c = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            a = n,
            r = e.getBlockForKey(t)
          if (r) {
            var i = r.getEntityAt(n)
            if (void 0 !== i) {
              var o = i && e.getEntity(i),
                l = o && o.data && o.data.id
              if (void 0 !== l)
                for (var s = n - 1; s >= 0; s--) {
                  var c = r.getEntityAt(s),
                    d = c && e.getEntity(c)
                  if (!d || !d.data || d.data.id !== l) {
                    a = s + 1
                    break
                  }
                }
            }
            return a
          }
        },
        d = 'TWEMOJI',
        u = 'IMMUTABLE'
      t.a = {
        convertEmojiToEntities: function (e) {
          var t = i.EditorState.set(e, { allowUndo: !1 }),
            n = t.getCurrentContent(),
            r = 0
          return (
            n.getBlocksAsArray().forEach(function (e) {
              a.a.getTwemojiEntities(e.getText()).forEach(function (a) {
                if (2 === (a.indices && a.indices.length)) {
                  var o = n.createEntity(d, u, { url: a.url || null, id: r })
                  r += 1
                  var l = o.getLastCreatedEntityKey(),
                    s = e.getKey(),
                    c = t
                      .getSelection()
                      .merge({
                        anchorKey: s,
                        anchorOffset: a.indices[0],
                        focusKey: s,
                        focusOffset: a.indices[1],
                        isBackward: !1,
                      })
                  n = i.Modifier.applyEntity(o, c, l)
                }
              })
            }),
            i.EditorState.set(t, { allowUndo: !0, currentContent: n })
          )
        },
        getRelativeOffset: o,
        initEditorState: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { decorators: [r.b, r.f, r.a] },
            n = t.decorators,
            a = i.EditorState.createWithContent(
              'string' == typeof e ? i.ContentState.createFromText(e) : Object(i.convertFromRaw)(e),
              new i.CompositeDecorator(n),
            )
          return i.EditorState.moveSelectionToEnd(a)
        },
        insertTextAtCursor: function (e, t) {
          var n = e.getCurrentContent(),
            a = e.getSelection(),
            r = i.Modifier.insertText(n, a, t)
          return i.EditorState.push(e, r, 'insert-characters')
        },
        TWEMOJI_ENTITY_TYPE: d,
        updateOverflowStyle: function (e, t) {
          var n,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e.getSelection(),
            c = i.EditorState.set(e, { allowUndo: !1 }),
            d = e.getCurrentContent().getSelectionBefore(),
            u = e.getCurrentContent().getSelectionAfter(),
            p = e.getCurrentContent(),
            m = p.getBlocksAsArray(),
            h = 'number' == typeof t && t > -1,
            f = h ? o(m, t) : Object.freeze({})
          if ((a && ((c = l(c, f)), (n = !0)), h && ((c = s(c, f)), (n = !0)), n)) {
            var g = (c = i.EditorState.forceSelection(c, r)).getCurrentContent()
            ;(g = (g = g.set('selectionBefore', d)).set('selectionAfter', u)),
              (c = i.EditorState.set(e, { allowUndo: !0, currentContent: g }))
          }
          return c
        },
      }
    },
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              o.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('FtFR')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('wtru')
      function o(e) {
        var t = Object(i.b)()
        return [
          !!t && !t.flags[e],
          r.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        s = n.n(l),
        c = n('t62R'),
        d = n('I4+6'),
        u = n('cm6r'),
        p = n('rHpw'),
        m = n('MWbm'),
        h = ['align', 'color', 'label'],
        f = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          i = e.label,
          l = o()(e, h),
          g = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          m.a,
          { style: f.container },
          s.a.createElement(
            u.a,
            r()({}, l, { interactiveStyles: g, style: f.root }),
            s.a.createElement(c.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('0vv5'),
        r = 500,
        i = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    keCP: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = n('97Jx'),
        g = n.n(f),
        v =
          (n('2G9S'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('KqXw'),
          n('MvUL'),
          n('z84I'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('KOtZ'),
          n('SV7d')),
        y = n('rHpw'),
        b = 'singleline',
        _ = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? y.a.theme.colors.gray700 : t,
            a = y.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(n, ';\n            padding-bottom: ')
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              n,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              b,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              b,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        w = n('ERkP'),
        C = n.n(w),
        E = n('k/Ka'),
        T = n('PxJJ'),
        x = n('w9LO'),
        S = n('fs1G'),
        I = n('zpdM'),
        k = function (e) {
          return Object(E.a)('div', e)
        },
        R = !1,
        M =
          ((t.a = C.a.forwardRef(function (e, t) {
            var n = v.d()
            return C.a.createElement(
              M,
              g()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                h()(s()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return I.EditorState.acceptSelection(
                    t,
                    new I.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                h()(s()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return I.EditorState.forceSelection(t, t.getSelection())
                }),
                h()(s()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(I.EditorState.moveFocusToEnd(a))
                    : null == r || r(I.EditorState.moveSelectionToEnd(a))
                }),
                h()(s()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = _({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                h()(s()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                h()(s()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                h()(s()(e), 'getValue', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                h()(s()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                h()(s()(e), 'clear', function () {}),
                h()(s()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                h()(s()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                h()(s()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                h()(s()(e), '_removeNewLines', function (e, t) {
                  return I.EditorState.push(
                    t,
                    I.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                h()(s()(e), '_removeInvalidStylesFromContentBlock', function (t) {
                  var n = e.props.pastedStylesAllowlist,
                    a = t.getCharacterList().map(function (e) {
                      return e
                        .getStyle()
                        .filter(function (e) {
                          return !(null != n && n.includes(e))
                        })
                        .reduce(function (e, t) {
                          return I.CharacterMetadata.removeStyle(e, t)
                        }, e)
                    })
                  return (null != n && n.includes(t.getType()) ? t : t.set('type', 'unstyled')).set('characterList', a)
                }),
                h()(s()(e), '_removeInvalidStyles', function (t, n) {
                  var a = e.props.blockRenderMap,
                    r = t ? Object(I.convertFromHTML)(t, void 0, a) : void 0
                  if (r) {
                    var i,
                      o =
                        null == r || null === (i = r.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (o) {
                      var l = I.ContentState.createFromBlockArray(o, null == r ? void 0 : r.entityMap)
                      return I.EditorState.push(
                        n,
                        I.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), l.getBlockMap()),
                        'insert-fragment',
                      )
                    }
                  }
                  return null
                }),
                h()(s()(e), '_onPastedText', function (t, n, a) {
                  var r = e.props,
                    i = r.multiline,
                    o = r.onChange,
                    l = r.pastedStylesAllowlist
                  if (o) {
                    if (!i) return o(e._removeNewLines(t, a)), 'handled'
                    if (null != l && l.length) {
                      var s = e._removeInvalidStyles(n, a)
                      if (s) return o(s), 'handled'
                    }
                  }
                  return 'not-handled'
                }),
                h()(s()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    i = I.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? r : 27 === t.keyCode ? a : Object(I.getDefaultKeyBinding)(t)
                }),
                h()(s()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                h()(s()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                h()(s()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    a = t.maxNumberOfLines,
                    r = t.multiline,
                    i = t.numberOfLines,
                    o =
                      y.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ]
                  return { minHeight: (r && i ? i : 1) * o, maxHeight: (r && a ? a : 1) * o }
                }),
                e
              )
            }
            return (
              o()(
                n,
                [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props,
                        t = e.onChange,
                        n = e.positionCursorAtBeginning
                      e.positionCursorAtEnd
                        ? this._setFocusToEnd()
                        : n
                        ? null == t || t(this._setFocusToStart())
                        : this.props.autoFocus && this.focus(),
                        R || (this._setDraftJsStyle(), (R = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      T.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        t = this.props,
                        n = t.ariaActiveDescendant,
                        a = t.ariaAutocomplete,
                        r = t.ariaControls,
                        i = t.ariaLabel,
                        o = t.blockRenderMap,
                        l = t.blockRendererFn,
                        s = t.editorState,
                        c = t.handleReturn,
                        d = t.multiline,
                        u = t.onChange,
                        p = t.onFocus,
                        m = t.onKeyDown,
                        f = t.onKeyPress,
                        g = t.onKeyUp,
                        v = t.pastedStylesAllowlist,
                        _ = t.placeholder,
                        w = t.spellCheck,
                        E = t.style,
                        T = t.testID
                      return C.a.createElement(
                        k,
                        {
                          className: d ? void 0 : b,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), E],
                        },
                        C.a.createElement(I.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: i,
                          ariaMultiline: d,
                          blockRenderMap: o,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            h()(e, x.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            h()(e, 'onKeyPress', f),
                            h()(e, 'onKeyUp', g),
                            e),
                          customStyleMap: P(y.a.theme),
                          editorState: s,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: d ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: u,
                          onFocus: p,
                          onKeyDown: m,
                          placeholder: _,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== w,
                          stripPastedStyles: !(d && null != v && v.length),
                          tabIndex: 0,
                          webDriverTestID: T,
                        }),
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromError',
                    value: function () {
                      return {}
                    },
                  },
                ],
              ),
              n
            )
          })(C.a.Component))
      h()(M, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: S.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (M.propTypes = {})
      var P = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    krmn: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        s = n('RuTB'),
        c = n('3XMw'),
        d = n.n(c),
        u = Object(l.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(17), n.e(209)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(s.a, { hasError: e, onRetry: t })
          },
        }),
        p = n.p + 'twemoji_sprite.6d90d9d5.png',
        m = n.p + 'twemoji_sprite_high_res.0b0faef5.png',
        h = n('rHpw'),
        f = n('U+bB'),
        g = n('kLqS'),
        v = n('MWbm'),
        y = h.a.create(function (e) {
          return {
            content: { backgroundColor: e.colors.cellBackground },
            dimensions: {
              height: '400px',
              borderRadius: e.borderRadii.xLarge,
              width: 10 * e.spacesPx.space32,
              overflow: 'hidden',
            },
            hidden: { display: 'none' },
          }
        }),
        b = function (e) {
          var t = e.onSelect,
            n = e.partialRender,
            a = g.a.get() > 1 ? m : p
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              v.a,
              { style: [y.content, y.dimensions] },
              o.a.createElement(u, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: a }),
            ),
            o.a.createElement(f.a, { source: a, style: y.hidden }),
          )
        },
        _ = n('pNJr'),
        w = n('2ZFc'),
        C = n('OiMc'),
        E = n('/yvb'),
        T = d.a.d4a4842d,
        x = o.a.createElement(_.a, null),
        S = d.a.fec16c1c,
        I = { viewType: 'emoji_picker' },
        k = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            l = e.style,
            s = e.textInputRef,
            c = o.a.useState(!0),
            d = r()(c, 2),
            p = d[0],
            m = d[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              u.preload(), w.a.get('emojiPicker2')
            }, 5e3)
            return function () {
              clearTimeout(e)
            }
          }, [])
          return o.a.createElement(
            C.a,
            {
              enableEnterKeyToggle: !0,
              onAnimateComplete: function () {
                return m(!1)
              },
              onDismiss: function () {
                return m(!0)
              },
              onHoverCardUnmount: function () {
                window.requestAnimationFrame(function () {
                  return s && s.focus()
                })
              },
              renderContent: function () {
                return o.a.createElement(b, { onSelect: n, partialRender: p })
              },
              withArrow: !0,
            },
            o.a.createElement(E.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: T,
              behavioralEventContext: I,
              disabled: t,
              hoverLabel: { label: S },
              icon: x,
              onPress: function (e) {
                return a && a(e)
              },
              size: i,
              style: l,
              type: 'brandText',
            }),
          )
        }
      k.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = k
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return u
        })
      n('jQ3i'), n('x4t0')
      var a = n('3XMw'),
        r = n.n(a),
        i = r.a.g34f2c63,
        o = r.a.f70a36d0,
        l = r.a.d17df547,
        s = r.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? s : t ? l : e.isThread ? o : i({ verb: '' })
        },
        d = function (e, t, n) {
          return function () {
            if (n) {
              var a, r
              ;(null === (a = t.state) || void 0 === a || null === (r = a.previousPath) || void 0 === r
                ? void 0
                : r.includes(n)) && '/compose/tweet' === t.pathname
                ? window.scrollTo(0, 0)
                : e.push('/i/communities/'.concat(n), { lockScroll: !0 })
            } else {
              var i,
                o,
                l =
                  (null === (i = t.state) || void 0 === i || null === (o = i.previousPath) || void 0 === o
                    ? void 0
                    : o.includes('/home')) && '/compose/tweet' === t.pathname
              t.pathname.includes('/home') || l ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
            }
          }
        },
        u = function (e) {
          var t = e.isInline,
            n = e.isSelfThreadReply,
            a = e.parentTweetId
          return t ? { pathname: '/compose/tweet', state: { inReplyToStatusId: a, isSelfThreadReply: n } } : void 0
        }
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return u
        }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return v
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        s = n('kIAd'),
        c = n('rHpw')
      function d(e, t) {
        var n,
          a = s.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? o()(o()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function u(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(s.b.WordEnd),
          i = r >= 0 ? n.slice(r) : '',
          o = a.search(s.b.WordBoundary),
          l = i + a.slice(0, o)
        return l.trim() ? { start: r, end: e + o, word: l } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function m(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function h(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          i = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(i))
      }
      var f = Object(l.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(c.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        v = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return V
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        w = n('38/B'),
        C = n('t62R'),
        E = n('/yvb'),
        T = n('piX5'),
        x = n('3XMw'),
        S = n.n(x),
        I = n('tI3i'),
        k = n.n(I),
        R = n('oQhu'),
        M = n('rHpw'),
        P = n('aITJ'),
        L = n('MWbm'),
        D = n('n5fo'),
        O = n('5emT'),
        A = n('Oib4'),
        F = n('WtWS'),
        B = n('ioan'),
        N = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        j = function (e) {
          return e.length
        },
        U = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j
          return t(e)
        },
        H = S.a.de540c32,
        z = S.a.b4abfdb3,
        V = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            s()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              y()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              y()(
                p()(a),
                '_getTextInputStyle',
                Object(R.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              y()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              y()(p()(a), '_calculateLength', function (e) {
                return U(e, a.props.calculateLength)
              }),
              y()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              y()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o = a.props.type,
                  l =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  s =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === l && !0 === s
              }),
              y()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              y()(p()(a), '_handleBlur', function () {
                var e,
                  t = a.props.onBlur,
                  n = (null === (e = a._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t()
              }),
              y()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  i = a._calculateLength(r),
                  o = a._getActualCount(r),
                  l = a._getAdjustedMaxLength()
                void 0 !== l && r.length > l && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              y()(p()(a), '_handleFocus', function () {
                var e = a.props.onFocus
                a.setState({ isFocused: !0 }), e && e()
              }),
              y()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              y()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                P.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              y()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                P.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              y()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              y()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              y()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  i = !!a,
                  o = 'string' == typeof e.value,
                  l = 'string' == typeof t
                k()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  k()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  k()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              y()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              y()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              y()(p()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(i),
                actualCount: j(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              a
            )
          }
          return (
            d()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      a = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      l = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === r && n === o && !!a === !!l && ('string' == typeof i) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      a = e.errorText,
                      r = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      l = this._isFormInvalid()
                    return _.a.createElement(
                      L.a,
                      { style: [K.root, i] },
                      _.a.createElement(
                        L.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            T.a.border,
                            K.textInputFormStyle,
                            l && T.a.invalidBorderColor,
                            o && l && T.a.focusedBorderInvalid,
                            o && !l && T.a.focusedBorderValid,
                            !n && T.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          L.a,
                          { style: K.textInputFormWrapper },
                          _.a.createElement(
                            L.a,
                            { style: K.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        L.a,
                        { style: [K.sidePadding, K.underTextInputForm] },
                        _.a.createElement(
                          L.a,
                          { style: K.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          l && a ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : t,
                      a = this._isLabelLarge()
                    return _.a.createElement(
                      C.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          K.textInputHeaderItem,
                          a && K.placeholderText,
                          !w.a.reducedMotionEnabled && K.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      a =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      i = (e.style, e.type, e.validLength, o()(e, N))
                    return _.a.createElement(
                      L.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        C.b,
                        { size: 'headline1', style: W.wrapper },
                        _.a.createElement(
                          B.a,
                          r()({}, i, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      a && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      a = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? _.a.createElement(
                          L.a,
                          { style: K.passwordVisibilityIconContainer },
                          _.a.createElement(E.a, {
                            accessibilityLabel: a ? z : H,
                            focusable: !0,
                            hoverLabel: { label: a ? z : H },
                            icon: a ? _.a.createElement(D.a, null) : _.a.createElement(O.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return _.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        C.b,
                        { color: 'gray700', size: 'subtext2', style: K.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return _.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        C.b,
                        { color: 'red500', size: 'subtext2', style: K.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      a = t && S.a.ia24dc8c(t),
                      r = S.a.ia24dc8c(e)
                    return _.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite', style: [K.textInputHeaderItem, K.displayCount] },
                      _.a.createElement(
                        C.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(r, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [K.icon, t && K.focusedIcon]
                    return e && _.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(A.a, { style: [K.validationIcon, T.a.invalidColor] })
                      : _.a.createElement(F.a, { style: [K.validationIcon, T.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.calculateLength,
                      a = e.value,
                      r = 'string' == typeof a ? U(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component)
      y()(V, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (V.propTypes = {})
      var W = M.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        K = M.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    pKoL: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        v = n('HPNB'),
        y = n('9HgX'),
        b = n('3XMw'),
        _ = n.n(b),
        w = n('LCtV'),
        C = n('eyty'),
        E = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        T = n('RuTB'),
        x = Object(E.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(8), n.e(178)])
              .then(n.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return g.a.createElement(T.a, { hasError: e, onRetry: t })
          },
        }),
        S = n('yiKp'),
        I = n.n(S),
        k = n('m3Bd'),
        R = n.n(k),
        M = (n('z84I'), n('k/Ka')),
        P = n('eXeu'),
        L = n('iOGT'),
        D = ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants'],
        O = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_setVideoRef', function (t) {
                var n = e.props.getVideoRef
                n && n(t)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.dataSaverMode,
                    a = (e.getVideoRef, e.style),
                    r = e.variants,
                    i = R()(e, D),
                    o = Object(L.b)(r, n ? L.a.MEDIUM : L.a.HIGH) || [],
                    l = Object(P.f)(
                      o.map(function (e) {
                        return { src: e.url, type: e.content_type }
                      }),
                    )
                  return Object(M.a)(
                    'video',
                    I()(
                      I()({}, i),
                      {},
                      {
                        children: [
                          l.map(function (e) {
                            return g.a.createElement('source', { key: e.src, src: e.src, type: e.type })
                          }),
                          t,
                        ],
                        ref: this._setVideoRef,
                        style: a,
                      },
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(O, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var A = n('62wY'),
        F = n('sjK1'),
        B = n('v6aA'),
        N = n('cHvH'),
        j = n('mXq/'),
        U = n('/yvb'),
        H = n('a6qo'),
        z = n('rHpw'),
        V = n('hOZg'),
        W = n('GCOQ'),
        K = n('tuke'),
        G = n('U+bB'),
        q = n('MWbm'),
        X = n('+/sI'),
        Q = _.a.gd80afba,
        Y = _.a.j322caee,
        J = _.a.abd845fd,
        Z = _.a.df1b0707,
        $ = _.a.cd959e5b,
        ee = _.a.e68b09b4,
        te = _.a.add55c97,
        ne = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              h()(s()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              h()(s()(e), '_handleMediaPreviewLayout', function (t) {
                var n = e.props,
                  a = n.mediaItem,
                  r = n.resizeIfNeeded,
                  i = a.mediaFile || a.externalMediaDetails
                if (i) {
                  var o = t.nativeEvent.layout,
                    l = o.height,
                    s = o.width,
                    c = i.height,
                    d = i.width / c
                  Math.abs(d - s / l) > 0.05 &&
                    e._mediaContainer &&
                    ('width' === r
                      ? e._mediaContainer.setNativeProps({ style: { width: l * d } })
                      : 'height' === r && e._mediaContainer.setNativeProps({ style: { height: s / d } }))
                }
              }),
              h()(s()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              h()(s()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              h()(s()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              h()(s()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              h()(s()(e), 'playVideo', function () {
                if (e._video) {
                  var t = e._video.play()
                  void 0 !== t &&
                    t
                      .then(function (t) {
                        e._handleVideoOnPlay()
                      })
                      .catch()
                }
              }),
              h()(s()(e), 'pauseVideo', function () {
                e._video && (e._video.pause(), e._handleVideoOnPause())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    a = n.accessibilityLabel,
                    r = n.accessibilityRole,
                    i = n.enableGif,
                    o = n.mediaItem,
                    l = n.onEdit,
                    s = n.onEditSensitiveWarning,
                    c = n.onRemove,
                    d = n.style,
                    u = n.withAltTextLabel,
                    p = n.withCloseButton,
                    m = n.withEditButton,
                    h = n.withEditIcon,
                    f = n.withEditSensitiveWarningButton,
                    b = this.state.playGif,
                    _ = o.externalMediaDetails && o.externalMediaDetails.mediaType === y.a,
                    w = _ || (i && o.mediaFile && o.mediaFile.isGif),
                    C = !(null === (e = o.mediaFile) || void 0 === e || !e.isVideo)
                  return g.a.createElement(N.a, null, function (e) {
                    var n = e.windowWidth,
                      i = void 0 !== h ? h : !v.a.isTwoColumnLayout(n)
                    return g.a.createElement(
                      q.a,
                      {
                        accessibilityLabel: a || te,
                        accessibilityRole: r,
                        onLayout: t._handleMediaPreviewLayout,
                        ref: t._setMediaContainerRef,
                        style: [d, ae.cursor, _ && ae.gifPlayButton],
                      },
                      t._renderPreview(),
                      _ &&
                        !b &&
                        g.a.createElement(j.a, { accessibilityLabel: Z, onPress: t._handleGifClick, size: 'small' }),
                      p
                        ? g.a.createElement(U.a, {
                            accessibilityLabel: $,
                            hoverLabel: { label: ee },
                            icon: g.a.createElement(V.a, null),
                            onPress: c,
                            size: 'small',
                            style: ae.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      w ? g.a.createElement(X.c, { type: X.a }) : null,
                      u && !C ? g.a.createElement(H.a, { align: 'left', altLabel: a }) : null,
                      m
                        ? g.a.createElement(
                            q.a,
                            { style: [ae.editMedia, C ? ae.editVideo : ae.editImage] },
                            f
                              ? g.a.createElement(U.a, {
                                  accessibilityLabel: Y,
                                  icon: g.a.createElement(W.a, { style: ae.editSensitiveWarningIcon }),
                                  onPress: s,
                                  size: 'small',
                                  style: ae.editSensitiveWarningButton,
                                  type: 'onMediaDominantColorFilled',
                                })
                              : null,
                            g.a.createElement(
                              U.a,
                              {
                                accessibilityLabel: Q,
                                icon: i ? g.a.createElement(K.a, null) : void 0,
                                onPress: l,
                                size: i ? 'xSmall' : 'small',
                                type: 'onMediaDominantColorFilled',
                              },
                              i ? void 0 : J,
                            ),
                          )
                        : null,
                    )
                  })
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e,
                    t = this.props.mediaItem
                  if (t.externalMediaDetails) {
                    var n = t.externalMediaDetails.previewUrl,
                      a = t.externalMediaDetails.stillMediaUrl
                    return this._renderGifPreview(n, a)
                  }
                  return null !== (e = t.mediaFile) && void 0 !== e && e.isVideo
                    ? this._renderVideoPreview(t.mediaFile.type, t.mediaFile.url, t.id, t.mediaFile)
                    : g.a.createElement(q.a, { style: z.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var n = { uri: this.state.playGif ? e : t }
                  return g.a.createElement(
                    q.a,
                    { onClick: this._handleGifClick, style: z.a.absoluteFill },
                    g.a.createElement(G.a, { resizeMode: 'cover', source: n, style: ae.video }),
                  )
                },
              },
              {
                key: '_renderImagePreview',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    a = e.imageResizeMode,
                    r = e.mediaItem,
                    i = e.onClick
                  return g.a.createElement(w.b, {
                    borderRadius: t,
                    enableGif: n,
                    mediaItem: r,
                    onClick: i,
                    resizeMode: a,
                  })
                },
              },
              {
                key: '_renderVideoPreview',
                value: function (e, t, n, a) {
                  var r
                  this._configurableVideoPlayerEnabled = this.context.featureSwitches.isTrue(
                    'responsive_web_composer_configurable_video_player_enabled',
                  )
                  var i = this.props.mediaItem,
                    o = null === (r = i.mediaMetadata) || void 0 === r ? void 0 : r.subtitles
                  if (this._configurableVideoPlayerEnabled && a instanceof F.c) {
                    var l = Object(C.h)(a.fileHandle) ? [{ src: t, type: e }] : [],
                      s = ''.concat(n)
                    return g.a.createElement(x, {
                      mediaFile: a,
                      mediaId: s,
                      subtitles: o,
                      trimData: null == i ? void 0 : i.trimData,
                      variants: l,
                    })
                  }
                  var c,
                    d = Object(C.h)(a.fileHandle) ? [{ content_type: e, url: t }] : [],
                    u =
                      (null == o || null === (c = o.upload) || void 0 === c ? void 0 : c.mediaFile) instanceof A.b
                        ? o.upload.mediaFile.vtt
                        : void 0
                  return g.a.createElement(
                    O,
                    {
                      autoPlay: !1,
                      controls: !0,
                      getVideoRef: this._setVideoRef,
                      loop: !0,
                      muted: !0,
                      onPause: this._handleVideoOnPause,
                      onPlay: this._handleVideoOnPlay,
                      playsInline: !0,
                      poster: a instanceof F.c ? a.thumbnail : '',
                      style: ae.video,
                      variants: d,
                    },
                    o && u
                      ? g.a.createElement('track', {
                          default: !0,
                          kind: 'subtitles',
                          label: o.displayName,
                          src: u,
                          srcLang: o.lang,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(ne, 'contextType', B.a),
        h()(ne, 'defaultProps', {
          enableGif: !0,
          withCloseButton: !0,
          withAltTextLabel: !1,
          withEditButton: !1,
          withEditSensitiveWarningButton: !1,
        })
      var ae = z.a.create(function (e) {
        return {
          close: { position: 'absolute', left: e.spaces.space4, top: e.spaces.space4 },
          cursor: { cursor: 'pointer' },
          editSensitiveWarningIcon: { color: e.colors.primary },
          editMedia: { display: 'flex', flexDirection: 'row', position: 'absolute', right: e.spaces.space4 },
          editImage: { bottom: e.spaces.space4 },
          editVideo: { top: e.spaces.space4 },
          editSensitiveWarningButton: { marginRight: e.spaces.space8 },
          gifPlayButton: { alignItems: 'center', justifyContent: 'center' },
          video: { height: '100%', width: '100%' },
        }
      })
      t.a = ne
    },
    pcjM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Compose', function () {
          return We
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        y = n.n(v),
        b = n('HPNB'),
        _ = n('h5NW'),
        w = n('m3Bd'),
        C = n.n(w),
        E = (n('vrRf'), n('z84I'), n('LW0h'), n('7x/C'), n('5BYb'), n('xVN5')),
        T = n('pidX'),
        x = n('AspN'),
        S = n('XOJV'),
        I = n('G6rE'),
        k = n('xZGM'),
        R = n('0KEI'),
        M = n('hqKg'),
        P = n('oEGd'),
        L = n('rU/Q'),
        D = n('XpKj'),
        O = ['cardUrl', 'mediaIds'],
        A = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        F = Object(M.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          I.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        B = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        N = A(function (e) {
          return e.inReplyToStatusId
        }),
        j = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        U = A(function (e) {
          return e.defaultText
        }),
        H = A(function (e) {
          return e.quotedStatus
        }),
        z = A(function (e) {
          return e.isSelfThreadReply
        }),
        V = A(function (e) {
          return e.hideUnsentTweetsButton
        }),
        W = A(function (e) {
          return e.headingSubtitle
        }),
        K = A(function (e) {
          return e.headingTitle
        }),
        G = A(function (e) {
          return e.selectedCommunityId
        }),
        q = Object(M.createSelector)(
          function (e) {
            return E.k(e, '')
          },
          function (e, t) {
            var n = U(e, t)
            return Object(T.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : H(e, t)
          },
          x.j,
          j,
          function (e, t, n, a, i) {
            return e.map(function (e, o) {
              return r()(
                r()({}, ((l = e).cardUrl, l.mediaIds, C()(l, O))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === o ? n : void 0,
                  text: 0 === o && t && !i ? t : e.text,
                },
              )
              var l
            })
          },
        ),
        X = Object(M.createStructuredSelector)({
          activeUser: F,
          composerData: q,
          draftTweets: L.e,
          inReplyToStatus: function (e, t) {
            var n = B(0, t) || N(e, t)
            return n ? S.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: B,
          isIntentRoute: j,
          isSelfThreadReply: z,
          isSending: function (e) {
            return E.m(e, '')
          },
          scheduledTweets: D.f,
          sendingProgress: E.o,
          composeSemanticCoreId: A(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: V,
          subtitle: W,
          title: K,
          selectedCommunityIdFromLocationState: G,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(k.D)(e, k.e)
          },
        }),
        Q = {
          createDraftTweetApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(L.d),
          createScheduledTweetApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(D.d),
          fetchScheduledTweets: D.c,
          fetchDraftTweets: L.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(k.z)(k.e)
          },
          updateAudienceControlsValue: E.t,
        },
        Y = Object(P.f)(X, Q),
        J = n('RgK2'),
        Z = n.n(J),
        $ = n('jHSc'),
        ee = n('lsKC'),
        te = n('3XMw'),
        ne = n.n(te),
        ae = n('iFPY'),
        re = n('QbaN'),
        ie = n('v6aA'),
        oe = n('rxPX'),
        le = function (e) {
          return Object(k.D)(e, k.r)
        },
        se = Object(oe.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: le }
          })
          .propsFromActions(function () {
            return { addFlag: k.z }
          }),
        ce = n('Lsrn'),
        de = n('k/Ka'),
        ue = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(de.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ce.a.root, e.style],
                viewBox: '0 0 32 32',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M18.672 15.25H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-5.297H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4.304 10.594h-6.29c-.414 0-.75.336-.75.75s.336.75.75.75h6.29c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              y.a.createElement('path', {
                d: 'M29.284 15.25h-4.548V5.736C24.736 4.228 23.51 3 22 3H4.75C3.24 3 2.014 4.228 2.014 5.736v20.527C2.014 27.773 3.24 29 4.75 29h21.885c1.874 0 3.4-1.524 3.4-3.398V16c0-.414-.337-.75-.75-.75zM3.514 26.264V5.736c0-.68.554-1.236 1.236-1.236H22c.682 0 1.236.555 1.236 1.236V25.6c0 .704.214 1.357.58 1.9H4.75c-.682 0-1.236-.555-1.236-1.236zm23.12 1.236c-1.046 0-1.897-.852-1.897-1.898V16.75h3.798v8.852c0 1.046-.853 1.898-1.9 1.898z',
              }),
            ),
          )
        }
      ue.metadata = { width: 32, height: 32 }
      var pe = ue,
        me = n('MWbm'),
        he = n('4zmP'),
        fe = n('rHpw'),
        ge = ne.a.ed33a3b6,
        ve = ne.a.d5bda8b3,
        ye = ne.a.i859a9d3,
        be = fe.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        _e = se(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = y.a.useContext(ie.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? y.a.createElement(
                me.a,
                { style: be.revueCallout },
                y.a.createElement(he.a, {
                  Icon: pe,
                  action: {
                    label: ye,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: ge,
                  onClose: function () {
                    t(k.r)
                  },
                  text: ve,
                  withCloseButton: !0,
                }),
              )
            : null
        }),
        we = n('7nmT'),
        Ce = n.n(we),
        Ee = n('Dtul'),
        Te = n('zh9S'),
        xe = n('7JQg'),
        Se = 'tweetButton',
        Ie = n('/yvb'),
        ke = n('JYMr'),
        Re = n('cHvH'),
        Me = n('feu+'),
        Pe = n('7N4s'),
        Le = n('oQhu'),
        De = n('3A2y'),
        Oe = ne.a.b8f0483e,
        Ae = ne.a.a133d13e,
        Fe = ne.a.a1183237,
        Be = ne.a.da2663f5,
        Ne = ne.a.j24c37b2,
        je = 'compose',
        Ue = { page: je },
        He = { page: je, section: 'reply' },
        ze = { context: 'compose_intent_logged_in' },
        Ve = { viewType: 'send_tweet' },
        We = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(d()(e), 'state', { isValid: !1 }),
              g()(d()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              g()(
                d()(e),
                '_handleAppBarHeight',
                Object(Le.a)(function () {
                  var t = Ce.a.findDOMNode(e._appBarRef)
                  return (t && t instanceof window.Element && t.getBoundingClientRect().height) || 50
                }),
              ),
              g()(d()(e), '_handleBackClick', function () {
                e._composeContainerRef && e._composeContainerRef.handleDismissComposer()
              }),
              g()(d()(e), '_handleCloseComposer', function () {
                e._appBarRef && e._appBarRef.goBack()
              }),
              g()(d()(e), '_handleSendTweet', function () {
                e._composeContainerRef && e._composeContainerRef.handleTweetOrRetweet()
              }),
              g()(d()(e), '_setValidity', function (t) {
                t !== e.state.isValid && e.setState({ isValid: t })
              }),
              g()(d()(e), '_getScribeNamespace', function () {
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? He : Ue
              }),
              g()(d()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? ze : Z.a
              }),
              g()(d()(e), '_renderAppBarRightControl', function () {
                var t = e.state.isValid,
                  n = e.context.isModal,
                  a = e.props,
                  r = a.activeUser,
                  i = a.inReplyToStatus,
                  o = a.isSelfThreadReply,
                  l = a.isSending,
                  s = !t || l || !r
                return n
                  ? void 0
                  : y.a.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: Ve,
                        disabled: s,
                        onPress: e._handleSendTweet,
                        size: 'small',
                        testID: Se,
                        type: 'brandFilled',
                      },
                      Object(ee.b)({
                        inReplyToStatus: !!i,
                        isSelfThreadReply: !!o,
                        isQuoteTweet: !!e.isQuoteTweet,
                        isRetweet: !!e.isRetweet,
                        isScheduled: !!e.isScheduled,
                        isThread: e.isThread,
                      }),
                    )
              }),
              g()(d()(e), '_renderHeaderWithProgressBar', function (t) {
                var n = e.context.isModal,
                  a = e.props,
                  r = a.isSending,
                  i = a.sendingProgress
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(ke.a, {
                    progress: r ? Math.max(i, 0.02) : 0,
                    style: [Ke.progressBar, n && Ke.progressBarModal],
                  }),
                  t,
                )
              }),
              g()(d()(e), '_renderUnsentHeading', function () {
                var t = e.props,
                  n = t.draftTweets,
                  a = t.hideUnsentTweetsButton,
                  r = t.scheduledTweets
                if (!a && (r.length > 0 || n.length > 0))
                  return y.a.createElement(
                    me.a,
                    { style: Ke.unsentHeadingContainer },
                    y.a.createElement(Ie.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Ae),
                  )
              }),
              g()(d()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(Te.c)(r()(r()({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
                  t.push('/compose/tweet/unsent/drafts')
              }),
              g()(d()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              g()(d()(e), '_handleComposeContainerRef', function (t) {
                e._composeContainerRef = t
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.activeUser,
                    n = e.createDraftTweetApiErrorHandler,
                    a = e.createScheduledTweetApiErrorHandler,
                    r = e.fetchDraftTweets,
                    i = e.fetchScheduledTweets,
                    o = e.history,
                    l = e.inReplyToStatus,
                    s = e.location,
                    c = e.selectedCommunityIdFromLocationState,
                    d = e.updateAudienceControlsValue
                  ;(this._unlockReload = Ee.a.acquire()),
                    o.setModalRouteBreakpoint(o.location),
                    t && (i().catch(a()), r().catch(n())),
                    c &&
                      (d({
                        _type: 'community_members',
                        communityIdValue: c,
                        conversationControlsValue: 'community_members',
                      }),
                      o.replace({ pathname: s.pathname, state: Object(De.a)(s.state || {}, 'selectedCommunityId') })),
                    null != l && l.exclusivity_info
                      ? d({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != l && l.community_id_str
                      ? d({
                          _type: 'community_members',
                          communityIdValue: l.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != l &&
                        l.trusted_friends_info &&
                        d({
                          _type: 'trusted_friends_tweet',
                          conversationControlsValue: 'trusted_friends_tweet',
                          trustedFriendsValue: { trusted_friends_list_id: '1482057446797373440' },
                        })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unlockReload()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.activeUser,
                    a = t.composeHeader,
                    r = t.composeSemanticCoreId,
                    i = t.composerData,
                    o = t.customizePropsForSingleComposerItem,
                    l = t.history,
                    s = t.isIntentRoute,
                    c = t.location,
                    d = t.quotedStatus,
                    u = t.richTextInputContext,
                    p = t.subtitle,
                    m = t.title,
                    h = t.typeaheadWrapper,
                    f = s && !n,
                    g = this.context.isModal
                  return y.a.createElement(
                    xe.c,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    y.a.createElement(Re.a, null, function (t) {
                      var s = t.windowWidth,
                        v = b.a.shouldRenderAsModal(s),
                        w = (f || e.showCommunityAudienceEducation) && v,
                        C = (null == i ? void 0 : i.length) > 1
                      return y.a.createElement(
                        y.a.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? y.a.createElement(Me.a, {
                              actionLabel: Ne,
                              graphicDisplayMode: 'none',
                              headline: Fe,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: Be,
                              withCloseButton: !1,
                            })
                          : null,
                        f && y.a.createElement(ae.a, { history: l, location: c }),
                        !w &&
                          y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(
                              $.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: je,
                                documentTitle: Oe,
                                hideBackButton: !1,
                                history: l,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: p,
                                title: m,
                              },
                              y.a.createElement(_.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
                                customizePropsForSingleComposerItem: o,
                                history: l,
                                isModal: g,
                                location: c,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: d,
                                richTextInputContext: u,
                                setValidity: e._setValidity,
                                typeaheadWrapper: h,
                                windowWidth: s,
                              }),
                            ),
                            C ? y.a.createElement(_e, null) : null,
                          ),
                      )
                    }),
                  )
                },
              },
              {
                key: 'showCommunityAudienceEducation',
                get: function () {
                  var e = this.props,
                    t = e.inReplyToStatus,
                    n = e.selectedCommunityIdFromLocationState,
                    a = e.shouldShowCommunityAudienceEducation,
                    r = !!((null != t && t.community_id_str) || n)
                  return a && r
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length
                  return !this.isThread && e[0].quotedStatus && '' === e[0].text && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData
                  return !this.isThread && !!e[0].quotedStatus
                },
              },
              {
                key: 'isScheduled',
                get: function () {
                  var e = this.props.composerData
                  return Object(re.h)(e[0].scheduledFor)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(We, 'contextType', Pe.b)
      var Ke = fe.a.create(function (e) {
        return {
          progressBar: {
            position: 'fixed',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
            zIndex: e.componentZIndices.appBarZIndex + 1,
          },
          progressBarModal: { position: 'absolute' },
          unsentHeadingContainer: { marginLeft: 'auto' },
        }
      })
      t.default = Y(We)
    },
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var a = n('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = a
    },
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      })
      var a = n('ddV6'),
        r = n.n(a),
        i =
          (n('z84I'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('KqXw'),
          n('Ysgh'),
          n('LW0h'),
          n('2G9S'),
          n('3XMw')),
        o = n.n(i),
        l = n('3A2y'),
        s = o.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          i = r()(a, 6),
          o = i[0],
          l = i[1],
          d = i[2],
          u = i[3],
          p = i[4],
          m = i[5],
          h = [
            o,
            l && '@'.concat(l.toString()),
            d,
            u,
            p &&
              p
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            m && s({ viaScreenName: m }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var d = function (e) {
        return Object(l.a)(e, c)
      }
    },
    qbku: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('m3Bd'),
        s = n.n(l),
        c = (n('hBvt'), n('ERkP')),
        d = n.n(c),
        u = n('rxPX'),
        p = Object(u.a)().withAnalytics({ element: 'social_proof' }),
        m = n('aTAq'),
        h = n('Nqmc'),
        f = n('x5Pi'),
        g = ['analytics', 'link'],
        v = p(function (e) {
          var t = d.a.useContext(f.b)
          if (t && e.contextType === t) return null
          var n = e.analytics,
            a = e.link,
            i = s()(e, g),
            l =
              a && !Object(m.a)(a)
                ? o()(
                    o()({}, a),
                    {},
                    {
                      state: o()(
                        o()({}, a.state),
                        {},
                        {
                          referringScribeNamespace: o()(o()({}, n.contextualScribeNamespace), {}, { action: 'click' }),
                        },
                      ),
                    },
                  )
                : a
          return d.a.createElement(
            h.a,
            r()({}, i, {
              link: l,
              onClick: function () {
                var t = e.analytics,
                  n = e.onClick
                t.scribeAction('click'), n && n()
              },
            }),
          )
        })
      t.a = v
    },
    rFBM: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        g = n.n(f),
        v = n('rHpw'),
        y = n('k/Ka'),
        b = n('MWbm'),
        _ = function (e) {
          return Object(y.a)('div', e)
        },
        w = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_dragEnterCount', 0),
              h()(s()(e), 'state', { active: !1 }),
              h()(s()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              h()(s()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              h()(s()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              h()(s()(e), '_handleDragOver', function (e) {
                e.preventDefault()
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.allowDragDrop,
                    n = e.children,
                    a = e.style,
                    r = this.state.active,
                    i = t ? C.dragBorderValid : C.dragBorderInvalid
                  return g.a.createElement(
                    _,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [C.root, a, r && i],
                    },
                    g.a.createElement(b.a, { style: C.inner }, 'function' == typeof n ? n(r) : n),
                  )
                },
              },
              {
                key: '_updateDragCount',
                value: function (e) {
                  ;(this._dragEnterCount = e),
                    0 === this._dragEnterCount
                      ? this.setState({ active: !1 })
                      : this._dragEnterCount > 0 && this.setState({ active: !0 })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(w, 'defaultProps', { allowDragDrop: !0 })
      var C = v.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = w
    },
    rziq: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      var a = 'send-tweet',
        r = 'dismiss-composer'
    },
    sCk0: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('z84I'), n('7x/C'), n('JtPf'), n('DfhM'), n('ERkP')),
        g = n.n(f),
        v = n('zfvc'),
        y = n('RhWx'),
        b = n.n(y),
        _ = (n('yH/f'), n('M+/F'), n('zrc3')),
        w = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', {
                isAnimating: !1,
                renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: w.static, child: e }
                }),
              }),
              h()(s()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  n = e.props,
                  a = n.children,
                  r = n.onAnimateComplete
                t &&
                  (r && r(),
                  e.setState({
                    renderChildren: g.a.Children.toArray(a).map(function (e) {
                      return { status: w.static, child: e }
                    }),
                    isAnimating: !1,
                  }))
              }),
              e
            )
          }
          return (
            o()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return this.state.renderChildren.map(function (t) {
                      var n = t.child,
                        a = t.status
                      return g.a.createElement(
                        v.a,
                        {
                          animateMount: a !== w.static,
                          key: n.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: a !== w.out,
                        },
                        n,
                      )
                    })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = (function (e, t) {
                      for (
                        var n = 0,
                          a = 0,
                          r = [],
                          i = function () {
                            if (n >= t.length)
                              return (
                                r.push.apply(
                                  r,
                                  b()(
                                    e.slice(a).map(function (e) {
                                      return { child: e, status: w.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var i = t[n],
                              o = e[a]
                            if (i.key === o.key) r.push({ child: i, status: w.static }), (n += 1)
                            else {
                              var l = Object(_.a)(t, function (e) {
                                return e.key === o.key
                              })
                              l >= 0
                                ? (r.push.apply(
                                    r,
                                    b()(
                                      t.slice(n, l).map(function (e) {
                                        return { child: e, status: w.in }
                                      }),
                                    ).concat([{ child: t[l], status: w.static }]),
                                  ),
                                  (n = l + 1))
                                : r.push({ child: o, status: w.out })
                            }
                            a += 1
                          };
                        a < e.length && 'break' !== i();

                      );
                      return (
                        n < t.length &&
                          r.push.apply(
                            r,
                            b()(
                              t.slice(n).map(function (e) {
                                return { child: e, status: w.in }
                              }),
                            ),
                          ),
                        r
                      )
                    })(
                      t.renderChildren.map(function (e) {
                        return e.child
                      }),
                      g.a.Children.toArray(e.children),
                    )
                    return {
                      renderChildren: n,
                      isAnimating: !n.every(function (e) {
                        return e.status === w.static
                      }),
                    }
                  },
                },
              ],
            ),
            n
          )
        })(g.a.Component)
      t.a = C
    },
    sUoZ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    tuke: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M21.592 5.576c.877-.967.882-2.298.006-3.174-.877-.877-2.208-.87-3.174.006 0 0-.003 0-.004.002l-.006.006-.005.004s-.002 0-.002.002L8.398 11.27c-1.716-.214-3.424.31-4.534 1.42-3.872 3.874-1.523 9.616-1.422 9.858.1.24.32.41.577.45.037.007.075.01.113.01.218 0 .428-.095.57-.265 1.83-2.15 3.043-2.023 4.328-1.89 1.164.122 2.477.258 3.834-1.282.975-1.106 1.302-2.585.922-4.03l8.792-9.948h.002l.004-.006.006-.006.002-.004zm-1.055-2.113c.305.305.28.74-.06 1.11-.003.003-.004.007-.006.01 0 0-.003 0-.004.003l-5.662 6.406-1.796-1.796 6.406-5.662c.002 0 .002-.003.004-.005.002-.003.006-.004.008-.006.37-.34.807-.365 1.11-.06zm-8.62 10.797L9.74 12.084l2.142-1.894 1.927 1.927-1.894 2.143zm-1.178 4.32c-.848.96-1.488.895-2.552.78-1.27-.13-2.808-.293-4.722 1.463-.415-1.673-.784-4.83 1.457-7.072.807-.805 2.086-1.168 3.377-.983l2.977 2.976c.333 1.03.15 2.057-.538 2.836z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    ude7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('7x/C'), n('JtPf')
      var a = n('A0bJ'),
        r = n('hJBK'),
        i = n('1auM'),
        o = 1,
        l = 2,
        s = 3,
        c = function (e) {
          if (Object(i.b)(e)) {
            if (e.isGif) {
              var t = e.height,
                n = e.img,
                c = e.orientation,
                d = e.width
              return Object(r.b)(n, d, t, c).then(
                function (e) {
                  return Object(r.a)(e)
                },
                function (e) {
                  throw new a.a('Gif preview could not be generated', s)
                },
              )
            }
            var u = new a.a('The provided image must be a gif', l)
            return Promise.reject(u)
          }
          var p = new a.a('The provided file is not a valid image', o)
          return Promise.reject(p)
        }
    },
    w3n3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/yvb'),
        o = n('3XMw'),
        l = n.n(o),
        s = n('3rWK'),
        c = n('Irs7'),
        d = l.a.a4993fa1,
        u = r.a.createElement(s.a, null),
        p = l.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          o = e.gifSearchKeySource,
          l = e.history,
          s = e.onPress,
          h = e.style,
          f = e.testID,
          g = Object(c.b)(),
          v = r.a.useCallback(
            function () {
              s && s(),
                g.scribe({ element: 'found_media_button', action: 'click' }),
                l.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, g, o, l, s],
          )
        return r.a.createElement(i.a, {
          accessibilityLabel: d,
          behavioralEventContext: m,
          disabled: !a,
          hoverLabel: { label: p },
          icon: u,
          onPress: v,
          size: 'medium',
          style: h,
          testID: f,
          type: 'brandText',
        })
      }
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'c', function () {
          return v
        }),
        n.d(t, 'd', function () {
          return y
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('KEM+'),
        o = n.n(i),
        l =
          (n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('ho0z'),
          n('jQ3i'),
          n('x4t0'),
          n('LW0h'),
          n('2G9S'),
          n('kFen'),
          n('qd3W'),
          n('z84I'),
          n('5BYb'),
          n('DfhM'),
          n('KqXw'),
          n('Ysgh'),
          n('hBpG'),
          n('oEoC')),
        s = n('1auM'),
        c = n('kIAd'),
        d = n('VAyw'),
        u = n('/Ikv'),
        p = n('s1N3'),
        m = n('lnti'),
        h = function (e) {
          var t,
            n = e.excludeReplyUser,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            l = a.retweeted_status,
            s = l || a,
            c = s.entities,
            u = s.unmentioned_user_ids,
            h = s.user,
            g = l ? l.user : {},
            v = l ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            b = d.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            _ = f(l || a) || {},
            w = ((t = {}), o()(t, g.id_str, g), o()(t, v.id_str, v), o()(t, h.id_str, h), o()(t, _.id_str, _), t)
          y.forEach(function (e) {
            w[e.id_str] = e
          }),
            b.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              w[a] = { id_str: a, name: t, screen_name: n }
            })
          var C = function (e) {
              var t = null == u ? void 0 : u.includes(e.id_str),
                n = e.id_str === h.id_str
              return !t || n ? [e.id_str] : []
            },
            E = Object(p.a)(
              Object(m.a)(
                [].concat(
                  r()(C(g)),
                  r()(C(v)),
                  [h.id_str],
                  r()(
                    y.flatMap(function (e) {
                      return C(e)
                    }),
                  ),
                  r()(
                    b.map(function (e) {
                      return e.user_id
                    }),
                  ),
                ),
              ),
            ).filter(function (e) {
              return e !== i
            }),
            T = i && h.id_str === i ? [i].concat(r()(E)) : E
          return (
            n &&
              (T = T.filter(function (e) {
                return e !== h.id_str
              })),
            T.map(function (e) {
              return w[e]
            })
          )
        },
        f = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var a = u.a.getBindingValue(t.binding_values, 'site')
            a && t.users && (n = t.users[a.id_str])
          }
          return n
        },
        g = function (e) {
          var t = e.maxNumberOfPhotos
          return function (e) {
            if (0 === e.length) return !0
            var n = e.some(function (e) {
                return !!e.externalMediaDetails
              }),
              a =
                !n &&
                e.some(function (e) {
                  return e.mediaFile && e.mediaFile.isGif
                }),
              r = e.some(function (e) {
                return e.mediaFile && !(e.mediaFile instanceof s.a) && e.mediaFile.isVideo
              })
            if (a || n || r) return 1 === e.length
            var i = e.length <= t,
              o = e.every(function (e) {
                return e.mediaFile && e.mediaFile.isImage
              })
            return i && o
          }
        },
        v = g({ maxNumberOfPhotos: 4 }),
        y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.split(c.b.WordBoundary)
          return (
            t && n.pop(),
            !!n.find(function (e) {
              var t = Object(l.e)(e, 'compose')
              return t && 'users' === t.result_type
            })
          )
        }
    },
    x8Sc: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'InlineComposeContainer', function () {
          return d
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('h5NW'),
        o = n('MWbm'),
        l = n('7N4s'),
        s = n('cHvH'),
        c = n('rHpw'),
        d = function (e) {
          var t = e.history,
            n = e.location,
            a = e.parentTweetId,
            c = e.replyPressToggle,
            d = e.richTextInputContext,
            p = e.typeaheadWrapper,
            m = r.a.useContext(l.b).isModal
          return r.a.createElement(s.a, null, function (e) {
            var l = e.windowWidth
            return r.a.createElement(
              o.a,
              { style: u.root },
              r.a.createElement(i.a, {
                history: t,
                isInline: !0,
                isModal: m,
                location: n,
                parentTweetId: a,
                replyPressToggle: c,
                richTextInputContext: d,
                typeaheadWrapper: p,
                windowWidth: l,
              }),
            )
          })
        },
        u = c.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, zIndex: 1 } }
        })
      t.default = d
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('WOwf'),
        o = n('3XMw'),
        l = n.n(o),
        s = n('k6Ei'),
        c = n('rHpw'),
        d = n('+/1j'),
        u = n('MWbm'),
        p = l.a.c2fc878c,
        m = l.a.db11b27f,
        h = function (e) {
          return e
        },
        f = c.a.create(function (e) {
          var t = e.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30 },
            center: { alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
            hide: { opacity: 0 },
            text: { fontSize: 13, lineHeight: 0.8, minWidth: 16, textAlign: 'center' },
            gray700: { color: t.gray700 },
            red500: { color: t.red500 },
          }
        })
      t.a = function (e) {
        var t = e.count,
          n = e.maxCount,
          a = e.formatNumber,
          o = void 0 === a ? h : a,
          l = e.warningCount,
          g = n - t,
          v = g >= 0 ? m({ count: o(g) }) : p({ count: o(t - n) }),
          y =
            t >= l
              ? r.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  v,
                )
              : null,
          b = Object(i.a)(g, n),
          _ = t >= n ? 'red500' : t >= l ? 'yellow500' : 'primary',
          w = r.a.createElement(s.a, {
            color: _,
            progress: b,
            size: t >= l ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          C = t >= l ? r.a.createElement(d.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, o(g)) : null
        return r.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          w,
          r.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, C),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ddV6'),
        s = n.n(l),
        c = n('ERkP'),
        d = n.n(c),
        u = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        p = n('3XMw'),
        m = n.n(p),
        h = n('MWbm'),
        f = n('t62R'),
        g = n('CKsB'),
        v = n('/yvb'),
        y = n('rHpw'),
        b = n('Zg3A'),
        _ = n('yiKp'),
        w = n.n(_),
        C = n('Lsrn'),
        E = n('k/Ka'),
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            d.a.createElement(
              'g',
              null,
              d.a.createElement('path', {
                d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
              }),
              d.a.createElement('path', {
                d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
              }),
            ),
          )
        }
      T.metadata = { width: 24, height: 24 }
      var x = T,
        S = n('boUI'),
        I = n('EweD'),
        k = m.a.g6185a9e,
        R = m.a.g2d04222,
        M = m.a.baffe39a,
        P = m.a.af293dc2,
        L = m.a.h1053f7e,
        D = m.a.bf994ab2,
        O = m.a.cf7f7e39,
        A = m.a.cfd2f35d,
        F = y.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space4,
              borderRadius: e.borderRadii.xLarge,
            },
            popover: { maxWidth: 5 * e.spacesPx.space64 },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 },
            menuRow: {
              flexDirection: 'row',
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
            },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
          }
        }),
        B = function (e) {
          var t,
            n,
            a = e.dismiss,
            r = e.isModal,
            i = e.midConversationTweet,
            o = e.value,
            l = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            s = !!i,
            c =
              s &&
              !(
                null != i &&
                null !== (t = i.entities) &&
                void 0 !== t &&
                null !== (n = t.user_mentions) &&
                void 0 !== n &&
                n.some(function (e) {
                  return e.id_str !== i.user.id_str
                })
              ),
            p = L
          return (
            c ? (p = D) : s && (p = O),
            d.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [F.root, r ? F.modal : F.popover],
              },
              d.a.createElement(
                h.a,
                { style: F.title },
                d.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, k),
                d.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  R,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(g.a, {
                  Icon: b.a,
                  actionText: M,
                  isSelected: u.a.all === o,
                  onClick: l(u.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: x,
                  actionText: P,
                  isSelected: u.a.community === o,
                  onClick: l(u.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: c ? S.a : I.a,
                  actionText: p,
                  isSelected: u.a.by_invitation === o,
                  onClick: l(u.a.by_invitation),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? d.a.createElement(
                      v.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: F.cancelButton,
                        type: 'primaryOutlined',
                      },
                      A,
                    )
                  : null,
              ),
            )
          )
        },
        N = n('OiMc'),
        j = n('efqG'),
        U = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          i = e.disabled,
          l = d.a.useState(!1),
          c = s()(l, 2),
          u = c[0],
          p = c[1],
          m = d.a.useCallback(function () {
            return p(!0)
          }, []),
          h = d.a.useCallback(function () {
            return p(!1)
          }, []),
          f = a ? (u ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return d.a.createElement(
          j.a,
          {
            disabled: i,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = o()(e, U)
              return d.a.createElement(B, r()({}, a, { dismiss: t, isModal: 'sheet' === n }))
            },
            visibilityBehavior: f,
          },
          g,
        )
      }
    },
    zmS9: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('J0mu'),
        s = n('t62R'),
        c = n('rHpw'),
        d = n('QbaN'),
        u = o.a.bfb895b1,
        p = c.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          n = e.scheduledFor,
          a = e.testID,
          i = Object(d.c)(n),
          o = !!i && Object(d.h)(n) && !Object(d.g)(i) && !Object(d.f)(i),
          c = Boolean(t)
        return i && o
          ? r.a.createElement(
              s.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: a, withInteractiveStyling: c },
              r.a.createElement(l.a, { style: p.icon }),
              u({ date: Object(d.b)(i), time: Object(d.i)(i) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
