;(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    '2MR/': function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        l = a('3XMw'),
        c = a.n(l),
        s = a('v302'),
        u = c.a.b05a39b2,
        d = c.a.c566d3a5,
        m = function (e) {
          return i.a.createElement(s.a, e)
        },
        b = function (e) {
          var t = e.children,
            a = e.hideLabel,
            n = void 0 === a ? d : a,
            o = e.label,
            l = e.lang,
            c = e.render,
            s = void 0 === c ? m : c,
            b = e.revealLabel,
            p = void 0 === b ? u : b,
            f = i.a.useState(!1),
            y = r()(f, 2),
            w = y[0],
            h = y[1]
          return s({
            actionText: w ? n : p,
            children: w ? t : o,
            lang: l,
            onActionClick: function () {
              return h(!w)
            },
          })
        }
      ;(b.displayName = 'TweetDisclosure'), (t.a = b)
    },
    sjuR: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('97Jx'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        l = a('jHSc'),
        c = a('3XMw'),
        s = a.n(c),
        u = a('Ty5D'),
        d = a('MWbm'),
        m = a('/yvb'),
        b = a('pjBI'),
        p = a('t62R'),
        f = a('2MR/'),
        y = a('v302'),
        w = a('rHpw'),
        h = s.a.e37836f8,
        v = s.a.ccf2f24e,
        g = s.a.a78f7bd9,
        E = s.a.d7b32a4d,
        k = s.a.b772cd65,
        C = 'gray700',
        R = function (e) {
          return i.a.createElement(
            m.a,
            {
              disabled: !1,
              onPress: function () {
                return e.goBack()
              },
              size: 'small',
              type: 'primaryFilled',
            },
            k,
          )
        },
        z = w.a.create(function (e) {
          return {
            root: { flexShrink: 1, flexGrow: 1, paddingBottom: e.spaces.space32 },
            parentContainer: { alignItems: 'center' },
            innerContainer: { marginHorizontal: e.spaces.space72, alignItems: 'left' },
            tombstone: { border: 'none', marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space20 },
          }
        })
      t.default = function () {
        var e = Object(u.g)()
        return i.a.createElement(
          l.b,
          {
            backButtonType: 'close',
            containerStyle: z.root,
            documentTitle: h,
            history: e,
            rightControl: R(e),
            title: h,
          },
          i.a.createElement(
            d.a,
            { style: z.parentContainer },
            i.a.createElement(
              d.a,
              { style: z.innerContainer },
              i.a.createElement(
                b.a,
                { color: C },
                i.a.createElement(p.b, { color: C, weight: 'bold' }, v),
                i.a.createElement(p.b, { color: C }, 'Date'),
              ),
              i.a.createElement(
                p.b,
                { size: 'title3', weight: 'heavy' },
                'We received your report for hateful conduct',
              ),
              i.a.createElement(
                f.a,
                {
                  label: g,
                  render: function (e) {
                    return i.a.createElement(y.a, r()({}, e, { style: z.tombstone }))
                  },
                },
                'Revealed Sensitive Content',
              ),
              i.a.createElement(p.b, { size: 'headline2', weight: 'heavy' }, E),
              i.a.createElement(
                p.b,
                { color: C, size: 'subtext2', weight: 'normal' },
                "Our team will review your report as soon as they can. In many cases we'll notify you if we found a rule violation and the actions we're taking as a result. If we don't take action on this report or respond to you directly, please know we take your feedback seriously.",
              ),
            ),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
