var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'], sum = 0
for ( var i of arr ) {
    if ( !isNaN (parseInt(i))) {
        sum += parseInt(i)
    }
}
alert('sum = ' + sum)



