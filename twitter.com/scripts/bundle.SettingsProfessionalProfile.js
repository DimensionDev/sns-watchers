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
        i = (t('ho0z'), t('mC9n')),
        r = t('ERkP'),
        s = t('1YZw'),
        c = t('G6rE'),
        l = t('rxPX'),
        p = t('0KEI'),
        u = Object(l.a)()
          .propsFromState(function () {
            return { loggedInUser: c.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PROFESSIONAL_PROFILE_SCREEN',
              ),
              switchToNonProfessional: c.e.switchToNonProfessional,
              updateProfessionalCategoryDisplay: c.e.updateProfessionalCategoryDisplay,
              updateProfessionalType: c.e.updateProfessionalType,
            }
          })
          .withAnalytics({ page: 'professional_settings' }),
        f = t('jHSc'),
        d = t('3XMw'),
        b = t.n(d),
        m = t('tI3i'),
        y = t.n(m),
        g = t('MWbm'),
        h = t('feu+'),
        L = t('cHvH'),
        w = t('rHpw'),
        C = t('sgih'),
        E = t('/yvb'),
        T = b.a.cfd2f35d,
        D = { actionLabel: b.a.ia492079, secondaryActionLabel: b.a.a9b5e3a9 },
        P = {
          menuItemLabel: b.a.cb55eccd,
          confirmationTitleLabel: b.a.f6c453fb,
          confirmationDescriptionLabel: b.a.a8be809d,
        },
        S = {
          menuItemLabel: b.a.hbb1af08,
          confirmationTitleLabel: b.a.g3f74901,
          confirmationDescriptionLabel: b.a.f3bcfacf,
        },
        I = {
          menuItemLabel: b.a.d0c3f02d,
          confirmationTitleLabel: b.a.a01e84ef,
          confirmationDescriptionLabel: b.a.e8af8ef3,
        },
        k = function (e) {
          var n = e.analytics,
            t = e.onClose,
            o = e.onSwitchToBusinessAccountConfirm,
            s = e.onSwitchToCreatorAccountConfirm,
            c = e.onSwitchToNonProfessionalConfirm,
            l = e.professionalType,
            p = r.useState(!1),
            u = a()(p, 2),
            f = u[0],
            d = u[1],
            b = r.useState(!1),
            m = a()(b, 2),
            y = m[0],
            k = m[1],
            v = r.useState(!1),
            x = a()(v, 2),
            A = x[0],
            H = x[1],
            B = function (e, n, o) {
              return r.createElement(h.a, {
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
              n.scribe(i.j('personal')), d(!0)
            },
            F = function () {
              n.scribe(i.j('creator')), H(!0)
            },
            j = function () {
              n.scribe(i.j('business')), k(!0)
            }
          return r.createElement(L.a, null, function (e) {
            e.windowHeight
            var n = e.windowWidth > w.a.theme.breakpoints.medium
            return r.createElement(
              C.a,
              {
                enableMaskForDismiss: !0,
                onMaskClick: t,
                style: n && _.roundedBorders,
                type: n ? 'center' : 'bottom',
                withMask: !0,
              },
              r.createElement(
                g.a,
                {
                  accessibilityRole: 'dialog',
                  accessibilityState: { modal: !0 },
                  style: [_.root, n && _.centeredContent],
                },
                r.createElement(
                  g.a,
                  { style: _.content },
                  r.createElement(
                    E.a,
                    { onPress: z, size: 'xLarge', style: _.button, type: 'primaryFilled' },
                    P.menuItemLabel,
                  ),
                  'Business' === l
                    ? r.createElement(
                        E.a,
                        { onPress: F, size: 'xLarge', style: _.button, type: 'primaryFilled' },
                        I.menuItemLabel,
                      )
                    : r.createElement(
                        E.a,
                        { onPress: j, size: 'xLarge', style: _.button, type: 'primaryFilled' },
                        S.menuItemLabel,
                      ),
                  r.createElement(E.a, { onPress: t, size: 'xLarge', style: _.button, type: 'primaryOutlined' }, T),
                ),
              ),
              f ? B(P.confirmationTitleLabel, P.confirmationDescriptionLabel, c) : null,
              y ? B(S.confirmationTitleLabel, S.confirmationDescriptionLabel, o) : null,
              A ? B(I.confirmationTitleLabel, I.confirmationDescriptionLabel, s) : null,
            )
          })
        },
        _ = w.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, paddingVertical: e.spaces.space12 },
            centeredContent: { width: '100%', flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
            content: { margin: e.spaces.space16 },
            button: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            roundedBorders: { borderRadius: e.borderRadii.xLarge },
          }
        }),
        v = 'category_label',
        x = 'category_display',
        A = 'switch_account_type',
        H = t('csss'),
        B = t('t62R'),
        z = t('CK8+'),
        F = t('jtO7'),
        j = b.a.e1f76977,
        N = b.a.i0864917,
        O = b.a.cd9102d4,
        R = b.a.d93271e2,
        M = b.a.h26379fe,
        G = b.a.f386777a,
        U = { personal: b.a.db48309f, business: b.a.c701200b, creator: b.a.acd8da09 },
        V = function (e) {
          var n,
            t,
            o = e.addToast,
            s = e.analytics,
            c = e.createLocalApiErrorHandler,
            l = e.history,
            p = e.loggedInUser,
            u = e.switchToNonProfessional,
            d = e.updateProfessionalCategoryDisplay,
            b = e.updateProfessionalType,
            m = r.useState(!1),
            h = a()(m, 2),
            L = h[0],
            w = h[1],
            C = function (e) {
              e.preventDefault(), s.scribe(i.h()), w(!0)
            }
          if (
            (r.useEffect(function () {
              null != p && p.professional && s.scribe(i.e())
            }, []),
            !p)
          )
            return l.push('/login'), null
          if (!p.professional || !p.professional.professional_type)
            return l.goBack({ backLocation: '/settings/profile' }), null
          var E,
            T = null === (n = p.professional.category) || void 0 === n ? void 0 : n[0],
            D = null === (t = null == T ? void 0 : T.display) || void 0 === t || t,
            P = function () {
              s.scribe(i.a())
            },
            S = function () {
              y()(!(null == p || !p.id_str), 'loggedInUser.id_str must be defined'),
                s.scribe(i.d()),
                d(p.id_str, { displayCategory: !D }).catch(c())
            },
            I = function () {
              w(!1)
            },
            _ = function () {
              s.scribe(i.i('personal')),
                u(p.id_str)
                  .then(function () {
                    return o({ text: U.personal })
                  })
                  .catch(c()),
                w(!1)
            },
            V = function () {
              s.scribe(i.i('business')),
                b(p.id_str, { professionalType: 'Business' })
                  .then(function () {
                    return o({ text: U.business })
                  })
                  .catch(c()),
                w(!1)
            },
            J = function () {
              s.scribe(i.i('creator')),
                b(p.id_str, { professionalType: 'Creator' })
                  .then(function () {
                    return o({ text: U.creator })
                  })
                  .catch(c()),
                w(!1)
            }
          return r.createElement(
            f.b,
            {
              accessibilityHidden: L,
              backButtonType: 'back',
              history: l,
              onBackClick: function () {
                l.goBack({ backLocation: '/settings/profile' })
              },
              title: j,
            },
            r.createElement(
              g.a,
              { style: W.container },
              r.createElement(H.a, {
                description: null !== (E = null == T ? void 0 : T.name) && void 0 !== E ? E : O,
                label: N,
                link: '/i/flow/update_professional_category',
                onPress: P,
                testID: v,
              }),
              r.createElement(
                g.a,
                { testID: x },
                r.createElement(
                  g.a,
                  { style: W.categoryDisplaySwitchContainer },
                  r.createElement(B.b, { color: 'normal' }, R),
                  r.createElement(z.a, { onValueChange: S, value: D }),
                ),
                r.createElement(
                  g.a,
                  { style: W.categoryDisplayDescriptionContainer },
                  r.createElement(B.b, { color: 'gray700', size: 'subtext2' }, M),
                ),
              ),
              r.createElement(F.a, { align: 'left', color: 'primary', label: G, onPress: C, testID: A }),
              (function () {
                var e
                y()(
                  !(null == p || null === (e = p.professional) || void 0 === e || !e.professional_type),
                  'loggedInUser.professional.professional_type must be defined',
                )
                var n = p.professional.professional_type
                return L
                  ? r.createElement(k, {
                      analytics: s,
                      onClose: I,
                      onSwitchToBusinessAccountConfirm: V,
                      onSwitchToCreatorAccountConfirm: J,
                      onSwitchToNonProfessionalConfirm: _,
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
        J = u(V)
      n.default = J
    },
  },
])
//# sourceMappingURL=WIPED
