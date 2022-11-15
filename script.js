$timer = document.getElementById('timer')
$timerStart = document.getElementById('start')
$timerStop = document.getElementById('stop')

let time = 180
let timer

const handleTimeStart = () => {

  timer = setInterval(() => {
    let minute = Math.floor(time / 60)
    let second = Math.floor(time - minute * 60)

    if (minute < 10) minute = "0" + minute
    if (second < 10) second = "0" + second
    if (second === 0) second = "00"

    console.log(`${minute}:${second}`)
    $timer.innerText = `${minute}:${second}`

    // 178 초 = 2분 58초
    // 2분 = 179초 / 60초 의 소수점 버림
    // 58초 = 178초 - 120초

    // 118초 = 1분 58초
    // 1분 = 118초 / 60초 의 소수점 버림
    // 58초 = 118초 - 60초

    // 30초 = 0분 30초
    // 0분 = 30초 / 60초 의 소수점 버림
    // 30초 = 60초 - 30초

    if (time <= 0) {
      alert('입력 시간이 만료되었습니다.')
      clearInterval(timer)
    } else {
      time--
    }

  }, 1000)
}

const handleTimeStop = () => {
  clearInterval(timer)
  $timer.innerText = "00:00"
}

$timerStart.addEventListener('click', handleTimeStart)
$timerStop.addEventListener('click', handleTimeStop)
