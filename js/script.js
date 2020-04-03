// JS Array

// const facture = [
//     {ref: 'PCM', prix: 6000.00, qte: 5},
//     {ref: 'XDP', prix: 5600.00, qte: 2},
//     {ref: 'DVD', prix: 300.00, qte: 9},
//     {ref: 'KLM', prix: 3000.00, qte: 7},
//     {ref: 'PVC', prix: 1200.00, qte: 5},
// ]
//console.log('tableau initial ', facture)

const series = [30, 49, 10, 68, 69, 30, 80, 90, 24, 60]

const nombres = [2, -7, 8, 90, 67]
console.log(nombres)  

const container = document.querySelector('.container')

series.forEach(e => {
    const div = document.createElement('div')
    div.style.height = 2 * e + 'px'
    container.appendChild(div)
})

setInterval(() => {
    series.shift();
    series.push(Math.round(Math.random()*90) + 10)
    update()
}, 1000);
function update() {
    const divs = document.querySelectorAll('.container div')
    series.forEach((e, i) => {
        divs[i].style.height = 2 * e + 'px'
    })
}

/////////////////////////////////////////////////
//           Array.reduce()
/////////////////////////////////////////////////

// const somme = nombres.reduce( (acc, e) => acc + e, 0)

// console.log(somme)
// Array.prototype.myReduce = function(fn, initialValue) {
//     let acc = initialValue
//     this.forEach((v) => acc = fn(acc, v))
//     return acc
// }
// const somme1 = nombres.myReduce( (acc, e) => acc + e, 0)

// console.log('somme1', somme1)

// const total = facture.reduce( (acc, e) => acc + e.prix * e.qte, 0)

// console.log('total', total)

// const total1 = facture.myReduce( (acc, e) => acc + e.prix * e.qte, 0)

// console.log('total1', total1)

// const tab = nombres.reduce((acc, v) => [v, ...acc], [])

// console.log("reverted ", tab)

// // g(f(x)) => f | g  => g o f

// const f = x => x * x
// const g = x => 2 * x
// const h = x => {console.log('Valeur calculée : ', x); return x}

// // pipe(f, g, h)(5)

// const pipe = (...fns) => (x0) => fns.reduceRight((x, f) => f(x), x0)

// pipe(h, f, g, h)(4)




/////////////////////////////////////////////////
//           Array.filter()
/////////////////////////////////////////////////
// //
// const ret = nombres.filter(e => e > 0)
// console.log('ret', ret)

// Array.prototype.myFilter = function(fn = _ => true) {
//     const ret = []
//     this.forEach(e => { if(fn(e)) ret.push(e)})
//     return ret
// }

// const ret1 = nombres.myFilter()
// console.log('ret1', ret1)
//
////////////////////////////////////////////////

/////////////////////////////////////////////////
//           Array.map()
/////////////////////////////////////////////////
//
// const f = x => x
//
// const proj =  nombres.map(f)
//
// console.log(proj)
//
// Array.prototype.myMap = function(fn = x => x){
//     const ret = []
//     this.forEach((e, i, t) => {
//         ret.push(fn(e, i, t))
//     })
//     return ret
// } 
// const refs = facture.myMap()
// console.log(refs)
//
/////////////////////////////////////////////////


/////////////////////////////////////////////////
//          Array.forEach()
/////////////////////////////////////////////////
//
// Array.prototype.forEach = function (fn) {
//     for(let i=0; i<this.length; i++) 
//         fn(this[i], i, this)
// }
//
// const log = (v) => console.logValues(v)
//
// nombres.each(console.log)
// nombres.each(log)
//
/////////////////////////////////////////////////














