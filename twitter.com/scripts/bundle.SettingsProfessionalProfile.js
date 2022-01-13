;(window.webpackJsonp = window.webpackJsonp || []).push([
  [87],
  {
    '6kA7': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'ProfessionalProfileScreen', function () {
          return V
        })
      var o = t('ddV6'),
        a = t.n(o),
        r = (t('ho0z'), t('mC9n')),
        i = t('ERkP'),
        s = t('1YZw'),
        c = t('G6rE'),
        l = t('rxPX'),
        u = t('0KEI'),
        p = Object(l.a)()
          .propsFromState(function () {
            return { loggedInUser: c.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PROFESSIONAL_PROFILE_SCREEN',
              ),
              switchToNonProfessional: c.e.switchToNonProfessional,
              updateProfessionalCategoryDisplay: c.e.updateProfessionalCategoryDisplay,
              updateProfessionalType: c.e.updateProfessionalType,
            }
          })
          .withAnalytics({ page: 'professional_settings' }),
        d = t('jHSc'),
        f = t('3XMw'),
        m = t.n(f),
        b = t('tI3i'),
        y = t.n(b),
        g = t('MWbm'),
        h = t('feu+'),
        L = t('cHvH'),
        w = t('rHpw'),
        C = t('sgih'),
        E = t('/yvb'),
        T = m.a.cfd2f35d,
        D = { actionLabel: m.a.ia492079, secondaryActionLabel: m.a.a9b5e3a9 },
        k = {
          menuItemLabel: m.a.cb55eccd,
          confirmationTitleLabel: m.a.f6c453fb,
          confirmationDescriptionLabel: m.a.a8be809d,
        },
        P = {
          menuItemLabel: m.a.hbb1af08,
          confirmationTitleLabel: m.a.g3f74901,
          confirmationDescriptionLabel: m.a.f3bcfacf,
        },
        S = {
          menuItemLabel: m.a.d0c3f02d,
          confirmationTitleLabel: m.a.a01e84ef,
          confirmationDescriptionLabel: m.a.e8af8ef3,
        },
        v = function (e) {
          var n = e.analytics,
            t = e.onClose,
            o = e.onSwitchToBusinessAccountConfirm,
            s = e.onSwitchToCreatorAccountConfirm,
            c = e.onSwitchToNonProfessionalConfirm,
            l = e.professionalType,
            u = i.useState(!1),
            p = a()(u, 2),
            d = p[0],
            f = p[1],
            m = i.useState(!1),
            b = a()(m, 2),
            y = b[0],
            v = b[1],
            _ = i.useState(!1),
            H = a()(_, 2),
            x = H[0],
            A = H[1],
            B = function (e, n, o) {
              return i.createElement(h.a, {
                actionLabel: D.actionLabel,
                graphicDisplayMode: 'none',
                headline: e,
                isFullHeightOnMobile: !1,
                onAction: o,
                onClose: t,
                onSecondaryAction: t,
                secondaryActionLabel: D.secondaryActionLabel,
                subtext: n,
                withCloseButton: !1,
              })
            },
            z = function () {
              n.scribe(r.j('personal')), f(!0)
            },
            j = function () {
              n.scribe(r.j('creator')), A(!0)
            },
            F = function () {
              n.scribe(r.j('business')), v(!0)
            }
          return i.createElement(L.a, null, function (e) {
            e.windowHeight
            var n = e.windowWidth > w.a.theme.breakpoints.medium
            return i.createElement(
              C.a,
              {
                enableMaskForDismiss: !0,
                onMaskClick: t,
                style: n && I.roundedBorders,
                type: n ? 'center' : 'bottom',
                withMask: !0,
              },
              i.createElement(
                g.a,
                {
                  accessibilityRole: 'dialog',
                  accessibilityState: { modal: !0 },
                  style: [I.root, n && I.centeredContent],
                },
                i.createElement(
                  g.a,
                  { style: I.content },
                  i.createElement(
                    E.a,
                    { onPress: z, size: 'xLarge', style: I.button, type: 'primaryFilled' },
                    k.menuItemLabel,
                  ),
                  'Business' === l
                    ? i.createElement(
                        E.a,
                        { onPress: j, size: 'xLarge', style: I.button, type: 'primaryFilled' },
                        S.menuItemLabel,
                      )
                    : i.createElement(
                        E.a,
                        { onPress: F, size: 'xLarge', style: I.button, type: 'primaryFilled' },
                        P.menuItemLabel,
                      ),
                  i.createElement(E.a, { onPress: t, size: 'xLarge', style: I.button, type: 'primaryOutlined' }, T),
                ),
              ),
              d ? B(k.confirmationTitleLabel, k.confirmationDescriptionLabel, c) : null,
              y ? B(P.confirmationTitleLabel, P.confirmationDescriptionLabel, o) : null,
              x ? B(S.confirmationTitleLabel, S.confirmationDescriptionLabel, s) : null,
            )
          })
        },
        I = w.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, paddingVertical: e.spaces.space12 },
            centeredContent: { width: '100%', flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
            content: { margin: e.spaces.space16 },
            button: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            roundedBorders: { borderRadius: e.borderRadii.xLarge },
          }
        }),
        _ = 'category_label',
        H = 'category_display',
        x = 'switch_account_type',
        A = t('csss'),
        B = t('t62R'),
        z = t('CK8+'),
        j = t('jtO7'),
        F = m.a.e1f76977,
        R = m.a.i0864917,
        O = m.a.cd9102d4,
        M = m.a.d93271e2,
        N = m.a.h26379fe,
        G = m.a.f386777a,
        U = { personal: m.a.db48309f, business: m.a.c701200b, creator: m.a.acd8da09 },
        V = function (e) {
          var n,
            t,
            o = e.addToast,
            s = e.analytics,
            c = e.createLocalApiErrorHandler,
            l = e.history,
            u = e.loggedInUser,
            p = e.switchToNonProfessional,
            f = e.updateProfessionalCategoryDisplay,
            m = e.updateProfessionalType,
            b = i.useState(!1),
            h = a()(b, 2),
            L = h[0],
            w = h[1],
            C = function (e) {
              e.preventDefault(), s.scribe(r.h()), w(!0)
            }
          if (
            (i.useEffect(function () {
              null != u && u.professional && s.scribe(r.e())
            }, []),
            !u)
          )
            return l.push('/login'), null
          if (!u.professional || !u.professional.professional_type)
            return l.goBack({ backLocation: '/settings/profile' }), null
          var E,
            T = null === (n = u.professional.category) || void 0 === n ? void 0 : n[0],
            D = null === (t = null == T ? void 0 : T.display) || void 0 === t || t,
            k = function () {
              s.scribe(r.a())
            },
            P = function () {
              y()(!(null == u || !u.id_str), 'loggedInUser.id_str must be defined'),
                s.scribe(r.d()),
                f(u.id_str, { displayCategory: !D }).catch(c())
            },
            S = function () {
              w(!1)
            },
            I = function () {
              s.scribe(r.i('personal')),
                p(u.id_str)
                  .then(function () {
                    return o({ text: U.personal })
                  })
                  .catch(c()),
                w(!1)
            },
            V = function () {
              s.scribe(r.i('business')),
                m(u.id_str, { professionalType: 'Business' })
                  .then(function () {
                    return o({ text: U.business })
                  })
                  .catch(c()),
                w(!1)
            },
            J = function () {
              s.scribe(r.i('creator')),
                m(u.id_str, { professionalType: 'Creator' })
                  .then(function () {
                    return o({ text: U.creator })
                  })
                  .catch(c()),
                w(!1)
            }
          return i.createElement(
            d.b,
            {
              accessibilityHidden: L,
              backButtonType: 'back',
              history: l,
              onBackClick: function () {
                l.goBack({ backLocation: '/settings/profile' })
              },
              title: F,
            },
            i.createElement(
              g.a,
              { style: W.container },
              i.createElement(A.a, {
                description: null !== (E = null == T ? void 0 : T.name) && void 0 !== E ? E : O,
                label: R,
                link: '/i/flow/update_professional_category',
                onPress: k,
                testID: _,
              }),
              i.createElement(
                g.a,
                { testID: H },
                i.createElement(
                  g.a,
                  { style: W.categoryDisplaySwitchContainer },
                  i.createElement(B.b, { color: 'normal' }, M),
                  i.createElement(z.a, { onValueChange: P, value: D }),
                ),
                i.createElement(
                  g.a,
                  { style: W.categoryDisplayDescriptionContainer },
                  i.createElement(B.b, { color: 'gray700', size: 'subtext2' }, N),
                ),
              ),
              i.createElement(j.a, { align: 'left', color: 'primary', label: G, onPress: C, testID: x }),
              (function () {
                var e
                y()(
                  !(null == u || null === (e = u.professional) || void 0 === e || !e.professional_type),
                  'loggedInUser.professional.professional_type must be defined',
                )
                var n = u.professional.professional_type
                return L
                  ? i.createElement(v, {
                      analytics: s,
                      onClose: S,
                      onSwitchToBusinessAccountConfirm: V,
                      onSwitchToCreatorAccountConfirm: J,
                      onSwitchToNonProfessionalConfirm: I,
                      professionalType: n,
                    })
                  : null
              })(),
            ),
          )
        },
        W = w.a.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            categoryDisplaySwitchContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space8,
            },
            categoryDisplayDescriptionContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space2,
              paddingBottom: e.spaces.space8,
            },
          }
        }),
        J = p(V)
      n.default = J
    },
    jtO7: function (e, n, t) {
      'use strict'
      var o = t('97Jx'),
        a = t.n(o),
        r = t('m3Bd'),
        i = t.n(r),
        s = t('ERkP'),
        c = t('t62R'),
        l = t('I4+6'),
        u = t('cm6r'),
        p = t('rHpw'),
        d = t('MWbm'),
        f = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      n.a = function (e) {
        var n = e.align,
          t = void 0 === n ? 'center' : n,
          o = e.color,
          r = e.label,
          m = i()(e, ['align', 'color', 'label']),
          b = l.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[o],
            insetFocusRing: !0,
          })
        return s.createElement(
          d.a,
          { style: f.container },
          s.createElement(
            u.a,
            a()({}, m, { interactiveStyles: b, style: f.root }),
            s.createElement(c.b, { align: t, color: o }, r),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
