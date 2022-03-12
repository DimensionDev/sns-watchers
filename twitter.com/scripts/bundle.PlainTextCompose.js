;(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
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
          return w
        }),
        a.d(t, 'b', function () {
          return x
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
        m = a('a/ea'),
        p = a('474o'),
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
        T = function (e, t) {
          return function (a, n, i) {
            var r = i.api
            return Object(s.b)(a, { request: r.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        w = function (e) {
          return function (t, a, n) {
            n.api
            var i = Object(m.d)(a())
            return t(
              T(
                {
                  query_type: p.a.tweet_compose_location,
                  lat: null == i ? void 0 : i.coords.latitude,
                  long: null == i ? void 0 : i.coords.longitude,
                  hacc: null == i ? void 0 : i.coords.accuracy,
                  search_term: e,
                },
                p.c.lastSearch,
              ),
            )
          }
        },
        x = function () {
          return function (e, t, a) {
            a.api
            var n = y(t()),
              i = v(t())
            if (n === l.a.LOADING || i) return Promise.resolve()
            var r = Object(m.d)(t())
            return r
              ? e(
                  T(
                    {
                      lat: r.coords.latitude,
                      long: r.coords.longitude,
                      hacc: r.coords.accuracy,
                      query_type: p.a.tweet_compose_location,
                      count: 50,
                    },
                    p.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        E = function () {
          return function (e, t, a) {
            a.api
            return Object(u.l)(t()) && Object(m.c)(t()) === c.b.granted
              ? e(Object(m.b)())
                  .then(function () {
                    return e(x())
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
        return Te
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
        m = a.n(u),
        p = a('5Yy7'),
        h = a.n(p),
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
        T = a('GTeL'),
        w = a('3XMw'),
        x = a.n(w),
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
        A = 'altTextEducationSheetPrimaryAction',
        M = a('MWbm'),
        k = a('t62R'),
        P = a('p+r5'),
        D = x.a.feabf2a0,
        O = x.a.e36287c6,
        L = x.a.cf565d08,
        F = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(m()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? _.a.createElement(k.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, L) : null
              }),
              y()(m()(e), '_handleChange', function (t) {
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
                    M.a,
                    { style: S.root },
                    _.a.createElement(
                      M.a,
                      { style: S.attachmentContainer },
                      _.a.createElement(T.a, { mediaItem: n, orientedImage: i }),
                      _.a.createElement(P.a, {
                        accessibilityLabel: D,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: O,
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
        N = a('rxPX'),
        B = function (e, t) {
          return Object(C.A)(e, C.a)
        },
        V = Object(N.a)()
          .propsFromState(function () {
            return { showEducationOnMount: B }
          })
          .propsFromActions(function () {
            return { addFlag: C.w }
          })
          .withAnalytics(),
        j = a('feu+'),
        z = x.a.ffe9ec3a,
        H = x.a.j063b261,
        U = x.a.e57144f0,
        W = x.a.f9f9210c,
        G = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(m()(e), 'state', { showAltTextEducationSheet: !1 }),
              y()(m()(e), '_handleOpenEducationPrompt', function () {
                var t = e.props.analytics
                e.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: 'education', action: 'click' })
              }),
              y()(m()(e), '_handleCloseEducationPrompt', function () {
                e.setState({ showAltTextEducationSheet: !1 })
              }),
              y()(m()(e), '_handleEducationPromptPrimaryAction', function () {
                var t = e.props.analytics
                e._handleCloseEducationPrompt(),
                  t.scribe({ component: 'education', element: 'alt_text_button', action: 'click' })
              }),
              y()(m()(e), '_handleEducationPromptSecondaryAction', function () {
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
                    M.a,
                    { style: q.root },
                    r
                      ? _.a.createElement(j.a, {
                          actionLabel: U,
                          headline: z,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: A,
                          secondaryActionLabel: W,
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
        q = E.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        K = V(G),
        Q = a('jHSc'),
        X = a('EeFI'),
        Y = a('7JQg'),
        Z = a('9Q4p'),
        J = a('PrL8'),
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
        me = { section: 'alt_text' },
        pe = { section: 'crop' },
        he = { section: 'sensitive_media' },
        fe = x.a.e070024a,
        ge = x.a.i2209530,
        ve = x.a.i7d24b36,
        ye = x.a.f96a38a2,
        be = x.a.hac7c548,
        _e = x.a.e3dbfba3,
        Ce = x.a.dd4a83a5,
        Te = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        we = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              y()(m()(n), '_cropper', _.a.createRef()),
              y()(
                m()(n),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === Te.sensitiveMedia
                    ? { namespace: he, title: Ce, renderer: n._renderSensitiveMediaTab }
                    : e === Te.altText
                    ? { namespace: me, title: _e, renderer: n._renderAltTextTab }
                    : { namespace: pe, title: be, renderer: n._renderCropTab }
                }),
              ),
              y()(m()(n), '_renderTabContent', function (e) {
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
                      _.a.createElement(M.a, { style: J.a.segmentedControlChildren }, c),
                    )
                  : c
              }),
              y()(m()(n), '_renderAltTextTab', function () {
                var e = n.props.history,
                  t = n.state,
                  a = t.currentMediaId,
                  i = t.mediaMetadata,
                  r = t.orientedImage,
                  o = n._getCurrentMediaItem(),
                  s = i[a] && i[a].altText
                return _.a.createElement(K, {
                  history: e,
                  key: a,
                  mediaItem: o,
                  onAltTextChange: n._handleAltTextChange,
                  orientedImage: r.get(a),
                  value: s,
                })
              }),
              y()(m()(n), '_renderCropTab', function () {
                var e = n.state,
                  t = e.cropData,
                  a = e.currentMediaId,
                  i = n._getCurrentMediaItem()
                return _.a.createElement(X.a, {
                  defaultCropData: t.get(a),
                  key: a,
                  media: i,
                  ref: n._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              y()(m()(n), '_renderSensitiveMediaTab', function () {
                var e = n.state,
                  t = e.currentMediaId,
                  a = e.mediaMetadata,
                  i = e.orientedImage,
                  r = n._getCurrentMediaItem(),
                  o = a[t] && a[t].sensitiveMediaWarning
                return _.a.createElement(Z.a, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: r,
                  onWarningChange: n._handleSensitiveWarningChange,
                  orientedImage: i.get(t),
                })
              }),
              y()(m()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing,
                  t = n._getNextMediaIndex(1),
                  a = n._getNextMediaIndex(-1)
                return _.a.createElement(
                  M.a,
                  { style: J.a.rightControl },
                  n._hasMediaAtIndex(a) || n._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        M.a,
                        { style: [J.a.rightControl, J.a.leftRightButtons] },
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ye,
                          disabled: !n._hasMediaAtIndex(a),
                          icon: _.a.createElement(oe.a, null),
                          onPress: n._handleClickToMediaAtIndex(a),
                          size: 'small',
                          style: J.a.prevButton,
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
                      style: J.a.saveButton,
                      testID: R,
                      type: 'primaryFilled',
                    },
                    ge,
                  ),
                )
              }),
              y()(m()(n), '_handleCancelEditingClick', function (e) {
                n._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              y()(m()(n), '_handleClickTab', function (e) {
                var t = n.props.analytics
                n._handleSaveCropData(),
                  n._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              y()(m()(n), '_getCurrentMediaItem', function () {
                var e = n.props.media,
                  t = n.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              y()(m()(n), '_getNextMediaIndex', function (e) {
                var t = n.props.media,
                  a = n._getCurrentMediaItem()
                return t.indexOf(a) + e
              }),
              y()(m()(n), '_hasMediaAtIndex', function (e) {
                var t = n.props.media
                return e >= 0 && e < t.length
              }),
              y()(m()(n), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = n.props.media
                  if (n._hasMediaAtIndex(e)) {
                    n._handleSaveCropData()
                    var a = t[e].id
                    n.setState({ currentMediaId: a })
                  }
                }
              }),
              y()(m()(n), '_saveMediaMetadata', function () {
                var e = n.props,
                  t = e.media,
                  a = e.setMediaMetadata,
                  i = n.state.mediaMetadata
                t.forEach(function (e) {
                  a(e.id, i[e.id])
                })
              }),
              y()(m()(n), '_handleEndEditingClick', function () {
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
              y()(m()(n), '_handleAltTextChange', function (e) {
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
              y()(m()(n), '_handleSensitiveWarningChange', function (e, t) {
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
              y()(m()(n), '_handleSaveCropData', function () {
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
              y()(m()(n), '_scribeWithNamespace', function (e) {
                var t = n.props,
                  a = t.analytics,
                  r = t.sensitiveMediaTabEnabled,
                  o = n._getCurrentTab(),
                  s = n._getMemoizedTabMetadata(o, r)
                a.scribe(i()(i()({}, s.namespace), e))
              }),
              y()(m()(n), '_getMediaMetadata', function (e) {
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
                    Y.c,
                    { namespace: i.namespace },
                    _.a.createElement(
                      Q.b,
                      {
                        backButtonType: 'back',
                        containerStyle: J.a.root,
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
                  return n && i === Te.sensitiveMedia ? Te.sensitiveMedia : i === Te.altText ? Te.altText : Te.crop
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
                        to: i()(i()({}, o), {}, { state: i()(i()({}, o.state), {}, { tab: Te.crop }) }),
                        label: _.a.createElement(le.a, null),
                        key: Te.crop,
                        accessibilityLabel: be,
                        isActive: function () {
                          return e === Te.crop
                        },
                        onClick: function () {
                          return r.scribePageImpression()
                        },
                      }),
                    c.push({
                      to: i()(i()({}, o), {}, { state: i()(i()({}, o.state), {}, { tab: Te.altText }) }),
                      label: _.a.createElement(k.b, { weight: 'bold' }, 'ALT'),
                      key: Te.altText,
                      accessibilityLabel: _e,
                      isActive: function () {
                        return e === Te.altText
                      },
                      onClick: function () {
                        return a._handleClickTab('alt_text_button')
                      },
                    }),
                    s &&
                      c.push({
                        to: i()(i()({}, o), {}, { state: i()(i()({}, o.state), {}, { tab: Te.sensitiveMedia }) }),
                        label: _.a.createElement(ce.a, null),
                        key: Te.sensitiveMedia,
                        accessibilityLabel: Ce,
                        isActive: function () {
                          return e === Te.sensitiveMedia
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
      t.b = we
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
        m = a.n(u),
        p = a('2VqO'),
        h = a.n(p),
        f = a('KEM+'),
        g = a.n(f),
        v = a('yiKp'),
        y = a.n(v),
        b = (a('lTEL'), a('7x/C'), a('LqLs'), a('87if'), a('kYxP'), a('7xRU'), a('z84I'), a('2G9S'), a('ERkP')),
        _ = a.n(b),
        C = a('t62R'),
        T = a('piX5'),
        w = a('4r2z'),
        x = a('FG+G'),
        E = a('rHpw'),
        S = a('k/Ka'),
        I = a('shC7'),
        R = a('MWbm'),
        A = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        M = function (e) {
          return Object(S.a)('option', e)
        },
        k = 1,
        P = (function (e) {
          m()(a, e)
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
              (n._id = 'SELECTOR_'.concat(k)),
              (n._errorID = ''.concat(n._id, '_ERROR')),
              (n._helperID = ''.concat(n._id, '_HELP')),
              (n._labelID = ''.concat(n._id, '_LABEL')),
              (k += 1),
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
                    m = this.state.isFocused,
                    p = C.b.getLanguage(),
                    h =
                      'ja' === p
                        ? E.a.theme.fontFamilies.japan
                        : I.a.getConstants().isRTL || w.a.isLocaleRTL(p)
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
                          T.a.border,
                          D.container,
                          a && T.a.disabled,
                          m && T.a.focusedBorderValid,
                          f && T.a.invalidBorderColor,
                          m && f && T.a.focusedBorderInvalid,
                          l,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        A,
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
                          style: [D.select, { fontFamily: h }, a && T.a.disabled],
                          testID: c || '',
                          value: d,
                        },
                        u ? _.a.createElement(M, { disabled: !0, style: D.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            a = e.label,
                            n = e.value
                          return _.a.createElement(
                            M,
                            { disabled: t, key: ''.concat(a, '-').concat(n), style: D.option, value: n },
                            a,
                          )
                        }),
                      ),
                      _.a.createElement(x.a, {
                        style: [D.dropdownCaret, m && T.a.validColor, (r || n) && T.a.invalidColor],
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
      g()(P, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (P.propTypes = {})
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
      t.a = P
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
        m = a('rHpw'),
        p = a('ZkMC'),
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
          m = c.b.useOpaqueIdentifier(),
          b = i.a.createElement(r.a, { mediaItem: a, orientedImage: o })
        return i.a.createElement(
          l.a,
          { style: _.root },
          i.a.createElement(
            l.a,
            { style: _.modalContainer },
            null != t && t.size
              ? i.a.createElement(
                  p.a,
                  { revealableTombstoneConfig: p.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  b,
                )
              : b,
            i.a.createElement(d.b, { nativeID: m, subtext: f, text: h }),
            i.a.createElement(
              l.a,
              { accessibilityLabelledBy: m, accessibilityRole: 'group' },
              s.map(function (e) {
                var a = e.label,
                  r = e.value
                return i.a.createElement(u.a, { checked: t && t.has(r), key: r, label: a, name: r, onChange: n })
              }),
            ),
          ),
        )
      }
      var _ = m.a.create(function (e) {
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
        m = o.a.gff1f69e
      var p = c.a.create(function (e) {
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
          { style: p.mediaPreviewWrapper },
          void 0 === a && t
            ? i.a.createElement(s.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: p.mediaContainer,
                withCloseButton: !1,
              })
            : a
            ? i.a.createElement(d.a, { resizeMode: 'contain', source: a.url, style: p.image })
            : i.a.createElement(l.a, { accessibilityLabel: m, style: p.activityIndicator }),
        )
      }
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
          return m
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
        m = function (e) {
          return e.geoLocation.position
        },
        p = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: p }
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
            return m(t()) ? Promise.resolve() : e(g())
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
            case p:
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
        m = a.n(u),
        p = a('1Pcy'),
        h = a.n(p),
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
        T = a.n(C),
        w = a('dDSG'),
        x = a('pXBW'),
        E = a('6/RC'),
        S = (a('KOtZ'), a('ho0z'), a('hBpG'), a('wpu3')),
        I = a('v6aA'),
        R = a('+Kfv'),
        A = a('eSoz'),
        M = a('rxPX'),
        k = function (e, t) {
          var a = t.communityId
          return a ? A.c.select(e, a) : void 0
        },
        P = Object(M.a)().propsFromState(function () {
          return { community: k }
        }),
        D = a('MtXG'),
        O = a('t62R'),
        L = a('CKsB'),
        F = a('rHpw'),
        N = a('3XMw'),
        B = a.n(N),
        V = B.a.d58baa7e,
        j = P(
          T.a.memo(function (e) {
            var t = e.clickHandler,
              a = e.community,
              n = e.communityId,
              i = e.selectedCommunityId
            if (!a) return null
            var r,
              o = a.member_count
            return T.a.createElement(L.a, {
              actionSubText:
                ((r = V(o)),
                T.a.createElement(
                  D.a.Group,
                  null,
                  T.a.createElement(
                    D.a,
                    null,
                    T.a.createElement(
                      O.b,
                      { color: 'white' },
                      T.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        T.a.createElement(D.a.Value, null, B.a.ibd0106d({ formattedCount: r })),
                        T.a.createElement(D.a.Label, null, B.a.cface2d0({ count: o })),
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
              style: z.menuItem,
            })
          }),
        ),
        z = F.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        H = a('0zXz'),
        U = a('FS1z'),
        W = a('MWbm'),
        G = a('yw4N'),
        q = a('/yvb'),
        K = a('+Eiw'),
        Q = a('Zg3A'),
        X = a('EyD/'),
        Y = B.a.e815fc33,
        Z = B.a.c63602d3,
        J = B.a.baffe39a,
        $ = B.a.aa4209e8,
        ee = B.a.d0748dae,
        te = B.a.abd845fd,
        ae = { viewType: 'everyone' },
        ne = { viewType: 'community' },
        ie = B.a.d58baa7e,
        re = F.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: K.a.getBackgroundImage() },
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
            m = e.onAudienceControlsValueChange,
            p = e.sliceModule,
            h = T.a.useContext(I.a),
            f = o.communityIdValue || void 0,
            g = o.exclusivityControlValue || void 0,
            v = o.trustedFriendsValue || void 0,
            y = h.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            b = null === (t = e.trustedFriendsList) || void 0 === t ? void 0 : t.rest_id,
            _ =
              null !== (a = null === (n = e.trustedFriendsList) || void 0 === n ? void 0 : n.member_count) &&
              void 0 !== a
                ? a
                : 0,
            C = T.a.useCallback(
              function (e) {
                return function () {
                  m(e), s()
                }
              },
              [m, s],
            ),
            w = T.a.useCallback(
              function (e) {
                if (b) return c.push('/i/circles/'.concat(b, '/members'))
              },
              [c, b],
            )
          return T.a.createElement(
            W.a,
            { style: re.root },
            T.a.createElement(
              G.a,
              { style: re.viewport },
              T.a.createElement(
                T.a.Fragment,
                null,
                T.a.createElement(O.b, { size: 'headline1', style: re.title, weight: 'bold' }, Y),
                T.a.createElement(
                  R.a,
                  { behavioralEventContext: ae },
                  T.a.createElement(L.a, {
                    Icon: Q.a,
                    actionText: J,
                    isSelected: !g && !f && !v,
                    onClick: C({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: re.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                u
                  ? T.a.createElement(L.a, {
                      Icon: X.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!g,
                      onClick: C({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: re.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                y && e.trustedFriendsList && b
                  ? T.a.createElement(L.a, {
                      Icon: X.a,
                      actionSubText:
                        ((i = _),
                        (r = ie(i)),
                        T.a.createElement(
                          D.a.Group,
                          null,
                          T.a.createElement(
                            D.a,
                            null,
                            T.a.createElement(
                              O.b,
                              { color: 'white' },
                              T.a.createElement(
                                B.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                T.a.createElement(D.a.Value, null, B.a.a5f7b70f({ formattedCount: r })),
                                T.a.createElement(D.a.Label, null, B.a.a7daec1e({ count: i })),
                              ),
                            ),
                            T.a.createElement(q.a, { onPress: w, size: 'xSmall', type: 'primaryText' }, te),
                          ),
                        )),
                      actionText: ee,
                      iconThumbnailColor: 'success',
                      isSelected: !!v,
                      onClick: C({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsValue: { trusted_friends_list_id: b },
                      }),
                      selectable: !0,
                      style: re.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              l && p && d
                ? T.a.createElement(
                    W.a,
                    null,
                    T.a.createElement(
                      R.a,
                      { behavioralEventContext: ne },
                      T.a.createElement(O.b, { style: re.title, weight: 'bold' }, Z),
                      T.a.createElement(U.a, {
                        module: p,
                        noItemsRenderer: H.a,
                        renderer: function (e) {
                          return T.a.createElement(j, {
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
        se = a('xVN5'),
        le = a('wAC9'),
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
        de = a('hqKg'),
        ue = a('li/m'),
        me = a('RqPI'),
        pe = a('xZGM'),
        he = a('0KEI'),
        fe = a('oEOe'),
        ge = a('kGix'),
        ve = a('Ssj5'),
        ye = 'trustedFriends',
        be = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        _e = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        Ce = function (e) {
          return e.trustedFriends.lists
        },
        Te = function () {
          return function (e, t, a) {
            var n = a.api
            return fe.b(e, { request: n.TrustedFriends.createTrustedFriendsList })({
              actionTypes: _e,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        we = function () {
          return function (e, t) {
            var a = t(),
              n = Ce(a)
            ;(n.length ? n[0] : void 0) ||
              e(function (e, t, a) {
                var n = a.api
                return fe.b(e, { request: n.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: be,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && Te && e(Te())
              })
          }
        },
        xe = Object.freeze({ lists: [], fetchStatus: ge.a.NONE })
      ve.a.register(
        _()({}, ye, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case be.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: ge.a.LOADING })
            case be.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: ge.a.FAILED })
            case be.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: ge.a.LOADED },
                )
              break
            case _e.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: ge.a.LOADING })
            case _e.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: ge.a.FAILED })
            case _e.SUCCESS:
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
      var Ee = function (e, t) {
          var a = t.audienceControlsValue.communityIdValue || void 0
          return a ? A.c.select(e, a) : void 0
        },
        Se = function (e, t) {
          return Object(pe.A)(e, pe.f)
        },
        Ie = function (e) {
          var t = Ce(e)
          return t.length ? t[0] : void 0
        },
        Re = Object(M.a)()
          .propsFromState(function () {
            return {
              communities: A.f,
              educationalVisibilityFlag: Se,
              hasMemberships: ue.d,
              selectedCommunity: Ee,
              sliceModule: Object(de.createSelector)(me.q, function (e) {
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
                return Object(pe.w)(pe.f)
              },
              updateSingleComposer: se.w,
              fetchOrCreateTrustedFriendsList: we,
            }
          }),
        Ae = a('FG+G'),
        Me = a('Sp5X'),
        ke = a('X00g'),
        Pe = a('efqG'),
        De = B.a.baffe39a,
        Oe = B.a.e815fc33,
        Le = B.a.aa4209e8,
        Fe = B.a.d0748dae,
        Ne = { viewType: 'communities_controls' },
        Be = T.a.createElement(Ae.a, null),
        Ve = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var i
            return (
              d()(this, a),
              (i = t.call(this, e, n)),
              _()(h()(i), '_renderContent', function (e) {
                var t = i.props,
                  a = t.audienceControlsValue,
                  n = t.hasMemberships,
                  r = t.isC9sParticipationEnabled,
                  o = t.isSuperFollowsCreator,
                  s = t.sliceModule
                return T.a.createElement(oe, {
                  audienceControlsValue: a,
                  dismiss: e,
                  hasMemberships: n,
                  history: Me.a,
                  isC9sParticipationEnabled: r,
                  isSuperFollowsCreator: o,
                  onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                  sliceModule: s,
                  trustedFriendsList: i.props.selectTrustedFriendsList,
                })
              }),
              _()(h()(i), '_handleAudienceControlsValueChange', function (e) {
                var t = i.props.updateSingleComposer
                i._handleDismissEducationalVisibilty(),
                  i.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              _()(h()(i), '_handleOpen', function () {
                i.setState({ popoverIsOpen: !0 })
              }),
              _()(h()(i), '_handleDismiss', function () {
                i.setState({ popoverIsOpen: !1 }), i._handleDismissEducationalVisibilty()
              }),
              _()(h()(i), '_handleDismissEducationalVisibilty', function () {
                i.props.addEducationFlag()
              }),
              (i.state = { popoverIsOpen: !1 }),
              i
            )
          }
          return (
            m()(a, [
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
                    a = t.audienceControlsValue,
                    n = t.educationalVisibilityFlag,
                    r = t.hasMemberships,
                    o = t.isSuperFollowsCreator,
                    s = t.selectedCommunity,
                    l = this.state.popoverIsOpen,
                    c = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    d = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    u = a.communityIdValue || !1,
                    m = a.exclusivityControlValue || !1,
                    p = a.trustedFriendsValue || !1,
                    h = n && !s,
                    f = De
                  if ((u && null != s && s.name ? (f = s.name) : m ? (f = Le) : p && (f = Fe), m))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != s && s.theme && c) {
                    var g = ke.a.getCommunityUIColorName(s.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return o || r || (d && this.props.selectTrustedFriendsList)
                    ? T.a.createElement(
                        R.a,
                        { behavioralEventContext: Ne },
                        T.a.createElement(
                          W.a,
                          { style: je.container },
                          T.a.createElement(
                            Pe.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            T.a.createElement(
                              q.a,
                              i()(
                                {
                                  accessibilityExpanded: l,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: Oe,
                                  accessibilityRole: 'button',
                                  icon: Be,
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
            a
          )
        })(T.a.Component)
      _()(Ve, 'contextType', I.a)
      var je = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        ze = Re(Ve),
        He = a('ddV6'),
        Ue = a.n(He),
        We = a('PKbs'),
        Ge = function (e, t) {
          var a = t.selectedCommunityId
          return a ? A.c.select(e, a) : void 0
        },
        qe = Object(M.a)()
          .propsFromState(function () {
            return { community: Ge }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: A.c.fetchOneIfNeeded,
            }
          }),
        Ke = a('YeIG'),
        Qe = a('21zW'),
        Xe = B.a.gfca5254,
        Ye = B.a.f510c8b2,
        Ze = T.a.createElement(O.b, { weight: 'bold' }, Ye),
        Je = F.a.create(function (e) {
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
        $e = qe(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            r = e.selectedCommunityId,
            o = e.showMiddot
          T.a.useEffect(
            function () {
              r && Object(Ke.a)(t) && n(r).catch(a())
            },
            [t, r, a, n],
          )
          var s = T.a.useState(!1),
            l = Ue()(s, 2),
            c = l[0],
            d = l[1],
            u = T.a.useContext(I.a).featureSwitches,
            m = T.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var a = t.rules,
                    n = t.theme
                  return T.a.createElement(We.b, {
                    badgeStyle: Je.badgeStyle,
                    headerContainerStyle: Je.rulesHeader,
                    heading: Ze,
                    ruleContainerStyle: Je.ruleContainerStyle,
                    rules: a,
                    theme: n,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var p = t.theme,
              h = ke.a.getCommunityUIColorName(p),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return T.a.createElement(
              W.a,
              { style: Je.container },
              o ? T.a.createElement(Qe.a, null) : null,
              T.a.createElement(
                Pe.a,
                {
                  onDismiss: function () {
                    return d(!1)
                  },
                  onOpen: function () {
                    return d(!0)
                  },
                  renderContent: m,
                },
                T.a.createElement(
                  q.a,
                  i()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Je.button,
                    },
                    f,
                  ),
                  Xe,
                ),
              ),
            )
          }
          return null
        }),
        et = a('ii+P'),
        tt = a('4zmP'),
        at = B.a.g46f363d,
        nt = { viewType: 'rule_education' },
        it = function () {
          var e = Object(et.a)(pe.g),
            t = Ue()(e, 2),
            a = t[0],
            n = t[1]
          return (
            T.a.useEffect(
              function () {
                return n
              },
              [n],
            ),
            a
              ? T.a.createElement(
                  W.a,
                  { style: rt.container },
                  T.a.createElement(tt.a, { behavioralEventContext: nt, onClose: n, text: at, withCloseButton: !0 }),
                )
              : null
          )
        },
        rt = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        ot = T.a.memo(it),
        st = a('H7Rt'),
        lt = a('m3Bd'),
        ct = a.n(lt),
        dt = a('yZqq'),
        ut = function (e, t) {
          return Object(pe.A)(e, pe.q)
        },
        mt = Object(M.a)()
          .propsFromState(function () {
            return { shouldShowEducation: ut }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(pe.w)(pe.q)
              },
            }
          }),
        pt = B.a.aa65a449,
        ht = { viewType: 'persistent_conversation_controls_education' }
      var ft = F.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        gt = mt(function (e) {
          var t = e.addEducationFlag,
            a = e.buttonRef,
            n = e.shouldShowEducation,
            i = T.a.useContext(I.a).featureSwitches,
            r = T.a.useState(),
            o = Ue()(r, 2),
            s = o[0],
            l = o[1],
            c = function () {
              t()
            }
          return (
            T.a.useEffect(function () {
              return c
            }, []),
            T.a.useEffect(
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
              ? T.a.createElement(
                  W.a,
                  { style: ft.container },
                  T.a.createElement(tt.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: ht,
                    onClose: c,
                    text: pt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        vt = a('FGLp'),
        yt = a('Irs7'),
        bt = a('DlMI'),
        _t = a('gBde'),
        Ct = a('gUPl'),
        Tt = a('cOhU'),
        wt = ['analytics'],
        xt = T.a.createElement(bt.a, null),
        Et = T.a.createElement(_t.a, null),
        St = T.a.createElement(Ct.a, null),
        It = T.a.createElement(Tt.a, null),
        Rt = 'conversation_control',
        At = { viewType: Rt },
        Mt = Object.freeze({
          all: { icon: xt, label: B.a.i8ea6d4e },
          community: { icon: St, label: B.a.ec5a4a25 },
          by_invitation: { icon: Et, label: B.a.b4543009 },
          community_members: { icon: It, label: B.a.i13be5a0 },
          super_followers_exclusive: { icon: xt, label: B.a.f8393bda },
          trusted_friends_tweet: { icon: xt, label: B.a.c0857ccd },
        }),
        kt =
          (Object.freeze(['community', 'by_invitation']),
          Object(yt.a)(function (e) {
            var t = e.analytics,
              a = ct()(e, wt),
              n = e.disabled,
              i = e.value,
              r = Mt[i],
              o = r.icon,
              s = r.label,
              l = T.a.useState(!1),
              c = Ue()(l, 2),
              d = c[0],
              u = c[1],
              m = T.a.useRef(null)
            Object(vt.a)(function () {
              i !== st.a.all && i !== st.a.community_members && u(!0)
            })
            var p = T.a.useCallback(
              function (e) {
                t.scribe({ element: Rt, action: 'click' })
              },
              [t],
            )
            return T.a.createElement(
              R.a,
              { behavioralEventContext: At },
              d ? T.a.createElement(gt, { buttonRef: m.current }) : null,
              T.a.createElement(
                W.a,
                { style: Pt.controlsContainer },
                T.a.createElement(
                  dt.a,
                  a,
                  T.a.createElement(
                    q.a,
                    { disabled: n, icon: o, onPress: p, ref: m, size: 'xSmall', style: Pt.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        Pt = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        Dt = a('krmn'),
        Ot = a('cIoY'),
        Lt = a('w3n3'),
        Ft = a('MLl7'),
        Nt = a('1auM'),
        Bt = a('07FG'),
        Vt = a('Q8CU'),
        jt = a('QbaN'),
        zt = a('VPdC'),
        Ht = a('WPfJ'),
        Ut = F.a.create(function (e) {
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
              zIndex: Ht.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: Ht.e },
            iconEmojiPicker: { zIndex: Ht.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: Ht.a,
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
        Wt = B.a.bdbcdd93,
        Gt = function (e) {
          var t = e.media,
            a = e.mediaAttachDisabled,
            n = e.onFilesAdded,
            i = e.setActiveParentKey,
            r = a || t.length >= 4,
            o = t.length < 3
          return T.a.createElement(zt.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? Wt : void 0,
            disabled: r,
            multiple: o,
            onChange: n,
            onPress: i,
            style: [Ut.toolBarButton, Ut.firstToolBarButton],
            type: 'brandText',
          })
        },
        qt = a('oQhu'),
        Kt = a('p+r5'),
        Qt = a('GWvE'),
        Xt = (function (e) {
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
            m()(a, [
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
                  return T.a.createElement(
                    W.a,
                    { style: Yt.root },
                    T.a.createElement(Kt.a, {
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
                      style: Yt.formTextInput,
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
                    (this.value && !Object(Qt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            a
          )
        })(T.a.Component)
      _()(Xt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Yt = F.a.create(function (e) {
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
        Zt = Xt,
        Jt = (a('Blm6'), a('TJCb'), a('DZ+c'), a('mtvn')),
        $t = a('6XNv'),
        ea = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a() {
            return d()(this, a), t.apply(this, arguments)
          }
          return (
            m()(a, [
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
                    d = Object(Jt.a)(r, i + 1).map(function (e) {
                      return { label: ''.concat(B.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return T.a.createElement($t.a, {
                    disabled: l,
                    label: a,
                    onChange: o,
                    options: d,
                    style: [ta.selector, !n && ta.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            a
          )
        })(T.a.PureComponent)
      _()(ea, 'defaultProps', { last: !1 })
      var ta = F.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        aa = ea,
        na = 'addPollChoice',
        ia = 'selectPollDays',
        ra = 'selectPollHours',
        oa = 'selectPollMinutes',
        sa = 'removePollButton',
        la = B.a.caf8edc4,
        ca = B.a.g93586be,
        da = B.a.d073b644,
        ua = B.a.a2f0728e,
        ma = (function (e) {
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
            m()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    a = e.style
                  return T.a.createElement(
                    W.a,
                    { style: a },
                    T.a.createElement(O.b, { style: pa.durationLabel }, t ? la : ''),
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
                  return T.a.createElement(
                    W.a,
                    { style: pa.durationControls },
                    T.a.createElement(aa, {
                      editable: t && a,
                      label: ca,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: ia,
                      value: i,
                    }),
                    T.a.createElement(aa, {
                      editable: t && a,
                      label: da,
                      max: 7 === i ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: ra,
                      value: r,
                    }),
                    T.a.createElement(aa, {
                      editable: t && a,
                      label: ua,
                      last: !0,
                      max: 7 === i ? 0 : 59,
                      min: 0 === i && 0 === r ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: oa,
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
        })(T.a.Component)
      _()(ma, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var pa = F.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        ha = ma,
        fa = a('iY63'),
        ga = a('jtO7'),
        va = B.a.g589c2e1,
        ya = B.a.a1e6c3a1,
        ba = B.a.a739e006,
        _a = B.a.d89a5b92,
        Ca = B.a.c2a8118d,
        Ta = B.a.a8ede1de,
        wa = B.a.af40a8ef,
        xa = (function (e) {
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
            m()(a, [
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
                    l = T.a.createElement(
                      W.a,
                      { style: Ea.rightColumn },
                      s < 4
                        ? T.a.createElement(q.a, {
                            accessibilityLabel: Ta,
                            disabled: !(t && i),
                            hoverLabel: { label: wa },
                            icon: T.a.createElement(fa.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: Ea.addButton,
                            testID: na,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return T.a.createElement(
                    W.a,
                    { style: Ea.choicesAndAddButton },
                    T.a.createElement(
                      W.a,
                      { style: Ea.choices },
                      T.a.createElement(Zt, {
                        autoFocus: o,
                        defaultValue: n[0],
                        editable: t && i,
                        label: va,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      T.a.createElement(Zt, {
                        defaultValue: n[1],
                        editable: t && i,
                        label: ya,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? T.a.createElement(Zt, {
                            autoFocus: o,
                            defaultValue: n[2],
                            editable: t && i,
                            label: ba,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? T.a.createElement(Zt, {
                            autoFocus: o,
                            defaultValue: n[3],
                            editable: t && i,
                            label: _a,
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
                  return T.a.createElement(
                    W.a,
                    { style: Ea.root },
                    this._renderChoices(),
                    T.a.createElement(ha, {
                      editable: t,
                      initialDuration: a,
                      isActive: n,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: Ea.durationPicker,
                    }),
                    T.a.createElement(
                      W.a,
                      { style: Ea.removePollButton },
                      T.a.createElement(ga.a, { color: 'red500', label: Ca, onPress: i, testID: sa }),
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
        })(T.a.Component),
        Ea = F.a.create(function (e) {
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
        Sa = Object(yt.a)(xa),
        Ia = a('+d3d'),
        Ra = ['onChange'],
        Aa = function (e) {
          var t = e.composerIndex,
            a = e.editable,
            n = e.initialChoices,
            r = e.initialDuration,
            o = e.isActive,
            s = e.isPollValid,
            l = e.updateComposer,
            c = Object(yt.b)(),
            d = T.a.useMemo(
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
            m = ct()(d, Ra),
            p = T.a.useMemo(
              function () {
                return Object(Ia.a)(
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
            h = T.a.useCallback(
              function () {
                p.flush()
              },
              [p],
            )
          return T.a.createElement(
            Sa,
            i()({ editable: a, initialChoices: n, initialDuration: r, isActive: o, onBlur: h, onChange: p }, m),
          )
        },
        Ma = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        ka = B.a.i859676b,
        Pa = T.a.createElement(
          B.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          T.a.createElement(
            O.b,
            { link: '/settings/audience_and_tagging', style: Ma.link, withInteractiveStyling: !0, withUnderline: !0 },
            B.a.c9a48d3f,
          ),
        )
      function Da() {
        return T.a.createElement(W.a, { style: Ma.container }, T.a.createElement(tt.a, { headline: ka, text: Pa }))
      }
      var Oa = a('b5s6'),
        La = a('rcen'),
        Fa = a('zmS9'),
        Na = 'addButton',
        Ba = 'addSubtitlesLabel',
        Va = 'altTextLabel',
        ja = 'tagPeopleLabel',
        za = 'attachments',
        Ha = 'createPollButton',
        Ua = 'geoButton',
        Wa = 'gifSearchButton',
        Ga = 'scheduleOption',
        qa = 'taggedUsersLabel',
        Ka = 'tweetTextarea_',
        Qa = 'toolBar',
        Xa = 'scheduledTweetIndicator',
        Ya = a('xM7j'),
        Za = a('6OUF'),
        Ja = a('tZIO'),
        $a = a('5mJL'),
        en = a('DNho'),
        tn = a('jhWN'),
        an = a('rFBM'),
        nn = a('zfvc'),
        rn = a('Ujvi'),
        on = a('yTN1'),
        sn = a('gpVt'),
        ln = a('hOZg'),
        cn = a('ll3R'),
        dn = a('J0mu'),
        un = a('EfHu'),
        mn = a('KrGU'),
        pn = a('boUI'),
        hn = a('6ZHn'),
        fn = a('/WPq'),
        gn = a('wpLu'),
        vn = a('pHub'),
        yn = a('8A5z'),
        bn = a('pKoL'),
        _n = a('ZvMt'),
        Cn = a('9Xij'),
        Tn = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a() {
            return d()(this, a), t.apply(this, arguments)
          }
          return (
            m()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    a = e.style
                  return T.a.createElement(W.a, { style: a }, this._renderImageGroup(t.length))
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
                    r = F.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      s,
                      l = F.a.theme.aspectRatios.minTimelineImage,
                      c = F.a.theme.aspectRatios.maxTimelineImage
                    r = _n.a.getImageAspectRatio(l, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return T.a.createElement(
                    Cn.a,
                    { ratio: t ? r : i / n },
                    T.a.createElement(W.a, { style: wn.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return T.a.createElement(
                    Cn.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    T.a.createElement(
                      W.a,
                      { style: wn.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, wn.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return T.a.createElement(
                    Cn.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    T.a.createElement(
                      W.a,
                      { style: wn.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, wn.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return T.a.createElement(
                    Cn.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    T.a.createElement(
                      W.a,
                      { style: wn.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], wn.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return T.a.createElement(
                    W.a,
                    { style: [wn.column, t] },
                    this._renderMediaAtIndex(e[0], wn.gutterBottom),
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
                    m = o.onEditSensitiveWarning,
                    p = o.onRemoveMedia,
                    h = o.onSetMediaPreviewRef,
                    f = c[e],
                    g = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.altText,
                    v = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.defaultAltText,
                    y = !(
                      null === (i = f.mediaMetadata) ||
                      void 0 === i ||
                      null === (r = i.sensitiveMediaWarning) ||
                      void 0 === r ||
                      !r.size
                    ),
                    b = u && s && l,
                    _ = b && y && !!m
                  return T.a.createElement(bn.a, {
                    accessibilityLabel: g || v,
                    accessibilityRole: 'group',
                    enableGif: l,
                    key: f.id,
                    mediaItem: f,
                    onClick: d ? d(f.id) : void 0,
                    onEdit: u ? u(f.id) : void 0,
                    onEditSensitiveWarning: m && _ ? m(f.id) : void 0,
                    onRemove: p(f.id),
                    ref: h,
                    style: [wn.mediaContainer, t],
                    withAltTextLabel: !!g,
                    withCloseButton: s && l,
                    withEditButton: b,
                    withEditSensitiveWarningButton: _,
                  })
                },
              },
            ]),
            a
          )
        })(T.a.Component)
      _()(Tn, 'contextType', I.a)
      var wn = F.a.create(function (e) {
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
        xn = a('S1qy'),
        En = a.n(xn),
        Sn = a('cjAp'),
        In = a.n(Sn),
        Rn = B.a.f0afcc0e,
        An = B.a.ha5e2e79,
        Mn = B.a.a3de3b68,
        kn = B.a.cc2b28fc,
        Pn = B.a.g45af04e,
        Dn = B.a.j1d5791c,
        On = B.a.ee9c4013,
        Ln = B.a.af40a8ef,
        Fn = B.a.e68b09b4,
        Nn = B.a.ec10ee02,
        Bn = B.a.h735a98d,
        Vn = B.a.c4ccfbe2,
        jn = B.a.j499fbcb,
        zn = B.a.b7d8e3f0,
        Hn = B.a.d1175c78,
        Un = B.a.bf4e9d79,
        Wn = B.a.e0342f98,
        Gn = B.a.e349147b,
        qn = B.a.e3a24e4b,
        Kn = B.a.fbd24526,
        Qn = B.a.de4669e2,
        Xn = B.a.d2c7a41c,
        Yn = B.a.f7364fa1,
        Zn = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Jn = B.a.ia24dc8c,
        $n = T.a.createElement(ln.a, null),
        ei = T.a.createElement(fa.a, null),
        ti = T.a.createElement(cn.a, null),
        ai = T.a.createElement(dn.a, null),
        ni = { viewType: 'schedule_tweet' },
        ii = { viewType: 'add_poll' },
        ri = { viewType: 'add_composer' },
        oi = { viewType: 'tag_location' },
        si = (function (e) {
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
                Object(qt.a)(function () {
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
                    (i.conversationControlsValue !== st.a.community_members &&
                      i.conversationControlsValue !== st.a.super_followers_exclusive &&
                      i.conversationControlsValue !== st.a.trusted_friends_tweet) ||
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
                    o === st.a.community_members ||
                    o === st.a.super_followers_exclusive ||
                    o === st.a.trusted_friends_tweet ||
                    r._isScheduled()
                return s
                  ? T.a.createElement(kt, { disabled: l, onChange: r._handleConversationControlsValueChange, value: o })
                  : null
              }),
              _()(h()(r), '_renderTaggedLocation', function (e) {
                return T.a.createElement(
                  W.a,
                  { style: Ut.taggedLocationContainer },
                  T.a.createElement(
                    q.a,
                    {
                      icon: T.a.createElement(un.a, null),
                      onPress: r._handleGeoButtonClick,
                      size: 'xSmall',
                      style: Ut.taggedLocationButton,
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
                  m = a.pollActive,
                  p = a.quotedStatus,
                  h = a.text,
                  f = Object(sn.b)(h) || (d && !Object(Bt.a)(d) && [d]),
                  g = !!u.length || m || !!p,
                  v = r.props.typeaheadWrapper,
                  y = !r._isEmpty()
                return T.a.createElement(
                  W.a,
                  { style: Ut.textInputArea },
                  T.a.createElement(
                    W.a,
                    { style: i ? Ut.inputStyle : Ut.collapsedInputStyle },
                    r._renderAudienceControls(y),
                    T.a.createElement(
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
                      ? T.a.createElement(sn.a, { index: n, isCardPreviewTombstoned: Object(Bt.a)(d), urls: f })
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
                  m = t.isLast,
                  p = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  v = r.state.isFocused,
                  y = n.text,
                  b = 0 === s && m,
                  _ = !!g,
                  C = g || {},
                  w = C.dismissComposerCommandName,
                  x = C.element,
                  E = C.sendTweetCommandName,
                  S = u && !g && !c,
                  I = g
                    ? {
                        onChange: r._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: w,
                          editorState: r.state.editorState,
                          element: x,
                          sendTweetCommandName: E,
                        },
                      }
                    : { onChange: r._getHandlePlainTextChange(e) }
                return T.a.createElement(
                  Za.a,
                  i()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: Mn,
                      autoFocus: a || (l && !d),
                      closeButton:
                        l && (r._deleteNonemptyTweetstormComposerEnabled || r._isEmpty()) && !b
                          ? r._renderCloseButton()
                          : void 0,
                      contentBelow: r._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [Ut.textInputStyle, S && Ut.textInputMobileCollapsed],
                      keyCommandHandlers: p,
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
                      testID: ''.concat(Ka).concat(s),
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
                Object(qt.a)(function (e) {
                  return function (t) {
                    e(t), r._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                h()(r),
                '_getHandlePlainTextChange',
                Object(qt.a)(function (e) {
                  return function (t) {
                    e(t), r._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(h()(r), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = r.props,
                  t = e.index,
                  a = e.isCommunityTweetFromProtectedUser
                return 0 === t && a ? T.a.createElement(Da, null) : null
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
                  ? T.a.createElement(ze, {
                      audienceControlsValue: a,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: i && s,
                      onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(h()(r), '_renderCommunitiesRulesEducation', function () {
                return r.shouldRenderCommunitiesRules ? T.a.createElement(ot, null) : null
              }),
              _()(h()(r), '_renderCommunitiesRules', function (e) {
                var t = r.props.audienceControlsValue.communityIdValue || void 0
                return r.shouldRenderCommunitiesRules && t
                  ? T.a.createElement($e, { selectedCommunityId: t, showMiddot: !e })
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
                return T.a.createElement(Fa.a, {
                  onPress: r._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Xa,
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
                return T.a.createElement(Dt.a, {
                  onEmojiSelect: r._handleInsertEmoji,
                  size: 'medium',
                  style: r._getEmojiPickerButtonStyles(),
                  textInputRef: r._textInputRef || void 0,
                })
              }),
              _()(
                h()(r),
                '_getEmojiPickerButtonStyles',
                Object(qt.a)(function () {
                  return [Ut.iconEmojiPicker, Ut.toolBarButton]
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
                  m = t.conversationControlsValue !== st.a.all
                return Boolean(o || !u || (s && '' === l && !n.length) || m || i.length > 0)
              }),
              _()(h()(r), '_renderSchedulingButton', function () {
                return T.a.createElement(q.a, {
                  accessibilityLabel: An,
                  behavioralEventContext: ni,
                  disabled: r._isSchedulingDisabled(),
                  hoverLabel: { label: Bn },
                  icon: ai,
                  onClick: r._handleClickScheduler,
                  size: 'medium',
                  style: Ut.toolBarButton,
                  testID: Ga,
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
                return T.a.createElement(q.a, {
                  accessibilityLabel: On,
                  hoverLabel: { label: Fn },
                  icon: $n,
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
                var m = r.hasAttachedVideo && (r._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return T.a.createElement(
                  W.a,
                  { onClick: r._handleFocus, style: [Ut.attachmentContainer, Ut.tweetAttachmentArea], testID: za },
                  s.length > 0
                    ? T.a.createElement(Tn, {
                        editable: a,
                        isActive: i,
                        media: s,
                        onClickMedia: r.hasAttachedImage ? r._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: r.hasAttachedImage
                          ? r._handleClickMediaDetail('crop')
                          : m
                          ? r._handleClickMediaDetail(m)
                          : void 0,
                        onEditSensitiveWarning:
                          r.hasAttachedImage || r.hasAttachedVideo
                            ? r._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: r._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: r._handleSetMediaPreviewRef,
                        style: Ut.mediaPreview,
                      })
                    : null,
                  i ? r._renderMediaActions() : null,
                  l
                    ? T.a.createElement(Aa, {
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
                  ? T.a.createElement(
                      Ya.a,
                      null,
                      T.a.createElement(La.a, {
                        entities: a.richText.entities,
                        rtl: a.richText.rtl,
                        text: a.richText.text,
                      }),
                    )
                  : T.a.createElement(Oa.a, {
                      isCondensed: t.length > 0,
                      style: Ut.quoteTweet,
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
                  m = !!d,
                  p = !s && !i,
                  h = !s && !o,
                  f = r.context.featureSwitches.isTrue('responsive_web_reply_storm_enabled'),
                  g = e && (!l || c || f)
                return T.a.createElement(
                  W.a,
                  { style: Ut.toolBar, testID: Qa },
                  T.a.createElement(
                    W.a,
                    { style: Ut.toolBarIconsContainer },
                    T.a.createElement(Gt, {
                      media: n,
                      mediaAttachDisabled: r.mediaAttachDisabled,
                      onFilesAdded: r._handleFilesAdded,
                      setActiveParentKey: u,
                    }),
                    r._renderGifButton(),
                    p ? r._renderPollButton() : null,
                    m ? r._renderEmojiPicker() : null,
                    h ? r._renderSchedulingButton() : null,
                    r._renderGeoButton(),
                  ),
                  T.a.createElement(
                    W.a,
                    { style: Ut.toolBarIconsContainer },
                    e ? r._renderCountdownCircle() : null,
                    g &&
                      T.a.createElement(
                        T.a.Fragment,
                        null,
                        T.a.createElement(W.a, { style: Ut.separator }),
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
                var t = Ja.a.replaceCarriageReturns(e.target.value)
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
                n ? a({ text: kn }) : i(e)
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
                return Jn(Math.ceil(e / r._userLanguageWeight))
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
                  ? Qn
                  : a
                  ? Yn
                  : r.isReplyOrReplyThread && 0 === i
                  ? Xn
                  : o && !s && i > 0
                  ? Kn
                  : s || i > 0
                  ? qn
                  : Gn
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
                Object(qt.a)(function (e) {
                  var t = In.a[r.props.twitterTextConfigurationVersion]
                  return En()(e, t)
                }),
              ),
              _()(h()(r), '_isEmpty', function () {
                var e = r.props.data
                return Object(Vt.c)(e)
              }),
              _()(h()(r), '_isScheduled', function () {
                var e = r.props.data.scheduledFor
                return Object(jt.h)(e)
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
              (r._userLanguageWeight = l && Zn.indexOf(l) > -1 ? 2 : 1),
              r._autotagLocationIfNeeded(),
              (r.state = { editorState: c ? c(o) : null, hasOverflowStyle: !1, isFocused: !1 }),
              r
            )
          }
          return (
            m()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof Nt.a) && e.mediaFile.isVideo
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
                    m = l < F.a.theme.breakpoints.small
                  return T.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [Ut.root, !n && Ut.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    T.a.createElement(
                      $a.a,
                      {
                        avatarCell: T.a.createElement(
                          T.a.Fragment,
                          null,
                          c
                            ? T.a.createElement(en.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return T.a.createElement(tn.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: Ut.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: r,
                                })
                              })
                            : null,
                          o
                            ? null
                            : T.a.createElement(W.a, {
                                style: [Ut.conversationLine, !c && Ut.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: i ? Ut.avatarContainerExpanded : Ut.avatarContainer,
                        cellStyle: Ut.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      T.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: Ut.inputArea },
                        T.a.createElement(
                          an.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: Ut.dragDrop,
                          },
                          function (t) {
                            return T.a.createElement(
                              T.a.Fragment,
                              null,
                              T.a.createElement(W.a, { style: Ut.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      T.a.createElement(
                        W.a,
                        { style: [(u || a) && Ut.controlsContainer, m ? Ut.mobileControlsLayout : Ut.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(m),
                        a ? this._renderTaggedLocation(a) : null,
                      ),
                      T.a.createElement(nn.b, { show: n && i }, this._renderToolbar(d)),
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
                  return T.a.createElement(Lt.a, {
                    enabled: !s,
                    gifSearchKeySource: Ft.a.Composition,
                    history: i,
                    onPress: o,
                    testID: Wa,
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
                  return T.a.createElement(q.a, {
                    accessibilityLabel: Rn,
                    behavioralEventContext: ii,
                    disabled: s,
                    hoverLabel: { label: Nn },
                    icon: ti,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: Ut.toolBarButton,
                    testID: Ha,
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
                    r = t ? T.a.createElement(un.a, null) : T.a.createElement(mn.a, null)
                  return T.a.createElement(q.a, {
                    accessibilityLabel: Vn,
                    behavioralEventContext: oi,
                    disabled: i,
                    hoverLabel: { label: Vn },
                    icon: r,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: Ut.toolBarButton,
                    testID: Ua,
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
                  return T.a.createElement(
                    W.a,
                    { style: Ut.imageActions },
                    t && t.url && t.provider
                      ? T.a.createElement(
                          W.a,
                          { style: Ut.addImageTextPadding },
                          T.a.createElement(Ot.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !r) || this._isScheduled()
                      ? null
                      : T.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: Hn,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [Ut.addImageTextContainer, Ut.addImageTextPadding],
                          },
                          n ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || i
                      ? T.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: jn({ numberOfImages: a.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: a[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: Ut.addImageTextContainer,
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
                  return T.a.createElement(
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: ja },
                    T.a.createElement(pn.a, { style: Ut.addImageActionIcon }),
                    Hn,
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
                  return T.a.createElement(
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: qa },
                    T.a.createElement(hn.a, { style: Ut.addImageActionIcon }),
                    T.a.createElement(rn.a, { loggedInUserId: null == a ? void 0 : a.id_str, users: n }),
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
                      ? T.a.createElement(
                          O.b,
                          { color: 'gray700', size: 'subtext2', testID: Va },
                          T.a.createElement(gn.a, { style: Ut.addImageActionIcon }),
                          zn({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : T.a.createElement(
                          O.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: Va },
                          T.a.createElement(gn.a, { style: Ut.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : T.a.createElement(
                        O.b,
                        { color: 'gray700', size: 'subtext2', testID: Va },
                        T.a.createElement(fn.a, { style: Ut.addImageActionIcon }),
                        jn({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? vn.a : yn.a
                  return T.a.createElement(
                    O.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: Ut.addImageTextContainer,
                      testID: Ba,
                    },
                    T.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Wn : void 0,
                      style: Ut.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Un,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    a = e.twitterTextConfigurationVersion,
                    n = In.a[a],
                    i = this._getParsedTweet(t).weightedLength
                  return T.a.createElement(on.a, {
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
                  return T.a.createElement(q.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? Dn : Pn,
                    behavioralEventContext: ri,
                    disabled: l,
                    hoverLabel: { label: Ln },
                    icon: ei,
                    link: l ? void 0 : t,
                    onPress: r,
                    size: 'xSmall',
                    testID: Na,
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
                      return e.mediaFile && !(e.mediaFile instanceof Nt.a) && e.mediaFile.isVideo
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
                      return e.mediaFile && !(e.mediaFile instanceof Nt.a) && e.mediaFile.isVideo
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
        })(T.a.Component)
      _()(si, 'contextType', I.a),
        _()(si, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var li = Object(yt.a)(si),
        ci = T.a.createElement(O.b, { weight: 'bold' }),
        di = T.a.createElement(O.b, { color: 'link' }),
        ui = function (e) {
          return '@'.concat(e)
        },
        mi = a('SrIh'),
        pi = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        hi = function (e) {
          var t = e.communityName,
            a = e.excludedRecipients,
            n = e.inReplyToStatus,
            i = e.loggedInUserId,
            r = {
              replyToOne: function (e) {
                var t = e.userName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  T.a.cloneElement(di, null, B.a.b50e199a({ userName: ui(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  a = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  T.a.cloneElement(di, null, B.a.f2e4dd37({ replyUserName: ui(t), otherUserName: ui(a) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  a = e.userThreeName,
                  n = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  T.a.cloneElement(
                    di,
                    null,
                    B.a.eccfddc3({ userOneName: ui(t), userTwoName: ui(n), userThreeName: ui(a) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  a = e.userOneName,
                  n = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  T.a.cloneElement(di, null, B.a.h758cd22({ userOneName: ui(a), userTwoName: ui(n), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  a = e.userName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  T.a.cloneElement(di, null, B.a.e9f8a0eb({ userName: ui(a) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  a = e.userOneName,
                  n = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  T.a.cloneElement(di, null, B.a.df7e9fbc({ replyUserName: ui(a), otherUserName: ui(n) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  a = e.userOneName,
                  n = e.userThreeName,
                  i = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  T.a.cloneElement(
                    di,
                    null,
                    B.a.b45fa505({ userOneName: ui(a), userTwoName: ui(i), userThreeName: ui(n) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  a = e.othersCount,
                  n = e.userOneName,
                  i = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  T.a.cloneElement(di, null, B.a.a4383815({ userOneName: ui(n), userTwoName: ui(i), othersCount: a })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  T.a.cloneElement(di, null, B.a.ff792e35({ userName: ui(t) })),
                  T.a.cloneElement(ci, null, B.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  a = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  T.a.cloneElement(di, null, B.a.g7d5e985({ replyUserName: ui(t), otherUserName: ui(a) })),
                  T.a.cloneElement(ci, null, B.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  a = e.userThreeName,
                  n = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  T.a.cloneElement(
                    di,
                    null,
                    B.a.fe5a61e9({ userOneName: ui(t), userTwoName: ui(n), userThreeName: ui(a) }),
                  ),
                  T.a.cloneElement(ci, null, B.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  a = e.userOneName,
                  n = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  T.a.cloneElement(di, null, B.a.bc9dd514({ userOneName: ui(a), userTwoName: ui(n), othersCount: t })),
                  T.a.cloneElement(ci, null, B.a.de5071ba),
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
            u = Ue()(d, 2),
            m = u[0],
            p = u[1],
            h = [c, m, p].map(pi),
            f = Ue()(h, 3),
            g = f[0],
            v = f[1],
            y = f[2],
            b = o.length - 2
          switch (o.length) {
            case 0:
              return Object(mi.a)('Compose reply context should not have 0 recipients'), null
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
        fi = T.a.memo(hi),
        gi = a('fs1G'),
        vi = a('BLtI'),
        yi = a('kY28')
      function bi(e) {
        null == e || e.preventDefault()
      }
      var _i = F.a.create(function (e) {
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
        Ci = function (e) {
          var t = e.communityName,
            a = e.excludedRecipients,
            n = e.inReplyToStatus,
            i = e.loggedInUserId,
            r = e.onPress,
            o = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return T.a.createElement(
            W.a,
            null,
            l
              ? T.a.createElement(vi.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: gi.a,
                  onAvatarClick: bi,
                  onEntityClick: bi,
                  onMediaClick: bi,
                  onReplyContextClick: bi,
                  replyContext: yi.a.ReplyContextTypes.None,
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
            T.a.createElement(
              W.a,
              { style: _i.replyUsersContainer },
              T.a.createElement(
                $a.a,
                {
                  avatarCell: l ? T.a.createElement(W.a, { style: _i.conversationLine }) : null,
                  avatarCellStyle: _i.conversationLineContainer,
                  cellStyle: _i.repliesTextContainer,
                  style: _i.grid,
                },
                o
                  ? T.a.createElement(
                      O.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: r, style: l && _i.repliesMessage },
                      T.a.createElement(fi, {
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
        Ti = a('Tb0w'),
        wi = a('1YZw'),
        xi = a('pidX'),
        Ei = a('5oBF'),
        Si = a('JYYi'),
        Ii = a('/Rsk'),
        Ri = a('qlwE'),
        Ai = a('XOJV'),
        Mi = a('G6rE'),
        ki = a('AspN'),
        Pi = a('oEGd'),
        Di = a('2iUg'),
        Oi = a('P1r1'),
        Li = ['mediaIds'],
        Fi = function (e) {
          return e.parentTweetId || (e.isInline ? Si.a.homeTimeline : Si.a.modal)
        },
        Ni = function (e, t) {
          var a = Fi(t)
          return se.k(e, a)
        },
        Bi = function (e, t) {
          var a = Fi(t)
          return se.l(e, a)
        },
        Vi = function (e, t) {
          var a = Fi(t)
          return se.j(e, a)
        },
        ji = function (e, t) {
          var a = Qi(e, t),
            n = Vi(e, t).communityIdValue || void 0,
            i = (null == a ? void 0 : a.community_id_str) || n,
            r = i ? A.c.select(e, i) : void 0
          return r ? r.name : void 0
        },
        zi = function (e, t) {
          var a = Fi(t)
          return se.m(e, a)
        },
        Hi = function (e, t) {
          var a = Fi(t)
          return se.i(e, a)
        },
        Ui = function (e) {
          return function (t, a) {
            var n = (function (e, t) {
              return t.location.state
            })(0, a)
            return n ? e(n) : void 0
          }
        },
        Wi = Object(de.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          Mi.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Gi = function (e, t) {
          return t.parentTweetId || qi(e, t) || Ki(e, t)
        },
        qi = function (e, t) {
          var a = t.location.query
          return a && 'string' == typeof a.in_reply_to ? a.in_reply_to : void 0
        },
        Ki = Ui(function (e) {
          return e.inReplyToStatusId
        }),
        Qi = function (e, t) {
          var a = Gi(e, t)
          return a ? Ai.a.selectHydrated(e, a) : void 0
        },
        Xi = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Yi = Ui(function (e) {
          return e.hasArticleNudge
        }),
        Zi = Ui(function (e) {
          return e.convoCardData
        }),
        Ji = Ui(function (e) {
          return e.externalMedia
        }),
        $i = Ui(function (e) {
          return e.externalMediaFiles
        }),
        er = Ui(function (e) {
          return e.previewTweetId
        }),
        tr = Ui(function (e) {
          return e.defaultText
        }),
        ar = function (e, t) {
          var a = tr(e, t),
            n = Object(xi.a)(t.location)
          return (Xi(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            n
            ? n
            : a
        },
        nr = Ui(function (e) {
          return e.quotedStatusId
        }),
        ir = Ui(function (e) {
          return e.quotedStatus
        }),
        rr = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : ir(e, t)
            })(e, t) ||
            (function (e, t) {
              var a = nr(e, t)
              return a ? Ai.a.selectHydratedMemoized(e, a) : void 0
            })(e, t)
          )
        },
        or = Ui(function (e) {
          return e.isSelfThreadReply
        }),
        sr = Ui(function (e) {
          return e.positionCursorAtBeginning
        }),
        lr = Ui(function (e) {
          return e.promotedContent
        }),
        cr = function () {
          return Object(de.createSelector)(Ni, ar, rr, ki.j, function (e, t, a, n) {
            return e.map(function (e, i) {
              return l()(
                l()({}, ((r = e).mediaIds, ct()(r, Li))),
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
        dr = {
          addComposer: se.a,
          addToast: wi.b,
          createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: se.b,
          deletePreviewTweet: Ei.c,
          fetchAltTextPromptPreferenceIfNeeded: Di.a,
          fetchAutotaggedLocationIfNeeded: Ii.a,
          fetchTweetIfNeeded: Ai.a.fetchOneIfNeeded,
          removeComposer: se.e,
          resetDraft: se.f,
          retweet: Ai.a.retweet,
          schedule: se.h,
          draftTweet: se.d,
          send: se.q,
          updateActiveComposerIndex: se.s,
          updateAudienceControlsValue: se.t,
          updateConvoCardState: Ti.b,
          preUploadMedia: ki.e,
          addMedia: ki.b,
          processMultipleMedia: ki.g,
          removeMediaUpload: ki.i,
          updateSingleComposer: se.w,
          setActiveParentKey: se.r,
          copyDataFromInlineComposerToModalComposer: se.c,
        },
        ur = Object(Pi.e)(function () {
          return Object(de.createStructuredSelector)({
            activeComposerIndex: Hi,
            activeUser: Wi,
            altTextNudgeType: Di.b,
            audienceControlsValue: Vi,
            composerData: cr(),
            dataSaverMode: Oi.j,
            excludedRecipients: Bi,
            externalMedia: Ji,
            externalMediaFiles: $i,
            geoEnabled: Oi.o,
            hasArticleNudge: Yi,
            inReplyToStatus: Qi,
            inReplyToStatusId: Gi,
            isIntentRoute: Xi,
            isSelfThreadReply: or,
            isSending: zi,
            isSuperFollowsCreator: me.l,
            positionCursorAtBeginning: sr,
            loggedInUser: Mi.e.selectLoggedInUser,
            prepopulatedText: ar,
            previewTweetId: er,
            promotedContent: lr,
            scheduledFor: se.n,
            selectedCommunityName: ji,
            sendingProgress: se.o,
            convoCardData: Zi,
            undoTweetSettings: Ri.p,
            userLanguage: me.o,
            quotedStatusId: nr,
          })
        }, dr),
        mr = a('45mF'),
        pr = a('c0ZR'),
        hr = a('W5XZ'),
        fr = a('Drq4'),
        gr = a('0uGn'),
        vr = a('I8M8'),
        yr = a('7myi'),
        br = a('7nmT'),
        _r = a.n(br),
        Cr = a('vbWy'),
        Tr = a('Rp9C'),
        wr = a('Q5Mu'),
        xr = a('N5qz'),
        Er = 'tweetButton',
        Sr = 'tweetButtonInline',
        Ir = Object(M.a)()
          .propsFromState(function () {
            return { loggedInUser: Mi.e.selectLoggedInUser }
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
        Rr = a('cHvH'),
        Ar = a('sgih'),
        Mr = a('xKuM'),
        kr = a('5Vk4'),
        Pr = F.a.create(function (e) {
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
        Dr = function (e) {
          var t = e.actionButtonType,
            a = e.children,
            n = e.onActionButtonClick,
            i = e.onMaskClick,
            r = e.sheetType,
            o = e.showActionButton
          return T.a.createElement(Rr.a, null, function (e) {
            var s = e.windowWidth > F.a.theme.breakpoints.small
            return T.a.createElement(
              Ar.a,
              { onMaskClick: i, style: Pr.sheetStyle, type: r, withMask: !0 },
              o &&
                T.a.createElement(Mr.a, {
                  leftControl: T.a.createElement(kr.a, { backButtonType: t, onClick: n }),
                  position: 'absolute',
                }),
              T.a.createElement(W.a, { style: [Pr.mainCard, s ? Pr.largeScreenCard : Pr.smallScreenCard] }, a),
            )
          })
        },
        Or = B.a.cb7c0987,
        Lr = B.a.de3bcf27,
        Fr = B.a.e710ce75,
        Nr = B.a.h11e5910,
        Br = B.a.b7ec04f3,
        Vr = B.a.i62a03aa,
        jr = F.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        zr = function (e) {
          var t = e.onBack,
            a = e.onNo,
            n = e.onYes
          return T.a.createElement(
            Dr,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            T.a.createElement(O.b, { size: 'title4', style: jr.itemPadding, weight: 'heavy' }, Or),
            T.a.createElement(O.b, { color: 'gray700', style: jr.itemPadding }, Lr),
            T.a.createElement(O.b, { color: 'gray700', style: jr.itemPadding }, Fr),
            T.a.createElement(
              W.a,
              { style: jr.buttonContainer },
              T.a.createElement(O.b, { size: 'title4', style: jr.itemPadding, weight: 'heavy' }, Nr),
              T.a.createElement(q.a, { onPress: n, style: jr.itemPadding, type: 'brandOutlined' }, Br),
              T.a.createElement(q.a, { onPress: a, style: jr.itemPadding, type: 'brandOutlined' }, Vr),
            ),
          )
        },
        Hr = a('cm6r'),
        Ur = F.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Wr = function (e) {
          var t = e.icon,
            a = e.label,
            n = e.onPress
          return T.a.createElement(Hr.a, { interactiveStyles: null, onPress: n }, function (e) {
            return T.a.createElement(
              T.a.Fragment,
              null,
              T.a.createElement(q.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Ur.button,
                type: 'primaryOutlined',
              }),
              T.a.createElement(O.b, { color: 'gray700' }, a),
            )
          })
        },
        Gr = a('sjK1'),
        qr = a('FDY4'),
        Kr = a('tevE'),
        Qr = a('jV+4'),
        Xr = a('UgB4'),
        Yr = a('TW8A'),
        Zr = a('hiGS'),
        Jr = a('WtWS'),
        $r = a('Lsrn'),
        eo = a('k/Ka'),
        to = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(eo.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [$r.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            T.a.createElement(
              'g',
              null,
              T.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      to.metadata = { width: 24, height: 24 }
      var ao = to,
        no = [
          { headlineText: B.a.f3a7a80c, subTextLine1: B.a.ge52d1de, subTextLine2: null },
          { headlineText: B.a.j311bf49, subTextLine1: B.a.ae42ebff, subTextLine2: B.a.aa350ab1 },
          { headlineText: B.a.j18b2956, subTextLine1: B.a.f6bee896, subTextLine2: B.a.dddd0995 },
          { headlineText: B.a.d02a94fa, subTextLine1: B.a.dddd0995, subTextLine2: null },
          { headlineText: B.a.i018b746, subTextLine1: B.a.b8d85df9, subTextLine2: B.a.d5ca11f0 },
        ],
        io = B.a.h11e5910,
        ro = B.a.abd845fd,
        oo = B.a.bea869b3,
        so = B.a.d96cf7cd,
        lo = B.a.d3145da8,
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
            m = T.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            p = no[(m = m >= 0 && m <= 4 ? m : 0)]
          return T.a.createElement(Rr.a, null, function (e) {
            var m,
              h,
              f,
              g = e.windowWidth
            return T.a.createElement(
              Dr,
              {
                actionButtonType: 'close',
                onActionButtonClick: i,
                onMaskClick: i,
                sheetType: 'full',
                showActionButton: g > F.a.theme.breakpoints.medium,
              },
              T.a.createElement(ao, { style: [co.profanityIcon, co.itemPadding] }),
              T.a.createElement(Kr.a, { size: 'title4', style: co.itemPadding, weight: 'heavy' }, p.headlineText),
              T.a.createElement(O.b, { color: 'gray700', style: co.itemPadding }, p.subTextLine1),
              T.a.createElement(O.b, { color: 'gray700', style: co.itemPadding }, p.subTextLine2),
              T.a.createElement(
                W.a,
                { style: [co.tweetContainer, co.itemPadding] },
                T.a.createElement(
                  W.a,
                  { style: co.tweetContent },
                  T.a.createElement(Qr.a, { name: c, profileImageUrl: d, screenName: u, style: co.userName }),
                  T.a.createElement(
                    W.a,
                    { style: co.tweetBody },
                    (function () {
                      if (0 === a.length) return null
                      var e = a.map(function (e) {
                        var t,
                          a,
                          n,
                          i = ''
                        if (e.externalMediaDetails) i = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Gr.c) i = e.mediaFile.thumbnail
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
                      return T.a.createElement(
                        W.a,
                        { style: co.photos },
                        T.a.createElement(qr.a, {
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
                    T.a.createElement(O.b, { style: co.textStyle }, l),
                  ),
                ),
              ),
              t
                ? T.a.createElement(
                    W.a,
                    { style: co.thanksContainer },
                    T.a.createElement(Jr.a, { style: co.thanksCheckMark }),
                    T.a.createElement(O.b, { align: 'center', style: co.itemPadding }, lo),
                  )
                : T.a.createElement(O.b, { align: 'center', onPress: s, style: co.itemPadding, withUnderline: !0 }, io),
              g > F.a.theme.breakpoints.small
                ? T.a.createElement(
                    W.a,
                    { style: co.buttonContainer },
                    T.a.createElement(q.a, { onPress: r, style: co.itemPadding, type: 'brandFilled' }, ro),
                    T.a.createElement(q.a, { onPress: o, style: co.itemPadding, type: 'brandOutlined' }, oo),
                    T.a.createElement(q.a, { onPress: n, style: co.itemPadding, type: 'destructiveText' }, so),
                  )
                : ((m = T.a.createElement(Xr.a, { style: { color: F.a.theme.colors.text } })),
                  (h = T.a.createElement(Yr.a, { style: { color: F.a.theme.colors.primary } })),
                  (f = T.a.createElement(Zr.a, { style: { color: F.a.theme.colors.red500 } })),
                  T.a.createElement(
                    W.a,
                    { style: co.mobileButtonContainer },
                    T.a.createElement(Wr, { icon: m, label: oo, onPress: o }),
                    T.a.createElement(Wr, { icon: h, label: ro, onPress: r }),
                    T.a.createElement(Wr, { icon: f, label: so, onPress: n }),
                  )),
            )
          })
        },
        mo = Ir(function (e) {
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
            m = T.a.useState(!1),
            p = Ue()(m, 2),
            h = p[0],
            f = p[1],
            g = T.a.useState(!1),
            v = Ue()(g, 2),
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
            ? T.a.createElement(zr, {
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
            : T.a.createElement(uo, {
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
        po = a('aITJ'),
        ho = a('eb3s'),
        fo = a('JYMr'),
        go = a('sCk0'),
        vo = a('3A2y'),
        yo = a('zrOZ'),
        bo = a('s1N3'),
        _o = a('4FGy'),
        Co = a('mN6z'),
        To = a('eyty'),
        wo = a('rziq'),
        xo = a('lsKC'),
        Eo = a('jTgF'),
        So = B.a.d28215f0,
        Io = B.a.ec909a54,
        Ro = B.a.jd53409d,
        Ao = {
          singular: B.a.edae65de,
          plural: B.a.a859846a,
          oneOfMultiple: B.a.e90118f5,
          someOfMultiple: B.a.c211dcb1,
        },
        Mo = { singular: B.a.d7c26bfb, plural: B.a.a75e3ccc },
        ko = B.a.dcb7e3a0,
        Po = function (e) {
          var t,
            a,
            n = e.numberOfDescriptionsMissing,
            i = n === e.numberOfImages
          return (
            1 === n
              ? ((a = Mo.singular), (t = i ? Ao.singular : Ao.oneOfMultiple))
              : ((a = Mo.plural), (t = i ? Ao.plural : Ao.someOfMultiple)),
            ''.concat(t, ' ').concat(a, ' ').concat(ko)
          )
        },
        Do = B.a.c1bf53b0,
        Oo = B.a.bb8170da,
        Lo = B.a.dad5a4b8,
        Fo = B.a.e65aed64,
        No = B.a.bc2ceaf2,
        Bo = B.a.d8222374,
        Vo = B.a.j890123a,
        jo = B.a.bb01231c,
        zo = B.a.d4ab68e2,
        Ho = B.a.d8af8a4c,
        Uo = B.a.d09d4c05,
        Wo = B.a.i2209530,
        Go = B.a.bf9b89e4,
        qo = B.a.f277e949,
        Ko = B.a.b551cd22,
        Qo = B.a.f026a7fa,
        Xo = B.a.a5d4fda0,
        Yo = B.a.ib067d6a,
        Zo = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Jo = { element: 'alt_text_prompt' },
        $o = { component: 'article_nudge' },
        es = { viewType: 'send_tweet' },
        ts = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        as = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var i, r, s
            d()(this, a),
              (s = t.call(this, e, n)),
              _()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Si.a.homeTimeline : Si.a.modal)
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
                  a = e.previewTweetId
                a && t(a)
              }),
              _()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  a = e.onHandleAppBarHeight,
                  n = _r.a.findDOMNode(s._composerRefs[t])
                if (n instanceof window.Element) {
                  var i = n.getBoundingClientRect(),
                    r = i.bottom,
                    o = i.top,
                    l = Math.max(o, window.scrollY)
                  if (l < window.pageYOffset || r > window.innerHeight) {
                    var c = a ? l - a() - 14 : l - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Zo ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
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
                !n && i && a(i).catch(t(hr.a)), !r && o && a(o).catch(t(hr.a))
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
                  : !('POP' === t && o && s._areComposersEmptyOrUnchanged && !Object(Vt.a)(n)) || (s._resetDraft(), !0)
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
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, Jo), {}, { action: 'show' })))
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
                  return T.a.createElement(Ci, {
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
                return T.a.createElement(ho.a, {
                  Icon: fr.a,
                  cancelButtonLabel: Oo,
                  confirmButtonLabel: Do({ numOfDescriptions: t }),
                  headline: Ro,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: Po({ numberOfDescriptionsMissing: t, numberOfImages: a }),
                })
              }),
              _()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  a = e.media
                return T.a.createElement(mo, {
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
                s.isInlineReply ? a(i) : n && a(Si.a.homeTimeline), t()
              }),
              _()(
                h()(s),
                '_makeAddComposerLink',
                Object(qt.a)(function (e, t, a) {
                  return Object(xo.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: a })
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
                  e ? Object(jt.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              _()(h()(s), '_handleTweetError', function (e, t) {
                return function (a) {
                  var n = s.props,
                    i = n.analytics,
                    r = n.createLocalApiErrorHandler
                  if (Object(Eo.d)(a) && a.code === vr.b.CANCELED) return i.scribeAction(e), Promise.resolve()
                  var o = Object(Eo.b)(a)
                  if (o) return s.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(mr.a)(void 0, !1)
                  r(l()({}, c))(a)
                  var d = a instanceof x.a && (null == t ? void 0 : t[a.errors[0].code])
                  s.setState({ errorMessage: { text: d ? d.toast.text : Xo } })
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
                    var n = Object(jt.c)(o.scheduledFor)
                    if (n) {
                      var i = Object(jt.b)(n),
                        r = Object(jt.i)(n),
                        c = Ko({ scheduleDate: i, scheduleTime: r })
                      t({ text: c, action: { label: qo, link: '/compose/tweet/unsent/scheduled' } }),
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
                      t({ text: Go, action: { label: qo, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(a[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', wr.a))
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
                  m = e.isSelfThreadReply,
                  p = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  g = e.send,
                  v = i.conversationControlsValue,
                  y = i.exclusivityControlValue,
                  b = void 0 === y ? void 0 : y,
                  _ = i.trustedFriendsValue,
                  C = void 0 === _ ? void 0 : _,
                  T = s.isPreview,
                  w = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  x = Object(jt.c)(w[0].scheduledFor)
                if (x) {
                  var E = Object(jt.b)(x),
                    I = Object(jt.i)(x),
                    R = Ko({ scheduleDate: E, scheduleTime: I })
                  return a({ text: R, action: { label: qo, link: '' } }), void s._close()
                }
                if (
                  (o.length > 0 && n.scribe({ element: 'mentions', action: 'edited' }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === v) n.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var A = s._getSingleComposerDataWithLatestText(w[0]).text,
                      M = Object(S.d)(A)
                    n.scribe({
                      action: M ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && n.scribe({ action: 'send_my_followers_tweet' })
                var k = (null == u ? void 0 : u.community_id_str) || i.communityIdValue || void 0,
                  P = k ? '8.31.'.concat(k) : '',
                  D = r ? (k ? [r, P].join(',') : r) : P
                g({
                  sendData: w,
                  communityIdValue: k,
                  conversationControlsValue: v,
                  excludedRecipients: o,
                  exclusivityControlValue: b,
                  inReplyToStatus: u,
                  isSelfThreadReply: m,
                  promotedContent: h,
                  composeSemanticCoreId: D,
                  isPreview: T,
                  trustedFriendsValue: C,
                  tweetType: s.tweetType,
                })
                  .then(function (e) {
                    T || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(w[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(w, e, 'thread_send_success')
                    var n = e.length > 1 ? Fo : Lo
                    if (k && f) {
                      var i = f,
                        r = e.length
                      n = Io({ numOfTweets: r, communityName: i })
                    }
                    var o = T && s.isReply,
                      l = { label: qo, link: void 0, onAction: void 0 }
                    if (o || !T) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '')
                    } else l.onAction = Object(xo.a)(d, p)
                    a({ text: T ? No : n, action: l }),
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
                      m = { message: e.type, event_info: r ? ''.concat(r) : void 0, status_code: u, url: o }
                    throw (
                      (i.map(
                        function (e, t) {
                          return s._scribeTweetSent(w[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(Eo.d)(e) && e.code === vr.b.CANCELED) ||
                        n.scribe({ action: 'send_tweet_failure', data: m }),
                      w.length > 1 && s._scribeThreadSent(w, i, 'thread_send_failure'),
                      i.length &&
                        d.replace({
                          pathname: p.pathname,
                          state: l()(
                            l()({}, Object(vo.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: i[i.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', wr.a))
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
                  m = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? p : d ? m : 'send_',
                  f = { items: [Tr.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  b = Object(yo.a)(
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
                    i && s._scribe(l()(l()({}, $o), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
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
                var T = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    s.isReply &&
                    !d &&
                    (o
                      ? s._scribe(l()(l()({}, T), {}, { action: 'save' }), { items: [{ nudge_id: u }] })
                      : s._scribe(l()(l()({}, T), {}, { action: 'sent' }), { items: [{ nudge_id: u }] })),
                  u || o || !s.isReply || d || s._scribe(l()(l()({}, T), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var w = t.id_str && Tr.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: w ? [w] : [] })
                  var x = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || x) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: w ? [w] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              _()(h()(s), '_scribeThreadSent', function (e, t, a) {
                var n = s.props.inReplyToStatus,
                  i = { items: [Tr.a.getSendThreadItem(e, t.length, !!n)] }
                s._scribe({ action: a }, i)
              }),
              _()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  a = { items: [Tr.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, a),
                  t && s._scribe(l()(l()({}, $o), {}, { element: 'result', action: 'retweet' }), a)
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
                  }, a(Cr.a)))
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
                  a && s._scribe(l()(l()({}, $o), {}, { element: 'result', action: 'cancel' })),
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
                  (s._scribe(l()(l()({}, Jo), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: gr.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              _()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, Jo), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, Jo), {}, { action: 'cancel' })),
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
                  n.replace({ pathname: i.pathname, state: Object(vo.a)(i.state || {}, 'quotedStatus') }),
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
                  po.b.isIOS())
                ) {
                  var c = r ? 0 : i
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              _()(
                h()(s),
                '_handleTextOnBlur',
                Object(qt.a)(function (e, t) {
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
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: So } })),
                      (null == i ? void 0 : i.text) === So && s.setState({ errorMessage: void 0 })
                }
                n(e, s._getParentKey())
              }),
              _()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  a = e.sendingProgress
                return T.a.createElement(fo.a, { progress: t ? Math.max(a, 0.02) : 0, style: ns.progressBar })
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
                      return Object(pr.a)(e)
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
                    m = r.processMultipleMedia,
                    p = r.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    v = Object(To.e)(
                      null === (n = h()(s)) || void 0 === n || null === (i = n.context) || void 0 === i
                        ? void 0
                        : i.userClaims,
                    )
                  g ||
                    o(t, { location: To.d.Tweet, canUploadLongVideo: v }).then(function (t) {
                      var n = t.map(function (e) {
                        return e.id
                      })
                      if (a._validateMedia(f, t)) {
                        var i = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(bo.a)(i.concat(n)) }, e),
                          m(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            d ||
                              u(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else l({ text: Yo }), p(n)
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
                    return Object(_o.a)(e, a)
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
                var n = !Object(Vt.c)(s._getSingleComposerDataWithLatestText(t[0]))
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
                    return Object(Vt.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  a = e.prepopulatedText
                return t.every(function (e) {
                  return Object(Vt.d)(s._getSingleComposerDataWithLatestText(e), a)
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
              (s._throttledSyncTexts = Object(Ia.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((r = {}), _()(r, wo.b, s.handleTweetOrRetweet), _()(r, wo.a, s.handleDismissComposer), r)),
              (s._keyCommandHandlersForActiveTypeahead = _()({}, wo.b, s.handleTweetOrRetweet)),
              (s._isAltTextNudgeEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (s._isCommunitiesEnabled = s.context.featureSwitches.isTrue('c9s_enabled')),
              s
            )
          }
          return (
            m()(a, [
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
                    var m = l()({}, null)
                    d && (m.text = d), t && t.cardUrl && (m.cardUrl = t.cardUrl), this._updateSingleComposer(m)
                  }
                  ;(d || (t && t.cardUrl) || a.length > 0 || n.length > 0) &&
                    !s &&
                    r.replace({
                      query: Object(xi.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(vo.a)(Object(xi.b)(c.state || {}), [
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
                    i.length >= 25 && e.composerData.length < 25 && n({ text: Qo }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    u && !Object(Co.a)(i, e.composerData) && u && u(this._areComposersValid()),
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
                    m = n.history,
                    p = n.inReplyToStatus,
                    h = n.isInline,
                    f = n.isModal,
                    g = n.isSelfThreadReply,
                    v = n.isSending,
                    y = n.isSuperFollowsCreator,
                    b = n.parentTweetId,
                    _ = n.positionCursorAtBeginning,
                    C = n.richTextInputContext,
                    w = n.scheduledFor,
                    x = n.typeaheadWrapper,
                    E = n.userLanguage,
                    S = n.windowWidth,
                    I = this.state,
                    R = I.errorMessage,
                    A = I.focused,
                    M = I.shouldDisableButton,
                    k = I.showAltTextPrompt,
                    P = I.showDiscardTweetConfirmation,
                    D = I.showToxicReplyNudge,
                    O = I.typeaheadActive,
                    L = !f && O,
                    F = h ? 0 : this.props.activeComposerIndex,
                    N = L || h ? [c[F]] : c,
                    B = this._areComposersValid(),
                    V = this.hasNonCompliantQuote && this.isRetweet,
                    j = h ? W.a : go.a,
                    z = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    H = M || !B || V || this.isCommunityTweetFromProtectedUser,
                    U = (h && xr.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet,
                    G = (h && xr.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet || this.isExclusiveTweet
                  return T.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !b && ns.root },
                    h ? this._renderProgressBar() : null,
                    R &&
                      T.a.createElement(
                        W.a,
                        { style: ns.inlineCallout },
                        T.a.createElement(tt.a, {
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
                    T.a.createElement(
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [ns.content, b && ns.contentInlineReply, f && ns.contentModal],
                      },
                      p ? this._renderReplyContext() : null,
                      l,
                      T.a.createElement(
                        j,
                        z,
                        N.map(function (e, t) {
                          var n = Object(jt.h)(e.scheduledFor),
                            l = c.indexOf(e),
                            I = d(e, t, N),
                            R =
                              f || h
                                ? T.a.createElement(
                                    q.a,
                                    {
                                      behavioralEventContext: es,
                                      disabled: H,
                                      onPress: a.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: ns.inlineSendButton,
                                      testID: f ? Er : Sr,
                                      type: 'brandFilled',
                                    },
                                    Object(xo.b)({
                                      inReplyToStatus: !!p,
                                      isSelfThreadReply: !!g,
                                      isQuoteTweet: !!a.isQuoteTweet,
                                      isRetweet: !!a.isRetweet,
                                      isScheduled: !!n,
                                      isThread: a.isThread,
                                    }),
                                  )
                                : null,
                            M = a._getSingleComposerDataWithLatestText(e)
                          return T.a.createElement(
                            W.a,
                            { key: e.key },
                            T.a.createElement(
                              li,
                              i()(
                                {
                                  addComposerLink: a._makeAddComposerLink(h, g, b),
                                  addToast: o,
                                  additionalToolbarContent: R,
                                  audienceControlsValue: s,
                                  autoFocus: a.isInlineReply && A,
                                  data: M,
                                  disableAddTweet: c.length >= 25,
                                  editable: !v && !!r,
                                  fetchAutotaggedLocationIfNeeded: a._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: u,
                                  hidePoll: U,
                                  hideScheduling: G,
                                  history: m,
                                  index: l,
                                  isActive: l === F && !v,
                                  isCommunityTweetFromProtectedUser: a.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || a._shouldBeExpanded(),
                                  isInline: h,
                                  isInlineReply: a.isInlineReply,
                                  isLast: h || l === c.length - 1,
                                  isReply: !!p || a.isInlineReply,
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
                                  onTextInputBlur: a._handleTextOnBlur(M.key, t),
                                  onTypeaheadStateChange: a._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!_,
                                  ref: a._setComposerRef(l),
                                  richTextInputContext: C,
                                  scheduledFor: w,
                                  setActiveParentKey: a._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: O,
                                  typeaheadWrapper: x,
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
                      P
                        ? this._canSaveDraft
                          ? T.a.createElement(ho.a, {
                              cancelButtonLabel: zo,
                              confirmButtonLabel: Wo,
                              headline: Ho,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Uo,
                            })
                          : T.a.createElement(ho.a, {
                              confirmButtonLabel: zo,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Vo : Bo,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: jo,
                            })
                        : null,
                      k ? this._renderAltTextPrompt() : null,
                      D ? this._renderToxicReplyNudge() : null,
                      T.a.createElement(W.a, { style: v && ns.mask }),
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
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== w.a.prompt
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
                    a,
                    n,
                    i,
                    r,
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
                      null === (a = this.context) ||
                      void 0 === a ||
                      null === (n = a.featureSwitches) ||
                      void 0 === n
                        ? void 0
                        : n.isTrue('subscriptions_undo_quote_tweets_enabled'),
                    c =
                      null == this ||
                      null === (i = this.context) ||
                      void 0 === i ||
                      null === (r = i.featureSwitches) ||
                      void 0 === r
                        ? void 0
                        : r.isTrue('subscriptions_undo_thread_tweets_enabled')
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
            a
          )
        })(T.a.Component)
      _()(as, 'defaultProps', {
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
        typeaheadWrapper: yr.a,
      }),
        _()(as, 'contextType', I.a),
        _()(as, '_validateMedia', function (e, t) {
          var a = e.media
          return Object(S.c)(a.concat(t))
        })
      var ns = F.a.create(function (e) {
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
      t.a = Object(yt.a)(ur(as))
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
        d = function (e, t) {
          return function () {
            var a,
              n,
              i =
                (null === (a = t.state) || void 0 === a || null === (n = a.previousPath) || void 0 === n
                  ? void 0
                  : n.includes('/home')) && '/compose/tweet' === t.pathname
            t.pathname.includes('/home') || i ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
          }
        },
        u = function (e) {
          var t = e.isInline,
            a = e.isSelfThreadReply,
            n = e.parentTweetId
          return t ? { pathname: '/compose/tweet', state: { inReplyToStatusId: n, isSelfThreadReply: a } } : void 0
        }
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
          m = r[4],
          p = r[5],
          h = [
            o,
            s && '@'.concat(s.toString()),
            d,
            u,
            m &&
              m
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            p && l({ viaScreenName: p }),
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
        m = a.n(u),
        p = a('KEM+'),
        h = a.n(p),
        f = (a('2G9S'), a('z84I'), a('7x/C'), a('JtPf'), a('DfhM'), a('ERkP')),
        g = a.n(f),
        v = a('zfvc'),
        y = a('RhWx'),
        b = a.n(y),
        _ = (a('yH/f'), a('M+/F'), a('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        T = (function (e) {
          d()(a, e)
          var t = m()(a)
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
      t.a = T
    },
    ulNE: function (e, t, a) {
      'use strict'
      var n = a('ax0f'),
        i = a('42ly'),
        r = a('N9G2'),
        o = a('BIH/'),
        s = a('lhaq'),
        l = a('aoZ+')
      n(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = r(this),
              a = o(t),
              n = l(t, 0)
            return (n.length = i(n, t, t, a, 0, void 0 === e ? 1 : s(e))), n
          },
        },
      )
    },
    'urw/': function (e, t, a) {
      a('7St7')('flat')
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
            m = e.typeaheadWrapper,
            p = i.a.useContext(s.b).isModal
          return i.a.createElement(l.a, null, function (e) {
            var s = e.windowWidth
            return i.a.createElement(
              o.a,
              { style: u.root },
              i.a.createElement(r.a, {
                history: t,
                isInline: !0,
                isModal: p,
                location: a,
                parentTweetId: n,
                replyPressToggle: c,
                richTextInputContext: d,
                typeaheadWrapper: m,
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
        m = s.a.c2fc878c,
        p = s.a.db11b27f,
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
          v = g >= 0 ? p({ count: o(g) }) : m({ count: o(t - a) }),
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
          T = t >= s ? i.a.createElement(d.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, o(g)) : null
        return i.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          C,
          i.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, T),
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
        m = a('3XMw'),
        p = a.n(m),
        h = a('MWbm'),
        f = a('t62R'),
        g = a('CKsB'),
        v = a('/yvb'),
        y = a('rHpw'),
        b = a('Zg3A'),
        _ = a('yiKp'),
        C = a.n(_),
        T = a('Lsrn'),
        w = a('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
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
      x.metadata = { width: 24, height: 24 }
      var E = x,
        S = a('boUI'),
        I = a('EweD'),
        R = p.a.g6185a9e,
        A = p.a.g2d04222,
        M = p.a.baffe39a,
        k = p.a.af293dc2,
        P = p.a.h1053f7e,
        D = p.a.bf994ab2,
        O = p.a.cf7f7e39,
        L = p.a.cfd2f35d,
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
        N = function (e) {
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
            m = P
          return (
            c ? (m = D) : l && (m = O),
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
                  A,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(g.a, {
                  Icon: b.a,
                  actionText: M,
                  isSelected: u.a.all === o,
                  onClick: s(u.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: E,
                  actionText: k,
                  isSelected: u.a.community === o,
                  onClick: s(u.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: c ? S.a : I.a,
                  actionText: m,
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
                      L,
                    )
                  : null,
              ),
            )
          )
        },
        B = a('OiMc'),
        V = a('efqG'),
        j = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          a = e.controlled,
          n = void 0 !== a && a,
          r = e.disabled,
          s = d.a.useState(!1),
          c = l()(s, 2),
          u = c[0],
          m = c[1],
          p = d.a.useCallback(function () {
            return m(!0)
          }, []),
          h = d.a.useCallback(function () {
            return m(!1)
          }, []),
          f = n ? (u ? B.a.VISIBILITY_BEHAVIOR.forceVisible : B.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: p, closePopover: h }) : t
        return d.a.createElement(
          V.a,
          {
            disabled: r,
            onDismiss: h,
            renderContent: function (t, a) {
              e.children, e.controlled
              var n = o()(e, j)
              return d.a.createElement(N, i()({}, n, { dismiss: t, isModal: 'sheet' === a }))
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
        m = c.a.create(function (e) {
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
              i.a.createElement(s.a, { style: m.icon }),
              u({ date: Object(d.b)(r), time: Object(d.i)(r) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
