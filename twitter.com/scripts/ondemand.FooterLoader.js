;(window.webpackJsonp = window.webpackJsonp || []).push([
  [211],
  {
    '3Rb8': function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ezF+'),
        a = r('VPAj'),
        o = r('ERkP'),
        i = r.n(o),
        c =
          (r('yH/f'),
          Object.freeze({ Classic: 'Classic', ContextEmphasis: 'ContextEmphasis' }),
          Object.freeze({ Classic: 'Classic', Footnote: 'Footnote', Button: 'Button' })),
        s = r('caTy'),
        l = r('ywYn'),
        u = r('Irs7'),
        d = r('/yvb'),
        m = r('rC8y'),
        b = function (e) {
          var t = e.entry,
            r = (e.feedbackItems, e.isInSidebar),
            n = (e.module, Object(u.b)())
          i.a.useEffect(function () {
            n.scribe({ element: 'footer', action: 'impression' })
          }, [])
          var a = i.a.useCallback(
              function () {
                return n.scribe({ element: 'footer', action: 'click' })
              },
              [n],
            ),
            o = t.content,
            b = o.displayType,
            f = o.landingUrl,
            w = o.text,
            h = o.url,
            v = f || (h && { urlType: l.a.DeepLink, url: h }),
            y = v && Object(s.b)(v)
          switch (b) {
            case c.Button:
              return i.a.createElement(d.a, {
                children: w,
                link: y,
                onPress: a,
                style: p.containerStyle,
                type: 'brandOutlined',
              })
            case c.Classic:
              return i.a.createElement(m.a, { link: y, onPress: a, text: w, withDarkerInteractiveBackground: r })
            default:
              return null
          }
        },
        p = r('rHpw').a.create(function (e) {
          return { containerStyle: { width: '90%', marginVertical: e.spaces.space12, marginHorizontal: 'auto' } }
        }),
        f = i.a.memo(b),
        w = Object(a.a)(!1),
        h = { viewType: 'module_footer' },
        v = { element: 'footer' }
      t.default = function (e) {
        return n
          .b({
            shouldDisplayBorder: e.isInSidebar ? w : void 0,
            component: f,
            defaultScribeNamespace: v,
            isFocusable: Object(a.a)(!0),
            getBehavioralEventContextOverride: function () {
              return h
            },
          })
          .getHandler(function () {
            return e
          })
      }
    },
    rC8y: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('SV7d'),
        a = r('ERkP'),
        o = r.n(a),
        i = r('t62R'),
        c = r('htQn'),
        s = r('rHpw'),
        l = { viewType: 'module_footer' }
      var u = s.a.create(function (e) {
        return {
          root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          withBottomRadius: {
            borderBottomLeftRadius: e.borderRadii.xLarge,
            borderBottomRightRadius: e.borderRadii.xLarge,
          },
        }
      })
      t.a = function (e) {
        var t = e.align,
          r = e.link,
          a = e.onPress,
          s = e.text,
          d = e.weight,
          m = e.withBottomRadius,
          b = e.withDarkerInteractiveBackground
        return o.a.createElement(
          n.a,
          { behavioralEventContext: l },
          o.a.createElement(
            c.a,
            { link: r, onPress: a, style: [u.root, m && u.withBottomRadius], withDarkerInteractiveBackground: b },
            o.a.createElement(i.b, { align: t, color: 'primary', weight: d }, s),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
