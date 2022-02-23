;(window.webpackJsonp = window.webpackJsonp || []).push([
  [177],
  {
    '2Daw': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return z
      })
      var n = a('VrFO'),
        i = a.n(n),
        r = a('Y9Ll'),
        o = a.n(r),
        c = a('5Yy7'),
        s = a.n(c),
        l = a('2VqO'),
        d = a.n(l),
        u = a('KEM+'),
        p = a.n(u),
        m = (a('uFXj'), a('ERkP')),
        h = a.n(m),
        v = a('LCtV'),
        b = a('3XMw'),
        y = a.n(b),
        f = a('VPdC'),
        g = a('pKoL'),
        C = a('MWbm'),
        M = a('rFBM'),
        E = a('/yvb'),
        R = a('9Xij'),
        w = a('rHpw'),
        k = a('hOZg'),
        P = a('Mbn/'),
        F = a('T8pk'),
        V = y.a.b87ca51a,
        L = y.a.eebff22c,
        z = (function (e) {
          s()(a, e)
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
                    t = e.borderRadius,
                    a = e.maskStyle,
                    n = e.mediaItem,
                    i = e.onAddMediaFiles,
                    r = e.onCrop,
                    o = e.onRemove,
                    c = e.rootStyle,
                    s = e.withDragDrop,
                    l = n && !n.uploader,
                    d = h.a.createElement(
                      h.a.Fragment,
                      null,
                      this._renderPreview(),
                      l
                        ? null
                        : h.a.createElement(
                            h.a.Fragment,
                            null,
                            h.a.createElement(C.a, { style: [A.mask, a, D[t]] }),
                            h.a.createElement(
                              C.a,
                              { style: A.mediaPicker },
                              this._renderMediaEdit(),
                              r ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return h.a.createElement(
                    C.a,
                    { style: [A.container, c, D[t]] },
                    s && i ? h.a.createElement(M.a, { onFilesAdded: i, style: [A.dragDropContainer, D[t]] }, d) : d,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return h.a.createElement(E.a, {
                    accessibilityLabel: V,
                    hoverLabel: { label: V },
                    icon: h.a.createElement(k.a, null),
                    onPress: e,
                    size: 'large',
                    style: A.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaCrop',
                value: function () {
                  var e = this.props,
                    t = e.onCrop,
                    a = e.onRemove
                  return h.a.createElement(E.a, {
                    accessibilityLabel: L,
                    icon: h.a.createElement(P.a, null),
                    onPress: t,
                    size: 'large',
                    style: a ? A.middleButton : A.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaEdit',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    a = e.acceptVideo,
                    n = e.accessibilityLabel,
                    i = e.onAddMediaFiles,
                    r = e.onEdit,
                    o = h.a.createElement(F.a, null)
                  return i
                    ? h.a.createElement(f.a, {
                        acceptGifs: t,
                        acceptVideo: a,
                        accessibilityLabel: n,
                        icon: o,
                        onChange: i,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : h.a.createElement(E.a, {
                        accessibilityLabel: n,
                        icon: o,
                        onPress: r,
                        size: 'large',
                        style: A.edit,
                        type: 'onMediaDominantColorFilled',
                      })
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e = this.props,
                    t = e.aspectRatio,
                    a = e.borderRadius,
                    n = e.currentContent,
                    i = e.mediaItem
                  return i
                    ? h.a.createElement(
                        R.a,
                        { ratio: t },
                        h.a.createElement(g.a, {
                          borderRadius: a,
                          enableGif: !1,
                          mediaItem: i,
                          style: A.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : n
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      p()(z, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: v.a.NONE })
      var D = w.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        A = w.a.create(function (e) {
          return {
            mediaPreview: { height: '100%' },
            mediaPicker: {
              alignItems: 'center',
              flexDirection: 'row',
              height: '100%',
              justifyContent: 'center',
              opacity: 0.75,
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            rightButton: { marginLeft: e.spaces.space32 },
            middleButton: { marginLeft: e.spaces.space32, marginRight: '-'.concat(e.spaces.space12) },
            mask: {
              backgroundColor: e.colors.translucentBlack30,
              height: '100%',
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            container: { justifyContent: 'center', overflow: 'hidden' },
            dragDropContainer: {
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.transparent,
              borderStyle: 'solid',
            },
            edit: { margin: '-'.concat(e.spaces.space12) },
          }
        })
    },
    'Mbn/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        c = a('Lsrn'),
        s = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    P68U: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'MediaPickerWithPreview', function () {
          return E
        })
      var n = a('VrFO'),
        i = a.n(n),
        r = a('Y9Ll'),
        o = a.n(r),
        c = a('1Pcy'),
        s = a.n(c),
        l = a('5Yy7'),
        d = a.n(l),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        v = (a('2G9S'), a('hCOa'), a('87if'), a('hBpG'), a('7x/C'), a('jQ3i'), a('x4t0'), a('z84I'), a('ERkP')),
        b = a.n(v),
        y = a('AspN'),
        f = a('rxPX'),
        g = Object(f.a)().propsFromActions(function () {
          return { addMedia: y.b, processMultipleMedia: y.g }
        }),
        C = a('2Daw'),
        M = a('VPdC'),
        E = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(s()(e), '_handleAddMediaFiles', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  i = a.location,
                  r = a.onChange,
                  o = a.onFailure,
                  c = a.processMultipleMedia,
                  s = e._getAcceptedFileInputs(),
                  l = Array.from(t).find(function (e) {
                    return s.includes(e.type)
                  })
                l &&
                  n([l], { location: i }).then(function (e) {
                    r &&
                      r(
                        e.map(function (e) {
                          return e.id
                        }),
                      ),
                      c(e, { onFailure: o })
                  })
              }),
              h()(s()(e), '_getAcceptedFileInputs', function () {
                var t = e.props,
                  a = t.acceptGifs,
                  n = t.acceptVideo
                return Object(M.b)({ acceptGifs: a, acceptVideo: n })
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    a = e.acceptVideo,
                    n = e.accessibilityLabel,
                    i = e.aspectRatio,
                    r = e.borderRadius,
                    o = e.currentContent,
                    c = e.maskStyle,
                    s = e.mediaItem,
                    l = e.onCrop,
                    d = e.onRemove,
                    u = e.rootStyle
                  return b.a.createElement(C.a, {
                    acceptGifs: t,
                    acceptVideo: a,
                    accessibilityLabel: n,
                    aspectRatio: i,
                    borderRadius: r,
                    currentContent: o,
                    maskStyle: c,
                    mediaItem: s,
                    onAddMediaFiles: this._handleAddMediaFiles,
                    onCrop: l,
                    onRemove: d,
                    rootStyle: u,
                    withDragDrop: !0,
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      h()(E, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var R = g(E)
      t.default = R
    },
    T8pk: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        c = a('Lsrn'),
        s = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
              }),
              o.a.createElement('path', {
                d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
