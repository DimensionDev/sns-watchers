;(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    '3X8/': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return u
      })
      var n,
        a = r('KEM+'),
        c = r.n(a),
        o = r('k49u'),
        i = r('LVU8'),
        l = r('3XMw'),
        s = r.n(l).a.i1801686,
        u =
          ((n = {}),
          c()(n, o.a.GenericForbidden, { toast: Object(i.a)() }),
          c()(n, o.a.InvalidRequestUrl, { toast: { text: s, withClearButton: !0 } }),
          c()(n, 'showToast', !0),
          n)
    },
    '5Y0Z': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'PlaceScreen', function () {
          return X
        })
      r('uFXj')
      var n = r('ERkP'),
        a = r.n(n),
        c = r('HPNB'),
        o = r('es0u'),
        i =
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
        l = r.n(i),
        s = r('lMB6'),
        u = r('3zvM')
      function d(e, t) {
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
            ? d(Object(r), !0).forEach(function (t) {
                l()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var h = Object(u.f)({ namespace: 'places' }),
        f = Object(u.b)(h, {
          context: 'FETCH_PLACE',
          endpoint: function (e) {
            return e.Places.fetchPlace
          },
        }),
        m = p(p({}, h), f),
        y = s.a.register(m),
        v = r('rxPX'),
        b = r('0KEI'),
        g = function (e, t) {
          return t.match.params.placeId
        },
        O = function (e, t) {
          return y.select(e, g(0, t))
        },
        E = function (e, t) {
          return y.selectFetchStatus(e, g(0, t))
        },
        w = Object(v.a)()
          .propsFromState(function () {
            return { place: O, placeFetchStatus: E, placeId: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('PLACE_SCREEN'),
              fetchPlaceIfNeeded: y.fetchOneIfNeeded,
            }
          }),
        P = r('v//M'),
        _ = r('3XMw'),
        S = r.n(_),
        C = r('JFx8'),
        j = r('yoO3'),
        T = r('h2mu'),
        k = r('3IPs'),
        x = r('VS6U'),
        I = r('MWbm'),
        M = r('G8HL'),
        R = r('/yvb'),
        L = r('t62R'),
        H = r('k/OQ'),
        D = r('cHvH'),
        F = r('rHpw'),
        z = r('7JQg'),
        q = S.a.jaaa8984,
        A = S.a.bab1f8b0,
        K = S.a.add55c97,
        B = S.a.f4a654a3,
        V = function (e) {
          var t = {}
          'foursquare' === e.vendor &&
            (t = (function (e) {
              var t = e.data.venue_id
              return {
                attributionDetails: a.a.createElement(C.a, { style: U.icon }),
                href: 'https://foursquare.com/v/'.concat(t),
                buttonText: B,
              }
            })(e))
          var r = t,
            n = r.attributionDetails,
            c = r.buttonText,
            o = r.href
          return a.a.createElement(
            I.a,
            { style: U.attribution },
            a.a.createElement(I.a, { style: U.attributionDetails }, n),
            a.a.createElement(R.a, { link: o, size: 'xSmall', type: 'brandOutlined' }, c),
          )
        },
        X = function (e) {
          var t = e.createLocalApiErrorHandler,
            r = e.fetchPlaceIfNeeded,
            n = e.history,
            i = e.location,
            l = e.place,
            s = e.placeFetchStatus,
            u = e.placeId,
            d = l ? l.full_name : q
          a.a.useEffect(
            function () {
              r(u).catch(t())
            },
            [t, r, u],
          )
          var p = function () {
              if (!l) return null
              var e = l.attributes,
                t = l.vendor_info,
                r = e.street_address
              return a.a.createElement(
                I.a,
                { style: U.locationDetails },
                a.a.createElement(L.b, { size: 'headline1', weight: 'bold' }, l.full_name),
                r ? a.a.createElement(L.b, { color: 'gray700', size: 'body' }, r) : null,
                t ? V(t) : null,
              )
            },
            h = function () {
              return 'media' === (i.query && i.query.f)
            },
            f = function () {
              var e = [
                { isActive: y, key: A, retainScrollPosition: !1, to: i.pathname, label: A },
                {
                  isActive: h,
                  key: K,
                  retainScrollPosition: !1,
                  to: { query: { f: 'media' }, pathname: i.pathname },
                  label: K,
                },
              ]
              return a.a.createElement(H.a, { links: e })
            },
            m = function () {
              var e = h() ? 'place:'.concat(u, ' filter:media') : 'place:'.concat(u)
              return a.a.createElement(T.a, { query: e, searchMode: k.c.Top })
            },
            y = function () {
              return 'media' !== (i.query && i.query.f)
            }
          return a.a.createElement(
            j.a,
            null,
            a.a.createElement(D.a, null, function (e) {
              var t = e.windowWidth,
                r = c.a.isTwoColumnLayout(t)
              return a.a.createElement(x.a, {
                backLocation: r ? void 0 : '/home',
                documentTitle: d,
                history: n,
                primaryContent: a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    I.a,
                    { style: U.header },
                    a.a.createElement(P.a, { fetchStatus: s, render: p }),
                    f(),
                  ),
                  m(),
                ),
                sidebarContent: a.a.createElement(o.a, null),
                title: r ? null : q,
              })
            }),
          )
        },
        U = F.a.create(function (e) {
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
      t.default = Object(z.c)({ page: 'place' })(w(Object(M.a)(X)))
    },
    JFx8: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r.n(c),
        i = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 158 20' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M1.29 9.333v3.992H0V4.31h3.412c.876 0 1.443.22 1.88.593.54.464.89 1.147.89 1.92 0 .772-.35 1.454-.89 1.918-.437.375-1.004.593-1.88.593H1.29M3.35 8.11c.618 0 .953-.155 1.185-.4.22-.23.36-.54.36-.888s-.142-.657-.36-.888c-.232-.245-.567-.4-1.185-.4H1.29V8.11h2.06zm6.155-.966c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.785-1.996-1.905-1.996S7.6 9.192 7.6 10.3c0 1.107.784 1.996 1.905 1.996zm9.025-5.021l1.662 4.134 1.66-4.134h1.263l-2.46 6.053h-.85l-1.7-4.25-1.7 4.25h-.85l-2.458-6.053h1.262l1.66 4.134 1.66-4.134h.85m6.091 3.284c.065 1.017.903 1.83 1.958 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.315 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258H24.62m.104-1.03h3.297c-.18-.774-.875-1.315-1.596-1.315-.786 0-1.494.528-1.7 1.314zm9.066-1.173c-.143-.04-.284-.052-.477-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.295-.412.926-.824 1.815-.824.13 0 .335.013.476.04l-.14 1.17m1.647 2.203c.064 1.017.902 1.83 1.957 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.314 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.663m.103-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.786 0-1.494.528-1.7 1.314zm10.534 3.244c-.49.438-1.146.682-1.867.682-.54 0-1.108-.154-1.52-.4-.915-.54-1.545-1.544-1.545-2.755 0-1.212.645-2.23 1.56-2.77.41-.245.913-.386 1.48-.386.657 0 1.314.206 1.854.657V4.183h1.223v9.143h-1.185v-.553m-.038-3.606c-.373-.49-.992-.863-1.726-.863-1.172 0-1.945.94-1.945 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm7.815 4.159h-1.185V4.182h1.224v3.62c.54-.452 1.196-.658 1.853-.658.567 0 1.07.142 1.48.386.915.54 1.56 1.558 1.56 2.77 0 1.21-.632 2.214-1.546 2.755-.412.245-.98.4-1.52.4-.72 0-1.378-.245-1.867-.683v.554m.04-1.893c.41.554 1.042.863 1.66.863 1.172 0 2.01-.914 2.01-1.996 0-1.056-.773-1.996-1.946-1.996-.734 0-1.352.374-1.725.863v2.266zm6.296 4.983l1.635-3.72-2.588-5.423h1.313l1.893 3.992 1.74-3.992h1.287l-3.98 9.143h-1.3m39.407-8.563v1.223H96.63v4.25h-1.288V4.31h5.15v1.225H96.63v2.318h2.962m4.223-.709c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.784-1.996-1.905-1.996-1.12 0-1.906.89-1.906 1.996 0 1.107.785 1.996 1.905 1.996zm4.841.143c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.13.953.348 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.648-.384-2.15-1.015m10.25-4.082c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.186v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.144 1.17m1.48 3.362c.567.438 1.185.67 1.79.67.528 0 1.056-.283 1.056-.76 0-.695-1.005-.734-1.893-1.03-.735-.244-1.392-.708-1.392-1.558 0-1.3 1.16-1.893 2.24-1.893.89 0 1.533.283 2.01.67l-.63.876c-.374-.282-.812-.475-1.302-.475-.592 0-1.095.283-1.095.76 0 .412.477.554 1.083.708.953.245 2.202.67 2.202 1.92 0 1.145-1.07 1.853-2.254 1.853-.965 0-1.776-.296-2.446-.837l.632-.904m8.228 1.738c-.54 0-1.108-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.412-.245.914-.386 1.48-.386.684 0 1.34.206 1.894.682v-.553h1.185v9.143h-1.224v-3.62c-.49.427-1.107.658-1.828.658m1.828-4.288c-.373-.49-.99-.863-1.726-.863-1.172 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm3.45 3.272c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.128.953.347 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.647-.384-2.15-1.015m11.333.335c-.49.438-1.146.682-1.867.682-.54 0-1.107-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.413-.245.916-.386 1.482-.386.683 0 1.34.206 1.893.682v-.553h1.185v6.052h-1.185v-.553m-.04-3.606c-.372-.49-.99-.863-1.724-.863-1.17 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm6.232-.81c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.142 1.17m1.905 2.203c.065 1.017.902 1.83 1.957 1.83.903 0 1.392-.44 1.74-.825l.797.76c-.45.58-1.313 1.133-2.55 1.133-1.764 0-3.13-1.34-3.13-3.155 0-1.816 1.237-3.155 2.95-3.155 1.687 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.66m.102-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.785 0-1.493.528-1.7 1.314zM86.48 0H75.813C74.34 0 73.91 1.107 73.91 1.805v16.947c0 .786.42 1.077.658 1.173.237.097.892.177 1.284-.276 0 0 5.105-5.863 5.188-5.954.08-.09.17-.092.22-.092h3.234c1.37 0 1.59-.992 1.732-1.567.12-.48 1.455-7.32 1.9-9.488C88.466.89 88.046 0 86.48 0m-.254 12.037c.12-.48 1.455-7.32 1.9-9.488m-2.275.337l-.447 2.333c-.053.253-.302.49-.596.49l-4.156-.005c-.467 0-.87.352-.87.82v.508c0 .467.38.85.85.85h3.524c.33 0 .608.31.537.663-.07.353-.438 2.216-.48 2.41-.04.192-.246.454-.576.454h-2.878c-.598.02-.726.023-1.077.46-.352.435-3.506 4.222-3.506 4.222-.03.037-.062.026-.062-.014V2.852c0-.298.26-.648.648-.648h8.56c.317 0 .61.296.53.683z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 158, height: 20 }), (t.a = d)
    },
    PH3B: function (e, t, r) {
      'use strict'
      var n,
        a = r('KEM+'),
        c = r.n(a),
        o = r('ezF+'),
        i = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        s = {
          loader: function () {
            return Promise.all([r.e(0), r.e(342)]).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([r.e(0), r.e(344)]).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = o.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), c()(n, i.Cell, s), c()(n, i.PreviewCard, u), n),
      })
    },
    h2mu: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n,
        a = r('VrFO'),
        c = r.n(a),
        o = r('Y9Ll'),
        i = r.n(o),
        l = r('1Pcy'),
        s = r.n(l),
        u = r('5Yy7'),
        d = r.n(u),
        p = r('N+ot'),
        h = r.n(p),
        f = r('AuHH'),
        m = r.n(f),
        y = r('KEM+'),
        v = r.n(y),
        b = (r('2G9S'), r('ERkP')),
        g = r.n(b),
        O = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ezF+')),
        E = r('QIgh'),
        w = r('8UdT'),
        P = r('iu0J'),
        _ = r('zgaL'),
        S = r('PH3B'),
        C = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        j = {
          loader: function () {
            return r.e(226).then(r.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: C.a.Critical,
        },
        T = O.e(j),
        k = (r('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        x = {
          loader: function () {
            return r.e(347).then(r.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: C.a.Critical,
        },
        I = {
          loader: function () {
            return r.e(347).then(r.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: C.a.Critical,
        },
        M = {
          loader: function () {
            return r.e(347).then(r.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: C.a.Critical,
        },
        R = O.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((n = {}), v()(n, k.Expand, x), v()(n, k.Replace, I), v()(n, k.Suggest, M), n),
        })
      function L(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var D = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return H(
            H(
              {},
              Object(E.a)({
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
                v()(t, w.b.News, S.a),
                v()(t, w.b.EventSummary, Object(P.a)({ shouldStoreTypeaheadItem: r })),
                v()(t, w.b.RelatedSearch, T),
                v()(t, w.b.FollowSearch, O.e(O.a())),
                v()(t, w.b.FollowSearchAction, O.e(O.a())),
                v()(t, w.b.Place, O.e(O.a())),
                v()(t, w.b.MomentAnnotation, _.a),
                v()(t, w.b.Spelling, R),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        F = r('3X8/'),
        z = r('oQhu'),
        q = r('EUHl'),
        A = r('7BdX'),
        K = r('fTQJ'),
        B = r('i6OR'),
        V = r('X04g'),
        X = r('t62R'),
        U = r('FIs5'),
        N = r('v6aA'),
        J = r('3XMw'),
        W = r.n(J)
      function Z(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var Q = W.a.c09de2d4,
        Y = g.a.createElement(
          W.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          g.a.createElement(X.b, { link: '/settings/search' }, W.a.d2918e88),
        ),
        G = W.a.ae111c99,
        $ = (function (e) {
          d()(r, e)
          var t = Z(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(s()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case V.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case V.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case V.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              v()(s()(e), '_getModule', function () {
                var t = e.props,
                  r = t.query,
                  n = t.querySrc,
                  a = t.searchFilters,
                  c = t.searchMode,
                  o = t.urtEndpointOptions,
                  i = t.vertical
                return e._getMemoizedModule(r, n, c, a, i, o)
              }),
              v()(s()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  r = t.emptyStateComponent,
                  n = t.query
                return r || g.a.createElement(U.a, { header: G({ query: n }), message: Y })
              }),
              v()(
                s()(e),
                '_getMemoizedModule',
                Object(z.a)(function (e, t, r, n, a, c) {
                  return Object(B.b)({
                    query: e,
                    searchMode: r,
                    querySource: t,
                    searchFilters: n,
                    vertical: a,
                    urtEndpointOptions: c,
                  })
                }),
              ),
              v()(
                s()(e),
                '_getMemoizedEntryConfiguration',
                Object(z.a)(function (t) {
                  return D({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
                }),
              ),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  return g.a.createElement(K.a, {
                    apiErrorHandlerMap: F.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: q.a.CLIENT,
                    prerollDisplayLocation: A.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: Q,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(g.a.Component)
      v()($, 'contextType', N.a)
      t.a = $
    },
    i6OR: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return f
      })
      var n,
        a = r('KEM+'),
        c = r.n(a),
        o = (r('jQ3i'), r('x4t0'), r('2G9S'), r('IAdD'), r('LW0h'), r('vrRf'), r('z84I'), r('u3ZE')),
        i = r('3IPs'),
        l = r('ZNT5'),
        s = r('eR3e'),
        u = 'search-',
        d = ' near:me',
        p =
          ((n = {}),
          c()(n, i.c.Top, {}),
          c()(n, i.c.Live, { tweet_search_mode: i.c.Live }),
          c()(n, i.c.User, { result_filter: i.c.User }),
          c()(n, i.c.Image, { result_filter: i.c.Image }),
          c()(n, i.c.Video, { result_filter: i.c.Video }),
          n),
        h = function (e) {
          return (function (e) {
            return e === o.a.SpellingCorrectionRevertClick || e === o.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        f = function () {
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
          a = e.querySource,
          c = e.searchFilters,
          o = e.vertical,
          s = e.urtEndpointOptions,
          f = h(a),
          m = c && c.peopleFilter ? 'searcher_follows' : void 0,
          y = m ? '-pf' : '',
          v = c && c.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          b = ''.concat(u).concat(v, '-').concat(n).concat(f).concat(y)
        return Object(l.a)({
          timelineId: b,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == s ? void 0 : s.requestParams,
              { q: v, social_filter: m, vertical: o },
              p[n],
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
        a =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(218).then(r.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: r('XBtf').a.Critical,
          })
      t.a = n.e(a)
    },
  },
])
//# sourceMappingURL=WIPED
