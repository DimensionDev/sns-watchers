;(window.webpackJsonp = window.webpackJsonp || []).push([
  [176],
  {
    '2Daw': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return D
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
        m = (a('1t7P'), a('jQ/y'), a('uFXj'), a('ERkP')),
        b = a.n(m),
        y = a('LCtV'),
        h = a('3XMw'),
        v = a.n(h),
        f = a('VPdC'),
        C = a('pKoL'),
        g = a('MWbm'),
        E = a('t62R'),
        M = a('rFBM'),
        w = a('/yvb'),
        P = a('9Xij'),
        R = a('rHpw'),
        k = a('hOZg'),
        F = a('Mbn/'),
        V = a('T8pk'),
        L = v.a.b87ca51a,
        z = v.a.eebff22c,
        D = (function (e) {
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
                    a = e.description,
                    n = e.innerStyle,
                    i = e.maskStyle,
                    r = e.mediaItem,
                    o = e.onAddMediaFiles,
                    c = e.onCrop,
                    s = e.onRemove,
                    l = e.rootStyle,
                    d = e.withDragDrop,
                    u = r && !r.uploader,
                    p = b.a.createElement(
                      b.a.Fragment,
                      null,
                      this._renderPreview(),
                      u
                        ? null
                        : b.a.createElement(
                            b.a.Fragment,
                            null,
                            b.a.createElement(g.a, { style: [A.mask, i, j[t]] }),
                            b.a.createElement(
                              g.a,
                              { style: [A.overlaidContent, n] },
                              b.a.createElement(
                                g.a,
                                { style: A.buttonsContainer },
                                this._renderMediaEdit(),
                                c ? this._renderMediaCrop() : null,
                                s ? this._renderMediaRemove() : null,
                              ),
                              a
                                ? b.a.createElement(
                                    E.b,
                                    { color: 'gray700', size: 'subtext1', style: A.description },
                                    a,
                                  )
                                : null,
                            ),
                          ),
                    )
                  return b.a.createElement(
                    g.a,
                    { style: [A.container, l, j[t]] },
                    d && o ? b.a.createElement(M.a, { onFilesAdded: o, style: [A.dragDropContainer, j[t]] }, p) : p,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return b.a.createElement(w.a, {
                    accessibilityLabel: L,
                    hoverLabel: { label: L },
                    icon: b.a.createElement(k.a, null),
                    onPress: e,
                    size: 'large',
                    style: A.buttonLeftPadding,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaCrop',
                value: function () {
                  var e = this.props.onCrop
                  return b.a.createElement(w.a, {
                    accessibilityLabel: z,
                    icon: b.a.createElement(F.a, null),
                    onPress: e,
                    size: 'large',
                    style: A.buttonLeftPadding,
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
                    o = b.a.createElement(V.a, null)
                  return i
                    ? b.a.createElement(f.a, {
                        acceptGifs: t,
                        acceptVideo: a,
                        accessibilityLabel: n,
                        icon: o,
                        onChange: i,
                        size: 'large',
                        style: A.mediaPicker,
                        type: 'onMediaDominantColorFilled',
                      })
                    : b.a.createElement(w.a, {
                        accessibilityLabel: n,
                        icon: o,
                        onPress: r,
                        size: 'large',
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
                    ? b.a.createElement(
                        P.a,
                        { ratio: t },
                        b.a.createElement(C.a, {
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
        })(b.a.Component)
      p()(D, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: y.a.NONE })
      var j = R.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        A = R.a.create(function (e) {
          return {
            mediaPreview: { height: '100%' },
            overlaidContent: {
              alignItems: 'center',
              height: '100%',
              justifyContent: 'center',
              opacity: 0.75,
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            buttonsContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
            buttonLeftPadding: { marginLeft: e.spaces.space20 },
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
            mediaPicker: { margin: 0 },
            description: { marginTop: e.spaces.space16 },
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
          return M
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
        b = a.n(m),
        y =
          (a('2G9S'),
          a('hCOa'),
          a('87if'),
          a('hBpG'),
          a('7x/C'),
          a('jQ3i'),
          a('x4t0'),
          a('z84I'),
          a('1t7P'),
          a('jQ/y'),
          a('ERkP')),
        h = a.n(y),
        v = a('AspN'),
        f = a('rxPX'),
        C = Object(f.a)().propsFromActions(function () {
          return { addMedia: v.b, processMultipleMedia: v.g }
        }),
        g = a('2Daw'),
        E = a('VPdC'),
        M = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(s()(e), '_handleAddMediaFiles', function (t) {
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
              b()(s()(e), '_getAcceptedFileInputs', function () {
                var t = e.props,
                  a = t.acceptGifs,
                  n = t.acceptVideo
                return Object(E.b)({ acceptGifs: a, acceptVideo: n })
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
                    c = e.description,
                    s = e.innerStyle,
                    l = e.maskStyle,
                    d = e.mediaItem,
                    u = e.onCrop,
                    p = e.onRemove,
                    m = e.rootStyle
                  return h.a.createElement(g.a, {
                    acceptGifs: t,
                    acceptVideo: a,
                    accessibilityLabel: n,
                    aspectRatio: i,
                    borderRadius: r,
                    currentContent: o,
                    description: c,
                    innerStyle: s,
                    maskStyle: l,
                    mediaItem: d,
                    onAddMediaFiles: this._handleAddMediaFiles,
                    onCrop: u,
                    onRemove: p,
                    rootStyle: m,
                    withDragDrop: !0,
                  })
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      b()(M, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var w = C(M)
      t.default = w
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
