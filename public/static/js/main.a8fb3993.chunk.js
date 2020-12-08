(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  15(e, t, n) {},
  16(e, t, n) {
    n.r(t); const a = n(0); const c = n(1); const r = n.n(c); const o = n(6); const i = n.n(o); const s = (n(15), n(9)); const l = n(2); const u = `${n.p}static/media/header-logo.c2821b38.svg`; const d = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { className: 'header__logo', src: u, alt: '\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0435\u0440\u0432\u0438\u0441\u0430 Mesto' }) }); }; const m = r.a.createContext(); const j = function (e) {
      const t = r.a.useContext(m); const n = e.card.likes.some(((e) => e._id === t._id)); const c = 'element__like-button '.concat(n ? 'element__like-button_active' : 'element__like-button'); const o = e.card.owner._id === t._id; const i = 'element__delete '.concat(o ? 'element__delete_active' : 'element__delete'); return Object(a.jsx)(a.Fragment, {
        children: Object(a.jsxs)('figure', {
          className: 'element',
          children: [Object(a.jsx)('button', { type: 'button', className: i, onClick() { e.onCardDelete(e.card); } }), Object(a.jsx)('img', {
            className: 'element__image', src: e.card.link, alt: e.card.name, onClick() { e.onCardClick(e.card); },
          }), Object(a.jsxs)('div', { className: 'element__caption-container', children: [Object(a.jsx)('h2', { className: 'element__caption', children: e.card.name }), Object(a.jsxs)('div', { className: 'element__like-area', children: [Object(a.jsx)('button', { type: 'button', className: c, onClick() { e.onCardLike(e.card); } }), Object(a.jsx)('output', { className: 'element__like-numbers', children: e.card.likes.length })] })] })],
        }, e.card._id),
      });
    }; const h = function (e) {
      const t = r.a.useContext(m); return Object(a.jsxs)('main', {
        className: 'content',
        children: [Object(a.jsxs)('section', {
          className: 'profile',
          children: [Object(a.jsx)('div', {
            className: 'profile__avatar-container',
            children: Object(a.jsx)('img', {
              className: 'profile__avatar', src: t.avatar, alt: '\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f', onClick: e.onEditAvatar,
            }),
          }), Object(a.jsxs)('div', { className: 'profile__info', children: [Object(a.jsxs)('div', { className: 'profile__name-edit', children: [Object(a.jsx)('h1', { className: 'profile__name', children: t.name }), Object(a.jsx)('button', { type: 'button', className: 'profile__edit-button', onClick: e.onEditProfile })] }), Object(a.jsx)('p', { className: 'profile__description', children: t.about })] }), Object(a.jsx)('button', { type: 'button', className: 'profile__add-button', onClick: e.onAddPlace })],
        }), Object(a.jsx)('section', {
          className: 'elements',
          children: e.cards.map(((t) => Object(a.jsx)(j, {
            card: t, onCardClick: e.onCardClick, onCardLike: e.onCardLike, onCardDelete: e.onCardDelete,
          }, t._id))),
        })],
      });
    }; const _ = function () { return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsx)('p', { className: 'footer__copyright', children: '\xa9 2020 Mesto Russia' }) }); }; const p = function (e) { return Object(a.jsx)(a.Fragment, { children: Object(a.jsx)('div', { className: 'modal modal_type_picture '.concat(e.card.link && 'modal_is-open'), children: Object(a.jsxs)('div', { className: 'modal__container_type-picture', children: [Object(a.jsx)('button', { type: 'reset', className: 'modal__close-button modal__close-button_type-picture', onClick: e.onClose }), Object(a.jsxs)('figure', { children: [Object(a.jsx)('img', { className: 'modal__image', src: e.card.link, alt: e.card.name }), Object(a.jsx)('figcaption', { className: 'modal__caption', children: e.card.name })] })] }) }) }); }; const f = n(7); const b = n(8); const O = new (function () { function e(t) { Object(f.a)(this, e), this._url = t.url, this._headers = t.headers; } return Object(b.a)(e, [{ key: 'getUserInfo', value() { return fetch(''.concat(this._url, 'users/me'), { method: 'GET', headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject('\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430')))); } }, { key: 'getAllCards', value() { return fetch(''.concat(this._url, 'cards'), { method: 'GET', headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject('\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430')))); } }, { key: 'patchEditProfile', value(e) { const t = e.name; const n = e.description; return fetch(''.concat(this._url, 'users/me'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ name: t, about: n }) }).then(((e) => (e.ok ? e.json() : Promise.reject('\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f')))); } }, { key: 'postCard', value(e) { const t = e.name; const n = e.description; return fetch(''.concat(this._url, 'cards'), { method: 'POST', headers: this._headers, body: JSON.stringify({ name: t, link: n }) }).then(((e) => (e.ok ? e.json() : Promise.reject('\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438')))); } }, { key: 'deleteCard', value(e) { return fetch(''.concat(this._url, 'cards/').concat(e), { method: 'DELETE', headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject('\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438')))); } }, { key: 'putLike', value(e) { return fetch(''.concat(this._url, 'cards/likes/').concat(e), { method: 'PUT', headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject('\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a')))); } }, { key: 'deleteLike', value(e) { return fetch(''.concat(this._url, 'cards/likes/').concat(e), { method: 'DELETE', headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject('\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0443\u0431\u0440\u0430\u0442\u044c \u043b\u0430\u0439\u043a')))); } }, { key: 'changeLikeCardStatus', value(e, t) { return t ? this.putLike(e) : this.deleteLike(e); } }, { key: 'patchChangeAvatar', value(e) { const t = e.avatarName; return fetch(''.concat(this._url, 'users/me/avatar'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ avatar: t }) }).then(((e) => (e.ok ? e.json() : Promise.reject('\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440')))); } }]), e; }())({ url: 'https://mesto.nomoreparties.co/v1/cohort-16/', headers: { authorization: '8105b806-1cac-45d8-8567-2a49d509e437', 'content-type': 'application/JSON' } }); const v = function (e) {
      return Object(a.jsx)(a.Fragment, {
        children: Object(a.jsx)('div', {
          className: 'modal modal_type_'.concat(e.name, ' ').concat(e.isOpen && 'modal_is-open'),
          children: Object(a.jsxs)('form', {
            name: '', action: '#', className: 'modal__container modal__container_type_'.concat(e.name), noValidate: !0, onSubmit: e.onSubmit, children: [Object(a.jsx)('h2', { className: 'modal__title', children: e.title }), e.children, Object(a.jsx)('button', { type: 'submit', className: 'modal__save-button', children: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c' }), Object(a.jsx)('button', { type: 'reset', className: 'modal__close-button', onClick: e.onClose })],
          }),
        }),
      });
    }; const x = function (e) {
      const t = r.a.useState(); const n = Object(l.a)(t, 2); const c = n[0]; const o = n[1]; const i = r.a.useState(); const s = Object(l.a)(i, 2); const u = s[0]; const d = s[1]; const j = r.a.useContext(m); return r.a.useEffect((() => { o(j.name), d(j.about); }), [j]), Object(a.jsxs)(v, {
        isOpen: e.isOpen,
        name: 'edit-profile',
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        onClose: e.onClose,
        onSubmit(t) { t.preventDefault(), e.onUpdateUser({ name: c, description: u }); },
        children: [Object(a.jsx)('input', {
          id: 'name-input', name: 'name', type: 'text', className: 'modal__input modal__input_type_name', required: !0, value: c || '', onChange(e) { o(e.target.value); }, placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f', minLength: '2', maxLength: '40',
        }), Object(a.jsx)('span', { id: 'name-input-error', className: 'modal__input-error' }), Object(a.jsx)('input', {
          id: 'description-input', name: 'description', type: 'text', className: 'modal__input modal__input_type_description', required: !0, value: u || '', onChange(e) { d(e.target.value); }, placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435', minLength: '2', maxLength: '200',
        }), Object(a.jsx)('span', { id: 'description-input-error', className: 'modal__input-error' })],
      });
    }; const C = function (e) {
      const t = r.a.useRef(); return Object(a.jsxs)(v, {
        isOpen: e.isOpen,
        name: 'add-avatar',
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        onClose: e.onClose,
        onSubmit(n) { n.preventDefault(), e.onUpdateAvatar({ avatarName: t.current.value }); },
        children: [Object(a.jsx)('input', {
          ref: t, id: 'avatar-input', name: 'avatarName', type: 'url', className: 'modal__input modal__input_type_url', required: 'required', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
        }), Object(a.jsx)('span', { id: 'avatar-input-error', className: 'modal__input-error' })],
      });
    }; const k = function (e) {
      const t = r.a.useRef(); const n = r.a.useRef(); return Object(a.jsxs)(v, {
        isOpen: e.isOpen,
        name: 'add-element',
        title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
        onClose: e.onClose,
        onSubmit(a) { a.preventDefault(), e.onAddPlace({ name: t.current.value, description: n.current.value }); },
        children: [Object(a.jsx)('input', {
          ref: t, id: 'name-input', name: 'name', type: 'text', className: 'modal__input modal__input_type_place', required: 'required', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', minLength: '1', maxLength: '30',
        }), Object(a.jsx)('span', { id: 'name-input-error', className: 'modal__input-error' }), Object(a.jsx)('input', {
          ref: n, id: 'description-input', name: 'description', type: 'url', className: 'modal__input modal__input_type_url', required: 'required', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
        }), Object(a.jsx)('span', { id: 'description-input-error', className: 'modal__input-error' })],
      });
    }; const g = function () {
      const e = r.a.useState([]); const t = Object(l.a)(e, 2); const n = t[0]; const c = t[1]; const o = r.a.useState(!1); const i = Object(l.a)(o, 2); const u = i[0]; const j = i[1]; const f = r.a.useState(!1); const b = Object(l.a)(f, 2); const v = b[0]; const g = b[1]; const N = r.a.useState(!1); const y = Object(l.a)(N, 2); const P = y[0]; const S = y[1]; const L = r.a.useState([]); const E = Object(l.a)(L, 2); const A = E[0]; const D = E[1]; const T = r.a.useState([]); const U = Object(l.a)(T, 2); const q = U[0]; const F = U[1]; function J() { j(!1), g(!1), S(!1), D([]); } return r.a.useEffect((() => { Promise.all([O.getUserInfo()]).then(((e) => { const t = Object(l.a)(e, 1)[0]; F(t); })).catch(((e) => { console.log(e); })); }), []), r.a.useEffect((() => { Promise.all([O.getAllCards()]).then(((e) => { const t = Object(l.a)(e, 1)[0]; c(t); })).catch(((e) => { console.log(e); })); }), []), Object(a.jsx)(a.Fragment, {
        children: Object(a.jsx)('div', {
          className: 'root',
          children: Object(a.jsx)(m.Provider, {
            value: q,
            children: Object(a.jsxs)('div', {
              className: 'root__content',
              children: [Object(a.jsx)(d, {}), Object(a.jsx)(h, {
                onEditAvatar() { j(!0); }, onEditProfile() { g(!0); }, onAddPlace() { S(!0); }, onCardClick(e) { D(e); }, onCardLike(e) { const t = e.likes.some(((e) => e._id === q._id)); O.changeLikeCardStatus(e._id, !t).then(((t) => { const a = n.map(((n) => (n._id === e._id ? t : n))); c(a); })).catch(((e) => { console.log(e); })); }, onCardDelete(e) { const t = e.owner._id === q._id; O.deleteCard(e._id, t).then((() => { const t = n.filter(((t) => e._id !== t._id)); c(t); })).catch(((e) => { console.log(e); })); }, cards: n,
              }), Object(a.jsx)(_, {}), Object(a.jsx)(C, { isOpen: u, onClose: J, onUpdateAvatar(e) { O.patchChangeAvatar(e).then(((e) => { F(e), J(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(x, { isOpen: v, onClose: J, onUpdateUser(e) { O.patchEditProfile(e).then(((e) => { F(e), J(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(k, { isOpen: P, onClose: J, onAddPlace(e) { O.postCard(e).then(((e) => { c([e].concat(Object(s.a)(n))), J(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(p, { card: A, onClose: J })],
            }),
          }),
        }),
      });
    }; const N = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 17)).then(((t) => { const n = t.getCLS; const a = t.getFID; const c = t.getFCP; const r = t.getLCP; const o = t.getTTFB; n(e), a(e), c(e), r(e), o(e); })); }; i.a.render(Object(a.jsx)(r.a.StrictMode, { children: Object(a.jsx)(g, {}) }), document.getElementById('root')), N();
  },
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.a8fb3993.chunk.js.map
