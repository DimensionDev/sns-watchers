;(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
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
          return b
        }),
        n.d(t, 'g', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return x
        }),
        n.d(t, 'b', function () {
          return T
        }),
        n.d(t, 'a', function () {
          return E
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
        b = function (e) {
          return e.placePicker.lastSearch.results
        },
        _ = function (e) {
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
        x = function (e) {
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
        E = function () {
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
        C = (n('TJCb'), n('DZ+c'), n('xZGM')),
        w = n('GTeL'),
        x = n('3XMw'),
        T = n.n(x),
        E = n('rHpw'),
        S = E.a.create(function (e) {
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
        M = 'altTextEducationSheetPrimaryAction',
        k = n('MWbm'),
        P = n('t62R'),
        D = n('p+r5'),
        L = T.a.feabf2a0,
        A = T.a.e36287c6,
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
                return t ? _.a.createElement(P.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, O) : null
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
                    k.a,
                    { style: S.root },
                    _.a.createElement(
                      k.a,
                      { style: S.attachmentContainer },
                      _.a.createElement(w.a, { mediaItem: a, orientedImage: r }),
                      _.a.createElement(D.a, {
                        accessibilityLabel: L,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: A,
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
          return Object(C.D)(e, C.a)
        },
        V = Object(B.a)()
          .propsFromState(function () {
            return { showEducationOnMount: N }
          })
          .propsFromActions(function () {
            return { addFlag: C.z }
          })
          .withAnalytics(),
        z = n('feu+'),
        j = T.a.ffe9ec3a,
        H = T.a.j063b261,
        W = T.a.e57144f0,
        U = T.a.f9f9210c,
        G = (function (e) {
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
                  return _.a.createElement(
                    k.a,
                    { style: K.root },
                    i
                      ? _.a.createElement(z.a, {
                          actionLabel: W,
                          headline: j,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: M,
                          secondaryActionLabel: U,
                          subtext: H,
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
        K = E.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        q = V(G),
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
        be = T.a.hac7c548,
        _e = T.a.e3dbfba3,
        Ce = T.a.dd4a83a5,
        we = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        xe = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_cropper', _.a.createRef()),
              y()(
                p()(a),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === we.sensitiveMedia
                    ? { namespace: he, title: Ce, renderer: a._renderSensitiveMediaTab }
                    : e === we.altText
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
                  s = !(null !== (t = r.state) && void 0 !== t && t.hideTabs),
                  l = s ? a._getTabLinks(e) : [],
                  c = o.renderer()
                return s && l.length > 1
                  ? _.a.createElement(
                      _.a.Fragment,
                      null,
                      _.a.createElement($.a, { accessibilityLabel: fe, links: l }),
                      _.a.createElement(k.a, { style: Z.a.segmentedControlChildren }, c),
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
                return _.a.createElement(q, {
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
                return _.a.createElement(Y.a, {
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
                  k.a,
                  { style: Z.a.rightControl },
                  a._hasMediaAtIndex(n) || a._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        k.a,
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
                          icon: _.a.createElement(se.a, null),
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
                  return _.a.createElement(
                    Q.c,
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
                        label: _.a.createElement(le.a, null),
                        key: we.crop,
                        accessibilityLabel: be,
                        isActive: function () {
                          return e === we.crop
                        },
                        onClick: function () {
                          return i.scribePageImpression()
                        },
                      }),
                    c.push({
                      to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.altText }) }),
                      label: _.a.createElement(P.b, { weight: 'bold' }, 'ALT'),
                      key: we.altText,
                      accessibilityLabel: _e,
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
                        label: _.a.createElement(ce.a, null),
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
        })(_.a.Component)
      t.b = xe
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
        b = n.n(y),
        _ = n('3rX5'),
        C = n('rHpw'),
        w = n('MWbm'),
        x = C.a.create(function (e) {
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
            style: [x.mask, { width: a, height: n }, t && x.circle],
          })
        },
        E = n('ZvMt'),
        S = n('97Jx'),
        I = n.n(S),
        R = n('m3Bd'),
        M = n.n(R),
        k = n('CHgo'),
        P = n('7ep7'),
        D = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        L = (function (e) {
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
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(k.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(k.b)(e, a._preventDefaultEvent, !1))
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
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, M()(e, D))
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
        A = n('9RkS'),
        O = n('rOXj'),
        F = n('aITJ'),
        B = n('yiKp'),
        N = n.n(B),
        V = n('Lsrn'),
        z = n('k/Ka'),
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
      j.metadata = { width: 24, height: 24 }
      var H = j,
        W = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
      W.metadata = { width: 24, height: 24 }
      var U = W,
        G = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
      G.metadata = { width: 24, height: 24 }
      var K = G,
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
          return Object(z.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
                              icon: g.a.createElement(H, null),
                              onPress: a._setAspectRatio(i),
                              size: 'medium',
                            }),
                            g.a.createElement(v.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: g.a.createElement(U, null),
                              onPress: a._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            g.a.createElement(v.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: g.a.createElement(K, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? g.a.createElement(
                            w.a,
                            { style: oe.zoomContainer },
                            g.a.createElement(A.a, {
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
                  o = E.a.getCoverDimensions({ width: i, height: r }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              h()(l()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = E.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
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
                      L,
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
        b = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(b),
        C = n('t62R'),
        w = n('piX5'),
        x = n('4r2z'),
        T = n('FG+G'),
        E = n('rHpw'),
        S = n('k/Ka'),
        I = n('shC7'),
        R = n('MWbm'),
        M = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        k = function (e) {
          return Object(S.a)('option', e)
        },
        P = 1,
        D = (function (e) {
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
              (a._id = 'SELECTOR_'.concat(P)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (P += 1),
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
                        ? E.a.theme.fontFamilies.japan
                        : I.a.getConstants().isRTL || x.a.isLocaleRTL(m)
                        ? E.a.theme.fontFamilies.rtl
                        : E.a.theme.fontFamilies.normal,
                    f = void 0 === i ? !!a : i,
                    g = new Set()
                  a && g.add(this._errorID), t && g.add(t), o && g.add(this._helperID)
                  var v = g.size ? r()(g).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      R.a,
                      {
                        style: [
                          w.a.border,
                          L.container,
                          n && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          f && w.a.invalidBorderColor,
                          p && f && w.a.focusedBorderInvalid,
                          l,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        M,
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
                          style: [L.select, { fontFamily: h }, n && w.a.disabled],
                          testID: c || '',
                          value: d,
                        },
                        u ? _.a.createElement(k, { disabled: !0, style: L.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            k,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: L.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(T.a, {
                        style: [L.dropdownCaret, p && w.a.validColor, (i || a) && w.a.invalidColor],
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
                    C.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: L.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return _.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      C.b,
                      { color: 'gray700', nativeID: this._helperID, style: L.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return _.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      C.b,
                      { color: 'red500', nativeID: this._errorID, style: L.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      g()(D, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (D.propTypes = {})
      var L = E.a.create(function (e) {
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
      t.a = D
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
        s = n('rHpw'),
        l = s.a.create(function (e) {
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
      var h = s.a.create(function (e) {
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
                return r.a.createElement(o.a, { style: l.icon })
              default:
                return null
            }
          })(t),
          C = v ? null : h.withSubtext,
          w = d.a.generate({
            backgroundColor: s.a.theme.colors.gray0,
            color: s.a.theme.colors.cellBackground,
            customFocusBackgroundColor: s.a.theme.colors.gray0,
            customHoverBackgroundColor: s.a.theme.colors.gray0,
            customPressedBackgroundColor: s.a.theme.colors.gray0,
          })
        return r.a.createElement(
          u.a,
          {
            interactiveStyles: n ? w : null,
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
              { numberOfLines: 3, size: 'headline1', style: C, weight: 'heavy', withHashflags: !0 },
              b,
            ),
            r.a.createElement(
              p.a,
              { style: h.rightControlGroup },
              n ? r.a.createElement(p.a, { style: C }, r.a.createElement(c.a, { style: h.iconArrow })) : null,
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
    '9Jxp': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('CXUS'),
        l = n('rHpw'),
        c = n('MWbm'),
        d = l.a.create(function () {
          return { hidden: { opacity: 0 } }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.draggableId,
          a = e.fromVirtualList,
          i = e.index,
          l = e.isBeingDragged,
          u = e.isDragDisabled
        return a && l
          ? o.a.createElement(c.a, { style: d.hidden }, t)
          : o.a.createElement(s.b, { draggableId: n, index: i, isDragDisabled: u }, function (e) {
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
      function b(e) {
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
          b = r.a.createElement(i.a, { mediaItem: n, orientedImage: o })
        return r.a.createElement(
          l.a,
          { style: _.root },
          r.a.createElement(
            l.a,
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
      var _ = p.a.create(function (e) {
        return {
          modalContainer: { width: '100%', height: '100%', flexGrow: 1 },
          root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
        }
      })
    },
    DVtB: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return g
      }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'c', function () {
          return b
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
        c = (n('yH/f'), n('oEOe')),
        d = n('kGix'),
        u = n('Ssj5'),
        p = 'trustedFriends',
        m = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        h = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        f = 'rweb/trustedFriendsLists/SET_TRUSTED_FRIENDS_LIST',
        g = function (e) {
          return e.trustedFriends.lists
        },
        v = function () {
          return function (e, t, n) {
            var a = n.api
            return c.b(e, { request: a.TrustedFriends.createTrustedFriendsList })({
              actionTypes: h,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        y = function () {
          return function (e, t) {
            var n = t(),
              a = g(n)
            ;(a.length ? a[0] : void 0) ||
              e(function (e, t, n) {
                var a = n.api
                return c.b(e, { request: a.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: m,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && v && e(v())
              })
          }
        },
        b = function (e) {
          return function (t, n) {
            var a = n(),
              r = g(a),
              i = l()(r, 1)[0]
            if (i) {
              var s = o()(o()({}, i), {}, { member_count: e })
              t({ payload: s, type: f })
            }
          }
        },
        _ = Object.freeze({ lists: [], fetchStatus: d.a.NONE })
      u.a.register(
        r()({}, p, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return o()(o()({}, e), {}, { fetchStatus: d.a.LOADING })
            case m.FAILURE:
              return o()(o()({}, e), {}, { error: t.payload, fetchStatus: d.a.FAILED })
            case m.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: d.a.LOADED },
                )
              break
            case h.REQUEST:
              return o()(o()({}, e), {}, { fetchStatus: d.a.LOADING })
            case h.FAILURE:
              return o()(o()({}, e), {}, { error: t.payload, fetchStatus: d.a.FAILED })
            case h.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, e),
                  {},
                  { lists: [t.payload.trusted_friends_list_create], error: null, fetchStatus: d.a.LOADED },
                )
              break
            case f:
              if (t.payload) return o()(o()({}, e), {}, { lists: [t.payload] })
              break
            default:
              return e
          }
          return e
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
        b = n('21U8'),
        _ = n('rHpw'),
        C = n('1auM'),
        w = n('eYns'),
        x = g.a.gff1f69e,
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
                    : h.a.createElement(y.a, { accessibilityLabel: x, style: E.activityIndicator })
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
                        { style: E.cropper },
                        h.a.createElement(b.a, {
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
        E = _.a.create(function (e) {
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
        return C
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
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
        C = (function (e) {
          l()(n, e)
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
                      s,
                      l = v.a.theme.aspectRatios.minTimelineImage,
                      c = v.a.theme.aspectRatios.maxTimelineImage
                    i = y.a.getImageAspectRatio(l, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return h.a.createElement(
                    b.a,
                    { ratio: t ? i : r / a },
                    h.a.createElement(g.a, { style: w.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
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
                      { style: w.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, w.gutterRight),
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
                      { style: w.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, w.gutterRight),
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
                      { style: w.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], w.gutterRight),
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
                    { style: [w.column, t] },
                    this._renderMediaAtIndex(e[0], w.gutterBottom),
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
                    C = u && s && l,
                    x = C && _ && !!p
                  return h.a.createElement(f.a, {
                    accessibilityLabel: y || b,
                    accessibilityRole: 'group',
                    enableGif: l,
                    key: v.id,
                    mediaItem: v,
                    onClick: d ? d(v.id) : void 0,
                    onEdit: u ? u(v.id) : void 0,
                    onEditSensitiveWarning: p && x ? p(v.id) : void 0,
                    onRemove: m(v.id),
                    ref: g,
                    style: [w.mediaContainer, t],
                    withAltTextLabel: !!y,
                    withCloseButton: s && l,
                    withEditButton: C,
                    withEditSensitiveWarningButton: x,
                  })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(C, 'contextType', _.a)
      var w = v.a.create(function (e) {
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
    LtQU: function (e, t, n) {
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
    PKbs: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      })
      n('yH/f'), n('M+/F'), n('z84I'), n('ho0z'), n('1t7P'), n('jQ/y')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('t62R'),
        s = n('3XMw'),
        l = n.n(s),
        c = n('MWbm'),
        d = r.a.createElement(
          l.a.I18NFormatMessage,
          { $i18n: 'i5ba24f4' },
          r.a.createElement(
            o.b,
            { link: 'https://help.twitter.com/en/rules-and-policies/twitter-rules', withInteractiveStyling: !1 },
            l.a.b154b059,
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
                s = e.name,
                l = e.rest_id,
                c = t(e),
                d = n(a + 1),
                u = r.a.createElement(o.b, { weight: 'bold' }, s)
              return r.a.createElement(p.a, { description: i, key: l, label: u, link: c, thumbnail: d })
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
        C = _.a.create(function (e) {
          return { icon: { color: e.colors.gray300, flexShrink: 0, paddingLeft: e.spaces.space12 } }
        }),
        w = function (e) {
          var t = e.badge,
            n = e.rule,
            a = n.description,
            i = n.name,
            s = r.a.createElement(o.b, { weight: 'bold' }, i)
          return r.a.createElement(p.a, {
            description: a,
            label: s,
            renderRightContent: function () {
              return r.a.createElement(b.a, { style: C.icon })
            },
            thumbnail: t,
          })
        },
        x = n('CXUS'),
        T = function (e) {
          var t = e.onReorder,
            n = e.renderBadge,
            a = e.rules
          return r.a.createElement(
            x.a,
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
            r.a.createElement(x.c, { droppableId: 'droppable' }, function (e, t) {
              return r.a.createElement(
                'div',
                f()({}, e.droppableProps, { ref: e.innerRef }),
                a.map(function (e, a) {
                  var i = e.rest_id
                  return r.a.createElement(
                    y.a,
                    { draggableId: i, index: a, isBeingDragged: t.draggingFromThisWith === i, key: i },
                    r.a.createElement(w, { badge: n(a + 1), rule: e }),
                  )
                }),
                e.placeholder,
              )
            }),
          )
        },
        E = n('C6f5'),
        S = n('X00g'),
        I = n('h0NW'),
        R = Object.freeze({ Default: 'Default', Pivot: 'Pivot', Reorder: 'Reorder' }),
        M = function (e, t) {
          var n = t.badgeStyle,
            a = t.enabled,
            i = t.theme,
            s = S.a.getCommunityUIColor(i)
          return r.a.createElement(
            c.a,
            { style: [k.badge, a && { backgroundColor: s }, n] },
            r.a.createElement(o.b, { align: 'center', color: 'white', weight: 'bold' }, e),
          )
        },
        k = _.a.create(function (e) {
          return {
            badge: {
              backgroundColor: e.colors.primary,
              borderRadius: e.borderRadii.infinite,
              justifyContent: 'center',
              overflow: 'hidden',
              height: e.spaces.space32,
              width: e.spaces.space32,
            },
            bottomMargin: { marginBottom: E.a },
          }
        })
      t.b = function (e) {
        var t = e.badgeStyle,
          n = e.displayType,
          a = void 0 === n ? R.Default : n,
          o = e.explanation,
          s = e.getPivotLink,
          l = e.headerContainerStyle,
          d = e.headerExplanationStyle,
          p = e.heading,
          h = e.limit,
          f = e.onReorder,
          g = e.ruleContainerStyle,
          v = e.rules,
          y = e.theme,
          b = e.withBottomMargin,
          _ = void 0 !== b && b,
          C = e.withHeader,
          w = void 0 === C || C,
          x = {
            theme: y,
            enabled: r.a.useContext(i.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            badgeStyle: t,
          },
          E = (function (e, t, n) {
            return (t ? e.slice(0, t) : e).map(function (e, t) {
              return { label: e.name, description: e.description, decoration: M(t + 1, n) }
            })
          })(v, h, x),
          S = function (e) {
            return M(e, x)
          }
        return E.length > 0
          ? r.a.createElement(
              c.a,
              { style: _ ? k.bottomMargin : null },
              w ? r.a.createElement(u, { containerStyle: l, explanation: o, explanationStyle: d, heading: p }) : null,
              a === R.Pivot && s
                ? r.a.createElement(m, { getPivotLink: s, renderBadge: S, rules: v })
                : a === R.Reorder && f
                ? r.a.createElement(T, { onReorder: f, renderBadge: S, rules: v })
                : r.a.createElement(I.a, { containerStyle: g, items: E }),
            )
          : null
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
    WOwf: function (e, t, n) {
      'use strict'
      function a(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return a
      })
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
        b = n('KEM+'),
        _ = n.n(b),
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
        x = n('dDSG'),
        T = n('pXBW'),
        E = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('ddV6'),
        R = n.n(I),
        M = n('+Kfv'),
        k = n('eSoz'),
        P = n('rxPX'),
        D = function (e, t) {
          var n = t.communityId
          return n ? k.c.select(e, n) : void 0
        },
        L = Object(P.a)().propsFromState(function () {
          return { community: D }
        }),
        A = n('MtXG'),
        O = n('t62R'),
        F = n('CKsB'),
        B = n('rHpw'),
        N = n('3XMw'),
        V = n.n(N),
        z = V.a.d58baa7e,
        j = L(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var i,
              o = n.member_count
            return w.a.createElement(F.a, {
              actionSubText:
                ((i = z(o)),
                w.a.createElement(
                  A.a.Group,
                  null,
                  w.a.createElement(
                    A.a,
                    null,
                    w.a.createElement(
                      O.b,
                      { color: 'white' },
                      w.a.createElement(
                        V.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(A.a.Value, null, V.a.ibd0106d({ formattedCount: i })),
                        w.a.createElement(A.a.Label, null, V.a.cface2d0({ count: o })),
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
              style: H.menuItem,
            })
          }),
        ),
        H = B.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        W = n('0zXz'),
        U = n('FS1z'),
        G = n('Irs7'),
        K = n('MWbm'),
        q = n('yw4N'),
        X = n('/yvb'),
        Y = n('+Eiw'),
        Q = n('Zg3A'),
        J = n('EyD/'),
        Z = n('5wO0'),
        $ = V.a.e815fc33,
        ee = V.a.c63602d3,
        te = V.a.baffe39a,
        ne = V.a.aa4209e8,
        ae = V.a.d0748dae,
        re = V.a.abd845fd,
        ie = { viewType: 'everyone' },
        oe = { viewType: 'community' },
        se = V.a.d58baa7e,
        le = B.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: Y.a.getBackgroundImage() },
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
            s = e.dismiss,
            l = e.hasMemberships,
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
            C = Object(G.b)(),
            x = w.a.useCallback(
              function (e) {
                return function () {
                  m(e),
                    ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                      f({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } }),
                    s()
                }
              },
              [m, f, s],
            ),
            T = w.a.useCallback(
              function () {
                if (b)
                  return (
                    C.scribe({
                      section: 'audience_selector',
                      component: 'trusted_friends',
                      element: 'edit_list_button',
                      action: 'click',
                    }),
                    c.push('/i/circles/'.concat(b, '/members'))
                  )
              },
              [C, c, b],
            )
          return w.a.createElement(
            K.a,
            { style: le.root },
            w.a.createElement(
              q.a,
              { style: le.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(O.b, { size: 'headline1', style: le.title, weight: 'bold' }, $),
                w.a.createElement(
                  M.a,
                  { behavioralEventContext: ie },
                  w.a.createElement(F.a, {
                    Icon: Q.a,
                    actionText: te,
                    isSelected: !v && !g && !y,
                    onClick: x({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: le.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                u
                  ? w.a.createElement(F.a, {
                      Icon: J.a,
                      actionText: ne,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!v,
                      onClick: x({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: le.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                p && e.trustedFriendsList && b
                  ? w.a.createElement(F.a, {
                      Icon: Z.a,
                      actionSubText:
                        ((r = _),
                        (i = se(r)),
                        w.a.createElement(
                          A.a.Group,
                          null,
                          w.a.createElement(
                            A.a,
                            null,
                            w.a.createElement(
                              O.b,
                              { color: 'white' },
                              w.a.createElement(
                                V.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(A.a.Value, null, V.a.a5f7b70f({ formattedCount: i })),
                                w.a.createElement(A.a.Label, null, V.a.a7daec1e({ count: r })),
                              ),
                            ),
                            w.a.createElement(X.a, { onPress: T, size: 'xSmall', type: 'primaryText' }, re),
                          ),
                        )),
                      actionText: ae,
                      iconThumbnailColor: 'success',
                      isSelected: !!y,
                      onClick: x({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsMemberCount: _,
                        trustedFriendsValue: { trusted_friends_list_id: b },
                      }),
                      selectable: !0,
                      style: le.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              l && h && d
                ? w.a.createElement(
                    K.a,
                    null,
                    w.a.createElement(
                      M.a,
                      { behavioralEventContext: oe },
                      w.a.createElement(O.b, { style: le.title, weight: 'bold' }, ee),
                      w.a.createElement(U.a, {
                        module: h,
                        noItemsRenderer: W.a,
                        renderer: function (e) {
                          return w.a.createElement(j, {
                            clickHandler: x,
                            communityId: e,
                            dismiss: s,
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
        be = n('DVtB'),
        _e = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? k.c.select(e, n) : void 0
        },
        Ce = function (e, t) {
          return Object(ve.D)(e, ve.f)
        },
        we = function (e, t) {
          return Object(ve.D)(e, ve.w)
        },
        xe = function (e) {
          var t = Object(be.b)(e)
          return t.length ? t[0] : void 0
        },
        Te = Object(P.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: Ce,
              trustedFriendsEducationVisibilityFlag: we,
              hasMemberships: fe.d,
              selectedCommunity: _e,
              sliceModule: Object(he.createSelector)(ge.r, function (e) {
                return e ? me(e) : void 0
              }),
              selectTrustedFriendsList: xe,
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
              fetchOrCreateTrustedFriendsList: be.a,
            }
          }),
        Ee = n('FG+G'),
        Se = n.p + 'twitter-circle.b1a74a95.svg',
        Ie = n('TIdA'),
        Re = n('A91F'),
        Me = V.a.f0598964,
        ke = V.a.ceec051b,
        Pe = V.a.fc5bfd95,
        De = V.a.f5b3dc1d,
        Le = B.a.create(function (e) {
          return {
            root: { flexDirection: 'column', paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space12 },
            createButton: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
            coverContainer: { height: '170px', width: '100%' },
          }
        }),
        Ae = function (e) {
          var t = e.onAction,
            n = e.setShowTrustedFriendsModal
          return w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              K.a,
              {
                accessibilityDescribedBy: 'trusted-friends-education-popover',
                accessibilityLabelledBy: 'trustd-friends-education-title',
                accessibilityRole: 'dialog',
                style: Le.root,
              },
              w.a.createElement(
                K.a,
                { style: Le.coverContainer },
                w.a.createElement(Ie.a, { accessibilityLabel: '', aspectMode: Re.a.COVER, image: Se }),
              ),
              w.a.createElement(
                K.a,
                { style: Le.title },
                w.a.createElement(
                  O.b,
                  { nativeID: 'conversation-controls-title', size: 'title3', style: Le.title, weight: 'bold' },
                  Me,
                ),
                w.a.createElement(
                  O.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body', style: Le.createButton },
                  ke,
                ),
                w.a.createElement(
                  X.a,
                  {
                    onPress: function () {
                      t(), n(!0)
                    },
                    size: 'xLarge',
                    style: Le.createButton,
                    type: 'primaryFilled',
                  },
                  Pe,
                ),
                w.a.createElement(
                  X.a,
                  {
                    key: 'button_cancel',
                    onPress: function () {
                      t()
                    },
                    size: 'xLarge',
                    style: Le.cancelButton,
                    type: 'primaryOutlined',
                  },
                  De,
                ),
              ),
            ),
          )
        },
        Oe = n('7JQg'),
        Fe = n('feu+'),
        Be = n('cOhU'),
        Ne = n('a5gf'),
        Ve = n('Lsrn'),
        ze = n('k/Ka'),
        je = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ze.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ve.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M1 7c0-.552.448-1 1-1h9.38c.545-2.275 2.83-3.678 5.104-3.135 1.552.37 2.764 1.583 3.135 3.135H22c.552 0 1 .448 1 1s-.448 1-1 1h-2.38c-.545 2.275-2.83 3.678-5.104 3.135-1.552-.37-2.764-1.583-3.135-3.135H2c-.552 0-1-.448-1-1zm21 9h-9.38c-.545-2.275-2.83-3.678-5.104-3.135-1.552.37-2.764 1.583-3.135 3.135H2c-.552 0-1 .448-1 1s.448 1 1 1h2.38c.545 2.275 2.83 3.678 5.104 3.135 1.552-.37 2.764-1.583 3.135-3.135H22c.552 0 1-.448 1-1s-.448-1-1-1z',
              }),
            ),
          )
        }
      je.metadata = { width: 24, height: 24 }
      var He = je,
        We = V.a.e76b4485,
        Ue = V.a.j24c37b2,
        Ge = V.a.bb55e8ed,
        Ke = V.a.h3fad86e,
        qe = V.a.g31872be,
        Xe = V.a.b28ec85f,
        Ye = V.a.h0318479
      function Qe(e) {
        var t = e.changeAudienceToTrustedFriends,
          n = e.history,
          a = e.setShowModal,
          r = e.trustedFriendsListId,
          i = w.a.useCallback(
            function () {
              t(), r && (a(!1), n.push('/i/circles/'.concat(r, '/members')))
            },
            [n, a, r, t],
          ),
          o = w.a.useCallback(
            function () {
              a(!1), t()
            },
            [a, t],
          ),
          s = w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              K.a,
              { style: Je.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Be.a, { style: Je.icon })),
              w.a.createElement(
                K.a,
                { style: Je.subtextContainer },
                w.a.createElement(
                  O.b,
                  { align: 'left', color: 'text', style: Je.subtextContainer, weight: 'bold' },
                  Ge,
                ),
                w.a.createElement(O.b, { align: 'left', color: 'gray700' }, Ke),
              ),
            ),
            w.a.createElement(
              K.a,
              { style: Je.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Ne.a, { style: Je.icon })),
              w.a.createElement(
                K.a,
                { style: Je.subtextContainer },
                w.a.createElement(O.b, { color: 'text', weight: 'bold' }, qe),
                w.a.createElement(O.b, { color: 'gray700' }, Xe),
              ),
            ),
            w.a.createElement(
              K.a,
              { style: Je.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(He, { style: Je.icon })),
              w.a.createElement(
                K.a,
                { style: Je.subtextContainer },
                w.a.createElement(O.b, { color: 'text', weight: 'bold' }, Ye),
                w.a.createElement(
                  O.b,
                  { color: 'gray700' },
                  w.a.createElement(
                    V.a.I18NFormatMessage,
                    { $i18n: 'c97dfde4' },
                    w.a.createElement(
                      O.b,
                      {
                        color: 'text',
                        link: 'https://help.twitter.com/using-twitter/twitter-circle',
                        style: Je.learnMore,
                        weight: 'bold',
                        withUnderline: !0,
                      },
                      V.a.b2f72d11,
                    ),
                  ),
                ),
              ),
            ),
          )
        return w.a.createElement(
          Oe.c,
          null,
          w.a.createElement(Fe.a, {
            actionLabel: Ue,
            headline: We,
            onAction: i,
            onClose: o,
            subtext: s,
            withCloseButton: !0,
          }),
        )
      }
      var Je = B.a.create(function (e) {
          return {
            subtextContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
            icon: { color: e.colors.green500, paddingTop: e.spaces.space4, paddingRight: e.spaces.space24 },
            learnMore: { whiteSpace: 'nowrap' },
            contentWrapper: { display: 'flex', flexDirection: 'row', paddingTop: e.spaces.space32 },
          }
        }),
        Ze = n('FGLp'),
        $e = n('X00g'),
        et = n('Sp5X'),
        tt = n('efqG'),
        nt = V.a.baffe39a,
        at = V.a.e815fc33,
        rt = V.a.aa4209e8,
        it = V.a.d0748dae,
        ot = { viewType: 'communities_controls' },
        st = w.a.createElement(Ee.a, null)
      var lt = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        ct = Te(function (e) {
          var t,
            n = w.a.useContext(de.a),
            a = w.a.useState(!1),
            i = R()(a, 2),
            o = i[0],
            s = i[1],
            l = w.a.useState(!1),
            c = R()(l, 2),
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
            C = e.selectTrustedFriendsList,
            x = e.selectedCommunity,
            T = e.sliceModule,
            E = e.trustedFriendsEducationVisibilityFlag,
            S = e.updateSingleComposer,
            I = n.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            k = h.communityIdValue || !1,
            P = h.exclusivityControlValue || !1,
            D = h.trustedFriendsValue || !1,
            L = null == C ? void 0 : C.rest_id,
            A = b && E,
            O = (f && !x) || A,
            F = nt
          if ((k && null != x && x.name ? (F = x.name) : P ? (F = rt) : D && (F = it), P))
            t = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
          else if (D) t = { color: 'green500', borderColor: 'green500', backgroundColor: 'transparent' }
          else if (k && null != x && x.theme && I) {
            var B = $e.a.getCommunityUIColorName(x.theme)
            t = { color: B, borderColor: B, backgroundColor: 'transparent' }
          } else t = { type: 'brandOutlined' }
          Object(Ze.a)(function () {
            var t = e.fetchOrCreateTrustedFriendsList
            b && (null == t || t())
          })
          var N = w.a.useCallback(
              function () {
                u(!1), p(), m()
              },
              [p, m],
            ),
            V = w.a.useCallback(
              function (e) {
                return A && !k
                  ? w.a.createElement(Ae, { history: et.a, onAction: e, setShowTrustedFriendsModal: s })
                  : w.a.createElement(ce, {
                      audienceControlsValue: h,
                      dismiss: e,
                      hasMemberships: g,
                      history: et.a,
                      isC9sParticipationEnabled: v,
                      isSuperFollowsCreator: y,
                      isTrustedFriendsEnabled: b,
                      onAudienceControlsValueChange: function (e) {
                        N(), _(e)
                      },
                      sliceModule: T,
                      trustedFriendsList: C,
                      updateSingleComposer: S,
                    })
              },
              [N, T, S, h, g, v, y, C, _, k, A, b],
            ),
            z = w.a.useCallback(
              function () {
                L &&
                  _({
                    _type: 'trusted_friends_tweet',
                    conversationControlsValue: 'trusted_friends_tweet',
                    trustedFriendsMemberCount: null == C ? void 0 : C.member_count,
                    trustedFriendsValue: { trusted_friends_list_id: L },
                  })
              },
              [_, L, C],
            )
          return y || g || (b && e.selectTrustedFriendsList)
            ? w.a.createElement(
                M.a,
                { behavioralEventContext: ot },
                w.a.createElement(
                  K.a,
                  { style: lt.container },
                  o
                    ? w.a.createElement(Qe, {
                        changeAudienceToTrustedFriends: z,
                        history: et.a,
                        setShowModal: s,
                        trustedFriendsListId: L,
                      })
                    : null,
                  w.a.createElement(
                    tt.a,
                    {
                      onDismiss: N,
                      onOpen: function () {
                        u(!0)
                      },
                      renderContent: V,
                      visibilityBehavior: O && !o ? 'forceVisible' : 'interactive',
                    },
                    w.a.createElement(
                      X.a,
                      r()(
                        {
                          accessibilityExpanded: d,
                          accessibilityHasPopup: 'menu',
                          accessibilityLabel: at,
                          accessibilityRole: 'button',
                          icon: st,
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
        dt = n('PKbs'),
        ut = function (e, t) {
          var n = t.selectedCommunityId
          return n ? k.c.select(e, n) : void 0
        },
        pt = Object(P.a)()
          .propsFromState(function () {
            return { community: ut }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ye.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        mt = n('YeIG'),
        ht = n('21zW'),
        ft = V.a.gfca5254,
        gt = V.a.f510c8b2,
        vt = w.a.createElement(O.b, { weight: 'bold' }, gt),
        yt = B.a.create(function (e) {
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
        bt = pt(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.selectedCommunityId,
            o = e.showMiddot
          w.a.useEffect(
            function () {
              i && Object(mt.a)(t) && a(i).catch(n())
            },
            [t, i, n, a],
          )
          var s = w.a.useState(!1),
            l = R()(s, 2),
            c = l[0],
            d = l[1],
            u = w.a.useContext(de.a).featureSwitches,
            p = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(dt.b, {
                    badgeStyle: yt.badgeStyle,
                    headerContainerStyle: yt.rulesHeader,
                    heading: vt,
                    ruleContainerStyle: yt.ruleContainerStyle,
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
              h = $e.a.getCommunityUIColorName(m),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              K.a,
              { style: yt.container },
              o ? w.a.createElement(ht.a, null) : null,
              w.a.createElement(
                tt.a,
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
                  X.a,
                  r()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: yt.button,
                    },
                    f,
                  ),
                  ft,
                ),
              ),
            )
          }
          return null
        }),
        _t = n('ii+P'),
        Ct = n('4zmP'),
        wt = V.a.g46f363d,
        xt = { viewType: 'rule_education' },
        Tt = function () {
          var e = Object(_t.a)(ve.g),
            t = R()(e, 2),
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
                  K.a,
                  { style: Et.container },
                  w.a.createElement(Ct.a, { behavioralEventContext: xt, onClose: a, text: wt, withCloseButton: !0 }),
                )
              : null
          )
        },
        Et = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        St = w.a.memo(Tt),
        It = n('H7Rt'),
        Rt = n('m3Bd'),
        Mt = n.n(Rt),
        kt = n('yZqq'),
        Pt = function (e, t) {
          return Object(ve.D)(e, ve.s)
        },
        Dt = Object(P.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Pt }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ve.z)(ve.s)
              },
            }
          }),
        Lt = V.a.aa65a449,
        At = { viewType: 'persistent_conversation_controls_education' }
      var Ot = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        Ft = Dt(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = w.a.useContext(de.a).featureSwitches,
            i = w.a.useState(),
            o = R()(i, 2),
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
                  K.a,
                  { style: Ot.container },
                  w.a.createElement(Ct.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: At,
                    onClose: c,
                    text: Lt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        Bt = n('DlMI'),
        Nt = n('gBde'),
        Vt = n('gUPl'),
        zt = ['analytics'],
        jt = w.a.createElement(Bt.a, null),
        Ht = w.a.createElement(Nt.a, null),
        Wt = w.a.createElement(Vt.a, null),
        Ut = w.a.createElement(Be.a, null),
        Gt = w.a.createElement(Ne.a, null),
        Kt = 'conversation_control',
        qt = { viewType: Kt },
        Xt = Object.freeze({
          all: { icon: jt, label: V.a.i8ea6d4e },
          community: { icon: Wt, label: V.a.ec5a4a25 },
          by_invitation: { icon: Ht, label: V.a.b4543009 },
          community_members: { icon: Ut, label: V.a.i13be5a0 },
          super_followers_exclusive: { icon: jt, label: V.a.f8393bda },
          trusted_friends_tweet: { icon: Gt, label: V.a.c0857ccd },
        }),
        Yt =
          (Object.freeze(['community', 'by_invitation']),
          Object(G.a)(function (e) {
            var t = e.analytics,
              n = Mt()(e, zt),
              a = e.disabled,
              r = e.value,
              i = Xt[r],
              o = i.icon,
              s = i.label,
              l = w.a.useState(!1),
              c = R()(l, 2),
              d = c[0],
              u = c[1],
              p = w.a.useRef(null)
            Object(Ze.a)(function () {
              r !== It.a.all && r !== It.a.community_members && u(!0)
            })
            var m = w.a.useCallback(
              function (e) {
                t.scribe({ element: Kt, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              M.a,
              { behavioralEventContext: qt },
              d ? w.a.createElement(Ft, { buttonRef: p.current }) : null,
              w.a.createElement(
                K.a,
                { style: Qt.controlsContainer },
                w.a.createElement(
                  kt.a,
                  n,
                  w.a.createElement(
                    X.a,
                    { disabled: a, icon: o, onPress: m, ref: p, size: 'xSmall', style: Qt.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        Qt = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        Jt = n('krmn'),
        Zt = n('cIoY'),
        $t = n('w3n3'),
        en = n('MLl7'),
        tn = n('1auM'),
        nn = n('07FG'),
        an = n('Q8CU'),
        rn = n('QbaN'),
        on = n('VPdC'),
        sn = n('WPfJ'),
        ln = B.a.create(function (e) {
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
              zIndex: sn.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: sn.e },
            iconEmojiPicker: { zIndex: sn.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: sn.a,
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
        cn = V.a.bdbcdd93,
        dn = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            i = n || t.length >= 4,
            o = t.length < 3
          return w.a.createElement(on.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? cn : void 0,
            disabled: i,
            multiple: o,
            onChange: a,
            onPress: r,
            style: [ln.toolBarButton, ln.firstToolBarButton],
            type: 'brandText',
          })
        },
        un = n('oQhu'),
        pn = n('p+r5'),
        mn = n('GWvE'),
        hn = (function (e) {
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
                    s = e.onChange
                  return w.a.createElement(
                    K.a,
                    { style: fn.root },
                    w.a.createElement(pn.a, {
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
                      style: fn.formTextInput,
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
                    (this.value && !Object(mn.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      _()(hn, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var fn = B.a.create(function (e) {
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
        gn = hn,
        vn = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        yn = n('6XNv'),
        bn = (function (e) {
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
                    d = Object(vn.a)(i, r + 1).map(function (e) {
                      return { label: ''.concat(V.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(yn.a, {
                    disabled: l,
                    label: n,
                    onChange: o,
                    options: d,
                    style: [_n.selector, !a && _n.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      _()(bn, 'defaultProps', { last: !1 })
      var _n = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Cn = bn,
        wn = 'addPollChoice',
        xn = 'selectPollDays',
        Tn = 'selectPollHours',
        En = 'selectPollMinutes',
        Sn = 'removePollButton',
        In = V.a.caf8edc4,
        Rn = V.a.g93586be,
        Mn = V.a.d073b644,
        kn = V.a.a2f0728e,
        Pn = (function (e) {
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
                    s = { days: n, hours: o, minutes: 7 === n ? 0 : 0 === n && 0 === o && i < 5 ? 5 : i }
                  return t && t(s), { duration: s }
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
                  return w.a.createElement(
                    K.a,
                    { style: n },
                    w.a.createElement(O.b, { style: Dn.durationLabel }, t ? In : ''),
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
                    K.a,
                    { style: Dn.durationControls },
                    w.a.createElement(Cn, {
                      editable: t && n,
                      label: Rn,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: xn,
                      value: r,
                    }),
                    w.a.createElement(Cn, {
                      editable: t && n,
                      label: Mn,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Tn,
                      value: i,
                    }),
                    w.a.createElement(Cn, {
                      editable: t && n,
                      label: kn,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === i ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: En,
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
      _()(Pn, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var Dn = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Ln = Pn,
        An = n('iY63'),
        On = n('jtO7'),
        Fn = V.a.g589c2e1,
        Bn = V.a.a1e6c3a1,
        Nn = V.a.a739e006,
        Vn = V.a.d89a5b92,
        zn = V.a.c2a8118d,
        jn = V.a.a8ede1de,
        Hn = V.a.af40a8ef,
        Wn = (function (e) {
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
                  s = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                i && i.length >= 2 && s ? a() : n(), t && t({ choices: i, duration: r.duration })
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
                      K.a,
                      { style: Un.rightColumn },
                      s < 4
                        ? w.a.createElement(X.a, {
                            accessibilityLabel: jn,
                            disabled: !(t && r),
                            hoverLabel: { label: Hn },
                            icon: w.a.createElement(An.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: Un.addButton,
                            testID: wn,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    K.a,
                    { style: Un.choicesAndAddButton },
                    w.a.createElement(
                      K.a,
                      { style: Un.choices },
                      w.a.createElement(gn, {
                        autoFocus: o,
                        defaultValue: a[0],
                        editable: t && r,
                        label: Fn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(gn, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: Bn,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(gn, {
                            autoFocus: o,
                            defaultValue: a[2],
                            editable: t && r,
                            label: Nn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(gn, {
                            autoFocus: o,
                            defaultValue: a[3],
                            editable: t && r,
                            label: Vn,
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
                    K.a,
                    { style: Un.root },
                    this._renderChoices(),
                    w.a.createElement(Ln, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: Un.durationPicker,
                    }),
                    w.a.createElement(
                      K.a,
                      { style: Un.removePollButton },
                      w.a.createElement(On.a, { color: 'red500', label: zn, onPress: r, testID: Sn }),
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
        Un = B.a.create(function (e) {
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
        Gn = Object(G.a)(Wn),
        Kn = n('+d3d'),
        qn = ['onChange'],
        Xn = function (e) {
          var t = e.composerIndex,
            n = e.editable,
            a = e.initialChoices,
            i = e.initialDuration,
            o = e.isActive,
            s = e.isPollValid,
            l = e.updateComposer,
            c = Object(G.b)(),
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
            p = Mt()(d, qn),
            m = w.a.useMemo(
              function () {
                return Object(Kn.a)(
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
            Gn,
            r()({ editable: n, initialChoices: a, initialDuration: i, isActive: o, onBlur: h, onChange: m }, p),
          )
        },
        Yn = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        Qn = V.a.i859676b,
        Jn = w.a.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            O.b,
            { link: '/settings/audience_and_tagging', style: Yn.link, withInteractiveStyling: !0, withUnderline: !0 },
            V.a.c9a48d3f,
          ),
        )
      function Zn() {
        return w.a.createElement(K.a, { style: Yn.container }, w.a.createElement(Ct.a, { headline: Qn, text: Jn }))
      }
      var $n = n('b5s6'),
        ea = n('rcen'),
        ta = n('zmS9'),
        na = 'addButton',
        aa = 'addSubtitlesLabel',
        ra = 'altTextLabel',
        ia = 'tagPeopleLabel',
        oa = 'attachments',
        sa = 'createPollButton',
        la = 'geoButton',
        ca = 'gifSearchButton',
        da = 'scheduleOption',
        ua = 'taggedUsersLabel',
        pa = 'tweetTextarea_',
        ma = 'toolBar',
        ha = 'scheduledTweetIndicator',
        fa = n('xM7j'),
        ga = n('6OUF'),
        va = n('tZIO'),
        ya = n('5mJL'),
        ba = n('DNho'),
        _a = n('jhWN'),
        Ca = n('rFBM'),
        wa = n('zfvc'),
        xa = n('Ujvi'),
        Ta = n('yTN1'),
        Ea = n('gpVt'),
        Sa = n('hOZg'),
        Ia = n('ll3R'),
        Ra = n('J0mu'),
        Ma = n('EfHu'),
        ka = n('KrGU'),
        Pa = n('boUI'),
        Da = n('6ZHn'),
        La = n('/WPq'),
        Aa = n('wpLu'),
        Oa = n('pHub'),
        Fa = n('8A5z'),
        Ba = n('G31s'),
        Na = n('S1qy'),
        Va = n.n(Na),
        za = n('cjAp'),
        ja = n.n(za),
        Ha = V.a.f0afcc0e,
        Wa = V.a.ha5e2e79,
        Ua = V.a.a3de3b68,
        Ga = V.a.cc2b28fc,
        Ka = V.a.g45af04e,
        qa = V.a.j1d5791c,
        Xa = V.a.ee9c4013,
        Ya = V.a.af40a8ef,
        Qa = V.a.e68b09b4,
        Ja = V.a.ec10ee02,
        Za = V.a.h735a98d,
        $a = V.a.c4ccfbe2,
        er = V.a.j499fbcb,
        tr = V.a.b7d8e3f0,
        nr = V.a.d1175c78,
        ar = V.a.bf4e9d79,
        rr = V.a.e0342f98,
        ir = V.a.e349147b,
        or = V.a.e3a24e4b,
        sr = V.a.fbd24526,
        lr = V.a.de4669e2,
        cr = V.a.d2c7a41c,
        dr = V.a.f7364fa1,
        ur = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        pr = V.a.ia24dc8c,
        mr = w.a.createElement(Sa.a, null),
        hr = w.a.createElement(An.a, null),
        fr = w.a.createElement(Ia.a, null),
        gr = w.a.createElement(Ra.a, null),
        vr = { viewType: 'schedule_tweet' },
        yr = { viewType: 'add_poll' },
        br = { viewType: 'add_composer' },
        _r = { viewType: 'tag_location' },
        Cr = (function (e) {
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
                Object(un.a)(function () {
                  return i.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              _()(h()(i), '_shouldRenderControls', function (e, t) {
                var n = i.state.isFocused,
                  a = i.props,
                  r = a.audienceControlsValue,
                  o = a.isActive,
                  s = a.isInline,
                  l = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== It.a.community_members &&
                      r.conversationControlsValue !== It.a.super_followers_exclusive &&
                      r.conversationControlsValue !== It.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (o && !l && (!s || n || e))
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
                  s = i._shouldRenderControls(e, 'conversation'),
                  l =
                    o === It.a.community_members ||
                    o === It.a.super_followers_exclusive ||
                    o === It.a.trusted_friends_tweet ||
                    i._isScheduled()
                return s
                  ? w.a.createElement(Yt, { disabled: l, onChange: i._handleConversationControlsValueChange, value: o })
                  : null
              }),
              _()(h()(i), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  K.a,
                  { style: ln.taggedLocationContainer },
                  w.a.createElement(
                    X.a,
                    {
                      icon: w.a.createElement(Ma.a, null),
                      onPress: i._handleGeoButtonClick,
                      size: 'xSmall',
                      style: ln.taggedLocationButton,
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
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = n.cardUrl,
                  u = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(Ea.b)(h) || (d && !Object(nn.a)(d) && [d]),
                  g = !!u.length || p || !!m,
                  v = i.props.typeaheadWrapper,
                  y = !i._isEmpty()
                return w.a.createElement(
                  K.a,
                  { style: ln.textInputArea },
                  w.a.createElement(
                    K.a,
                    { style: r ? ln.inputStyle : ln.collapsedInputStyle },
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
                      ? w.a.createElement(Ea.a, { index: a, isCardPreviewTombstoned: Object(nn.a)(d), urls: f })
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
                  b = 0 === s && p,
                  _ = !!g,
                  C = g || {},
                  x = C.dismissComposerCommandName,
                  T = C.element,
                  E = C.sendTweetCommandName,
                  S = u && !g && !c,
                  I = g
                    ? {
                        onChange: i._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: x,
                          editorState: i.state.editorState,
                          element: T,
                          sendTweetCommandName: E,
                        },
                      }
                    : { onChange: i._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  ga.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: Ua,
                      autoFocus: n || (l && !d),
                      closeButton:
                        l && (i._deleteNonemptyTweetstormComposerEnabled || i._isEmpty()) && !b
                          ? i._renderCloseButton()
                          : void 0,
                      contentBelow: i._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [ln.textInputStyle, S && ln.textInputMobileCollapsed],
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
                      testID: ''.concat(pa).concat(s),
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
                Object(un.a)(function (e) {
                  return function (t) {
                    e(t), i._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                h()(i),
                '_getHandlePlainTextChange',
                Object(un.a)(function (e) {
                  return function (t) {
                    e(t), i._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(h()(i), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = i.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(Zn, null) : null
              }),
              _()(h()(i), '_renderAudienceControls', function (e) {
                var t = i.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  o = i.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = i.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = i.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return i._shouldRenderControls(e, 'audience') && 0 === a && (o || s || l)
                  ? w.a.createElement(ct, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: r && s,
                      isTrustedFriendsEnabled: l,
                      onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(h()(i), '_renderCommunitiesRulesEducation', function () {
                return i.shouldRenderCommunitiesRules ? w.a.createElement(St, null) : null
              }),
              _()(h()(i), '_renderCommunitiesRules', function (e) {
                var t = i.props.audienceControlsValue.communityIdValue || void 0
                return i.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(bt, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              _()(h()(i), '_calcNumberOfLines', function () {
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
              _()(h()(i), '_renderScheduledTweetLegend', function () {
                var e = i.props.scheduledFor
                return w.a.createElement(ta.a, {
                  onPress: i._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: ha,
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
                return w.a.createElement(Jt.a, {
                  onEmojiSelect: i._handleInsertEmoji,
                  size: 'medium',
                  style: i._getEmojiPickerButtonStyles(),
                  textInputRef: i._textInputRef || void 0,
                })
              }),
              _()(
                h()(i),
                '_getEmojiPickerButtonStyles',
                Object(un.a)(function () {
                  return [ln.iconEmojiPicker, ln.toolBarButton]
                }),
              ),
              _()(h()(i), '_isSchedulingDisabled', function () {
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
                  p = t.conversationControlsValue !== It.a.all
                return Boolean(o || !u || (s && '' === l && !a.length) || p || r.length > 0)
              }),
              _()(h()(i), '_renderSchedulingButton', function () {
                return w.a.createElement(X.a, {
                  accessibilityLabel: Wa,
                  behavioralEventContext: vr,
                  disabled: i._isSchedulingDisabled(),
                  hoverLabel: { label: Za },
                  icon: gr,
                  onClick: i._handleClickScheduler,
                  size: 'medium',
                  style: ln.toolBarButton,
                  testID: da,
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
                return w.a.createElement(X.a, {
                  accessibilityLabel: Xa,
                  hoverLabel: { label: Qa },
                  icon: mr,
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
                  s = t.media,
                  l = t.pollActive,
                  c = t.pollChoices,
                  d = t.pollDuration,
                  u = t.quotedStatus
                if (0 === s.length && !l && !u) return null
                var p = i.hasAttachedVideo && (i._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  K.a,
                  { onClick: i._handleFocus, style: [ln.attachmentContainer, ln.tweetAttachmentArea], testID: oa },
                  s.length > 0
                    ? w.a.createElement(Ba.a, {
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
                        style: ln.mediaPreview,
                      })
                    : null,
                  r ? i._renderMediaActions() : null,
                  l
                    ? w.a.createElement(Xn, {
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
                  ? w.a.createElement(
                      fa.a,
                      null,
                      w.a.createElement(ea.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement($n.a, {
                      isCondensed: t.length > 0,
                      style: ln.quoteTweet,
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
                  K.a,
                  { style: ln.toolBar, testID: ma },
                  w.a.createElement(
                    K.a,
                    { style: ln.toolBarIconsContainer },
                    w.a.createElement(dn, {
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
                    K.a,
                    { style: ln.toolBarIconsContainer },
                    e ? i._renderCountdownCircle() : null,
                    g &&
                      w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(K.a, { style: ln.separator }),
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
                    var s = o ? r + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, s, i.state.hasOverflowStyle),
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
                var t = va.a.replaceCarriageReturns(e.target.value)
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
                a ? n({ text: Ga }) : r(e)
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
                return pr(Math.ceil(e / i._userLanguageWeight))
              }),
              _()(h()(i), '_getPlaceHolderText', function () {
                var e = i.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  o = e.isReply,
                  s = e.isSelfThreadReply
                return a
                  ? lr
                  : n
                  ? dr
                  : i.isReplyOrReplyThread && 0 === r
                  ? cr
                  : o && !s && r > 0
                  ? sr
                  : s || r > 0
                  ? or
                  : ir
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
                Object(un.a)(function (e) {
                  var t = ja.a[i.props.twitterTextConfigurationVersion]
                  return Va()(e, t)
                }),
              ),
              _()(h()(i), '_isEmpty', function () {
                var e = i.props.data
                return Object(an.c)(e)
              }),
              _()(h()(i), '_isScheduled', function () {
                var e = i.props.data.scheduledFor
                return Object(rn.h)(e)
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
              (i._userLanguageWeight = l && ur.indexOf(l) > -1 ? 2 : 1),
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
                      return e.mediaFile && !(e.mediaFile instanceof tn.a) && e.mediaFile.isVideo
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
                    p = l < B.a.theme.breakpoints.small
                  return w.a.createElement(
                    K.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [ln.root, !a && ln.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      ya.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(ba.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(_a.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: ln.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: i,
                                })
                              })
                            : null,
                          o
                            ? null
                            : w.a.createElement(K.a, {
                                style: [ln.conversationLine, !c && ln.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? ln.avatarContainerExpanded : ln.avatarContainer,
                        cellStyle: ln.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        K.a,
                        { onFocus: this._handleEditorFocus, style: ln.inputArea },
                        w.a.createElement(
                          Ca.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: ln.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(K.a, { style: ln.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        K.a,
                        { style: [(u || n) && ln.controlsContainer, p ? ln.mobileControlsLayout : ln.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(wa.b, { show: a && r }, this._renderToolbar(d)),
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
                  return w.a.createElement($t.a, {
                    enabled: !s,
                    gifSearchKeySource: en.a.Composition,
                    history: r,
                    onPress: o,
                    testID: ca,
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
                  return w.a.createElement(X.a, {
                    accessibilityLabel: Ha,
                    behavioralEventContext: yr,
                    disabled: s,
                    hoverLabel: { label: Ja },
                    icon: fr,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: ln.toolBarButton,
                    testID: sa,
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
                    i = t ? w.a.createElement(Ma.a, null) : w.a.createElement(ka.a, null)
                  return w.a.createElement(X.a, {
                    accessibilityLabel: $a,
                    behavioralEventContext: _r,
                    disabled: r,
                    hoverLabel: { label: $a },
                    icon: i,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: ln.toolBarButton,
                    testID: la,
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
                    K.a,
                    { style: ln.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          K.a,
                          { style: ln.addImageTextPadding },
                          w.a.createElement(Zt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !i) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: nr,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [ln.addImageTextContainer, ln.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? w.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: er({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: ln.addImageTextContainer,
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
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: ia },
                    w.a.createElement(Pa.a, { style: ln.addImageActionIcon }),
                    nr,
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
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: ua },
                    w.a.createElement(Da.a, { style: ln.addImageActionIcon }),
                    w.a.createElement(xa.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                          O.b,
                          { color: 'gray700', size: 'subtext2', testID: ra },
                          w.a.createElement(Aa.a, { style: ln.addImageActionIcon }),
                          tr({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          O.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: ra },
                          w.a.createElement(Aa.a, { style: ln.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        O.b,
                        { color: 'gray700', size: 'subtext2', testID: ra },
                        w.a.createElement(La.a, { style: ln.addImageActionIcon }),
                        er({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Oa.a : Fa.a
                  return w.a.createElement(
                    O.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: ln.addImageTextContainer,
                      testID: aa,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? rr : void 0,
                      style: ln.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : ar,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = ja.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(Ta.a, {
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
                  return w.a.createElement(X.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? qa : Ka,
                    behavioralEventContext: br,
                    disabled: l,
                    hoverLabel: { label: Ya },
                    icon: hr,
                    link: l ? void 0 : t,
                    onPress: i,
                    size: 'xSmall',
                    testID: na,
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
                      return e.mediaFile && !(e.mediaFile instanceof tn.a) && e.mediaFile.isVideo
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
                      return e.mediaFile && !(e.mediaFile instanceof tn.a) && e.mediaFile.isVideo
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
      _()(Cr, 'contextType', de.a),
        _()(Cr, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var wr = Object(G.a)(Cr),
        xr = w.a.createElement(O.b, { weight: 'bold' }),
        Tr = w.a.createElement(O.b, { color: 'link' }),
        Er = function (e) {
          return '@'.concat(e)
        },
        Sr = n('SrIh'),
        Ir = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Rr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(Tr, null, V.a.b50e199a({ userName: Er(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(Tr, null, V.a.f2e4dd37({ replyUserName: Er(t), otherUserName: Er(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    Tr,
                    null,
                    V.a.eccfddc3({ userOneName: Er(t), userTwoName: Er(a), userThreeName: Er(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(Tr, null, V.a.h758cd22({ userOneName: Er(n), userTwoName: Er(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(Tr, null, V.a.e9f8a0eb({ userName: Er(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(Tr, null, V.a.df7e9fbc({ replyUserName: Er(n), otherUserName: Er(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    Tr,
                    null,
                    V.a.b45fa505({ userOneName: Er(n), userTwoName: Er(r), userThreeName: Er(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(Tr, null, V.a.a4383815({ userOneName: Er(a), userTwoName: Er(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(Tr, null, V.a.ff792e35({ userName: Er(t) })),
                  w.a.cloneElement(xr, null, V.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(Tr, null, V.a.g7d5e985({ replyUserName: Er(t), otherUserName: Er(n) })),
                  w.a.cloneElement(xr, null, V.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    Tr,
                    null,
                    V.a.fe5a61e9({ userOneName: Er(t), userTwoName: Er(a), userThreeName: Er(n) }),
                  ),
                  w.a.cloneElement(xr, null, V.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(Tr, null, V.a.bc9dd514({ userOneName: Er(n), userTwoName: Er(a), othersCount: t })),
                  w.a.cloneElement(xr, null, V.a.de5071ba),
                )
              },
              trustedFriendsReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'db690c7e', userName: Er(t) },
                  w.a.cloneElement(Tr, null, V.a.b9f0a3f7({ userName: Er(t) })),
                )
              },
              trustedFriendsReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'gb7cb27c' },
                  w.a.cloneElement(Tr, null, V.a.ca43a0c6({ replyUserName: Er(t), otherUserName: Er(n) })),
                  w.a.cloneElement(Tr, null, V.a.g2257dd2({ replyUserName: Er(t) })),
                )
              },
              trustedFriendsReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'e9288772' },
                  w.a.cloneElement(
                    Tr,
                    null,
                    V.a.d339d100({ userOneName: Er(t), userTwoName: Er(a), userThreeName: Er(n) }),
                  ),
                  w.a.cloneElement(Tr, null, V.a.aeaba5d4({ userOneName: Er(t) })),
                )
              },
              trustedFriendsReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'h0589b50' },
                  w.a.cloneElement(Tr, null, V.a.f48a8367({ userOneName: Er(n), userTwoName: Er(a), othersCount: t })),
                  w.a.cloneElement(Tr, null, V.a.e9861a9c({ userOneName: Er(n) })),
                )
              },
            },
            o = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            l = s.exclusivity_info,
            c = s.trusted_friends_info,
            d = s.user,
            u = o.filter(function (e) {
              return e.id_str !== d.id_str
            }),
            p = R()(u, 2),
            m = p[0],
            h = p[1],
            f = [d, m, h].map(Ir),
            g = R()(f, 3),
            v = g[0],
            y = g[1],
            b = g[2],
            _ = o.length - 2
          switch (o.length) {
            case 0:
              return Object(Sr.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? i.communityReplyToOne({ communityName: t, userName: v })
                : l
                ? i.exclusiveReplyToOne({ userName: v })
                : c
                ? i.trustedFriendsReplyToOne({ userName: v })
                : i.replyToOne({ userName: v })
            case 2:
              return t
                ? i.communityReplyToTwo({ communityName: t, userOneName: v, userTwoName: y })
                : l
                ? i.exclusiveReplyToTwo({ userOneName: v, userTwoName: y })
                : c
                ? i.trustedFriendsReplyToTwo({ userOneName: v, userTwoName: y })
                : i.replyToTwo({ userOneName: v, userTwoName: y })
            case 3:
              return t
                ? i.communityReplyToThree({ communityName: t, userOneName: v, userTwoName: y, userThreeName: b })
                : l
                ? i.exclusiveReplyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
                : c
                ? i.trustedFriendsReplyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
                : i.replyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
            default:
              return t
                ? i.communityReplyToMany({ communityName: t, userOneName: v, userTwoName: y, othersCount: _ })
                : l
                ? i.exclusiveReplyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
                : c
                ? i.trustedFriendsReplyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
                : i.replyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
          }
        },
        Mr = w.a.memo(Rr),
        kr = n('fs1G'),
        Pr = n('BLtI'),
        Dr = n('kY28')
      function Lr(e) {
        null == e || e.preventDefault()
      }
      var Ar = B.a.create(function (e) {
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
        Or = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = e.onPress,
            o = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return w.a.createElement(
            K.a,
            null,
            l
              ? w.a.createElement(Pr.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: kr.a,
                  onAvatarClick: Lr,
                  onEntityClick: Lr,
                  onMediaClick: Lr,
                  onReplyContextClick: Lr,
                  replyContext: Dr.a.ReplyContextTypes.None,
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
              K.a,
              { style: Ar.replyUsersContainer },
              w.a.createElement(
                ya.a,
                {
                  avatarCell: l ? w.a.createElement(K.a, { style: Ar.conversationLine }) : null,
                  avatarCellStyle: Ar.conversationLineContainer,
                  cellStyle: Ar.repliesTextContainer,
                  style: Ar.grid,
                },
                o
                  ? w.a.createElement(
                      O.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: i, style: l && Ar.repliesMessage },
                      w.a.createElement(Mr, {
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
        Fr = n('Tb0w'),
        Br = n('1YZw'),
        Nr = n('pidX'),
        Vr = n('5oBF'),
        zr = n('JYYi'),
        jr = n('/Rsk'),
        Hr = n('u7LJ'),
        Wr = n('XOJV'),
        Ur = n('G6rE'),
        Gr = n('AspN'),
        Kr = n('oEGd'),
        qr = n('2iUg'),
        Xr = n('P1r1'),
        Yr = ['mediaIds'],
        Qr = function (e) {
          return e.parentTweetId || (e.isInline ? zr.a.homeTimeline : zr.a.modal)
        },
        Jr = function (e, t) {
          var n = Qr(t)
          return ue.k(e, n)
        },
        Zr = function (e, t) {
          var n = Qr(t)
          return ue.l(e, n)
        },
        $r = function (e, t) {
          var n = Qr(t)
          return ue.j(e, n)
        },
        ei = function (e, t) {
          var n = li(e, t),
            a = $r(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            i = r ? k.c.select(e, r) : void 0
          return i ? i.name : void 0
        },
        ti = function (e, t) {
          var n = Qr(t)
          return ue.m(e, n)
        },
        ni = function (e, t) {
          var n = Qr(t)
          return ue.i(e, n)
        },
        ai = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        ri = Object(he.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          Ur.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        ii = function (e, t) {
          return t.parentTweetId || oi(e, t) || si(e, t)
        },
        oi = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        si = ai(function (e) {
          return e.inReplyToStatusId
        }),
        li = function (e, t) {
          var n = ii(e, t)
          return n ? Wr.a.selectHydrated(e, n) : void 0
        },
        ci = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        di = ai(function (e) {
          return e.hasArticleNudge
        }),
        ui = ai(function (e) {
          return e.convoCardData
        }),
        pi = ai(function (e) {
          return e.externalMedia
        }),
        mi = ai(function (e) {
          return e.externalMediaFiles
        }),
        hi = ai(function (e) {
          return e.previewTweetId
        }),
        fi = ai(function (e) {
          return e.defaultText
        }),
        gi = function (e, t) {
          var n = fi(e, t),
            a = Object(Nr.a)(t.location)
          return (ci(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        vi = ai(function (e) {
          return e.quotedStatusId
        }),
        yi = ai(function (e) {
          return e.quotedStatus
        }),
        bi = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : yi(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = vi(e, t)
              return n ? Wr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        _i = ai(function (e) {
          return e.isSelfThreadReply
        }),
        Ci = ai(function (e) {
          return e.positionCursorAtBeginning
        }),
        wi = ai(function (e) {
          return e.promotedContent
        }),
        xi = function () {
          return Object(he.createSelector)(Jr, gi, bi, Gr.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return l()(
                l()({}, ((i = e).mediaIds, Mt()(i, Yr))),
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
        Ti = {
          addComposer: ue.a,
          addToast: Br.b,
          createLocalApiErrorHandler: Object(ye.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: ue.b,
          deletePreviewTweet: Vr.c,
          fetchAltTextPromptPreferenceIfNeeded: qr.a,
          fetchAutotaggedLocationIfNeeded: jr.a,
          fetchTweetIfNeeded: Wr.a.fetchOneIfNeeded,
          removeComposer: ue.e,
          resetDraft: ue.f,
          retweet: Wr.a.retweet,
          schedule: ue.h,
          draftTweet: ue.d,
          send: ue.q,
          updateActiveComposerIndex: ue.s,
          updateAudienceControlsValue: ue.t,
          updateConvoCardState: Fr.b,
          preUploadMedia: Gr.e,
          addMedia: Gr.b,
          processMultipleMedia: Gr.g,
          removeMediaUpload: Gr.i,
          removeToast: Br.c,
          updateSingleComposer: ue.w,
          setActiveParentKey: ue.r,
          copyDataFromInlineComposerToModalComposer: ue.c,
        },
        Ei = Object(Kr.e)(function () {
          return Object(he.createStructuredSelector)({
            activeComposerIndex: ni,
            activeUser: ri,
            altTextNudgeType: qr.b,
            audienceControlsValue: $r,
            composerData: xi(),
            dataSaverMode: Xr.j,
            excludedRecipients: Zr,
            externalMedia: pi,
            externalMediaFiles: mi,
            geoEnabled: Xr.o,
            hasArticleNudge: di,
            inReplyToStatus: li,
            inReplyToStatusId: ii,
            isIntentRoute: ci,
            isSelfThreadReply: _i,
            isSending: ti,
            isSuperFollowsCreator: ge.l,
            positionCursorAtBeginning: Ci,
            loggedInUser: Ur.e.selectLoggedInUser,
            prepopulatedText: gi,
            previewTweetId: hi,
            promotedContent: wi,
            scheduledFor: ue.n,
            selectedCommunityName: ei,
            sendingProgress: ue.o,
            convoCardData: ui,
            undoTweetSettings: Hr.d,
            userLanguage: ge.p,
            quotedStatusId: vi,
          })
        }, Ti),
        Si = n('45mF'),
        Ii = n('c0ZR'),
        Ri = n('W5XZ'),
        Mi = n('Drq4'),
        ki = n('0uGn'),
        Pi = n('I8M8'),
        Di = n('7myi'),
        Li = n('7nmT'),
        Ai = n.n(Li),
        Oi = n('vbWy'),
        Fi = n('Rp9C'),
        Bi = n('Q5Mu'),
        Ni = n('N5qz'),
        Vi = 'tweetButton',
        zi = 'tweetButtonInline',
        ji = Object(P.a)()
          .propsFromState(function () {
            return { loggedInUser: Ur.e.selectLoggedInUser }
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
        Hi = n('cHvH'),
        Wi = n('sgih'),
        Ui = n('xKuM'),
        Gi = n('5Vk4'),
        Ki = B.a.create(function (e) {
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
        qi = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            i = e.sheetType,
            o = e.showActionButton
          return w.a.createElement(Hi.a, null, function (e) {
            var s = e.windowWidth > B.a.theme.breakpoints.small
            return w.a.createElement(
              Wi.a,
              { onMaskClick: r, style: Ki.sheetStyle, type: i, withMask: !0 },
              o &&
                w.a.createElement(Ui.a, {
                  leftControl: w.a.createElement(Gi.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(K.a, { style: [Ki.mainCard, s ? Ki.largeScreenCard : Ki.smallScreenCard] }, n),
            )
          })
        },
        Xi = V.a.cb7c0987,
        Yi = V.a.de3bcf27,
        Qi = V.a.e710ce75,
        Ji = V.a.h11e5910,
        Zi = V.a.b7ec04f3,
        $i = V.a.i62a03aa,
        eo = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        to = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            qi,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(O.b, { size: 'title4', style: eo.itemPadding, weight: 'heavy' }, Xi),
            w.a.createElement(O.b, { color: 'gray700', style: eo.itemPadding }, Yi),
            w.a.createElement(O.b, { color: 'gray700', style: eo.itemPadding }, Qi),
            w.a.createElement(
              K.a,
              { style: eo.buttonContainer },
              w.a.createElement(O.b, { size: 'title4', style: eo.itemPadding, weight: 'heavy' }, Ji),
              w.a.createElement(X.a, { onPress: a, style: eo.itemPadding, type: 'brandOutlined' }, Zi),
              w.a.createElement(X.a, { onPress: n, style: eo.itemPadding, type: 'brandOutlined' }, $i),
            ),
          )
        },
        no = n('cm6r'),
        ao = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        ro = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(no.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(X.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: ao.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(O.b, { color: 'gray700' }, n),
            )
          })
        },
        io = n('sjK1'),
        oo = n('FDY4'),
        so = n('tevE'),
        lo = n('jV+4'),
        co = n('UgB4'),
        uo = n('TW8A'),
        po = n('hiGS'),
        mo = n('WtWS'),
        ho = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ze.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ve.a.root, e.style],
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
      ho.metadata = { width: 24, height: 24 }
      var fo = ho,
        go = [
          { headlineText: V.a.f3a7a80c, subTextLine1: V.a.ge52d1de, subTextLine2: null },
          { headlineText: V.a.j311bf49, subTextLine1: V.a.ae42ebff, subTextLine2: V.a.aa350ab1 },
          { headlineText: V.a.j18b2956, subTextLine1: V.a.f6bee896, subTextLine2: V.a.dddd0995 },
          { headlineText: V.a.d02a94fa, subTextLine1: V.a.dddd0995, subTextLine2: null },
          { headlineText: V.a.i018b746, subTextLine1: V.a.b8d85df9, subTextLine2: V.a.d5ca11f0 },
        ],
        vo = V.a.h11e5910,
        yo = V.a.abd845fd,
        bo = V.a.bea869b3,
        _o = V.a.d96cf7cd,
        Co = V.a.d3145da8,
        wo = B.a.create(function (e) {
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
        xo = function (e) {
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
            p = w.a.useContext(de.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = go[(p = p >= 0 && p <= 4 ? p : 0)]
          return w.a.createElement(Hi.a, null, function (e) {
            var p,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              qi,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: g > B.a.theme.breakpoints.medium,
              },
              w.a.createElement(fo, { style: [wo.profanityIcon, wo.itemPadding] }),
              w.a.createElement(so.a, { size: 'title4', style: wo.itemPadding, weight: 'heavy' }, m.headlineText),
              w.a.createElement(O.b, { color: 'gray700', style: wo.itemPadding }, m.subTextLine1),
              w.a.createElement(O.b, { color: 'gray700', style: wo.itemPadding }, m.subTextLine2),
              w.a.createElement(
                K.a,
                { style: [wo.tweetContainer, wo.itemPadding] },
                w.a.createElement(
                  K.a,
                  { style: wo.tweetContent },
                  w.a.createElement(lo.a, { name: c, profileImageUrl: d, screenName: u, style: wo.userName }),
                  w.a.createElement(
                    K.a,
                    { style: wo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof io.c) r = e.mediaFile.thumbnail
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
                        K.a,
                        { style: wo.photos },
                        w.a.createElement(oo.a, {
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
                    w.a.createElement(O.b, { style: wo.textStyle }, l),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    K.a,
                    { style: wo.thanksContainer },
                    w.a.createElement(mo.a, { style: wo.thanksCheckMark }),
                    w.a.createElement(O.b, { align: 'center', style: wo.itemPadding }, Co),
                  )
                : w.a.createElement(O.b, { align: 'center', onPress: s, style: wo.itemPadding, withUnderline: !0 }, vo),
              g > B.a.theme.breakpoints.small
                ? w.a.createElement(
                    K.a,
                    { style: wo.buttonContainer },
                    w.a.createElement(X.a, { onPress: i, style: wo.itemPadding, type: 'brandFilled' }, yo),
                    w.a.createElement(X.a, { onPress: o, style: wo.itemPadding, type: 'brandOutlined' }, bo),
                    w.a.createElement(X.a, { onPress: a, style: wo.itemPadding, type: 'destructiveText' }, _o),
                  )
                : ((p = w.a.createElement(co.a, { style: { color: B.a.theme.colors.text } })),
                  (h = w.a.createElement(uo.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = w.a.createElement(po.a, { style: { color: B.a.theme.colors.red500 } })),
                  w.a.createElement(
                    K.a,
                    { style: wo.mobileButtonContainer },
                    w.a.createElement(ro, { icon: p, label: bo, onPress: o }),
                    w.a.createElement(ro, { icon: h, label: yo, onPress: i }),
                    w.a.createElement(ro, { icon: f, label: _o, onPress: a }),
                  )),
            )
          })
        },
        To = ji(function (e) {
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
            m = R()(p, 2),
            h = m[0],
            f = m[1],
            g = w.a.useState(!1),
            v = R()(g, 2),
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
            ? w.a.createElement(to, {
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
            : w.a.createElement(xo, {
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
                  _({ action: 'send', element: 'action', page: 'nudge' }), s()
                },
                onWeGotItWrong: function () {
                  _({ action: 'more_info', element: 'action', page: 'nudge' }),
                    _({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: l,
                userName: c,
                userProfileImageUrl: d,
                userScreenName: u,
              })
        }),
        Eo = n('aITJ'),
        So = n('eb3s'),
        Io = n('JYMr'),
        Ro = n('sCk0'),
        Mo = n('3A2y'),
        ko = n('zrOZ'),
        Po = n('s1N3'),
        Do = n('4FGy'),
        Lo = n('mN6z'),
        Ao = n('eyty'),
        Oo = n('rziq'),
        Fo = n('lsKC'),
        Bo = n('jTgF'),
        No = V.a.d28215f0,
        Vo = V.a.ec909a54,
        zo = V.a.jd53409d,
        jo = {
          singular: V.a.edae65de,
          plural: V.a.a859846a,
          oneOfMultiple: V.a.e90118f5,
          someOfMultiple: V.a.c211dcb1,
        },
        Ho = { singular: V.a.d7c26bfb, plural: V.a.a75e3ccc },
        Wo = V.a.dcb7e3a0,
        Uo = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = Ho.singular), (t = r ? jo.singular : jo.oneOfMultiple))
              : ((n = Ho.plural), (t = r ? jo.plural : jo.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(Wo)
          )
        },
        Go = V.a.c1bf53b0,
        Ko = V.a.bb8170da,
        qo = V.a.dad5a4b8,
        Xo = V.a.e65aed64,
        Yo = V.a.bc2ceaf2,
        Qo = V.a.d8222374,
        Jo = V.a.j890123a,
        Zo = V.a.bb01231c,
        $o = V.a.d4ab68e2,
        es = V.a.d8af8a4c,
        ts = V.a.d09d4c05,
        ns = V.a.i2209530,
        as = V.a.bf9b89e4,
        rs = V.a.f277e949,
        is = V.a.b551cd22,
        os = V.a.f026a7fa,
        ss = V.a.a5d4fda0,
        ls = V.a.ib067d6a,
        cs = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        ds = { element: 'alt_text_prompt' },
        us = { component: 'article_nudge' },
        ps = { viewType: 'send_tweet' },
        ms = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        hs = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r, i, s
            d()(this, n),
              (s = t.call(this, e, a)),
              _()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? zr.a.homeTimeline : zr.a.modal)
              }),
              _()(h()(s), '_updateSingleComposer', function (e, t) {
                return (0, s.props.updateSingleComposer)({ updates: e, index: t, parentKey: s._getParentKey() })
              }),
              _()(h()(s), '_resetDraft', function () {
                ;(0, s.props.resetDraft)({ parentKey: s._getParentKey(), isPreview: s.isPreview })
              }),
              _()(h()(s), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              _()(h()(s), '_syncTexts', function () {
                var e = s.props.composerData,
                  t = s.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && s._updateSingleComposer({ text: a }, n)
                })
              }),
              _()(h()(s), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              _()(h()(s), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              _()(h()(s), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              _()(h()(s), '_handleDeletePreviewTweet', function () {
                var e = s.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId,
                  a = e.removeToast
                n && (a(), t(n))
              }),
              _()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = Ai.a.findDOMNode(s._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    i = r.bottom,
                    o = r.top,
                    l = Math.max(o, window.scrollY)
                  if (l < window.pageYOffset || i > window.innerHeight) {
                    var c = n ? l - n() - 14 : l - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      cs ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              _()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.quotedStatus,
                  o = e.quotedStatusId
                !a && r && n(r).catch(t(Ri.a)), !i && o && n(o).catch(t(Ri.a))
              }),
              _()(h()(s), '_blockHistory', function (e, t) {
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
                  : !('POP' === t && o && s._areComposersEmptyOrUnchanged && !Object(an.a)(a)) || (s._resetDraft(), !0)
              }),
              _()(h()(s), '_getKeyCommandHandlers', function () {
                return s.state.typeaheadActive ? s._keyCommandHandlersForActiveTypeahead : s._keyCommandHandlers
              }),
              _()(h()(s), 'handleTweetOrRetweet', function () {
                if (
                  (s._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  s._areComposersValid())
                )
                  return s.shouldShowAltTextPrompt
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, ds), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              _()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  i = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (a && s._shouldBeExpanded())
                  return w.a.createElement(Or, {
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
              _()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement(So.a, {
                  Icon: Mi.a,
                  cancelButtonLabel: Ko,
                  confirmButtonLabel: Go({ numOfDescriptions: t }),
                  headline: zo,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: Uo({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              _()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(To, {
                  media: n,
                  nudgeId: s.state.nudgeId,
                  onDeleteTweet: s._handleReplyNudgeDeleteTweet,
                  onDismiss: s._handleReplyNudgeDismiss,
                  onEditTweet: s._handleReplyNudgeEditTweet,
                  onSendTweet: s._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              _()(h()(s), '_handleAddComposer', function () {
                var e = s.props,
                  t = e.addComposer,
                  n = e.copyDataFromInlineComposerToModalComposer,
                  a = e.isInline,
                  r = e.parentTweetId
                s.isInlineReply ? n(r) : a && n(zr.a.homeTimeline), t()
              }),
              _()(
                h()(s),
                '_makeAddComposerLink',
                Object(un.a)(function (e, t, n) {
                  return Object(Fo.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: n })
                }),
              ),
              _()(h()(s), '_handleReplyNudgeDeleteTweet', function () {
                s._hideToxicReplyNudge(), s._handleConfirmDiscardTweet()
              }),
              _()(h()(s), '_handleReplyNudgeDismiss', function () {
                s._hideToxicReplyNudge()
              }),
              _()(h()(s), '_handleReplyNudgeEditTweet', function () {
                s._hideToxicReplyNudge()
              }),
              _()(h()(s), '_handleReplyNudgeSendTweet', function () {
                s._hideToxicReplyNudge(), s._handleSendTweet()
              }),
              _()(h()(s), '_setRootRef', function (e) {
                e && (s._root = e)
              }),
              _()(h()(s), '_handleTweet', function () {
                var e = s.props.composerData[0].scheduledFor
                s.setState({ errorMessage: void 0 }),
                  e ? Object(rn.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              _()(h()(s), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = s.props,
                    r = a.analytics,
                    i = a.createLocalApiErrorHandler
                  if (Object(Bo.d)(n) && n.code === Pi.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var o = Object(Bo.b)(n)
                  if (o) return s.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(Si.a)(void 0, !1)
                  i(l()({}, c))(n)
                  var d = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  s.setState({ errorMessage: { text: d ? d.toast.text : ss } })
                }
              }),
              _()(h()(s), '_handleScheduleTweet', function () {
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
                    var a = Object(rn.c)(o.scheduledFor)
                    if (a) {
                      var r = Object(rn.b)(a),
                        i = Object(rn.i)(a),
                        c = is({ scheduleDate: r, scheduleTime: i })
                      t({ text: c, action: { label: rs, link: { pathname: '/compose/tweet/unsent/scheduled' } } }),
                        s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    s._updateConvoCardState(), s._close()
                  })
                  .catch(s._handleTweetError('schedule_tweet_cancel'))
              }),
              _()(h()(s), '_handleDraftTweet', function () {
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
                      t({ text: as, action: { label: rs, link: { pathname: '/compose/tweet/unsent/drafts' } } }),
                      s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', Bi.a))
              }),
              _()(h()(s), '_checkToxicReply', function () {
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
              _()(h()(s), '_showToxicReplyNudge', function () {
                s._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: s.state.nudgeId }] },
                ),
                  s.setState({ showToxicReplyNudge: !0 })
              }),
              _()(h()(s), '_hideToxicReplyNudge', function () {
                return s.setState({ showToxicReplyNudge: !1 })
              }),
              _()(h()(s), '_checkToxicReplyAndSendTweet', function () {
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
              _()(h()(s), '_handleSendTweet', function () {
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
                  b = void 0 === y ? void 0 : y,
                  _ = r.trustedFriendsValue,
                  C = void 0 === _ ? void 0 : _,
                  w = r.trustedFriendsMemberCount,
                  x = void 0 === w ? void 0 : w,
                  T = s.isPreview,
                  E = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  I = Object(rn.c)(E[0].scheduledFor)
                if (I) {
                  var R = Object(rn.b)(I),
                    M = Object(rn.i)(I),
                    k = is({ scheduleDate: R, scheduleTime: M })
                  return n({ text: k, action: { label: rs, link: '' } }), void s._close()
                }
                if (
                  (o.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  C &&
                    a.scribe({
                      action: 'send_trusted_friends_tweet',
                      data: { trusted_friends_control_details: { list_member_count: x } },
                    }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === v) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var P = s._getSingleComposerDataWithLatestText(E[0]).text,
                      D = Object(S.d)(P)
                    a.scribe({
                      action: D ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && a.scribe({ action: 'send_my_followers_tweet' })
                var L = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  A = L ? '8.31.'.concat(L) : '',
                  O = i ? (L ? [i, A].join(',') : i) : A
                g({
                  sendData: E,
                  communityIdValue: L,
                  conversationControlsValue: v,
                  excludedRecipients: o,
                  exclusivityControlValue: b,
                  inReplyToStatus: u,
                  isSelfThreadReply: p,
                  promotedContent: h,
                  composeSemanticCoreId: O,
                  isPreview: T,
                  trustedFriendsValue: C,
                  tweetType: s.tweetType,
                })
                  .then(function (e) {
                    T || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(E[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(E, e, 'thread_send_success')
                    var a = e.length > 1 ? Xo : qo
                    if (L && f) {
                      var r = f,
                        i = e.length
                      a = Vo({ numOfTweets: i, communityName: r })
                    }
                    var o = T && s.isReply,
                      l = { label: rs, link: void 0, onAction: void 0 }
                    if (o || !T) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = { pathname: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '') }
                    } else l.onAction = Object(Fo.a)(d, m, L)
                    n({ text: T ? Yo : a, action: l }),
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
                      (Object(Bo.d)(e) && e.code === Pi.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: p }),
                      E.length > 1 && s._scribeThreadSent(E, r, 'thread_send_failure'),
                      r.length &&
                        d.replace({
                          pathname: m.pathname,
                          state: l()(
                            l()({}, Object(Mo.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', Bi.a))
              }),
              _()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              _()(h()(s), '_scribeTweetSent', function (e, t) {
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
                  f = { items: [Fi.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  b = Object(ko.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  _ = s.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (s._scribe({ action: ''.concat(h, 'tweet') }, f),
                  o || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribe({ action: 'retweet_with_comment' }, f),
                    r && s._scribe(l()(l()({}, us), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  s.isReply && s._scribe({ component: _, action: ''.concat(h, 'reply') }, f),
                  g && s._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  s._hasPhoto(e) &&
                    (s._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    v && s._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && s._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  s._hasVideo(e) &&
                    (s._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && s._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  b.size)
                ) {
                  var C = s._hasPhoto(e) ? 'photo' : 'video'
                  b.forEach(function (e) {
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
                  var x = t.id_str && Fi.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: x ? [x] : [] })
                  var T = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || T) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: x ? [x] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              _()(h()(s), '_scribeThreadSent', function (e, t, n) {
                var a = s.props.inReplyToStatus,
                  r = { items: [Fi.a.getSendThreadItem(e, t.length, !!a)] }
                s._scribe({ action: n }, r)
              }),
              _()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  n = { items: [Fi.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, n),
                  t && s._scribe(l()(l()({}, us), {}, { element: 'result', action: 'retweet' }), n)
              }),
              _()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (s._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, n(Oi.a)))
              }),
              _()(h()(s), 'handleDismissComposer', function () {
                s.shouldShowDiscardConfirmation
                  ? s.setState({ showDiscardTweetConfirmation: !0 })
                  : s.shouldShowBackgroundSendConfirmation
                  ? s._cancelAllMediaUploads()
                  : s._close()
              }),
              _()(h()(s), '_cancelAllMediaUploads', function () {
                s.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              _()(h()(s), '_handleConfirmDiscardTweet', function () {
                var e = s.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && s._scribe(l()(l()({}, us), {}, { element: 'result', action: 'cancel' })),
                  s.state.nudgeId &&
                    s._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: s.state.nudgeId }] },
                    )
              }),
              _()(h()(s), '_handleCancelDiscardTweet', function () {
                s.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  s._restoreFocusToActiveComposer()
                })
              }),
              _()(h()(s), '_handleAcceptAltTextPrompt', function () {
                s.setState({ showAltTextPrompt: !1 })
                var e = s.props.history,
                  t = s._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (s._scribe(l()(l()({}, ds), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: ki.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              _()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, ds), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, ds), {}, { action: 'cancel' })),
                  s.setState({ showAltTextPrompt: !1 }, function () {
                    s._restoreFocusToActiveComposer()
                  })
              }),
              _()(h()(s), '_restoreFocusToActiveComposer', function () {
                var e = s.props.activeComposerIndex
                void 0 !== e && s._composerRefs[e] && s._composerRefs[e].focus()
              }),
              _()(h()(s), '_close', function () {
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
              _()(h()(s), '_handleComposerFocus', function (e) {
                s._composerRefs[e]
                  ? s.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      s._restoreFocusToActiveComposer()
                    }, 0)
              }),
              _()(h()(s), '_handleFocus', function () {
                s.state.focused ||
                  (s.isInlineReply && s._scribe({ element: 'inline_reply', action: 'reply' }),
                  s.setState({ focused: !0 }))
              }),
              _()(h()(s), '_handleTypeaheadStateChange', function (e) {
                s.setState({ typeaheadActive: e })
              }),
              _()(h()(s), '_handleRemoveComposer', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  i = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(Mo.a)(r.state || {}, 'quotedStatus') }),
                  i(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              _()(h()(s), '_handleViewRecipients', function () {
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
              _()(h()(s), '_handleTextChange', function (e, t) {
                var n = s.state.textMap,
                  a = s.props,
                  r = a.activeComposerIndex,
                  i = a.isInline,
                  o = a.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, n), {}, _()({}, t, e)) }, function () {
                    o && o(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  Eo.b.isIOS())
                ) {
                  var c = i ? 0 : r
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              _()(
                h()(s),
                '_handleTextOnBlur',
                Object(un.a)(function (e, t) {
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
              _()(h()(s), '_updateAudienceControlsValue', function (e) {
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
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: No } })),
                      (null == r ? void 0 : r.text) === No && s.setState({ errorMessage: void 0 })
                }
                a(e, s._getParentKey())
              }),
              _()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement(Io.a, { progress: t ? Math.max(n, 0.02) : 0, style: fs.progressBar })
              }),
              _()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              _()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Ii.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              _()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    i,
                    o,
                    l = s.props,
                    c = l.addMedia,
                    d = l.addToast,
                    u = l.composerData,
                    p = l.dataSaverMode,
                    m = l.preUploadMedia,
                    f = l.processMultipleMedia,
                    g = l.removeMediaUpload,
                    v = u[e],
                    y = v.pollActive,
                    b = Object(Ao.e)(
                      null === (a = h()(s)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                      null === (i = h()(s)) || void 0 === i || null === (o = i.context) || void 0 === o
                        ? void 0
                        : o.featureSwitches,
                    )
                  y ||
                    c(t, { location: Ao.d.Tweet, canUploadLongVideo: b }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(v, t)) {
                        var r = v.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(Po.a)(r.concat(a)) }, e),
                          f(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            p ||
                              m(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else d({ text: ls }), g(a)
                    })
                }
              }),
              _()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              _()(h()(s), '_handleMediaRemove', function (e, t) {
                var n = s.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  i = a[e],
                  o = i.media,
                  l = i.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(Do.a)(e, n)
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
              _()(h()(s), '_setComposerRef', function (e) {
                return function (t) {
                  s._composerRefs[e] = t
                }
              }),
              _()(h()(s), '_shouldBeExpanded', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (s.state.focused) return !0
                var a = !Object(an.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              _()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  i = 'community_members' === t
                return (
                  (s.isRetweet && !r && !i) ||
                  n.every(function (e) {
                    return Object(an.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(an.d)(s._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              _()(h()(s), '_getAltTextMetadata', function () {
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
              _()(h()(s), '_getSingleComposerDataWithLatestText', function (e) {
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
              (s._throttledSyncTexts = Object(Kn.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((i = {}), _()(i, Oo.b, s.handleTweetOrRetweet), _()(i, Oo.a, s.handleDismissComposer), i)),
              (s._keyCommandHandlersForActiveTypeahead = _()({}, Oo.b, s.handleTweetOrRetweet)),
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
                      query: Object(Nr.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(Mo.a)(Object(Nr.b)(c.state || {}), [
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
                    r.length >= 25 && e.composerData.length < 25 && a({ text: os }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    u && !Object(Lo.a)(r, e.composerData) && u && u(this._areComposersValid()),
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
                    b = a.parentTweetId,
                    _ = a.positionCursorAtBeginning,
                    C = a.richTextInputContext,
                    x = a.scheduledFor,
                    T = a.typeaheadWrapper,
                    E = a.userLanguage,
                    S = a.windowWidth,
                    I = this.state,
                    R = I.errorMessage,
                    M = I.focused,
                    k = I.shouldDisableButton,
                    P = I.showAltTextPrompt,
                    D = I.showDiscardTweetConfirmation,
                    L = I.showToxicReplyNudge,
                    A = I.typeaheadActive,
                    O = !f && A,
                    F = h ? 0 : this.props.activeComposerIndex,
                    B = O || h ? [c[F]] : c,
                    N = this._areComposersValid(),
                    V = this.hasNonCompliantQuote && this.isRetweet,
                    z = h ? K.a : Ro.a,
                    j = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    H = k || !N || V || this.isCommunityTweetFromProtectedUser,
                    W = (h && Ni.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet,
                    U = (h && Ni.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    K.a,
                    { ref: this._setRootRef, style: !b && fs.root },
                    h ? this._renderProgressBar() : null,
                    R &&
                      w.a.createElement(
                        K.a,
                        { style: fs.inlineCallout },
                        w.a.createElement(Ct.a, {
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
                      K.a,
                      {
                        onFocus: this._handleFocus,
                        style: [fs.content, b && fs.contentInlineReply, f && fs.contentModal],
                      },
                      m ? this._renderReplyContext() : null,
                      l,
                      w.a.createElement(
                        z,
                        j,
                        B.map(function (e, t) {
                          var a = Object(rn.h)(e.scheduledFor),
                            l = c.indexOf(e),
                            I = d(e, t, B),
                            R =
                              f || h
                                ? w.a.createElement(
                                    X.a,
                                    {
                                      behavioralEventContext: ps,
                                      disabled: H,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: fs.inlineSendButton,
                                      testID: f ? Vi : zi,
                                      type: 'brandFilled',
                                    },
                                    Object(Fo.b)({
                                      inReplyToStatus: !!m,
                                      isSelfThreadReply: !!g,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            k = n._getSingleComposerDataWithLatestText(e)
                          return w.a.createElement(
                            K.a,
                            { key: e.key },
                            w.a.createElement(
                              wr,
                              r()(
                                {
                                  addComposerLink: n._makeAddComposerLink(h, g, b),
                                  addToast: o,
                                  additionalToolbarContent: R,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && M,
                                  data: k,
                                  disableAddTweet: c.length >= 25,
                                  editable: !v && !!i,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: u,
                                  hidePoll: W,
                                  hideScheduling: U,
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
                                  onTextInputBlur: n._handleTextOnBlur(k.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!_,
                                  ref: n._setComposerRef(l),
                                  richTextInputContext: C,
                                  scheduledFor: x,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: A,
                                  typeaheadWrapper: T,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: E,
                                  windowWidth: S,
                                },
                                I,
                              ),
                            ),
                          )
                        }),
                      ),
                      D
                        ? this._canSaveDraft
                          ? w.a.createElement(So.a, {
                              cancelButtonLabel: $o,
                              confirmButtonLabel: ns,
                              headline: es,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: ts,
                            })
                          : w.a.createElement(So.a, {
                              confirmButtonLabel: $o,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Jo : Qo,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: Zo,
                            })
                        : null,
                      P ? this._renderAltTextPrompt() : null,
                      L ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(K.a, { style: v && fs.mask }),
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
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== x.a.prompt
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
                    ? ms.Quote
                    : this.isThread
                    ? ms.Thread
                    : this.isReply
                    ? ms.Reply
                    : ms.Original
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
        })(w.a.Component)
      _()(hs, 'defaultProps', {
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
        typeaheadWrapper: Di.a,
      }),
        _()(hs, 'contextType', de.a),
        _()(hs, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var fs = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: l()({}, B.a.absoluteFillObject),
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
      t.a = Object(G.a)(Ei(hs))
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
                s =
                  (null === (i = t.state) || void 0 === i || null === (o = i.previousPath) || void 0 === o
                    ? void 0
                    : o.includes('/home')) && '/compose/tweet' === t.pathname
              t.pathname.includes('/home') || s ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
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
        return W
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
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        C = n('38/B'),
        w = n('t62R'),
        x = n('/yvb'),
        T = n('piX5'),
        E = n('3XMw'),
        S = n.n(E),
        I = n('tI3i'),
        R = n.n(I),
        M = n('oQhu'),
        k = n('rHpw'),
        P = n('aITJ'),
        D = n('MWbm'),
        L = n('n5fo'),
        A = n('5emT'),
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
        V = function (e) {
          return e.length
        },
        z = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V
          return t(e)
        },
        j = S.a.de540c32,
        H = S.a.b4abfdb3,
        W = (function (e) {
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
                Object(M.a)(function (e) {
                  return [U.root, !e && U.disabled]
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
                return z(e, a.props.calculateLength)
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
                actualCount: V(i),
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
                    return _.a.createElement(
                      D.a,
                      { style: [G.root, i] },
                      _.a.createElement(
                        D.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            T.a.border,
                            G.textInputFormStyle,
                            s && T.a.invalidBorderColor,
                            o && s && T.a.focusedBorderInvalid,
                            o && !s && T.a.focusedBorderValid,
                            !n && T.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          D.a,
                          { style: G.textInputFormWrapper },
                          _.a.createElement(
                            D.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        D.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        _.a.createElement(
                          D.a,
                          { style: G.subtextWrapper },
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
                    return _.a.createElement(
                      w.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          a && G.placeholderText,
                          !C.a.reducedMotionEnabled && G.transition,
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
                      D.a,
                      { style: U.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        w.b,
                        { size: 'headline1', style: U.wrapper },
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
                          D.a,
                          { style: G.passwordVisibilityIconContainer },
                          _.a.createElement(x.a, {
                            accessibilityLabel: a ? H : j,
                            focusable: !0,
                            hoverLabel: { label: a ? H : j },
                            icon: a ? _.a.createElement(L.a, null) : _.a.createElement(A.a, null),
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
                      D.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        w.b,
                        { color: 'gray700', size: 'subtext2', style: G.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return _.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        w.b,
                        { color: 'red500', size: 'subtext2', style: G.subtext },
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
                      D.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      _.a.createElement(
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
                      n = [G.icon, t && G.focusedIcon]
                    return e && _.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(O.a, { style: [G.validationIcon, T.a.invalidColor] })
                      : _.a.createElement(F.a, { style: [G.validationIcon, T.a.validColor] })
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
                      r = 'string' == typeof a ? z(a, n) : 0
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
      y()(W, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (W.propTypes = {})
      var U = k.a.create(function (e) {
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
        G = k.a.create(function (e) {
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
        b = n.n(y),
        _ = (n('yH/f'), n('M+/F'), n('zrc3')),
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
                                  b()(
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
                              var s = Object(_.a)(t, function (e) {
                                return e.key === o.key
                              })
                              s >= 0
                                ? (r.push.apply(
                                    r,
                                    b()(
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
                            b()(
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
          b = Object(i.a)(g, n),
          _ = t >= n ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = r.a.createElement(l.a, {
            color: _,
            progress: b,
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
        b = n('Zg3A'),
        _ = n('yiKp'),
        C = n.n(_),
        w = n('Lsrn'),
        x = n('k/Ka'),
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
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
      var E = T,
        S = n('boUI'),
        I = n('EweD'),
        R = m.a.g6185a9e,
        M = m.a.g2d04222,
        k = m.a.baffe39a,
        P = m.a.af293dc2,
        D = m.a.h1053f7e,
        L = m.a.bf994ab2,
        A = m.a.cf7f7e39,
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
            p = D
          return (
            c ? (p = L) : l && (p = A),
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
                  M,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(g.a, {
                  Icon: b.a,
                  actionText: k,
                  isSelected: u.a.all === o,
                  onClick: s(u.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: E,
                  actionText: P,
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
        V = n('efqG'),
        z = ['children', 'controlled']
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
          V.a,
          {
            disabled: i,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = o()(e, z)
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
