var arr = ['AngularJS', 'jQuery']
arr.splice(0, 0, 'Backbone.js')
arr.push('ReactJS', 'Vue.js')
arr.splice(1, 0, 'CommonJS')
alert(arr.splice(arr.indexOf('jQuery'), 1) + " это здесь лишнее")
var dlyaLyudshix = []
for ( var i of arr ) {
    if ( i === 'Vue.js' ) {
        dlyaLyudshix.push(i)
    }
}