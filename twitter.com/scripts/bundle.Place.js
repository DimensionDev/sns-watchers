;(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    '3X8/': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return u
      })
      var n,
        c = r('KEM+'),
        a = r.n(c),
        o = r('k49u'),
        i = r('LVU8'),
        l = r('3XMw'),
        s = r.n(l).a.i1801686,
        u =
          ((n = {}),
          a()(n, o.a.GenericForbidden, { toast: Object(i.a)() }),
          a()(n, o.a.InvalidRequestUrl, { toast: { text: s, withClearButton: !0 } }),
          a()(n, 'showToast', !0),
          n)
    },
    '5Y0Z': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'PlaceScreen', function () {
          return N
        })
      r('uFXj')
      var n = r('ERkP'),
        c = r('HPNB'),
        a = r('es0u'),
        o =
          (r('WNMA'),
          r('KqXw'),
          r('+KXO'),
          r('1t7P'),
          r('LW0h'),
          r('daRM'),
          r('jwue'),
          r('+oxZ'),
          r('FtHn'),
          r('KEM+')),
        i = r.n(o),
        l = r('lMB6'),
        s = r('3zvM')
      function u(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var f = Object(s.f)({ namespace: 'places' }),
        d = Object(s.b)(f, {
          context: 'FETCH_PLACE',
          endpoint: function (e) {
            return e.Places.fetchPlace
          },
        }),
        h = p(p({}, f), d),
        m = l.a.register(h),
        y = r('rxPX'),
        b = r('0KEI'),
        g = function (e, t) {
          return t.match.params.placeId
        },
        v = function (e, t) {
          return m.select(e, g(0, t))
        },
        O = function (e, t) {
          return m.selectFetchStatus(e, g(0, t))
        },
        E = Object(y.a)()
          .propsFromState(function () {
            return { place: v, placeFetchStatus: O, placeId: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('PLACE_SCREEN'),
              fetchPlaceIfNeeded: m.fetchOneIfNeeded,
            }
          }),
        P = r('v//M'),
        w = r('3XMw'),
        _ = r.n(w),
        C = r('JFx8'),
        S = r('yoO3'),
        j = r('h2mu'),
        k = r('3IPs'),
        T = r('VS6U'),
        x = r('MWbm'),
        I = r('G8HL'),
        R = r('/yvb'),
        M = r('t62R'),
        D = r('k/OQ'),
        H = r('cHvH'),
        q = r('rHpw'),
        F = r('7JQg'),
        z = _.a.jaaa8984,
        L = _.a.bab1f8b0,
        A = _.a.add55c97,
        V = _.a.f4a654a3,
        B = function (e) {
          var t = {}
          'foursquare' === e.vendor &&
            (t = (function (e) {
              var t = e.data.venue_id
              return {
                attributionDetails: n.createElement(C.a, { style: K.icon }),
                href: 'https://foursquare.com/v/'.concat(t),
                buttonText: V,
              }
            })(e))
          var r = t,
            c = r.attributionDetails,
            a = r.buttonText,
            o = r.href
          return n.createElement(
            x.a,
            { style: K.attribution },
            n.createElement(x.a, { style: K.attributionDetails }, c),
            n.createElement(R.a, { link: o, size: 'xSmall', type: 'brandOutlined' }, a),
          )
        },
        N = function (e) {
          var t = e.createLocalApiErrorHandler,
            r = e.fetchPlaceIfNeeded,
            o = e.history,
            i = e.location,
            l = e.place,
            s = e.placeFetchStatus,
            u = e.placeId,
            p = l ? l.full_name : z
          n.useEffect(
            function () {
              r(u).catch(t())
            },
            [t, r, u],
          )
          var f = function () {
              if (!l) return null
              var e = l.attributes,
                t = l.vendor_info,
                r = e.street_address
              return n.createElement(
                x.a,
                { style: K.locationDetails },
                n.createElement(M.b, { size: 'headline1', weight: 'bold' }, l.full_name),
                r ? n.createElement(M.b, { color: 'gray700', size: 'body' }, r) : null,
                t ? B(t) : null,
              )
            },
            d = function () {
              return 'media' === (i.query && i.query.f)
            },
            h = function () {
              var e = [
                { isActive: y, key: L, retainScrollPosition: !1, to: i.pathname, label: L },
                {
                  isActive: d,
                  key: A,
                  retainScrollPosition: !1,
                  to: { query: { f: 'media' }, pathname: i.pathname },
                  label: A,
                },
              ]
              return n.createElement(D.a, { links: e })
            },
            m = function () {
              var e = d() ? 'place:'.concat(u, ' filter:media') : 'place:'.concat(u)
              return n.createElement(j.a, { query: e, searchMode: k.c.Top })
            },
            y = function () {
              return 'media' !== (i.query && i.query.f)
            }
          return n.createElement(
            S.a,
            null,
            n.createElement(H.a, null, function (e) {
              var t = e.windowWidth,
                r = c.a.isTwoColumnLayout(t)
              return n.createElement(T.a, {
                backLocation: r ? void 0 : '/home',
                documentTitle: p,
                history: o,
                primaryContent: n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(x.a, { style: K.header }, n.createElement(P.a, { fetchStatus: s, render: f }), h()),
                  m(),
                ),
                sidebarContent: n.createElement(a.a, null),
                title: r ? null : z,
              })
            }),
          )
        },
        K = q.a.create(function (e) {
          return {
            header: { backgroundColor: e.colors.cellBackground, zIndex: e.componentZIndices.appBarZIndex },
            locationDetails: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              paddingBottom: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
              paddingTop: e.spaces.space16,
            },
            icon: { color: e.colors.gray700 },
            attribution: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: e.spaces.space12,
            },
            attributionDetails: { flexShrink: 1, marginRight: e.spaces.space12 },
          }
        })
      t.default = Object(F.c)({ page: 'place' })(E(Object(I.a)(N)))
    },
    JFx8: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        a = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 158 20' },
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M1.29 9.333v3.992H0V4.31h3.412c.876 0 1.443.22 1.88.593.54.464.89 1.147.89 1.92 0 .772-.35 1.454-.89 1.918-.437.375-1.004.593-1.88.593H1.29M3.35 8.11c.618 0 .953-.155 1.185-.4.22-.23.36-.54.36-.888s-.142-.657-.36-.888c-.232-.245-.567-.4-1.185-.4H1.29V8.11h2.06zm6.155-.966c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.785-1.996-1.905-1.996S7.6 9.192 7.6 10.3c0 1.107.784 1.996 1.905 1.996zm9.025-5.021l1.662 4.134 1.66-4.134h1.263l-2.46 6.053h-.85l-1.7-4.25-1.7 4.25h-.85l-2.458-6.053h1.262l1.66 4.134 1.66-4.134h.85m6.091 3.284c.065 1.017.903 1.83 1.958 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.315 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258H24.62m.104-1.03h3.297c-.18-.774-.875-1.315-1.596-1.315-.786 0-1.494.528-1.7 1.314zm9.066-1.173c-.143-.04-.284-.052-.477-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.295-.412.926-.824 1.815-.824.13 0 .335.013.476.04l-.14 1.17m1.647 2.203c.064 1.017.902 1.83 1.957 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.314 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.663m.103-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.786 0-1.494.528-1.7 1.314zm10.534 3.244c-.49.438-1.146.682-1.867.682-.54 0-1.108-.154-1.52-.4-.915-.54-1.545-1.544-1.545-2.755 0-1.212.645-2.23 1.56-2.77.41-.245.913-.386 1.48-.386.657 0 1.314.206 1.854.657V4.183h1.223v9.143h-1.185v-.553m-.038-3.606c-.373-.49-.992-.863-1.726-.863-1.172 0-1.945.94-1.945 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm7.815 4.159h-1.185V4.182h1.224v3.62c.54-.452 1.196-.658 1.853-.658.567 0 1.07.142 1.48.386.915.54 1.56 1.558 1.56 2.77 0 1.21-.632 2.214-1.546 2.755-.412.245-.98.4-1.52.4-.72 0-1.378-.245-1.867-.683v.554m.04-1.893c.41.554 1.042.863 1.66.863 1.172 0 2.01-.914 2.01-1.996 0-1.056-.773-1.996-1.946-1.996-.734 0-1.352.374-1.725.863v2.266zm6.296 4.983l1.635-3.72-2.588-5.423h1.313l1.893 3.992 1.74-3.992h1.287l-3.98 9.143h-1.3m39.407-8.563v1.223H96.63v4.25h-1.288V4.31h5.15v1.225H96.63v2.318h2.962m4.223-.709c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.784-1.996-1.905-1.996-1.12 0-1.906.89-1.906 1.996 0 1.107.785 1.996 1.905 1.996zm4.841.143c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.13.953.348 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.648-.384-2.15-1.015m10.25-4.082c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.186v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.144 1.17m1.48 3.362c.567.438 1.185.67 1.79.67.528 0 1.056-.283 1.056-.76 0-.695-1.005-.734-1.893-1.03-.735-.244-1.392-.708-1.392-1.558 0-1.3 1.16-1.893 2.24-1.893.89 0 1.533.283 2.01.67l-.63.876c-.374-.282-.812-.475-1.302-.475-.592 0-1.095.283-1.095.76 0 .412.477.554 1.083.708.953.245 2.202.67 2.202 1.92 0 1.145-1.07 1.853-2.254 1.853-.965 0-1.776-.296-2.446-.837l.632-.904m8.228 1.738c-.54 0-1.108-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.412-.245.914-.386 1.48-.386.684 0 1.34.206 1.894.682v-.553h1.185v9.143h-1.224v-3.62c-.49.427-1.107.658-1.828.658m1.828-4.288c-.373-.49-.99-.863-1.726-.863-1.172 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm3.45 3.272c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.128.953.347 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.647-.384-2.15-1.015m11.333.335c-.49.438-1.146.682-1.867.682-.54 0-1.107-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.413-.245.916-.386 1.482-.386.683 0 1.34.206 1.893.682v-.553h1.185v6.052h-1.185v-.553m-.04-3.606c-.372-.49-.99-.863-1.724-.863-1.17 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm6.232-.81c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.142 1.17m1.905 2.203c.065 1.017.902 1.83 1.957 1.83.903 0 1.392-.44 1.74-.825l.797.76c-.45.58-1.313 1.133-2.55 1.133-1.764 0-3.13-1.34-3.13-3.155 0-1.816 1.237-3.155 2.95-3.155 1.687 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.66m.102-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.785 0-1.493.528-1.7 1.314zM86.48 0H75.813C74.34 0 73.91 1.107 73.91 1.805v16.947c0 .786.42 1.077.658 1.173.237.097.892.177 1.284-.276 0 0 5.105-5.863 5.188-5.954.08-.09.17-.092.22-.092h3.234c1.37 0 1.59-.992 1.732-1.567.12-.48 1.455-7.32 1.9-9.488C88.466.89 88.046 0 86.48 0m-.254 12.037c.12-.48 1.455-7.32 1.9-9.488m-2.275.337l-.447 2.333c-.053.253-.302.49-.596.49l-4.156-.005c-.467 0-.87.352-.87.82v.508c0 .467.38.85.85.85h3.524c.33 0 .608.31.537.663-.07.353-.438 2.216-.48 2.41-.04.192-.246.454-.576.454h-2.878c-.598.02-.726.023-1.077.46-.352.435-3.506 4.222-3.506 4.222-.03.037-.062.026-.062-.014V2.852c0-.298.26-.648.648-.648h8.56c.317 0 .61.296.53.683z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 158, height: 20 }), (t.a = u)
    },
    PH3B: function (e, t, r) {
      'use strict'
      var n,
        c = r('KEM+'),
        a = r.n(c),
        o = r('ezF+'),
        i = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        s = {
          loader: function () {
            return Promise.all([r.e(0), r.e(330)]).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([r.e(0), r.e(332)]).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = o.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), a()(n, i.Cell, s), a()(n, i.PreviewCard, u), n),
      })
    },
    h2mu: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        c = r.n(n),
        a = r('Y9Ll'),
        o = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        s = r('5Yy7'),
        u = r.n(s),
        p = r('N+ot'),
        f = r.n(p),
        d = r('AuHH'),
        h = r.n(d),
        m = r('KEM+'),
        y = r.n(m),
        b = (r('2G9S'), r('ERkP')),
        g = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ezF+')),
        v = r('QIgh'),
        O = r('8UdT'),
        E = r('iu0J'),
        P = r('zgaL'),
        w = r('PH3B'),
        _ =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(217).then(r.bind(null, 'sc5C'))
            },
            loaderKey: 'relatedSearchDefaultLoader',
            strategy: r('XBtf').a.Critical,
          }),
        C = g.e(_),
        S = (r('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        j = r('VPAj'),
        k = r('zh9S'),
        T = r('X04g'),
        x = r('u3ZE'),
        I = r('MWbm'),
        R = r('t62R'),
        M = r('rHpw'),
        D = r('3XMw'),
        H = r.n(D)
      function q(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = h()(e)
          if (t) {
            var c = h()(this).constructor
            r = Reflect.construct(n, arguments, c)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var F = H.a.je5502ea,
        z = H.a.bc4628a0,
        L = function (e) {
          return b.createElement(R.b, { weight: 'bold' }, e)
        },
        A = (function (e) {
          u()(r, e)
          var t = q(r)
          function r() {
            return c()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.suggestion,
                    t = { pathname: '/search', query: { q: e, src: x.a.SpellingSuggestionClick } }
                  return b.createElement(
                    R.b,
                    { link: t, style: N.root },
                    b.createElement(H.a.I18NFormatMessage, { $i18n: 'hce48b8a' }, L(e)),
                  )
                },
              },
            ]),
            r
          )
        })(b.PureComponent),
        V = (function (e) {
          u()(r, e)
          var t = q(r)
          function r() {
            return c()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    r = e.original,
                    n = e.suggestion,
                    c = { pathname: '/search', query: { q: n, src: x.a.SpellingCorrectionClick } }
                  return b.createElement(
                    I.a,
                    { style: N.root },
                    b.createElement(R.b, { weight: 'bold' }, z({ suggestion: n })),
                    b.createElement(
                      R.b,
                      { link: c, onClick: t },
                      b.createElement(H.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, L(r)),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(b.PureComponent),
        B = (function (e) {
          u()(r, e)
          var t = q(r)
          function r() {
            return c()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    r = e.original,
                    n = e.suggestion,
                    c = { pathname: '/search', query: { q: r, src: x.a.SpellingExpansionRevertClick } }
                  return b.createElement(
                    I.a,
                    { style: N.root },
                    b.createElement(R.b, { weight: 'bold' }, F({ suggestion: n })),
                    b.createElement(
                      R.b,
                      { link: c, onClick: t },
                      b.createElement(H.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, L(r)),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(b.PureComponent),
        N = M.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        })
      function K(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                y()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var U,
        W = function (e) {
          return function (t) {
            return {
              item_type: T.a.ItemType.SEARCH,
              name: 'spelling_'.concat(e),
              description: t.content.spellingResult.text,
              position: 0,
            }
          }
        },
        J = function (e) {
          return {
            items: [
              {
                search_details: { query: e.content.originalQuery },
                query_details: { query_item: e.content.spellingResult.text },
              },
            ],
          }
        },
        Q = function (e) {
          var t = e.actions.scribe,
            r = e.scribeData
          return t(X(X({}, e.scribeNamespace), {}, { action: 'impression' }), r)
        },
        Z = g.g({
          bindActions: function () {
            return { scribe: k.c }
          },
          component: B,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: W('expansion'),
          selectData: Object(j.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              c = r.content
            return {
              onClick: function () {
                return t(X(X({}, n), {}, { element: 'expansion_revert', action: 'search' }), J(r))
              },
              original: c.originalQuery,
              suggestion: c.spellingResult.text,
            }
          },
          onImpression: Q,
        }),
        Y = g.g({
          bindActions: function () {
            return { scribe: k.c }
          },
          component: V,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: W('replacement'),
          selectData: Object(j.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              c = r.content
            return {
              onClick: function () {
                return t(X(X({}, n), {}, { element: 'replacement_revert', action: 'search' }), J(r))
              },
              original: c.originalQuery,
              suggestion: c.spellingResult.text,
            }
          },
          onImpression: Q,
        }),
        G = g.g({
          component: A,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: W('suggestion'),
          selectData: Object(j.a)({}),
          createProps: function (e) {
            return { suggestion: e.entry.content.spellingResult.text }
          },
          onImpression: Q,
        }),
        $ = g.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((U = {}), y()(U, S.Expand, Z), y()(U, S.Replace, Y), y()(U, S.Suggest, G), U),
        })
      function ee(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(r), !0).forEach(function (t) {
                y()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ee(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var re = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return te(
            te(
              {},
              Object(v.a)({
                tweetDismissable: !0,
                displayBlocked: !0,
                shouldStoreTypeaheadItem: t,
                withUserPresence: r,
              }),
            ),
            (function (e) {
              var t,
                r = e.shouldStoreTypeaheadItem
              return (
                (t = {}),
                y()(t, O.b.News, w.a),
                y()(t, O.b.EventSummary, Object(E.a)({ errorContext: 'SEARCH_SCREEN', shouldStoreTypeaheadItem: r })),
                y()(t, O.b.RelatedSearch, C),
                y()(t, O.b.FollowSearch, g.e(g.a())),
                y()(t, O.b.FollowSearchAction, g.e(g.a())),
                y()(t, O.b.Place, g.e(g.a())),
                y()(t, O.b.MomentAnnotation, P.a),
                y()(t, O.b.Spelling, $),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        ne = r('3X8/'),
        ce = r('oQhu'),
        ae = r('EUHl'),
        oe = r('7BdX'),
        ie = r('fTQJ'),
        le = r('i6OR'),
        se = r('FIs5'),
        ue = r('v6aA')
      function pe(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = h()(e)
          if (t) {
            var c = h()(this).constructor
            r = Reflect.construct(n, arguments, c)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var fe = H.a.c09de2d4,
        de = b.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          b.createElement(R.b, { link: '/settings/search' }, H.a.d2918e88),
        ),
        he = H.a.ae111c99,
        me = (function (e) {
          u()(r, e)
          var t = pe(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(l()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case T.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case T.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case T.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              y()(l()(e), '_getModule', function () {
                var t = e.props,
                  r = t.query,
                  n = t.querySrc,
                  c = t.searchFilters,
                  a = t.searchMode,
                  o = t.urtEndpointOptions,
                  i = t.vertical
                return e._getMemoizedModule(r, n, a, c, i, o)
              }),
              y()(l()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  r = t.emptyStateComponent,
                  n = t.query
                return r || b.createElement(se.a, { header: he({ query: n }), message: de })
              }),
              y()(
                l()(e),
                '_getMemoizedModule',
                Object(ce.a)(function (e, t, r, n, c, a) {
                  return Object(le.b)({
                    query: e,
                    searchMode: r,
                    querySource: t,
                    searchFilters: n,
                    vertical: c,
                    urtEndpointOptions: a,
                  })
                }),
              ),
              y()(
                l()(e),
                '_getMemoizedEntryConfiguration',
                Object(ce.a)(function (t) {
                  return re({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
                }),
              ),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  return b.createElement(ie.a, {
                    apiErrorHandlerMap: ne.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: ae.a.CLIENT,
                    prerollDisplayLocation: oe.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: fe,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(b.Component)
      y()(me, 'contextType', ue.a)
      t.a = me
    },
    i6OR: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return h
      })
      var n,
        c = r('KEM+'),
        a = r.n(c),
        o = (r('jQ3i'), r('x4t0'), r('2G9S'), r('IAdD'), r('LW0h'), r('vrRf'), r('z84I'), r('u3ZE')),
        i = r('3IPs'),
        l = r('ZNT5'),
        s = r('eR3e'),
        u = 'search-',
        p = ' near:me',
        f =
          ((n = {}),
          a()(n, i.c.Top, {}),
          a()(n, i.c.Live, { tweet_search_mode: i.c.Live }),
          a()(n, i.c.User, { result_filter: i.c.User }),
          a()(n, i.c.Image, { result_filter: i.c.Image }),
          a()(n, i.c.Video, { result_filter: i.c.Video }),
          n),
        d = function (e) {
          return (function (e) {
            return e === o.a.SpellingCorrectionRevertClick || e === o.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        h = function () {
          return function (e, t) {
            e(
              Object(s.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(u)
                })
                .map(function (e) {
                  return Object(s.g)(e)
                }),
            )
          }
        }
      t.b = function (e) {
        var t = e.query,
          r = e.searchMode,
          n = void 0 === r ? i.c.Top : r,
          c = e.querySource,
          a = e.searchFilters,
          o = e.vertical,
          s = e.urtEndpointOptions,
          h = d(c),
          m = a && a.peopleFilter ? 'searcher_follows' : void 0,
          y = m ? '-pf' : '',
          b = a && a.locationFilter && !t.includes(p) ? ''.concat(t).concat(p) : t,
          g = ''.concat(u).concat(b, '-').concat(n).concat(h).concat(y)
        return Object(l.a)({
          timelineId: g,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == s ? void 0 : s.requestParams,
              { q: b, social_filter: m, vertical: o },
              f[n],
              e,
            )
          },
          context: 'FETCH_SEARCH_TIMELINE',
          perfKey: 'search',
          staleIntervalMs: n === i.c.Live ? 5e3 : void 0,
          timelineType: 'search',
        })
      }
    },
    u3ZE: function (e, t, r) {
      'use strict'
      t.a = {
        AdvancedSearchPage: 'advanced_search_page',
        CashtagClick: 'cashtag_click',
        HashtagClick: 'hashtag_click',
        PromotedTrendClick: 'promoted_trend_click',
        RecentSearchClick: 'recent_search_click',
        SavedSearchClick: 'saved_search_click',
        RelatedQueryClick: 'related_query_click',
        SpellingCorrectionClick: 'spelling_correction_click',
        SpellingCorrectionRevertClick: 'spelling_suggestion_revert_click',
        SpellingExpansionClick: 'spelling_expansion_click',
        SpellingExpansionRevertClick: 'spelling_expansion_revert_click',
        SpellingSuggestionClick: 'spelling_suggestion_click',
        TrendClick: 'trend_click',
        TrendView: 'trend_view',
        TypeaheadClick: 'typeahead_click',
        Typed: 'typed_query',
        TweetDetailQuoteTweet: 'tdqt',
      }
    },
    zgaL: function (e, t, r) {
      'use strict'
      var n = r('ezF+'),
        c =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(211).then(r.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: r('XBtf').a.Critical,
          })
      t.a = n.e(c)
    },
  },
])
//# sourceMappingURL=WIPED
