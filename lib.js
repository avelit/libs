let area = r => typeof +r === 'number' && +r >= 0 ? Math.PI * Math.pow(r, 2) : null

let startsWithCapitalsAZ = s => /^[A-Z].*/.test(s)

// tests block

const TESTS_NUMBER = 1000
const equal = (actual, expected, message) => {
  if (actual !== expected) {
    console.log(message)
  }
}

const areaTests = _ => {
  equal(area(3), Math.PI * 9, '3')
  equal(area('3'), Math.PI * 9, 'string 3')
  equal(area(-3), null, '-3')
  equal(area(0), 0, '0')
  equal(area(null), null, 'null')
  equal(area(Number.MAX_VALUE), Infinity, 'MAX_VALUE')
  equal(area('radius'), null, 'string not number')
  equal(area(f => f), null, 'function')
}

if (window.performance) {
  const t1 = performance.now()
  for (let i = 0; i < TESTS_NUMBER; i++) {
    areaTests()
  }
  var t2 = performance.now()
  console.log('areaTests performance', t2 - t1)
} else {
  areaTests()
}

const startsWithCapitalsAZTests = _ => {
  equal(startsWithCapitalsAZ(3), false, '3')
  equal(startsWithCapitalsAZ('3'), false, 'string 3')
  equal(startsWithCapitalsAZ('Dr'), true, 'Dr')
  equal(startsWithCapitalsAZ('rDr'), false, 'rDr')
  equal(startsWithCapitalsAZ('Фф'), false, 'russian capital symbol Фф')
  equal(startsWithCapitalsAZ(null), false, 'null')
  equal(startsWithCapitalsAZ(f => f), false, 'function')
}

if (window.performance) {
  const t1 = performance.now()
  for (let i = 0; i < TESTS_NUMBER; i++) {
    startsWithCapitalsAZTests()
  }
  const t2 = performance.now()
  console.log('startsWithCapitalsAZTests performance', t2 - t1)
} else {
  startsWithCapitalsAZTests()
}
