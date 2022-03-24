;(window.webpackJsonp = window.webpackJsonp || []).push([
  [212],
  {
    '3Rb8': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        a = n('VPAj'),
        o = n('ERkP'),
        i = n.n(o),
        c =
          (n('yH/f'),
          Object.freeze({ Classic: 'Classic', ContextEmphasis: 'ContextEmphasis' }),
          Object.freeze({ Classic: 'Classic', Footnote: 'Footnote', Button: 'Button' })),
        s = n('caTy'),
        l = n('ywYn'),
        u = n('Irs7'),
        b = n('/yvb'),
        d = n('rC8y'),
        f = function (e) {
          var t = e.entry,
            n = (e.feedbackItems, e.isInSidebar),
            r = (e.module, Object(u.b)())
          i.a.useEffect(function () {
            r.scribe({ element: 'footer', action: 'impression' })
          }, [])
          var a = i.a.useCallback(
              function () {
                return r.scribe({ element: 'footer', action: 'click' })
              },
              [r],
            ),
            o = t.content,
            f = o.displayType,
            m = o.landingUrl,
            y = o.text,
            w = o.url,
            k = m || (w && { urlType: l.a.DeepLink, url: w }),
            v = k && Object(s.b)(k)
          switch (f) {
            case c.Button:
              return i.a.createElement(b.a, {
                children: y,
                link: v,
                onPress: a,
                style: p.containerStyle,
                type: 'brandOutlined',
              })
            case c.Classic:
              return i.a.createElement(d.a, { link: v, onPress: a, text: y, withDarkerInteractiveBackground: n })
            default:
              return null
          }
        },
        p = n('rHpw').a.create(function (e) {
          return { containerStyle: { width: '90%', marginVertical: e.spaces.space12, marginHorizontal: 'auto' } }
        }),
        m = i.a.memo(f),
        y = Object(a.a)(!1),
        w = { viewType: 'module_footer' },
        k = { element: 'footer' }
      t.default = function (e) {
        return r
          .b({
            shouldDisplayBorder: e.isInSidebar ? y : void 0,
            component: m,
            defaultScribeNamespace: k,
            isFocusable: Object(a.a)(!0),
            getBehavioralEventContextOverride: function () {
              return w
            },
          })
          .getHandler(function () {
            return e
          })
      }
    },
  },
])
//# sourceMappingURL=WIPED
