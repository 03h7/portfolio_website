function U(E, S) {
    (null == S || S > E.length) && (S = E.length);
    for (var A = 0, I = new Array(S); A < S; A++) I[A] = E[A];
    return I
}
var C, M = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(E) {
            var S, A, I, R, N, T, O, L = "",
                U = 0;
            for (E = M._utf8_encode(E); U < E.length;) R = (S = E.charCodeAt(U++)) >> 2, N = (3 & S) << 4 | (A = E.charCodeAt(U++)) >> 4, T = (15 & A) << 2 | (I = E.charCodeAt(U++)) >> 6, O = 63 & I, isNaN(A) ? T = O = 64 : isNaN(I) && (O = 64), L = L + this._keyStr.charAt(R) + this._keyStr.charAt(N) + this._keyStr.charAt(T) + this._keyStr.charAt(O);
            console.log(L)
            return L
        },
        decode: function(E) {
            var S, A, I, R, N, T, O = "",
                L = 0;
            for (E = E.replace(/[^A-Za-z0-9+/=]/g, ""); L < E.length;) S = this._keyStr.indexOf(E.charAt(L++)) << 2 | (R = this._keyStr.indexOf(E.charAt(L++))) >> 4, A = (15 & R) << 4 | (N = this._keyStr.indexOf(E.charAt(L++))) >> 2, I = (3 & N) << 6 | (T = this._keyStr.indexOf(E.charAt(L++))), O += String.fromCharCode(S), 64 != N && (O += String.fromCharCode(A)), 64 != T && (O += String.fromCharCode(I));
            console.log("O : "+O)
            return M._utf8_decode(O)
        },
        _utf8_encode: function(E) {
            E = E.replace(/rn/g, "n");
            for (var S = "", A = 0; A < E.length; A++) {
                var I = E.charCodeAt(A);
                I < 128 ? S += String.fromCharCode(I) : I > 127 && I < 2048 ? (S += String.fromCharCode(I >> 6 | 192), S += String.fromCharCode(63 & I | 128)) : (S += String.fromCharCode(I >> 12 | 224), S += String.fromCharCode(I >> 6 & 63 | 128), S += String.fromCharCode(63 & I | 128))
            }
            console.log("S : "+S)
            return S
        },
        _utf8_decode: function(E) {
            for (var S = "", A = 0, T = I = R = 0; A < E.length;)(T = E.charCodeAt(A)) < 128 ? (S += String.fromCharCode(T), A++) : T > 191 && T < 224 ? (R = E.charCodeAt(A + 1), S += String.fromCharCode((31 & T) << 6 | 63 & R), A += 2) : (R = E.charCodeAt(A + 1), N = E.charCodeAt(A + 2), S += String.fromCharCode((15 & T) << 12 | (63 & R) << 6 | 63 & N), A += 3);
            console.log("S : "+S)
            return S
        }
    }
    
M.decode("UFJJU09OUw==")