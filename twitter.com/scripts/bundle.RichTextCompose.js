;(window.webpackJsonp = window.webpackJsonp || []).push([
  [87, 6, 12, 21, 81],
  {
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return v
      }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'h', function () {
          return _
        }),
        n.d(t, 'g', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return C
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
        s = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        l = n('kGix'),
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
          initial: { fetchStatus: l.a.NONE },
          lastSearch: { fetchStatus: l.a.NONE },
          lastSelectedPlace: void 0,
        })
      var v = function (e) {
          return e.placePicker.initial.results
        },
        y = function (e) {
          return e.placePicker.initial.fetchStatus
        },
        _ = function (e) {
          return e.placePicker.lastSearch.results
        },
        b = function (e) {
          return e.placePicker.lastSearch.fetchStatus
        },
        C = function (e) {
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
        w = function (e, t) {
          return function (n, a, r) {
            var i = r.api
            return Object(s.b)(n, { request: i.Places.search, params: e })({
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
              w(
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
            if (a === l.a.LOADING || r) return Promise.resolve()
            var i = Object(p.d)(t())
            return i
              ? e(
                  w(
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
                    return C(t())
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
              return o()(o()({}, e), {}, r()({}, n, { fetchStatus: l.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, a, { fetchStatus: l.a.FAILED }))
            case f.SUCCESS:
              var i = t.meta.resultSet,
                s = t.payload
              return o()(o()({}, e), {}, r()({}, i, { fetchStatus: l.a.LOADED, results: s }))
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
        return we
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
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
        _ =
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
        b = n.n(_),
        C = (n('TJCb'), n('DZ+c'), n('xZGM')),
        w = n('GTeL'),
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
        R = 'endEditingButton',
        k = 'altTextEducationSheetPrimaryAction',
        M = n('MWbm'),
        D = n('t62R'),
        A = n('p+r5'),
        P = T.a.feabf2a0,
        L = T.a.e36287c6,
        O = T.a.cf565d08,
        F = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? b.a.createElement(D.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, O) : null
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
                  return b.a.createElement(
                    M.a,
                    { style: S.root },
                    b.a.createElement(
                      M.a,
                      { style: S.attachmentContainer },
                      b.a.createElement(w.a, { mediaItem: a, orientedImage: r }),
                      b.a.createElement(A.a, {
                        accessibilityLabel: P,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: L,
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
        })(b.a.Component),
        B = n('rxPX'),
        N = function (e, t) {
          return Object(C.A)(e, C.a)
        },
        j = Object(B.a)()
          .propsFromState(function () {
            return { showEducationOnMount: N }
          })
          .propsFromActions(function () {
            return { addFlag: C.w }
          })
          .withAnalytics(),
        V = n('feu+'),
        U = T.a.ffe9ec3a,
        z = T.a.j063b261,
        H = T.a.e57144f0,
        W = T.a.f9f9210c,
        K = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
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
                    t(C.a))
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
                  return b.a.createElement(
                    M.a,
                    { style: G.root },
                    i
                      ? b.a.createElement(V.a, {
                          actionLabel: H,
                          headline: U,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: k,
                          secondaryActionLabel: W,
                          subtext: z,
                        })
                      : null,
                    b.a.createElement(F, {
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
        })(b.a.Component),
        G = x.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        q = j(K),
        X = n('jHSc'),
        Y = n('EeFI'),
        Q = n('7JQg'),
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
        se = n('7Mjr'),
        le = n('Mbn/'),
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
        _e = T.a.hac7c548,
        be = T.a.e3dbfba3,
        Ce = T.a.dd4a83a5,
        we = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        Ee = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_cropper', b.a.createRef()),
              y()(
                p()(a),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === we.sensitiveMedia
                    ? { namespace: he, title: Ce, renderer: a._renderSensitiveMediaTab }
                    : e === we.altText
                    ? { namespace: pe, title: be, renderer: a._renderAltTextTab }
                    : { namespace: me, title: _e, renderer: a._renderCropTab }
                }),
              ),
              y()(p()(a), '_renderTabContent', function (e) {
                var t,
                  n = a.props,
                  r = n.location,
                  i = n.sensitiveMediaTabEnabled,
                  o = a._getMemoizedTabMetadata(e, i),
                  s = !(null !== (t = r.state) && void 0 !== t && t.hideTabs),
                  l = s ? a._getTabLinks(e) : [],
                  c = o.renderer()
                return s && l.length > 1
                  ? b.a.createElement(
                      b.a.Fragment,
                      null,
                      b.a.createElement($.a, { accessibilityLabel: fe, links: l }),
                      b.a.createElement(M.a, { style: Z.a.segmentedControlChildren }, c),
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
                  s = r[n] && r[n].altText
                return b.a.createElement(q, {
                  history: e,
                  key: n,
                  mediaItem: o,
                  onAltTextChange: a._handleAltTextChange,
                  orientedImage: i.get(n),
                  value: s,
                })
              }),
              y()(p()(a), '_renderCropTab', function () {
                var e = a.state,
                  t = e.cropData,
                  n = e.currentMediaId,
                  r = a._getCurrentMediaItem()
                return b.a.createElement(Y.a, {
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
                return b.a.createElement(J.a, {
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
                return b.a.createElement(
                  M.a,
                  { style: Z.a.rightControl },
                  a._hasMediaAtIndex(n) || a._hasMediaAtIndex(t)
                    ? b.a.createElement(
                        M.a,
                        { style: [Z.a.rightControl, Z.a.leftRightButtons] },
                        b.a.createElement(ee.a, {
                          accessibilityLabel: ye,
                          disabled: !a._hasMediaAtIndex(n),
                          icon: b.a.createElement(oe.a, null),
                          onPress: a._handleClickToMediaAtIndex(n),
                          size: 'small',
                          style: Z.a.prevButton,
                          type: 'primaryOutlined',
                        }),
                        b.a.createElement(ee.a, {
                          accessibilityLabel: ve,
                          disabled: !a._hasMediaAtIndex(t),
                          icon: b.a.createElement(se.a, null),
                          onPress: a._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  b.a.createElement(
                    ee.a,
                    {
                      disabled: e,
                      onPress: a._handleEndEditingClick,
                      size: 'small',
                      style: Z.a.saveButton,
                      testID: R,
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
                    s = r.processMedia,
                    l = r.updateMediaUpload,
                    c = a.state.currentMediaId
                  a.setState({ isProcessing: !0 })
                  var d = t ? re([].concat(o()(n), [[c, t.getCropData()]])) : n,
                    u = i.map(function (e) {
                      return d.get(e.id) ? (l({ id: e.id, cropData: d.get(e.id) }), s(e.id)) : Promise.resolve()
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
                  s = a._getMemoizedTabMetadata(o, i)
                n.scribe(r()(r()({}, s.namespace), e))
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
              s = e.media,
              c = a._getMediaMetadata(s)
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
                  return b.a.createElement(
                    Q.c,
                    { namespace: r.namespace },
                    b.a.createElement(
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
                  return a && r === we.sensitiveMedia ? we.sensitiveMedia : r === we.altText ? we.altText : we.crop
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
                    s = a.sensitiveMediaTabEnabled,
                    l = this._getCurrentMediaItem(),
                    c = []
                  return (
                    null != l &&
                      null !== (t = l.originalMediaFile) &&
                      void 0 !== t &&
                      t.isImage &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.crop }) }),
                        label: b.a.createElement(le.a, null),
                        key: we.crop,
                        accessibilityLabel: _e,
                        isActive: function () {
                          return e === we.crop
                        },
                        onClick: function () {
                          return i.scribePageImpression()
                        },
                      }),
                    c.push({
                      to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.altText }) }),
                      label: b.a.createElement(D.b, { weight: 'bold' }, 'ALT'),
                      key: we.altText,
                      accessibilityLabel: be,
                      isActive: function () {
                        return e === we.altText
                      },
                      onClick: function () {
                        return n._handleClickTab('alt_text_button')
                      },
                    }),
                    s &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.sensitiveMedia }) }),
                        label: b.a.createElement(ce.a, null),
                        key: we.sensitiveMedia,
                        accessibilityLabel: Ce,
                        isActive: function () {
                          return e === we.sensitiveMedia
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
        })(b.a.Component)
      t.b = Ee
    },
    '21U8': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
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
        _ = n.n(y),
        b = n('3rX5'),
        C = n('rHpw'),
        w = n('MWbm'),
        E = C.a.create(function (e) {
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
          return g.a.createElement(w.a, {
            pointerEvents: 'none',
            style: [E.mask, { width: a, height: n }, t && E.circle],
          })
        },
        x = n('ZvMt'),
        S = n('97Jx'),
        I = n.n(S),
        R = n('m3Bd'),
        k = n.n(R),
        M = n('CHgo'),
        D = n('7ep7'),
        A = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        P = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(l()(a), '_previousTouchDistance', 0),
              h()(l()(a), '_previousPositionX', 0),
              h()(l()(a), '_previousPositionY', 0),
              h()(l()(a), '_centerPosition', { x: 0, y: 0 }),
              h()(l()(a), '_panResponder', {}),
              h()(l()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(M.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(M.b)(e, a._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  a._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              h()(l()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(l()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  i = a.props,
                  o = i.onPanMove,
                  s = i.onPinchMove,
                  l = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (s) {
                    var c =
                        ((n = l[0]),
                        (r = l[1]),
                        Math.sqrt(Math.pow(n.pageY - r.pageY, 2) + Math.pow(n.pageX - r.pageX, 2))),
                      d = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(l[0], l[1]),
                      u = d.pageX,
                      p = d.pageY,
                      m = a._previousPositionX ? u - a._previousPositionX : 0,
                      h = a._previousPositionY ? p - a._previousPositionY : 0,
                      f = a._previousTouchDistance ? c - a._previousTouchDistance : 0
                    ;(a._previousPositionX = u), (a._previousPositionY = p), (a._previousTouchDistance = c)
                    var g = a._centerPosition
                    s(f, g.x - u, g.y - p, m, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              h()(l()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              h()(l()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = a._centerPosition,
                  s = o.x - t,
                  l = o.y - n
                a.props.onWheel && a.props.onWheel(r, i, s, l)
              }),
              (a._panResponder = D.a.create({
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
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, k()(e, A))
                  return g.a.createElement(
                    w.a,
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
        L = n('9RkS'),
        O = n('rOXj'),
        F = n('aITJ'),
        B = n('yiKp'),
        N = n.n(B),
        j = n('Lsrn'),
        V = n('k/Ka'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
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
      U.metadata = { width: 24, height: 24 }
      var z = U,
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
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
      H.metadata = { width: 24, height: 24 }
      var W = H,
        K = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
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
          return Object(V.a)(
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
        Y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
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
      Y.metadata = { width: 24, height: 24 }
      var Q = Y,
        J = _.a.d85bc1b8,
        Z = _.a.f596ace8,
        $ = _.a.df031fca,
        ee = _.a.b40332c5,
        te = _.a.e547b368,
        ne = _.a.f7571204,
        ae = _.a.e6e16811,
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
              h()(l()(a), '_previousLeft', 0),
              h()(l()(a), '_previousTop', 0),
              h()(l()(a), '_panStyles', { top: 0, left: 0 }),
              h()(l()(a), '_shouldShowZoomControl', function () {
                return (!F.b.isMobileOS() || !O.a.isTouchSupported()) && a.props.withZoomControl
              }),
              h()(l()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  i = t.width / t.height,
                  o = a._shouldShowZoomControl()
                return n || o
                  ? g.a.createElement(
                      w.a,
                      { style: oe.controlsContainer },
                      n
                        ? g.a.createElement(
                            w.a,
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
                            w.a,
                            { style: oe.zoomContainer },
                            g.a.createElement(L.a, {
                              accessibilityLabel: J,
                              max: a._maxScale,
                              maxIcon: g.a.createElement(X, { style: oe.icon }),
                              min: 0,
                              minIcon: g.a.createElement(Q, { style: oe.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              h()(l()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              h()(l()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              h()(l()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  i = n.width,
                  o = x.a.getCoverDimensions({ width: i, height: r }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              h()(l()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = x.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              h()(l()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              h()(l()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    o = r / n.width,
                    s = re(i / (t.width * o))
                  a.setState({ imageScale: s })
                  var l = a._getUnscaledCropData(),
                    c = l.left,
                    d = l.top
                  ;(a._panStyles.top = d - t.top * o * Math.pow(2, s)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = c - t.left * o * Math.pow(2, s)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              h()(l()(a), '_handleWheel', function (e, t, n, r) {
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
              h()(l()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              h()(l()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              h()(l()(a), '_handlePinchMove', function (e, t, n, r, i) {
                var o = e / 200
                a.setState(function (e) {
                  var s = e.imageScale,
                    l = Math.min(a._maxScale, Math.max(s + o, 0))
                  return (
                    (a._panStyles.left += t * (l - s) + r),
                    (a._panStyles.top += n * (l - s) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: l }
                  )
                })
              }),
              h()(l()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  r = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  s = !1
                n < 0 && ((s = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  r < 0 && ((s = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  i > 0 && ((s = !0), (a._panStyles.left += i), (a._previousLeft += i)),
                  o > 0 && ((s = !0), (a._panStyles.top += o), (a._previousTop += o)),
                  s && a._updateNativeStyles()
              }),
              h()(l()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              h()(l()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  s = a._panStyles,
                  l = s.left
                return { top: (t - i) / 2 - s.top, left: (n - o) / 2 - l, width: o, height: i }
              }),
              h()(l()(a), '_setAspectRatio', function (e) {
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
                    s = this._getMaskDimensions(),
                    l = s.height,
                    c = s.width,
                    d = this.state.containerWidth && this.state.containerHeight
                  return g.a.createElement(
                    w.a,
                    { style: oe.container },
                    g.a.createElement(
                      P,
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
                            g.a.createElement(b.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: oe.image,
                            }),
                            g.a.createElement(T, { circle: t, height: l, width: c }),
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
      var oe = C.a.create(function (e) {
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
        s = n('SrIh'),
        l = o.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var i = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(i.id, ': ').concat(i.action)),
                Object(s.a)(n, { extra: { context: i, isStrato: !0 } }),
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = n('Y9Ll'),
        l = n.n(s),
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
        _ = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        b = n.n(_),
        C = n('t62R'),
        w = n('piX5'),
        E = n('4r2z'),
        T = n('FG+G'),
        x = n('rHpw'),
        S = n('k/Ka'),
        I = n('shC7'),
        R = n('MWbm'),
        k = b.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        M = function (e) {
          return Object(S.a)('option', e)
        },
        D = 1,
        A = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              g()(d()(a), '_selectRef', b.a.createRef()),
              g()(d()(a), 'state', { isFocused: !1 }),
              g()(d()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  s = i.value
                n && n(s, o - (r ? 1 : 0))
              }),
              g()(d()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              g()(d()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(D)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (D += 1),
              a
            )
          }
          return (
            l()(n, [
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
                    s = e.options,
                    l = e.style,
                    c = e.testID,
                    d = e.value,
                    u = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = C.b.getLanguage(),
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
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(
                      R.a,
                      {
                        style: [
                          w.a.border,
                          P.container,
                          n && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          f && w.a.invalidBorderColor,
                          p && f && w.a.focusedBorderInvalid,
                          l,
                        ],
                      },
                      this._renderLabel(),
                      b.a.createElement(
                        k,
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
                          style: [P.select, { fontFamily: h }, n && w.a.disabled],
                          testID: c || '',
                          value: d,
                        },
                        u ? b.a.createElement(M, { disabled: !0, style: P.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return b.a.createElement(
                            M,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: P.option, value: a },
                            n,
                          )
                        }),
                      ),
                      b.a.createElement(T.a, {
                        style: [P.dropdownCaret, p && w.a.validColor, (i || a) && w.a.invalidColor],
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
                  return b.a.createElement(
                    C.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: P.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return b.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    b.a.createElement(
                      C.b,
                      { color: 'gray700', nativeID: this._helperID, style: P.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return b.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    b.a.createElement(
                      C.b,
                      { color: 'red500', nativeID: this._errorID, style: P.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      g()(A, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (A.propTypes = {})
      var P = x.a.create(function (e) {
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
      t.a = A
    },
    '7myi': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
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
        _ = n('4bHO'),
        b = n('dzqK'),
        C = n('GZwR'),
        w = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_genericWrapperRef', g.a.createRef()),
              h()(l()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(l()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  s = t.source,
                  l = e.state,
                  c = l.canShowTypeahead,
                  d = l.queryContext,
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
                    source: s || C.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(l()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(_.a)(t, a.resultType),
                    i = e._replaceToken(r, a),
                    o = i.newCursor,
                    s = i.newTweetText
                  n({ target: { value: s } }), e._updateDOMTextArea(o, s)
                }
                e._setQueryContext(void 0)
              }),
              h()(l()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              h()(l()(e), '_handleInputChange', function (t) {
                if (Object(b.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  a = e.state.queryContext
                e._textAreaRef = n
                var r = a && a.word,
                  i = n.value,
                  o = v.c(n.selectionStart, i),
                  s = o.end,
                  l = o.start,
                  c = o.word,
                  d = v.e(c || '', 'compose')
                if ((null == d ? void 0 : d.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (d) {
                    var u = d.q,
                      p = d.result_type
                    e._setQueryContext({ word: u, resultType: p, fullText: n.value, startIndex: l, endIndex: s })
                  } else e._setQueryContext(void 0)
              }),
              h()(l()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(l()(e), '_handleDismiss', function () {
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
      t.a = w
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
    '9Q4p': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('GTeL'),
        o = n('3XMw'),
        s = n.n(o),
        l = n('MWbm'),
        c = n('PbQQ'),
        d = n('6vad'),
        u = n('e0ey'),
        p = n('rHpw'),
        m = n('ZkMC'),
        h = s.a.j9cf595f,
        f = s.a.d69a782e,
        g = s.a.faf745f9,
        v = s.a.b96e6682,
        y = s.a.h2437f25
      function _(e) {
        var t = e.currentWarnings,
          n = e.mediaItem,
          a = e.onWarningChange,
          o = e.orientedImage,
          s = [
            { label: g, value: 'adult_content' },
            { label: v, value: 'graphic_violence' },
            { label: y, value: 'other' },
          ],
          p = c.b.useOpaqueIdentifier(),
          _ = r.a.createElement(i.a, { mediaItem: n, orientedImage: o })
        return r.a.createElement(
          l.a,
          { style: b.root },
          r.a.createElement(
            l.a,
            { style: b.modalContainer },
            null != t && t.size
              ? r.a.createElement(
                  m.a,
                  { revealableTombstoneConfig: m.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  _,
                )
              : _,
            r.a.createElement(d.b, { nativeID: p, subtext: f, text: h }),
            r.a.createElement(
              l.a,
              { accessibilityLabelledBy: p, accessibilityRole: 'group' },
              s.map(function (e) {
                var n = e.label,
                  i = e.value
                return r.a.createElement(u.a, { checked: t && t.has(i), key: i, label: n, name: i, onChange: a })
              }),
            ),
          ),
        )
      }
      var b = p.a.create(function (e) {
        return {
          modalContainer: { width: '100%', height: '100%', flexGrow: 1 },
          root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
        }
      })
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return k
      }),
        n.d(t, 'l', function () {
          return D
        }),
        n.d(t, 'f', function () {
          return P
        }),
        n.d(t, 'd', function () {
          return O
        }),
        n.d(t, 'g', function () {
          return F
        }),
        n.d(t, 'e', function () {
          return N
        }),
        n.d(t, 'i', function () {
          return V
        }),
        n.d(t, 'j', function () {
          return U
        }),
        n.d(t, 'k', function () {
          return z
        }),
        n.d(t, 'h', function () {
          return H
        }),
        n.d(t, 'a', function () {
          return K
        }),
        n.d(t, 'b', function () {
          return q
        }),
        n.d(t, 'c', function () {
          return Q
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        s = n('m3Bd'),
        l = n.n(s),
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
        _ = n('Ssj5'),
        b = n('fEA7'),
        C = n.n(b),
        w = n('uKEd'),
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
      var R = function (e) {
          var t = e.conversation_id,
            n = e.id,
            a = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            s = e.attachment,
            l = void 0 === s ? {} : s,
            c = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: l, localMediaId: a, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        k = function (e) {
          return function (t, n, a) {
            var i = a.api,
              s = e || {},
              c = s.senderId,
              d = s.cardUrl,
              u = s.conversationId,
              _ = s.localMediaId,
              b = s.recipients,
              S = void 0 === b ? [] : b,
              I = s.requestId,
              k = void 0 === I ? C.a.v1() : I,
              M = s.tweetAttachment,
              D = s.quickReply,
              A = l()(s, x)
            t(Z(u))
            var P = n(),
              L = _ || j(n(), u),
              F = m.k(P, L),
              B = o()(F, 1)[0] || {},
              N = B.mediaFile,
              V = B.mediaMetadata,
              U = S.length > 0 && S.join(','),
              z = {}
            N && N.isGif
              ? (z.extraInitParams = '&media_category=dm_gif')
              : N && N.isVideo && (z.extraInitParams = '&media_category=dm_video')
            var W = m.p(L, z),
              K = [t(W)],
              G = (H(P, u) || {}).found_media_origin
            return (
              N && N.isGif && K.push(Object(v.a)(N)),
              Promise.all(K).then(
                function (n) {
                  var a = o()(n, 2),
                    s = o()(a[0], 1)[0],
                    l = a[1],
                    v = (null == V ? void 0 : V.altText) || (null == V ? void 0 : V.defaultAltText),
                    _ = !!v
                  return (
                    s && (G || _)
                      ? t(m.m(p()({ media_id: s.uploadId, found_media_origin: G }, !!_ && { alt_text: { text: v } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (M || {}).id_str,
                        a = {}
                      if (s) {
                        var o = s.mediaFile,
                          m = void 0 === o ? {} : o,
                          v = {
                            original_info: { width: m.width, height: m.height },
                            sizes: [{ h: m.height, w: m.width, resize: 'fit' }],
                          }
                        m.isImage
                          ? (a.photo = p()(p()({}, v), {}, { media_url_https: m.url }))
                          : m.isGif
                          ? (a.animated_gif = p()(p()({}, v), {}, { media_url_https: l, type: 'animated_gif' }))
                          : m.isVideo && (a.video = p()(p()({}, v), {}, { media_url_https: m.url, type: 'video' }))
                      } else M && (a.tweet = { status: n })
                      var _ = (s || {}).uploadId,
                        b = R({
                          attachment: a,
                          conversation_id: u,
                          id: k,
                          recipient_ids: U,
                          sender_id: c,
                          text: e.text,
                        }),
                        C = p()(
                          p()(
                            p()(p()({}, A), Object(y.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !n && { media_id: _ },
                          ),
                          {},
                          { recipient_ids: U, request_id: k, tweet_id: n },
                        )
                      D &&
                        ((C['quick_reply_response[options][id]'] = D.id),
                        (C['quick_reply_response[options][selected_id]'] = D.selected_id))
                      var x = Object(E.a)([
                        ee(u),
                        { type: g.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(w.b)(u, k, b),
                      ])
                      return (
                        t(x),
                        i.DirectMessages.sendMessage(C).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              s = a.tweets,
                              l = a.users,
                              c = n.result.conversations
                            Object(T.a)(L) && t(Q(u, L))
                            var d = Object(E.a)(
                              [{ type: g.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: c, entries: o, users: l, tweets: s, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(w.j)(u, k, e), O(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = R({
                                attachment: a,
                                conversation_id: u,
                                error: !0,
                                id: k,
                                localMediaId: L,
                                recipient_ids: U,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(E.a)([
                                { type: g.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(w.b)(u, k, r),
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
                  return t(Object(E.a)([Object(T.a)(L) && Q(u, L), ne(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        M = function (e, t) {
          return e.dmComposer[t]
        },
        D = function (e, t) {
          var n = M(e, t)
          return n ? n.text : null
        },
        A = 'rweb/dmComposer/SAVE_TEXT',
        P = function (e, t) {
          return { type: A, conversationId: e, text: t }
        },
        L = 'rweb/dmComposer/REMOVE_TEXT',
        O = function (e) {
          return { type: L, conversationId: e }
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
        V = function (e, t) {
          var n = m.k(e, j(e, t))
          return n.length > 0 ? n[0] : null
        },
        U = function (e, t) {
          var n = M(e, t)
          return !!n && n.isUploading
        },
        z = function (e, t) {
          return m.l(e, j(e, t))
        },
        H = function (e, t) {
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
        Y = function (e) {
          return { type: X, conversationId: e }
        },
        Q = function (e, t) {
          return function (n) {
            n(m.i(t)), n([q(e), Y(e)])
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
      _.a.register(
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
            case A:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, s), {}, { text: t.text })))
            case B:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, l), {}, { cardUrl: t.cardUrl })))
            case L:
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = n('Y9Ll'),
        l = n.n(s),
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
        _ = n('21U8'),
        b = n('rHpw'),
        C = n('1auM'),
        w = n('eYns'),
        E = g.a.gff1f69e,
        T = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return o()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof C.a &&
                    Object(w.b)(n).then(function (t) {
                      return new C.a(t).withDimensionsAndOrientation().then(function (t) {
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
                    s = this.state.orientedImage,
                    l = r || {},
                    c = l.cropData,
                    d = l.originalMediaFile,
                    u = void 0 === d ? {} : d
                  return s
                    ? h.a.createElement(
                        v.a,
                        { style: x.cropper },
                        h.a.createElement(_.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || n,
                          defaultCropData: a || c,
                          image: { src: s.url, width: u.width, height: u.height },
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
        x = b.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(T, r()({}, e, { cropperRef: t }))
      })
    },
    GTeL: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        s = n('pKoL'),
        l = n('Qwev'),
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
            ? r.a.createElement(s.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: m.mediaContainer,
                withCloseButton: !1,
              })
            : n
            ? r.a.createElement(d.a, { resizeMode: 'contain', source: n.url, style: m.image })
            : r.a.createElement(l.a, { accessibilityLabel: p, style: m.activityIndicator }),
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
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return h
      }),
        n.d(t, 'c', function () {
          return f
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return v
        }),
        n.d(t, 'a', function () {
          return y
        })
      n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('dWxr'),
        s = n.n(o),
        l = n('hHEM'),
        c = n('rHpw'),
        d = n('aITJ'),
        u = n('IZ3v'),
        p = function (e, t) {
          for (var n = s()(e.getText()), a = 0; a < n.length; a++)
            n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
        },
        m = { clipPath: 'circle(0% at center)' },
        h = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t ? n.getEntity(t) : null
              return !!a && 'LINK' === a.getType()
            }, t)
          },
          component: function (e) {
            return e.entityKey
              ? r.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        f = {
          strategy: p,
          component: function (e) {
            var t = s()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(u.b)(t)
            return n ? r.a.createElement(i.b, { link: Object(u.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        g = {
          strategy: p,
          component: function (e) {
            return r.a.createElement('span', { style: { color: c.a.theme.colors.link } }, e.children)
          },
        },
        v = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t && n.getEntity(t)
              return !(!a || a.type !== l.a.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              a = e.entityKey,
              i = (a && n.getEntity(a)) || {}
            return !(d.b.isFirefox() && d.b.firefoxVersion() < 49)
              ? r.a.Children.map(t, function (e) {
                  var t,
                    n = r.a.Children.map(e, function (e) {
                      return r.a.createElement('span', { style: m }, e)
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
        y = {
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
    ORQL: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('RH6X'),
        l = n('rziq'),
        c = n('hHEM'),
        d = n('keCP'),
        u = {
          convertEmojiToEntities: c.a.convertEmojiToEntities,
          element: d.a,
          initEditorState: c.a.initEditorState,
          insertTextAtCursor: c.a.insertTextAtCursor,
          updateOverflowStyle: c.a.updateOverflowStyle,
          dismissComposerCommandName: l.a,
          sendTweetCommandName: l.b,
        }
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(e, r()({}, t, { richTextInputContext: u, typeaheadWrapper: s.a }))
        }
      }
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
        s = n('1Pcy'),
        l = n.n(s),
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
        _ = n('4bHO'),
        b = n('dzqK'),
        C = n('GZwR'),
        w = n('zpdM'),
        E = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(l()(e), '_genericWrapperRef', g.a.createRef()),
              h()(l()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  s = t.source,
                  l = e.state,
                  c = l.canShowTypeahead,
                  d = l.queryContext,
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
                    source: s || C.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(l()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              h()(l()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              h()(l()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(_.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              h()(l()(e), '_handleInputChange', function (t) {
                if (!Object(b.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  a = n && n.word,
                  r = e._getPlaintextFromCurrentBlock(t),
                  i = v.c(e._getCaret(t), r),
                  o = i.end,
                  s = i.start,
                  l = i.word,
                  c = v.e(l || '', 'compose')
                if ((null == c ? void 0 : c.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (c) {
                    var d = c.q,
                      u = c.result_type
                    e._setQueryContext({ word: d, resultType: u, editorState: t, startIndex: s, endIndex: o })
                  } else e._setQueryContext(void 0)
              }),
              h()(l()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(l()(e), '_handleDismiss', function () {
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
                    o = w.Modifier.replaceText(n.getCurrentContent(), i, e),
                    s = w.EditorState.push(n, o, 'insert-characters'),
                    l = r + e.length,
                    c = s.getSelection().merge({ anchorOffset: l, focusOffset: l })
                  return w.EditorState.forceSelection(s, c)
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
    UgB4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        return D
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
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
        _ = n('3XMw'),
        b = n.n(_),
        C = n('cjZk'),
        w = 'fileInput',
        E = n('sjK1'),
        T = n('/Imo'),
        x = n('rHpw'),
        S = n('9HgX'),
        I = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        R = b.a.b9960f31,
        k = { viewType: 'media_picker' },
        M = y.a.createElement(C.a, null),
        D = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? S.b : []).concat(t ? [S.a] : []).concat(r ? E.a : [])
        },
        A = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            return l()(this, n), t.apply(this, arguments)
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
                    s = e.icon,
                    l = e.style,
                    c = e.withIcon,
                    d = o()(e, I),
                    u = D({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    T.a,
                    r()({}, d, {
                      accept: u,
                      behavioralEventContext: k,
                      icon: c ? s : void 0,
                      style: [P.root, l],
                      testID: w,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      g()(A, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: R,
        icon: M,
        size: 'medium',
        withIcon: !0,
      })
      var P = x.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = A
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
          return _
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'a', function () {
          return C
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = (n('yH/f'), n('LW0h'), n('7x/C'), n('oEOe')),
        l = n('kGix'),
        c = n('Ssj5'),
        d = 'scheduledTweets',
        u = { fetchStatus: l.a.NONE, scheduledTweets: [] },
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
            if (t.payload) return o()(o()({}, e), {}, { fetchStatus: l.a.LOADED, scheduledTweets: t.payload })
            break
          case m.FAILURE:
            return o()(o()({}, e), {}, { fetchStatus: l.a.FAILED })
          case m.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: l.a.LOADING })
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
        _ = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        b = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(s.b)(e, { request: a.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: m,
              context: p,
            }).then(function () {})
          }
        },
        C = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(s.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: f,
              context: h,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        l = n('Ssj5'),
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
                return e(h(s.b.denied)), Promise.reject(t)
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
      l.a.register(
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
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('ERkP'),
        l = n.n(s),
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
        _ = n('x5Pi'),
        b = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        C = g(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            s = (e.tweetId, o()(e, b)),
            d = l.a.useContext(c.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          l.a.useEffect(
            function () {
              m && Object(v.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var h = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(_.f)(i, p, t),
            g = f && Object(_.e)(f),
            C = u.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            y.a,
            r()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: h,
              socialContextProps: g,
              tweet: i,
              withReactions: C,
            }),
          )
        })
      t.a = C
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
        s = Object(o.a)().propsFromActions(function () {
          return { addToast: i.b }
        }),
        l = n('VrFO'),
        c = n.n(l),
        d = n('Y9Ll'),
        u = n.n(d),
        p = n('1Pcy'),
        m = n.n(p),
        h = n('5Yy7'),
        f = n.n(h),
        g = n('2VqO'),
        v = n.n(g),
        y = n('KEM+'),
        _ = n.n(y),
        b = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        C = n('3XMw'),
        w = n.n(C),
        E = n('sgih'),
        T = n('t62R'),
        x = n('/yvb'),
        S = n('rHpw'),
        I = w.a.cfd2f35d,
        R = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), '_handleOnFocus', function (e) {
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
                    s = Object(b.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: k.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    E.a,
                    { onMaskClick: o, style: k.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(T.b, { align: 'center', style: k.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(T.b, { align: 'center', color: 'gray700', style: k.labelText }, n),
                    s,
                    r.a.createElement(x.a, { onPress: o, size: 'xLarge', style: k.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      _()(R, 'defaultProps', { cancelButtonLabel: I })
      var k = S.a.create(function (e) {
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
        M = R,
        D = n('I/9y'),
        A = n('mjJ+'),
        P = n('cm6r'),
        L = n('CaKu'),
        O = n('U+bB'),
        F = w.a.e05c00b4,
        B = w.a.eabf2209,
        N = w.a.a613e72f,
        j = w.a.f88553c8,
        V = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        U = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              _()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(A.a, {
                  items: [{ text: N, Icon: D.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              _()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                L.a.isAvailable() ? (L.a.setString(r), n({ text: j })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
              }),
              _()(m()(a), '_handleCopyLinkSheetCancel', function () {
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
                    s = V[o]
                  return s
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
                            w.a.I18NFormatMessage,
                            { $i18n: 'e2e6ea0d' },
                            this._renderAttribution(i, s),
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
                    P.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    r.a.createElement(
                      T.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(O.a, { source: { uri: t }, style: z.image }),
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
        H = U,
        W = s(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(H, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = W
    },
    dWxr: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, s.default)(e, t)
            .concat((0, o.default)(e))
            .concat((0, i.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == n.length) return []
          return (0, l.default)(n), n
        })
      var r = a(n('EW8Q')),
        i = a(n('yyPN')),
        o = a(n('YXS5')),
        s = a(n('vwfs')),
        l = a(n('c8jd'))
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
    gpVt: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return H
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
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
        _ = n('RhWx'),
        b = n.n(_),
        C = (n('wFPu'), n('CDB5')),
        w = n('xVN5'),
        E = n('vjRr'),
        T = n('rxPX'),
        x = n('0KEI'),
        S = function (e, t) {
          var n,
            a,
            r = t.urls,
            i = b()(r),
            o = y()(i.reverse())
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var s = a.value
              if ((n = E.a.select(e, s))) break
            }
          } catch (l) {
            o.e(l)
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
              updateDMComposer: C.e,
              updateTweetComposer: w.w,
            }
          }),
        R = n('KqB4'),
        k = n.n(R),
        M = n('aX4+'),
        D = n('3XMw'),
        A = n.n(D),
        P = n('hOZg'),
        L = n('cnVF'),
        O = n('MWbm'),
        F = n('v6aA'),
        B = n('/yvb'),
        N = n('rHpw'),
        j = n('VY6S'),
        V = n('mN6z'),
        U = A.a.f6fec9f6,
        z = /^https?:\/\//i,
        H = function (e) {
          var t = k()(e)
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
              h()(l()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              h()(l()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: L.B })
              }),
              h()(l()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  a = t.index,
                  r = t.updateDMComposer,
                  o = t.updateTweetComposer,
                  s = (e || {}).cardUrl
                i._isDMComposer ? n && r(n, s) : o({ updates: { cardUrl: s }, index: a })
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
                  Object(V.a)(e.urls, t) || this._debouncedFetchCardPreview()
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
                        O.a,
                        { style: a },
                        g.a.createElement(M.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        g.a.createElement(B.a, {
                          accessibilityLabel: U,
                          icon: g.a.createElement(P.a, null),
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
        s = n('yiKp'),
        l = n.n(s),
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
        _ = n('KEM+'),
        b = n.n(_),
        C =
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
        w = n.n(C),
        E = n('dDSG'),
        T = n('pXBW'),
        x = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('v6aA'),
        R = n('+Kfv'),
        k = n('eSoz'),
        M = n('rxPX'),
        D = function (e, t) {
          var n = t.communityId
          return n ? k.c.select(e, n) : void 0
        },
        A = Object(M.a)().propsFromState(function () {
          return { community: D }
        }),
        P = n('MtXG'),
        L = n('t62R'),
        O = n('CKsB'),
        F = n('rHpw'),
        B = n('3XMw'),
        N = n.n(B),
        j = N.a.d58baa7e,
        V = A(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var i,
              o = n.member_count
            return w.a.createElement(O.a, {
              actionSubText:
                ((i = j(o)),
                w.a.createElement(
                  P.a.Group,
                  null,
                  w.a.createElement(
                    P.a,
                    null,
                    w.a.createElement(
                      L.b,
                      { color: 'white' },
                      w.a.createElement(
                        N.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(P.a.Value, null, N.a.ibd0106d({ formattedCount: i })),
                        w.a.createElement(P.a.Label, null, N.a.cface2d0({ count: o })),
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
              style: U.menuItem,
            })
          }),
        ),
        U = F.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        z = n('0zXz'),
        H = n('FS1z'),
        W = n('MWbm'),
        K = n('yw4N'),
        G = n('/yvb'),
        q = n('+Eiw'),
        X = n('Zg3A'),
        Y = n('EyD/'),
        Q = N.a.e815fc33,
        J = N.a.c63602d3,
        Z = N.a.baffe39a,
        $ = N.a.aa4209e8,
        ee = N.a.d0748dae,
        te = N.a.abd845fd,
        ne = { viewType: 'everyone' },
        ae = { viewType: 'community' },
        re = N.a.d58baa7e,
        ie = F.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: q.a.getBackgroundImage() },
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
        oe = function (e) {
          var t,
            n,
            a,
            r,
            i,
            o = e.audienceControlsValue,
            s = e.dismiss,
            l = e.hasMemberships,
            c = e.history,
            d = e.isC9sParticipationEnabled,
            u = e.isSuperFollowsCreator,
            p = e.onAudienceControlsValueChange,
            m = e.sliceModule,
            h = w.a.useContext(I.a),
            f = o.communityIdValue || void 0,
            g = o.exclusivityControlValue || void 0,
            v = o.trustedFriendsValue || void 0,
            y = h.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            _ = null === (t = e.trustedFriendsList) || void 0 === t ? void 0 : t.rest_id,
            b =
              null !== (n = null === (a = e.trustedFriendsList) || void 0 === a ? void 0 : a.member_count) &&
              void 0 !== n
                ? n
                : 0,
            C = w.a.useCallback(
              function (e) {
                return function () {
                  p(e), s()
                }
              },
              [p, s],
            ),
            E = w.a.useCallback(
              function (e) {
                if (_) return c.push('/i/circles/'.concat(_, '/members'))
              },
              [c, _],
            )
          return w.a.createElement(
            W.a,
            { style: ie.root },
            w.a.createElement(
              K.a,
              { style: ie.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(L.b, { size: 'headline1', style: ie.title, weight: 'bold' }, Q),
                w.a.createElement(
                  R.a,
                  { behavioralEventContext: ne },
                  w.a.createElement(O.a, {
                    Icon: X.a,
                    actionText: Z,
                    isSelected: !g && !f && !v,
                    onClick: C({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: ie.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                u
                  ? w.a.createElement(O.a, {
                      Icon: Y.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!g,
                      onClick: C({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: ie.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                y && e.trustedFriendsList && _
                  ? w.a.createElement(O.a, {
                      Icon: Y.a,
                      actionSubText:
                        ((r = b),
                        (i = re(r)),
                        w.a.createElement(
                          P.a.Group,
                          null,
                          w.a.createElement(
                            P.a,
                            null,
                            w.a.createElement(
                              L.b,
                              { color: 'white' },
                              w.a.createElement(
                                N.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(P.a.Value, null, N.a.a5f7b70f({ formattedCount: i })),
                                w.a.createElement(P.a.Label, null, N.a.a7daec1e({ count: r })),
                              ),
                            ),
                            w.a.createElement(G.a, { onPress: E, size: 'xSmall', type: 'primaryText' }, te),
                          ),
                        )),
                      actionText: ee,
                      iconThumbnailColor: 'success',
                      isSelected: !!v,
                      onClick: C({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsValue: { trusted_friends_list_id: _ },
                      }),
                      selectable: !0,
                      style: ie.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              l && m && d
                ? w.a.createElement(
                    W.a,
                    null,
                    w.a.createElement(
                      R.a,
                      { behavioralEventContext: ae },
                      w.a.createElement(L.b, { style: ie.title, weight: 'bold' }, J),
                      w.a.createElement(H.a, {
                        module: m,
                        noItemsRenderer: z.a,
                        renderer: function (e) {
                          return w.a.createElement(V, {
                            clickHandler: C,
                            communityId: e,
                            dismiss: s,
                            key: e,
                            selectedCommunityId: f,
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
        se = n('xVN5'),
        le = n('wAC9'),
        ce = function (e) {
          return Object(le.a)({
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
        de = n('hqKg'),
        ue = n('li/m'),
        pe = n('RqPI'),
        me = n('xZGM'),
        he = n('0KEI'),
        fe = n('oEOe'),
        ge = n('kGix'),
        ve = n('Ssj5'),
        ye = 'trustedFriends',
        _e = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        be = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        Ce = function (e) {
          return e.trustedFriends.lists
        },
        we = function () {
          return function (e, t, n) {
            var a = n.api
            return fe.b(e, { request: a.TrustedFriends.createTrustedFriendsList })({
              actionTypes: be,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        Ee = function () {
          return function (e, t) {
            var n = t(),
              a = Ce(n)
            ;(a.length ? a[0] : void 0) ||
              e(function (e, t, n) {
                var a = n.api
                return fe.b(e, { request: a.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: _e,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && we && e(we())
              })
          }
        },
        Te = Object.freeze({ lists: [], fetchStatus: ge.a.NONE })
      ve.a.register(
        b()({}, ye, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case _e.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: ge.a.LOADING })
            case _e.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: ge.a.FAILED })
            case _e.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: ge.a.LOADED },
                )
              break
            case be.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: ge.a.LOADING })
            case be.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: ge.a.FAILED })
            case be.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  { lists: [t.payload.trusted_friends_list_create], error: null, fetchStatus: ge.a.LOADED },
                )
              break
            default:
              return e
          }
          return e
        }),
      )
      var xe = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? k.c.select(e, n) : void 0
        },
        Se = function (e, t) {
          return Object(me.A)(e, me.f)
        },
        Ie = function (e) {
          var t = Ce(e)
          return t.length ? t[0] : void 0
        },
        Re = Object(M.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: Se,
              hasMemberships: ue.d,
              selectedCommunity: xe,
              sliceModule: Object(de.createSelector)(pe.q, function (e) {
                return e ? ce(e) : void 0
              }),
              selectTrustedFriendsList: Ie,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(me.w)(me.f)
              },
              updateSingleComposer: se.w,
              fetchOrCreateTrustedFriendsList: Ee,
            }
          }),
        ke = n('FG+G'),
        Me = n('Sp5X'),
        De = n('X00g'),
        Ae = n('efqG'),
        Pe = N.a.baffe39a,
        Le = N.a.e815fc33,
        Oe = N.a.aa4209e8,
        Fe = N.a.d0748dae,
        Be = { viewType: 'communities_controls' },
        Ne = w.a.createElement(ke.a, null),
        je = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              d()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_renderContent', function (e) {
                var t = r.props,
                  n = t.audienceControlsValue,
                  a = t.hasMemberships,
                  i = t.isC9sParticipationEnabled,
                  o = t.isSuperFollowsCreator,
                  s = t.sliceModule
                return w.a.createElement(oe, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: Me.a,
                  isC9sParticipationEnabled: i,
                  isSuperFollowsCreator: o,
                  onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                  sliceModule: s,
                  trustedFriendsList: r.props.selectTrustedFriendsList,
                })
              }),
              b()(h()(r), '_handleAudienceControlsValueChange', function (e) {
                var t = r.props.updateSingleComposer
                r._handleDismissEducationalVisibilty(),
                  r.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              b()(h()(r), '_handleOpen', function () {
                r.setState({ popoverIsOpen: !0 })
              }),
              b()(h()(r), '_handleDismiss', function () {
                r.setState({ popoverIsOpen: !1 }), r._handleDismissEducationalVisibilty()
              }),
              b()(h()(r), '_handleDismissEducationalVisibilty', function () {
                r.props.addEducationFlag()
              }),
              (r.state = { popoverIsOpen: !1 }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    t = this.props.fetchOrCreateTrustedFriendsList
                  t && e && t()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    a = t.educationalVisibilityFlag,
                    i = t.hasMemberships,
                    o = t.isSuperFollowsCreator,
                    s = t.selectedCommunity,
                    l = this.state.popoverIsOpen,
                    c = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    d = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    u = n.communityIdValue || !1,
                    p = n.exclusivityControlValue || !1,
                    m = n.trustedFriendsValue || !1,
                    h = a && !s,
                    f = Pe
                  if ((u && null != s && s.name ? (f = s.name) : p ? (f = Oe) : m && (f = Fe), p))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != s && s.theme && c) {
                    var g = De.a.getCommunityUIColorName(s.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return o || i || (d && this.props.selectTrustedFriendsList)
                    ? w.a.createElement(
                        R.a,
                        { behavioralEventContext: Be },
                        w.a.createElement(
                          W.a,
                          { style: Ve.container },
                          w.a.createElement(
                            Ae.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            w.a.createElement(
                              G.a,
                              r()(
                                {
                                  accessibilityExpanded: l,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: Le,
                                  accessibilityRole: 'button',
                                  icon: Ne,
                                  size: 'xSmall',
                                },
                                e,
                              ),
                              f,
                            ),
                          ),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(je, 'contextType', I.a)
      var Ve = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        Ue = Re(je),
        ze = n('ddV6'),
        He = n.n(ze),
        We = n('PKbs'),
        Ke = function (e, t) {
          var n = t.selectedCommunityId
          return n ? k.c.select(e, n) : void 0
        },
        Ge = Object(M.a)()
          .propsFromState(function () {
            return { community: Ke }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        qe = n('YeIG'),
        Xe = n('21zW'),
        Ye = N.a.gfca5254,
        Qe = N.a.f510c8b2,
        Je = w.a.createElement(L.b, { weight: 'bold' }, Qe),
        Ze = F.a.create(function (e) {
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
        $e = Ge(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.selectedCommunityId,
            o = e.showMiddot
          w.a.useEffect(
            function () {
              i && Object(qe.a)(t) && a(i).catch(n())
            },
            [t, i, n, a],
          )
          var s = w.a.useState(!1),
            l = He()(s, 2),
            c = l[0],
            d = l[1],
            u = w.a.useContext(I.a).featureSwitches,
            p = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(We.b, {
                    badgeStyle: Ze.badgeStyle,
                    headerContainerStyle: Ze.rulesHeader,
                    heading: Je,
                    ruleContainerStyle: Ze.ruleContainerStyle,
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
              h = De.a.getCommunityUIColorName(m),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              W.a,
              { style: Ze.container },
              o ? w.a.createElement(Xe.a, null) : null,
              w.a.createElement(
                Ae.a,
                {
                  onDismiss: function () {
                    return d(!1)
                  },
                  onOpen: function () {
                    return d(!0)
                  },
                  renderContent: p,
                },
                w.a.createElement(
                  G.a,
                  r()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Ze.button,
                    },
                    f,
                  ),
                  Ye,
                ),
              ),
            )
          }
          return null
        }),
        et = n('ii+P'),
        tt = n('4zmP'),
        nt = N.a.g46f363d,
        at = { viewType: 'rule_education' },
        rt = function () {
          var e = Object(et.a)(me.g),
            t = He()(e, 2),
            n = t[0],
            a = t[1]
          return (
            w.a.useEffect(
              function () {
                return a
              },
              [a],
            ),
            n
              ? w.a.createElement(
                  W.a,
                  { style: it.container },
                  w.a.createElement(tt.a, { behavioralEventContext: at, onClose: a, text: nt, withCloseButton: !0 }),
                )
              : null
          )
        },
        it = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        ot = w.a.memo(rt),
        st = n('H7Rt'),
        lt = n('m3Bd'),
        ct = n.n(lt),
        dt = n('yZqq'),
        ut = function (e, t) {
          return Object(me.A)(e, me.q)
        },
        pt = Object(M.a)()
          .propsFromState(function () {
            return { shouldShowEducation: ut }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(me.w)(me.q)
              },
            }
          }),
        mt = N.a.aa65a449,
        ht = { viewType: 'persistent_conversation_controls_education' }
      var ft = F.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        gt = pt(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = w.a.useContext(I.a).featureSwitches,
            i = w.a.useState(),
            o = He()(i, 2),
            s = o[0],
            l = o[1],
            c = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return c
            }, []),
            w.a.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    a = e.width
                  l(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.a.createElement(
                  W.a,
                  { style: ft.container },
                  w.a.createElement(tt.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: ht,
                    onClose: c,
                    text: mt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        vt = n('FGLp'),
        yt = n('Irs7'),
        _t = n('DlMI'),
        bt = n('gBde'),
        Ct = n('gUPl'),
        wt = n('cOhU'),
        Et = ['analytics'],
        Tt = w.a.createElement(_t.a, null),
        xt = w.a.createElement(bt.a, null),
        St = w.a.createElement(Ct.a, null),
        It = w.a.createElement(wt.a, null),
        Rt = 'conversation_control',
        kt = { viewType: Rt },
        Mt = Object.freeze({
          all: { icon: Tt, label: N.a.i8ea6d4e },
          community: { icon: St, label: N.a.ec5a4a25 },
          by_invitation: { icon: xt, label: N.a.b4543009 },
          community_members: { icon: It, label: N.a.i13be5a0 },
          super_followers_exclusive: { icon: Tt, label: N.a.f8393bda },
          trusted_friends_tweet: { icon: Tt, label: N.a.c0857ccd },
        }),
        Dt =
          (Object.freeze(['community', 'by_invitation']),
          Object(yt.a)(function (e) {
            var t = e.analytics,
              n = ct()(e, Et),
              a = e.disabled,
              r = e.value,
              i = Mt[r],
              o = i.icon,
              s = i.label,
              l = w.a.useState(!1),
              c = He()(l, 2),
              d = c[0],
              u = c[1],
              p = w.a.useRef(null)
            Object(vt.a)(function () {
              r !== st.a.all && r !== st.a.community_members && u(!0)
            })
            var m = w.a.useCallback(
              function (e) {
                t.scribe({ element: Rt, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              R.a,
              { behavioralEventContext: kt },
              d ? w.a.createElement(gt, { buttonRef: p.current }) : null,
              w.a.createElement(
                W.a,
                { style: At.controlsContainer },
                w.a.createElement(
                  dt.a,
                  n,
                  w.a.createElement(
                    G.a,
                    { disabled: a, icon: o, onPress: m, ref: p, size: 'xSmall', style: At.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        At = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        Pt = n('krmn'),
        Lt = n('cIoY'),
        Ot = n('w3n3'),
        Ft = n('MLl7'),
        Bt = n('1auM'),
        Nt = n('07FG'),
        jt = n('Q8CU'),
        Vt = n('QbaN'),
        Ut = n('VPdC'),
        zt = n('WPfJ'),
        Ht = F.a.create(function (e) {
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
              zIndex: zt.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: zt.e },
            iconEmojiPicker: { zIndex: zt.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: zt.a,
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
        Wt = N.a.bdbcdd93,
        Kt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            i = n || t.length >= 4,
            o = t.length < 3
          return w.a.createElement(Ut.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? Wt : void 0,
            disabled: i,
            multiple: o,
            onChange: a,
            onPress: r,
            style: [Ht.toolBarButton, Ht.firstToolBarButton],
            type: 'brandText',
          })
        },
        Gt = n('oQhu'),
        qt = n('p+r5'),
        Xt = n('GWvE'),
        Yt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(h()(e), '_setInputRef', function (t) {
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
                    s = e.onChange
                  return w.a.createElement(
                    W.a,
                    { style: Qt.root },
                    w.a.createElement(qt.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: r,
                      maxLength: 25,
                      name: i,
                      onBlur: o,
                      onChange: s,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Qt.formTextInput,
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
                    (this.value && !Object(Xt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Yt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Qt = F.a.create(function (e) {
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
        Jt = Yt,
        Zt = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        $t = n('6XNv'),
        en = (function (e) {
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
                    s = e.testID,
                    l = !t || i === r,
                    c = e.value.toString(),
                    d = Object(Zt.a)(i, r + 1).map(function (e) {
                      return { label: ''.concat(N.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement($t.a, {
                    disabled: l,
                    label: n,
                    onChange: o,
                    options: d,
                    style: [tn.selector, !a && tn.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(en, 'defaultProps', { last: !1 })
      var tn = F.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        nn = en,
        an = 'addPollChoice',
        rn = 'selectPollDays',
        on = 'selectPollHours',
        sn = 'selectPollMinutes',
        ln = 'removePollButton',
        cn = N.a.caf8edc4,
        dn = N.a.g93586be,
        un = N.a.d073b644,
        pn = N.a.a2f0728e,
        mn = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              d()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_handleDaysChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.hours,
                    i = a.minutes,
                    o = 0 === n && 0 === r && 0 === i ? 1 : 7 === n ? 0 : r,
                    s = { days: n, hours: o, minutes: 7 === n ? 0 : 0 === n && 0 === o && i < 5 ? 5 : i }
                  return t && t(s), { duration: s }
                })
              }),
              b()(h()(r), '_handleHoursChange', function (e) {
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
              b()(h()(r), '_handleMinutesChange', function (e) {
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
                  return w.a.createElement(
                    W.a,
                    { style: n },
                    w.a.createElement(L.b, { style: hn.durationLabel }, t ? cn : ''),
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
                  return w.a.createElement(
                    W.a,
                    { style: hn.durationControls },
                    w.a.createElement(nn, {
                      editable: t && n,
                      label: dn,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: rn,
                      value: r,
                    }),
                    w.a.createElement(nn, {
                      editable: t && n,
                      label: un,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: on,
                      value: i,
                    }),
                    w.a.createElement(nn, {
                      editable: t && n,
                      label: pn,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === i ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: sn,
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
        })(w.a.Component)
      b()(mn, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var hn = F.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        fn = mn,
        gn = n('iY63'),
        vn = n('jtO7'),
        yn = N.a.g589c2e1,
        _n = N.a.a1e6c3a1,
        bn = N.a.a739e006,
        Cn = N.a.d89a5b92,
        wn = N.a.c2a8118d,
        En = N.a.a8ede1de,
        Tn = N.a.af40a8ef,
        xn = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            d()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_setChoice1Ref', function (e) {
                r._choice1 = e
              }),
              b()(h()(r), '_setChoice2Ref', function (e) {
                r._choice2 = e
              }),
              b()(h()(r), '_setChoice3Ref', function (e) {
                r._choice3 = e
              }),
              b()(h()(r), '_setChoice4Ref', function (e) {
                r._choice4 = e
              }),
              b()(h()(r), '_setDurationPickerRef', function (e) {
                r._durationPicker = e
              }),
              b()(h()(r), '_handleValidation', function () {
                var e = r.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  a = e.onValid,
                  i = r.choices,
                  o = h()(r),
                  s = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                i && i.length >= 2 && s ? a() : n(), t && t({ choices: i, duration: r.duration })
              }),
              b()(h()(r), '_handleAdd', function () {
                r.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  r.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              b()(h()(r), '_handleDurationChange', function (e) {
                var t = r.props.onChange
                t && t({ choices: r.choices, duration: e })
              }),
              b()(h()(r), '_handleBlur', function () {
                var e = r.props.onBlur
                null == e || e()
              })
            var i = e.initialChoices,
              o = void 0 === i,
              s = (i || []).length,
              l = s > 2 ? s : 2
            return (r.state = { autoFocus: o, choiceCount: l }), r
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
                    s = i.choiceCount,
                    l = w.a.createElement(
                      W.a,
                      { style: Sn.rightColumn },
                      s < 4
                        ? w.a.createElement(G.a, {
                            accessibilityLabel: En,
                            disabled: !(t && r),
                            hoverLabel: { label: Tn },
                            icon: w.a.createElement(gn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: Sn.addButton,
                            testID: an,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    W.a,
                    { style: Sn.choicesAndAddButton },
                    w.a.createElement(
                      W.a,
                      { style: Sn.choices },
                      w.a.createElement(Jt, {
                        autoFocus: o,
                        defaultValue: a[0],
                        editable: t && r,
                        label: yn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(Jt, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: _n,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(Jt, {
                            autoFocus: o,
                            defaultValue: a[2],
                            editable: t && r,
                            label: bn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(Jt, {
                            autoFocus: o,
                            defaultValue: a[3],
                            editable: t && r,
                            label: Cn,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    l,
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
                  return w.a.createElement(
                    W.a,
                    { style: Sn.root },
                    this._renderChoices(),
                    w.a.createElement(fn, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: Sn.durationPicker,
                    }),
                    w.a.createElement(
                      W.a,
                      { style: Sn.removePollButton },
                      w.a.createElement(vn.a, { color: 'red500', label: wn, onPress: r, testID: ln }),
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
        })(w.a.Component),
        Sn = F.a.create(function (e) {
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
        In = Object(yt.a)(xn),
        Rn = n('+d3d'),
        kn = ['onChange'],
        Mn = function (e) {
          var t = e.composerIndex,
            n = e.editable,
            a = e.initialChoices,
            i = e.initialDuration,
            o = e.isActive,
            s = e.isPollValid,
            l = e.updateComposer,
            c = Object(yt.b)(),
            d = w.a.useMemo(
              function () {
                return {
                  onChange: function (e) {
                    l({ pollChoices: null == e ? void 0 : e.choices, pollDuration: null == e ? void 0 : e.duration }, t)
                  },
                  onValid: function () {
                    !s && l({ pollValid: !0 }, t)
                  },
                  onInvalid: function () {
                    s && l({ pollValid: !1 }, t)
                  },
                  onRemove: function () {
                    c.scribe({ element: 'remove_poll', action: 'click' }), l({ pollActive: !1 }, t)
                  },
                }
              },
              [c, s, l, t],
            ),
            u = d.onChange,
            p = ct()(d, kn),
            m = w.a.useMemo(
              function () {
                return Object(Rn.a)(
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
            h = w.a.useCallback(
              function () {
                m.flush()
              },
              [m],
            )
          return w.a.createElement(
            In,
            r()({ editable: n, initialChoices: a, initialDuration: i, isActive: o, onBlur: h, onChange: m }, p),
          )
        },
        Dn = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        An = N.a.i859676b,
        Pn = w.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            L.b,
            { link: '/settings/audience_and_tagging', style: Dn.link, withInteractiveStyling: !0, withUnderline: !0 },
            N.a.c9a48d3f,
          ),
        )
      function Ln() {
        return w.a.createElement(W.a, { style: Dn.container }, w.a.createElement(tt.a, { headline: An, text: Pn }))
      }
      var On = n('b5s6'),
        Fn = n('rcen'),
        Bn = n('zmS9'),
        Nn = 'addButton',
        jn = 'addSubtitlesLabel',
        Vn = 'altTextLabel',
        Un = 'tagPeopleLabel',
        zn = 'attachments',
        Hn = 'createPollButton',
        Wn = 'geoButton',
        Kn = 'gifSearchButton',
        Gn = 'scheduleOption',
        qn = 'taggedUsersLabel',
        Xn = 'tweetTextarea_',
        Yn = 'toolBar',
        Qn = 'scheduledTweetIndicator',
        Jn = n('xM7j'),
        Zn = n('6OUF'),
        $n = n('tZIO'),
        ea = n('5mJL'),
        ta = n('DNho'),
        na = n('jhWN'),
        aa = n('rFBM'),
        ra = n('zfvc'),
        ia = n('Ujvi'),
        oa = n('yTN1'),
        sa = n('gpVt'),
        la = n('hOZg'),
        ca = n('ll3R'),
        da = n('J0mu'),
        ua = n('EfHu'),
        pa = n('KrGU'),
        ma = n('boUI'),
        ha = n('6ZHn'),
        fa = n('/WPq'),
        ga = n('wpLu'),
        va = n('pHub'),
        ya = n('8A5z'),
        _a = n('pKoL'),
        ba = n('ZvMt'),
        Ca = n('9Xij'),
        wa = (function (e) {
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
                    t = e.media,
                    n = e.style
                  return w.a.createElement(W.a, { style: n }, this._renderImageGroup(t.length))
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
                    i = F.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      s,
                      l = F.a.theme.aspectRatios.minTimelineImage,
                      c = F.a.theme.aspectRatios.maxTimelineImage
                    i = ba.a.getImageAspectRatio(l, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return w.a.createElement(
                    Ca.a,
                    { ratio: t ? i : r / a },
                    w.a.createElement(W.a, { style: Ea.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return w.a.createElement(
                    Ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: Ea.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, Ea.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return w.a.createElement(
                    Ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: Ea.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, Ea.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return w.a.createElement(
                    Ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: Ea.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], Ea.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return w.a.createElement(
                    W.a,
                    { style: [Ea.column, t] },
                    this._renderMediaAtIndex(e[0], Ea.gutterBottom),
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
                    s = o.editable,
                    l = o.isActive,
                    c = o.media,
                    d = o.onClickMedia,
                    u = o.onEditMedia,
                    p = o.onEditSensitiveWarning,
                    m = o.onRemoveMedia,
                    h = o.onSetMediaPreviewRef,
                    f = c[e],
                    g = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    v = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    y = !(
                      null === (r = f.mediaMetadata) ||
                      void 0 === r ||
                      null === (i = r.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    _ = u && s && l,
                    b = _ && y && !!p
                  return w.a.createElement(_a.a, {
                    accessibilityLabel: g || v,
                    accessibilityRole: 'group',
                    enableGif: l,
                    key: f.id,
                    mediaItem: f,
                    onClick: d ? d(f.id) : void 0,
                    onEdit: u ? u(f.id) : void 0,
                    onEditSensitiveWarning: p && b ? p(f.id) : void 0,
                    onRemove: m(f.id),
                    ref: h,
                    style: [Ea.mediaContainer, t],
                    withAltTextLabel: !!g,
                    withCloseButton: s && l,
                    withEditButton: _,
                    withEditSensitiveWarningButton: b,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(wa, 'contextType', I.a)
      var Ea = F.a.create(function (e) {
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
            mediaPreviewWrapper: { flexDirection: 'row', height: '100%' },
          }
        }),
        Ta = n('S1qy'),
        xa = n.n(Ta),
        Sa = n('cjAp'),
        Ia = n.n(Sa),
        Ra = N.a.f0afcc0e,
        ka = N.a.ha5e2e79,
        Ma = N.a.a3de3b68,
        Da = N.a.cc2b28fc,
        Aa = N.a.g45af04e,
        Pa = N.a.j1d5791c,
        La = N.a.ee9c4013,
        Oa = N.a.af40a8ef,
        Fa = N.a.e68b09b4,
        Ba = N.a.ec10ee02,
        Na = N.a.h735a98d,
        ja = N.a.c4ccfbe2,
        Va = N.a.j499fbcb,
        Ua = N.a.b7d8e3f0,
        za = N.a.d1175c78,
        Ha = N.a.bf4e9d79,
        Wa = N.a.e0342f98,
        Ka = N.a.e349147b,
        Ga = N.a.e3a24e4b,
        qa = N.a.fbd24526,
        Xa = N.a.de4669e2,
        Ya = N.a.d2c7a41c,
        Qa = N.a.f7364fa1,
        Ja = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Za = N.a.ia24dc8c,
        $a = w.a.createElement(la.a, null),
        er = w.a.createElement(gn.a, null),
        tr = w.a.createElement(ca.a, null),
        nr = w.a.createElement(da.a, null),
        ar = { viewType: 'schedule_tweet' },
        rr = { viewType: 'add_poll' },
        ir = { viewType: 'add_composer' },
        or = { viewType: 'tag_location' },
        sr = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            d()(this, n),
              (i = t.call(this, e, a)),
              b()(h()(i), '_handleConversationControlsValueChange', function (e) {
                i._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              b()(h()(i), '_handleAudienceControlsValueChange', function (e) {
                i.props.updateAudienceControlsValue(e)
              }),
              b()(
                h()(i),
                '_triggerConversationControlsImpression',
                Object(Gt.a)(function () {
                  return i.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              b()(h()(i), '_shouldRenderControls', function (e, t) {
                var n = i.state.isFocused,
                  a = i.props,
                  r = a.audienceControlsValue,
                  o = a.isActive,
                  s = a.isInline,
                  l = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== st.a.community_members &&
                      r.conversationControlsValue !== st.a.super_followers_exclusive &&
                      r.conversationControlsValue !== st.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (o && !l && (!s || n || e))
                )
              }),
              b()(h()(i), '_renderConversationControls', function (e) {
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
                  s = i._shouldRenderControls(e, 'conversation'),
                  l =
                    o === st.a.community_members ||
                    o === st.a.super_followers_exclusive ||
                    o === st.a.trusted_friends_tweet ||
                    i._isScheduled()
                return s
                  ? w.a.createElement(Dt, { disabled: l, onChange: i._handleConversationControlsValueChange, value: o })
                  : null
              }),
              b()(h()(i), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  W.a,
                  { style: Ht.taggedLocationContainer },
                  w.a.createElement(
                    G.a,
                    {
                      icon: w.a.createElement(ua.a, null),
                      onPress: i._handleGeoButtonClick,
                      size: 'xSmall',
                      style: Ht.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              b()(h()(i), '_renderMainContent', function () {
                var e = i.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  r = e.isExpanded,
                  o = e.isInline,
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = n.cardUrl,
                  u = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(sa.b)(h) || (d && !Object(Nt.a)(d) && [d]),
                  g = !!u.length || p || !!m,
                  v = i.props.typeaheadWrapper,
                  y = !i._isEmpty()
                return w.a.createElement(
                  W.a,
                  { style: Ht.textInputArea },
                  w.a.createElement(
                    W.a,
                    { style: r ? Ht.inputStyle : Ht.collapsedInputStyle },
                    i._renderAudienceControls(y),
                    w.a.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: s,
                        onTextUpdated: c ? i._handleRichTextChange : i._handlePlainTextChange,
                        onTypeaheadStateChange: l,
                      },
                      i._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.a.createElement(sa.a, { index: a, isCardPreviewTombstoned: Object(Nt.a)(d), urls: f })
                      : null,
                  ),
                  r ? null : t,
                )
              }),
              b()(h()(i), '_renderFieldTextInput', function (e) {
                var t = i.props,
                  n = t.autoFocus,
                  a = t.data,
                  o = t.editable,
                  s = t.index,
                  l = t.isActive,
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
                  _ = 0 === s && p,
                  b = !!g,
                  C = g || {},
                  E = C.dismissComposerCommandName,
                  T = C.element,
                  x = C.sendTweetCommandName,
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
                return w.a.createElement(
                  Zn.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: Ma,
                      autoFocus: n || (l && !d),
                      closeButton:
                        l && (i._deleteNonemptyTweetstormComposerEnabled || i._isEmpty()) && !_
                          ? i._renderCloseButton()
                          : void 0,
                      contentBelow: i._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [Ht.textInputStyle, S && Ht.textInputMobileCollapsed],
                      keyCommandHandlers: m,
                      maxNumberOfLines: b ? 30 : 10,
                      multiline: !0,
                      numberOfLines: i._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: i._handleFilesAdded,
                      placeholder: i._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: i._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(Xn).concat(s),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              b()(
                h()(i),
                '_getHandleRichTextChange',
                Object(Gt.a)(function (e) {
                  return function (t) {
                    e(t), i._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                h()(i),
                '_getHandlePlainTextChange',
                Object(Gt.a)(function (e) {
                  return function (t) {
                    e(t), i._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(h()(i), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = i.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(Ln, null) : null
              }),
              b()(h()(i), '_renderAudienceControls', function (e) {
                var t = i.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  o = i.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = i.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = i.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return i._shouldRenderControls(e, 'audience') && 0 === a && (o || s || l)
                  ? w.a.createElement(Ue, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: r && s,
                      onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              b()(h()(i), '_renderCommunitiesRulesEducation', function () {
                return i.shouldRenderCommunitiesRules ? w.a.createElement(ot, null) : null
              }),
              b()(h()(i), '_renderCommunitiesRules', function (e) {
                var t = i.props.audienceControlsValue.communityIdValue || void 0
                return i.shouldRenderCommunitiesRules && t
                  ? w.a.createElement($e, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              b()(h()(i), '_calcNumberOfLines', function () {
                var e = i.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  o = t.media,
                  s = t.pollActive,
                  l = t.quotedStatus,
                  c = !!o.length || !!s || !!l
                return (r && (a || c)) || !n ? 1 : 4
              }),
              b()(h()(i), '_renderScheduledTweetLegend', function () {
                var e = i.props.scheduledFor
                return w.a.createElement(Bn.a, {
                  onPress: i._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Qn,
                })
              }),
              b()(h()(i), '_handlePressScheduledTweetLegend', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              b()(h()(i), '_renderEmojiPicker', function () {
                return w.a.createElement(Pt.a, {
                  onEmojiSelect: i._handleInsertEmoji,
                  size: 'medium',
                  style: i._getEmojiPickerButtonStyles(),
                  textInputRef: i._textInputRef || void 0,
                })
              }),
              b()(
                h()(i),
                '_getEmojiPickerButtonStyles',
                Object(Gt.a)(function () {
                  return [Ht.iconEmojiPicker, Ht.toolBarButton]
                }),
              ),
              b()(h()(i), '_isSchedulingDisabled', function () {
                var e = i.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  o = n.pollActive,
                  s = n.quotedStatus,
                  l = n.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  p = t.conversationControlsValue !== st.a.all
                return Boolean(o || !u || (s && '' === l && !a.length) || p || r.length > 0)
              }),
              b()(h()(i), '_renderSchedulingButton', function () {
                return w.a.createElement(G.a, {
                  accessibilityLabel: ka,
                  behavioralEventContext: ar,
                  disabled: i._isSchedulingDisabled(),
                  hoverLabel: { label: Na },
                  icon: nr,
                  onClick: i._handleClickScheduler,
                  size: 'medium',
                  style: Ht.toolBarButton,
                  testID: Gn,
                  type: 'brandText',
                })
              }),
              b()(h()(i), '_handleClickScheduler', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              b()(h()(i), '_renderCloseButton', function () {
                var e = i.props.onRemoveComposer
                return w.a.createElement(G.a, {
                  accessibilityLabel: La,
                  hoverLabel: { label: Fa },
                  icon: $a,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              b()(h()(i), '_renderTweetAttachment', function () {
                var e = i.props,
                  t = e.data,
                  n = e.editable,
                  a = e.index,
                  r = e.isActive,
                  o = e.updateSingleComposer,
                  s = t.media,
                  l = t.pollActive,
                  c = t.pollChoices,
                  d = t.pollDuration,
                  u = t.quotedStatus
                if (0 === s.length && !l && !u) return null
                var p = i.hasAttachedVideo && (i._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  W.a,
                  { onClick: i._handleFocus, style: [Ht.attachmentContainer, Ht.tweetAttachmentArea], testID: zn },
                  s.length > 0
                    ? w.a.createElement(wa, {
                        editable: n,
                        isActive: r,
                        media: s,
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
                        style: Ht.mediaPreview,
                      })
                    : null,
                  r ? i._renderMediaActions() : null,
                  l
                    ? w.a.createElement(Mn, {
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
              b()(h()(i), '_renderQuoteTweet', function (e) {
                var t = i.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.a.createElement(
                      Jn.a,
                      null,
                      w.a.createElement(Fn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement(On.a, {
                      isCondensed: t.length > 0,
                      style: Ht.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              b()(h()(i), '_renderToolbar', function (e) {
                var t = i.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  r = t.hidePoll,
                  o = t.hideScheduling,
                  s = t.isInlineReply,
                  l = t.isReply,
                  c = t.isSelfThreadReply,
                  d = t.richTextInputContext,
                  u = t.setActiveParentKey,
                  p = !!d,
                  m = !s && !r,
                  h = !s && !o,
                  f = i.context.featureSwitches.isTrue('responsive_web_reply_storm_enabled'),
                  g = e && (!l || c || f)
                return w.a.createElement(
                  W.a,
                  { style: Ht.toolBar, testID: Yn },
                  w.a.createElement(
                    W.a,
                    { style: Ht.toolBarIconsContainer },
                    w.a.createElement(Kt, {
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
                  w.a.createElement(
                    W.a,
                    { style: Ht.toolBarIconsContainer },
                    e ? i._renderCountdownCircle() : null,
                    g &&
                      w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(W.a, { style: Ht.separator }),
                        i._renderAddComposerButton(),
                      ),
                    n,
                  ),
                )
              }),
              b()(h()(i), '_addOverflowStyle', function (e) {
                var t = i.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    a = n.length,
                    r = i._getParsedTweet(n).validRangeEnd,
                    o = r + 1 < a
                  if (i.state.hasOverflowStyle || o) {
                    var s = o ? r + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, s, i.state.hasOverflowStyle),
                      hasOverflowStyle: o,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: o }
                }
              }),
              b()(h()(i), '_handleRichTextChange', function (e) {
                var t = i.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  i.setState(i._addOverflowStyle(a))
                }
                i._handleTextValueChange(n)
              }),
              b()(h()(i), '_handlePlainTextChange', function (e) {
                var t = $n.a.replaceCarriageReturns(e.target.value)
                i._handleTextValueChange(t)
              }),
              b()(h()(i), '_handleTextValueChange', function (e) {
                var t = i.props,
                  n = t.data,
                  a = n.key,
                  r = n.text,
                  o = t.onTextChange
                r !== e && o(e, a)
              }),
              b()(h()(i), '_handleClickAltTextShortcut', function () {
                i.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              b()(h()(i), '_handleClickSubtitlesShortcut', function () {
                i.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              b()(h()(i), '_handleClickMediaDetail', function (e) {
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
              b()(h()(i), '_handleFilesAdded', function (e) {
                var t = i.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  r = t.onFilesAdded
                a ? n({ text: Da }) : r(e)
              }),
              b()(h()(i), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  i.props.onRemoveMedia(i.props.index, e)
                }
              }),
              b()(h()(i), '_handleInsertEmoji', function (e) {
                var t = i.state.editorState,
                  n = i.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  i._handleRichTextChange(a)
                }
              }),
              b()(h()(i), '_validateMedia', function (e) {
                var t = i.props.data.media
                return S.c(t.concat(e))
              }),
              b()(h()(i), '_handlePollAdd', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              b()(h()(i), '_handleGeoButtonClick', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              b()(h()(i), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  i.focus()
              }),
              b()(h()(i), '_handleFocus', function () {
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
              b()(h()(i), '_handleEditorFocus', function () {
                return i.setState({ isFocused: !0 })
              }),
              b()(h()(i), '_formatCountdownNumber', function (e) {
                return Za(Math.ceil(e / i._userLanguageWeight))
              }),
              b()(h()(i), '_getPlaceHolderText', function () {
                var e = i.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  o = e.isReply,
                  s = e.isSelfThreadReply
                return a
                  ? Xa
                  : n
                  ? Qa
                  : i.isReplyOrReplyThread && 0 === r
                  ? Ya
                  : o && !s && r > 0
                  ? qa
                  : s || r > 0
                  ? Ga
                  : Ka
              }),
              b()(h()(i), '_getNumberOfAltTextEntries', function () {
                return i.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              b()(
                h()(i),
                '_getParsedTweet',
                Object(Gt.a)(function (e) {
                  var t = Ia.a[i.props.twitterTextConfigurationVersion]
                  return xa()(e, t)
                }),
              ),
              b()(h()(i), '_isEmpty', function () {
                var e = i.props.data
                return Object(jt.c)(e)
              }),
              b()(h()(i), '_isScheduled', function () {
                var e = i.props.data.scheduledFor
                return Object(Vt.h)(e)
              }),
              b()(h()(i), '_autotagLocationIfNeeded', function () {
                var e = i.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  r = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && r({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              b()(h()(i), '_handleSetMediaPreviewRef', function (e) {
                i._mediaPreviewRef = e
              }),
              b()(h()(i), '_setTextInputRef', function (e) {
                i._textInputRef = e
              })
            var o = e.data.text,
              s = e.richTextInputContext,
              l = e.userLanguage,
              c = (s || {}).initEditorState
            return (
              (i._conversationControlsCreationEnabled =
                !0 ===
                i.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (i._deleteNonemptyTweetstormComposerEnabled = i.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (i._userLanguageWeight = l && Ja.indexOf(l) > -1 ? 2 : 1),
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
                      return e.mediaFile && !(e.mediaFile instanceof Bt.a) && e.mediaFile.isVideo
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
                    s = t.loggedInUser,
                    l = t.windowWidth,
                    c = t.withAvatar,
                    d = !this._isEmpty(),
                    u = this._shouldRenderControls(d),
                    p = l < F.a.theme.breakpoints.small
                  return w.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [Ht.root, !a && Ht.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      ea.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(ta.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(na.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: Ht.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: i,
                                })
                              })
                            : null,
                          o
                            ? null
                            : w.a.createElement(W.a, {
                                style: [Ht.conversationLine, !c && Ht.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? Ht.avatarContainerExpanded : Ht.avatarContainer,
                        cellStyle: Ht.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: Ht.inputArea },
                        w.a.createElement(
                          aa.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: Ht.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(W.a, { style: Ht.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        W.a,
                        { style: [(u || n) && Ht.controlsContainer, p ? Ht.mobileControlsLayout : Ht.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(ra.b, { show: a && r }, this._renderToolbar(d)),
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
                    s = a || n.length || !i
                  return w.a.createElement(Ot.a, {
                    enabled: !s,
                    gifSearchKeySource: Ft.a.Composition,
                    history: r,
                    onPress: o,
                    testID: Kn,
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
                    s = !(!(a || n.length || r || o) && i)
                  return w.a.createElement(G.a, {
                    accessibilityLabel: Ra,
                    behavioralEventContext: rr,
                    disabled: s,
                    hoverLabel: { label: Ba },
                    icon: tr,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: Ht.toolBarButton,
                    testID: Hn,
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
                    i = t ? w.a.createElement(ua.a, null) : w.a.createElement(pa.a, null)
                  return w.a.createElement(G.a, {
                    accessibilityLabel: ja,
                    behavioralEventContext: or,
                    disabled: r,
                    hoverLabel: { label: ja },
                    icon: i,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: Ht.toolBarButton,
                    testID: Wn,
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
                  return w.a.createElement(
                    W.a,
                    { style: Ht.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          W.a,
                          { style: Ht.addImageTextPadding },
                          w.a.createElement(Lt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !i) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          L.b,
                          {
                            accessibilityLabel: za,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [Ht.addImageTextContainer, Ht.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? w.a.createElement(
                          L.b,
                          {
                            accessibilityLabel: Va({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: Ht.addImageTextContainer,
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
                  return w.a.createElement(
                    L.b,
                    { color: 'gray700', size: 'subtext2', testID: Un },
                    w.a.createElement(ma.a, { style: Ht.addImageActionIcon }),
                    za,
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
                  return w.a.createElement(
                    L.b,
                    { color: 'gray700', size: 'subtext2', testID: qn },
                    w.a.createElement(ha.a, { style: Ht.addImageActionIcon }),
                    w.a.createElement(ia.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                      ? w.a.createElement(
                          L.b,
                          { color: 'gray700', size: 'subtext2', testID: Vn },
                          w.a.createElement(ga.a, { style: Ht.addImageActionIcon }),
                          Ua({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          L.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: Vn },
                          w.a.createElement(ga.a, { style: Ht.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        L.b,
                        { color: 'gray700', size: 'subtext2', testID: Vn },
                        w.a.createElement(fa.a, { style: Ht.addImageActionIcon }),
                        Va({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? va.a : ya.a
                  return w.a.createElement(
                    L.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: Ht.addImageTextContainer,
                      testID: jn,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Wa : void 0,
                      style: Ht.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Ha,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = Ia.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(oa.a, {
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
                    s = this._isScheduled(),
                    l = n || o || s || !r || a
                  return w.a.createElement(G.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? Pa : Aa,
                    behavioralEventContext: ir,
                    disabled: l,
                    hoverLabel: { label: Oa },
                    icon: er,
                    link: l ? void 0 : t,
                    onPress: i,
                    size: 'xSmall',
                    testID: Nn,
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
                    s = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof Bt.a) && e.mediaFile.isVideo
                    })
                  return 4 === i || o || s || a || this.hasExternalMedia || !r
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
                      return e.mediaFile && !(e.mediaFile instanceof Bt.a) && e.mediaFile.isVideo
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
        })(w.a.Component)
      b()(sr, 'contextType', I.a),
        b()(sr, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var lr = Object(yt.a)(sr),
        cr = w.a.createElement(L.b, { weight: 'bold' }),
        dr = w.a.createElement(L.b, { color: 'link' }),
        ur = function (e) {
          return '@'.concat(e)
        },
        pr = n('SrIh'),
        mr = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        hr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(dr, null, N.a.b50e199a({ userName: ur(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(dr, null, N.a.f2e4dd37({ replyUserName: ur(t), otherUserName: ur(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    dr,
                    null,
                    N.a.eccfddc3({ userOneName: ur(t), userTwoName: ur(a), userThreeName: ur(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(dr, null, N.a.h758cd22({ userOneName: ur(n), userTwoName: ur(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(dr, null, N.a.e9f8a0eb({ userName: ur(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(dr, null, N.a.df7e9fbc({ replyUserName: ur(n), otherUserName: ur(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    dr,
                    null,
                    N.a.b45fa505({ userOneName: ur(n), userTwoName: ur(r), userThreeName: ur(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(dr, null, N.a.a4383815({ userOneName: ur(a), userTwoName: ur(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(dr, null, N.a.ff792e35({ userName: ur(t) })),
                  w.a.cloneElement(cr, null, N.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(dr, null, N.a.g7d5e985({ replyUserName: ur(t), otherUserName: ur(n) })),
                  w.a.cloneElement(cr, null, N.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    dr,
                    null,
                    N.a.fe5a61e9({ userOneName: ur(t), userTwoName: ur(a), userThreeName: ur(n) }),
                  ),
                  w.a.cloneElement(cr, null, N.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(dr, null, N.a.bc9dd514({ userOneName: ur(n), userTwoName: ur(a), othersCount: t })),
                  w.a.cloneElement(cr, null, N.a.de5071ba),
                )
              },
            },
            o = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            l = s.exclusivity_info,
            c = s.user,
            d = o.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            u = He()(d, 2),
            p = u[0],
            m = u[1],
            h = [c, p, m].map(mr),
            f = He()(h, 3),
            g = f[0],
            v = f[1],
            y = f[2],
            _ = o.length - 2
          switch (o.length) {
            case 0:
              return Object(pr.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? i.communityReplyToOne({ communityName: t, userName: g })
                : l
                ? i.exclusiveReplyToOne({ userName: g })
                : i.replyToOne({ userName: g })
            case 2:
              return t
                ? i.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: v })
                : l
                ? i.exclusiveReplyToTwo({ userOneName: g, userTwoName: v })
                : i.replyToTwo({ userOneName: g, userTwoName: v })
            case 3:
              return t
                ? i.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: v, userThreeName: y })
                : l
                ? i.exclusiveReplyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
                : i.replyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
            default:
              return t
                ? i.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: v, othersCount: _ })
                : l
                ? i.exclusiveReplyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
                : i.replyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
          }
        },
        fr = w.a.memo(hr),
        gr = n('fs1G'),
        vr = n('BLtI'),
        yr = n('kY28')
      function _r(e) {
        null == e || e.preventDefault()
      }
      var br = F.a.create(function (e) {
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
        Cr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = e.onPress,
            o = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return w.a.createElement(
            W.a,
            null,
            l
              ? w.a.createElement(vr.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: gr.a,
                  onAvatarClick: _r,
                  onEntityClick: _r,
                  onMediaClick: _r,
                  onReplyContextClick: _r,
                  replyContext: yr.a.ReplyContextTypes.None,
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
            w.a.createElement(
              W.a,
              { style: br.replyUsersContainer },
              w.a.createElement(
                ea.a,
                {
                  avatarCell: l ? w.a.createElement(W.a, { style: br.conversationLine }) : null,
                  avatarCellStyle: br.conversationLineContainer,
                  cellStyle: br.repliesTextContainer,
                  style: br.grid,
                },
                o
                  ? w.a.createElement(
                      L.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: i, style: l && br.repliesMessage },
                      w.a.createElement(fr, {
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
        wr = n('Tb0w'),
        Er = n('1YZw'),
        Tr = n('pidX'),
        xr = n('5oBF'),
        Sr = n('JYYi'),
        Ir = n('/Rsk'),
        Rr = n('qlwE'),
        kr = n('XOJV'),
        Mr = n('G6rE'),
        Dr = n('AspN'),
        Ar = n('oEGd'),
        Pr = n('2iUg'),
        Lr = n('P1r1'),
        Or = ['mediaIds'],
        Fr = function (e) {
          return e.parentTweetId || (e.isInline ? Sr.a.homeTimeline : Sr.a.modal)
        },
        Br = function (e, t) {
          var n = Fr(t)
          return se.k(e, n)
        },
        Nr = function (e, t) {
          var n = Fr(t)
          return se.l(e, n)
        },
        jr = function (e, t) {
          var n = Fr(t)
          return se.j(e, n)
        },
        Vr = function (e, t) {
          var n = Xr(e, t),
            a = jr(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            i = r ? k.c.select(e, r) : void 0
          return i ? i.name : void 0
        },
        Ur = function (e, t) {
          var n = Fr(t)
          return se.m(e, n)
        },
        zr = function (e, t) {
          var n = Fr(t)
          return se.i(e, n)
        },
        Hr = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        Wr = Object(de.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          Mr.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Kr = function (e, t) {
          return t.parentTweetId || Gr(e, t) || qr(e, t)
        },
        Gr = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        qr = Hr(function (e) {
          return e.inReplyToStatusId
        }),
        Xr = function (e, t) {
          var n = Kr(e, t)
          return n ? kr.a.selectHydrated(e, n) : void 0
        },
        Yr = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Qr = Hr(function (e) {
          return e.hasArticleNudge
        }),
        Jr = Hr(function (e) {
          return e.convoCardData
        }),
        Zr = Hr(function (e) {
          return e.externalMedia
        }),
        $r = Hr(function (e) {
          return e.externalMediaFiles
        }),
        ei = Hr(function (e) {
          return e.previewTweetId
        }),
        ti = Hr(function (e) {
          return e.defaultText
        }),
        ni = function (e, t) {
          var n = ti(e, t),
            a = Object(Tr.a)(t.location)
          return (Yr(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        ai = Hr(function (e) {
          return e.quotedStatusId
        }),
        ri = Hr(function (e) {
          return e.quotedStatus
        }),
        ii = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : ri(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = ai(e, t)
              return n ? kr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        oi = Hr(function (e) {
          return e.isSelfThreadReply
        }),
        si = Hr(function (e) {
          return e.positionCursorAtBeginning
        }),
        li = Hr(function (e) {
          return e.promotedContent
        }),
        ci = function () {
          return Object(de.createSelector)(Br, ni, ii, Dr.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return l()(
                l()({}, ((i = e).mediaIds, ct()(i, Or))),
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
        di = {
          addComposer: se.a,
          addToast: Er.b,
          createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: se.b,
          deletePreviewTweet: xr.c,
          fetchAltTextPromptPreferenceIfNeeded: Pr.a,
          fetchAutotaggedLocationIfNeeded: Ir.a,
          fetchTweetIfNeeded: kr.a.fetchOneIfNeeded,
          removeComposer: se.e,
          resetDraft: se.f,
          retweet: kr.a.retweet,
          schedule: se.h,
          draftTweet: se.d,
          send: se.q,
          updateActiveComposerIndex: se.s,
          updateAudienceControlsValue: se.t,
          updateConvoCardState: wr.b,
          preUploadMedia: Dr.e,
          addMedia: Dr.b,
          processMultipleMedia: Dr.g,
          removeMediaUpload: Dr.i,
          updateSingleComposer: se.w,
          setActiveParentKey: se.r,
          copyDataFromInlineComposerToModalComposer: se.c,
        },
        ui = Object(Ar.e)(function () {
          return Object(de.createStructuredSelector)({
            activeComposerIndex: zr,
            activeUser: Wr,
            altTextNudgeType: Pr.b,
            audienceControlsValue: jr,
            composerData: ci(),
            dataSaverMode: Lr.j,
            excludedRecipients: Nr,
            externalMedia: Zr,
            externalMediaFiles: $r,
            geoEnabled: Lr.o,
            hasArticleNudge: Qr,
            inReplyToStatus: Xr,
            inReplyToStatusId: Kr,
            isIntentRoute: Yr,
            isSelfThreadReply: oi,
            isSending: Ur,
            isSuperFollowsCreator: pe.l,
            positionCursorAtBeginning: si,
            loggedInUser: Mr.e.selectLoggedInUser,
            prepopulatedText: ni,
            previewTweetId: ei,
            promotedContent: li,
            scheduledFor: se.n,
            selectedCommunityName: Vr,
            sendingProgress: se.o,
            convoCardData: Jr,
            undoTweetSettings: Rr.p,
            userLanguage: pe.o,
            quotedStatusId: ai,
          })
        }, di),
        pi = n('45mF'),
        mi = n('c0ZR'),
        hi = n('W5XZ'),
        fi = n('Drq4'),
        gi = n('0uGn'),
        vi = n('I8M8'),
        yi = n('7myi'),
        _i = n('7nmT'),
        bi = n.n(_i),
        Ci = n('vbWy'),
        wi = n('Rp9C'),
        Ei = n('Q5Mu'),
        Ti = n('N5qz'),
        xi = 'tweetButton',
        Si = 'tweetButtonInline',
        Ii = Object(M.a)()
          .propsFromState(function () {
            return { loggedInUser: Mr.e.selectLoggedInUser }
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
        Ri = n('cHvH'),
        ki = n('sgih'),
        Mi = n('xKuM'),
        Di = n('5Vk4'),
        Ai = F.a.create(function (e) {
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
        Pi = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            i = e.sheetType,
            o = e.showActionButton
          return w.a.createElement(Ri.a, null, function (e) {
            var s = e.windowWidth > F.a.theme.breakpoints.small
            return w.a.createElement(
              ki.a,
              { onMaskClick: r, style: Ai.sheetStyle, type: i, withMask: !0 },
              o &&
                w.a.createElement(Mi.a, {
                  leftControl: w.a.createElement(Di.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(W.a, { style: [Ai.mainCard, s ? Ai.largeScreenCard : Ai.smallScreenCard] }, n),
            )
          })
        },
        Li = N.a.cb7c0987,
        Oi = N.a.de3bcf27,
        Fi = N.a.e710ce75,
        Bi = N.a.h11e5910,
        Ni = N.a.b7ec04f3,
        ji = N.a.i62a03aa,
        Vi = F.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        Ui = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            Pi,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(L.b, { size: 'title4', style: Vi.itemPadding, weight: 'heavy' }, Li),
            w.a.createElement(L.b, { color: 'gray700', style: Vi.itemPadding }, Oi),
            w.a.createElement(L.b, { color: 'gray700', style: Vi.itemPadding }, Fi),
            w.a.createElement(
              W.a,
              { style: Vi.buttonContainer },
              w.a.createElement(L.b, { size: 'title4', style: Vi.itemPadding, weight: 'heavy' }, Bi),
              w.a.createElement(G.a, { onPress: a, style: Vi.itemPadding, type: 'brandOutlined' }, Ni),
              w.a.createElement(G.a, { onPress: n, style: Vi.itemPadding, type: 'brandOutlined' }, ji),
            ),
          )
        },
        zi = n('cm6r'),
        Hi = F.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Wi = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(zi.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(G.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Hi.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(L.b, { color: 'gray700' }, n),
            )
          })
        },
        Ki = n('sjK1'),
        Gi = n('FDY4'),
        qi = n('tevE'),
        Xi = n('jV+4'),
        Yi = n('UgB4'),
        Qi = n('TW8A'),
        Ji = n('hiGS'),
        Zi = n('WtWS'),
        $i = n('Lsrn'),
        eo = n('k/Ka'),
        to = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(eo.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [$i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      to.metadata = { width: 24, height: 24 }
      var no = to,
        ao = [
          { headlineText: N.a.f3a7a80c, subTextLine1: N.a.ge52d1de, subTextLine2: null },
          { headlineText: N.a.j311bf49, subTextLine1: N.a.ae42ebff, subTextLine2: N.a.aa350ab1 },
          { headlineText: N.a.j18b2956, subTextLine1: N.a.f6bee896, subTextLine2: N.a.dddd0995 },
          { headlineText: N.a.d02a94fa, subTextLine1: N.a.dddd0995, subTextLine2: null },
          { headlineText: N.a.i018b746, subTextLine1: N.a.b8d85df9, subTextLine2: N.a.d5ca11f0 },
        ],
        ro = N.a.h11e5910,
        io = N.a.abd845fd,
        oo = N.a.bea869b3,
        so = N.a.d96cf7cd,
        lo = N.a.d3145da8,
        co = F.a.create(function (e) {
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
            thanksCheckMark: { color: F.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        uo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            i = e.onEditTweet,
            o = e.onSendTweet,
            s = e.onWeGotItWrong,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = w.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = ao[(p = p >= 0 && p <= 4 ? p : 0)]
          return w.a.createElement(Ri.a, null, function (e) {
            var p,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              Pi,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: g > F.a.theme.breakpoints.medium,
              },
              w.a.createElement(no, { style: [co.profanityIcon, co.itemPadding] }),
              w.a.createElement(qi.a, { size: 'title4', style: co.itemPadding, weight: 'heavy' }, m.headlineText),
              w.a.createElement(L.b, { color: 'gray700', style: co.itemPadding }, m.subTextLine1),
              w.a.createElement(L.b, { color: 'gray700', style: co.itemPadding }, m.subTextLine2),
              w.a.createElement(
                W.a,
                { style: [co.tweetContainer, co.itemPadding] },
                w.a.createElement(
                  W.a,
                  { style: co.tweetContent },
                  w.a.createElement(Xi.a, { name: c, profileImageUrl: d, screenName: u, style: co.userName }),
                  w.a.createElement(
                    W.a,
                    { style: co.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Ki.c) r = e.mediaFile.thumbnail
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
                      return w.a.createElement(
                        W.a,
                        { style: co.photos },
                        w.a.createElement(Gi.a, {
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
                    w.a.createElement(L.b, { style: co.textStyle }, l),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    W.a,
                    { style: co.thanksContainer },
                    w.a.createElement(Zi.a, { style: co.thanksCheckMark }),
                    w.a.createElement(L.b, { align: 'center', style: co.itemPadding }, lo),
                  )
                : w.a.createElement(L.b, { align: 'center', onPress: s, style: co.itemPadding, withUnderline: !0 }, ro),
              g > F.a.theme.breakpoints.small
                ? w.a.createElement(
                    W.a,
                    { style: co.buttonContainer },
                    w.a.createElement(G.a, { onPress: i, style: co.itemPadding, type: 'brandFilled' }, io),
                    w.a.createElement(G.a, { onPress: o, style: co.itemPadding, type: 'brandOutlined' }, oo),
                    w.a.createElement(G.a, { onPress: a, style: co.itemPadding, type: 'destructiveText' }, so),
                  )
                : ((p = w.a.createElement(Yi.a, { style: { color: F.a.theme.colors.text } })),
                  (h = w.a.createElement(Qi.a, { style: { color: F.a.theme.colors.primary } })),
                  (f = w.a.createElement(Ji.a, { style: { color: F.a.theme.colors.red500 } })),
                  w.a.createElement(
                    W.a,
                    { style: co.mobileButtonContainer },
                    w.a.createElement(Wi, { icon: p, label: oo, onPress: o }),
                    w.a.createElement(Wi, { icon: h, label: io, onPress: i }),
                    w.a.createElement(Wi, { icon: f, label: so, onPress: a }),
                  )),
            )
          })
        },
        po = Ii(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            i = e.onDismiss,
            o = e.onEditTweet,
            s = e.onSendTweet,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = w.a.useState(!1),
            m = He()(p, 2),
            h = m[0],
            f = m[1],
            g = w.a.useState(!1),
            v = He()(g, 2),
            y = v[0],
            _ = v[1],
            b = function (e) {
              var n = e.action,
                r = e.element,
                i = e.page,
                o = [{ nudge_id: a }]
              t.scribe({ action: n, data: { items: o }, element: r, page: i, section: 'dialog' })
            }
          return h
            ? w.a.createElement(Ui, {
                onBack: function () {
                  b({ action: 'back', element: 'action', page: 'nudge_more_info' }), f(!1)
                },
                onNo: function () {
                  b({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
                onYes: function () {
                  b({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
              })
            : w.a.createElement(uo, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  b({ action: 'cancel', element: 'action', page: 'nudge' }), r()
                },
                onDismiss: function () {
                  b({ action: 'dismiss', element: 'action', page: 'nudge' }), i()
                },
                onEditTweet: function () {
                  b({ action: 'revise', element: 'action', page: 'nudge' }), o()
                },
                onSendTweet: function () {
                  b({ action: 'send', element: 'action', page: 'nudge' }), s()
                },
                onWeGotItWrong: function () {
                  b({ action: 'more_info', element: 'action', page: 'nudge' }),
                    b({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: l,
                userName: c,
                userProfileImageUrl: d,
                userScreenName: u,
              })
        }),
        mo = n('aITJ'),
        ho = n('eb3s'),
        fo = n('JYMr'),
        go = n('sCk0'),
        vo = n('3A2y'),
        yo = n('zrOZ'),
        _o = n('s1N3'),
        bo = n('4FGy'),
        Co = n('mN6z'),
        wo = n('eyty'),
        Eo = n('rziq'),
        To = n('lsKC'),
        xo = n('jTgF'),
        So = N.a.d28215f0,
        Io = N.a.ec909a54,
        Ro = N.a.jd53409d,
        ko = {
          singular: N.a.edae65de,
          plural: N.a.a859846a,
          oneOfMultiple: N.a.e90118f5,
          someOfMultiple: N.a.c211dcb1,
        },
        Mo = { singular: N.a.d7c26bfb, plural: N.a.a75e3ccc },
        Do = N.a.dcb7e3a0,
        Ao = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = Mo.singular), (t = r ? ko.singular : ko.oneOfMultiple))
              : ((n = Mo.plural), (t = r ? ko.plural : ko.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(Do)
          )
        },
        Po = N.a.c1bf53b0,
        Lo = N.a.bb8170da,
        Oo = N.a.dad5a4b8,
        Fo = N.a.e65aed64,
        Bo = N.a.bc2ceaf2,
        No = N.a.d8222374,
        jo = N.a.j890123a,
        Vo = N.a.bb01231c,
        Uo = N.a.d4ab68e2,
        zo = N.a.d8af8a4c,
        Ho = N.a.d09d4c05,
        Wo = N.a.i2209530,
        Ko = N.a.bf9b89e4,
        Go = N.a.f277e949,
        qo = N.a.b551cd22,
        Xo = N.a.f026a7fa,
        Yo = N.a.a5d4fda0,
        Qo = N.a.ib067d6a,
        Jo = x.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Zo = { element: 'alt_text_prompt' },
        $o = { component: 'article_nudge' },
        es = { viewType: 'send_tweet' },
        ts = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        ns = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r, i, s
            d()(this, n),
              (s = t.call(this, e, a)),
              b()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Sr.a.homeTimeline : Sr.a.modal)
              }),
              b()(h()(s), '_updateSingleComposer', function (e, t) {
                return (0, s.props.updateSingleComposer)({ updates: e, index: t, parentKey: s._getParentKey() })
              }),
              b()(h()(s), '_resetDraft', function () {
                ;(0, s.props.resetDraft)({ parentKey: s._getParentKey(), isPreview: s.isPreview })
              }),
              b()(h()(s), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              b()(h()(s), '_syncTexts', function () {
                var e = s.props.composerData,
                  t = s.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && s._updateSingleComposer({ text: a }, n)
                })
              }),
              b()(h()(s), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              b()(h()(s), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_handleDeletePreviewTweet', function () {
                var e = s.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId
                n && t(n)
              }),
              b()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = bi.a.findDOMNode(s._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    i = r.bottom,
                    o = r.top,
                    l = Math.max(o, window.scrollY)
                  if (l < window.pageYOffset || i > window.innerHeight) {
                    var c = n ? l - n() - 14 : l - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Jo ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              b()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.quotedStatus,
                  o = e.quotedStatusId
                !a && r && n(r).catch(t(hi.a)), !i && o && n(o).catch(t(hi.a))
              }),
              b()(h()(s), '_blockHistory', function (e, t) {
                var n = s.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  i = !r && /unsent/.test(e.pathname),
                  o = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return s.shouldShowDiscardConfirmation && 'POP' === t && o
                  ? (s.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : s._canSaveDraft && i && 'PUSH' === t
                  ? s.shouldShowDiscardConfirmation
                    ? (s.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: i }), !1)
                    : (s._resetDraft(), !0)
                  : s.shouldShowBackgroundSendConfirmation && 'POP' === t && o
                  ? (s._cancelAllMediaUploads(), !1)
                  : !('POP' === t && o && s._areComposersEmptyOrUnchanged && !Object(jt.a)(a)) || (s._resetDraft(), !0)
              }),
              b()(h()(s), '_getKeyCommandHandlers', function () {
                return s.state.typeaheadActive ? s._keyCommandHandlersForActiveTypeahead : s._keyCommandHandlers
              }),
              b()(h()(s), 'handleTweetOrRetweet', function () {
                if (
                  (s._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  s._areComposersValid())
                )
                  return s.shouldShowAltTextPrompt
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, Zo), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              b()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  i = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (a && s._shouldBeExpanded())
                  return w.a.createElement(Cr, {
                    communityName: o,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: s._handleViewRecipients,
                    shouldDisplayRepliesText: !i,
                    showParentTweet: !r,
                  })
              }),
              b()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement(ho.a, {
                  Icon: fi.a,
                  cancelButtonLabel: Lo,
                  confirmButtonLabel: Po({ numOfDescriptions: t }),
                  headline: Ro,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: Ao({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              b()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(po, {
                  media: n,
                  nudgeId: s.state.nudgeId,
                  onDeleteTweet: s._handleReplyNudgeDeleteTweet,
                  onDismiss: s._handleReplyNudgeDismiss,
                  onEditTweet: s._handleReplyNudgeEditTweet,
                  onSendTweet: s._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              b()(h()(s), '_handleAddComposer', function () {
                var e = s.props,
                  t = e.addComposer,
                  n = e.copyDataFromInlineComposerToModalComposer,
                  a = e.isInline,
                  r = e.parentTweetId
                s.isInlineReply ? n(r) : a && n(Sr.a.homeTimeline), t()
              }),
              b()(
                h()(s),
                '_makeAddComposerLink',
                Object(Gt.a)(function (e, t, n) {
                  return Object(To.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: n })
                }),
              ),
              b()(h()(s), '_handleReplyNudgeDeleteTweet', function () {
                s._hideToxicReplyNudge(), s._handleConfirmDiscardTweet()
              }),
              b()(h()(s), '_handleReplyNudgeDismiss', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeEditTweet', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeSendTweet', function () {
                s._hideToxicReplyNudge(), s._handleSendTweet()
              }),
              b()(h()(s), '_setRootRef', function (e) {
                e && (s._root = e)
              }),
              b()(h()(s), '_handleTweet', function () {
                var e = s.props.composerData[0].scheduledFor
                s.setState({ errorMessage: void 0 }),
                  e ? Object(Vt.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              b()(h()(s), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = s.props,
                    r = a.analytics,
                    i = a.createLocalApiErrorHandler
                  if (Object(xo.d)(n) && n.code === vi.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var o = Object(xo.b)(n)
                  if (o) return s.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(pi.a)(void 0, !1)
                  i(l()({}, c))(n)
                  var d = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  s.setState({ errorMessage: { text: d ? d.toast.text : Yo } })
                }
              }),
              b()(h()(s), '_handleScheduleTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  i = e.schedule,
                  o = s._getSingleComposerDataWithLatestText(n[0])
                i({ excludedRecipients: a, inReplyToStatus: r, scheduleData: o })
                  .then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(Vt.c)(o.scheduledFor)
                    if (a) {
                      var r = Object(Vt.b)(a),
                        i = Object(Vt.i)(a),
                        c = qo({ scheduleDate: r, scheduleTime: i })
                      t({ text: c, action: { label: Go, link: '/compose/tweet/unsent/scheduled' } }),
                        s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    s._updateConvoCardState(), s._close()
                  })
                  .catch(s._handleTweetError('schedule_tweet_cancel'))
              }),
              b()(h()(s), '_handleDraftTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: s._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    s.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: Ko, action: { label: Go, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', Ei.a))
              }),
              b()(h()(s), '_checkToxicReply', function () {
                var e = s.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.parentTweetId,
                  o = t(
                    s._getSingleComposerDataWithLatestText(n[0]).text,
                    i || r,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t, n, a, r, i, o, l
                    if (
                      !s.context.featureSwitches
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
                        null === (l = o.nudge) ||
                        void 0 === l
                          ? void 0
                          : l.id
                    return d && s.setState({ nudgeId: d }), !!c
                  }),
                  l = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([o, l])
              }),
              b()(h()(s), '_showToxicReplyNudge', function () {
                s._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: s.state.nudgeId }] },
                ),
                  s.setState({ showToxicReplyNudge: !0 })
              }),
              b()(h()(s), '_hideToxicReplyNudge', function () {
                return s.setState({ showToxicReplyNudge: !1 })
              }),
              b()(h()(s), '_checkToxicReplyAndSendTweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = s.state.nudgeId
                if (
                  !(
                    !s._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    s.isReply &&
                    !n &&
                    s.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return s._handleSendTweet()
                s._checkToxicReply().then(function (e) {
                  if (!e) return s._handleSendTweet()
                  s.context.featureSwitches.isTrue('responsive_web_reply_nudge_show_nudge') && s._showToxicReplyNudge()
                })
              }),
              b()(h()(s), '_handleSendTweet', function () {
                var e = s.props,
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
                  _ = void 0 === y ? void 0 : y,
                  b = r.trustedFriendsValue,
                  C = void 0 === b ? void 0 : b,
                  w = s.isPreview,
                  E = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  T = Object(Vt.c)(E[0].scheduledFor)
                if (T) {
                  var x = Object(Vt.b)(T),
                    I = Object(Vt.i)(T),
                    R = qo({ scheduleDate: x, scheduleTime: I })
                  return n({ text: R, action: { label: Go, link: '' } }), void s._close()
                }
                if (
                  (o.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === v) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var k = s._getSingleComposerDataWithLatestText(E[0]).text,
                      M = Object(S.d)(k)
                    a.scribe({
                      action: M ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && a.scribe({ action: 'send_my_followers_tweet' })
                var D = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  A = D ? '8.31.'.concat(D) : '',
                  P = i ? (D ? [i, A].join(',') : i) : A
                g({
                  sendData: E,
                  communityIdValue: D,
                  conversationControlsValue: v,
                  excludedRecipients: o,
                  exclusivityControlValue: _,
                  inReplyToStatus: u,
                  isSelfThreadReply: p,
                  promotedContent: h,
                  composeSemanticCoreId: P,
                  isPreview: w,
                  trustedFriendsValue: C,
                  tweetType: s.tweetType,
                })
                  .then(function (e) {
                    w || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(E[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(E, e, 'thread_send_success')
                    var a = e.length > 1 ? Fo : Oo
                    if (D && f) {
                      var r = f,
                        i = e.length
                      a = Io({ numOfTweets: i, communityName: r })
                    }
                    var o = w && s.isReply,
                      l = { label: Go, link: void 0, onAction: void 0 }
                    if (o || !w) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '')
                    } else l.onAction = Object(To.a)(d, m)
                    n({ text: w ? Bo : a, action: l }),
                      s.isInlineReply && s.setState({ focused: !1 }),
                      s._updateConvoCardState(),
                      s._close()
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
                          return s._scribeTweetSent(E[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(xo.d)(e) && e.code === vi.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: p }),
                      E.length > 1 && s._scribeThreadSent(E, r, 'thread_send_failure'),
                      r.length &&
                        d.replace({
                          pathname: m.pathname,
                          state: l()(
                            l()({}, Object(vo.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', Ei.a))
              }),
              b()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              b()(h()(s), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  i = n.isDraftTweet,
                  o = void 0 !== i && i,
                  c = n.isScheduled,
                  d = void 0 !== c && c,
                  u = s.state.nudgeId,
                  p = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  m = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? m : d ? p : 'send_',
                  f = { items: [wi.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  _ = Object(yo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  b = s.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (s._scribe({ action: ''.concat(h, 'tweet') }, f),
                  o || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribe({ action: 'retweet_with_comment' }, f),
                    r && s._scribe(l()(l()({}, $o), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  s.isReply && s._scribe({ component: b, action: ''.concat(h, 'reply') }, f),
                  g && s._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  s._hasPhoto(e) &&
                    (s._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    v && s._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && s._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  s._hasVideo(e) &&
                    (s._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && s._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  _.size)
                ) {
                  var C = s._hasPhoto(e) ? 'photo' : 'video'
                  _.forEach(function (e) {
                    s._scribe({ action: ''.concat(h).concat(C, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    s.isReply &&
                    !d &&
                    (o
                      ? s._scribe(l()(l()({}, w), {}, { action: 'save' }), { items: [{ nudge_id: u }] })
                      : s._scribe(l()(l()({}, w), {}, { action: 'sent' }), { items: [{ nudge_id: u }] })),
                  u || o || !s.isReply || d || s._scribe(l()(l()({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var E = t.id_str && wi.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: E ? [E] : [] })
                  var T = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || T) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: E ? [E] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              b()(h()(s), '_scribeThreadSent', function (e, t, n) {
                var a = s.props.inReplyToStatus,
                  r = { items: [wi.a.getSendThreadItem(e, t.length, !!a)] }
                s._scribe({ action: n }, r)
              }),
              b()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  n = { items: [wi.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, n),
                  t && s._scribe(l()(l()({}, $o), {}, { element: 'result', action: 'retweet' }), n)
              }),
              b()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (s._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, n(Ci.a)))
              }),
              b()(h()(s), 'handleDismissComposer', function () {
                s.shouldShowDiscardConfirmation
                  ? s.setState({ showDiscardTweetConfirmation: !0 })
                  : s.shouldShowBackgroundSendConfirmation
                  ? s._cancelAllMediaUploads()
                  : s._close()
              }),
              b()(h()(s), '_cancelAllMediaUploads', function () {
                s.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              b()(h()(s), '_handleConfirmDiscardTweet', function () {
                var e = s.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && s._scribe(l()(l()({}, $o), {}, { element: 'result', action: 'cancel' })),
                  s.state.nudgeId &&
                    s._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: s.state.nudgeId }] },
                    )
              }),
              b()(h()(s), '_handleCancelDiscardTweet', function () {
                s.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  s._restoreFocusToActiveComposer()
                })
              }),
              b()(h()(s), '_handleAcceptAltTextPrompt', function () {
                s.setState({ showAltTextPrompt: !1 })
                var e = s.props.history,
                  t = s._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (s._scribe(l()(l()({}, Zo), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: gi.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              b()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, Zo), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, Zo), {}, { action: 'cancel' })),
                  s.setState({ showAltTextPrompt: !1 }, function () {
                    s._restoreFocusToActiveComposer()
                  })
              }),
              b()(h()(s), '_restoreFocusToActiveComposer', function () {
                var e = s.props.activeComposerIndex
                void 0 !== e && s._composerRefs[e] && s._composerRefs[e].focus()
              }),
              b()(h()(s), '_close', function () {
                var e = s.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || s._resetDraft(),
                  s.state.navigatingToOutbox
                    ? s._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              b()(h()(s), '_handleComposerFocus', function (e) {
                s._composerRefs[e]
                  ? s.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      s._restoreFocusToActiveComposer()
                    }, 0)
              }),
              b()(h()(s), '_handleFocus', function () {
                s.state.focused ||
                  (s.isInlineReply && s._scribe({ element: 'inline_reply', action: 'reply' }),
                  s.setState({ focused: !0 }))
              }),
              b()(h()(s), '_handleTypeaheadStateChange', function (e) {
                s.setState({ typeaheadActive: e })
              }),
              b()(h()(s), '_handleRemoveComposer', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  i = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(vo.a)(r.state || {}, 'quotedStatus') }),
                  i(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              b()(h()(s), '_handleViewRecipients', function () {
                var e = s.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                s._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              b()(h()(s), '_handleTextChange', function (e, t) {
                var n = s.state.textMap,
                  a = s.props,
                  r = a.activeComposerIndex,
                  i = a.isInline,
                  o = a.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, n), {}, b()({}, t, e)) }, function () {
                    o && o(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  mo.b.isIOS())
                ) {
                  var c = i ? 0 : r
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              b()(
                h()(s),
                '_handleTextOnBlur',
                Object(Gt.a)(function (e, t) {
                  return function () {
                    var n = s.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      i = s.props.composerData,
                      o = a[e],
                      l = i.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !r && l && s._updateSingleComposer({ text: o }, t)
                  }
                }),
              ),
              b()(h()(s), '_updateAudienceControlsValue', function (e) {
                var t = s.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = s.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!s._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!s._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: So } })),
                      (null == r ? void 0 : r.text) === So && s.setState({ errorMessage: void 0 })
                }
                a(e, s._getParentKey())
              }),
              b()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement(fo.a, { progress: t ? Math.max(n, 0.02) : 0, style: as.progressBar })
              }),
              b()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              b()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(mi.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              b()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    i = s.props,
                    o = i.addMedia,
                    l = i.addToast,
                    c = i.composerData,
                    d = i.dataSaverMode,
                    u = i.preUploadMedia,
                    p = i.processMultipleMedia,
                    m = i.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    v = Object(wo.e)(
                      null === (a = h()(s)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  g ||
                    o(t, { location: wo.d.Tweet, canUploadLongVideo: v }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(_o.a)(r.concat(a)) }, e),
                          p(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            d ||
                              u(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else l({ text: Qo }), m(a)
                    })
                }
              }),
              b()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              b()(h()(s), '_handleMediaRemove', function (e, t) {
                var n = s.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  i = a[e],
                  o = i.media,
                  l = i.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(bo.a)(e, n)
                  })(
                    o.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  d = c.length > 0 ? l : []
                s._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: d }, e),
                  r(t),
                  s.setState({ errorMessage: void 0 })
              }),
              b()(h()(s), '_setComposerRef', function (e) {
                return function (t) {
                  s._composerRefs[e] = t
                }
              }),
              b()(h()(s), '_shouldBeExpanded', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (s.state.focused) return !0
                var a = !Object(jt.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              b()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  i = 'community_members' === t
                return (
                  (s.isRetweet && !r && !i) ||
                  n.every(function (e) {
                    return Object(jt.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              b()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(jt.d)(s._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              b()(h()(s), '_getAltTextMetadata', function () {
                var e = s.props.composerData,
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
              b()(h()(s), '_getSingleComposerDataWithLatestText', function (e) {
                var t = s.state.textMap
                return 'string' == typeof t[e.key] ? l()(l()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
            return (
              (s.state = {
                focused: c,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (s._composerRefs = {}),
              (s._conversationControlsCreationEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (s._throttledSyncTexts = Object(Rn.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((i = {}), b()(i, Eo.b, s.handleTweetOrRetweet), b()(i, Eo.a, s.handleDismissComposer), i)),
              (s._keyCommandHandlersForActiveTypeahead = b()({}, Eo.b, s.handleTweetOrRetweet)),
              (s._isAltTextNudgeEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (s._isCommunitiesEnabled = s.context.featureSwitches.isTrue('c9s_enabled')),
              s
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
                    s = e.isIntentRoute,
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
                    var p = l()({}, null)
                    d && (p.text = d), t && t.cardUrl && (p.cardUrl = t.cardUrl), this._updateSingleComposer(p)
                  }
                  ;(d || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !s &&
                    i.replace({
                      query: Object(Tr.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(vo.a)(Object(Tr.b)(c.state || {}), [
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
                    s = n.externalMediaFiles,
                    l = n.onRef,
                    c = n.parentTweetId,
                    d = n.replyPressToggle,
                    u = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== l && e.onRef(void 0),
                    l && l !== e.onRef && l(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: Xo }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    u && !Object(Co.a)(r, e.composerData) && u && u(this._areComposersValid()),
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
                    s = a.audienceControlsValue,
                    l = a.composeHeader,
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
                    _ = a.parentTweetId,
                    b = a.positionCursorAtBeginning,
                    C = a.richTextInputContext,
                    E = a.scheduledFor,
                    T = a.typeaheadWrapper,
                    x = a.userLanguage,
                    S = a.windowWidth,
                    I = this.state,
                    R = I.errorMessage,
                    k = I.focused,
                    M = I.shouldDisableButton,
                    D = I.showAltTextPrompt,
                    A = I.showDiscardTweetConfirmation,
                    P = I.showToxicReplyNudge,
                    L = I.typeaheadActive,
                    O = !f && L,
                    F = h ? 0 : this.props.activeComposerIndex,
                    B = O || h ? [c[F]] : c,
                    N = this._areComposersValid(),
                    j = this.hasNonCompliantQuote && this.isRetweet,
                    V = h ? W.a : go.a,
                    U = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    z = M || !N || j || this.isCommunityTweetFromProtectedUser,
                    H = (h && Ti.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet,
                    K = (h && Ti.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !_ && as.root },
                    h ? this._renderProgressBar() : null,
                    R &&
                      w.a.createElement(
                        W.a,
                        { style: as.inlineCallout },
                        w.a.createElement(tt.a, {
                          action:
                            null !== (e = R.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = R.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: R.action.label, link: R.action.link }
                              : void 0,
                          text: R.text,
                          type: 'danger',
                        }),
                      ),
                    w.a.createElement(
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [as.content, _ && as.contentInlineReply, f && as.contentModal],
                      },
                      m ? this._renderReplyContext() : null,
                      l,
                      w.a.createElement(
                        V,
                        U,
                        B.map(function (e, t) {
                          var a = Object(Vt.h)(e.scheduledFor),
                            l = c.indexOf(e),
                            I = d(e, t, B),
                            R =
                              f || h
                                ? w.a.createElement(
                                    G.a,
                                    {
                                      behavioralEventContext: es,
                                      disabled: z,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: as.inlineSendButton,
                                      testID: f ? xi : Si,
                                      type: 'brandFilled',
                                    },
                                    Object(To.b)({
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
                          return w.a.createElement(
                            W.a,
                            { key: e.key },
                            w.a.createElement(
                              lr,
                              r()(
                                {
                                  addComposerLink: n._makeAddComposerLink(h, g, _),
                                  addToast: o,
                                  additionalToolbarContent: R,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && k,
                                  data: M,
                                  disableAddTweet: c.length >= 25,
                                  editable: !v && !!i,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: u,
                                  hidePoll: H,
                                  hideScheduling: K,
                                  history: p,
                                  index: l,
                                  isActive: l === F && !v,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: h,
                                  isInlineReply: n.isInlineReply,
                                  isLast: h || l === c.length - 1,
                                  isReply: !!m || n.isInlineReply,
                                  isSelfThreadReply: !!g,
                                  isSuperFollowsCreator: y,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: i,
                                  onAddComposer: n._handleAddComposer,
                                  onFilesAdded: n._handleAddMediaFiles(l),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(M.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!b,
                                  ref: n._setComposerRef(l),
                                  richTextInputContext: C,
                                  scheduledFor: E,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: L,
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
                      A
                        ? this._canSaveDraft
                          ? w.a.createElement(ho.a, {
                              cancelButtonLabel: Uo,
                              confirmButtonLabel: Wo,
                              headline: zo,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Ho,
                            })
                          : w.a.createElement(ho.a, {
                              confirmButtonLabel: Uo,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? jo : No,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: Vo,
                            })
                        : null,
                      D ? this._renderAltTextPrompt() : null,
                      P ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(W.a, { style: v && as.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(l()(l()({}, e), {}, { data: t }))
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
                    ? ts.Quote
                    : this.isThread
                    ? ts.Thread
                    : this.isReply
                    ? ts.Reply
                    : ts.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    n,
                    a,
                    r,
                    i,
                    o = this.props.undoTweetSettings,
                    s =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    l =
                      null == this ||
                      null === (n = this.context) ||
                      void 0 === n ||
                      null === (a = n.featureSwitches) ||
                      void 0 === a
                        ? void 0
                        : a.isTrue('subscriptions_undo_quote_tweets_enabled'),
                    c =
                      null == this ||
                      null === (r = this.context) ||
                      void 0 === r ||
                      null === (i = r.featureSwitches) ||
                      void 0 === i
                        ? void 0
                        : i.isTrue('subscriptions_undo_thread_tweets_enabled')
                  return (
                    s &&
                    ('original' === this.tweetType ||
                      'reply' === this.tweetType ||
                      ('quote' === this.tweetType && l) ||
                      ('thread' === this.tweetType && c)) &&
                    (!o || void 0 === o[this.tweetType] || o[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(ns, 'defaultProps', {
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
        typeaheadWrapper: yi.a,
      }),
        b()(ns, 'contextType', I.a),
        b()(ns, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var as = F.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: l()({}, F.a.absoluteFillObject),
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
      t.a = Object(yt.a)(ui(ns))
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
        s = function (e, t) {
          var n = e.getCurrentContent(),
            a = n.getFirstBlock(),
            r = n.getLastBlock(),
            o = t.blockKey,
            s = void 0 === o ? r.key : o,
            l = t.offset,
            c = void 0 === l ? r.getText().length : l,
            d = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: s, focusOffset: c, isBackward: !1 }),
            u = i.Modifier.removeInlineStyle(e.getCurrentContent(), d, 'overflow')
          return i.EditorState.push(e, u, 'change-inline-style')
        },
        l = function (e, t) {
          var n = t.blockKey,
            a = t.offset,
            r = e.getCurrentContent(),
            o = r.getLastBlock(),
            s = c(r, n, a)
          if (n) {
            var l = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: s,
                  focusKey: o.key,
                  focusOffset: o.getText().length,
                  isBackward: !1,
                }),
              d = i.Modifier.applyInlineStyle(r, l, 'overflow')
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
                s = o && o.data && o.data.id
              if (void 0 !== s)
                for (var l = n - 1; l >= 0; l--) {
                  var c = r.getEntityAt(l),
                    d = c && e.getEntity(c)
                  if (!d || !d.data || d.data.id !== s) {
                    a = l + 1
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
                  var s = o.getLastCreatedEntityKey(),
                    l = e.getKey(),
                    c = t
                      .getSelection()
                      .merge({
                        anchorKey: l,
                        anchorOffset: a.indices[0],
                        focusKey: l,
                        focusOffset: a.indices[1],
                        isBackward: !1,
                      })
                  n = i.Modifier.applyEntity(o, c, s)
                }
              })
            }),
            i.EditorState.set(t, { allowUndo: !0, currentContent: n })
          )
        },
        getRelativeOffset: o,
        initEditorState: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { decorators: [r.b, r.e, r.a] },
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
          if ((a && ((c = s(c, f)), (n = !0)), h && ((c = l(c, f)), (n = !0)), n)) {
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = n('ERkP'),
        l = n.n(s),
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
          s = o()(e, h),
          g = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          m.a,
          { style: f.container },
          l.a.createElement(
            u.a,
            r()({}, s, { interactiveStyles: g, style: f.root }),
            l.a.createElement(c.b, { align: n, color: a }, i),
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
        s = n('1Pcy'),
        l = n.n(s),
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
        _ = 'singleline',
        b = function (e) {
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
              _,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              _,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        C = n('ERkP'),
        w = n.n(C),
        E = n('k/Ka'),
        T = n('PxJJ'),
        x = n('w9LO'),
        S = n('fs1G'),
        I = n('zpdM'),
        R = function (e) {
          return Object(E.a)('div', e)
        },
        k = !1,
        M =
          ((t.a = w.a.forwardRef(function (e, t) {
            var n = v.d()
            return w.a.createElement(
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
                h()(l()(e), '_setSelectionToStart', function () {
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
                h()(l()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return I.EditorState.forceSelection(t, t.getSelection())
                }),
                h()(l()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(I.EditorState.moveFocusToEnd(a))
                    : null == r || r(I.EditorState.moveSelectionToEnd(a))
                }),
                h()(l()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = b({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                h()(l()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                h()(l()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                h()(l()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                h()(l()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                h()(l()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                h()(l()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                h()(l()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                h()(l()(e), '_removeNewLines', function (e, t) {
                  return I.EditorState.push(
                    t,
                    I.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                h()(l()(e), '_removeInvalidStylesFromContentBlock', function (t) {
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
                h()(l()(e), '_removeInvalidStyles', function (t, n) {
                  var a = e.props.blockRenderMap,
                    r = t ? Object(I.convertFromHTML)(t, void 0, a) : void 0
                  if (r) {
                    var i,
                      o =
                        null == r || null === (i = r.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (o) {
                      var s = I.ContentState.createFromBlockArray(o, null == r ? void 0 : r.entityMap)
                      return I.EditorState.push(
                        n,
                        I.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), s.getBlockMap()),
                        'insert-fragment',
                      )
                    }
                  }
                  return null
                }),
                h()(l()(e), '_onPastedText', function (t, n, a) {
                  var r = e.props,
                    i = r.multiline,
                    o = r.onChange,
                    s = r.pastedStylesAllowlist
                  if (o) {
                    if (!i) return o(e._removeNewLines(t, a)), 'handled'
                    if (null != s && s.length) {
                      var l = e._removeInvalidStyles(n, a)
                      if (l) return o(l), 'handled'
                    }
                  }
                  return 'not-handled'
                }),
                h()(l()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    i = I.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? r : 27 === t.keyCode ? a : Object(I.getDefaultKeyBinding)(t)
                }),
                h()(l()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                h()(l()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                h()(l()(e), '_getContainerStyle', function () {
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
                        k || (this._setDraftJsStyle(), (k = !0))
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
                        s = t.blockRendererFn,
                        l = t.editorState,
                        c = t.handleReturn,
                        d = t.multiline,
                        u = t.onChange,
                        p = t.onFocus,
                        m = t.onKeyDown,
                        f = t.onKeyPress,
                        g = t.onKeyUp,
                        v = t.pastedStylesAllowlist,
                        b = t.placeholder,
                        C = t.spellCheck,
                        E = t.style,
                        T = t.testID
                      return w.a.createElement(
                        R,
                        {
                          className: d ? void 0 : _,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), E],
                        },
                        w.a.createElement(I.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: i,
                          ariaMultiline: d,
                          blockRenderMap: o,
                          blockRendererFn: s,
                          customAttrs:
                            ((e = {}),
                            h()(e, x.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            h()(e, 'onKeyPress', f),
                            h()(e, 'onKeyUp', g),
                            e),
                          customStyleMap: D(y.a.theme),
                          editorState: l,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: d ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: u,
                          onFocus: p,
                          onKeyDown: m,
                          placeholder: b,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== C,
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
          })(w.a.Component))
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
      var D = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    krmn: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        l = n('RuTB'),
        c = n('3XMw'),
        d = n.n(c),
        u = Object(s.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(18), n.e(212)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(l.a, { hasError: e, onRetry: t })
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
        _ = function (e) {
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
        b = n('pNJr'),
        C = n('2ZFc'),
        w = n('OiMc'),
        E = n('/yvb'),
        T = d.a.d4a4842d,
        x = o.a.createElement(b.a, null),
        S = d.a.fec16c1c,
        I = { viewType: 'emoji_picker' },
        R = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            s = e.style,
            l = e.textInputRef,
            c = o.a.useState(!0),
            d = r()(c, 2),
            p = d[0],
            m = d[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              u.preload(), C.a.get('emojiPicker2')
            }, 5e3)
            return function () {
              clearTimeout(e)
            }
          }, [])
          return o.a.createElement(
            w.a,
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
                  return l && l.focus()
                })
              },
              renderContent: function () {
                return o.a.createElement(_, { onSelect: n, partialRender: p })
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
              style: s,
              type: 'brandText',
            }),
          )
        }
      R.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = R
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
        s = r.a.d17df547,
        l = r.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? l : t ? s : e.isThread ? o : i({ verb: '' })
        },
        d = function (e, t) {
          return function () {
            var n,
              a,
              r =
                (null === (n = t.state) || void 0 === n || null === (a = n.previousPath) || void 0 === a
                  ? void 0
                  : a.includes('/home')) && '/compose/tweet' === t.pathname
            t.pathname.includes('/home') || r ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
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
        s =
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
        l = n('kIAd'),
        c = n('rHpw')
      function d(e, t) {
        var n,
          a = l.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? o()(o()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function u(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(l.b.WordEnd),
          i = r >= 0 ? n.slice(r) : '',
          o = a.search(l.b.WordBoundary),
          s = i + a.slice(0, o)
        return s.trim() ? { start: r, end: e + o, word: s } : { start: -1, end: -1, word: '' }
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
      var f = Object(s.a)(function (e) {
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
        return H
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
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
        _ = (n('2G9S'), n('ERkP')),
        b = n.n(_),
        C = n('38/B'),
        w = n('t62R'),
        E = n('/yvb'),
        T = n('piX5'),
        x = n('3XMw'),
        S = n.n(x),
        I = n('tI3i'),
        R = n.n(I),
        k = n('oQhu'),
        M = n('rHpw'),
        D = n('aITJ'),
        A = n('MWbm'),
        P = n('n5fo'),
        L = n('5emT'),
        O = n('Oib4'),
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
        V = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j
          return t(e)
        },
        U = S.a.de540c32,
        z = S.a.b4abfdb3,
        H = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            l()(this, n),
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
                Object(k.a)(function (e) {
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
                return V(e, a.props.calculateLength)
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
                  s =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === s && !0 === l
              }),
              y()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              y()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              y()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  i = a._calculateLength(r),
                  o = a._getActualCount(r),
                  s = a._getAdjustedMaxLength()
                void 0 !== s && r.length > s && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              y()(p()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t(e)
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
                D.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              y()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                D.b.isKaiOS() &&
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
                  s = 'string' == typeof t
                R()(
                  !(!s && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  R()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  R()(
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
                      s = e.onChange,
                      l = e.validLength,
                      c = e.value
                    ;(l === r && n === o && !!a === !!s && ('string' == typeof i) === ('string' == typeof c)) ||
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
                      s = this._isFormInvalid()
                    return b.a.createElement(
                      A.a,
                      { style: [K.root, i] },
                      b.a.createElement(
                        A.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            T.a.border,
                            K.textInputFormStyle,
                            s && T.a.invalidBorderColor,
                            o && s && T.a.focusedBorderInvalid,
                            o && !s && T.a.focusedBorderValid,
                            !n && T.a.disabled,
                          ],
                        },
                        b.a.createElement(
                          A.a,
                          { style: K.textInputFormWrapper },
                          b.a.createElement(
                            A.a,
                            { style: K.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      b.a.createElement(
                        A.a,
                        { style: [K.sidePadding, K.underTextInputForm] },
                        b.a.createElement(
                          A.a,
                          { style: K.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          s && a ? this._renderErrorText() : null,
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
                    return b.a.createElement(
                      w.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          K.textInputHeaderItem,
                          a && K.placeholderText,
                          !C.a.reducedMotionEnabled && K.transition,
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
                    return b.a.createElement(
                      A.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      b.a.createElement(
                        w.b,
                        { size: 'headline1', style: W.wrapper },
                        b.a.createElement(
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
                      ? b.a.createElement(
                          A.a,
                          { style: K.passwordVisibilityIconContainer },
                          b.a.createElement(E.a, {
                            accessibilityLabel: a ? z : U,
                            focusable: !0,
                            hoverLabel: { label: a ? z : U },
                            icon: a ? b.a.createElement(P.a, null) : b.a.createElement(L.a, null),
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
                    return b.a.createElement(
                      A.a,
                      { accessibilityLiveRegion: 'polite' },
                      b.a.createElement(
                        w.b,
                        { color: 'gray700', size: 'subtext2', style: K.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return b.a.createElement(
                      A.a,
                      { accessibilityLiveRegion: 'assertive' },
                      b.a.createElement(
                        w.b,
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
                    return b.a.createElement(
                      A.a,
                      { accessibilityLiveRegion: 'polite', style: [K.textInputHeaderItem, K.displayCount] },
                      b.a.createElement(
                        w.b,
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
                    return e && b.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? b.a.createElement(O.a, { style: [K.validationIcon, T.a.invalidColor] })
                      : b.a.createElement(F.a, { style: [K.validationIcon, T.a.validColor] })
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
                      r = 'string' == typeof a ? V(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(b.a.Component)
      y()(H, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (H.propTypes = {})
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
        s = n('Y9Ll'),
        l = n.n(s),
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
        _ = n('HPNB'),
        b = n('h5NW'),
        C = n('m3Bd'),
        w = n.n(C),
        E = (n('vrRf'), n('z84I'), n('LW0h'), n('7x/C'), n('5BYb'), n('xVN5')),
        T = n('pidX'),
        x = n('AspN'),
        S = n('XOJV'),
        I = n('G6rE'),
        R = n('xZGM'),
        k = n('0KEI'),
        M = n('hqKg'),
        D = n('oEGd'),
        A = n('rU/Q'),
        P = n('XpKj'),
        L = ['cardUrl', 'mediaIds'],
        O = function (e) {
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
        N = O(function (e) {
          return e.inReplyToStatusId
        }),
        j = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        V = O(function (e) {
          return e.defaultText
        }),
        U = O(function (e) {
          return e.quotedStatus
        }),
        z = O(function (e) {
          return e.isSelfThreadReply
        }),
        H = O(function (e) {
          return e.hideUnsentTweetsButton
        }),
        W = O(function (e) {
          return e.headingSubtitle
        }),
        K = O(function (e) {
          return e.headingTitle
        }),
        G = O(function (e) {
          return e.selectedCommunityId
        }),
        q = Object(M.createSelector)(
          function (e) {
            return E.k(e, '')
          },
          function (e, t) {
            var n = V(e, t)
            return Object(T.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : U(e, t)
          },
          x.j,
          j,
          function (e, t, n, a, i) {
            return e.map(function (e, o) {
              return r()(
                r()({}, ((s = e).cardUrl, s.mediaIds, w()(s, L))),
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
              var s
            })
          },
        ),
        X = Object(M.createStructuredSelector)({
          activeUser: F,
          composerData: q,
          draftTweets: A.e,
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
          scheduledTweets: P.f,
          sendingProgress: E.o,
          composeSemanticCoreId: O(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: H,
          subtitle: W,
          title: K,
          selectedCommunityIdFromLocationState: G,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(R.A)(e, R.e)
          },
        }),
        Y = {
          createDraftTweetApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(A.d),
          createScheduledTweetApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(P.d),
          fetchScheduledTweets: P.c,
          fetchDraftTweets: A.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(R.w)(R.e)
          },
          updateAudienceControlsValue: E.t,
        },
        Q = Object(D.f)(X, Y),
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
        se = function (e) {
          return Object(R.A)(e, R.p)
        },
        le = Object(oe.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: se }
          })
          .propsFromActions(function () {
            return { addFlag: R.w }
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
        _e = fe.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        be = le(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = y.a.useContext(ie.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? y.a.createElement(
                me.a,
                { style: _e.revueCallout },
                y.a.createElement(he.a, {
                  Icon: pe,
                  action: {
                    label: ye,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: ge,
                  onClose: function () {
                    t(R.p)
                  },
                  text: ve,
                  withCloseButton: !0,
                }),
              )
            : null
        }),
        Ce = n('7nmT'),
        we = n.n(Ce),
        Ee = n('Dtul'),
        Te = n('zh9S'),
        xe = n('7JQg'),
        Se = 'tweetButton',
        Ie = n('/yvb'),
        Re = n('JYMr'),
        ke = n('cHvH'),
        Me = n('feu+'),
        De = n('7N4s'),
        Ae = n('oQhu'),
        Pe = n('3A2y'),
        Le = ne.a.b8f0483e,
        Oe = ne.a.a133d13e,
        Fe = ne.a.a1183237,
        Be = ne.a.da2663f5,
        Ne = ne.a.j24c37b2,
        je = 'compose',
        Ve = { page: je },
        Ue = { page: je, section: 'reply' },
        ze = { context: 'compose_intent_logged_in' },
        He = { viewType: 'send_tweet' },
        We = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(d()(e), 'state', { isValid: !1 }),
              g()(d()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              g()(
                d()(e),
                '_handleAppBarHeight',
                Object(Ae.a)(function () {
                  var t = we.a.findDOMNode(e._appBarRef)
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
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? Ue : Ve
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
                  s = a.isSending,
                  l = !t || s || !r
                return n
                  ? void 0
                  : y.a.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: He,
                        disabled: l,
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
                  y.a.createElement(Re.a, {
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
                    y.a.createElement(Ie.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Oe),
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
            l()(n, [
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
                    s = e.inReplyToStatus,
                    l = e.location,
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
                      o.replace({ pathname: l.pathname, state: Object(Pe.a)(l.state || {}, 'selectedCommunityId') })),
                    null != s && s.exclusivity_info
                      ? d({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != s && s.community_id_str
                      ? d({
                          _type: 'community_members',
                          communityIdValue: s.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != s &&
                        s.trusted_friends_tweet &&
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
                    s = t.history,
                    l = t.isIntentRoute,
                    c = t.location,
                    d = t.quotedStatus,
                    u = t.richTextInputContext,
                    p = t.subtitle,
                    m = t.title,
                    h = t.typeaheadWrapper,
                    f = l && !n,
                    g = this.context.isModal
                  return y.a.createElement(
                    xe.c,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    y.a.createElement(ke.a, null, function (t) {
                      var l = t.windowWidth,
                        v = _.a.shouldRenderAsModal(l),
                        C = (f || e.showCommunityAudienceEducation) && v,
                        w = (null == i ? void 0 : i.length) > 1
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
                        f && y.a.createElement(ae.a, { history: s, location: c }),
                        !C &&
                          y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(
                              $.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: je,
                                documentTitle: Le,
                                hideBackButton: !1,
                                history: s,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: p,
                                title: m,
                              },
                              y.a.createElement(b.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
                                customizePropsForSingleComposerItem: o,
                                history: s,
                                isModal: g,
                                location: c,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: d,
                                richTextInputContext: u,
                                setValidity: e._setValidity,
                                typeaheadWrapper: h,
                                windowWidth: l,
                              }),
                            ),
                            w ? y.a.createElement(be, null) : null,
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
      g()(We, 'contextType', De.b)
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
      t.default = Q(We)
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
        s = n('3A2y'),
        l = o.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          i = r()(a, 6),
          o = i[0],
          s = i[1],
          d = i[2],
          u = i[3],
          p = i[4],
          m = i[5],
          h = [
            o,
            s && '@'.concat(s.toString()),
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
            m && l({ viaScreenName: m }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var d = function (e) {
        return Object(s.a)(e, c)
      }
    },
    rFBM: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
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
        _ = n('MWbm'),
        b = function (e) {
          return Object(y.a)('div', e)
        },
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_dragEnterCount', 0),
              h()(l()(e), 'state', { active: !1 }),
              h()(l()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              h()(l()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              h()(l()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              h()(l()(e), '_handleDragOver', function (e) {
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
                    i = t ? w.dragBorderValid : w.dragBorderInvalid
                  return g.a.createElement(
                    b,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [w.root, a, r && i],
                    },
                    g.a.createElement(_.a, { style: w.inner }, 'function' == typeof n ? n(r) : n),
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
      h()(C, 'defaultProps', { allowDragDrop: !0 })
      var w = v.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = C
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
        s = n('1Pcy'),
        l = n.n(s),
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
        _ = n.n(y),
        b = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', {
                isAnimating: !1,
                renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(l()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  n = e.props,
                  a = n.children,
                  r = n.onAnimateComplete
                t &&
                  (r && r(),
                  e.setState({
                    renderChildren: g.a.Children.toArray(a).map(function (e) {
                      return { status: C.static, child: e }
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
                          animateMount: a !== C.static,
                          key: n.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: a !== C.out,
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
                                  _()(
                                    e.slice(a).map(function (e) {
                                      return { child: e, status: C.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var i = t[n],
                              o = e[a]
                            if (i.key === o.key) r.push({ child: i, status: C.static }), (n += 1)
                            else {
                              var s = Object(b.a)(t, function (e) {
                                return e.key === o.key
                              })
                              s >= 0
                                ? (r.push.apply(
                                    r,
                                    _()(
                                      t.slice(n, s).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[s], status: C.static }]),
                                  ),
                                  (n = s + 1))
                                : r.push({ child: o, status: C.out })
                            }
                            a += 1
                          };
                        a < e.length && 'break' !== i();

                      );
                      return (
                        n < t.length &&
                          r.push.apply(
                            r,
                            _()(
                              t.slice(n).map(function (e) {
                                return { child: e, status: C.in }
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
                        return e.status === C.static
                      }),
                    }
                  },
                },
              ],
            ),
            n
          )
        })(g.a.Component)
      t.a = w
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        i = n('N9G2'),
        o = n('BIH/'),
        s = n('lhaq'),
        l = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = i(this),
              n = o(t),
              a = l(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : s(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    w3n3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/yvb'),
        o = n('3XMw'),
        s = n.n(o),
        l = n('3rWK'),
        c = n('Irs7'),
        d = s.a.a4993fa1,
        u = r.a.createElement(l.a, null),
        p = s.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          o = e.gifSearchKeySource,
          s = e.history,
          l = e.onPress,
          h = e.style,
          f = e.testID,
          g = Object(c.b)(),
          v = r.a.useCallback(
            function () {
              l && l(),
                g.scribe({ element: 'found_media_button', action: 'click' }),
                s.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, g, o, s, l],
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
        s =
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
        l = n('1auM'),
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
            s = a.retweeted_status,
            l = s || a,
            c = l.entities,
            u = l.unmentioned_user_ids,
            h = l.user,
            g = s ? s.user : {},
            v = s ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            _ = d.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            b = f(s || a) || {},
            C = ((t = {}), o()(t, g.id_str, g), o()(t, v.id_str, v), o()(t, h.id_str, h), o()(t, b.id_str, b), t)
          y.forEach(function (e) {
            C[e.id_str] = e
          }),
            _.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              C[a] = { id_str: a, name: t, screen_name: n }
            })
          var w = function (e) {
              var t = null == u ? void 0 : u.includes(e.id_str),
                n = e.id_str === h.id_str
              return !t || n ? [e.id_str] : []
            },
            E = Object(p.a)(
              Object(m.a)(
                [].concat(
                  r()(w(g)),
                  r()(w(v)),
                  [h.id_str],
                  r()(
                    y.flatMap(function (e) {
                      return w(e)
                    }),
                  ),
                  r()(
                    _.map(function (e) {
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
              return C[e]
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
                return e.mediaFile && !(e.mediaFile instanceof l.a) && e.mediaFile.isVideo
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
              var t = Object(s.e)(e, 'compose')
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
        s = n('7N4s'),
        l = n('cHvH'),
        c = n('rHpw'),
        d = function (e) {
          var t = e.history,
            n = e.location,
            a = e.parentTweetId,
            c = e.replyPressToggle,
            d = e.richTextInputContext,
            p = e.typeaheadWrapper,
            m = r.a.useContext(s.b).isModal
          return r.a.createElement(l.a, null, function (e) {
            var s = e.windowWidth
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
                windowWidth: s,
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
        s = n.n(o),
        l = n('k6Ei'),
        c = n('rHpw'),
        d = n('+/1j'),
        u = n('MWbm'),
        p = s.a.c2fc878c,
        m = s.a.db11b27f,
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
          s = e.warningCount,
          g = n - t,
          v = g >= 0 ? m({ count: o(g) }) : p({ count: o(t - n) }),
          y =
            t >= s
              ? r.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  v,
                )
              : null,
          _ = Object(i.a)(g, n),
          b = t >= n ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = r.a.createElement(l.a, {
            color: b,
            progress: _,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          w = t >= s ? r.a.createElement(d.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, o(g)) : null
        return r.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          C,
          r.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, w),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
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
        _ = n('Zg3A'),
        b = n('yiKp'),
        C = n.n(b),
        w = n('Lsrn'),
        E = n('k/Ka'),
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
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
        R = m.a.g6185a9e,
        k = m.a.g2d04222,
        M = m.a.baffe39a,
        D = m.a.af293dc2,
        A = m.a.h1053f7e,
        P = m.a.bf994ab2,
        L = m.a.cf7f7e39,
        O = m.a.cfd2f35d,
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
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            l = !!i,
            c =
              l &&
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
            p = A
          return (
            c ? (p = P) : l && (p = L),
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
                d.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, R),
                d.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  k,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(g.a, {
                  Icon: _.a,
                  actionText: M,
                  isSelected: u.a.all === o,
                  onClick: s(u.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: x,
                  actionText: D,
                  isSelected: u.a.community === o,
                  onClick: s(u.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: c ? S.a : I.a,
                  actionText: p,
                  isSelected: u.a.by_invitation === o,
                  onClick: s(u.a.by_invitation),
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
                      O,
                    )
                  : null,
              ),
            )
          )
        },
        N = n('OiMc'),
        j = n('efqG'),
        V = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          i = e.disabled,
          s = d.a.useState(!1),
          c = l()(s, 2),
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
              var a = o()(e, V)
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
        s = n('J0mu'),
        l = n('t62R'),
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
              l.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: a, withInteractiveStyling: c },
              r.a.createElement(s.a, { style: p.icon }),
              u({ date: Object(d.b)(i), time: Object(d.i)(i) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
