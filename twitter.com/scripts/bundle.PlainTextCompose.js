;(window.webpackJsonp = window.webpackJsonp || []).push([
  [79, 19],
  {
    '/Rsk': function (e, t, a) {
      'use strict'
      a.d(t, 'f', function () {
        return v
      }),
        a.d(t, 'e', function () {
          return y
        }),
        a.d(t, 'h', function () {
          return b
        }),
        a.d(t, 'g', function () {
          return _
        }),
        a.d(t, 'd', function () {
          return C
        }),
        a.d(t, 'c', function () {
          return x
        }),
        a.d(t, 'b', function () {
          return T
        }),
        a.d(t, 'a', function () {
          return E
        }),
        a.d(t, 'i', function () {
          return I
        })
      var n = a('KEM+'),
        i = a.n(n),
        r = a('yiKp'),
        o = a.n(r),
        s = (a('yH/f'), a('KqXw'), a('LJOr'), a('7x/C'), a('JtPf'), a('oEOe')),
        l = a('kGix'),
        c = (a('hBpG'), a('M6MT')),
        d = a('Ssj5'),
        u = a('qlwE'),
        p = a('a/ea'),
        m = a('474o'),
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
          return function (a, n, i) {
            var r = i.api
            return Object(s.b)(a, { request: r.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        x = function (e) {
          return function (t, a, n) {
            n.api
            var i = Object(p.d)(a())
            return t(
              w(
                {
                  query_type: m.a.tweet_compose_location,
                  lat: null == i ? void 0 : i.coords.latitude,
                  long: null == i ? void 0 : i.coords.longitude,
                  hacc: null == i ? void 0 : i.coords.accuracy,
                  search_term: e,
                },
                m.c.lastSearch,
              ),
            )
          }
        },
        T = function () {
          return function (e, t, a) {
            a.api
            var n = y(t()),
              i = v(t())
            if (n === l.a.LOADING || i) return Promise.resolve()
            var r = Object(p.d)(t())
            return r
              ? e(
                  w(
                    {
                      lat: r.coords.latitude,
                      long: r.coords.longitude,
                      hacc: r.coords.accuracy,
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
          return function (e, t, a) {
            a.api
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
        i()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, i()({}, a, { fetchStatus: l.a.LOADING }))
            case f.FAILURE:
              var n = t.meta.resultSet
              return o()(o()({}, e), {}, i()({}, n, { fetchStatus: l.a.FAILED }))
            case f.SUCCESS:
              var r = t.meta.resultSet,
                s = t.payload
              return o()(o()({}, e), {}, i()({}, r, { fetchStatus: l.a.LOADED, results: s }))
            case S:
              var c = t.payload
              return o()(o()({}, e), {}, { lastSelectedPlace: null != c ? c : void 0 })
            default:
              return e
          }
        }),
      )
    },
    '0uGn': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return we
      })
      var n = a('yiKp'),
        i = a.n(n),
        r = a('RhWx'),
        o = a.n(r),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        d = a.n(c),
        u = a('1Pcy'),
        p = a.n(u),
        m = a('5Yy7'),
        h = a.n(m),
        f = a('2VqO'),
        g = a.n(f),
        v = a('KEM+'),
        y = a.n(v),
        b =
          (a('hBpG'),
          a('7x/C'),
          a('vrRf'),
          a('jwue'),
          a('+oxZ'),
          a('2G9S'),
          a('z84I'),
          a('JtPf'),
          a('lTEL'),
          a('87if'),
          a('kYxP'),
          a('LqLs'),
          a('m9LP'),
          a('ERkP')),
        _ = a.n(b),
        C = (a('TJCb'), a('DZ+c'), a('xZGM')),
        w = a('GTeL'),
        x = a('3XMw'),
        T = a.n(x),
        E = a('rHpw'),
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
        k = a('MWbm'),
        P = a('t62R'),
        L = a('p+r5'),
        D = T.a.feabf2a0,
        A = T.a.e36287c6,
        O = T.a.cf565d08,
        F = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(p()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? _.a.createElement(P.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, O) : null
              }),
              y()(p()(e), '_handleChange', function (t) {
                var a = e.props,
                  n = a.currentMediaId,
                  i = a.mediaItem,
                  r = a.onChange,
                  o = t.target.value
                i ? r(o, i.id.toString()) : n && r(o, n)
              }),
              e
            )
          }
          return (
            d()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    a = e.maxLength,
                    n = e.mediaItem,
                    i = e.orientedImage,
                    r = e.value
                  return _.a.createElement(
                    k.a,
                    { style: S.root },
                    _.a.createElement(
                      k.a,
                      { style: S.attachmentContainer },
                      _.a.createElement(w.a, { mediaItem: n, orientedImage: i }),
                      _.a.createElement(L.a, {
                        accessibilityLabel: D,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: A,
                        maxLength: a,
                        maxNumberOfLines: 6,
                        multiline: !0,
                        name: 'altTextInput',
                        numberOfLines: 2,
                        onChange: this._handleChange,
                        style: S.formTextInput,
                        testID: I,
                        value: r,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(_.a.Component),
        B = a('rxPX'),
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
        z = a('feu+'),
        j = T.a.ffe9ec3a,
        H = T.a.j063b261,
        W = T.a.e57144f0,
        U = T.a.f9f9210c,
        G = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
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
            d()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag,
                    a = e.analytics
                  e.showEducationOnMount &&
                    (this.setState({ showAltTextEducationSheet: !0 }),
                    a.scribe({ component: 'education', action: 'open' }),
                    t(C.a))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    a = e.onAltTextChange,
                    n = e.orientedImage,
                    i = e.value,
                    r = this.state.showAltTextEducationSheet,
                    o = t && t.id.toString()
                  return _.a.createElement(
                    k.a,
                    { style: K.root },
                    r
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
                      onChange: a,
                      onShowEducation: this._handleOpenEducationPrompt,
                      orientedImage: n,
                      value: i,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(_.a.Component),
        K = E.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        q = V(G),
        X = a('jHSc'),
        Y = a('EeFI'),
        Q = a('7JQg'),
        J = a('9Q4p'),
        Z = a('PrL8'),
        $ = a('k/OQ'),
        ee = a('/yvb'),
        te = a('oQhu'),
        ae = a('ddV6'),
        ne = a.n(ae),
        ie = function (e) {
          var t = new Map()
          return (
            e.forEach(function (e) {
              var a = ne()(e, 2),
                n = a[0],
                i = a[1]
              t.set(n, i)
            }),
            t
          )
        },
        re = a('mN6z'),
        oe = a('95Se'),
        se = a('7Mjr'),
        le = a('Mbn/'),
        ce = a('zIWA'),
        de = a('1auM'),
        ue = a('eYns'),
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
          h()(a, e)
          var t = g()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              y()(p()(n), '_cropper', _.a.createRef()),
              y()(
                p()(n),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === we.sensitiveMedia
                    ? { namespace: he, title: Ce, renderer: n._renderSensitiveMediaTab }
                    : e === we.altText
                    ? { namespace: pe, title: _e, renderer: n._renderAltTextTab }
                    : { namespace: me, title: be, renderer: n._renderCropTab }
                }),
              ),
              y()(p()(n), '_renderTabContent', function (e) {
                var t,
                  a = n.props,
                  i = a.location,
                  r = a.sensitiveMediaTabEnabled,
                  o = n._getMemoizedTabMetadata(e, r),
                  s = !(null !== (t = i.state) && void 0 !== t && t.hideTabs),
                  l = s ? n._getTabLinks(e) : [],
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
              y()(p()(n), '_renderAltTextTab', function () {
                var e = n.props.history,
                  t = n.state,
                  a = t.currentMediaId,
                  i = t.mediaMetadata,
                  r = t.orientedImage,
                  o = n._getCurrentMediaItem(),
                  s = i[a] && i[a].altText
                return _.a.createElement(q, {
                  history: e,
                  key: a,
                  mediaItem: o,
                  onAltTextChange: n._handleAltTextChange,
                  orientedImage: r.get(a),
                  value: s,
                })
              }),
              y()(p()(n), '_renderCropTab', function () {
                var e = n.state,
                  t = e.cropData,
                  a = e.currentMediaId,
                  i = n._getCurrentMediaItem()
                return _.a.createElement(Y.a, {
                  defaultCropData: t.get(a),
                  key: a,
                  media: i,
                  ref: n._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              y()(p()(n), '_renderSensitiveMediaTab', function () {
                var e = n.state,
                  t = e.currentMediaId,
                  a = e.mediaMetadata,
                  i = e.orientedImage,
                  r = n._getCurrentMediaItem(),
                  o = a[t] && a[t].sensitiveMediaWarning
                return _.a.createElement(J.a, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: r,
                  onWarningChange: n._handleSensitiveWarningChange,
                  orientedImage: i.get(t),
                })
              }),
              y()(p()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing,
                  t = n._getNextMediaIndex(1),
                  a = n._getNextMediaIndex(-1)
                return _.a.createElement(
                  k.a,
                  { style: Z.a.rightControl },
                  n._hasMediaAtIndex(a) || n._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        k.a,
                        { style: [Z.a.rightControl, Z.a.leftRightButtons] },
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ye,
                          disabled: !n._hasMediaAtIndex(a),
                          icon: _.a.createElement(oe.a, null),
                          onPress: n._handleClickToMediaAtIndex(a),
                          size: 'small',
                          style: Z.a.prevButton,
                          type: 'primaryOutlined',
                        }),
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ve,
                          disabled: !n._hasMediaAtIndex(t),
                          icon: _.a.createElement(se.a, null),
                          onPress: n._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  _.a.createElement(
                    ee.a,
                    {
                      disabled: e,
                      onPress: n._handleEndEditingClick,
                      size: 'small',
                      style: Z.a.saveButton,
                      testID: R,
                      type: 'primaryFilled',
                    },
                    ge,
                  ),
                )
              }),
              y()(p()(n), '_handleCancelEditingClick', function (e) {
                n._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              y()(p()(n), '_handleClickTab', function (e) {
                var t = n.props.analytics
                n._handleSaveCropData(),
                  n._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              y()(p()(n), '_getCurrentMediaItem', function () {
                var e = n.props.media,
                  t = n.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              y()(p()(n), '_getNextMediaIndex', function (e) {
                var t = n.props.media,
                  a = n._getCurrentMediaItem()
                return t.indexOf(a) + e
              }),
              y()(p()(n), '_hasMediaAtIndex', function (e) {
                var t = n.props.media
                return e >= 0 && e < t.length
              }),
              y()(p()(n), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = n.props.media
                  if (n._hasMediaAtIndex(e)) {
                    n._handleSaveCropData()
                    var a = t[e].id
                    n.setState({ currentMediaId: a })
                  }
                }
              }),
              y()(p()(n), '_saveMediaMetadata', function () {
                var e = n.props,
                  t = e.media,
                  a = e.setMediaMetadata,
                  i = n.state.mediaMetadata
                t.forEach(function (e) {
                  a(e.id, i[e.id])
                })
              }),
              y()(p()(n), '_handleEndEditingClick', function () {
                var e = n.props.history,
                  t = n._cropper && n._cropper.current,
                  a = n.state.cropData
                if (t || a.size) {
                  var i = n.props,
                    r = i.media,
                    s = i.processMedia,
                    l = i.updateMediaUpload,
                    c = n.state.currentMediaId
                  n.setState({ isProcessing: !0 })
                  var d = t ? ie([].concat(o()(a), [[c, t.getCropData()]])) : a,
                    u = r.map(function (e) {
                      return d.get(e.id) ? (l({ id: e.id, cropData: d.get(e.id) }), s(e.id)) : Promise.resolve()
                    })
                  Promise.all(u).then(function () {
                    n._scribeWithNamespace({ action: 'done' })
                  })
                }
                n._saveMediaMetadata(), e.goBack()
              }),
              y()(p()(n), '_handleAltTextChange', function (e) {
                n.setState(function (t) {
                  return {
                    mediaMetadata: i()(
                      i()({}, t.mediaMetadata),
                      {},
                      y()({}, t.currentMediaId, i()(i()({}, t.mediaMetadata[t.currentMediaId]), {}, { altText: e })),
                    ),
                  }
                })
              }),
              y()(p()(n), '_handleSensitiveWarningChange', function (e, t) {
                n.setState(function (a) {
                  var n =
                    (a.mediaMetadata[a.currentMediaId] && a.mediaMetadata[a.currentMediaId].sensitiveMediaWarning) ||
                    new Set()
                  return (
                    t ? n.add(e) : n.delete(e),
                    {
                      mediaMetadata: i()(
                        i()({}, a.mediaMetadata),
                        {},
                        y()(
                          {},
                          a.currentMediaId,
                          i()(i()({}, a.mediaMetadata[a.currentMediaId]), {}, { sensitiveMediaWarning: n }),
                        ),
                      ),
                    }
                  )
                })
              }),
              y()(p()(n), '_handleSaveCropData', function () {
                var e = n._cropper && n._cropper.current
                if (e) {
                  var t = n.state.currentMediaId,
                    a = e.getCropData(),
                    i = n._getCurrentMediaItem()
                  if (
                    i &&
                    !Object(re.a)(a, n.state.cropData.get(t)) &&
                    (n.setState(function (e) {
                      return { orientedImage: ie([].concat(o()(e.orientedImage), [[t, null]])) }
                    }),
                    i.originalMediaFile && i.originalMediaFile instanceof de.a)
                  ) {
                    var r = i.cropData
                    Object(ue.b)(i.originalMediaFile, { cropData: a || r })
                      .then(function (e) {
                        return new de.a(e).withDimensionsAndOrientation().then(function (e) {
                          n.setState(function (n) {
                            return {
                              orientedImage: ie([].concat(o()(n.orientedImage), [[t, e]])),
                              cropData: ie([].concat(o()(n.cropData), [[t, a]])),
                            }
                          })
                        })
                      })
                      .catch(function () {
                        n.setState(function (e) {
                          return { orientedImage: ie([].concat(o()(e.orientedImage), [[t, void 0]])) }
                        })
                      })
                  }
                  n.setState(function (e) {
                    return { cropData: ie([].concat(o()(e.cropData), [[t, a]])) }
                  })
                }
              }),
              y()(p()(n), '_scribeWithNamespace', function (e) {
                var t = n.props,
                  a = t.analytics,
                  r = t.sensitiveMediaTabEnabled,
                  o = n._getCurrentTab(),
                  s = n._getMemoizedTabMetadata(o, r)
                a.scribe(i()(i()({}, s.namespace), e))
              }),
              y()(p()(n), '_getMediaMetadata', function (e) {
                var t = {}
                return (
                  e.forEach(function (e) {
                    return (t[e.id] = e.mediaMetadata)
                  }),
                  t
                )
              })
            var r = e.initialMediaId,
              s = e.media,
              c = n._getMediaMetadata(s)
            return (
              (n.state = {
                cropData: new Map(),
                isProcessing: !1,
                mediaMetadata: c,
                currentMediaId: r || -1,
                orientedImage: new Map(),
              }),
              n
            )
          }
          return (
            d()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    a = e.sensitiveMediaTabEnabled,
                    n = this._getCurrentTab(),
                    i = this._getMemoizedTabMetadata(n, a)
                  return _.a.createElement(
                    Q.c,
                    { namespace: i.namespace },
                    _.a.createElement(
                      X.b,
                      {
                        backButtonType: 'back',
                        containerStyle: Z.a.root,
                        documentTitle: i.title,
                        history: t,
                        onBackClick: this._handleCancelEditingClick,
                        rightControl: this._renderAppBarRightControl(),
                        title: i.title,
                      },
                      this._renderTabContent(n),
                    ),
                  )
                },
              },
              {
                key: '_getCurrentTab',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.location,
                    n = t.sensitiveMediaTabEnabled,
                    i = null === (e = a.state) || void 0 === e ? void 0 : e.tab
                  return n && i === we.sensitiveMedia ? we.sensitiveMedia : i === we.altText ? we.altText : we.crop
                },
              },
              {
                key: '_getTabLinks',
                value: function (e) {
                  var t,
                    a = this,
                    n = this.props,
                    r = n.analytics,
                    o = n.location,
                    s = n.sensitiveMediaTabEnabled,
                    l = this._getCurrentMediaItem(),
                    c = []
                  return (
                    null != l &&
                      null !== (t = l.originalMediaFile) &&
                      void 0 !== t &&
                      t.isImage &&
                      c.push({
                        to: i()(i()({}, o), {}, { state: i()(i()({}, o.state), {}, { tab: we.crop }) }),
                        label: _.a.createElement(le.a, null),
                        key: we.crop,
                        accessibilityLabel: be,
                        isActive: function () {
                          return e === we.crop
                        },
                        onClick: function () {
                          return r.scribePageImpression()
                        },
                      }),
                    c.push({
                      to: i()(i()({}, o), {}, { state: i()(i()({}, o.state), {}, { tab: we.altText }) }),
                      label: _.a.createElement(P.b, { weight: 'bold' }, 'ALT'),
                      key: we.altText,
                      accessibilityLabel: _e,
                      isActive: function () {
                        return e === we.altText
                      },
                      onClick: function () {
                        return a._handleClickTab('alt_text_button')
                      },
                    }),
                    s &&
                      c.push({
                        to: i()(i()({}, o), {}, { state: i()(i()({}, o.state), {}, { tab: we.sensitiveMedia }) }),
                        label: _.a.createElement(ce.a, null),
                        key: we.sensitiveMedia,
                        accessibilityLabel: Ce,
                        isActive: function () {
                          return e === we.sensitiveMedia
                        },
                        onClick: function () {
                          return a._handleClickTab('sensitive_media_tab')
                        },
                      }),
                    c
                  )
                },
              },
            ]),
            a
          )
        })(_.a.Component)
      t.b = xe
    },
    '21U8': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        i = a.n(n),
        r = a('Y9Ll'),
        o = a.n(r),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        d = a.n(c),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('Rqga'), a('2G9S'), a('ERkP')),
        g = a.n(f),
        v = a('/yvb'),
        y = a('3XMw'),
        b = a.n(y),
        _ = a('3rX5'),
        C = a('rHpw'),
        w = a('MWbm'),
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
            a = e.height,
            n = e.width
          return g.a.createElement(w.a, {
            pointerEvents: 'none',
            style: [x.mask, { width: n, height: a }, t && x.circle],
          })
        },
        E = a('ZvMt'),
        S = a('97Jx'),
        I = a.n(S),
        R = a('m3Bd'),
        M = a.n(R),
        k = a('CHgo'),
        P = a('7ep7'),
        L = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        D = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return (
              i()(this, a),
              (n = t.call(this, e)),
              h()(l()(n), '_previousTouchDistance', 0),
              h()(l()(n), '_previousPositionX', 0),
              h()(l()(n), '_previousPositionY', 0),
              h()(l()(n), '_centerPosition', { x: 0, y: 0 }),
              h()(l()(n), '_panResponder', {}),
              h()(l()(n), '_setRef', function (e) {
                var t = n.props,
                  a = t.onPanEnd,
                  i = t.onPanMove,
                  r = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(i || a || r) && (n._removeTouchMoveToScrollListener = Object(k.a)(e, n._preventDefaultEvent, !1)),
                    o && (n._removeScrollToScaleListener = Object(k.b)(e, n._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  n._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              h()(l()(n), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(l()(n), '_handlePanResponderMove', function (e, t) {
                var a,
                  i,
                  r = n.props,
                  o = r.onPanMove,
                  s = r.onPinchMove,
                  l = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (s) {
                    var c =
                        ((a = l[0]),
                        (i = l[1]),
                        Math.sqrt(Math.pow(a.pageY - i.pageY, 2) + Math.pow(a.pageX - i.pageX, 2))),
                      d = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(l[0], l[1]),
                      u = d.pageX,
                      p = d.pageY,
                      m = n._previousPositionX ? u - n._previousPositionX : 0,
                      h = n._previousPositionY ? p - n._previousPositionY : 0,
                      f = n._previousTouchDistance ? c - n._previousTouchDistance : 0
                    ;(n._previousPositionX = u), (n._previousPositionY = p), (n._previousTouchDistance = c)
                    var g = n._centerPosition
                    s(f, g.x - u, g.y - p, m, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', n._preventDefaultEvent, !1)
              }),
              h()(l()(n), '_handlePanResponderEnd', function (e, t) {
                n.props.onPanEnd && n.props.onPanEnd(t.dx, t.dy),
                  n.props.onPinchMove && (n._previousTouchDistance = 0),
                  (n._previousPositionX = 0),
                  (n._previousPositionY = 0),
                  n._removeSelectStartListener()
              }),
              h()(l()(n), '_handleWheel', function (e) {
                var t = e.clientX,
                  a = e.clientY,
                  i = e.deltaX,
                  r = e.deltaY,
                  o = n._centerPosition,
                  s = o.x - t,
                  l = o.y - a
                n.props.onWheel && n.props.onWheel(i, r, s, l)
              }),
              (n._panResponder = P.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: n._handlePanResponderMove,
                onPanResponderRelease: n._handlePanResponderEnd,
                onPanResponderTerminate: n._handlePanResponderEnd,
              })),
              (n._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', n._preventDefaultEvent, !1)
              }),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, M()(e, L))
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
            a
          )
        })(g.a.Component),
        A = a('9RkS'),
        O = a('rOXj'),
        F = a('aITJ'),
        B = a('yiKp'),
        N = a.n(B),
        V = a('Lsrn'),
        z = a('k/Ka'),
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
        ae = b.a.f7571204,
        ne = b.a.e6e16811,
        ie =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        re = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a(e) {
            var n, r
            return (
              i()(this, a),
              (n = t.call(this, e)),
              h()(l()(n), '_previousLeft', 0),
              h()(l()(n), '_previousTop', 0),
              h()(l()(n), '_panStyles', { top: 0, left: 0 }),
              h()(l()(n), '_shouldShowZoomControl', function () {
                return (!F.b.isMobileOS() || !O.a.isTouchSupported()) && n.props.withZoomControl
              }),
              h()(l()(n), '_renderControls', function () {
                var e = n.props,
                  t = e.image,
                  a = e.withAspectRatioOptions,
                  i = n.state.aspectRatio,
                  r = t.width / t.height,
                  o = n._shouldShowZoomControl()
                return a || o
                  ? g.a.createElement(
                      w.a,
                      { style: oe.controlsContainer },
                      a
                        ? g.a.createElement(
                            w.a,
                            { style: oe.ratioContainer },
                            g.a.createElement(v.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: i === r ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: g.a.createElement(H, null),
                              onPress: n._setAspectRatio(r),
                              size: 'medium',
                            }),
                            g.a.createElement(v.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: i === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: g.a.createElement(U, null),
                              onPress: n._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            g.a.createElement(v.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === i ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: g.a.createElement(K, null),
                              onPress: n._setAspectRatio(1),
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
                              max: n._maxScale,
                              maxIcon: g.a.createElement(X, { style: oe.icon }),
                              min: 0,
                              minIcon: g.a.createElement(Q, { style: oe.icon }),
                              onChange: n._handleScaleChange,
                              step: 'any',
                              value: n.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              h()(l()(n), '_setImageRef', function (e) {
                n._imageRef = e
              }),
              h()(l()(n), '_handleScaleChange', function (e) {
                n.setState({ imageScale: e })
              }),
              h()(l()(n), '_getImageDimensions', function () {
                var e = n.state.imageScale,
                  t = n.props.image.width / n.props.image.height,
                  a = n._getMaskDimensions(),
                  i = a.height,
                  r = a.width,
                  o = E.a.getCoverDimensions({ width: r, height: i }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              h()(l()(n), '_getMaskDimensions', function () {
                var e = n.state,
                  t = e.aspectRatio,
                  a = e.containerHeight,
                  i = e.containerWidth,
                  r = E.a.getContainDimensions({ width: i - 50, height: a - 50 }, t),
                  o = r.height
                return { width: r.width, height: o }
              }),
              h()(l()(n), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  a = t.height,
                  i = t.width
                n.state.containerHeight || n.state.containerWidth
                  ? n.setState({ containerHeight: a, containerWidth: i })
                  : (n.setState({ containerHeight: a, containerWidth: i }), n._setDefaultCropData())
              }),
              h()(l()(n), '_setDefaultCropData', function () {
                var e = n.props,
                  t = e.defaultCropData,
                  a = e.image
                if (t) {
                  var i = n._getImageDimensions().width,
                    r = n._getMaskDimensions().width,
                    o = i / a.width,
                    s = ie(r / (t.width * o))
                  n.setState({ imageScale: s })
                  var l = n._getUnscaledCropData(),
                    c = l.left,
                    d = l.top
                  ;(n._panStyles.top = d - t.top * o * Math.pow(2, s)),
                    (n._previousTop = n._panStyles.top),
                    (n._panStyles.left = c - t.left * o * Math.pow(2, s)),
                    (n._previousLeft = n._panStyles.left),
                    n._updateNativeStyles()
                }
              }),
              h()(l()(n), '_handleWheel', function (e, t, a, i) {
                var r = (-1 * t) / 500
                n.setState(function (e) {
                  var t = e.imageScale,
                    o = Math.min(n._maxScale, Math.max(t + r, 0))
                  return (
                    (n._panStyles.left += a * (o - t)),
                    (n._panStyles.top += i * (o - t)),
                    (n._previousLeft = n._panStyles.left),
                    (n._previousTop = n._panStyles.top),
                    { imageScale: o }
                  )
                })
              }),
              h()(l()(n), '_handlePanMove', function (e, t) {
                ;(n._panStyles.left = n._previousLeft + e),
                  (n._panStyles.top = n._previousTop + t),
                  n._updateNativeStyles(),
                  n._adjustToInBounds()
              }),
              h()(l()(n), '_handlePanEnd', function (e, t) {
                ;(n._previousLeft = n._panStyles.left), (n._previousTop = n._panStyles.top)
              }),
              h()(l()(n), '_handlePinchMove', function (e, t, a, i, r) {
                var o = e / 200
                n.setState(function (e) {
                  var s = e.imageScale,
                    l = Math.min(n._maxScale, Math.max(s + o, 0))
                  return (
                    (n._panStyles.left += t * (l - s) + i),
                    (n._panStyles.top += a * (l - s) + r),
                    (n._previousLeft = n._panStyles.left),
                    (n._previousTop = n._panStyles.top),
                    { imageScale: l }
                  )
                })
              }),
              h()(l()(n), '_adjustToInBounds', function () {
                var e = n._getUnscaledCropData(),
                  t = n._getImageDimensions(),
                  a = e.left,
                  i = e.top,
                  r = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  s = !1
                a < 0 && ((s = !0), (n._panStyles.left += a), (n._previousLeft += a)),
                  i < 0 && ((s = !0), (n._panStyles.top += i), (n._previousTop += i)),
                  r > 0 && ((s = !0), (n._panStyles.left += r), (n._previousLeft += r)),
                  o > 0 && ((s = !0), (n._panStyles.top += o), (n._previousTop += o)),
                  s && n._updateNativeStyles()
              }),
              h()(l()(n), '_updateNativeStyles', function () {
                var e = n._panStyles,
                  t = e.left,
                  a = e.top
                n._imageRef &&
                  n._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(a, 'px, 0') }] },
                  })
              }),
              h()(l()(n), '_getUnscaledCropData', function () {
                var e = n._getImageDimensions(),
                  t = e.height,
                  a = e.width,
                  i = n._getMaskDimensions(),
                  r = i.height,
                  o = i.width,
                  s = n._panStyles,
                  l = s.left
                return { top: (t - r) / 2 - s.top, left: (a - o) / 2 - l, width: o, height: r }
              }),
              h()(l()(n), '_setAspectRatio', function (e) {
                return function () {
                  n.setState({ aspectRatio: e })
                }
              }),
              (n.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (n._maxScale = ((r = e.image), Math.max(Math.min(ie(r.width / 150), ie(r.height / 150), 3), 0.5))),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    a = e.image,
                    n = e.withZoomControl,
                    i = this._getImageDimensions(),
                    r = i.height,
                    o = i.width,
                    s = this._getMaskDimensions(),
                    l = s.height,
                    c = s.width,
                    d = this.state.containerWidth && this.state.containerHeight
                  return g.a.createElement(
                    w.a,
                    { style: oe.container },
                    g.a.createElement(
                      D,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: n ? this._handlePinchMove : void 0,
                        onWheel: n ? this._handleWheel : void 0,
                        style: oe.root,
                      },
                      d
                        ? g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(_.a, {
                              ref: this._setImageRef,
                              source: { uri: a.src, width: o, height: r },
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
                    a = this._getUnscaledCropData()
                  return {
                    aspectRatio: this.state.aspectRatio,
                    top: Math.round(t * a.top),
                    left: Math.round(t * a.left),
                    width: Math.round(t * a.width),
                    height: Math.round(t * a.height),
                  }
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      h()(re, 'defaultProps', { circle: !1, withZoomControl: !0 })
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
      t.a = re
    },
    '45mF': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      a('2G9S')
      var n = a('1YZw'),
        i = a('pXBW'),
        r = a('3XMw'),
        o = a.n(r),
        s = a('SrIh'),
        l = o.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (a) {
              var r = a.context
              return (
                !a instanceof i.a && (a.message = 'Strato error occurred in '.concat(r.id, ': ').concat(r.action)),
                Object(s.a)(a, { extra: { context: r, isStrato: !0 } }),
                t ? Object(n.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '474o': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      }),
        a.d(t, 'b', function () {
          return i
        }),
        a.d(t, 'c', function () {
          return r
        })
      a('yH/f')
      var n = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        i = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        r = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
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
    '6XNv': function (e, t, a) {
      'use strict'
      var n = a('RhWx'),
        i = a.n(n),
        r = a('VrFO'),
        o = a.n(r),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        d = a.n(c),
        u = a('5Yy7'),
        p = a.n(u),
        m = a('2VqO'),
        h = a.n(m),
        f = a('KEM+'),
        g = a.n(f),
        v = a('yiKp'),
        y = a.n(v),
        b = (a('lTEL'), a('7x/C'), a('LqLs'), a('87if'), a('kYxP'), a('7xRU'), a('z84I'), a('2G9S'), a('ERkP')),
        _ = a.n(b),
        C = a('t62R'),
        w = a('piX5'),
        x = a('4r2z'),
        T = a('FG+G'),
        E = a('rHpw'),
        S = a('k/Ka'),
        I = a('shC7'),
        R = a('MWbm'),
        M = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        k = function (e) {
          return Object(S.a)('option', e)
        },
        P = 1,
        L = (function (e) {
          p()(a, e)
          var t = h()(a)
          function a(e) {
            var n
            return (
              o()(this, a),
              (n = t.call(this, e)),
              g()(d()(n), '_selectRef', _.a.createRef()),
              g()(d()(n), 'state', { isFocused: !1 }),
              g()(d()(n), '_handleChange', function (e) {
                var t = n.props,
                  a = t.onChange,
                  i = t.withEmptyOption,
                  r = e.target,
                  o = r.selectedIndex,
                  s = r.value
                a && a(s, o - (i ? 1 : 0))
              }),
              g()(d()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur
                n.setState({ isFocused: !1 }), t && t()
              }),
              g()(d()(n), '_handleFocus', function (e) {
                var t = n.props.onFocus
                n.setState({ isFocused: !0 }), t && t()
              }),
              (n._id = 'SELECTOR_'.concat(P)),
              (n._errorID = ''.concat(n._id, '_ERROR')),
              (n._helperID = ''.concat(n._id, '_HELP')),
              (n._labelID = ''.concat(n._id, '_LABEL')),
              (P += 1),
              n
            )
          }
          return (
            l()(a, [
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
                    a = e.disabled,
                    n = e.errorText,
                    r = e.hasError,
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
                    f = void 0 === r ? !!n : r,
                    g = new Set()
                  n && g.add(this._errorID), t && g.add(t), o && g.add(this._helperID)
                  var v = g.size ? i()(g).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      R.a,
                      {
                        style: [
                          w.a.border,
                          D.container,
                          a && w.a.disabled,
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
                          disabled: a,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [D.select, { fontFamily: h }, a && w.a.disabled],
                          testID: c || '',
                          value: d,
                        },
                        u ? _.a.createElement(k, { disabled: !0, style: D.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            a = e.label,
                            n = e.value
                          return _.a.createElement(
                            k,
                            { disabled: t, key: ''.concat(a, '-').concat(n), style: D.option, value: n },
                            a,
                          )
                        }),
                      ),
                      _.a.createElement(T.a, {
                        style: [D.dropdownCaret, p && w.a.validColor, (r || n) && w.a.invalidColor],
                      }),
                    ),
                    o ? this._renderHelperText() : null,
                    f && n ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    a = e.hasError,
                    n = e.label,
                    i = this.state.isFocused
                  return _.a.createElement(
                    C.b,
                    {
                      accessibilityRole: 'label',
                      color: a || t ? 'red500' : i ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: D.label,
                    },
                    n,
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
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      C.b,
                      { color: 'red500', nativeID: this._errorID, style: D.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(_.a.PureComponent)
      g()(L, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (L.propTypes = {})
      var D = E.a.create(function (e) {
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
    '6vad': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return m
      })
      a('yH/f')
      var n = a('ERkP'),
        i = a.n(n),
        r = a('t62R'),
        o = a('EHV7'),
        s = a('rHpw'),
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
        c = a('7Mjr'),
        d = a('I4+6'),
        u = a('cm6r'),
        p = a('MWbm'),
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
          a = e.landingUrl,
          n = e.nativeID,
          f = e.rightControl,
          g = e.style,
          v = e.subtext,
          y = e.testID,
          b = e.text,
          _ = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return i.a.createElement(o.a, { style: l.icon })
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
        return i.a.createElement(
          u.a,
          {
            interactiveStyles: a ? w : null,
            link: null == a ? void 0 : a.url,
            nativeID: n,
            style: [h.root, g],
            testID: y,
          },
          i.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: h.mainContent },
            i.a.createElement(p.a, { style: h.icon }, _),
            i.a.createElement(
              r.b,
              { numberOfLines: 3, size: 'headline1', style: C, weight: 'heavy', withHashflags: !0 },
              b,
            ),
            i.a.createElement(
              p.a,
              { style: h.rightControlGroup },
              a ? i.a.createElement(p.a, { style: C }, i.a.createElement(c.a, { style: h.iconArrow })) : null,
              f ? i.a.createElement(p.a, null, f) : null,
            ),
          ),
          v
            ? i.a.createElement(
                r.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: h.subtext, withHashflags: !0 },
                v,
              )
            : null,
        )
      }
    },
    '8A5z': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
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
    '9Jxp': function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        s = a('CXUS'),
        l = a('rHpw'),
        c = a('MWbm'),
        d = l.a.create(function () {
          return { hidden: { opacity: 0 } }
        })
      t.a = function (e) {
        var t = e.children,
          a = e.draggableId,
          n = e.fromVirtualList,
          r = e.index,
          l = e.isBeingDragged,
          u = e.isDragDisabled
        return n && l
          ? o.a.createElement(c.a, { style: d.hidden }, t)
          : o.a.createElement(s.b, { draggableId: a, index: r, isDragDisabled: u }, function (e) {
              return o.a.createElement('div', i()({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps), t)
            })
      }
    },
    '9Q4p': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return b
      })
      a('z84I')
      var n = a('ERkP'),
        i = a.n(n),
        r = a('GTeL'),
        o = a('3XMw'),
        s = a.n(o),
        l = a('MWbm'),
        c = a('PbQQ'),
        d = a('6vad'),
        u = a('e0ey'),
        p = a('rHpw'),
        m = a('ZkMC'),
        h = s.a.j9cf595f,
        f = s.a.d69a782e,
        g = s.a.faf745f9,
        v = s.a.b96e6682,
        y = s.a.h2437f25
      function b(e) {
        var t = e.currentWarnings,
          a = e.mediaItem,
          n = e.onWarningChange,
          o = e.orientedImage,
          s = [
            { label: g, value: 'adult_content' },
            { label: v, value: 'graphic_violence' },
            { label: y, value: 'other' },
          ],
          p = c.b.useOpaqueIdentifier(),
          b = i.a.createElement(r.a, { mediaItem: a, orientedImage: o })
        return i.a.createElement(
          l.a,
          { style: _.root },
          i.a.createElement(
            l.a,
            { style: _.modalContainer },
            null != t && t.size
              ? i.a.createElement(
                  m.a,
                  { revealableTombstoneConfig: m.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  b,
                )
              : b,
            i.a.createElement(d.b, { nativeID: p, subtext: f, text: h }),
            i.a.createElement(
              l.a,
              { accessibilityLabelledBy: p, accessibilityRole: 'group' },
              s.map(function (e) {
                var a = e.label,
                  r = e.value
                return i.a.createElement(u.a, { checked: t && t.has(r), key: r, label: a, name: r, onChange: n })
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
    Drq4: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
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
    EeFI: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        i = a.n(n),
        r = a('VrFO'),
        o = a.n(r),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('5Yy7'),
        d = a.n(c),
        u = a('2VqO'),
        p = a.n(u),
        m = a('ERkP'),
        h = a.n(m),
        f = a('3XMw'),
        g = a.n(f),
        v = a('MWbm'),
        y = a('Qwev'),
        b = a('21U8'),
        _ = a('rHpw'),
        C = a('1auM'),
        w = a('eYns'),
        x = g.a.gff1f69e,
        T = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return o()(this, a), ((n = t.call(this, e)).state = { orientedImage: null }), n
          }
          return (
            l()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    a = void 0 === t ? {} : t
                  a &&
                    a instanceof C.a &&
                    Object(w.b)(a).then(function (t) {
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
                    a = e.defaultAspectRatio,
                    n = e.defaultCropData,
                    i = e.media,
                    r = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    s = this.state.orientedImage,
                    l = i || {},
                    c = l.cropData,
                    d = l.originalMediaFile,
                    u = void 0 === d ? {} : d
                  return s
                    ? h.a.createElement(
                        v.a,
                        { style: E.cropper },
                        h.a.createElement(b.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (n && n.aspectRatio) || (c && c.aspectRatio) || a,
                          defaultCropData: n || c,
                          image: { src: s.url, width: u.width, height: u.height },
                          ref: t,
                          withAspectRatioOptions: r,
                          withZoomControl: o,
                        }),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(h.a.Component),
        E = _.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(T, i()({}, e, { cropperRef: t }))
      })
    },
    G31s: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return C
      })
      var n = a('VrFO'),
        i = a.n(n),
        r = a('Y9Ll'),
        o = a.n(r),
        s = a('5Yy7'),
        l = a.n(s),
        c = a('2VqO'),
        d = a.n(c),
        u = a('KEM+'),
        p = a.n(u),
        m = a('ERkP'),
        h = a.n(m),
        f = a('pKoL'),
        g = a('MWbm'),
        v = a('rHpw'),
        y = a('ZvMt'),
        b = a('9Xij'),
        _ = a('v6aA'),
        C = (function (e) {
          l()(a, e)
          var t = d()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    a = e.style
                  return h.a.createElement(g.a, { style: a }, this._renderImageGroup(t.length))
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
                    a = (e && !t && e[0].externalMediaDetails) || {},
                    n = a.height,
                    i = a.width,
                    r = v.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      s,
                      l = v.a.theme.aspectRatios.minTimelineImage,
                      c = v.a.theme.aspectRatios.maxTimelineImage
                    r = y.a.getImageAspectRatio(l, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return h.a.createElement(
                    b.a,
                    { ratio: t ? r : i / n },
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
                  var a,
                    n,
                    i,
                    r,
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
                    y = null === (a = v.mediaMetadata) || void 0 === a ? void 0 : a.altText,
                    b = null === (n = v.mediaMetadata) || void 0 === n ? void 0 : n.defaultAltText,
                    _ = !(
                      null === (i = v.mediaMetadata) ||
                      void 0 === i ||
                      null === (r = i.sensitiveMediaWarning) ||
                      void 0 === r ||
                      !r.size
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
            a
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
    GTeL: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = a.n(n),
        r = a('3XMw'),
        o = a.n(r),
        s = a('pKoL'),
        l = a('Qwev'),
        c = a('rHpw'),
        d = a('U+bB'),
        u = a('MWbm'),
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
          a = e.orientedImage
        return i.a.createElement(
          u.a,
          { style: m.mediaPreviewWrapper },
          void 0 === a && t
            ? i.a.createElement(s.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: m.mediaContainer,
                withCloseButton: !1,
              })
            : a
            ? i.a.createElement(d.a, { resizeMode: 'contain', source: a.url, style: m.image })
            : i.a.createElement(l.a, { accessibilityLabel: p, style: m.activityIndicator }),
        )
      }
    },
    LtQU: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
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
    M6MT: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return n
      }),
        a.d(t, 'a', function () {
          return i
        })
      a('yH/f')
      var n = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        i = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    'Mbn/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
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
    PKbs: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return R
      })
      a('yH/f'), a('M+/F'), a('z84I'), a('ho0z'), a('1t7P'), a('jQ/y')
      var n = a('ERkP'),
        i = a.n(n),
        r = a('v6aA'),
        o = a('t62R'),
        s = a('3XMw'),
        l = a.n(s),
        c = a('MWbm'),
        d = i.a.createElement(
          l.a.I18NFormatMessage,
          { $i18n: 'i5ba24f4' },
          i.a.createElement(
            o.b,
            { link: 'https://help.twitter.com/en/rules-and-policies/twitter-rules', withInteractiveStyling: !1 },
            l.a.b154b059,
          ),
        ),
        u = function (e) {
          var t = e.containerStyle,
            a = e.explanation,
            n = e.explanationStyle,
            r = e.heading
          return i.a.createElement(c.a, { style: t }, r, i.a.createElement(o.b, { color: 'gray700', style: n }, a || d))
        },
        p = a('csss'),
        m = function (e) {
          var t = e.getPivotLink,
            a = e.renderBadge,
            n = e.rules
          return i.a.createElement(
            i.a.Fragment,
            null,
            n.map(function (e, n) {
              var r = e.description,
                s = e.name,
                l = e.rest_id,
                c = t(e),
                d = a(n + 1),
                u = i.a.createElement(o.b, { weight: 'bold' }, s)
              return i.a.createElement(p.a, { description: r, key: l, label: u, link: c, thumbnail: d })
            }),
          )
        },
        h = a('97Jx'),
        f = a.n(h),
        g = a('ddV6'),
        v = a.n(g),
        y = (a('hCOa'), a('87if'), a('Ee2X'), a('9Jxp')),
        b = a('LtQU'),
        _ = a('rHpw'),
        C = _.a.create(function (e) {
          return { icon: { color: e.colors.gray300, flexShrink: 0, paddingLeft: e.spaces.space12 } }
        }),
        w = function (e) {
          var t = e.badge,
            a = e.rule,
            n = a.description,
            r = a.name,
            s = i.a.createElement(o.b, { weight: 'bold' }, r)
          return i.a.createElement(p.a, {
            description: n,
            label: s,
            renderRightContent: function () {
              return i.a.createElement(b.a, { style: C.icon })
            },
            thumbnail: t,
          })
        },
        x = a('CXUS'),
        T = function (e) {
          var t = e.onReorder,
            a = e.renderBadge,
            n = e.rules
          return i.a.createElement(
            x.a,
            {
              onDragEnd: function (e) {
                if (e.destination) {
                  var a = (function (e, t, a) {
                    var n = Array.from(e),
                      i = n.splice(t, 1),
                      r = v()(i, 1)[0]
                    return n.splice(a, 0, r), n
                  })(n, e.source.index, e.destination.index)
                  t(a)
                }
              },
            },
            i.a.createElement(x.c, { droppableId: 'droppable' }, function (e, t) {
              return i.a.createElement(
                'div',
                f()({}, e.droppableProps, { ref: e.innerRef }),
                n.map(function (e, n) {
                  var r = e.rest_id
                  return i.a.createElement(
                    y.a,
                    { draggableId: r, index: n, isBeingDragged: t.draggingFromThisWith === r, key: r },
                    i.a.createElement(w, { badge: a(n + 1), rule: e }),
                  )
                }),
                e.placeholder,
              )
            }),
          )
        },
        E = a('C6f5'),
        S = a('X00g'),
        I = a('h0NW'),
        R = Object.freeze({ Default: 'Default', Pivot: 'Pivot', Reorder: 'Reorder' }),
        M = function (e, t) {
          var a = t.badgeStyle,
            n = t.enabled,
            r = t.theme,
            s = S.a.getCommunityUIColor(r)
          return i.a.createElement(
            c.a,
            { style: [k.badge, n && { backgroundColor: s }, a] },
            i.a.createElement(o.b, { align: 'center', color: 'white', weight: 'bold' }, e),
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
          a = e.displayType,
          n = void 0 === a ? R.Default : a,
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
            enabled: i.a.useContext(r.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            badgeStyle: t,
          },
          E = (function (e, t, a) {
            return (t ? e.slice(0, t) : e).map(function (e, t) {
              return { label: e.name, description: e.description, decoration: M(t + 1, a) }
            })
          })(v, h, x),
          S = function (e) {
            return M(e, x)
          }
        return E.length > 0
          ? i.a.createElement(
              c.a,
              { style: _ ? k.bottomMargin : null },
              w ? i.a.createElement(u, { containerStyle: l, explanation: o, explanationStyle: d, heading: p }) : null,
              n === R.Pivot && s
                ? i.a.createElement(m, { getPivotLink: s, renderBadge: S, rules: v })
                : n === R.Reorder && f
                ? i.a.createElement(T, { onReorder: f, renderBadge: S, rules: v })
                : i.a.createElement(I.a, { containerStyle: g, items: E }),
            )
          : null
      }
    },
    PrL8: function (e, t, a) {
      'use strict'
      var n = a('rHpw').a.create(function (e) {
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
      t.a = n
    },
    Rqga: function (e, t, a) {
      var n = a('ax0f'),
        i = Math.log,
        r = Math.LN2
      n(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return i(e) / r
          },
        },
      )
    },
    WOwf: function (e, t, a) {
      'use strict'
      function n(e, t) {
        return Math.min(1, 1 - e / t)
      }
      a.d(t, 'a', function () {
        return n
      })
    },
    Zg3A: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
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
    'a/ea': function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return u
      }),
        a.d(t, 'd', function () {
          return p
        }),
        a.d(t, 'e', function () {
          return h
        }),
        a.d(t, 'a', function () {
          return g
        }),
        a.d(t, 'b', function () {
          return v
        })
      var n = a('KEM+'),
        i = a.n(n),
        r = a('yiKp'),
        o = a.n(r),
        s = (a('yH/f'), a('7x/C'), a('JtPf'), a('M6MT')),
        l = a('Ssj5'),
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
              var a = {
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
              return e(a)
            }, t)
          })
        }
      l.a.register(
        i()({}, c, function () {
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
    c0ZR: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('7x/C'), a('JtPf'), a('849X'), a('TJCb')
      var n = function (e) {
        return new Promise(function (t, a) {
          var n = new window.XMLHttpRequest()
          ;(n.responseType = 'blob'),
            (n.onreadystatechange = function () {
              n.readyState === window.XMLHttpRequest.DONE &&
                (200 === n.status ? t(n.response) : a(new Error('Unexpected status code')))
            }),
            (n.onerror = function (e) {
              return a(e)
            }),
            (n.ontimeout = function (e) {
              return a(e)
            }),
            n.open('GET', e, !0),
            n.send()
        })
      }
    },
    h5NW: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        i = a.n(n),
        r = a('RhWx'),
        o = a.n(r),
        s = a('yiKp'),
        l = a.n(s),
        c = a('VrFO'),
        d = a.n(c),
        u = a('Y9Ll'),
        p = a.n(u),
        m = a('1Pcy'),
        h = a.n(m),
        f = a('5Yy7'),
        g = a.n(f),
        v = a('2VqO'),
        y = a.n(v),
        b = a('KEM+'),
        _ = a.n(b),
        C =
          (a('2G9S'),
          a('yH/f'),
          a('jwue'),
          a('7x/C'),
          a('+oxZ'),
          a('5BYb'),
          a('KqXw'),
          a('3uku'),
          a('7xRU'),
          a('JtPf'),
          a('jQ3i'),
          a('x4t0'),
          a('lTEL'),
          a('87if'),
          a('kYxP'),
          a('z84I'),
          a('hBvt'),
          a('MvUL'),
          a('ulNE'),
          a('urw/'),
          a('LW0h'),
          a('hCOa'),
          a('DfhM'),
          a('vrRf'),
          a('uFXj'),
          a('ERkP')),
        w = a.n(C),
        x = a('dDSG'),
        T = a('pXBW'),
        E = a('6/RC'),
        S = (a('KOtZ'), a('ho0z'), a('hBpG'), a('wpu3')),
        I = a('ddV6'),
        R = a.n(I),
        M = a('+Kfv'),
        k = a('eSoz'),
        P = a('rxPX'),
        L = function (e, t) {
          var a = t.communityId
          return a ? k.c.select(e, a) : void 0
        },
        D = Object(P.a)().propsFromState(function () {
          return { community: L }
        }),
        A = a('MtXG'),
        O = a('t62R'),
        F = a('CKsB'),
        B = a('rHpw'),
        N = a('3XMw'),
        V = a.n(N),
        z = V.a.d58baa7e,
        j = D(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              a = e.community,
              n = e.communityId,
              i = e.selectedCommunityId
            if (!a) return null
            var r,
              o = a.member_count
            return w.a.createElement(F.a, {
              actionSubText:
                ((r = z(o)),
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
                        w.a.createElement(A.a.Value, null, V.a.ibd0106d({ formattedCount: r })),
                        w.a.createElement(A.a.Label, null, V.a.cface2d0({ count: o })),
                      ),
                    ),
                  ),
                )),
              actionText: a.name,
              isSelected: i === n,
              key: n,
              media: a.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: n,
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
        W = a('0zXz'),
        U = a('FS1z'),
        G = a('Irs7'),
        K = a('MWbm'),
        q = a('yw4N'),
        X = a('/yvb'),
        Y = a('+Eiw'),
        Q = a('Zg3A'),
        J = a('EyD/'),
        Z = a('5wO0'),
        $ = V.a.e815fc33,
        ee = V.a.c63602d3,
        te = V.a.baffe39a,
        ae = V.a.aa4209e8,
        ne = V.a.d0748dae,
        ie = V.a.abd845fd,
        re = { viewType: 'everyone' },
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
            a,
            n,
            i,
            r,
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
              null !== (a = null === (n = e.trustedFriendsList) || void 0 === n ? void 0 : n.member_count) &&
              void 0 !== a
                ? a
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
                  { behavioralEventContext: re },
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
                      actionText: ae,
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
                        ((i = _),
                        (r = se(i)),
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
                                w.a.createElement(A.a.Value, null, V.a.a5f7b70f({ formattedCount: r })),
                                w.a.createElement(A.a.Label, null, V.a.a7daec1e({ count: i })),
                              ),
                            ),
                            w.a.createElement(X.a, { onPress: T, size: 'xSmall', type: 'primaryText' }, ie),
                          ),
                        )),
                      actionText: ne,
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
        de = a('v6aA'),
        ue = a('xVN5'),
        pe = a('wAC9'),
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
        he = a('hqKg'),
        fe = a('li/m'),
        ge = a('RqPI'),
        ve = a('xZGM'),
        ye = a('0KEI'),
        be = a('oEOe'),
        _e = a('kGix'),
        Ce = a('Ssj5'),
        we = 'trustedFriends',
        xe = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        Te = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        Ee = function (e) {
          return e.trustedFriends.lists
        },
        Se = function () {
          return function (e, t, a) {
            var n = a.api
            return be.b(e, { request: n.TrustedFriends.createTrustedFriendsList })({
              actionTypes: Te,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        Ie = function () {
          return function (e, t) {
            var a = t(),
              n = Ee(a)
            ;(n.length ? n[0] : void 0) ||
              e(function (e, t, a) {
                var n = a.api
                return be.b(e, { request: n.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: xe,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && Se && e(Se())
              })
          }
        },
        Re = Object.freeze({ lists: [], fetchStatus: _e.a.NONE })
      Ce.a.register(
        _()({}, we, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case xe.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: _e.a.LOADING })
            case xe.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: _e.a.FAILED })
            case xe.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: _e.a.LOADED },
                )
              break
            case Te.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: _e.a.LOADING })
            case Te.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: _e.a.FAILED })
            case Te.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
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
      var Me = function (e, t) {
          var a = t.audienceControlsValue.communityIdValue || void 0
          return a ? k.c.select(e, a) : void 0
        },
        ke = function (e, t) {
          return Object(ve.D)(e, ve.f)
        },
        Pe = function (e, t) {
          return Object(ve.D)(e, ve.w)
        },
        Le = function (e) {
          var t = Ee(e)
          return t.length ? t[0] : void 0
        },
        De = Object(P.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: ke,
              trustedFriendsEducationVisibilityFlag: Pe,
              hasMemberships: fe.d,
              selectedCommunity: Me,
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
        Ae = a('FG+G'),
        Oe = a.p + 'twitter-circle.b1a74a95.svg',
        Fe = a('TIdA'),
        Be = a('A91F'),
        Ne = V.a.f0598964,
        Ve = V.a.ceec051b,
        ze = V.a.fc5bfd95,
        je = V.a.f5b3dc1d,
        He = B.a.create(function (e) {
          return {
            root: { flexDirection: 'column', paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space12 },
            createButton: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
            coverContainer: { height: '170px', width: '100%' },
          }
        }),
        We = function (e) {
          var t = e.onAction,
            a = e.setShowTrustedFriendsModal
          return w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              K.a,
              {
                accessibilityDescribedBy: 'trusted-friends-education-popover',
                accessibilityLabelledBy: 'trustd-friends-education-title',
                accessibilityRole: 'dialog',
                style: He.root,
              },
              w.a.createElement(
                K.a,
                { style: He.coverContainer },
                w.a.createElement(Fe.a, { accessibilityLabel: '', aspectMode: Be.a.COVER, image: Oe }),
              ),
              w.a.createElement(
                K.a,
                { style: He.title },
                w.a.createElement(
                  O.b,
                  { nativeID: 'conversation-controls-title', size: 'title3', style: He.title, weight: 'bold' },
                  Ne,
                ),
                w.a.createElement(
                  O.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body', style: He.createButton },
                  Ve,
                ),
                w.a.createElement(
                  X.a,
                  {
                    onPress: function () {
                      t(), a(!0)
                    },
                    size: 'xLarge',
                    style: He.createButton,
                    type: 'primaryFilled',
                  },
                  ze,
                ),
                w.a.createElement(
                  X.a,
                  {
                    key: 'button_cancel',
                    onPress: function () {
                      t()
                    },
                    size: 'xLarge',
                    style: He.cancelButton,
                    type: 'primaryOutlined',
                  },
                  je,
                ),
              ),
            ),
          )
        },
        Ue = a('7JQg'),
        Ge = a('feu+'),
        Ke = a('cOhU'),
        qe = a('a5gf'),
        Xe = a('Lsrn'),
        Ye = a('k/Ka'),
        Qe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ye.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Xe.a.root, e.style],
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
      Qe.metadata = { width: 24, height: 24 }
      var Je = Qe,
        Ze = V.a.e76b4485,
        $e = V.a.j24c37b2,
        et = V.a.bb55e8ed,
        tt = V.a.h3fad86e,
        at = V.a.g31872be,
        nt = V.a.b28ec85f,
        it = V.a.h0318479,
        rt = V.a.edbbcc22
      function ot(e) {
        var t = e.changeAudienceToTrustedFriends,
          a = e.history,
          n = e.setShowModal,
          i = e.trustedFriendsListId,
          r = w.a.useCallback(
            function () {
              t(), i && (n(!1), a.push('/i/circles/'.concat(i, '/members')))
            },
            [a, n, i, t],
          ),
          o = w.a.useCallback(
            function () {
              n(!1), t()
            },
            [n, t],
          ),
          s = w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              K.a,
              { style: st.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Ke.a, { style: st.icon })),
              w.a.createElement(
                K.a,
                { style: st.subtextContainer },
                w.a.createElement(
                  O.b,
                  { align: 'left', color: 'text', style: st.subtextContainer, weight: 'bold' },
                  et,
                ),
                w.a.createElement(O.b, { align: 'left', color: 'gray700' }, tt),
              ),
            ),
            w.a.createElement(
              K.a,
              { style: st.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(qe.a, { style: st.icon })),
              w.a.createElement(
                K.a,
                { style: st.subtextContainer },
                w.a.createElement(O.b, { color: 'text', weight: 'bold' }, at),
                w.a.createElement(O.b, { color: 'gray700' }, nt),
              ),
            ),
            w.a.createElement(
              K.a,
              { style: st.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Je, { style: st.icon })),
              w.a.createElement(
                K.a,
                { style: st.subtextContainer },
                w.a.createElement(O.b, { color: 'text', weight: 'bold' }, it),
                w.a.createElement(O.b, { color: 'gray700' }, rt),
              ),
            ),
          )
        return w.a.createElement(
          Ue.c,
          null,
          w.a.createElement(Ge.a, {
            actionLabel: $e,
            headline: Ze,
            onAction: r,
            onClose: o,
            subtext: s,
            withCloseButton: !0,
          }),
        )
      }
      var st = B.a.create(function (e) {
          return {
            subtextContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
            icon: { color: e.colors.green500, paddingTop: e.spaces.space4, paddingRight: e.spaces.space24 },
            contentWrapper: { display: 'flex', flexDirection: 'row', paddingTop: e.spaces.space32 },
          }
        }),
        lt = a('FGLp'),
        ct = a('X00g'),
        dt = a('Sp5X'),
        ut = a('efqG'),
        pt = V.a.baffe39a,
        mt = V.a.e815fc33,
        ht = V.a.aa4209e8,
        ft = V.a.d0748dae,
        gt = { viewType: 'communities_controls' },
        vt = w.a.createElement(Ae.a, null)
      var yt = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        bt = De(function (e) {
          var t,
            a = w.a.useContext(de.a),
            n = w.a.useState(!1),
            r = R()(n, 2),
            o = r[0],
            s = r[1],
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
            I = a.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            k = h.communityIdValue || !1,
            P = h.exclusivityControlValue || !1,
            L = h.trustedFriendsValue || !1,
            D = null == C ? void 0 : C.rest_id,
            A = b && E,
            O = (f && !x) || A,
            F = pt
          if ((k && null != x && x.name ? (F = x.name) : P ? (F = ht) : L && (F = ft), P))
            t = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
          else if (L) t = { color: 'green500', borderColor: 'green500', backgroundColor: 'transparent' }
          else if (k && null != x && x.theme && I) {
            var B = ct.a.getCommunityUIColorName(x.theme)
            t = { color: B, borderColor: B, backgroundColor: 'transparent' }
          } else t = { type: 'brandOutlined' }
          Object(lt.a)(function () {
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
                  ? w.a.createElement(We, { history: dt.a, onAction: e, setShowTrustedFriendsModal: s })
                  : w.a.createElement(ce, {
                      audienceControlsValue: h,
                      dismiss: e,
                      hasMemberships: g,
                      history: dt.a,
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
                D &&
                  _({
                    _type: 'trusted_friends_tweet',
                    conversationControlsValue: 'trusted_friends_tweet',
                    trustedFriendsMemberCount: null == C ? void 0 : C.member_count,
                    trustedFriendsValue: { trusted_friends_list_id: D },
                  })
              },
              [_, D, C],
            )
          return y || g || (b && e.selectTrustedFriendsList)
            ? w.a.createElement(
                M.a,
                { behavioralEventContext: gt },
                w.a.createElement(
                  K.a,
                  { style: yt.container },
                  o
                    ? w.a.createElement(ot, {
                        changeAudienceToTrustedFriends: z,
                        history: dt.a,
                        setShowModal: s,
                        trustedFriendsListId: D,
                      })
                    : null,
                  w.a.createElement(
                    ut.a,
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
                      i()(
                        {
                          accessibilityExpanded: d,
                          accessibilityHasPopup: 'menu',
                          accessibilityLabel: mt,
                          accessibilityRole: 'button',
                          icon: vt,
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
        _t = a('PKbs'),
        Ct = function (e, t) {
          var a = t.selectedCommunityId
          return a ? k.c.select(e, a) : void 0
        },
        wt = Object(P.a)()
          .propsFromState(function () {
            return { community: Ct }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ye.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        xt = a('YeIG'),
        Tt = a('21zW'),
        Et = V.a.gfca5254,
        St = V.a.f510c8b2,
        It = w.a.createElement(O.b, { weight: 'bold' }, St),
        Rt = B.a.create(function (e) {
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
        Mt = wt(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            r = e.selectedCommunityId,
            o = e.showMiddot
          w.a.useEffect(
            function () {
              r && Object(xt.a)(t) && n(r).catch(a())
            },
            [t, r, a, n],
          )
          var s = w.a.useState(!1),
            l = R()(s, 2),
            c = l[0],
            d = l[1],
            u = w.a.useContext(de.a).featureSwitches,
            p = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var a = t.rules,
                    n = t.theme
                  return w.a.createElement(_t.b, {
                    badgeStyle: Rt.badgeStyle,
                    headerContainerStyle: Rt.rulesHeader,
                    heading: It,
                    ruleContainerStyle: Rt.ruleContainerStyle,
                    rules: a,
                    theme: n,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var m = t.theme,
              h = ct.a.getCommunityUIColorName(m),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              K.a,
              { style: Rt.container },
              o ? w.a.createElement(Tt.a, null) : null,
              w.a.createElement(
                ut.a,
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
                  i()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Rt.button,
                    },
                    f,
                  ),
                  Et,
                ),
              ),
            )
          }
          return null
        }),
        kt = a('ii+P'),
        Pt = a('4zmP'),
        Lt = V.a.g46f363d,
        Dt = { viewType: 'rule_education' },
        At = function () {
          var e = Object(kt.a)(ve.g),
            t = R()(e, 2),
            a = t[0],
            n = t[1]
          return (
            w.a.useEffect(
              function () {
                return n
              },
              [n],
            ),
            a
              ? w.a.createElement(
                  K.a,
                  { style: Ot.container },
                  w.a.createElement(Pt.a, { behavioralEventContext: Dt, onClose: n, text: Lt, withCloseButton: !0 }),
                )
              : null
          )
        },
        Ot = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Ft = w.a.memo(At),
        Bt = a('H7Rt'),
        Nt = a('m3Bd'),
        Vt = a.n(Nt),
        zt = a('yZqq'),
        jt = function (e, t) {
          return Object(ve.D)(e, ve.s)
        },
        Ht = Object(P.a)()
          .propsFromState(function () {
            return { shouldShowEducation: jt }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ve.z)(ve.s)
              },
            }
          }),
        Wt = V.a.aa65a449,
        Ut = { viewType: 'persistent_conversation_controls_education' }
      var Gt = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        Kt = Ht(function (e) {
          var t = e.addEducationFlag,
            a = e.buttonRef,
            n = e.shouldShowEducation,
            i = w.a.useContext(de.a).featureSwitches,
            r = w.a.useState(),
            o = R()(r, 2),
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
                if (a) {
                  var e = a.getBoundingClientRect(),
                    t = e.left,
                    n = e.width
                  l(t + n / 2)
                }
              },
              [a],
            ),
            !0 === i.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && n
              ? w.a.createElement(
                  K.a,
                  { style: Gt.container },
                  w.a.createElement(Pt.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: Ut,
                    onClose: c,
                    text: Wt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        qt = a('DlMI'),
        Xt = a('gBde'),
        Yt = a('gUPl'),
        Qt = ['analytics'],
        Jt = w.a.createElement(qt.a, null),
        Zt = w.a.createElement(Xt.a, null),
        $t = w.a.createElement(Yt.a, null),
        ea = w.a.createElement(Ke.a, null),
        ta = w.a.createElement(qe.a, null),
        aa = 'conversation_control',
        na = { viewType: aa },
        ia = Object.freeze({
          all: { icon: Jt, label: V.a.i8ea6d4e },
          community: { icon: $t, label: V.a.ec5a4a25 },
          by_invitation: { icon: Zt, label: V.a.b4543009 },
          community_members: { icon: ea, label: V.a.i13be5a0 },
          super_followers_exclusive: { icon: Jt, label: V.a.f8393bda },
          trusted_friends_tweet: { icon: ta, label: V.a.c0857ccd },
        }),
        ra =
          (Object.freeze(['community', 'by_invitation']),
          Object(G.a)(function (e) {
            var t = e.analytics,
              a = Vt()(e, Qt),
              n = e.disabled,
              i = e.value,
              r = ia[i],
              o = r.icon,
              s = r.label,
              l = w.a.useState(!1),
              c = R()(l, 2),
              d = c[0],
              u = c[1],
              p = w.a.useRef(null)
            Object(lt.a)(function () {
              i !== Bt.a.all && i !== Bt.a.community_members && u(!0)
            })
            var m = w.a.useCallback(
              function (e) {
                t.scribe({ element: aa, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              M.a,
              { behavioralEventContext: na },
              d ? w.a.createElement(Kt, { buttonRef: p.current }) : null,
              w.a.createElement(
                K.a,
                { style: oa.controlsContainer },
                w.a.createElement(
                  zt.a,
                  a,
                  w.a.createElement(
                    X.a,
                    { disabled: n, icon: o, onPress: m, ref: p, size: 'xSmall', style: oa.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        oa = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        sa = a('krmn'),
        la = a('cIoY'),
        ca = a('w3n3'),
        da = a('MLl7'),
        ua = a('1auM'),
        pa = a('07FG'),
        ma = a('Q8CU'),
        ha = a('QbaN'),
        fa = a('VPdC'),
        ga = a('WPfJ'),
        va = B.a.create(function (e) {
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
              zIndex: ga.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: ga.e },
            iconEmojiPicker: { zIndex: ga.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: ga.a,
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
        ya = V.a.bdbcdd93,
        ba = function (e) {
          var t = e.media,
            a = e.mediaAttachDisabled,
            n = e.onFilesAdded,
            i = e.setActiveParentKey,
            r = a || t.length >= 4,
            o = t.length < 3
          return w.a.createElement(fa.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? ya : void 0,
            disabled: r,
            multiple: o,
            onChange: n,
            onPress: i,
            style: [va.toolBarButton, va.firstToolBarButton],
            type: 'brandText',
          })
        },
        _a = a('oQhu'),
        Ca = a('p+r5'),
        wa = a('GWvE'),
        xa = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a() {
            var e
            d()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              _()(h()(e), '_setInputRef', function (t) {
                e._inputRef = t
              }),
              e
            )
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    a = e.defaultValue,
                    n = e.editable,
                    i = e.label,
                    r = e.name,
                    o = e.onBlur,
                    s = e.onChange
                  return w.a.createElement(
                    K.a,
                    { style: Ta.root },
                    w.a.createElement(Ca.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: a,
                      editable: n,
                      label: i,
                      maxLength: 25,
                      name: r,
                      onBlur: o,
                      onChange: s,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Ta.formTextInput,
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
                    (this.value && !Object(wa.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      _()(xa, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Ta = B.a.create(function (e) {
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
        Ea = xa,
        Sa = (a('Blm6'), a('TJCb'), a('DZ+c'), a('mtvn')),
        Ia = a('6XNv'),
        Ra = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a() {
            return d()(this, a), t.apply(this, arguments)
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    a = e.label,
                    n = e.last,
                    i = e.max,
                    r = e.min,
                    o = e.onChange,
                    s = e.testID,
                    l = !t || r === i,
                    c = e.value.toString(),
                    d = Object(Sa.a)(r, i + 1).map(function (e) {
                      return { label: ''.concat(V.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(Ia.a, {
                    disabled: l,
                    label: a,
                    onChange: o,
                    options: d,
                    style: [Ma.selector, !n && Ma.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            a
          )
        })(w.a.PureComponent)
      _()(Ra, 'defaultProps', { last: !1 })
      var Ma = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        ka = Ra,
        Pa = 'addPollChoice',
        La = 'selectPollDays',
        Da = 'selectPollHours',
        Aa = 'selectPollMinutes',
        Oa = 'removePollButton',
        Fa = V.a.caf8edc4,
        Ba = V.a.g93586be,
        Na = V.a.d073b644,
        Va = V.a.a2f0728e,
        za = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var i
            return (
              d()(this, a),
              (i = t.call(this, e, n)),
              _()(h()(i), '_handleDaysChange', function (e) {
                var t = i.props.onChange,
                  a = parseInt(e, 10)
                i.setState(function (e) {
                  var n = e.duration,
                    i = n.hours,
                    r = n.minutes,
                    o = 0 === a && 0 === i && 0 === r ? 1 : 7 === a ? 0 : i,
                    s = { days: a, hours: o, minutes: 7 === a ? 0 : 0 === a && 0 === o && r < 5 ? 5 : r }
                  return t && t(s), { duration: s }
                })
              }),
              _()(h()(i), '_handleHoursChange', function (e) {
                var t = i.props.onChange,
                  a = parseInt(e, 10)
                i.setState(function (e) {
                  var n = e.duration,
                    i = n.days,
                    r = n.minutes,
                    o = { days: i, hours: a, minutes: 0 === i && 0 === a && r < 5 ? 5 : r }
                  return t && t(o), { duration: o }
                })
              }),
              _()(h()(i), '_handleMinutesChange', function (e) {
                var t = i.props.onChange,
                  a = parseInt(e, 10)
                i.setState(function (e) {
                  var n = e.duration,
                    i = { days: n.days, hours: n.hours, minutes: a }
                  return t && t(i), { duration: i }
                })
              }),
              (i.state = { duration: e.initialDuration }),
              i
            )
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    a = e.style
                  return w.a.createElement(
                    K.a,
                    { style: a },
                    w.a.createElement(O.b, { style: ja.durationLabel }, t ? Fa : ''),
                    this._renderPicker(),
                  )
                },
              },
              {
                key: '_renderPicker',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    a = e.isActive,
                    n = this.state.duration,
                    i = n.days,
                    r = n.hours,
                    o = n.minutes
                  return w.a.createElement(
                    K.a,
                    { style: ja.durationControls },
                    w.a.createElement(ka, {
                      editable: t && a,
                      label: Ba,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: La,
                      value: i,
                    }),
                    w.a.createElement(ka, {
                      editable: t && a,
                      label: Na,
                      max: 7 === i ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Da,
                      value: r,
                    }),
                    w.a.createElement(ka, {
                      editable: t && a,
                      label: Va,
                      last: !0,
                      max: 7 === i ? 0 : 59,
                      min: 0 === i && 0 === r ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Aa,
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
            a
          )
        })(w.a.Component)
      _()(za, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var ja = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Ha = za,
        Wa = a('iY63'),
        Ua = a('jtO7'),
        Ga = V.a.g589c2e1,
        Ka = V.a.a1e6c3a1,
        qa = V.a.a739e006,
        Xa = V.a.d89a5b92,
        Ya = V.a.c2a8118d,
        Qa = V.a.a8ede1de,
        Ja = V.a.af40a8ef,
        Za = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var i
            d()(this, a),
              (i = t.call(this, e, n)),
              _()(h()(i), '_setChoice1Ref', function (e) {
                i._choice1 = e
              }),
              _()(h()(i), '_setChoice2Ref', function (e) {
                i._choice2 = e
              }),
              _()(h()(i), '_setChoice3Ref', function (e) {
                i._choice3 = e
              }),
              _()(h()(i), '_setChoice4Ref', function (e) {
                i._choice4 = e
              }),
              _()(h()(i), '_setDurationPickerRef', function (e) {
                i._durationPicker = e
              }),
              _()(h()(i), '_handleValidation', function () {
                var e = i.props,
                  t = e.onChange,
                  a = e.onInvalid,
                  n = e.onValid,
                  r = i.choices,
                  o = h()(i),
                  s = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                r && r.length >= 2 && s ? n() : a(), t && t({ choices: r, duration: i.duration })
              }),
              _()(h()(i), '_handleAdd', function () {
                i.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  i.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              _()(h()(i), '_handleDurationChange', function (e) {
                var t = i.props.onChange
                t && t({ choices: i.choices, duration: e })
              }),
              _()(h()(i), '_handleBlur', function () {
                var e = i.props.onBlur
                null == e || e()
              })
            var r = e.initialChoices,
              o = void 0 === r,
              s = (r || []).length,
              l = s > 2 ? s : 2
            return (i.state = { autoFocus: o, choiceCount: l }), i
          }
          return (
            p()(a, [
              {
                key: '_renderChoices',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    a = e.initialChoices,
                    n = void 0 === a ? [] : a,
                    i = e.isActive,
                    r = this.state,
                    o = r.autoFocus,
                    s = r.choiceCount,
                    l = w.a.createElement(
                      K.a,
                      { style: $a.rightColumn },
                      s < 4
                        ? w.a.createElement(X.a, {
                            accessibilityLabel: Qa,
                            disabled: !(t && i),
                            hoverLabel: { label: Ja },
                            icon: w.a.createElement(Wa.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: $a.addButton,
                            testID: Pa,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    K.a,
                    { style: $a.choicesAndAddButton },
                    w.a.createElement(
                      K.a,
                      { style: $a.choices },
                      w.a.createElement(Ea, {
                        autoFocus: o,
                        defaultValue: n[0],
                        editable: t && i,
                        label: Ga,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(Ea, {
                        defaultValue: n[1],
                        editable: t && i,
                        label: Ka,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(Ea, {
                            autoFocus: o,
                            defaultValue: n[2],
                            editable: t && i,
                            label: qa,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(Ea, {
                            autoFocus: o,
                            defaultValue: n[3],
                            editable: t && i,
                            label: Xa,
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
                    a = e.initialDuration,
                    n = e.isActive,
                    i = e.onRemove
                  return w.a.createElement(
                    K.a,
                    { style: $a.root },
                    this._renderChoices(),
                    w.a.createElement(Ha, {
                      editable: t,
                      initialDuration: a,
                      isActive: n,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: $a.durationPicker,
                    }),
                    w.a.createElement(
                      K.a,
                      { style: $a.removePollButton },
                      w.a.createElement(Ua.a, { color: 'red500', label: Ya, onPress: i, testID: Oa }),
                    ),
                  )
                },
              },
              {
                key: 'choices',
                get: function () {
                  var e = this._choice1,
                    t = this._choice2,
                    a = this._choice3,
                    n = this._choice4
                  return [e && e.value, t && t.value, a && a.value, n && n.value].filter(Boolean)
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this._durationPicker ? this._durationPicker.duration : void 0
                },
              },
            ]),
            a
          )
        })(w.a.Component),
        $a = B.a.create(function (e) {
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
        en = Object(G.a)(Za),
        tn = a('+d3d'),
        an = ['onChange'],
        nn = function (e) {
          var t = e.composerIndex,
            a = e.editable,
            n = e.initialChoices,
            r = e.initialDuration,
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
            p = Vt()(d, an),
            m = w.a.useMemo(
              function () {
                return Object(tn.a)(
                  function (e) {
                    var t = e.choices,
                      a = e.duration
                    u({ choices: t, duration: a })
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
            en,
            i()({ editable: a, initialChoices: n, initialDuration: r, isActive: o, onBlur: h, onChange: m }, p),
          )
        },
        rn = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        on = V.a.i859676b,
        sn = w.a.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            O.b,
            { link: '/settings/audience_and_tagging', style: rn.link, withInteractiveStyling: !0, withUnderline: !0 },
            V.a.c9a48d3f,
          ),
        )
      function ln() {
        return w.a.createElement(K.a, { style: rn.container }, w.a.createElement(Pt.a, { headline: on, text: sn }))
      }
      var cn = a('b5s6'),
        dn = a('rcen'),
        un = a('zmS9'),
        pn = 'addButton',
        mn = 'addSubtitlesLabel',
        hn = 'altTextLabel',
        fn = 'tagPeopleLabel',
        gn = 'attachments',
        vn = 'createPollButton',
        yn = 'geoButton',
        bn = 'gifSearchButton',
        _n = 'scheduleOption',
        Cn = 'taggedUsersLabel',
        wn = 'tweetTextarea_',
        xn = 'toolBar',
        Tn = 'scheduledTweetIndicator',
        En = a('xM7j'),
        Sn = a('6OUF'),
        In = a('tZIO'),
        Rn = a('5mJL'),
        Mn = a('DNho'),
        kn = a('jhWN'),
        Pn = a('rFBM'),
        Ln = a('zfvc'),
        Dn = a('Ujvi'),
        An = a('yTN1'),
        On = a('gpVt'),
        Fn = a('hOZg'),
        Bn = a('ll3R'),
        Nn = a('J0mu'),
        Vn = a('EfHu'),
        zn = a('KrGU'),
        jn = a('boUI'),
        Hn = a('6ZHn'),
        Wn = a('/WPq'),
        Un = a('wpLu'),
        Gn = a('pHub'),
        Kn = a('8A5z'),
        qn = a('G31s'),
        Xn = a('S1qy'),
        Yn = a.n(Xn),
        Qn = a('cjAp'),
        Jn = a.n(Qn),
        Zn = V.a.f0afcc0e,
        $n = V.a.ha5e2e79,
        ei = V.a.a3de3b68,
        ti = V.a.cc2b28fc,
        ai = V.a.g45af04e,
        ni = V.a.j1d5791c,
        ii = V.a.ee9c4013,
        ri = V.a.af40a8ef,
        oi = V.a.e68b09b4,
        si = V.a.ec10ee02,
        li = V.a.h735a98d,
        ci = V.a.c4ccfbe2,
        di = V.a.j499fbcb,
        ui = V.a.b7d8e3f0,
        pi = V.a.d1175c78,
        mi = V.a.bf4e9d79,
        hi = V.a.e0342f98,
        fi = V.a.e349147b,
        gi = V.a.e3a24e4b,
        vi = V.a.fbd24526,
        yi = V.a.de4669e2,
        bi = V.a.d2c7a41c,
        _i = V.a.f7364fa1,
        Ci = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        wi = V.a.ia24dc8c,
        xi = w.a.createElement(Fn.a, null),
        Ti = w.a.createElement(Wa.a, null),
        Ei = w.a.createElement(Bn.a, null),
        Si = w.a.createElement(Nn.a, null),
        Ii = { viewType: 'schedule_tweet' },
        Ri = { viewType: 'add_poll' },
        Mi = { viewType: 'add_composer' },
        ki = { viewType: 'tag_location' },
        Pi = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var r
            d()(this, a),
              (r = t.call(this, e, n)),
              _()(h()(r), '_handleConversationControlsValueChange', function (e) {
                r._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              _()(h()(r), '_handleAudienceControlsValueChange', function (e) {
                r.props.updateAudienceControlsValue(e)
              }),
              _()(
                h()(r),
                '_triggerConversationControlsImpression',
                Object(_a.a)(function () {
                  return r.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              _()(h()(r), '_shouldRenderControls', function (e, t) {
                var a = r.state.isFocused,
                  n = r.props,
                  i = n.audienceControlsValue,
                  o = n.isActive,
                  s = n.isInline,
                  l = n.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (i.conversationControlsValue !== Bt.a.community_members &&
                      i.conversationControlsValue !== Bt.a.super_followers_exclusive &&
                      i.conversationControlsValue !== Bt.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (o && !l && (!s || a || e))
                )
              }),
              _()(h()(r), '_renderConversationControls', function (e) {
                var t = r.state.isFocused,
                  a = r.props,
                  n = a.audienceControlsValue,
                  i = a.isInline
                if (
                  (a.isReply || (!t && i) || r._triggerConversationControlsImpression(),
                  !r._conversationControlsCreationEnabled)
                )
                  return null
                var o = n.conversationControlsValue,
                  s = r._shouldRenderControls(e, 'conversation'),
                  l =
                    o === Bt.a.community_members ||
                    o === Bt.a.super_followers_exclusive ||
                    o === Bt.a.trusted_friends_tweet ||
                    r._isScheduled()
                return s
                  ? w.a.createElement(ra, { disabled: l, onChange: r._handleConversationControlsValueChange, value: o })
                  : null
              }),
              _()(h()(r), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  K.a,
                  { style: va.taggedLocationContainer },
                  w.a.createElement(
                    X.a,
                    {
                      icon: w.a.createElement(Vn.a, null),
                      onPress: r._handleGeoButtonClick,
                      size: 'xSmall',
                      style: va.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              _()(h()(r), '_renderMainContent', function () {
                var e = r.props,
                  t = e.additionalToolbarContent,
                  a = e.data,
                  n = e.index,
                  i = e.isExpanded,
                  o = e.isInline,
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = a.cardUrl,
                  u = a.media,
                  p = a.pollActive,
                  m = a.quotedStatus,
                  h = a.text,
                  f = Object(On.b)(h) || (d && !Object(pa.a)(d) && [d]),
                  g = !!u.length || p || !!m,
                  v = r.props.typeaheadWrapper,
                  y = !r._isEmpty()
                return w.a.createElement(
                  K.a,
                  { style: va.textInputArea },
                  w.a.createElement(
                    K.a,
                    { style: i ? va.inputStyle : va.collapsedInputStyle },
                    r._renderAudienceControls(y),
                    w.a.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: s,
                        onTextUpdated: c ? r._handleRichTextChange : r._handlePlainTextChange,
                        onTypeaheadStateChange: l,
                      },
                      r._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.a.createElement(On.a, { index: n, isCardPreviewTombstoned: Object(pa.a)(d), urls: f })
                      : null,
                  ),
                  i ? null : t,
                )
              }),
              _()(h()(r), '_renderFieldTextInput', function (e) {
                var t = r.props,
                  a = t.autoFocus,
                  n = t.data,
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
                  v = r.state.isFocused,
                  y = n.text,
                  b = 0 === s && p,
                  _ = !!g,
                  C = g || {},
                  x = C.dismissComposerCommandName,
                  T = C.element,
                  E = C.sendTweetCommandName,
                  S = u && !g && !c,
                  I = g
                    ? {
                        onChange: r._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: x,
                          editorState: r.state.editorState,
                          element: T,
                          sendTweetCommandName: E,
                        },
                      }
                    : { onChange: r._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  Sn.a,
                  i()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: ei,
                      autoFocus: a || (l && !d),
                      closeButton:
                        l && (r._deleteNonemptyTweetstormComposerEnabled || r._isEmpty()) && !b
                          ? r._renderCloseButton()
                          : void 0,
                      contentBelow: r._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [va.textInputStyle, S && va.textInputMobileCollapsed],
                      keyCommandHandlers: m,
                      maxNumberOfLines: _ ? 30 : 10,
                      multiline: !0,
                      numberOfLines: r._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: r._handleFilesAdded,
                      placeholder: r._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: r._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(wn).concat(s),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              _()(
                h()(r),
                '_getHandleRichTextChange',
                Object(_a.a)(function (e) {
                  return function (t) {
                    e(t), r._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                h()(r),
                '_getHandlePlainTextChange',
                Object(_a.a)(function (e) {
                  return function (t) {
                    e(t), r._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(h()(r), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = r.props,
                  t = e.index,
                  a = e.isCommunityTweetFromProtectedUser
                return 0 === t && a ? w.a.createElement(ln, null) : null
              }),
              _()(h()(r), '_renderAudienceControls', function (e) {
                var t = r.props,
                  a = t.audienceControlsValue,
                  n = t.index,
                  i = t.isSuperFollowsCreator,
                  o = r.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = r.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = r.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return r._shouldRenderControls(e, 'audience') && 0 === n && (o || s || l)
                  ? w.a.createElement(bt, {
                      audienceControlsValue: a,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: i && s,
                      isTrustedFriendsEnabled: l,
                      onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(h()(r), '_renderCommunitiesRulesEducation', function () {
                return r.shouldRenderCommunitiesRules ? w.a.createElement(Ft, null) : null
              }),
              _()(h()(r), '_renderCommunitiesRules', function (e) {
                var t = r.props.audienceControlsValue.communityIdValue || void 0
                return r.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(Mt, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              _()(h()(r), '_calcNumberOfLines', function () {
                var e = r.props,
                  t = e.data,
                  a = e.isActive,
                  n = e.isInline,
                  i = !!e.richTextInputContext,
                  o = t.media,
                  s = t.pollActive,
                  l = t.quotedStatus,
                  c = !!o.length || !!s || !!l
                return (i && (n || c)) || !a ? 1 : 4
              }),
              _()(h()(r), '_renderScheduledTweetLegend', function () {
                var e = r.props.scheduledFor
                return w.a.createElement(un.a, {
                  onPress: r._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Tn,
                })
              }),
              _()(h()(r), '_handlePressScheduledTweetLegend', function () {
                var e = r.props,
                  t = e.analytics,
                  a = e.history,
                  n = e.setActiveParentKey
                a.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), n()
              }),
              _()(h()(r), '_renderEmojiPicker', function () {
                return w.a.createElement(sa.a, {
                  onEmojiSelect: r._handleInsertEmoji,
                  size: 'medium',
                  style: r._getEmojiPickerButtonStyles(),
                  textInputRef: r._textInputRef || void 0,
                })
              }),
              _()(
                h()(r),
                '_getEmojiPickerButtonStyles',
                Object(_a.a)(function () {
                  return [va.iconEmojiPicker, va.toolBarButton]
                }),
              ),
              _()(h()(r), '_isSchedulingDisabled', function () {
                var e = r.props,
                  t = e.audienceControlsValue,
                  a = e.data,
                  n = a.media,
                  i = a.mediaTags,
                  o = a.pollActive,
                  s = a.quotedStatus,
                  l = a.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  p = t.conversationControlsValue !== Bt.a.all
                return Boolean(o || !u || (s && '' === l && !n.length) || p || i.length > 0)
              }),
              _()(h()(r), '_renderSchedulingButton', function () {
                return w.a.createElement(X.a, {
                  accessibilityLabel: $n,
                  behavioralEventContext: Ii,
                  disabled: r._isSchedulingDisabled(),
                  hoverLabel: { label: li },
                  icon: Si,
                  onClick: r._handleClickScheduler,
                  size: 'medium',
                  style: va.toolBarButton,
                  testID: _n,
                  type: 'brandText',
                })
              }),
              _()(h()(r), '_handleClickScheduler', function () {
                var e = r.props,
                  t = e.analytics,
                  a = e.history,
                  n = e.setActiveParentKey
                a.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), n()
              }),
              _()(h()(r), '_renderCloseButton', function () {
                var e = r.props.onRemoveComposer
                return w.a.createElement(X.a, {
                  accessibilityLabel: ii,
                  hoverLabel: { label: oi },
                  icon: xi,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              _()(h()(r), '_renderTweetAttachment', function () {
                var e = r.props,
                  t = e.data,
                  a = e.editable,
                  n = e.index,
                  i = e.isActive,
                  o = e.updateSingleComposer,
                  s = t.media,
                  l = t.pollActive,
                  c = t.pollChoices,
                  d = t.pollDuration,
                  u = t.quotedStatus
                if (0 === s.length && !l && !u) return null
                var p = r.hasAttachedVideo && (r._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  K.a,
                  { onClick: r._handleFocus, style: [va.attachmentContainer, va.tweetAttachmentArea], testID: gn },
                  s.length > 0
                    ? w.a.createElement(qn.a, {
                        editable: a,
                        isActive: i,
                        media: s,
                        onClickMedia: r.hasAttachedImage ? r._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: r.hasAttachedImage
                          ? r._handleClickMediaDetail('crop')
                          : p
                          ? r._handleClickMediaDetail(p)
                          : void 0,
                        onEditSensitiveWarning:
                          r.hasAttachedImage || r.hasAttachedVideo
                            ? r._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: r._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: r._handleSetMediaPreviewRef,
                        style: va.mediaPreview,
                      })
                    : null,
                  i ? r._renderMediaActions() : null,
                  l
                    ? w.a.createElement(nn, {
                        composerIndex: n,
                        editable: a,
                        initialChoices: c,
                        initialDuration: d,
                        isActive: i,
                        isPollValid: t.pollValid,
                        updateComposer: o,
                      })
                    : null,
                  u ? r._renderQuoteTweet(u) : null,
                )
              }),
              _()(h()(r), '_renderQuoteTweet', function (e) {
                var t = r.props.data.media,
                  a = e.tombstoneInfo
                return a && a.richText
                  ? w.a.createElement(
                      En.a,
                      null,
                      w.a.createElement(dn.a, {
                        entities: a.richText.entities,
                        rtl: a.richText.rtl,
                        text: a.richText.text,
                      }),
                    )
                  : w.a.createElement(cn.a, {
                      isCondensed: t.length > 0,
                      style: va.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              _()(h()(r), '_renderToolbar', function (e) {
                var t = r.props,
                  a = t.additionalToolbarContent,
                  n = t.data.media,
                  i = t.hidePoll,
                  o = t.hideScheduling,
                  s = t.isInlineReply,
                  l = t.isReply,
                  c = t.isSelfThreadReply,
                  d = t.richTextInputContext,
                  u = t.setActiveParentKey,
                  p = !!d,
                  m = !s && !i,
                  h = !s && !o,
                  f = r.context.featureSwitches.isTrue('responsive_web_reply_storm_enabled'),
                  g = e && (!l || c || f)
                return w.a.createElement(
                  K.a,
                  { style: va.toolBar, testID: xn },
                  w.a.createElement(
                    K.a,
                    { style: va.toolBarIconsContainer },
                    w.a.createElement(ba, {
                      media: n,
                      mediaAttachDisabled: r.mediaAttachDisabled,
                      onFilesAdded: r._handleFilesAdded,
                      setActiveParentKey: u,
                    }),
                    r._renderGifButton(),
                    m ? r._renderPollButton() : null,
                    p ? r._renderEmojiPicker() : null,
                    h ? r._renderSchedulingButton() : null,
                    r._renderGeoButton(),
                  ),
                  w.a.createElement(
                    K.a,
                    { style: va.toolBarIconsContainer },
                    e ? r._renderCountdownCircle() : null,
                    g &&
                      w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(K.a, { style: va.separator }),
                        r._renderAddComposerButton(),
                      ),
                    a,
                  ),
                )
              }),
              _()(h()(r), '_addOverflowStyle', function (e) {
                var t = r.props.richTextInputContext
                if (t) {
                  var a = e.getCurrentContent().getPlainText(),
                    n = a.length,
                    i = r._getParsedTweet(a).validRangeEnd,
                    o = i + 1 < n
                  if (r.state.hasOverflowStyle || o) {
                    var s = o ? i + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, s, r.state.hasOverflowStyle),
                      hasOverflowStyle: o,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: o }
                }
              }),
              _()(h()(r), '_handleRichTextChange', function (e) {
                var t = r.props.richTextInputContext,
                  a = e.getCurrentContent().getPlainText()
                if (t) {
                  var n = t.convertEmojiToEntities(e)
                  r.setState(r._addOverflowStyle(n))
                }
                r._handleTextValueChange(a)
              }),
              _()(h()(r), '_handlePlainTextChange', function (e) {
                var t = In.a.replaceCarriageReturns(e.target.value)
                r._handleTextValueChange(t)
              }),
              _()(h()(r), '_handleTextValueChange', function (e) {
                var t = r.props,
                  a = t.data,
                  n = a.key,
                  i = a.text,
                  o = t.onTextChange
                i !== e && o(e, n)
              }),
              _()(h()(r), '_handleClickAltTextShortcut', function () {
                r.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              _()(h()(r), '_handleClickSubtitlesShortcut', function () {
                r.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              _()(h()(r), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var a = r.props,
                      n = a.analytics,
                      i = a.history
                    n.scribe({ element: 'media_detail_button', action: 'click' }),
                      (r.hasAttachedImage || r.hasAttachedVideo) &&
                        i.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              _()(h()(r), '_handleFilesAdded', function (e) {
                var t = r.props,
                  a = t.addToast,
                  n = t.data.pollActive,
                  i = t.onFilesAdded
                n ? a({ text: ti }) : i(e)
              }),
              _()(h()(r), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  r.props.onRemoveMedia(r.props.index, e)
                }
              }),
              _()(h()(r), '_handleInsertEmoji', function (e) {
                var t = r.state.editorState,
                  a = r.props.richTextInputContext
                if (a && t) {
                  var n = a.insertTextAtCursor(t, e.text)
                  r._handleRichTextChange(n)
                }
              }),
              _()(h()(r), '_validateMedia', function (e) {
                var t = r.props.data.media
                return S.c(t.concat(e))
              }),
              _()(h()(r), '_handlePollAdd', function () {
                var e = r.props,
                  t = e.analytics,
                  a = e.index,
                  n = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), n({ pollActive: !0 }, a)
              }),
              _()(h()(r), '_handleGeoButtonClick', function () {
                var e = r.props,
                  t = e.analytics,
                  a = e.history,
                  n = e.setActiveParentKey
                a.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), n()
              }),
              _()(h()(r), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  r.focus()
              }),
              _()(h()(r), '_handleFocus', function () {
                var e = r.props,
                  t = e.index,
                  a = e.isActive,
                  n = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  a ||
                    (window.requestAnimationFrame(function () {
                      r._mediaPreviewRef && r._mediaPreviewRef.playVideo()
                    }),
                    n(t))
              }),
              _()(h()(r), '_handleEditorFocus', function () {
                return r.setState({ isFocused: !0 })
              }),
              _()(h()(r), '_formatCountdownNumber', function (e) {
                return wi(Math.ceil(e / r._userLanguageWeight))
              }),
              _()(h()(r), '_getPlaceHolderText', function () {
                var e = r.props,
                  t = e.data,
                  a = t.pollActive,
                  n = t.quotedStatus,
                  i = e.index,
                  o = e.isReply,
                  s = e.isSelfThreadReply
                return n
                  ? yi
                  : a
                  ? _i
                  : r.isReplyOrReplyThread && 0 === i
                  ? bi
                  : o && !s && i > 0
                  ? vi
                  : s || i > 0
                  ? gi
                  : fi
              }),
              _()(h()(r), '_getNumberOfAltTextEntries', function () {
                return r.props.data.media.reduce(function (e, t) {
                  var a
                  return null !== (a = t.mediaMetadata) && void 0 !== a && a.altText ? e + 1 : e
                }, 0)
              }),
              _()(
                h()(r),
                '_getParsedTweet',
                Object(_a.a)(function (e) {
                  var t = Jn.a[r.props.twitterTextConfigurationVersion]
                  return Yn()(e, t)
                }),
              ),
              _()(h()(r), '_isEmpty', function () {
                var e = r.props.data
                return Object(ma.c)(e)
              }),
              _()(h()(r), '_isScheduled', function () {
                var e = r.props.data.scheduledFor
                return Object(ha.h)(e)
              }),
              _()(h()(r), '_autotagLocationIfNeeded', function () {
                var e = r.props,
                  t = e.data.taggedLocation,
                  a = e.fetchAutotaggedLocationIfNeeded,
                  n = e.index,
                  i = e.updateSingleComposer
                a().then(function (e) {
                  void 0 === t && i({ taggedLocation: null != e ? e : null }, n)
                })
              }),
              _()(h()(r), '_handleSetMediaPreviewRef', function (e) {
                r._mediaPreviewRef = e
              }),
              _()(h()(r), '_setTextInputRef', function (e) {
                r._textInputRef = e
              })
            var o = e.data.text,
              s = e.richTextInputContext,
              l = e.userLanguage,
              c = (s || {}).initEditorState
            return (
              (r._conversationControlsCreationEnabled =
                !0 ===
                r.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (r._deleteNonemptyTweetstormComposerEnabled = r.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (r._userLanguageWeight = l && Ci.indexOf(l) > -1 ? 2 : 1),
              r._autotagLocationIfNeeded(),
              (r.state = { editorState: c ? c(o) : null, hasOverflowStyle: !1, isFocused: !1 }),
              r
            )
          }
          return (
            p()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof ua.a) && e.mediaFile.isVideo
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
                    a = t.data.taggedLocation,
                    n = t.isActive,
                    i = t.isExpanded,
                    r = t.isInline,
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
                      style: [va.root, !n && va.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      Rn.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(Mn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(kn.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: va.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: r,
                                })
                              })
                            : null,
                          o
                            ? null
                            : w.a.createElement(K.a, {
                                style: [va.conversationLine, !c && va.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: i ? va.avatarContainerExpanded : va.avatarContainer,
                        cellStyle: va.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        K.a,
                        { onFocus: this._handleEditorFocus, style: va.inputArea },
                        w.a.createElement(
                          Pn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: va.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(K.a, { style: va.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        K.a,
                        { style: [(u || a) && va.controlsContainer, p ? va.mobileControlsLayout : va.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(p),
                        a ? this._renderTaggedLocation(a) : null,
                      ),
                      w.a.createElement(Ln.b, { show: n && i }, this._renderToolbar(d)),
                    ),
                  )
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    a = t.media,
                    n = t.pollActive,
                    i = e.history,
                    r = e.loggedInUser,
                    o = e.setActiveParentKey,
                    s = n || a.length || !r
                  return w.a.createElement(ca.a, {
                    enabled: !s,
                    gifSearchKeySource: da.a.Composition,
                    history: i,
                    onPress: o,
                    testID: bn,
                  })
                },
              },
              {
                key: '_renderPollButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    a = t.media,
                    n = t.pollActive,
                    i = t.quotedStatus,
                    r = e.loggedInUser,
                    o = this._isScheduled(),
                    s = !(!(n || a.length || i || o) && r)
                  return w.a.createElement(X.a, {
                    accessibilityLabel: Zn,
                    behavioralEventContext: Ri,
                    disabled: s,
                    hoverLabel: { label: si },
                    icon: Ei,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: va.toolBarButton,
                    testID: vn,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGeoButton',
                value: function () {
                  var e = this.props,
                    t = e.data.taggedLocation,
                    a = e.geoEnabled,
                    n = e.loggedInUser,
                    i = !(a && n),
                    r = t ? w.a.createElement(Vn.a, null) : w.a.createElement(zn.a, null)
                  return w.a.createElement(X.a, {
                    accessibilityLabel: ci,
                    behavioralEventContext: ki,
                    disabled: i,
                    hoverLabel: { label: ci },
                    icon: r,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: va.toolBarButton,
                    testID: yn,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderMediaActions',
                value: function () {
                  var e = this.props.data,
                    t = e.gifMetadata,
                    a = e.media,
                    n = 0 !== e.mediaTags.length,
                    i =
                      a.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || i)) return null
                  var r = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return w.a.createElement(
                    K.a,
                    { style: va.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          K.a,
                          { style: va.addImageTextPadding },
                          w.a.createElement(la.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !r) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: pi,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [va.addImageTextContainer, va.addImageTextPadding],
                          },
                          n ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || i
                      ? w.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: di({ numberOfImages: a.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: a[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: va.addImageTextContainer,
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
                    { color: 'gray700', size: 'subtext2', testID: fn },
                    w.a.createElement(jn.a, { style: va.addImageActionIcon }),
                    pi,
                  )
                },
              },
              {
                key: '_renderTaggedUsers',
                value: function () {
                  var e = this.props,
                    t = e.data.mediaTags,
                    a = e.loggedInUser,
                    n = t.map(function (e) {
                      return {
                        name: e.data.name,
                        screen_name: e.data.screen_name,
                        type: e.type,
                        user_id: e.data.id_str,
                      }
                    })
                  return w.a.createElement(
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: Cn },
                    w.a.createElement(Hn.a, { style: va.addImageActionIcon }),
                    w.a.createElement(Dn.a, { loggedInUserId: null == a ? void 0 : a.id_str, users: n }),
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
                          { color: 'gray700', size: 'subtext2', testID: hn },
                          w.a.createElement(Un.a, { style: va.addImageActionIcon }),
                          ui({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          O.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: hn },
                          w.a.createElement(Un.a, { style: va.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        O.b,
                        { color: 'gray700', size: 'subtext2', testID: hn },
                        w.a.createElement(Wn.a, { style: va.addImageActionIcon }),
                        di({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Gn.a : Kn.a
                  return w.a.createElement(
                    O.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: va.addImageTextContainer,
                      testID: mn,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? hi : void 0,
                      style: va.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : mi,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    a = e.twitterTextConfigurationVersion,
                    n = Jn.a[a],
                    i = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(An.a, {
                    count: i,
                    formatNumber: this._formatCountdownNumber,
                    maxCount: n.maxWeightedTweetLength,
                    warningCount: 260,
                  })
                },
              },
              {
                key: '_renderAddComposerButton',
                value: function () {
                  var e = this.props,
                    t = e.addComposerLink,
                    a = e.disableAddTweet,
                    n = e.isCommunityTweetFromProtectedUser,
                    i = e.loggedInUser,
                    r = e.onAddComposer,
                    o = this._isEmpty(),
                    s = this._isScheduled(),
                    l = a || o || s || !i || n
                  return w.a.createElement(X.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? ni : ai,
                    behavioralEventContext: Mi,
                    disabled: l,
                    hoverLabel: { label: ri },
                    icon: Ti,
                    link: l ? void 0 : t,
                    onPress: r,
                    size: 'xSmall',
                    testID: pn,
                    type: 'brandOutlined',
                  })
                },
              },
              {
                key: 'mediaAttachDisabled',
                get: function () {
                  var e = this.props,
                    t = e.data,
                    a = t.media,
                    n = t.pollActive,
                    i = e.loggedInUser,
                    r = a.length,
                    o = a.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    s = a.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof ua.a) && e.mediaFile.isVideo
                    })
                  return 4 === r || o || s || n || this.hasExternalMedia || !i
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
                    var a = t.find(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof ua.a) && e.mediaFile.isVideo
                    })
                    return null == a || null === (e = a.mediaMetadata) || void 0 === e ? void 0 : e.subtitles
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
                    a = e.communityIdValue || void 0,
                    n = t && a,
                    i = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(i && n)
                },
              },
              {
                key: 'isReplyOrReplyThread',
                get: function () {
                  var e = this.props,
                    t = e.isReply,
                    a = e.isSelfThreadReply
                  return t && !a
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      _()(Pi, 'contextType', de.a),
        _()(Pi, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Li = Object(G.a)(Pi),
        Di = w.a.createElement(O.b, { weight: 'bold' }),
        Ai = w.a.createElement(O.b, { color: 'link' }),
        Oi = function (e) {
          return '@'.concat(e)
        },
        Fi = a('SrIh'),
        Bi = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Ni = function (e) {
          var t = e.communityName,
            a = e.excludedRecipients,
            n = e.inReplyToStatus,
            i = e.loggedInUserId,
            r = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(Ai, null, V.a.b50e199a({ userName: Oi(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(Ai, null, V.a.f2e4dd37({ replyUserName: Oi(t), otherUserName: Oi(a) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  a = e.userThreeName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    Ai,
                    null,
                    V.a.eccfddc3({ userOneName: Oi(t), userTwoName: Oi(n), userThreeName: Oi(a) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  a = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(Ai, null, V.a.h758cd22({ userOneName: Oi(a), userTwoName: Oi(n), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  a = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(Ai, null, V.a.e9f8a0eb({ userName: Oi(a) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  a = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(Ai, null, V.a.df7e9fbc({ replyUserName: Oi(a), otherUserName: Oi(n) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  a = e.userOneName,
                  n = e.userThreeName,
                  i = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    Ai,
                    null,
                    V.a.b45fa505({ userOneName: Oi(a), userTwoName: Oi(i), userThreeName: Oi(n) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  a = e.othersCount,
                  n = e.userOneName,
                  i = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(Ai, null, V.a.a4383815({ userOneName: Oi(n), userTwoName: Oi(i), othersCount: a })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(Ai, null, V.a.ff792e35({ userName: Oi(t) })),
                  w.a.cloneElement(Di, null, V.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(Ai, null, V.a.g7d5e985({ replyUserName: Oi(t), otherUserName: Oi(a) })),
                  w.a.cloneElement(Di, null, V.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  a = e.userThreeName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    Ai,
                    null,
                    V.a.fe5a61e9({ userOneName: Oi(t), userTwoName: Oi(n), userThreeName: Oi(a) }),
                  ),
                  w.a.cloneElement(Di, null, V.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  a = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(Ai, null, V.a.bc9dd514({ userOneName: Oi(a), userTwoName: Oi(n), othersCount: t })),
                  w.a.cloneElement(Di, null, V.a.de5071ba),
                )
              },
            },
            o = S.a({ inReplyToStatus: n, loggedInUserId: i }).filter(function (e) {
              var t = e.id_str
              return a.indexOf(t) < 0
            }),
            s = n.retweeted_status || n,
            l = s.exclusivity_info,
            c = s.user,
            d = o.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            u = R()(d, 2),
            p = u[0],
            m = u[1],
            h = [c, p, m].map(Bi),
            f = R()(h, 3),
            g = f[0],
            v = f[1],
            y = f[2],
            b = o.length - 2
          switch (o.length) {
            case 0:
              return Object(Fi.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? r.communityReplyToOne({ communityName: t, userName: g })
                : l
                ? r.exclusiveReplyToOne({ userName: g })
                : r.replyToOne({ userName: g })
            case 2:
              return t
                ? r.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: v })
                : l
                ? r.exclusiveReplyToTwo({ userOneName: g, userTwoName: v })
                : r.replyToTwo({ userOneName: g, userTwoName: v })
            case 3:
              return t
                ? r.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: v, userThreeName: y })
                : l
                ? r.exclusiveReplyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
                : r.replyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
            default:
              return t
                ? r.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: v, othersCount: b })
                : l
                ? r.exclusiveReplyToMany({ userOneName: g, userTwoName: v, othersCount: b })
                : r.replyToMany({ userOneName: g, userTwoName: v, othersCount: b })
          }
        },
        Vi = w.a.memo(Ni),
        zi = a('fs1G'),
        ji = a('BLtI'),
        Hi = a('kY28')
      function Wi(e) {
        null == e || e.preventDefault()
      }
      var Ui = B.a.create(function (e) {
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
        Gi = function (e) {
          var t = e.communityName,
            a = e.excludedRecipients,
            n = e.inReplyToStatus,
            i = e.loggedInUserId,
            r = e.onPress,
            o = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return w.a.createElement(
            K.a,
            null,
            l
              ? w.a.createElement(ji.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: zi.a,
                  onAvatarClick: Wi,
                  onEntityClick: Wi,
                  onMediaClick: Wi,
                  onReplyContextClick: Wi,
                  replyContext: Hi.a.ReplyContextTypes.None,
                  tweet: n,
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
              { style: Ui.replyUsersContainer },
              w.a.createElement(
                Rn.a,
                {
                  avatarCell: l ? w.a.createElement(K.a, { style: Ui.conversationLine }) : null,
                  avatarCellStyle: Ui.conversationLineContainer,
                  cellStyle: Ui.repliesTextContainer,
                  style: Ui.grid,
                },
                o
                  ? w.a.createElement(
                      O.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: r, style: l && Ui.repliesMessage },
                      w.a.createElement(Vi, {
                        communityName: t,
                        excludedRecipients: a,
                        inReplyToStatus: n,
                        loggedInUserId: i,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        Ki = a('Tb0w'),
        qi = a('1YZw'),
        Xi = a('pidX'),
        Yi = a('5oBF'),
        Qi = a('JYYi'),
        Ji = a('/Rsk'),
        Zi = a('u7LJ'),
        $i = a('XOJV'),
        er = a('G6rE'),
        tr = a('AspN'),
        ar = a('oEGd'),
        nr = a('2iUg'),
        ir = a('P1r1'),
        rr = ['mediaIds'],
        or = function (e) {
          return e.parentTweetId || (e.isInline ? Qi.a.homeTimeline : Qi.a.modal)
        },
        sr = function (e, t) {
          var a = or(t)
          return ue.k(e, a)
        },
        lr = function (e, t) {
          var a = or(t)
          return ue.l(e, a)
        },
        cr = function (e, t) {
          var a = or(t)
          return ue.j(e, a)
        },
        dr = function (e, t) {
          var a = yr(e, t),
            n = cr(e, t).communityIdValue || void 0,
            i = (null == a ? void 0 : a.community_id_str) || n,
            r = i ? k.c.select(e, i) : void 0
          return r ? r.name : void 0
        },
        ur = function (e, t) {
          var a = or(t)
          return ue.m(e, a)
        },
        pr = function (e, t) {
          var a = or(t)
          return ue.i(e, a)
        },
        mr = function (e) {
          return function (t, a) {
            var n = (function (e, t) {
              return t.location.state
            })(0, a)
            return n ? e(n) : void 0
          }
        },
        hr = Object(he.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          er.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        fr = function (e, t) {
          return t.parentTweetId || gr(e, t) || vr(e, t)
        },
        gr = function (e, t) {
          var a = t.location.query
          return a && 'string' == typeof a.in_reply_to ? a.in_reply_to : void 0
        },
        vr = mr(function (e) {
          return e.inReplyToStatusId
        }),
        yr = function (e, t) {
          var a = fr(e, t)
          return a ? $i.a.selectHydrated(e, a) : void 0
        },
        br = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        _r = mr(function (e) {
          return e.hasArticleNudge
        }),
        Cr = mr(function (e) {
          return e.convoCardData
        }),
        wr = mr(function (e) {
          return e.externalMedia
        }),
        xr = mr(function (e) {
          return e.externalMediaFiles
        }),
        Tr = mr(function (e) {
          return e.previewTweetId
        }),
        Er = mr(function (e) {
          return e.defaultText
        }),
        Sr = function (e, t) {
          var a = Er(e, t),
            n = Object(Xi.a)(t.location)
          return (br(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            n
            ? n
            : a
        },
        Ir = mr(function (e) {
          return e.quotedStatusId
        }),
        Rr = mr(function (e) {
          return e.quotedStatus
        }),
        Mr = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Rr(e, t)
            })(e, t) ||
            (function (e, t) {
              var a = Ir(e, t)
              return a ? $i.a.selectHydratedMemoized(e, a) : void 0
            })(e, t)
          )
        },
        kr = mr(function (e) {
          return e.isSelfThreadReply
        }),
        Pr = mr(function (e) {
          return e.positionCursorAtBeginning
        }),
        Lr = mr(function (e) {
          return e.promotedContent
        }),
        Dr = function () {
          return Object(he.createSelector)(sr, Sr, Mr, tr.j, function (e, t, a, n) {
            return e.map(function (e, i) {
              return l()(
                l()({}, ((r = e).mediaIds, Vt()(r, rr))),
                {},
                {
                  media: n.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === i ? a : void 0,
                  text: 0 === i && t ? t : e.text,
                },
              )
              var r
            })
          })
        },
        Ar = {
          addComposer: ue.a,
          addToast: qi.b,
          createLocalApiErrorHandler: Object(ye.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: ue.b,
          deletePreviewTweet: Yi.c,
          fetchAltTextPromptPreferenceIfNeeded: nr.a,
          fetchAutotaggedLocationIfNeeded: Ji.a,
          fetchTweetIfNeeded: $i.a.fetchOneIfNeeded,
          removeComposer: ue.e,
          resetDraft: ue.f,
          retweet: $i.a.retweet,
          schedule: ue.h,
          draftTweet: ue.d,
          send: ue.q,
          updateActiveComposerIndex: ue.s,
          updateAudienceControlsValue: ue.t,
          updateConvoCardState: Ki.b,
          preUploadMedia: tr.e,
          addMedia: tr.b,
          processMultipleMedia: tr.g,
          removeMediaUpload: tr.i,
          removeToast: qi.c,
          updateSingleComposer: ue.w,
          setActiveParentKey: ue.r,
          copyDataFromInlineComposerToModalComposer: ue.c,
        },
        Or = Object(ar.e)(function () {
          return Object(he.createStructuredSelector)({
            activeComposerIndex: pr,
            activeUser: hr,
            altTextNudgeType: nr.b,
            audienceControlsValue: cr,
            composerData: Dr(),
            dataSaverMode: ir.j,
            excludedRecipients: lr,
            externalMedia: wr,
            externalMediaFiles: xr,
            geoEnabled: ir.o,
            hasArticleNudge: _r,
            inReplyToStatus: yr,
            inReplyToStatusId: fr,
            isIntentRoute: br,
            isSelfThreadReply: kr,
            isSending: ur,
            isSuperFollowsCreator: ge.l,
            positionCursorAtBeginning: Pr,
            loggedInUser: er.e.selectLoggedInUser,
            prepopulatedText: Sr,
            previewTweetId: Tr,
            promotedContent: Lr,
            scheduledFor: ue.n,
            selectedCommunityName: dr,
            sendingProgress: ue.o,
            convoCardData: Cr,
            undoTweetSettings: Zi.d,
            userLanguage: ge.p,
            quotedStatusId: Ir,
          })
        }, Ar),
        Fr = a('45mF'),
        Br = a('c0ZR'),
        Nr = a('W5XZ'),
        Vr = a('Drq4'),
        zr = a('0uGn'),
        jr = a('I8M8'),
        Hr = a('7myi'),
        Wr = a('7nmT'),
        Ur = a.n(Wr),
        Gr = a('vbWy'),
        Kr = a('Rp9C'),
        qr = a('Q5Mu'),
        Xr = a('N5qz'),
        Yr = 'tweetButton',
        Qr = 'tweetButtonInline',
        Jr = Object(P.a)()
          .propsFromState(function () {
            return { loggedInUser: er.e.selectLoggedInUser }
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
        Zr = a('cHvH'),
        $r = a('sgih'),
        eo = a('xKuM'),
        to = a('5Vk4'),
        ao = B.a.create(function (e) {
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
            a = e.children,
            n = e.onActionButtonClick,
            i = e.onMaskClick,
            r = e.sheetType,
            o = e.showActionButton
          return w.a.createElement(Zr.a, null, function (e) {
            var s = e.windowWidth > B.a.theme.breakpoints.small
            return w.a.createElement(
              $r.a,
              { onMaskClick: i, style: ao.sheetStyle, type: r, withMask: !0 },
              o &&
                w.a.createElement(eo.a, {
                  leftControl: w.a.createElement(to.a, { backButtonType: t, onClick: n }),
                  position: 'absolute',
                }),
              w.a.createElement(K.a, { style: [ao.mainCard, s ? ao.largeScreenCard : ao.smallScreenCard] }, a),
            )
          })
        },
        io = V.a.cb7c0987,
        ro = V.a.de3bcf27,
        oo = V.a.e710ce75,
        so = V.a.h11e5910,
        lo = V.a.b7ec04f3,
        co = V.a.i62a03aa,
        uo = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        po = function (e) {
          var t = e.onBack,
            a = e.onNo,
            n = e.onYes
          return w.a.createElement(
            no,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(O.b, { size: 'title4', style: uo.itemPadding, weight: 'heavy' }, io),
            w.a.createElement(O.b, { color: 'gray700', style: uo.itemPadding }, ro),
            w.a.createElement(O.b, { color: 'gray700', style: uo.itemPadding }, oo),
            w.a.createElement(
              K.a,
              { style: uo.buttonContainer },
              w.a.createElement(O.b, { size: 'title4', style: uo.itemPadding, weight: 'heavy' }, so),
              w.a.createElement(X.a, { onPress: n, style: uo.itemPadding, type: 'brandOutlined' }, lo),
              w.a.createElement(X.a, { onPress: a, style: uo.itemPadding, type: 'brandOutlined' }, co),
            ),
          )
        },
        mo = a('cm6r'),
        ho = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        fo = function (e) {
          var t = e.icon,
            a = e.label,
            n = e.onPress
          return w.a.createElement(mo.a, { interactiveStyles: null, onPress: n }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(X.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: ho.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(O.b, { color: 'gray700' }, a),
            )
          })
        },
        go = a('sjK1'),
        vo = a('FDY4'),
        yo = a('tevE'),
        bo = a('jV+4'),
        _o = a('UgB4'),
        Co = a('TW8A'),
        wo = a('hiGS'),
        xo = a('WtWS'),
        To = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ye.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Xe.a.root, e.style],
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
      To.metadata = { width: 24, height: 24 }
      var Eo = To,
        So = [
          { headlineText: V.a.f3a7a80c, subTextLine1: V.a.ge52d1de, subTextLine2: null },
          { headlineText: V.a.j311bf49, subTextLine1: V.a.ae42ebff, subTextLine2: V.a.aa350ab1 },
          { headlineText: V.a.j18b2956, subTextLine1: V.a.f6bee896, subTextLine2: V.a.dddd0995 },
          { headlineText: V.a.d02a94fa, subTextLine1: V.a.dddd0995, subTextLine2: null },
          { headlineText: V.a.i018b746, subTextLine1: V.a.b8d85df9, subTextLine2: V.a.d5ca11f0 },
        ],
        Io = V.a.h11e5910,
        Ro = V.a.abd845fd,
        Mo = V.a.bea869b3,
        ko = V.a.d96cf7cd,
        Po = V.a.d3145da8,
        Lo = B.a.create(function (e) {
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
        Do = function (e) {
          var t = e.hasSentFeedback,
            a = e.media,
            n = e.onDeleteTweet,
            i = e.onDismiss,
            r = e.onEditTweet,
            o = e.onSendTweet,
            s = e.onWeGotItWrong,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = w.a.useContext(de.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = So[(p = p >= 0 && p <= 4 ? p : 0)]
          return w.a.createElement(Zr.a, null, function (e) {
            var p,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              no,
              {
                actionButtonType: 'close',
                onActionButtonClick: i,
                onMaskClick: i,
                sheetType: 'full',
                showActionButton: g > B.a.theme.breakpoints.medium,
              },
              w.a.createElement(Eo, { style: [Lo.profanityIcon, Lo.itemPadding] }),
              w.a.createElement(yo.a, { size: 'title4', style: Lo.itemPadding, weight: 'heavy' }, m.headlineText),
              w.a.createElement(O.b, { color: 'gray700', style: Lo.itemPadding }, m.subTextLine1),
              w.a.createElement(O.b, { color: 'gray700', style: Lo.itemPadding }, m.subTextLine2),
              w.a.createElement(
                K.a,
                { style: [Lo.tweetContainer, Lo.itemPadding] },
                w.a.createElement(
                  K.a,
                  { style: Lo.tweetContent },
                  w.a.createElement(bo.a, { name: c, profileImageUrl: d, screenName: u, style: Lo.userName }),
                  w.a.createElement(
                    K.a,
                    { style: Lo.tweetBody },
                    (function () {
                      if (0 === a.length) return null
                      var e = a.map(function (e) {
                        var t,
                          a,
                          n,
                          i = ''
                        if (e.externalMediaDetails) i = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof go.c) i = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var r
                          i = null === (r = e.mediaFile) || void 0 === r ? void 0 : r.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: i,
                          width: (null === (a = e.mediaFile) || void 0 === a ? void 0 : a.width) || 100,
                          height: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return w.a.createElement(
                        K.a,
                        { style: Lo.photos },
                        w.a.createElement(vo.a, {
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
                    w.a.createElement(O.b, { style: Lo.textStyle }, l),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    K.a,
                    { style: Lo.thanksContainer },
                    w.a.createElement(xo.a, { style: Lo.thanksCheckMark }),
                    w.a.createElement(O.b, { align: 'center', style: Lo.itemPadding }, Po),
                  )
                : w.a.createElement(O.b, { align: 'center', onPress: s, style: Lo.itemPadding, withUnderline: !0 }, Io),
              g > B.a.theme.breakpoints.small
                ? w.a.createElement(
                    K.a,
                    { style: Lo.buttonContainer },
                    w.a.createElement(X.a, { onPress: r, style: Lo.itemPadding, type: 'brandFilled' }, Ro),
                    w.a.createElement(X.a, { onPress: o, style: Lo.itemPadding, type: 'brandOutlined' }, Mo),
                    w.a.createElement(X.a, { onPress: n, style: Lo.itemPadding, type: 'destructiveText' }, ko),
                  )
                : ((p = w.a.createElement(_o.a, { style: { color: B.a.theme.colors.text } })),
                  (h = w.a.createElement(Co.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = w.a.createElement(wo.a, { style: { color: B.a.theme.colors.red500 } })),
                  w.a.createElement(
                    K.a,
                    { style: Lo.mobileButtonContainer },
                    w.a.createElement(fo, { icon: p, label: Mo, onPress: o }),
                    w.a.createElement(fo, { icon: h, label: Ro, onPress: r }),
                    w.a.createElement(fo, { icon: f, label: ko, onPress: n }),
                  )),
            )
          })
        },
        Ao = Jr(function (e) {
          var t = e.analytics,
            a = e.media,
            n = e.nudgeId,
            i = e.onDeleteTweet,
            r = e.onDismiss,
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
              var a = e.action,
                i = e.element,
                r = e.page,
                o = [{ nudge_id: n }]
              t.scribe({ action: a, data: { items: o }, element: i, page: r, section: 'dialog' })
            }
          return h
            ? w.a.createElement(po, {
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
            : w.a.createElement(Do, {
                hasSentFeedback: y,
                media: a,
                onDeleteTweet: function () {
                  _({ action: 'cancel', element: 'action', page: 'nudge' }), i()
                },
                onDismiss: function () {
                  _({ action: 'dismiss', element: 'action', page: 'nudge' }), r()
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
        Oo = a('aITJ'),
        Fo = a('eb3s'),
        Bo = a('JYMr'),
        No = a('sCk0'),
        Vo = a('3A2y'),
        zo = a('zrOZ'),
        jo = a('s1N3'),
        Ho = a('4FGy'),
        Wo = a('mN6z'),
        Uo = a('eyty'),
        Go = a('rziq'),
        Ko = a('lsKC'),
        qo = a('jTgF'),
        Xo = V.a.d28215f0,
        Yo = V.a.ec909a54,
        Qo = V.a.jd53409d,
        Jo = {
          singular: V.a.edae65de,
          plural: V.a.a859846a,
          oneOfMultiple: V.a.e90118f5,
          someOfMultiple: V.a.c211dcb1,
        },
        Zo = { singular: V.a.d7c26bfb, plural: V.a.a75e3ccc },
        $o = V.a.dcb7e3a0,
        es = function (e) {
          var t,
            a,
            n = e.numberOfDescriptionsMissing,
            i = n === e.numberOfImages
          return (
            1 === n
              ? ((a = Zo.singular), (t = i ? Jo.singular : Jo.oneOfMultiple))
              : ((a = Zo.plural), (t = i ? Jo.plural : Jo.someOfMultiple)),
            ''.concat(t, ' ').concat(a, ' ').concat($o)
          )
        },
        ts = V.a.c1bf53b0,
        as = V.a.bb8170da,
        ns = V.a.dad5a4b8,
        is = V.a.e65aed64,
        rs = V.a.bc2ceaf2,
        os = V.a.d8222374,
        ss = V.a.j890123a,
        ls = V.a.bb01231c,
        cs = V.a.d4ab68e2,
        ds = V.a.d8af8a4c,
        us = V.a.d09d4c05,
        ps = V.a.i2209530,
        ms = V.a.bf9b89e4,
        hs = V.a.f277e949,
        fs = V.a.b551cd22,
        gs = V.a.f026a7fa,
        vs = V.a.a5d4fda0,
        ys = V.a.ib067d6a,
        bs = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        _s = { element: 'alt_text_prompt' },
        Cs = { component: 'article_nudge' },
        ws = { viewType: 'send_tweet' },
        xs = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Ts = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var i, r, s
            d()(this, a),
              (s = t.call(this, e, n)),
              _()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Qi.a.homeTimeline : Qi.a.modal)
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
                e.forEach(function (e, a) {
                  var n = t[e.key]
                  'string' == typeof n && n !== e.text && s._updateSingleComposer({ text: n }, a)
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
                  a = e.previewTweetId,
                  n = e.removeToast
                a && (n(), t(a))
              }),
              _()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  a = e.onHandleAppBarHeight,
                  n = Ur.a.findDOMNode(s._composerRefs[t])
                if (n instanceof window.Element) {
                  var i = n.getBoundingClientRect(),
                    r = i.bottom,
                    o = i.top,
                    l = Math.max(o, window.scrollY)
                  if (l < window.pageYOffset || r > window.innerHeight) {
                    var c = a ? l - a() - 14 : l - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      bs ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              _()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchTweetIfNeeded,
                  n = e.inReplyToStatus,
                  i = e.inReplyToStatusId,
                  r = e.quotedStatus,
                  o = e.quotedStatusId
                !n && i && a(i).catch(t(Nr.a)), !r && o && a(o).catch(t(Nr.a))
              }),
              _()(h()(s), '_blockHistory', function (e, t) {
                var a = s.props,
                  n = a.audienceControlsValue,
                  i = a.isInline,
                  r = !i && /unsent/.test(e.pathname),
                  o = !i && !/\/compose\/tweet\/?$/.test(e.pathname)
                return s.shouldShowDiscardConfirmation && 'POP' === t && o
                  ? (s.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : s._canSaveDraft && r && 'PUSH' === t
                  ? s.shouldShowDiscardConfirmation
                    ? (s.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: r }), !1)
                    : (s._resetDraft(), !0)
                  : s.shouldShowBackgroundSendConfirmation && 'POP' === t && o
                  ? (s._cancelAllMediaUploads(), !1)
                  : !('POP' === t && o && s._areComposersEmptyOrUnchanged && !Object(ma.a)(n)) || (s._resetDraft(), !0)
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
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, _s), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              _()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  a = e.excludedRecipients,
                  n = e.inReplyToStatus,
                  i = e.isInline,
                  r = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (n && s._shouldBeExpanded())
                  return w.a.createElement(Gi, {
                    communityName: o,
                    excludedRecipients: a,
                    inReplyToStatus: n,
                    key: a.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: s._handleViewRecipients,
                    shouldDisplayRepliesText: !r,
                    showParentTweet: !i,
                  })
              }),
              _()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  a = e.numberOfImages
                return w.a.createElement(Fo.a, {
                  Icon: Vr.a,
                  cancelButtonLabel: as,
                  confirmButtonLabel: ts({ numOfDescriptions: t }),
                  headline: Qo,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: es({ numberOfDescriptionsMissing: t, numberOfImages: a }),
                })
              }),
              _()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  a = e.media
                return w.a.createElement(Ao, {
                  media: a,
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
                  a = e.copyDataFromInlineComposerToModalComposer,
                  n = e.isInline,
                  i = e.parentTweetId
                s.isInlineReply ? a(i) : n && a(Qi.a.homeTimeline), t()
              }),
              _()(
                h()(s),
                '_makeAddComposerLink',
                Object(_a.a)(function (e, t, a) {
                  return Object(Ko.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: a })
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
                  e ? Object(ha.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              _()(h()(s), '_handleTweetError', function (e, t) {
                return function (a) {
                  var n = s.props,
                    i = n.analytics,
                    r = n.createLocalApiErrorHandler
                  if (Object(qo.d)(a) && a.code === jr.b.CANCELED) return i.scribeAction(e), Promise.resolve()
                  var o = Object(qo.b)(a)
                  if (o) return s.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(Fr.a)(void 0, !1)
                  r(l()({}, c))(a)
                  var d = a instanceof T.a && (null == t ? void 0 : t[a.errors[0].code])
                  s.setState({ errorMessage: { text: d ? d.toast.text : vs } })
                }
              }),
              _()(h()(s), '_handleScheduleTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  a = e.composerData,
                  n = e.excludedRecipients,
                  i = e.inReplyToStatus,
                  r = e.schedule,
                  o = s._getSingleComposerDataWithLatestText(a[0])
                r({ excludedRecipients: n, inReplyToStatus: i, scheduleData: o })
                  .then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 })
                    var n = Object(ha.c)(o.scheduledFor)
                    if (n) {
                      var i = Object(ha.b)(n),
                        r = Object(ha.i)(n),
                        c = fs({ scheduleDate: i, scheduleTime: r })
                      t({ text: c, action: { label: hs, link: '/compose/tweet/unsent/scheduled' } }),
                        s._scribeTweetSent(a[0], l()(l()({}, e), {}, { id_str: e.scheduled_id_str }), {
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
                  a = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: s._getSingleComposerDataWithLatestText(a[0]),
                })
                  .then(function (e) {
                    s.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: ms, action: { label: hs, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(a[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', qr.a))
              }),
              _()(h()(s), '_checkToxicReply', function () {
                var e = s.props,
                  t = e.checkTweetForNudge,
                  a = e.composerData,
                  n = e.inReplyToStatus,
                  i = e.inReplyToStatusId,
                  r = e.parentTweetId,
                  o = t(
                    s._getSingleComposerDataWithLatestText(a[0]).text,
                    r || i,
                    null == n ? void 0 : n.conversation_id_str,
                  ).then(function (e) {
                    var t, a, n, i, r, o, l
                    if (
                      !s.context.featureSwitches
                        .getArrayValue('responsive_web_reply_nudge_supported_languages')
                        .includes(
                          null === (t = e.create_nudge) || void 0 === t || null === (a = t.nudge) || void 0 === a
                            ? void 0
                            : a.proposed_tweet_language,
                        )
                    )
                      return !1
                    var c =
                        null == e ||
                        null === (n = e.create_nudge) ||
                        void 0 === n ||
                        null === (i = n.nudge) ||
                        void 0 === i ||
                        null === (r = i.nudge_type) ||
                        void 0 === r
                          ? void 0
                          : r.__typename,
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
                  a = e.isSelfThreadReply,
                  n = s.state.nudgeId
                if (
                  !(
                    !s._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    s.isReply &&
                    !a &&
                    s.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !n
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
                  a = e.addToast,
                  n = e.analytics,
                  i = e.audienceControlsValue,
                  r = e.composeSemanticCoreId,
                  o = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  d = e.history,
                  u = e.inReplyToStatus,
                  p = e.isSelfThreadReply,
                  m = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  g = e.send,
                  v = i.conversationControlsValue,
                  y = i.exclusivityControlValue,
                  b = void 0 === y ? void 0 : y,
                  _ = i.trustedFriendsValue,
                  C = void 0 === _ ? void 0 : _,
                  w = i.trustedFriendsMemberCount,
                  x = void 0 === w ? void 0 : w,
                  T = s.isPreview,
                  E = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  I = Object(ha.c)(E[0].scheduledFor)
                if (I) {
                  var R = Object(ha.b)(I),
                    M = Object(ha.i)(I),
                    k = fs({ scheduleDate: R, scheduleTime: M })
                  return a({ text: k, action: { label: hs, link: '' } }), void s._close()
                }
                if (
                  (o.length > 0 && n.scribe({ element: 'mentions', action: 'edited' }),
                  C &&
                    n.scribe({
                      action: 'send_trusted_friends_tweet',
                      data: { trusted_friends_control_details: { list_member_count: x } },
                    }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === v) n.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var P = s._getSingleComposerDataWithLatestText(E[0]).text,
                      L = Object(S.d)(P)
                    n.scribe({
                      action: L ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && n.scribe({ action: 'send_my_followers_tweet' })
                var D = (null == u ? void 0 : u.community_id_str) || i.communityIdValue || void 0,
                  A = D ? '8.31.'.concat(D) : '',
                  O = r ? (D ? [r, A].join(',') : r) : A
                g({
                  sendData: E,
                  communityIdValue: D,
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
                    var n = e.length > 1 ? is : ns
                    if (D && f) {
                      var i = f,
                        r = e.length
                      n = Yo({ numOfTweets: r, communityName: i })
                    }
                    var o = T && s.isReply,
                      l = { label: hs, link: void 0, onAction: void 0 }
                    if (o || !T) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '')
                    } else l.onAction = Object(Ko.a)(d, m, D)
                    a({ text: T ? rs : n, action: l }),
                      s.isInlineReply && s.setState({ focused: !1 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(function (e) {
                    var t,
                      a = e.sentTweets,
                      i = void 0 === a ? [] : a,
                      r = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      o = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      p = { message: e.type, event_info: r ? ''.concat(r) : void 0, status_code: u, url: o }
                    throw (
                      (i.map(
                        function (e, t) {
                          return s._scribeTweetSent(E[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(qo.d)(e) && e.code === jr.b.CANCELED) ||
                        n.scribe({ action: 'send_tweet_failure', data: p }),
                      E.length > 1 && s._scribeThreadSent(E, i, 'thread_send_failure'),
                      i.length &&
                        d.replace({
                          pathname: m.pathname,
                          state: l()(
                            l()({}, Object(Vo.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: i[i.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', qr.a))
              }),
              _()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              _()(h()(s), '_scribeTweetSent', function (e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  n = a.hasArticleNudge,
                  i = void 0 !== n && n,
                  r = a.isDraftTweet,
                  o = void 0 !== r && r,
                  c = a.isScheduled,
                  d = void 0 !== c && c,
                  u = s.state.nudgeId,
                  p = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  m = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? m : d ? p : 'send_',
                  f = { items: [Kr.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  b = Object(zo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          a = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return a ? Array.from(a) : void 0
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
                    i && s._scribe(l()(l()({}, Cs), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
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
                  var x = t.id_str && Kr.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
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
              _()(h()(s), '_scribeThreadSent', function (e, t, a) {
                var n = s.props.inReplyToStatus,
                  i = { items: [Kr.a.getSendThreadItem(e, t.length, !!n)] }
                s._scribe({ action: a }, i)
              }),
              _()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  a = { items: [Kr.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, a),
                  t && s._scribe(l()(l()({}, Cs), {}, { element: 'result', action: 'retweet' }), a)
              }),
              _()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  a = e.createLocalApiErrorHandler,
                  n = e.retweet,
                  i = t[0].quotedStatus
                i &&
                  (s._scribeRetweet(i),
                  n(i.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, a(Gr.a)))
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
                  a = e.hasArticleNudge,
                  n = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(n, '_tweet_discard')),
                  a && s._scribe(l()(l()({}, Cs), {}, { element: 'result', action: 'cancel' })),
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
                  (s._scribe(l()(l()({}, _s), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: zr.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              _()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, _s), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, _s), {}, { action: 'cancel' })),
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
                  a = e.isSending,
                  n = e.onCloseComposer
                a || s._resetDraft(),
                  s.state.navigatingToOutbox
                    ? s._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : n && n()
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
                  a = e.composerData,
                  n = e.history,
                  i = e.location,
                  r = e.removeComposer
                0 === t &&
                  a[0].quotedStatus &&
                  n.replace({ pathname: i.pathname, state: Object(Vo.a)(i.state || {}, 'quotedStatus') }),
                  r(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              _()(h()(s), '_handleViewRecipients', function () {
                var e = s.props,
                  t = e.excludedRecipients,
                  a = e.history,
                  n = e.inReplyToStatus
                s._setActiveParentKey(),
                  a.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: n },
                  })
              }),
              _()(h()(s), '_handleTextChange', function (e, t) {
                var a = s.state.textMap,
                  n = s.props,
                  i = n.activeComposerIndex,
                  r = n.isInline,
                  o = n.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, a), {}, _()({}, t, e)) }, function () {
                    o && o(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  Oo.b.isIOS())
                ) {
                  var c = r ? 0 : i
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              _()(
                h()(s),
                '_handleTextOnBlur',
                Object(_a.a)(function (e, t) {
                  return function () {
                    var a = s.state,
                      n = a.textMap,
                      i = a.tweetsSentOrScheduled,
                      r = s.props.composerData,
                      o = n[e],
                      l = r.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !i && l && s._updateSingleComposer({ text: o }, t)
                  }
                }),
              ),
              _()(h()(s), '_updateAudienceControlsValue', function (e) {
                var t = s.props,
                  a = t.composerData,
                  n = t.updateAudienceControlsValue,
                  i = s.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!s._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!s._isCommunitiesEnabled) return
                    a[0].pollActive &&
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: Xo } })),
                      (null == i ? void 0 : i.text) === Xo && s.setState({ errorMessage: void 0 })
                }
                n(e, s._getParentKey())
              }),
              _()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  a = e.sendingProgress
                return w.a.createElement(Bo.a, { progress: t ? Math.max(a, 0.02) : 0, style: Es.progressBar })
              }),
              _()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  a = e.updateConvoCardState
                if (t) {
                  var n = t.cardId,
                    i = t.nextState
                  i && n && a(n, { cardState: i })
                }
              }),
              _()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Br.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              _()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var n,
                    i,
                    r = s.props,
                    o = r.addMedia,
                    l = r.addToast,
                    c = r.composerData,
                    d = r.dataSaverMode,
                    u = r.preUploadMedia,
                    p = r.processMultipleMedia,
                    m = r.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    v = Object(Uo.e)(
                      null === (n = h()(s)) || void 0 === n || null === (i = n.context) || void 0 === i
                        ? void 0
                        : i.userClaims,
                    )
                  g ||
                    o(t, { location: Uo.d.Tweet, canUploadLongVideo: v }).then(function (t) {
                      var n = t.map(function (e) {
                        return e.id
                      })
                      if (a._validateMedia(f, t)) {
                        var i = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(jo.a)(i.concat(n)) }, e),
                          p(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            d ||
                              u(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else l({ text: ys }), m(n)
                    })
                }
              }),
              _()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              _()(h()(s), '_handleMediaRemove', function (e, t) {
                var a = s.props,
                  n = a.composerData,
                  i = a.removeMediaUpload,
                  r = n[e],
                  o = r.media,
                  l = r.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                      a[n - 1] = arguments[n]
                    return Object(Ho.a)(e, a)
                  })(
                    o.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  d = c.length > 0 ? l : []
                s._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: d }, e),
                  i(t),
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
                  a = e.parentTweetId
                if (s.state.focused) return !0
                var n = !Object(ma.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !a || n
              }),
              _()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  a = e.composerData,
                  n = a[0].quotedStatus,
                  i = null == n ? void 0 : n.community_id_str,
                  r = 'community_members' === t
                return (
                  (s.isRetweet && !i && !r) ||
                  a.every(function (e) {
                    return Object(ma.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  a = e.prepopulatedText
                return t.every(function (e) {
                  return Object(ma.d)(s._getSingleComposerDataWithLatestText(e), a)
                })
              }),
              _()(h()(s), '_getAltTextMetadata', function () {
                var e = s.props.composerData,
                  t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] }
                return (
                  e.forEach(function (e) {
                    var a,
                      n = (e.media || []).filter(function (e) {
                        var t = e.mediaFile
                        return (null == t ? void 0 : t.isImage) || (null == t ? void 0 : t.isGif)
                      }),
                      i = n
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += n.length), (a = t.noDescriptionImageIDs).push.apply(a, o()(i))
                  }),
                  (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                  t
                )
              }),
              _()(h()(s), '_getSingleComposerDataWithLatestText', function (e) {
                var t = s.state.textMap
                return 'string' == typeof t[e.key] ? l()(l()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (i = e.location.state) || void 0 === i || !i.focusComposer)
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
              (s._throttledSyncTexts = Object(tn.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((r = {}), _()(r, Go.b, s.handleTweetOrRetweet), _()(r, Go.a, s.handleDismissComposer), r)),
              (s._keyCommandHandlersForActiveTypeahead = _()({}, Go.b, s.handleTweetOrRetweet)),
              (s._isAltTextNudgeEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (s._isCommunitiesEnabled = s.context.featureSwitches.isTrue('c9s_enabled')),
              s
            )
          }
          return (
            p()(a, [
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
                    a = e.externalMedia,
                    n = e.externalMediaFiles,
                    i = e.fetchAltTextPromptPreferenceIfNeeded,
                    r = e.history,
                    o = e.isInline,
                    s = e.isIntentRoute,
                    c = e.location,
                    d = e.prepopulatedText,
                    u = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    a.length > 0 && this._attachExternalMedia(0)(a),
                    n.length > 0 && this._handleAddMediaFiles(0)(n),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    i(),
                    d || (t && t.cardUrl))
                  ) {
                    var p = l()({}, null)
                    d && (p.text = d), t && t.cardUrl && (p.cardUrl = t.cardUrl), this._updateSingleComposer(p)
                  }
                  ;(d || (t && t.cardUrl) || a.length > 0 || n.length > 0) &&
                    !s &&
                    r.replace({
                      query: Object(Xi.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(Vo.a)(Object(Xi.b)(c.state || {}), [
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
                  var a = this.props,
                    n = a.addToast,
                    i = a.composerData,
                    r = a.copyDataFromInlineComposerToModalComposer,
                    o = a.externalMedia,
                    s = a.externalMediaFiles,
                    l = a.onRef,
                    c = a.parentTweetId,
                    d = a.replyPressToggle,
                    u = a.setValidity
                  a.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== l && e.onRef(void 0),
                    l && l !== e.onRef && l(this),
                    i.length >= 25 && e.composerData.length < 25 && n({ text: gs }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    u && !Object(Wo.a)(i, e.composerData) && u && u(this._areComposersValid()),
                    d !== e.replyPressToggle && r(c)
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
                    a = this,
                    n = this.props,
                    r = n.activeUser,
                    o = n.addToast,
                    s = n.audienceControlsValue,
                    l = n.composeHeader,
                    c = n.composerData,
                    d = n.customizePropsForSingleComposerItem,
                    u = n.geoEnabled,
                    p = n.history,
                    m = n.inReplyToStatus,
                    h = n.isInline,
                    f = n.isModal,
                    g = n.isSelfThreadReply,
                    v = n.isSending,
                    y = n.isSuperFollowsCreator,
                    b = n.parentTweetId,
                    _ = n.positionCursorAtBeginning,
                    C = n.richTextInputContext,
                    x = n.scheduledFor,
                    T = n.typeaheadWrapper,
                    E = n.userLanguage,
                    S = n.windowWidth,
                    I = this.state,
                    R = I.errorMessage,
                    M = I.focused,
                    k = I.shouldDisableButton,
                    P = I.showAltTextPrompt,
                    L = I.showDiscardTweetConfirmation,
                    D = I.showToxicReplyNudge,
                    A = I.typeaheadActive,
                    O = !f && A,
                    F = h ? 0 : this.props.activeComposerIndex,
                    B = O || h ? [c[F]] : c,
                    N = this._areComposersValid(),
                    V = this.hasNonCompliantQuote && this.isRetweet,
                    z = h ? K.a : No.a,
                    j = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    H = k || !N || V || this.isCommunityTweetFromProtectedUser,
                    W = (h && Xr.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet,
                    U = (h && Xr.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    K.a,
                    { ref: this._setRootRef, style: !b && Es.root },
                    h ? this._renderProgressBar() : null,
                    R &&
                      w.a.createElement(
                        K.a,
                        { style: Es.inlineCallout },
                        w.a.createElement(Pt.a, {
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
                        style: [Es.content, b && Es.contentInlineReply, f && Es.contentModal],
                      },
                      m ? this._renderReplyContext() : null,
                      l,
                      w.a.createElement(
                        z,
                        j,
                        B.map(function (e, t) {
                          var n = Object(ha.h)(e.scheduledFor),
                            l = c.indexOf(e),
                            I = d(e, t, B),
                            R =
                              f || h
                                ? w.a.createElement(
                                    X.a,
                                    {
                                      behavioralEventContext: ws,
                                      disabled: H,
                                      onPress: a.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Es.inlineSendButton,
                                      testID: f ? Yr : Qr,
                                      type: 'brandFilled',
                                    },
                                    Object(Ko.b)({
                                      inReplyToStatus: !!m,
                                      isSelfThreadReply: !!g,
                                      isQuoteTweet: !!a.isQuoteTweet,
                                      isRetweet: !!a.isRetweet,
                                      isScheduled: !!n,
                                      isThread: a.isThread,
                                    }),
                                  )
                                : null,
                            k = a._getSingleComposerDataWithLatestText(e)
                          return w.a.createElement(
                            K.a,
                            { key: e.key },
                            w.a.createElement(
                              Li,
                              i()(
                                {
                                  addComposerLink: a._makeAddComposerLink(h, g, b),
                                  addToast: o,
                                  additionalToolbarContent: R,
                                  audienceControlsValue: s,
                                  autoFocus: a.isInlineReply && M,
                                  data: k,
                                  disableAddTweet: c.length >= 25,
                                  editable: !v && !!r,
                                  fetchAutotaggedLocationIfNeeded: a._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: u,
                                  hidePoll: W,
                                  hideScheduling: U,
                                  history: p,
                                  index: l,
                                  isActive: l === F && !v,
                                  isCommunityTweetFromProtectedUser: a.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || a._shouldBeExpanded(),
                                  isInline: h,
                                  isInlineReply: a.isInlineReply,
                                  isLast: h || l === c.length - 1,
                                  isReply: !!m || a.isInlineReply,
                                  isSelfThreadReply: !!g,
                                  isSuperFollowsCreator: y,
                                  keyCommandHandlers: a._getKeyCommandHandlers(),
                                  loggedInUser: r,
                                  onAddComposer: a._handleAddComposer,
                                  onFilesAdded: a._handleAddMediaFiles(l),
                                  onFocus: a._handleComposerFocus,
                                  onRemoveComposer: a._handleRemoveComposer,
                                  onRemoveMedia: a._handleMediaRemove,
                                  onTextChange: a._handleTextChange,
                                  onTextInputBlur: a._handleTextOnBlur(k.key, t),
                                  onTypeaheadStateChange: a._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!_,
                                  ref: a._setComposerRef(l),
                                  richTextInputContext: C,
                                  scheduledFor: x,
                                  setActiveParentKey: a._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: A,
                                  typeaheadWrapper: T,
                                  updateAudienceControlsValue: a._updateAudienceControlsValue,
                                  updateSingleComposer: a._updateSingleComposer,
                                  userLanguage: E,
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
                          ? w.a.createElement(Fo.a, {
                              cancelButtonLabel: cs,
                              confirmButtonLabel: ps,
                              headline: ds,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: us,
                            })
                          : w.a.createElement(Fo.a, {
                              confirmButtonLabel: cs,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? ss : os,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: ls,
                            })
                        : null,
                      P ? this._renderAltTextPrompt() : null,
                      D ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(K.a, { style: v && Es.mask }),
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
                    a = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && '' === a && t
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
                    a = e.isSending,
                    n = t[0].scheduledTweetId,
                    i = this.state.showDiscardTweetConfirmation,
                    r = this._areComposersEmptyOrUnchanged()
                  return !(a || r || i || n)
                },
              },
              {
                key: 'shouldShowBackgroundSendConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    a = e.isSending,
                    n = t.some(function (e) {
                      return e.media.some(function (e) {
                        return e.uploading
                      })
                    })
                  return a && n
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
                    a = e.isInline
                  return !(
                    this.isCommunityTweet ||
                    this.isExclusiveTweet ||
                    this.isThread ||
                    t[0].pollActive ||
                    0 !== t[0].mediaTags.length ||
                    a
                  )
                },
              },
              {
                key: 'isCommunityTweet',
                get: function () {
                  var e = this.props,
                    t = e.audienceControlsValue,
                    a = e.inReplyToStatus
                  return !!((null != a && a.community_id_str) || 'community_members' === t._type)
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
                    ? xs.Quote
                    : this.isThread
                    ? xs.Thread
                    : this.isReply
                    ? xs.Reply
                    : xs.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    a = this.props.undoTweetSettings
                  return (
                    (null == this ||
                    null === (e = this.context) ||
                    void 0 === e ||
                    null === (t = e.userClaims) ||
                    void 0 === t
                      ? void 0
                      : t.isTrueAndEnabled('subscriptions_feature_1003')) &&
                    (!a || void 0 === a[this.tweetType] || a[this.tweetType])
                  )
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      _()(Ts, 'defaultProps', {
        customizePropsForSingleComposerItem: function (e, t, a) {
          return {}
        },
        externalMedia: [],
        externalMediaFiles: [],
        isSelfThreadReply: !1,
        isModal: !1,
        positionCursorAtBeginning: !1,
        prepopulatedText: '',
        setValidity: function () {},
        typeaheadWrapper: Hr.a,
      }),
        _()(Ts, 'contextType', de.a),
        _()(Ts, '_validateMedia', function (e, t) {
          var a = e.media
          return Object(S.c)(a.concat(t))
        })
      var Es = B.a.create(function (e) {
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
      t.a = Object(G.a)(Or(Ts))
    },
    'ii+P': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return o
      })
      a('FtFR')
      var n = a('ERkP'),
        i = a.n(n),
        r = a('wtru')
      function o(e) {
        var t = Object(r.b)()
        return [
          !!t && !t.flags[e],
          i.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    lsKC: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return c
      }),
        a.d(t, 'a', function () {
          return d
        }),
        a.d(t, 'c', function () {
          return u
        })
      a('jQ3i'), a('x4t0')
      var n = a('3XMw'),
        i = a.n(n),
        r = i.a.g34f2c63,
        o = i.a.f70a36d0,
        s = i.a.d17df547,
        l = i.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? l : t ? s : e.isThread ? o : r({ verb: '' })
        },
        d = function (e, t, a) {
          return function () {
            if (a) {
              var n, i
              ;(null === (n = t.state) || void 0 === n || null === (i = n.previousPath) || void 0 === i
                ? void 0
                : i.includes(a)) && '/compose/tweet' === t.pathname
                ? window.scrollTo(0, 0)
                : e.push('/i/communities/'.concat(a), { lockScroll: !0 })
            } else {
              var r,
                o,
                s =
                  (null === (r = t.state) || void 0 === r || null === (o = r.previousPath) || void 0 === o
                    ? void 0
                    : o.includes('/home')) && '/compose/tweet' === t.pathname
              t.pathname.includes('/home') || s ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
            }
          }
        },
        u = function (e) {
          var t = e.isInline,
            a = e.isSelfThreadReply,
            n = e.parentTweetId
          return t ? { pathname: '/compose/tweet', state: { inReplyToStatusId: n, isSelfThreadReply: a } } : void 0
        }
    },
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return W
      })
      a('yiKp')
      var n = a('97Jx'),
        i = a.n(n),
        r = a('m3Bd'),
        o = a.n(r),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        d = a.n(c),
        u = a('1Pcy'),
        p = a.n(u),
        m = a('5Yy7'),
        h = a.n(m),
        f = a('2VqO'),
        g = a.n(f),
        v = a('KEM+'),
        y = a.n(v),
        b = (a('2G9S'), a('ERkP')),
        _ = a.n(b),
        C = a('38/B'),
        w = a('t62R'),
        x = a('/yvb'),
        T = a('piX5'),
        E = a('3XMw'),
        S = a.n(E),
        I = a('tI3i'),
        R = a.n(I),
        M = a('oQhu'),
        k = a('rHpw'),
        P = a('aITJ'),
        L = a('MWbm'),
        D = a('n5fo'),
        A = a('5emT'),
        O = a('Oib4'),
        F = a('WtWS'),
        B = a('ioan'),
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
          h()(a, e)
          var t = g()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              y()(p()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              y()(p()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              y()(
                p()(n),
                '_getTextInputStyle',
                Object(M.a)(function (e) {
                  return [U.root, !e && U.disabled]
                }),
              ),
              y()(p()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  i = n.state.isPasswordRevealed
                return 'password' === a && t ? (i ? 'text' : 'password') : a
              }),
              y()(p()(n), '_calculateLength', function (e) {
                return z(e, n.props.calculateLength)
              }),
              y()(p()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              y()(p()(n), '_isInvalidNumber', function () {
                var e,
                  t,
                  a,
                  i,
                  r,
                  o = n.props.type,
                  s =
                    null === (e = n._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (i = a.textInputNode) ||
                    void 0 === i ||
                    null === (r = i.validity) ||
                    void 0 === r
                      ? void 0
                      : r.badInput
                return 'number' === o && '' === s && !0 === l
              }),
              y()(p()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              y()(p()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur,
                  a = e.currentTarget.value,
                  i = n._calculateLength(a),
                  r = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: i, actualCount: r }), t && t(e)
              }),
              y()(p()(n), '_handleChange', function (e) {
                var t = n.props.onChange,
                  a = n.state.previousValue,
                  i = e.currentTarget.value,
                  r = n._calculateLength(i),
                  o = n._getActualCount(i),
                  s = n._getAdjustedMaxLength()
                void 0 !== s && i.length > s && a.length < i.length
                  ? (e.currentTarget.value = a)
                  : (n.setState({
                      isFocused: !0,
                      displayCount: r,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              y()(p()(n), '_handleFocus', function () {
                var e = n.props.onFocus
                n.setState({ isFocused: !0 }), e && e()
              }),
              y()(p()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  i = t.onKeyPress,
                  r = t.onSubmitEditing
                i && i(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !r || (e.preventDefault(), r(e))
              }),
              y()(p()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                P.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              y()(p()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                P.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              y()(p()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              y()(p()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              y()(p()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  n = e.onChange,
                  i = e.validLength,
                  r = !!n,
                  o = 'string' == typeof e.value,
                  s = 'string' == typeof t
                R()(
                  !(!s && o && !r),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  R()(!(a && i && i > a), 'Max length should be equal or greater than valid length.'),
                  R()(
                    !((void 0 !== a && a <= 0) || (void 0 !== i && i <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              y()(p()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              y()(p()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              y()(p()(n), '_getAdjustedMaxLength', function () {
                var e = n.props.maxLength,
                  t = n.getValue(),
                  a = n._calculateLength(t)
                return e ? e + t.length - a : void 0
              }),
              n._checkComponentPropsUsageCorrectness(e)
            var i = e.defaultValue,
              r = e.value || i || ''
            return (
              (n.state = {
                displayCount: n._calculateLength(r),
                actualCount: V(r),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: r,
              }),
              n
            )
          }
          return (
            d()(
              a,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.maxLength,
                      n = t.onChange,
                      i = t.validLength,
                      r = t.value,
                      o = e.maxLength,
                      s = e.onChange,
                      l = e.validLength,
                      c = e.value
                    ;(l === i && a === o && !!n === !!s && ('string' == typeof r) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      a = e.editable,
                      n = e.errorText,
                      i = e.helperText,
                      r = e.style,
                      o = this.state.isFocused,
                      s = this._isFormInvalid()
                    return _.a.createElement(
                      L.a,
                      { style: [G.root, r] },
                      _.a.createElement(
                        L.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            T.a.border,
                            G.textInputFormStyle,
                            s && T.a.invalidBorderColor,
                            o && s && T.a.focusedBorderInvalid,
                            o && !s && T.a.focusedBorderValid,
                            !a && T.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          L.a,
                          { style: G.textInputFormWrapper },
                          _.a.createElement(
                            L.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        L.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        _.a.createElement(
                          L.a,
                          { style: G.subtextWrapper },
                          i ? this._renderHelperText() : null,
                          s && n ? this._renderErrorText() : null,
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
                      a = this._isFormInvalid() ? 'red500' : t,
                      n = this._isLabelLarge()
                    return _.a.createElement(
                      w.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          n && G.placeholderText,
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
                      a = (e.accessibilityLabel, e.calculateLength, e.editable),
                      n =
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
                      r = (e.style, e.type, e.validLength, o()(e, N))
                    return _.a.createElement(
                      L.a,
                      { style: U.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        w.b,
                        { size: 'headline1', style: U.wrapper },
                        _.a.createElement(
                          B.a,
                          i()({}, r, {
                            editable: a,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(a),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      n && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      a = e.type,
                      n = this.state.isPasswordRevealed
                    return 'password' === a && t
                      ? _.a.createElement(
                          L.a,
                          { style: G.passwordVisibilityIconContainer },
                          _.a.createElement(x.a, {
                            accessibilityLabel: n ? H : j,
                            focusable: !0,
                            hoverLabel: { label: n ? H : j },
                            icon: n ? _.a.createElement(D.a, null) : _.a.createElement(A.a, null),
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
                      L.a,
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
                      a = this._exceedsValidLength(e),
                      n = t && S.a.ia24dc8c(t),
                      i = S.a.ia24dc8c(e)
                    return _.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      _.a.createElement(
                        w.b,
                        { color: a ? 'red500' : 'gray700', size: 'subtext2' },
                        n ? ''.concat(i, ' / ').concat(n) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      a = [G.icon, t && G.focusedIcon]
                    return e && _.a.createElement(e, { style: a })
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
                    var a = e.calculateLength,
                      n = e.value,
                      i = 'string' == typeof n ? z(n, a) : 0
                    return 'string' == typeof n && i !== t.displayCount
                      ? { displayCount: i, actualCount: n.length }
                      : null
                  },
                },
              ],
            ),
            a
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
    piX5: function (e, t, a) {
      'use strict'
      a('uFXj'), a('2G9S')
      var n = a('rHpw').a.create(function (e) {
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
      t.a = n
    },
    pidX: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return d
      })
      var n = a('ddV6'),
        i = a.n(n),
        r =
          (a('z84I'),
          a('TJCb'),
          a('7x/C'),
          a('DZ+c'),
          a('7xRU'),
          a('KqXw'),
          a('Ysgh'),
          a('LW0h'),
          a('2G9S'),
          a('3XMw')),
        o = a.n(r),
        s = a('3A2y'),
        l = o.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          a = e.query || {},
          n = c.map(function (e) {
            return t[e] || a[e]
          }),
          r = i()(n, 6),
          o = r[0],
          s = r[1],
          d = r[2],
          u = r[3],
          p = r[4],
          m = r[5],
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
    rziq: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return n
      }),
        a.d(t, 'a', function () {
          return i
        })
      var n = 'send-tweet',
        i = 'dismiss-composer'
    },
    sCk0: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        i = a.n(n),
        r = a('Y9Ll'),
        o = a.n(r),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        d = a.n(c),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('2G9S'), a('z84I'), a('7x/C'), a('JtPf'), a('DfhM'), a('ERkP')),
        g = a.n(f),
        v = a('zfvc'),
        y = a('RhWx'),
        b = a.n(y),
        _ = (a('yH/f'), a('M+/F'), a('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(l()(e), 'state', {
                isAnimating: !1,
                renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(l()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  a = e.props,
                  n = a.children,
                  i = a.onAnimateComplete
                t &&
                  (i && i(),
                  e.setState({
                    renderChildren: g.a.Children.toArray(n).map(function (e) {
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
              a,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return this.state.renderChildren.map(function (t) {
                      var a = t.child,
                        n = t.status
                      return g.a.createElement(
                        v.a,
                        {
                          animateMount: n !== C.static,
                          key: a.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: n !== C.out,
                        },
                        a,
                      )
                    })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var a = (function (e, t) {
                      for (
                        var a = 0,
                          n = 0,
                          i = [],
                          r = function () {
                            if (a >= t.length)
                              return (
                                i.push.apply(
                                  i,
                                  b()(
                                    e.slice(n).map(function (e) {
                                      return { child: e, status: C.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var r = t[a],
                              o = e[n]
                            if (r.key === o.key) i.push({ child: r, status: C.static }), (a += 1)
                            else {
                              var s = Object(_.a)(t, function (e) {
                                return e.key === o.key
                              })
                              s >= 0
                                ? (i.push.apply(
                                    i,
                                    b()(
                                      t.slice(a, s).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[s], status: C.static }]),
                                  ),
                                  (a = s + 1))
                                : i.push({ child: o, status: C.out })
                            }
                            n += 1
                          };
                        n < e.length && 'break' !== r();

                      );
                      return (
                        a < t.length &&
                          i.push.apply(
                            i,
                            b()(
                              t.slice(a).map(function (e) {
                                return { child: e, status: C.in }
                              }),
                            ),
                          ),
                        i
                      )
                    })(
                      t.renderChildren.map(function (e) {
                        return e.child
                      }),
                      g.a.Children.toArray(e.children),
                    )
                    return {
                      renderChildren: a,
                      isAnimating: !a.every(function (e) {
                        return e.status === C.static
                      }),
                    }
                  },
                },
              ],
            ),
            a
          )
        })(g.a.Component)
      t.a = w
    },
    x8Sc: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'InlineComposeContainer', function () {
          return d
        })
      var n = a('ERkP'),
        i = a.n(n),
        r = a('h5NW'),
        o = a('MWbm'),
        s = a('7N4s'),
        l = a('cHvH'),
        c = a('rHpw'),
        d = function (e) {
          var t = e.history,
            a = e.location,
            n = e.parentTweetId,
            c = e.replyPressToggle,
            d = e.richTextInputContext,
            p = e.typeaheadWrapper,
            m = i.a.useContext(s.b).isModal
          return i.a.createElement(l.a, null, function (e) {
            var s = e.windowWidth
            return i.a.createElement(
              o.a,
              { style: u.root },
              i.a.createElement(r.a, {
                history: t,
                isInline: !0,
                isModal: m,
                location: a,
                parentTweetId: n,
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
    yTN1: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = a.n(n),
        r = a('WOwf'),
        o = a('3XMw'),
        s = a.n(o),
        l = a('k6Ei'),
        c = a('rHpw'),
        d = a('+/1j'),
        u = a('MWbm'),
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
          a = e.maxCount,
          n = e.formatNumber,
          o = void 0 === n ? h : n,
          s = e.warningCount,
          g = a - t,
          v = g >= 0 ? m({ count: o(g) }) : p({ count: o(t - a) }),
          y =
            t >= s
              ? i.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  v,
                )
              : null,
          b = Object(r.a)(g, a),
          _ = t >= a ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = i.a.createElement(l.a, {
            color: _,
            progress: b,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          w = t >= s ? i.a.createElement(d.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, o(g)) : null
        return i.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          C,
          i.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, w),
        )
      }
    },
    yZqq: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        i = a.n(n),
        r = a('m3Bd'),
        o = a.n(r),
        s = a('ddV6'),
        l = a.n(s),
        c = a('ERkP'),
        d = a.n(c),
        u = (a('5BYb'), a('7x/C'), a('uFXj'), a('H7Rt')),
        p = a('3XMw'),
        m = a.n(p),
        h = a('MWbm'),
        f = a('t62R'),
        g = a('CKsB'),
        v = a('/yvb'),
        y = a('rHpw'),
        b = a('Zg3A'),
        _ = a('yiKp'),
        C = a.n(_),
        w = a('Lsrn'),
        x = a('k/Ka'),
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
        S = a('boUI'),
        I = a('EweD'),
        R = m.a.g6185a9e,
        M = m.a.g2d04222,
        k = m.a.baffe39a,
        P = m.a.af293dc2,
        L = m.a.h1053f7e,
        D = m.a.bf994ab2,
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
            a,
            n = e.dismiss,
            i = e.isModal,
            r = e.midConversationTweet,
            o = e.value,
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            l = !!r,
            c =
              l &&
              !(
                null != r &&
                null !== (t = r.entities) &&
                void 0 !== t &&
                null !== (a = t.user_mentions) &&
                void 0 !== a &&
                a.some(function (e) {
                  return e.id_str !== r.user.id_str
                })
              ),
            p = L
          return (
            c ? (p = D) : l && (p = A),
            d.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [F.root, i ? F.modal : F.popover],
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
                        onPress: n,
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
        N = a('OiMc'),
        V = a('efqG'),
        z = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          a = e.controlled,
          n = void 0 !== a && a,
          r = e.disabled,
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
          f = n ? (u ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return d.a.createElement(
          V.a,
          {
            disabled: r,
            onDismiss: h,
            renderContent: function (t, a) {
              e.children, e.controlled
              var n = o()(e, z)
              return d.a.createElement(B, i()({}, n, { dismiss: t, isModal: 'sheet' === a }))
            },
            visibilityBehavior: f,
          },
          g,
        )
      }
    },
    zmS9: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = a.n(n),
        r = a('3XMw'),
        o = a.n(r),
        s = a('J0mu'),
        l = a('t62R'),
        c = a('rHpw'),
        d = a('QbaN'),
        u = o.a.bfb895b1,
        p = c.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          a = e.scheduledFor,
          n = e.testID,
          r = Object(d.c)(a),
          o = !!r && Object(d.h)(a) && !Object(d.g)(r) && !Object(d.f)(r),
          c = Boolean(t)
        return r && o
          ? i.a.createElement(
              l.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: n, withInteractiveStyling: c },
              i.a.createElement(s.a, { style: p.icon }),
              u({ date: Object(d.b)(r), time: Object(d.i)(r) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
